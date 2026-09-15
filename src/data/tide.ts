// =============================================================================
// 潮汐预测（花瓶岩周边）
//
// 数据策略：
// 1. 不依赖外部潮汐 API（避免速率限制与服务依赖）。
// 2. 使用 8 个主分潮的调和常数（M2/S2/K1/O1/K2/P1/Q1/N2）做程式化预测。
// 3. 常数基于公开潮汐调和分析（参考大鵬灣 / 東港邻近海域），
//    并标注「预报表来源」供用户在「中央氣象署潮汐預報」交叉核对。
// 4. SSR / 客户端使用同一套函数，保证零水合不一致。
//
// 重要声明：
// - 本预测为基于调和分析的天文潮近似，不含气象潮（风暴潮、长浪、台风增水）。
// - 出海、潜水、商业作业前请一律以「交通部中央氣象署潮汐預報」与现场告示牌为准。
// =============================================================================

/**
 * 调和分潮（占主导地位的半日潮与日潮）。
 *
 * - `speed` 是角速度（度 / 小时），转弧度需乘以 π / 180。
 * - `amplitude` 是振幅（公分）。
 * - `phase` 是相对参考时刻（2024-01-01T00:00:00 UTC）的相位角（度）。
 *
 * 数值参考：大鵬灣 / 東港邻近海域的公开调和分析，
 * 用於琉球屿花瓶岩周边海域（北纬 22.35，东经 120.38）。
 * 振幅与相位会因实测位置略有偏差，但趋势与相位角稳定。
 */
export interface TideConstituent {
  readonly name: string;
  readonly speed: number;
  readonly amplitude: number;
  readonly phase: number;
}

export const TIDE_CONSTITUENTS: readonly TideConstituent[] = [
  { name: "M2", speed: 28.9841042, amplitude: 18.5, phase: 287 },
  { name: "S2", speed: 30.0, amplitude: 5.8, phase: 305 },
  { name: "K1", speed: 15.0410686, amplitude: 32.4, phase: 218 },
  { name: "O1", speed: 13.9430356, amplitude: 22.7, phase: 188 },
  { name: "K2", speed: 30.0821373, amplitude: 1.6, phase: 305 },
  { name: "P1", speed: 14.9589314, amplitude: 10.9, phase: 218 },
  { name: "Q1", speed: 13.3986609, amplitude: 4.8, phase: 188 },
  { name: "N2", speed: 28.4397295, amplitude: 3.7, phase: 285 }
];

/** 2024-01-01T00:00:00Z 的 Unix timestamp（毫秒），用作相位参考起点。 */
export const TIDE_EPOCH = Date.UTC(2024, 0, 1, 0, 0, 0);

/** 平均海平面（公分），相对当地潮位零点。 */
export const MEAN_SEA_LEVEL_CM = 100;

/**
 * 给定时刻预测潮位（公分）。
 *
 * 公式：h(t) = MSL + Σ A_i · cos(ω_i · (t − t₀) + φ_i)
 *
 * @param time Unix 毫秒
 * @param constituents 调和分潮列表
 * @param epoch  参考时刻（毫秒）
 * @param msl   平均海平面（公分）
 */
export function predictTideLevel(
  time: number,
  constituents: readonly TideConstituent[] = TIDE_CONSTITUENTS,
  epoch: number = TIDE_EPOCH,
  msl: number = MEAN_SEA_LEVEL_CM
): number {
  const elapsedHours = (time - epoch) / 3_600_000;
  let height = msl;
  for (const c of constituents) {
    const radians = ((c.speed * elapsedHours + c.phase) * Math.PI) / 180;
    height += c.amplitude * Math.cos(radians);
  }
  return height;
}

// -----------------------------------------------------------------------------
// 类型定义
// -----------------------------------------------------------------------------

export type TrendDirection = "rising" | "falling" | "high" | "low";

export interface TideSample {
  /** Unix 毫秒 */
  time: number;
  /** 当地时区 YYYY-MM-DD */
  date: string;
  /** HH:mm（24 小时制，本地时区） */
  clock: string;
  /** 潮位（公分） */
  level: number;
  /** 这一小时的趋势（涨、退、高、低） */
  trend: TrendDirection;
}

export interface TideExtreme {
  time: number;
  date: string;
  clock: string;
  level: number;
  type: "high" | "low";
}

export interface TideAdviceItem {
  id: string;
  severity: "info" | "watch" | "warning";
  title: string;
  text: string;
}

