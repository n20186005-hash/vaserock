// =============================================================================
// Cloudflare Workers 入口（Workers Static Assets 模式）
//
// 职责：
//   1. 重定向逻辑（www -> apex 域名跳转、自定义 301/302 重定向）
//   2. 动态 / API 路由（原 functions/api/weather.js 迁移至此）
//   3. 通过 env.ASSETS.fetch(request) 回源获取静态资源
//   4. 统一注入安全响应头与 /_astro/ 资源的长期缓存头
//
// 旧的 Cloudflare Pages Functions（functions/ 目录）已废弃并删除。
// =============================================================================

const WEATHER_API = "https://api.open-meteo.com/v1/forecast";

const VASE_ROCK = {
  latitude: 22.3556469,
  longitude: 120.3807532,
  fullName: "花瓶岩（Vase Rock）",
  timezone: "Asia/Taipei"
};

// -----------------------------------------------------------------------------
// 自定义重定向（301 默认 / 可指定 302）。按需在此扩充。
// 注意：仅使用相对路径或绝对 URL，避免部署期 "Only relative URLs are allowed" 错误。
// -----------------------------------------------------------------------------
const REDIRECTS = {
  // "/old-path/": { to: "https://vaserock.com/new-path/", status: 301 },
};

// -----------------------------------------------------------------------------
// URL 规范化：trailing slash
// Astro 静态产物为 /<slug>/index.html，canonical 与 site.url 一律带斜杠，
//  // 因此将无尾斜杠的非根路径统一 301 至有尾斜杠版本。
// -----------------------------------------------------------------------------
function shouldForceTrailingSlash(pathname) {
  if (pathname === "/" || pathname.startsWith("/_") || pathname.startsWith("/api/")) {
    return false;
  }
  if (pathname === "" || pathname === "/index.html") return false;
  if (pathname.includes(".") || pathname.includes("?")) return false;
  return !pathname.endsWith("/");
}

// -----------------------------------------------------------------------------
// 天气接口逻辑（与 src/data/weather.ts 的输出结构保持一致）
// -----------------------------------------------------------------------------
const WEATHER_DESCRIPTIONS = {
  0: ["晴朗", "☀️"],
  1: ["大致晴朗", "🌤️"],
  2: ["局部多雲", "⛅"],
  3: ["陰天", "☁️"],
  45: ["有霧", "🌫️"],
  48: ["霧淞", "🌫️"],
  51: ["細雨", "🌦️"],
  53: ["細雨", "🌦️"],
  55: ["較強細雨", "🌧️"],
  56: ["凍毛雨", "🌧️"],
  57: ["凍毛雨", "🌧️"],
  61: ["小雨", "🌦️"],
  63: ["中雨", "🌧️"],
  65: ["大雨", "🌧️"],
  66: ["凍雨", "🌧️"],
  67: ["凍雨", "🌧️"],
  71: ["小雪", "🌨️"],
  73: ["降雪", "🌨️"],
  75: ["大雪", "❄️"],
  77: ["霰", "🌨️"],
  80: ["短暫陣雨", "🌦️"],
  81: ["陣雨", "🌧️"],
  82: ["強陣雨", "⛈️"],
  85: ["陣雪", "🌨️"],
  86: ["強陣雪", "🌨️"],
  95: ["雷雨", "⛈️"],
  96: ["雷雨伴隨冰雹", "⛈️"],
  99: ["強雷雨伴隨冰雹", "⛈️"]
};

function describeWeather(code, isDay = true) {
  const entry = WEATHER_DESCRIPTIONS[code] ?? ["天氣變化", "🌤️"];
  if (!isDay && code <= 1) return [entry[0], "🌙"];
  return entry;
}

function requiredNumber(value, field) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new Error(`Invalid weather field: ${field}`);
  }
  return value;
}

function dayLabel(date, index) {
  if (index === 0) return "今天";
  if (index === 1) return "明天";
  return new Intl.DateTimeFormat("zh-TW", {
    weekday: "short",
    timeZone: VASE_ROCK.timezone
  }).format(new Date(`${date}T00:00:00+08:00`));
}

function formatTimeOnly(iso) {
  if (!iso) return "—";
  const match = iso.match(/T(\d{2}):(\d{2})/);
  return match ? `${match[1]}:${match[2]}` : iso;
}

/**
 * 与 src/data/weather.ts 中的 buildAdvice 完全镜像。
 */
