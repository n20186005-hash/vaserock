// =============================================================================
// 访客服务与科普内容数据（非盈利科普网站，无具体商户名称，仅列出类型）
// 数据来源：
//   - 气候/海况：中央气象署、屏東縣政府公告、NOAA 多年气候态（亚热带季风气候）
//   - 保育：海洋委员会海洋保育署公告、绿蠵龟生态调查
//   - 设施：屏東縣琉球鄉公所、当地风景区管理处的公开设施说明
//   - 传说：琉球鄉志与在地口述历史的公开整理
// =============================================================================

// -----------------------------------------------------------------------------
// 季节 / 气候态（综合气象、水质、野生动物）
// 依据小琉球岛气象站多年观测与海象公报的常年平均值，列于下方供旅客参考；
// 任何一年都会有极端天气，季节策略只是参考，现场判读仍优先。
// -----------------------------------------------------------------------------
export interface SeasonalProfile {
  id: string;
  season: string;
  period: string;
  avgTempC: string;
  seaState: string;
  waterClarity: string;
  wildlife: string;
  recommended: string;
  watchFor: string;
}

export const seasonalProfiles: SeasonalProfile[] = [
  {
    id: "spring",
    season: "春季",
    period: "3 – 5 月",
    avgTempC: "21 – 27 °C",
    seaState: "海况渐稳，東北季風轉換期偶有長浪",
    waterClarity: "中等；藻類增生期，能見度變動較大",
    wildlife: "海龜活躍覓食；潮間帶生物回溫",
    recommended: "觀景與地質導覽；攝影與潮池觀察皆合適",
    watchFor: "四、五月偶有鋒面帶來短暫雷陣雨"
  },
  {
    id: "summer",
    season: "夏季",
    period: "6 – 8 月",
    avgTempC: "28 – 30 °C",
    seaState: "海況平穩，颱風季進入準備期",
    waterClarity: "最佳；夏季陸源徑流少，海水清澈",
    wildlife: "綠蠵龜產卵季開始；夜間管制沙灘",
    recommended: "浮潛、SUP 等水上活動；日落海岸線",
    watchFor: "七至九月颱風警報，行程預留彈性"
  },
  {
    id: "autumn",
    season: "秋季",
    period: "9 – 11 月",
    avgTempC: "25 – 29 °C",
    seaState: "九至十月仍有颱風威脅，十一月起長浪回歸",
    waterClarity: "由清澈轉中等，颱風過後短暫混濁",
    wildlife: "海龜孵化季；候鳥過境",
    recommended: "剛回暖的九月仍是水上活動優質期",
    watchFor: "九月下旬起颱風共伴效應；東北季風轉強"
  },
  {
    id: "winter",
    season: "冬季",
    period: "12 – 2 月",
    avgTempC: "18 – 22 °C",
    seaState: "東北季風帶來穩定強浪，海況嚴峻",
    waterClarity: "較混濁；陸源沉積物與上升流",
    wildlife: "冬候鳥；海龜活動下降",
    recommended: "陸域地質與人文踏查、咖啡廳與博物館",
    watchFor: "長浪警報；岸邊濕滑、鹽霧侵蝕設備"
  }
];

// -----------------------------------------------------------------------------
// 访客服务与周边设施（类型中立概述）
// 仅描述设施类别与分布位置，不推荐具体商户名称，
// 让旅客可以按类型自行查詢當地評價與實際營業資訊。
// -----------------------------------------------------------------------------
export interface VisitorService {
  id: string;
  category: string;
  categoryEn: string;
  icon: string;
  summary: string;
  locations: string;
  notes: string;
}

