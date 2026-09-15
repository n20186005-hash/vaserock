/**
 * 花瓶岩天气数据模型与 SSR 抓取逻辑。
 *
 * 本文件同时被 Astro SSR（build-time 注入 HTML）与 Cloudflare Worker
 *（边缘缓存 15 分钟的回源接口）共用，因此保持纯 ESM、零外部依赖。
 *
 * 设计目标：把气象数据转换成"游客可执行"的建议，而不是堆砌技术术语。
 * 因此输出的 `advice` 字段被分成三块标签 + 风险提醒，并按当前/今日数据
 * 动态生成；只在确实需要时建议某项装备（不带伞就不显示雨伞）。
 */

import { vaseRock } from "@/data/site";

// =============================================================================
// 类型定义
// =============================================================================

export interface WeatherDaily {
  /** ISO 8601 日期，例如 2026-09-15 */
  date: string;
  /** "今天 / 明天 / 週四" 之类的标签 */
  label: string;
  /** Open-Meteo weather_code */
  weatherCode: number;
  /** 文字描述，例如「細雨」 */
  condition: string;
  /** 表情图示 */
  icon: string;
  maxTemperature: number;
  minTemperature: number;
  /** 0-100 */
  precipitationProbability: number;
  /** mm */
  precipitationSum: number;
  /** km/h，最大陣風 */
  maxWindSpeed: number;
  /** km/h，最大陣風（与 maxWindSpeed 在 Open-Meteo 字段名上有差异，保留两个以兼容） */
  maxWindGust: number;
  /** UV 指數（0-11+） */
  uvIndexMax: number;
}

export interface WeatherCurrent {
  weatherCode: number;
  isDay: boolean;
  condition: string;
  icon: string;
  temperature: number;
  apparentTemperature: number;
  windSpeed: number;
  windDirection: number;
  humidity: number;
  uvIndex: number;
  pressure: number;
}

export type AdviceLevel = "good" | "watch" | "avoid";

export interface AdviceAlert {
  /** "info" 蓝色普通提醒；"watch" 黄色注意；"warning" 红色警示 */
  severity: "info" | "watch" | "warning";
  title: string;
  text: string;
}

export interface AdvicePayload {
  level: AdviceLevel;
  /** 一句话总评，让人 1 秒看懂 */
  headline: string;
  /** 三块标签中的文案（不满足条件则为空数组，前端隐藏整块） */
  dress: string[];
  plan: string[];
  gear: string[];
  /** 风险提醒（按严重度倒序、置顶显示） */
  alerts: AdviceAlert[];
  /** 适合花瓶岩的具体游玩动作 */
  coastal: string[];
}

export interface WeatherPayload {
  location: string;
  /** ISO 8601 时间戳 */
  updatedAt: string;
  source: { name: string; url: string };
  current: WeatherCurrent;
  today: WeatherDaily;
  /** 七日预报（今天 + 未来 6 天） */
  daily: WeatherDaily[];
  /** 今日日出/日落 ISO 时间串 */
  sunrise: string;
  sunset: string;
  advice: AdvicePayload;
}

// =============================================================================
// 工具函数
// =============================================================================

const WEATHER_DESCRIPTIONS: Record<number, [string, string]> = {
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

export function describeWeather(code: number, isDay = true): [string, string] {
  const entry = WEATHER_DESCRIPTIONS[code] ?? ["天氣變化", "🌤️"];
  if (!isDay && code <= 1) return [entry[0], "🌙"];
  return entry;
}

function requiredNumber(value: unknown, field: string): number {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new Error(`Invalid weather field: ${field}`);
  }
  return value;
}

export function dayLabel(date: string, index: number): string {
  if (index === 0) return "今天";
  if (index === 1) return "明天";
  return new Intl.DateTimeFormat("zh-TW", {
    weekday: "short",
    timeZone: vaseRock.timezone
  }).format(new Date(`${date}T00:00:00+08:00`));
}

/**
 * 把 0-360 度风向转成方位文字。
 */
export function windDirectionLabel(degrees: number): string {
  const dirs = ["北", "東北", "東", "東南", "南", "西南", "西", "西北"];
  const idx = Math.round(((degrees % 360) / 45)) % 8;
  return dirs[idx];
}

/**
 * 把 ISO 时间戳（如 "2026-09-15T05:44"）转成 HH:MM 显示。
 */
export function formatTimeOnly(iso: string): string {
  if (!iso) return "—";
  const match = iso.match(/T(\d{2}):(\d{2})/);
  return match ? `${match[1]}:${match[2]}` : iso;
}