function buildAdvice({ current, today, sunrise, sunset }) {
  const alerts = [];
  const dress = [];
  const plan = [];
  const gear = [];
  const coastal = [];

  // 雷雨
  if ([82, 95, 96, 99].includes(current.weatherCode)) {
    alerts.push({
      severity: "warning",
      title: "雷雨警报",
      text: "请远离海边礁石、空旷地与树下；不要下水、不要登山，及时到室内躲避。"
    });
  }

  // 大风
  if (today.maxWindGust >= 50) {
    alerts.push({
      severity: "warning",
      title: "強風警告",
      text: "海边浪况不稳，远离礁石与广告牌；海上活动与户外设施可能停摆。"
    });
  } else if (today.maxWindGust >= 35) {
    alerts.push({
      severity: "watch",
      title: "海面风浪偏大",
      text: "到礁石区拍照请加倍小心，避免在湿滑岩面长时间逗留。"
    });
  }

  // 极端 UV
  if (today.uvIndexMax >= 11) {
    alerts.push({
      severity: "warning",
      title: "極端紫外線",
      text: "户外曝晒 15 分鐘就可能晒伤；建议改为清晨或傍晚户外活动。"
    });
  }

  // 强降雨
  if (today.precipitationProbability >= 70 || today.precipitationSum >= 25) {
    alerts.push({
      severity: "watch",
      title: "强降雨概率高",
      text: "低洼路段可能短暂积水，沿海步道湿滑，建议调整为室内或港边活动。"
    });
  }

  // 大雾
  if ([45, 48].includes(current.weatherCode)) {
    alerts.push({
      severity: "watch",
      title: "能見度差",
      text: "船班可能延迟，跨海交通以现场公告为准；不适合远眺拍照。"
    });
  }

  // 穿搭
  if (today.maxTemperature >= 32) {
    dress.push("天气炎热，建议穿透气浅色衣物；正午时段避免直接暴晒。");
  } else if (today.maxTemperature >= 28) {
    dress.push("气候温暖舒适，适合轻薄夏装。");
  } else if (today.maxTemperature >= 22) {
    dress.push("温暖宜人，长袖或薄外套即可。");
  } else {
    dress.push("气温偏低，建议携带外套；海风明显时体感更凉。");
  }

  const tempRange = today.maxTemperature - today.minTemperature;
  if (tempRange > 8) {
    dress.push("昼夜温差较大，准备一件方便穿脱的外套。");
  }

  if (
    today.precipitationProbability >= 60 ||
    [55, 57, 61, 63, 65, 80, 81, 82].includes(current.weatherCode)
  ) {
    dress.push("有降雨可能，避免棉质衣物；快干材质更舒服。");
  }

  // 游玩
  if (today.precipitationProbability >= 60) {
    plan.push("下雨概率高，户外行程建议延后或改为室内场馆。");
  } else if (today.precipitationProbability >= 40) {
    plan.push("可能有阵雨，安排可弹性调整的行程。");
  }

  if (today.maxTemperature >= 32 || today.uvIndexMax >= 8) {
    plan.push("高温或强紫外线时段，建议清晨或傍晚再走海岸线；正午留在阴凉处休息。");
  }

  if (current.weatherCode === 2 || current.weatherCode === 3) {
    plan.push("光线柔和均匀，没有强光斑，很适合拍照与长时间户外活动。");
  }

  if ([0, 1].includes(current.weatherCode) && sunrise && sunset) {
    plan.push(`天气晴好，可考虑看日出（${formatTimeOnly(sunrise)}）或日落（${formatTimeOnly(sunset)}）。`);
  }

  if (today.maxWindGust >= 40) {
    plan.push("海边浪较大，浮潜与水上活动可能停办；海岸观景请勿靠近浪溅区。");
  }

  if ([82,95,96,99].includes(current.weatherCode)) {
    plan.push("雷雨期间不适合户外活动，请改在白沙港周边、室内展馆或餐厅。");
  } else if ([45, 48].includes(current.weatherCode)) {
    plan.push("能見度不佳，不适合登高远眺或拍摄海岸景观。");
  }

  if (plan.length === 0) {
    plan.push("天气稳定，可依原本计划前往花瓶岩与周边海岸。");
  }

  // 装备
  if (today.uvIndexMax >= 5 || today.maxTemperature >= 28) {
    gear.push("防晒霜、墨镜、遮阳帽或薄长袖");
  }

  if (
    today.precipitationProbability >= 60 ||
    [55, 57, 61, 63, 65, 80, 81, 82, 95, 96, 99].includes(current.weatherCode)
  ) {
    gear.push("折叠雨伞或轻便雨衣");
  }

  if (today.maxWindGust >= 35 && today.precipitationProbability >= 40) {
    gear[gear.length - 1] = "雨衣（不建议长柄伞，风大易折）";
  }

  if (today.maxTemperature >= 28 || today.uvIndexMax >= 6) {
    gear.push("充足饮用水（每人至少 1.5L）");
  }

  if (today.maxWindGust < 50 && today.precipitationProbability < 60) {
    gear.push("防滑凉鞋或礁石鞋，方便踩进潮池与浅滩");
  }

  if (tempRange > 8) {
    gear.push("薄外套（防海风与早晚温差）");
  }

  // 海边专属
  if (today.maxWindGust >= 40 || [82, 95, 96, 99].includes(current.weatherCode)) {
    coastal.push("今日风浪偏大，不建议浮潜、潜水或下水；岸边拍照也请避开浪溅区。");
  } else if (today.precipitationProbability >= 70) {
    coastal.push("下雨天水质浑浊，能见度差；想下水可改去有遮蔽的潮池。");
  } else if (today.uvIndexMax >= 8) {
    coastal.push("阳光强烈，下水请穿防 UV 衣物或水母衣，避免长时间浮在水面上暴晒。");
  } else {
    coastal.push("海况稳定，可依现场告示牌评估是否下水；建议有合格教练陪同。");
  }

  if (today.maxWindGust >= 30) {
    coastal.push("礁石区湿滑，拍照请勿背向海面，并避免攀爬湿岩。");
  }

  coastal.push("想赶海或下水，请先查花瓶岩潮汐表；珊瑚礁海域留 2 小时缓冲避开最低潮前后。");

  if (!current.isDay) {
    coastal.push("夜间海岸视野差，请勿靠近礁石；绿蠵龟孵化区夜间禁止强光与噪音。");
  }

  // 综合等级
  let level = "good";
  if (alerts.some((a) => a.severity === "warning")) level = "avoid";
  else if (
    alerts.some((a) => a.severity === "watch") ||
    today.uvIndexMax >= 8 ||
    today.maxWindGust >= 35 ||
    today.maxTemperature >= 32
  ) {
    level = "watch";
  }

  // headline
  const headlineParts = [];
  if (today.precipitationProbability >= 60) headlineParts.push("降雨概率高");
  else if (current.weatherCode <= 1) headlineParts.push("晴朗穩定");
  else if ([2, 3].includes(current.weatherCode)) headlineParts.push("多雲陰天");
  else headlineParts.push(today.condition);

  if (today.uvIndexMax >= 8) headlineParts.push("紫外線強");
  if (today.maxWindGust >= 35) headlineParts.push("風偏大");
  if (today.maxTemperature >= 32) headlineParts.push("高溫");
  if (today.maxTemperature < 18) headlineParts.push("偏涼");

  return {
    level,
    headline: headlineParts.slice(0, 3).join("，"),
    dress,
    plan,
    gear,
    alerts,
    coastal
  };
}