export const visitorServices: VisitorService[] = [
  {
    id: "wc",
    category: "公共廁所",
    categoryEn: "Restrooms",
    icon: "wc",
    summary: "觀光港、白沙尾商圈、花瓶岩觀景區周邊設有公廁，多為無障礙或親子友善設計。",
    locations: "白沙觀光港旅客服務區 · 花瓶岩觀景平台步道沿線 · 白沙尾商圈",
    notes: "夜間燈光不足，建議白天前往；旺季排隊屬正常現象。"
  },
  {
    id: "parking",
    category: "停車場",
    categoryEn: "Parking",
    icon: "parking",
    summary: "白沙觀光港周邊設有機車與汽車收費停車場，採計時或當日計次收費。",
    locations: "白沙港機車停車區 · 白沙港汽車停車場 · 港區外圍備用停車格",
    notes: "旺季與連假容易滿位，建議下船即停妥再步行；機車為島內最便利的交通工具。"
  },
  {
    id: "dining",
    category: "餐飲",
    categoryEn: "Dining",
    icon: "dining",
    summary: "白沙尾商圈與港區周邊聚集地方小吃、海鮮餐廳與咖啡輕食；類型多元，價位依淡旺季與季節食材調整。",
    locations: "白沙尾商圈 · 港區餐街 · 沿海岸線觀景餐廳",
    notes: "建議事先詢問當季食材與價格；部分店家週三或週四公休。"
  },
  {
    id: "lodging",
    category: "住宿",
    categoryEn: "Lodging",
    icon: "lodging",
    summary: "民宿為主，少數小型旅館或度假村；多分布於白沙港周邊與沿海岸線。",
    locations: "白沙港周邊民宿 · 沿海景觀民宿 · 中澳沙灘周邊",
    notes: "旺季（暑假、連假）需提前預訂；部分民宿不提供一次性備品。"
  },
  {
    id: "grocery",
    category: "便利商店與補給",
    categoryEn: "Convenience",
    icon: "grocery",
    summary: "島上設有便利商店，可補給飲水、防曬、雨具與簡易藥品。",
    locations: "白沙港周邊連鎖便利商店 · 港區小型超市",
    notes: "24 小時營業據點有限，建議白天補貨；飲水與防曬為必備。"
  },
  {
    id: "fuel",
    category: "加油與充電",
    categoryEn: "Fuel & EV",
    icon: "fuel",
    summary: "島上設有加油站一座；電動機車充電站沿主要道路分布，租車行多提供換電服務。",
    locations: "島上加油站 · 主要道路電動機車換電站",
    notes: "租賃電動機車前，請先了解換電站位置與營業時間；汽車加油建議於下船前加滿。"
  }
];

// -----------------------------------------------------------------------------
// 按人群定制的游览方案
// -----------------------------------------------------------------------------
export interface ItineraryByProfile {
  id: string;
  profile: string;
  icon: string;
  duration: string;
  pace: string;
  title: string;
  stops: { name: string; note: string }[];
  tips: string[];
}