export function formatUpdatedAt(updatedAt: string): string {
  const match = updatedAt.match(/T(\d{2}):(\d{2})/);
  if (!match) return updatedAt;
  return `${match[1]}:${match[2]}`;
}

/**
 * UV 指數的中文分级标签。
 */
export function uvIndexLabel(value: number): { label: string; tone: "low" | "moderate" | "high" | "extreme" } {
  if (value < 3) return { label: "低", tone: "low" };
  if (value < 6) return { label: "中等", tone: "moderate" };
  if (value < 8) return { label: "強", tone: "high" };
  if (value < 11) return { label: "極高", tone: "extreme" };
  return { label: "極端", tone: "extreme" };
}

// =============================================================================
// 面向游客的智能建议
// =============================================================================

interface AdviceInputs {
  current: WeatherCurrent;
  today: WeatherDaily;
  sunrise: string;
  sunset: string;
}

/**
 * 把天气数据转化为游客可执行建议。
 *
 * 设计原则：
 * 1. 不输出专业术语：「相对湿度 75%」改写为「体感闷热」之类。
 * 2. 条件触发：满足才输出，不满足的整段隐藏。
 * 3. 风险提醒置顶：雷雨、极端 UV、大风、大雾永远排在最上。
 * 4. 海边场景专属：花瓶岩所在的珊瑚礁海岸需要的特殊提示。
 */