function normalizeWeather(raw) {
  if (!raw?.current || !raw?.daily || !Array.isArray(raw.daily.time)) {
    throw new Error("Incomplete weather response");
  }

  const currentCode = requiredNumber(raw.current.weather_code, "current.weather_code");
  const isDay = raw.current.is_day === 1;
  const [currentCondition, currentIcon] = describeWeather(currentCode, isDay);

  const totalDays = Math.min(raw.daily.time.length, 7);
  const daily = raw.daily.time.slice(0, totalDays).map((date, index) => {
    const code = requiredNumber(raw.daily.weather_code?.[index], `daily.weather_code.${index}`);
    const [condition, icon] = describeWeather(code, true);

    return {
      date,
      label: dayLabel(date, index),
      weatherCode: code,
      condition,
      icon,
      maxTemperature: requiredNumber(
        raw.daily.temperature_2m_max?.[index],
        `daily.temperature_2m_max.${index}`
      ),
      minTemperature: requiredNumber(
        raw.daily.temperature_2m_min?.[index],
        `daily.temperature_2m_min.${index}`
      ),
      precipitationProbability: requiredNumber(
        raw.daily.precipitation_probability_max?.[index],
        `daily.precipitation_probability_max.${index}`
      ),
      precipitationSum: requiredNumber(
        raw.daily.precipitation_sum?.[index] ?? 0,
        `daily.precipitation_sum.${index}`
      ),
      maxWindSpeed: requiredNumber(
        raw.daily.wind_speed_10m_max?.[index] ?? 0,
        `daily.wind_speed_10m_max.${index}`
      ),
      maxWindGust: requiredNumber(
        raw.daily.wind_gusts_10m_max?.[index] ?? 0,
        `daily.wind_gusts_10m_max.${index}`
      ),
      uvIndexMax: requiredNumber(
        raw.daily.uv_index_max?.[index] ?? 0,
        `daily.uv_index_max.${index}`
      )
    };
  });

  if (daily.length < 1) throw new Error("Forecast unavailable");

  const current = {
    weatherCode: currentCode,
    isDay,
    condition: currentCondition,
    icon: currentIcon,
    temperature: requiredNumber(raw.current.temperature_2m, "current.temperature_2m"),
    apparentTemperature: requiredNumber(
      raw.current.apparent_temperature,
      "current.apparent_temperature"
    ),
    windSpeed: requiredNumber(raw.current.wind_speed_10m, "current.wind_speed_10m"),
    windDirection: requiredNumber(
      raw.current.wind_direction_10m ?? 0,
      "current.wind_direction_10m"
    ),
    humidity: requiredNumber(raw.current.relative_humidity_2m, "current.relative_humidity_2m"),
    uvIndex: requiredNumber(raw.current.uv_index ?? 0, "current.uv_index"),
    pressure: requiredNumber(
      raw.current.surface_pressure ?? 1013,
      "current.surface_pressure"
    )
  };

  const sunrise = String(raw.daily.sunrise?.[0] ?? "");
  const sunset = String(raw.daily.sunset?.[0] ?? "");

  const advice = buildAdvice({ current, today: daily[0], sunrise, sunset });

  return {
    location: VASE_ROCK.fullName,
    updatedAt: `${raw.current.time}:00+08:00`,
    source: {
      name: "Open-Meteo",
      url: "https://open-meteo.com/"
    },
    current,
    today: daily[0],
    daily,
    sunrise,
    sunset,
    advice
  };
}