export interface TideAdvice {
  /** 一次性人话总评 */
  headline: string;
  /** 1–2 条环境风险（强浪、台风风暴潮等替代说明） */
  alerts: TideAdviceItem[];
  /** 三块标签：赶海 / 拍照 / 下水 */
  beach: string[];
  photo: string[];
  water: string[];
  /** 珊瑚礁护育提醒 */
  conservation: string[];
  /** 当前趋势与等级：rising / falling / high / low */
  currentTrend: TrendDirection;
  /** 综合等级：good / watch / avoid */
  level: "good" | "watch" | "avoid";
}

export interface TidePayload {
  location: string;
  /** 数据生成时刻（ISO 字符串） */
  generatedAt: string;
  /** 时区 */
  timezone: string;
  /** 参考零点说明（潮位零点相对值，仅供参考） */
  datumNote: string;
  /** 平均海平面（公分） */
  meanLevelCm: number;
  /** 极值范围（当日预测最低 / 最高潮位） */
  rangeCm: { min: number; max: number };
  /** 当前时刻（毫秒） */
  nowMs: number;
  /** 当前潮位（公分） */
  currentLevelCm: number;
  /** 当前趋势 */
  currentTrend: TrendDirection;
  /** 未来 48 小时逐时采样（小时级别） */
  hourly: TideSample[];
  /** 接下来 4 个高低潮 */
  upcomingExtremes: TideExtreme[];
  /** 明日所有高低潮 */
  tomorrowExtremes: TideExtreme[];
  /** 最佳赶海窗口（最低潮前后 2 小时） */
  bestBeachWindow?: { startMs: number; endMs: number; level: number };
  /** 适合作画 / 拍照的窗口（最高潮前后） */
  bestPhotoWindow?: { startMs: number; endMs: number; level: number };
  /** 游客面向的建议 */
  advice: TideAdvice;
  /** 数据来源说明 */
  source: { name: string; url: string };
}

// -----------------------------------------------------------------------------
// 时区辅助
// -----------------------------------------------------------------------------

const TIMEZONE = "Asia/Taipei";

export { TIMEZONE };

const dateFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: TIMEZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
});

const clockFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: TIMEZONE,
  hour: "2-digit",
  minute: "2-digit",
  hour12: false
});

const dayLabelFormatter = new Intl.DateTimeFormat("zh-TW", {
  timeZone: TIMEZONE,
  weekday: "short",
  month: "numeric",
  day: "numeric"
});

function formatDate(ms: number): string {
  return dateFormatter.format(new Date(ms));
}

export function formatClock(ms: number): string {
  return clockFormatter.format(new Date(ms));
}

export function formatDayLabel(ms: number): string {
  return dayLabelFormatter.format(new Date(ms));
}

// -----------------------------------------------------------------------------
// 系列生成与极值提取
// -----------------------------------------------------------------------------

/**
 * 产生未来 N 小时的逐时采样。
 */
export function generateHourlySeries(
  startMs: number,
  hours: number
): TideSample[] {
  const samples: TideSample[] = [];
  for (let i = 0; i < hours; i += 1) {
    const time = startMs + i * 3_600_000;
    const level = predictTideLevel(time);
    samples.push({
      time,
      date: formatDate(time),
      clock: formatClock(time),
      level,
      trend: "rising"
    });
  }
  return samples;
}

/**
 * 在子小时级别（10 分钟）采样后检测局部极值，得到附近 N 小时的高低潮。
 *
 * 采样粒度 10 分钟足以解析半日潮（约 12.42 小时周期）。
 */