export function buildAdvice(inputs: AdviceInputs): AdvicePayload {
  const { current, today, sunrise, sunset } = inputs;
  const alerts: AdviceAlert[] = [];
  const dress: string[] = [];
  const plan: string[] = [];
  const gear: string[] = [];
  const coastal: string[] = [];

  // --- 1) 风险提醒：优先级最高，置顶 ---

  // 雷雨
  if ([82, 95, 96, 99].includes(current.weatherCode)) {
    alerts.push({
      severity: "warning",
      title: "雷雨警报",
      text: "请远离海边礁石、空旷地与树下；不要下水、不要登山，及时到室内躲避。"
    });
  }

  // 大风（阵风 ≥ 50 km/h）
  if (today.maxWindGust >= 50) {
    alerts.push({
      severity: "warning",
      title: "强風警告",
      text: "海边浪况不稳，远离礁石与广告牌；海上活动与户外设施可能停摆。"
    });
  } else if (today.maxWindGust >= 35) {
    alerts.push({
      severity: "watch",
      title: "海面风浪偏大",
      text: "到礁石区拍照请加倍小心，避免在湿滑岩面长时间逗留。"
    });
  }

  // 极端 UV（≥ 11）
  if (today.uvIndexMax >= 11) {
    alerts.push({
      severity: "warning",
      title: "極端紫外線",
      text: "戶外曝晒 15 分鐘就可能晒伤；建议改为清晨或傍晚户外活动。"
    });
  }

  // 高降雨概率 ≥ 70% 或当日降水 ≥ 25mm
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

  // --- 2) 出行穿搭（dress） ---

  if (today.maxTemperature >= 32) {
    dress.push("天气炎热，建议穿透气浅色衣物；正午时段避免直接暴晒。");
  } else if (today.maxTemperature >= 28) {
    dress.push("气候温暖舒适，适合轻薄夏装。");
  } else if (today.maxTemperature >= 22) {
    dress.push("温暖宜人，长袖或薄外套即可。");
  } else {
    dress.push("气温偏低，建议携带外套；海风明显时体感更凉。");
  }

  // 温差
  const tempRange = today.maxTemperature - today.minTemperature;
  if (tempRange > 8) {
    dress.push("昼夜温差较大，准备一件方便穿脱的外套。");
  }

  // 雨天穿搭
  if (today.precipitationProbability >= 60 || [55, 57, 61, 63, 65, 80, 81, 82].includes(current.weatherCode)) {
    dress.push("有降雨可能，避免棉质衣物；快干材质更舒服。");
  }

  // --- 3) 游玩安排（plan） ---

  // 雨天
  if (today.precipitationProbability >= 60) {
    plan.push("下雨概率高，户外行程建议延后或改为室内场馆。");
  } else if (today.precipitationProbability >= 40) {
    plan.push("可能有阵雨，安排可弹性调整的行程。");
  }

  // 高温
  if (today.maxTemperature >= 32 || today.uvIndexMax >= 8) {
    plan.push("高温或强紫外线时段，建议清晨或傍晚再走海岸线；正午留在阴凉处休息。");
  }

  // 阴天其实很适合拍照
  if (current.weatherCode === 2 || current.weatherCode === 3) {
    plan.push("光线柔和均匀，没有强光斑，很适合拍照与长时间户外活动。");
  }

  // 晴朗适合看日出日落
  if ([0, 1].includes(current.weatherCode) && sunrise && sunset) {
    plan.push(`天气晴好，可考虑看日出（${formatTimeOnly(sunrise)}）或日落（${formatTimeOnly(sunset)}）。`);
  }

  // 风力警告
  if (today.maxWindGust >= 40) {
    plan.push("海边浪较大，浮潜与水上活动可能停办；海岸观景请勿靠近浪溅区。");
  }

  // 雷雨/雾
  if ([82, 95, 96, 99].includes(current.weatherCode)) {
    plan.push("雷雨期间不适合户外活动，请改在白沙港周边、室内展馆或餐厅。");
  } else if ([45, 48].includes(current.weatherCode)) {
    plan.push("能見度不佳，不适合登高远眺或拍摄海岸景观。");
  }

  // 默认（没有任何特定情境时）
  if (plan.length === 0) {
    plan.push("天气稳定，可依原本计划前往花瓶岩与周边海岸。");
  }

  // --- 4) 随身物品（gear） ---

  // 高温/UV → 防晒
  if (today.uvIndexMax >= 5 || today.maxTemperature >= 28) {
    gear.push("防晒霜、墨镜、遮阳帽或薄长袖");
  }

  // 降水 ≥ 60% → 雨具
  if (today.precipitationProbability >= 60 || [55, 57, 61, 63, 65, 80, 81, 82, 95, 96, 99].includes(current.weatherCode)) {
    gear.push("折叠雨伞或轻便雨衣");
  }

  // 大风 → 慎用长伞
  if (today.maxWindGust >= 35 && today.precipitationProbability >= 40) {
    gear[gear.length - 1] = "雨衣（不建议长柄伞，风大易折）";
  }

  // 高温 → 饮水
  if (today.maxTemperature >= 28 || today.uvIndexMax >= 6) {
    gear.push("充足饮用水（每人至少 1.5L）");
  }

  // 海边 → 防滑凉鞋 / 礁石鞋
  if (today.maxWindGust < 50 && today.precipitationProbability < 60) {
    gear.push("防滑凉鞋或礁石鞋，方便踩进潮池与浅滩");
  }

  // 早晚凉 → 薄外套
  if (tempRange > 8) {
    gear.push("薄外套（防海风与早晚温差）");
  }

  // --- 5) 海边专属（coastal） ---

  // 下水 / 浮潜安全
  if (today.maxWindGust >= 40 || [82, 95, 96, 99].includes(current.weatherCode)) {
    coastal.push("今日风浪偏大，不建议浮潜、潜水或下水；岸边拍照也请避开浪溅区。");
  } else if (today.precipitationProbability >= 70) {
    coastal.push("下雨天水质浑浊，能见度差；想下水可改去有遮蔽的潮池。");
  } else if (today.uvIndexMax >= 8) {
    coastal.push("阳光强烈，下水请穿防 UV 衣物或水母衣，避免长时间浮在水面上暴晒。");
  } else {
    coastal.push("海况稳定，可依现场告示牌评估是否下水；建议有合格教练陪同。");
  }

  // 礁石安全
  if (today.maxWindGust >= 30) {
    coastal.push("礁石区湿滑，拍照请勿背向海面，并避免攀爬湿岩。");
  }

  // 赶海 / 潮汐建议（基于日出日落时段，与潮位粗略关系）
  coastal.push("想赶海或下水，请先查花瓶岩潮汐表；珊瑚礁海域留 2 小时缓冲避开最低潮前后。");

  // 夜间警示
  if (!current.isDay) {
    coastal.push("夜间海岸视野差，请勿靠近礁石；绿蠵龟孵化区夜间禁止强光与噪音。");
  }

  // --- 6) 综合等级与 headline ---

  let level: AdviceLevel = "good";
  if (alerts.some((a) => a.severity === "warning")) level = "avoid";
  else if (alerts.some((a) => a.severity === "watch") || today.uvIndexMax >= 8 || today.maxWindGust >= 35 || today.maxTemperature >= 32) {
    level = "watch";
  }

  // headline：取当前最具代表性的特征
  const headlineParts: string[] = [];
  if (today.precipitationProbability >= 60) headlineParts.push("降雨概率高");
  else if (current.weatherCode <= 1) headlineParts.push("晴朗穩定");
  else if ([2, 3].includes(current.weatherCode)) headlineParts.push("多雲陰天");
  else headlineParts.push(today.condition);

  if (today.uvIndexMax >= 8) headlineParts.push("紫外線強");
  if (today.maxWindGust >= 35) headlineParts.push("風偏大");
  if (today.maxTemperature >= 32) headlineParts.push("高溫");
  if (today.maxTemperature < 18) headlineParts.push("偏涼");

  const headline = headlineParts.slice(0, 3).join("，");

  return { level, headline, dress, plan, gear, alerts, coastal };
}