function upstreamUrl() {
  const url = new URL(WEATHER_API);
  url.searchParams.set("latitude", VASE_ROCK.latitude.toString());
  url.searchParams.set("longitude", VASE_ROCK.longitude.toString());
  url.searchParams.set(
    "current",
    "temperature_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,relative_humidity_2m,is_day,uv_index,surface_pressure"
  );
  url.searchParams.set(
    "daily",
    "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,precipitation_sum,wind_speed_10m_max,wind_gusts_10m_max,uv_index_max,sunrise,sunset"
  );
  url.searchParams.set("timezone", VASE_ROCK.timezone);
  url.searchParams.set("forecast_days", "7");
  return url;
}

async function handleWeather(request, ctx) {
  const requestUrl = new URL(request.url);
  const cacheKey = new Request(`${requestUrl.origin}${requestUrl.pathname}`, { method: "GET" });
  const cache = caches.default;
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  try {
    const upstream = await fetch(upstreamUrl(), {
      headers: { Accept: "application/json" }
    });
    if (!upstream.ok) throw new Error(`Weather API returned ${upstream.status}`);

    const weather = normalizeWeather(await upstream.json());
    const response = Response.json(weather, {
      headers: {
        "Cache-Control": "public, max-age=900",
        "X-Content-Type-Options": "nosniff"
      }
    });

    ctx.waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  } catch (error) {
    console.error(
      JSON.stringify({
        message: "weather request failed",
        error: error instanceof Error ? error.message : String(error),
        path: requestUrl.pathname
      })
    );

    return Response.json(
      { error: "weather_unavailable" },
      {
        status: 502,
        headers: {
          "Cache-Control": "no-store",
          "X-Content-Type-Options": "nosniff"
        }
      }
    );
  }
}

// -----------------------------------------------------------------------------
// 安全响应头 + /_astro/ 长期缓存头注入
// -----------------------------------------------------------------------------
function applySecurityHeaders(response, pathname) {
  const newResponse = new Response(response.body, response);
  const headers = newResponse.headers;

  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("X-Frame-Options", "SAMEORIGIN");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );
  headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self' https:",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join("; ")
  );

  // Astro 构建产物：哈希命名，可永久缓存
  if (pathname.startsWith("/_astro/")) {
    headers.set("Cache-Control", "public, max-age=31536000, immutable");
  }

  return newResponse;
}

// -----------------------------------------------------------------------------
// 请求入口
// -----------------------------------------------------------------------------
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. 重定向：www -> apex（301）
    if (url.host.startsWith("www.")) {
      url.host = url.host.slice(4);
      return Response.redirect(url.toString(), 301);
    }

    // 1a. 协议规范化：http -> https（301）
    if (url.protocol === "http:") {
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    // 1b. Trailing slash 规范化：/foo -> /foo/（301，仅 GET HEAD）
    if (
      request.method === "GET" &&
      shouldForceTrailingSlash(url.pathname)
    ) {
      url.pathname = `${url.pathname}/`;
      return Response.redirect(url.toString(), 301);
    }

    // 1c. 自定义重定向
    const custom = REDIRECTS[url.pathname];
    if (custom) {
      return Response.redirect(custom.to, custom.status ?? 301);
    }

    // 2. 动态 / API 路由
    if (url.pathname === "/api/weather" && request.method === "GET") {
      return handleWeather(request, env, ctx);
    }

    // 3. 静态资源（由 ASSETS 绑定回源；找不到时返回其 404）
    const response = await env.ASSETS.fetch(request);

    // 4. 注入安全头与缓存头
    return applySecurityHeaders(response, url.pathname);
  }
};