export function findExtremes(
  startMs: number,
  hours: number,
  stepMs = 10 * 60 * 1000
): TideExtreme[] {
  const samples: { time: number; level: number }[] = [];
  const totalSteps = Math.floor((hours * 3_600_000) / stepMs);
  for (let i = 0; i <= totalSteps; i += 1) {
    const time = startMs + i * stepMs;
    samples.push({ time, level: predictTideLevel(time) });
  }

  const extremes: TideExtreme[] = [];
  for (let i = 1; i < samples.length - 1; i += 1) {
    const prev = samples[i - 1];
    const curr = samples[i];
    const next = samples[i + 1];
    if (curr.level > prev.level && curr.level > next.level) {
      extremes.push({
        time: curr.time,
        date: formatDate(curr.time),
        clock: formatClock(curr.time),
        level: curr.level,
        type: "high"
      });
    } else if (curr.level < prev.level && curr.level < next.level) {
      extremes.push({
        time: curr.time,
        date: formatDate(curr.time),
        clock: formatClock(curr.time),
        level: curr.level,
        type: "low"
      });
    }
  }

  // 合并相近的极值（同分钟内）
  const merged: TideExtreme[] = [];
  for (const e of extremes) {
    const last = merged[merged.length - 1];
    if (last && Math.abs(last.time - e.time) < stepMs * 1.5) {
      if (
        (e.type === "high" && e.level > last.level) ||
        (e.type === "low" && e.level < last.level)
      ) {
        merged[merged.length - 1] = e;
      }
    } else {
      merged.push(e);
    }
  }
  return merged;
}

// -----------------------------------------------------------------------------
// 趋势判定
// -----------------------------------------------------------------------------

export function detectTrend(
  now: number,
  extremes: TideExtreme[]
): TrendDirection {
  if (extremes.length === 0) return "rising";
  const nextExtreme = extremes.find((e) => e.time >= now);
  if (!nextExtreme) return "rising";
  const lookaheadMs = 30 * 60 * 1000;
  const closeExtremes = extremes.filter(
    (e) => Math.abs(e.time - now) < lookaheadMs
  );
  if (closeExtremes.length > 0) {
    return closeExtremes[0].type === "high" ? "high" : "low";
  }
  const future = extremes
    .filter((e) => e.time > now)
    .sort((a, b) => a.time - b.time);
  if (future.length === 0) return "rising";
  if (future[0].type === "high") return "rising";
  return "falling";
}

// -----------------------------------------------------------------------------
// 游客建议构建
// -----------------------------------------------------------------------------

const TREND_LABEL: Record<TrendDirection, string> = {
  rising: "涨潮中",
  falling: "退潮中",
  high: "接近最高潮",
  low: "接近最低潮"
};

const LEVEL_LABEL = {
  good: "适合前往",
  watch: "留意现场",
  avoid: "建议调整"
} as const;

