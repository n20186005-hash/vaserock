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

// -----------------------------------------------------------------------------
// 自定义重定向（301 默认 / 可指定 302）。按需在此扩充。
// 注意：仅使用相对路径或绝对 URL，避免部署期 "Only relative URLs are allowed" 错误。
// -----------------------------------------------------------------------------
const REDIRECTS = {
  // "/old-path/": { to: "https://vaserock.com/new-path/", status: 301 },
};

// -----------------------------------------------------------------------------
// 天气接口逻辑（从 functions/api/weather.js 迁移）
// -----------------------------------------------------------------------------
const weatherDescriptions = {
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
  const [condition, icon] = weatherDescriptions[code] ?? ["天氣變化", "🌤️"];
  if (!isDay && code <= 1) return [condition, "🌙"];
  return [condition, icon];
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
    timeZone: "Asia/Taipei"
  }).format(new Date(`${date}T00:00:00+08:00`));
}

function weatherAdvice(currentCode, today) {
  const severeWeather = [82, 95, 96, 99].includes(currentCode);

  if (severeWeather || today.precipitationProbability >= 70 || today.maxWindGust >= 55) {
    return {
      level: "avoid",
      title: "海岸天氣風險偏高",
      text: "有雷雨、強降雨或強陣風可能，建議延後行程，並遠離水邊與空曠海岸。"
    };
  }

  if (
    today.precipitationProbability >= 40 ||
    today.maxWindGust >= 35 ||
    today.maxTemperature >= 34
  ) {
    return {
      level: "watch",
      title: "今天需要保守安排",
      text: "留意陣雨、強風或高溫，縮短停留時間並準備雨具、飲水與防曬用品。"
    };
  }

  return {
    level: "good",
    title: "天氣條件相對穩定",
    text: "仍請確認潮位、浪況與現場警示；天氣預報不代表海況一定安全。"
  };
}

function normalizeWeather(raw) {
  if (!raw?.current || !raw?.daily || !Array.isArray(raw.daily.time)) {
    throw new Error("Incomplete weather response");
  }

  const currentCode = requiredNumber(raw.current.weather_code, "current.weather_code");
  const [currentCondition, currentIcon] = describeWeather(
    currentCode,
    raw.current.is_day === 1
  );

  const daily = raw.daily.time.slice(0, 3).map((date, index) => {
    const code = requiredNumber(raw.daily.weather_code?.[index], `daily.weather_code.${index}`);
    const [condition, icon] = describeWeather(code);

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
      maxWindGust: requiredNumber(
        raw.daily.wind_gusts_10m_max?.[index],
        `daily.wind_gusts_10m_max.${index}`
      )
    };
  });

  if (daily.length < 3) throw new Error("Three-day forecast unavailable");

  return {
    location: "花瓶岩",
    updatedAt: `${raw.current.time}:00+08:00`,
    source: {
      name: "Open-Meteo",
      url: "https://open-meteo.com/"
    },
    current: {
      weatherCode: currentCode,
      isDay: raw.current.is_day === 1,
      condition: currentCondition,
      icon: currentIcon,
      temperature: requiredNumber(raw.current.temperature_2m, "current.temperature_2m"),
      apparentTemperature: requiredNumber(
        raw.current.apparent_temperature,
        "current.apparent_temperature"
      ),
      windSpeed: requiredNumber(raw.current.wind_speed_10m, "current.wind_speed_10m")
    },
    today: daily[0],
    daily,
    advice: weatherAdvice(currentCode, daily[0])
  };
}

function upstreamUrl() {
  const url = new URL(WEATHER_API);
  url.searchParams.set("latitude", "22.3556469");
  url.searchParams.set("longitude", "120.3807532");
  url.searchParams.set(
    "current",
    "temperature_2m,apparent_temperature,weather_code,wind_speed_10m,is_day"
  );
  url.searchParams.set(
    "daily",
    "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_gusts_10m_max"
  );
  url.searchParams.set("timezone", "Asia/Taipei");
  url.searchParams.set("forecast_days", "3");
  return url;
}

async function handleWeather(request, env, ctx) {
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

    // 1b. 自定义重定向
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