export const itinerariesByProfile: ItineraryByProfile[] = [
  {
    id: "family",
    profile: "親子家庭",
    icon: "family",
    duration: "半日（4 – 5 小時）",
    pace: "緩慢 · 多停留",
    title: "下船 → 港區 → 花瓶岩 → 中澳沙灘",
    stops: [
      { name: "白沙觀光港", note: "下船後先熟悉動線與廁所位置。" },
      { name: "花瓶岩觀景平台", note: "在遠處欣賞珊瑚礁岩，不必涉水即可拍照。" },
      { name: "遊客中心周邊", note: "透過解說牌了解地質與生態，孩子較易吸收。" },
      { name: "中澳沙灘", note: "踏浪玩沙而非浮潛；備換洗衣物與防曬。" }
    ],
    tips: [
      "包覆式防滑鞋比拖鞋安全；防曬與飲水必備。",
      "避免正中午曝曬；下午四點後光線更柔和。",
      "留意沙灘夜間管制，勿打擾海龜產卵。"
    ]
  },
  {
    id: "photo",
    profile: "攝影 / 自然觀察",
    icon: "photo",
    duration: "一日（6 – 8 小時）",
    pace: "彈性 · 早起",
    title: "清晨花瓶岩 → 潮間帶 → 海岸線 → 日落",
    stops: [
      { name: "清晨花瓶岩", note: "柔光與低潮，礁面紋理清晰。" },
      { name: "潮間帶觀察", note: "以望遠鏡頭取代靠近；不踩踏活體。" },
      { name: "中段海岸線", note: "海蝕地形與風稜石，捕捉地質主題。" },
      { name: "傍晚日落", note: "西側海岸線的暖色輪廓；留意回程。" }
    ],
    tips: [
      "日出前一小時抵達，色溫最穩定。",
      "中灰漸變鏡有助於海面反光控制。",
      "請勿使用閃光燈拍攝海龜與潮間帶生物。"
    ]
  },
  {
    id: "accessible",
    profile: "低體力 / 無障礙",
    icon: "accessible",
    duration: "2 – 3 小時",
    pace: "最緩 · 無階梯",
    title: "港區無障礙動線 → 遠眺花瓶岩 → 港區餐飲",
    stops: [
      { name: "白沙港旅客服務區", note: "平坦動線；多數廁所設有無障礙空間。" },
      { name: "花瓶岩觀景平台", note: "遠眺岩體與海面，不需下礁石。" },
      { name: "港區周邊步道", note: "海風與遮蔭；可隨時回到港區休息。" },
      { name: "港區餐飲", note: "依體力決定是否步行至其他商圈。" }
    ],
    tips: [
      "夏正午避免曝曬；選擇早晨或傍晚。",
      "可事先聯絡租車行確認低底盤車款。",
      "若同行有長輩，港區附近咖啡廳為良好備援點。"
    ]
  }
];

// -----------------------------------------------------------------------------
// 通用游览路线（半日 / 全日 / 主题）
// -----------------------------------------------------------------------------
export interface GeneralItinerary {
  id: string;
  duration: string;
  title: string;
  pace: string;
  steps: { name: string; note: string; minutes: number }[];
}

export const generalItineraries: GeneralItinerary[] = [
  {
    id: "half-day",
    duration: "半日（4 – 5 小時）",
    title: "花瓶岩經典半日環線",
    pace: "中等 · 步行為主",
    steps: [
      { name: "白沙觀光港", note: "下船與補給飲水", minutes: 20 },
      { name: "花瓶岩觀景區", note: "遠觀岩體與拍照", minutes: 60 },
      { name: "白沙尾商圈", note: "午餐與在地小吃", minutes: 60 },
      { name: "中澳沙灘", note: "踏浪或沙灘散步", minutes: 60 },
      { name: "回港", note: "預留緩衝回船", minutes: 30 }
    ]
  },
  {
    id: "full-day",
    duration: "全日（8 – 10 小時）",
    title: "花瓶岩 × 海岸線主題日",
    pace: "彈性 · 含交通",
    steps: [
      { name: "清晨花瓶岩", note: "日出與低潮光線", minutes: 90 },
      { name: "遊客中心", note: "地質與生態導覽", minutes: 60 },
      { name: "中段海岸線", note: "騎乘或包車移動", minutes: 120 },
      { name: "中澳沙灘", note: "午餐與踏浪", minutes: 90 },
      { name: "傍晚日落", note: "西側海岸線", minutes: 60 },
      { name: "港區晚餐", note: "海鮮或地方料理", minutes: 90 }
    ]
  },
  {
    id: "short",
    duration: "30 分鐘快閃",
    title: "花瓶岩快速地標照",
    pace: "快速 · 不下礁",
    steps: [
      { name: "白沙港", note: "下船直行", minutes: 5 },
      { name: "花瓶岩觀景點", note: "遠觀拍照", minutes: 20 },
      { name: "回港", note: "預留緩衝", minutes: 5 }
    ]
  }
];