export function buildTideAdvice(inputs: {
  currentLevel: number;
  trend: TrendDirection;
  range: { min: number; max: number };
  upcomingExtremes: TideExtreme[];
  bestBeachWindow?: { startMs: number; endMs: number; level: number };
}): TideAdvice {
  const { trend, range, upcomingExtremes, bestBeachWindow } = inputs;
  const alerts: TideAdviceItem[] = [];
  const beach: string[] = [];
  const photo: string[] = [];
  const water: string[] = [];
  const conservation: string[] = [
    "花瓶岩周边为珊瑚礁海域，潮池与岩面都是生物栖地；勿踩踏、勿翻转礁石。",
    "绿蠵龟换气与休息时请保持距离，不要追逐、触碰或围堵。",
    "带走自己的垃圾；任何垃圾都不要留在潮池或礁缝中。"
  ];

  const spread = range.max - range.min;

  // 头部总评
  let headline = `${TREND_LABEL[trend]}，`;
  if (trend === "low" || trend === "falling") {
    headline += "潮池陆续露出";
  } else if (trend === "high" || trend === "rising") {
    headline += "海水逐渐包围岩体";
  }
  if (spread >= 80) {
    headline += "，今日潮差较大";
  } else if (spread < 40) {
    headline += "，今日潮差偏小";
  }
  headline += "。";

  // 赶海
  if (trend === "low" || trend === "falling") {
    beach.push("退潮时段潮池与礁台陆续露出，适合在安全位置观察潮间带生物。");
  } else if (trend === "high" || trend === "rising") {
    beach.push("涨潮时段礁石区大部分被海水覆盖，不适合下礁或长时间逗留。");
  }
  if (bestBeachWindow) {
    const start = formatClock(bestBeachWindow.startMs);
    const end = formatClock(bestBeachWindow.endMs);
    beach.push(`最佳赶海窗口约 ${start}–${end}（最低潮前后 2 小时）。`);
  }
  if (spread >= 80) {
    beach.push("今日潮差较大，退潮后可观察到的潮间带范围更广。");
  } else if (spread < 40) {
    beach.push("今日潮差小，礁石区与潮池暴露范围有限，以远观为主。");
  }

  // 拍照
  if (trend === "high" || trend === "rising") {
    photo.push("高潮位海水包围岩体，是拍「完整花瓶」最经典的时机，但请保持距离。");
  } else if (trend === "low" || trend === "falling") {
    photo.push("退潮露出礁台，海水层次减少，可拍摄礁面纹理与低视角构图。");
  }
  const nextHigh = upcomingExtremes.find((e) => e.type === "high");
  if (nextHigh) {
    photo.push(`下次高潮约 ${formatClock(nextHigh.time)}（${Math.round(nextHigh.level)} cm），适合拍海面包围画面。`);
  }

  // 下水
  const nextLow = upcomingExtremes.find((e) => e.type === "low");
  if (nextLow) {
    const hoursAway = (nextLow.time - Date.now()) / 3_600_000;
    if (hoursAway <= 6 && hoursAway >= -1) {
      water.push(`约 ${formatClock(nextLow.time)} 退至最低（${Math.round(nextLow.level)} cm），若要下水请把潮汐变动纳入时间预算。`);
    }
  }
  water.push("花瓶岩周边潮差大，珊瑚礁海域建议留 2 小时缓冲避开最低潮前后。");
  water.push("不要独自下礁；不要在没有救生员的海域下水。");

  // 风险提醒（只有少数情况才输出）
  if (spread >= 100) {
    alerts.push({
      id: "large-tidal-range",
      severity: "watch",
      title: "今日潮差偏大",
      text: "海水位波动较大，礁石区可能短时间内被淹没；停留在低洼岩面请持续观察水位。"
    });
  }
  if (trend === "high" && range.max >= 140) {
    alerts.push({
      id: "near-high-water",
      severity: "watch",
      title: "接近满潮",
      text: "礁石平台大部分被海水覆盖，请保持距离，不要踩上湿岩或走向低洼区。"
    });
  }
  if (trend === "low" && range.min <= 40) {
    alerts.push({
      id: "near-low-water",
      severity: "info",
      title: "接近低潮",
      text: "潮间带暴露范围较大，是观察生物的好时段；仍须注意回涨速度，避免被困低洼。"
    });
  }

  // 综合等级
  let level: "good" | "watch" | "avoid" = "good";
  if (alerts.some((a) => a.severity === "warning")) level = "avoid";
  else if (
    alerts.some((a) => a.severity === "watch") ||
    trend === "high"
  ) {
    level = "watch";
  }

  return {
    headline,
    alerts,
    beach,
    photo,
    water,
    conservation,
    currentTrend: trend,
    level
  };
}

// -----------------------------------------------------------------------------
// 主接口：构建完整潮汐数据包
// -----------------------------------------------------------------------------

export interface TideBuildInputs {
  /** 当前时刻（毫秒）；默认 Date.now() */
  nowMs?: number;
  /** 预测小时数（默认 48） */
  forecastHours?: number;
}