// =============================================================================
// 上游接口字段归一化
// =============================================================================

export function normalizeWeather(raw: any): WeatherPayload {
  if (!raw?.current || !raw?.daily || !Array.isArray(raw.daily.time)) {
    throw new Error("Incomplete weather response");
  }

  const currentCode = requiredNumber(raw.current.weather_code, "current.weather_code");
  const isDay = raw.current.is_day === 1;
  const [currentCondition, currentIcon] = describeWeather(currentCode, isDay);

  const totalDays = Math.min(raw.daily.time.length, 7);
  const daily: WeatherDaily[] = raw.daily.time.slice(0, totalDays).map((date: string, index: number) => {
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

  const current: WeatherCurrent = {
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

  const advice = buildAdvice({
    current,
    today: daily[0],
    sunrise,
    sunset
  });

  return {
    location: vaseRock.fullName,
    updatedAt: `${raw.current.time}:00+08:00`,
    source: { name: "Open-Meteo", url: "https://open-meteo.com/" },
    current,
    today: daily[0],
    daily,
    sunrise,
    sunset,
    advice
  };
}

// =============================================================================
// Open-Meteo 上游 URL 与 fetch
// =============================================================================

export interface FetchWeatherOptions {
  latitude?: number;
  longitude?: number;
  locationLabel?: string;
  signal?: AbortSignal;
  cacheTtlSeconds?: number;
}

export function upstreamWeatherUrl(
  latitude = vaseRock.latitude,
  longitude = vaseRock.longitude
): URL {
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", latitude.toString());
  url.searchParams.set("longitude", longitude.toString());
  url.searchParams.set(
    "current",
    [
      "temperature_2m",
      "apparent_temperature",
      "weather_code",
      "wind_speed_10m",
      "wind_direction_10m",
      "relative_humidity_2m",
      "is_day",
      "uv_index",
      "surface_pressure"
    ].join(",")
  );
  url.searchParams.set(
    "daily",
    [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_probability_max",
      "precipitation_sum",
      "wind_speed_10m_max",
      "wind_gusts_10m_max",
      "uv_index_max",
      "sunrise",
      "sunset"
    ].join(",")
  );
  url.searchParams.set("timezone", vaseRock.timezone);
  url.searchParams.set("forecast_days", "7");
  return url;
}

/**
 * 真正发出请求的纯函数，可在 Node 与 Cloudflare Worker 两侧共用。
 */
export async function fetchWeatherPayload(
  options: FetchWeatherOptions = {}
): Promise<WeatherPayload> {
  const url = upstreamWeatherUrl(options.latitude, options.longitude);
  const upstream = await fetch(url, {
    headers: { Accept: "application/json" },
    signal: options.signal
  });
  if (!upstream.ok) {
    throw new Error(`Weather upstream responded ${upstream.status}`);
  }
  return normalizeWeather(await upstream.json());
}

// =============================================================================
// Astro 适配：build-time SSR 抓取，带缓存与降级
// =============================================================================

let cached: { payload: WeatherPayload; fetchedAt: number } | null = null;

/**
 * Astro 前置脚本调用的入口；带进程内缓存（10 分钟）避免重复请求。
 */
export async function fetchWeather(options: FetchWeatherOptions = {}): Promise<WeatherPayload | null> {
  const ttl = options.cacheTtlSeconds ?? 600;
  if (cached && Date.now() - cached.fetchedAt < ttl * 1000) {
    return cached.payload;
  }
  try {
    const payload = await fetchWeatherPayload(options);
    cached = { payload, fetchedAt: Date.now() };
    return payload;
  } catch (error) {
    // SSR 阶段抓取失败 → 返回 null，前端会用 /api/weather 兜底。
    console.warn(
      JSON.stringify({
        message: "weather fetch failed",
        error: error instanceof Error ? error.message : String(error)
      })
    );
    return null;
  }
}