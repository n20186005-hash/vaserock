// =============================================================================
// SEO 实体绑定配置（单景点：花瓶岩 / Vase Rock）
// 依据任务中"单景点 SEO 实体绑定配置变量表"定义本景点所有变量。
// =============================================================================

export const site = {
  name: "Vase Rock｜小琉球花瓶岩",
  shortName: "Vase Rock",
  url: "https://vaserock.com",
  domain: "vaserock.com",
  description:
    "探索小琉球地標花瓶岩（Vase Rock）！查看 Google Maps 位置、白沙港出發交通、潮汐時間表、浮潛看海龜地點與最佳攝影時間。",
  locale: "zh_Hant_TW",
  // 资料同步时间统一更新（与 Google Maps 评价同步时间 2026 年 9 月保持一致）
  updated: "2026-09-15"
};

// -----------------------------------------------------------------------------
// 景点核心实体（依变量表填充）
// -----------------------------------------------------------------------------
export const vaseRock = {
  // ATTRACTION_FULL_NAME / ATTRACTION_SHORT_NAME
  name: "花瓶岩",
  fullName: "花瓶岩（Vase Rock）",
  shortName: "花瓶岩",
  englishName: "Vase Rock",
  // alternateName 等位声明
  alternateName: ["花瓶石", "Vase Rock", "小琉球花瓶岩", "Vase Rock Xiaoliuqiu"],

  // 坐标与地址
  latitude: 22.3556469,
  longitude: 120.3807532,
  coordinateLabel: "22.3556469, 120.3807532",
  /** IANA 时区，用于日期格式化与上游 API */
  timezone: "Asia/Taipei",

  // CITY_NAME / STATE_PROVINCE / COUNTRY_NAME / COUNTRY_CODE_2LETTER
  city: "琉球鄉",
  stateProvince: "屏東縣",
  country: "臺灣",
  countryEn: "Taiwan",
  countryCode: "TW",
  // POSTAL_CODE（屏東縣琉球鄉邮政编码）
  postalCode: "929",
  fullAddress: "929台灣屏東縣琉球鄉",

  // Google Maps 相关链接
  // MAPS_SHARE_URL（用户在 Google Maps 上的短链）
  placeUrl:
    "https://www.google.com/maps/place/Vase+Rock/@22.3556469,120.3807532,17z/data=!3m1!4b1!4m6!3m5!1s0x3471e57038033fd7:0xc842f4c9d32e16bf!8m2!3d22.3556469!4d120.3807532!16s%2Fg%2F1tht9wwv",
  // MAPS_EMBED_SRC（地图嵌入 URL）
  mapsEmbedSrc:
    "https://www.google.com/maps?q=22.3556469,120.3807532&z=17&output=embed",
  // Google Maps 评价短链（用户提供的 goo.gl 短链）
  reviewsUrl:
    "https://maps.app.goo.gl/oJ3AGMRhxSUNnrft9",
  walkingDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=22.3556469,120.3807532&travelmode=walking",
  drivingDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=22.3556469,120.3807532&travelmode=driving",

  // 周边核心地标（NEARBY_LANDMARK_1 / NEARBY_LANDMARK_2）
  nearbyLandmark1: "白沙觀光港",
  nearbyLandmark2: "中澳沙灘",

  // GOVT_TOURISM_URL（主管机关官方旅游入口：大鵬灣國家風景區管理處）
  govtTourismUrl:
    "https://www.dbnsa.gov.tw/zh-tw/attraction/AttractionPage?a=222",

  // Google Maps 用户评价（同步时间 2026 年 9 月）
  // 注意：根据任务要求，这些评分与评价数只展示在页面上，**不进入 JSON-LD**，
  // 以规避 Google 判违规（未经授权抓取评价内容）的风险。
  googleRating: {
    score: 4.5,
    count: 13036,
    source: "Google 地圖使用者評價",
    syncedAt: "2026 年 9 月",
    reviewsUrl:
      "https://maps.app.goo.gl/oJ3AGMRhxSUNnrft9"
  },

  // 主图路径（用于 canonical / og:image / JSON-LD image）
  heroImage: "/images/vase-rock-hero.webp",
  heroImageAbsolute: "https://vaserock.com/images/vase-rock-hero.webp"
};

export const primaryNav = [
  { href: "/tide-guide/", label: "潮汐指南" },
  { href: "/itinerary/", label: "行程建議" },
  { href: "/map/", label: "地圖" },
  { href: "/from-baisha-port/", label: "怎麼前往" },
  { href: "/best-time/", label: "最佳時間" },
  { href: "/snorkeling/", label: "浮潛指南" }
];