// -----------------------------------------------------------------------------
// 访客责任与科普（生态与地质科普）
// -----------------------------------------------------------------------------
export interface EtiquetteTopic {
  id: string;
  topic: string;
  rule: string;
  reason: string;
}

export const visitorEtiquette: EtiquetteTopic[] = [
  {
    id: "reef",
    topic: "珊瑚礁與潮間帶",
    rule: "不踩踏、不翻動、不採集礁面生物。",
    reason: "珊瑚與藻類是島嶼海岸的第一道防線，也是小魚與海龜幼體的家。"
  },
  {
    id: "turtle",
    topic: "綠蠵龜觀察",
    rule: "保持 3 公尺以上距離，不追逐、不觸摸、不閃光。",
    reason: "綠蠵龜為保育類動物，受干擾會中斷覓食與換氣，甚至棄巢。"
  },
  {
    id: "rock",
    topic: "花瓶岩岩體",
    rule: "不攀爬、不刻字、不丟擲。",
    reason: "花瓶岩頸部受海蝕與風化持續變窄；人為破壞會加速其形貌改變。"
  },
  {
    id: "waste",
    topic: "垃圾與資源",
    rule: "垃圾帶回港區分類；勿將食物殘渣留於沙灘。",
    reason: "海龜會誤食塑膠袋；島上無大型焚化爐，垃圾外運成本高。"
  },
  {
    id: "lights",
    topic: "夜間光害",
    rule: "沙灘夜間管制，避免使用高亮度手電筒直射沙灘。",
    reason: "海龜孵化幼龜會循光入海，過強人造光會誤導其走向。"
  }
];

// -----------------------------------------------------------------------------
// 历史背景与故事传说（科普向，不杜撰）
// -----------------------------------------------------------------------------
export interface HistoryTopic {
  id: string;
  title: string;
  period?: string;
  content: string;
}

export const historyTopics: HistoryTopic[] = [
  {
    id: "name",
    title: "琉球嶼地名源流",
    period: "明、清",
    content:
      "小琉球原名「琉球嶼」、「東港轄下小琉球」，與今日日本沖繩的「琉球」名稱僅為音近巧合；明、清時期文獻已將其記為南方島嶼，早期漁民視其為季節性作業場域。"
  },
  {
    id: "village",
    title: "漁村與信仰",
    period: "19 世紀後",
    content:
      "琉球嶼在地居民以漁業為主，島上宮廟多奉祀媽祖與土地公；花瓶岩周邊的海岸線是早期漁民觀察風浪與海流的視覺參考點之一。"
  },
  {
    id: "geology",
    title: "地質背景：更新世隆起珊瑚礁",
    period: "約 10 萬年前至今",
    content:
      "花瓶岩屬於更新世隆起珊瑚礁，由古代珊瑚骨骼與鈣質沉積物膠結而成，後受地殼抬升與海平面變動露出海面；岩體頸部因海蝕持續變窄，是觀察地質作用的天然樣品。"
  },
  {
    id: "folklore-vase",
    title: "在地傳說：失落的花瓶",
    content:
      "琉球鄉口述故事中，花瓶岩被描述為「被風浪打翻後留在海面」的花瓶化身；不同家族說法略有差異，但共同點是把它視為守護海岸、提醒漁民勿過度靠近的象徵。"
  },
  {
    id: "folklore-guard",
    title: "在地傳說：海口守護",
    content:
      "部分長者口述中，琉球嶼由「龜」與「蛇」兩種靈獸共同守護海口；花瓶岩與周邊礁岩被視為兩者浮出海面巡視的軌跡，提醒漁民與旅人尊重海岸的界線。"
  },
  {
    id: "ecology-recovery",
    title: "近年生態復育",
    period: "2010 年代後",
    content:
      "在海洋委員會海洋保育署與在地社區推動下，島上海龜棲地與潮間帶逐步納入分區管理；夜間沙灘管制、潮池觀察公約與垃圾減量政策，是這十餘年累積的成果。"
  }
];