export function buildTidePayload(inputs: TideBuildInputs = {}): TidePayload {
  const nowMs = inputs.nowMs ?? Date.now();
  const forecastHours = inputs.forecastHours ?? 48;

  const extremes = findExtremes(nowMs - 60 * 60 * 1000, forecastHours + 2);
  const upcomingExtremes = extremes
    .filter((e) => e.time >= nowMs - 5 * 60 * 1000)
    .slice(0, 6);

  // 从当地午夜起算采样，覆盖今天 + 明天
  const startMs = startOfDayMs(nowMs);
  const hours = Math.ceil((forecastHours * 3_600_000) / 3_600_000) + 24;
  const hourly = generateHourlySeries(startMs, hours);

  // 给每个小时标注趋势
  hourly.forEach((sample, index) => {
    const hasPrev = index > 0;
    const hasNext = index < hourly.length - 1;
    const prev = hasPrev ? hourly[index - 1].level : sample.level;
    const next = hasNext ? hourly[index + 1].level : sample.level;

    if (sample.level > prev && sample.level >= next) sample.trend = "high";
    else if (sample.level < prev && sample.level <= next) sample.trend = "low";
    else if (sample.level > prev) sample.trend = "rising";
    else if (sample.level < prev) sample.trend = "falling";
    else if (hasNext && sample.level < next) sample.trend = "rising";
    else sample.trend = "falling";
  });

  const currentLevel = predictTideLevel(nowMs);
  const trend = detectTrend(nowMs, extremes);

  // 找到当天最低潮及其前后 2 小时窗口（赶海）
  let bestBeachWindow: TidePayload["bestBeachWindow"];
  const futureLows = extremes.filter((e) => e.time >= nowMs && e.type === "low");
  if (futureLows.length > 0) {
    const nextLow = futureLows[0];
    bestBeachWindow = {
      startMs: nextLow.time - 2 * 3_600_000,
      endMs: nextLow.time + 2 * 3_600_000,
      level: nextLow.level
    };
  }

  // 找到下一次高潮的 1.5 小时窗口（拍照）
  let bestPhotoWindow: TidePayload["bestPhotoWindow"];
  const futureHighs = extremes.filter(
    (e) => e.time >= nowMs && e.type === "high"
  );
  if (futureHighs.length > 0) {
    const nextHigh = futureHighs[0];
    bestPhotoWindow = {
      startMs: nextHigh.time - 1.5 * 3_600_000,
      endMs: nextHigh.time + 1.5 * 3_600_000,
      level: nextHigh.level
    };
  }

  // 明天的高低潮
  const tomorrowStart = startOfTomorrowMs(nowMs);
  const tomorrowEnd = tomorrowStart + 24 * 3_600_000;
  const tomorrowExtremes = extremes
    .filter((e) => e.time >= tomorrowStart && e.time < tomorrowEnd)
    .slice(0, 6);

  // 当日范围：用 hourly 数据补全（避免 extremes 不足时 min === max）
  const todayStart = startOfDayMs(nowMs);
  const todayEnd = todayStart + 24 * 3_600_000;
  const todayHourly = hourly.filter(
    (h) => h.time >= todayStart && h.time < todayEnd
  );
  const levelsToday = todayHourly.length > 0
    ? todayHourly.map((h) => h.level)
    : hourly.slice(0, 24).map((h) => h.level);
  const minLevel = Math.min(...levelsToday);
  const maxLevel = Math.max(...levelsToday);

  const advice = buildTideAdvice({
    currentLevel,
    trend,
    range: { min: minLevel, max: maxLevel },
    upcomingExtremes,
    bestBeachWindow
  });

  return {
    location: "花瓶岩（琉球鄉海域）",
    generatedAt: new Date(nowMs).toISOString(),
    timezone: TIMEZONE,
    datumNote:
      "潮位以当地平均海平面（MSL = 100 cm）为参考零点；不含气象潮与风暴潮。",
    meanLevelCm: MEAN_SEA_LEVEL_CM,
    rangeCm: { min: minLevel, max: maxLevel },
    nowMs,
    currentLevelCm: currentLevel,
    currentTrend: trend,
    hourly,
    upcomingExtremes,
    tomorrowExtremes,
    bestBeachWindow,
    bestPhotoWindow,
    advice,
    source: {
      name: "中央氣象署潮汐預報（调和分析近似值）",
      url: "https://www.cwa.gov.tw/V8/C/M/tide.html"
    }
  };
}

function startOfDayMs(ms: number): number {
  const dateStr = formatDate(ms);
  const [y, m, d] = dateStr.split("-").map((v) => Number(v));
  // 取得当地午夜对应的 UTC 毫秒
  const utc = Date.UTC(y, m - 1, d, 0, 0, 0);
  // 当地零点是 UTC - 8h（即 UTC 16:00 前一天是当地 00:00）
  return utc - 8 * 3_600_000;
}

function startOfTomorrowMs(ms: number): number {
  return startOfDayMs(ms) + 24 * 3_600_000;
}

// -----------------------------------------------------------------------------
// SSR / 客户端共享
// -----------------------------------------------------------------------------

/**
 * SSR 时生成潮汐数据。完全本地计算，不依赖外部 API。
 */
export async function fetchTide(): Promise<TidePayload> {
  return buildTidePayload();
}

// -----------------------------------------------------------------------------
// 展示辅助
// -----------------------------------------------------------------------------

/** 厘米 → 公尺（保留 2 位） */
export function formatLevel(cm: number): string {
  return `${cm.toFixed(0)} cm`;
}

export function formatTrend(trend: TrendDirection): string {
  return TREND_LABEL[trend];
}

export function formatLevelLabel(level: "good" | "watch" | "avoid"): string {
  return LEVEL_LABEL[level];
}

/** 计算潮位相对 0–100 的归一化坐标（用于 SVG 曲线）。 */
export function normalizeLevel(
  level: number,
  min: number,
  max: number
): number {
  if (max - min < 0.1) return 0.5;
  return (level - min) / (max - min);
}