export const imageCredits = [
  {
    file: "vase-rock-hero.webp",
    title: "Vase Rock on Lambai Island (Xiaoliuqiu)",
    author: "Jun Jie Yam",
    license: "CC BY 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Vase_Rock_on_Lambai_Island_(Xiaoliuqiu).jpg"
  },
  {
    file: "vase-rock-water.webp",
    title: "花瓶岩",
    author: "吉爾",
    license: "CC0",
    source:
      "https://commons.wikimedia.org/wiki/File:%E8%8A%B1%E7%93%B6%E5%B2%A9.jpg"
  },
  {
    file: "vase-rock-tide.webp",
    title: "Vase Rock, Lamay Island 2015-10-09 (cropped)",
    author: "Taiwania Justo",
    license: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Vase_Rock,_Lamay_Island_2015-10-09_(cropped).jpg"
  },
  {
    file: "vase-rock-geology.webp",
    title: "Vase Rock",
    author: "Koika",
    license: "CC BY-SA 1.0",
    source: "https://commons.wikimedia.org/wiki/File:Vase_Rock.JPG"
  },
  {
    file: "baisha-port.webp",
    title: "小琉球白沙尾港",
    author: "Outlookxp",
    license: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:%E5%B0%8F%E7%90%89%E7%90%83%E7%99%BD%E6%B2%99%E5%B0%BE%E6%B8%AF.jpg"
  },
  {
    file: "vase-rock-bay.webp",
    title: "花瓶岩旁海灣",
    author: "Koala0090",
    license: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:%E8%8A%B1%E7%93%B6%E5%B2%A9%E6%97%81%E6%B5%B7%E7%81%A3.jpg"
  },
  {
    file: "zhongao-beach.webp",
    title: "White Sand Beach of Lamay Island 01",
    author: "Taiwania Justo",
    license: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:White_Sand_Beach_of_Lamay_Island_01.JPG"
  },
  {
    file: "turtle-snorkel.webp",
    title: "小琉球與綠蠵龜浮潛共游",
    author: "大鵬灣國家風景區管理處",
    license: "CC BY 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:%E5%B0%8F%E7%90%89%E7%90%83%E8%88%87%E7%B6%A0%E8%A0%B5%E9%BE%9C%E6%B5%AE%E6%BD%9B%E5%85%B1%E6%B8%B8.jpg"
  },
  {
    file: "xiaoliuqiu-aerial.webp",
    title: "Xiao Liuqiu island",
    author: "Rutger van der Maar",
    license: "CC BY 2.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Xiao_Liuqiu_island.jpg"
  }
];

export const authoritativeSources = [
  {
    label: "花瓶岩景點資訊",
    publisher: "大鵬灣國家風景區管理處",
    url: "https://www.dbnsa.gov.tw/zh-tw/attraction/AttractionPage?a=222"
  },
  {
    label: "潮汐預報",
    publisher: "交通部中央氣象署",
    url: "https://www.cwa.gov.tw/V8/C/M/tide.html"
  },
  {
    label: "小琉球海龜調查與保育資料",
    publisher: "海洋委員會海洋保育署",
    url: "https://www.oca.gov.tw/ch/home.jsp?dataserno=202301190013&id=220&mcustomize=research_view.jsp&parentpath=0%2C2%2C219"
  },
  {
    label: "Google 地圖使用者評價",
    publisher: "Google Maps",
    url: "https://maps.app.goo.gl/oJ3AGMRhxSUNnrft9"
  }
];

// -----------------------------------------------------------------------------
// PWA 配置（任务要求：新增 PWA 支持）
// -----------------------------------------------------------------------------
export const pwa = {
  name: "Vase Rock｜小琉球花瓶岩旅遊指南",
  shortName: "Vase Rock",
  description:
    "小琉球花瓶岩獨立旅遊指南：Google Maps 位置、白沙港步行路線、潮汐玩法、拍照建議、浮潛安全與周邊景點。",
  themeColor: "#123b4a",
  backgroundColor: "#fbfcf8",
  lang: "zh-Hant-TW",
  scope: "/",
  startUrl: "/",
  display: "standalone",
  orientation: "portrait",
  manifestUrl: "/manifest.webmanifest",
  serviceWorkerUrl: "/sw.js",
  icons: [
    {
      src: "/icons/icon-192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "any maskable"
    },
    {
      src: "/icons/icon-512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable"
    }
  ]
};

// -----------------------------------------------------------------------------
// GA4 衡量 ID（任务要求：新增 GA4：G-HXM22WWPKP）
// -----------------------------------------------------------------------------
export const ga4Id = "G-HXM22WWPKP";