export type GuideSection = {
  kicker?: string;
  title: string;
  body: string;
  bullets?: string[];
  note?: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Guide = {
  slug: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  description: string;
  lead: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  gallery?: { src: string; alt: string }[];
  place?: {
    address: string; mapUrl: string; managerTitle: string; managerDescription: string; sourceUrl: string;
    officialName: string; type: string; hours: string; admission: string; visitDuration: string;
    arrival: string; highlights: string[]; route: string[]; etiquette: string[]; photoSpots: string[];
    accommodation: string; ratingNote: string;
  };
  facts: { label: string; value: string }[];
  sections: GuideSection[];
  related: string[];
  faq?: FAQ[];
  action?: { label: string; href: string; external?: boolean };
  /**
   * 站内 SEO 内部链接（用于把高 CTR 页面权重传递到 zero-click 页面）。
   * 锚文本带关键词，description 是更口语化的提示。
   */
  links?: { label: string; href: string; description?: string }[];
};

export const guides: Guide[] = [
  {
    slug: "liuqiu-visitor-center",
    eyebrow: "白沙港旁的旅遊資訊站",
    title: "琉球管理站暨遊客中心｜交通、設施與海景平台",
    seoTitle: "小琉球遊客中心攻略｜地址、開放資訊、白沙港步行與海景平台",
    description: "小琉球琉球管理站暨遊客中心位於白沙觀光港旁山腰，介紹紅瓦建築、旅遊諮詢、海景平台、抵達方式及順遊路線。",
    lead: "下船後若需要重新確認島上交通、景點與參觀順序，位於白沙港半山腰的琉球管理站暨遊客中心，是一個適合先取得資訊、再開始環島的節點。",
    image: "/images/liuqiu-visitor-center.jpg", imageAlt: "小琉球管理站暨遊客中心建築實景",
    gallery: [{ src: "/images/liuqiu-visitor-center.jpg", alt: "琉球管理站暨遊客中心外觀與入口" }],
    facts: [{ label: "建築", value: "三層樓遊客中心" }, { label: "位置", value: "白沙港半山腰" }, { label: "服務", value: "旅遊資訊與導覽" }, { label: "景觀", value: "港灣海景平台" }],
    place: {
      address: "929 臺灣屏東縣琉球鄉民族路20-1號", mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%90%89%E7%90%83%E7%AE%A1%E7%90%86%E7%AB%99%E6%9A%A8%E9%81%8A%E5%AE%A2%E4%B8%AD%E5%BF%83", managerTitle: "關於琉球管理站暨遊客中心", managerDescription: "琉球管理站暨遊客中心由交通部觀光署大鵬灣國家風景區管理處設置與提供旅遊服務。管理處於2009年取得原琉球鄉圖書館土地與建物使用權並整建為遊客中心。這裡是旅遊諮詢及景區導覽節點，不是港口船班售票櫃檯。", sourceUrl: "https://www.dbnsa.gov.tw/zh-tw/attraction/AttractionPage?a=207",
      officialName: "琉球管理站暨遊客中心", type: "遊客資訊中心、觀景平台與公共服務建築", hours: "室內服務時段依管理處最新公告；戶外空間依現場開放情況", admission: "一般旅遊諮詢服務不另收景點門票", visitDuration: "約15–30分鐘，依諮詢需求調整", arrival: "由白沙觀光港沿道路步行上坡至半山腰；注意坡度與人車動線，行動不便者可先詢問無障礙到達方式。", highlights: ["紅瓦屋頂與三層樓建築，具有島嶼公共服務建築的特色", "從圖書館轉型為遊客中心，反映觀光接待需求的發展", "旅遊諮詢與動靜態導覽可協助安排島上行程", "戶外平台能遠望白沙港與海面"], route: ["從白沙觀光港確認交通與回程碼頭", "沿可通行道路上坡抵達遊客中心", "利用旅遊資訊櫃檯與導覽資料規劃行程", "在開放的戶外平台欣賞港景，再前往花瓶岩"], etiquette: ["室內諮詢區依現場服務時間進入", "管理站辦公區非一般遊客參觀空間", "坡道可能曝曬或濕滑，注意補水與腳步", "不要阻擋服務櫃檯或團體導覽動線"], photoSpots: ["建築入口安全位置：拍攝紅瓦與立面", "戶外海景平台：遠攝白沙港及船隻", "通往建築的上坡道路：以高低差呈現港口與山腰關係"], accommodation: "若住宿在白沙港附近，可登島後先詢問服務資訊，再安排周邊散步；住宿更遠者應衡量回港交通。", ratingNote: "最新評價請在此中心的專屬 Google Maps 頁面查詢，本站不展示未同步的即時評分。"
    },
    sections: [
      { kicker: "探索", title: "在港邊山腰整理小琉球行程", body: "遊客中心位於白沙觀光港旁的半山腰，是旅客取得地圖與資訊的實用一站。先確認交通、開放資訊與行程路線，再選擇前往花瓶岩、中澳沙灘或島上其他景點。" },
      { kicker: "建築與歷史", title: "從鄉立圖書館到遊客中心", body: "管理處官方介紹指出，為提升旅遊服務品質，於2009年取得原琉球鄉圖書館土地及建物並整建為永久性的管理站暨遊客中心。三層樓建築依地勢設入口與服務空間，外觀紅瓦是醒目的辨識元素。" },
      { kicker: "核心體驗", title: "諮詢、導覽與港灣遠眺", body: "資訊櫃檯與導覽設施適合初次到訪者，戶外觀景平台則可觀看白沙港。平台是港區觀景的補充位置，請尊重管理辦公區的出入限制。" },
      { kicker: "步行與交通", title: "從白沙港上坡抵達", body: "這段路線與平坦港區不同，需評估坡度、氣溫及行李負擔。建議先處理大型行李，再走到中心，必要時可詢問合適接駁方式。" },
      { kicker: "拍照與順遊", title: "由港景接到花瓶岩", body: "在戶外平台拍攝港灣全景後，可沿道路返回港區，再到花瓶岩看珊瑚礁海蝕地貌；若當日海況不佳，遊客中心的資訊補給仍具有價值。" }
    ],
    related: ["baisha-tourist-harbor", "from-baisha-port", "nearby"],
    faq: [{ question: "遊客中心在白沙港碼頭裡嗎？", answer: "不是，在港邊半山腰，需沿道路上坡前往。" }, { question: "可以在遊客中心買所有船票嗎？", answer: "這裡主要提供觀光資訊，船票與報到應向各航運業者確認。" }, { question: "遊客中心適合先去還是最後去？", answer: "初次登島適合先去取得資訊；若是回程前造訪，務必預留回到正確碼頭的時間。" }],
    action: { label: "琉球遊客中心 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%E7%90%89%E7%90%83%E7%AE%A1%E7%90%86%E7%AB%99%E6%9A%A8%E9%81%8A%E5%AE%A2%E4%B8%AD%E5%BF%83", external: true },
    links: [{ label: "管理處官方介紹", href: "https://www.dbnsa.gov.tw/zh-tw/attraction/AttractionPage?a=207" }, { label: "白沙觀光港", href: "/baisha-tourist-harbor/" }]
  },
  {
    slug: "beauty-cave",
    eyebrow: "小琉球西北海岸",
    title: "美人洞｜珊瑚礁洞穴、十三景與海岸步道",
    seoTitle: "小琉球美人洞攻略｜門票、十三景、珊瑚礁地形與交通路線",
    description: "探索小琉球美人洞的1975年開發歷史、隆起珊瑚礁、十三景、門票與開放資訊、海岸步道和拍攝建議。",
    lead: "美人洞位於小琉球西北側，特色是高位珊瑚礁岩、天然洞穴與海景步道；從花瓶岩的獨立礁石延伸到美人洞，能看到同一座珊瑚礁島不同的地貌。",
    image: "/images/beauty-cave.jpg", imageAlt: "小琉球美人洞入口與珊瑚礁岩景觀實景", gallery: [{ src: "/images/beauty-cave.jpg", alt: "美人洞景區入口與周邊岩石步道" }],
    facts: [{ label: "地形", value: "高位珊瑚礁洞穴" }, { label: "開闢", value: "1975年" }, { label: "區域", value: "琉球嶼西北側" }, { label: "特色", value: "十三景與海景" }],
    place: {
      address: "929 臺灣屏東縣琉球鄉美人洞景區（入口依現場標示）", mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%BE%8E%E4%BA%BA%E6%B4%9E%20%E5%B0%8F%E7%90%89%E7%90%83", managerTitle: "關於美人洞的管理與歷史", managerDescription: "美人洞景區由琉球鄉公所於1975年以公共造產方式開闢。交通部觀光署大鵬灣國家風景區管理處提供官方景點資訊，票務及部分路段開放由相關權責單位公告。景區具有天然洞穴及人工整理步道，需同時尊重地質環境和設施管理。", sourceUrl: "https://www.dbnsa.gov.tw/zh-tw/attraction/AttractionPage?a=186",
      officialName: "美人洞（Beauty Cave）", type: "珊瑚礁洞穴、收費景區、海岸步道", hours: "依琉球鄉公所景區當日開放與臨時管制公告", admission: "與山豬溝、烏鬼洞有聯票安排；實際票價請以琉球鄉公所公告為準", visitDuration: "建議約60–90分鐘，依開放步道與體力調整", arrival: "從白沙港、花瓶岩方向可依島上道路前往西北側；騎車應停在合法停車位置後步行入園。", highlights: ["高位珊瑚礁岩與洞穴構成天然岩壁景觀", "1975年由鄉公所以公共造產方式開闢，具有地方觀光發展歷史", "十三景涵蓋洞穴、岩石與眺海亭等多種看點", "部分路段涉及生態廊道與管制，路線需依當日告示調整"], route: ["抵達售票或入口區確認今日開放步道", "沿指定路線欣賞珊瑚礁岩與洞穴形貌", "選擇開放觀景位置眺望西北海岸", "循標示出口離開，按時間回港或續往其他景點"], etiquette: ["濕滑、狹窄或低矮洞道放慢腳步", "不觸摸或敲擊脆弱岩面，也不攀爬岩壁", "不得穿越封閉的生態廊道路段", "景區開放及票務依當日現場公告"], photoSpots: ["入口及標示區：記錄景區辨識地標", "開放洞穴外側：利用自然光呈現珊瑚礁紋理", "眺海亭等開放觀景處：拍攝海面與岩岸層次"], accommodation: "從白沙港周邊住宿出發可將美人洞排入半日西北海岸行程；需趕船者不宜壓縮步道參觀與返港緩衝。", ratingNote: "旅客評分與評論數請至美人洞專屬 Google Maps 地點頁查看最新資料。"
    },
    sections: [
      { kicker: "景區概覽", title: "洞穴與海景並存的珊瑚礁步道", body: "美人洞不是單一洞口，而是由多段珊瑚礁岩景、洞穴與眺海位置構成的遊覽區。景觀重點是岩壁的凹凸紋理、縫隙與海岸遠景。" },
      { kicker: "歷史與管理", title: "1975年地方公共造產景區", body: "依管理處記載，琉球鄉公所於1975年開闢美人洞。隨後形成十三景的遊覽體系，將自然岩洞轉化為可依步道參觀的公共觀光空間。" },
      { kicker: "地質與觀察", title: "高位珊瑚礁與海蝕洞", body: "此處的高位珊瑚礁岩可以和花瓶岩的差異侵蝕形態相互對照。觀察時留意孔隙、層理與洞穴光影，但不應取樣、刻字或攀爬。" },
      { kicker: "遊覽建議", title: "先看告示再選路線", body: "景區有狹窄通道及可能封閉的生態路段，入園前先查開放範圍。穿止滑包覆鞋、帶水、避免在雨後或浪況惡劣時接近危險邊緣。" },
      { kicker: "拍攝與交通", title: "利用自然光與眺海視角", body: "洞口光線反差較大，可從安全平地拍攝洞穴框景與岩石表面；海景則適合從開放眺望區遠攝，切勿為了無人構圖跨過封閉線。" }
    ],
    related: ["nearby", "geology", "baisha-tourist-harbor"],
    faq: [{ question: "美人洞與花瓶岩是同一處嗎？", answer: "不是。花瓶岩是北側海岸獨立礁岩，美人洞是西北側以珊瑚礁洞穴及步道為主的景區。" }, { question: "美人洞需要門票嗎？", answer: "屬於有聯票安排的景區，當日票價及適用範圍請向琉球鄉公所或現場售票處查詢。" }, { question: "美人洞所有步道都開放嗎？", answer: "不一定，部分路段有生態廊道及臨時管制，應以現場公告為準。" }],
    action: { label: "美人洞 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%E7%BE%8E%E4%BA%BA%E6%B4%9E%20%E5%B0%8F%E7%90%89%E7%90%83", external: true },
    links: [{ label: "大鵬灣美人洞官方介紹", href: "https://www.dbnsa.gov.tw/zh-tw/attraction/AttractionPage?a=186" }, { label: "花瓶岩附近景點", href: "/nearby/" }]
  },
  {
    slug: "baisha-tourist-harbor",
    eyebrow: "小琉球登島門戶",
    title: "白沙觀光港｜登島交通與港灣散步指南",
    seoTitle: "白沙觀光港攻略｜地址、船班動線、花瓶岩步行與拍照位置",
    description: "白沙觀光港是小琉球主要登島港口。認識港區位置、碼頭動線、海港歷史、到花瓶岩的步行安排、觀景拍照與行前 FAQ。",
    lead: "從東港搭船抵達小琉球，首先看見的往往是白沙觀光港。這裡不只供旅客上下船，也串連花瓶岩、中澳沙灘與島上旅行的第一段步行路線。",
    image: "/images/baisha-port.webp",
    imageAlt: "白沙觀光港的客輪、漁船與港灣實景",
    gallery: [{ src: "/images/baisha-port.webp", alt: "白沙觀光港停泊船隻及港區景觀" }],
    place: {
      address: "929 臺灣屏東縣琉球鄉中山路74-1號（觀光資料所列地址）",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%99%BD%E6%B2%99%E8%A7%80%E5%85%89%E6%B8%AF%20%E5%B1%8F%E6%9D%B1%E7%B8%A3%E7%90%89%E7%90%83%E9%84%89",
      managerTitle: "關於白沙觀光港的管理與服務",
      managerDescription: "白沙觀光港是屏東縣小琉球的主要旅客港口。港區旅運設施與船班服務涉及屏東縣政府及不同航運營運單位；交通部觀光署大鵬灣國家風景區管理處提供景點導覽與觀光資訊。旅客應以現場港區公告、船公司及相關機關發布的資訊為準。",
      sourceUrl: "https://www.dbnsa.gov.tw/zh-tw/attraction/AttractionPage?a=187",
      officialName: "白沙觀光港（Baisha Tourist Harbor）", type: "客運港口、海上交通與港灣觀景", hours: "公共通行區依現場公告；客輪及服務設施按各自營運時間", admission: "港灣公共觀景不另售景點門票；搭船需購買船票", visitDuration: "非搭船觀景約 15–30 分鐘，另預留報到與候船時間",
      arrival: "由東港依船公司公布之航線搭船至小琉球；島上請按實際抵達碼頭及指示前往港外道路。",
      highlights: ["作為小琉球主要登島門戶，觀察客輪與島民日常交通", "防波堤、港池與候船設施構成港灣工程景觀", "可銜接花瓶岩的海蝕地貌與中澳沙灘的砂岸景觀", "港口與聚落的交界能看見觀光、運輸與在地生活的關係"],
      route: ["確認抵達碼頭、回程船班及行李安排", "沿合法通行的港區步道欣賞船隻與港灣", "從港外道路前往花瓶岩，在安全岸邊觀景", "時間充裕再走往中澳沙灘，最後按船公司規定返港"],
      etiquette: ["不進入管制碼頭、繫船區或作業空間", "行李與拍攝器材不要阻擋旅客動線", "依船公司要求提前報到，天候惡劣時以停航公告為準"],
      photoSpots: ["港外安全位置：以船隻與海岸線作廣角構圖", "允許停留的候船周邊：拍攝碼頭與島嶼交通細節", "港外道路轉向花瓶岩一側：以人文港景對比自然礁岩"],
      accommodation: "若預訂白沙港附近住宿，先詢問行李寄放與接送位置；若住在島內其他區域，回程日應預留返回正確碼頭的時間。",
      ratingNote: "可至白沙觀光港的 Google Maps 地點頁查閱最新評分與評價數；本站不將未同步的分數寫成即時資料。"
    },
    facts: [{ label: "地點", value: "屏東縣琉球鄉" }, { label: "用途", value: "旅客進出港口" }, { label: "周邊", value: "花瓶岩、中澳沙灘" }, { label: "搭船", value: "依船公司公告" }],
    sections: [
      { kicker: "探索港灣", title: "從渡輪碼頭認識小琉球", body: "白沙觀光港是旅客進入小琉球的核心節點。港區兼具海上運輸、旅客服務與觀景功能，從船隻進出、堤岸到港外聚落，呈現島嶼與臺灣本島往來的日常。港口以交通設施為主，並非可任意進入的碼頭攝影場。" },
      { kicker: "遊覽建議", title: "先確認碼頭，再安排港邊短遊", body: "下船後先處理行李、返程班次及交通工具，再到允許通行的港邊平整空間觀景。趕船時先回報到位置，不要在登船動線附近停留拍照。", bullets: ["下船先確認回程航線與報到碼頭", "若有大型行李，先安排寄放或運送", "港邊散步以人行安全區為主，不進入作業區", "晴天注意曝曬，遇強風留意港區公告"] },
      { kicker: "景區特色", title: "客輪、港灣與島嶼海岸線", body: "港池與防波堤構成白沙港的主要工程景觀，船隻、岸上設施與遠處海面交織成島嶼交通的典型畫面。與自然海蝕地標花瓶岩不同，白沙港的看點是人類為海上交通建設的港灣空間。" },
      { kicker: "基本資料", title: "地址、時間與費用", body: "觀光公開資料列示地址為屏東縣琉球鄉中山路74-1號。港邊公共通行區與碼頭管制範圍不同；搭船需依船公司票價、時刻及登船規則，不能把港區開放理解為全天候可進入所有設施。" },
      { kicker: "交通方式", title: "如何抵達白沙觀光港", body: "從屏東東港搭乘前往小琉球的航班，實際抵達港口及碼頭以購票航線為準。島上可依住宿位置選擇步行、接駁或合法租用車輛；前往花瓶岩可沿港外安全道路步行，接近海岸後依指示通行。", bullets: ["搭船前核對出發港、抵達港及回程班次", "港區停車、上下客依現場標誌", "前往花瓶岩的路線詳見站內白沙港步行指南"] },
      { kicker: "推薦路線", title: "白沙港到花瓶岩的短程散步", body: "01｜抵港後確認回程碼頭；02｜在可通行區域看港灣與船隻；03｜沿港外道路朝花瓶岩前進；04｜在岸上安全位置觀察珊瑚礁岩；05｜依時間返回港區，或改走中澳沙灘方向。請依現場道路與天候調整。" },
      { kicker: "攝影機位", title: "三種港灣構圖", body: "在不妨礙乘客的安全位置，可拍攝船隻與堤岸的層次、港外聚落和藍色海面，以及返程前的港灣全景。避免把鏡頭架在通道中央，勿跨越欄杆或進入碼頭作業區。" },
      { kicker: "周邊與住宿", title: "從交通節點安排島上停留", body: "白沙港適合連接花瓶岩與中澳沙灘。當日往返旅客可優先控制回港時間；過夜旅客則可按住宿位置與行李安排，把港口當作第一站或最後一站。" }
    ],
    related: ["from-baisha-port", "zhongao-beach", "nearby"],
    faq: [{ question: "白沙觀光港就是小琉球所有船班的抵達港嗎？", answer: "不是所有航線都必然抵達同一碼頭。購票時應確認航線、營運船公司與實際港口。" }, { question: "白沙港可以免費散步嗎？", answer: "可在允許通行的公共空間觀景；登船區及部分港務設施受管制，搭船另須購票。" }, { question: "白沙港如何走到花瓶岩？", answer: "可參考本站從白沙觀光港到花瓶岩的步行指南，最後一段仍以現場道路與指標為準。" }],
    action: { label: "白沙觀光港 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%E7%99%BD%E6%B2%99%E8%A7%80%E5%85%89%E6%B8%AF%20%E5%B1%8F%E6%9D%B1%E7%B8%A3%E7%90%89%E7%90%83%E9%84%89", external: true },
    links: [{ label: "官方白沙觀光港介紹", href: "https://www.dbnsa.gov.tw/zh-tw/attraction/AttractionPage?a=187" }, { label: "從白沙港走到花瓶岩", href: "/from-baisha-port/" }, { label: "中澳沙灘遊覽指南", href: "/zhongao-beach/" }]
  },
  {
    slug: "zhongao-beach",
    eyebrow: "北岸貝殼砂海灘",
    title: "中澳沙灘｜小琉球海岸與親子觀景指南",
    seoTitle: "中澳沙灘攻略｜位置、貝殼砂、海龜保育、交通與拍照路線",
    description: "小琉球中澳沙灘位於白沙觀光港旁，介紹貝殼砂形成、迎王請水文化、海龜產卵環境、步行交通、拍攝機位及 FAQ。",
    lead: "位於白沙港旁的中澳沙灘，與花瓶岩的礁石輪廓形成對比：這裡是由珊瑚礁與貝殼碎屑堆積的海岸，也是小琉球重要的自然與地方文化場景。",
    image: "/images/zhongao-beach.webp",
    imageAlt: "小琉球中澳沙灘的貝殼砂海岸實景",
    gallery: [{ src: "/images/zhongao-beach.webp", alt: "中澳沙灘海岸、砂地與海面景觀" }],
    place: {
      address: "929 臺灣屏東縣琉球鄉中澳沙灘（白沙觀光港東側）",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=%E4%B8%AD%E6%BE%B3%E6%B2%99%E7%81%98%20%E5%B0%8F%E7%90%89%E7%90%83",
      managerTitle: "關於中澳沙灘的管理與保育",
      managerDescription: "中澳沙灘位於大鵬灣國家風景區的琉球嶼範圍，觀光導覽與海域遊憩管理由交通部觀光署大鵬灣國家風景區管理處參與辦理；土地、海龜棲地保護與海岸清潔則涉及不同權責機關及琉球鄉公所。這片海岸同時是自然棲地，請依現場公告與季節性保育措施活動。",
      sourceUrl: "https://www.dbnsa.gov.tw/attraction/AttractionPage?a=254",
      officialName: "中澳沙灘（Zhongao Beach）", type: "貝殼砂海灘、海岸生態與地方文化", hours: "自然海岸無固定室內營業時段；實際進入範圍依海況及保育公告", admission: "一般岸上觀景不設固定售票口；水域活動與服務另計", visitDuration: "岸上觀景及拍照約 30–60 分鐘，不含水域活動",
      arrival: "自白沙觀光港依港外道路及現場指標前往東側沙灘；由花瓶岩出發應走道路，不跨越海岸礁石。",
      highlights: ["珊瑚礁與貝殼碎屑堆積形成的帶狀砂岸", "與花瓶岩海蝕礁石形成鮮明的地貌比較", "琉球迎王平安祭請水文化的活動場域", "涉及綠蠵龜棲地保護，造訪需要尊重野生動物"],
      route: ["白沙觀光港確認補水、遮陽及返程動線", "沿港外道路抵達中澳沙灘入口，觀察現場告示", "在開放區域看貝殼砂、浪線與海岸曲線", "從原路返回港區，或安排花瓶岩地質觀察"],
      etiquette: ["遵守海龜棲地及季節性封閉區域標示", "不使用強光干擾夜間生態，也不追逐海龜", "不撿拾珊瑚或貝殼、不留下垃圾", "浪況不佳時改為岸上觀景，不自行入水"],
      photoSpots: ["沙灘開放區後緣：完整納入砂岸曲線與海平線", "港口方向的安全岸邊：用船隻襯托海岸空間", "日間側光的砂地：低角度拍攝貝殼砂與浪線紋理"],
      accommodation: "選擇白沙港一帶住宿可將沙灘與花瓶岩安排在同次步行行程；需參加水域活動時，另與合法業者確認集合點及裝備。",
      ratingNote: "最新旅客評分與評論數請以中澳沙灘的 Google Maps 地點頁為準；本站不顯示未經同步的即時數字。"
    },
    facts: [{ label: "位置", value: "琉球嶼東北側" }, { label: "地貌", value: "珊瑚與貝殼砂" }, { label: "鄰近", value: "白沙觀光港" }, { label: "保育", value: "海龜棲地" }],
    sections: [
      { kicker: "探索沙灘", title: "從港邊走進貝殼砂海岸", body: "中澳沙灘位於小琉球東北側，約在龍蝦洞至白沙新港間，白沙觀光港附近即可找到這片白色海岸。和花瓶岩的孤立礁石不同，這裡的看點在於沙岸延伸、浪線與港口地景的連續變化。" },
      { kicker: "遊覽建議", title: "看海與拍照，也要為棲地留下空間", body: "建議先確認潮位、浪況與現場是否有保育或活動管制。沙灘看似平緩，仍可能有水流、浪湧與礁石；帶小孩的家庭應始終保持近距看顧，不把平緩地形誤認為安全下水保證。", bullets: ["留在合法開放的活動範圍", "不要移動沙灘上的海龜巢位標示", "不使用強光干擾夜間野生動物", "不採集珊瑚、貝殼或帶走沙粒"] },
      { kicker: "地形特色", title: "珊瑚礁與貝殼碎屑形成沙岸", body: "依觀光主管機關公開資料，中澳沙灘的潮間帶與近岸環境受珊瑚礁、貝殼碎屑堆積影響，形成帶狀的貝殼砂海灘。與海蝕雕刻的花瓶岩相較，能直觀比較小琉球海岸的侵蝕與堆積兩種地形過程。" },
      { kicker: "文化歷史", title: "迎王平安祭與「請水」儀式", body: "中澳沙灘不只有自然風景，也是地方宗教文化活動的空間。觀光資料記載，琉球迎王平安祭的「請水」儀式在此舉行。若遇相關祭典，應尊重儀式動線與現場安排，不為拍照干擾參與者。" },
      { kicker: "基本資料", title: "位置、費用與時間", body: "地點為屏東縣琉球鄉中澳沙灘，鄰近白沙觀光港。自然海岸一般不設固定參觀售票口，但活動業者、設施及保育管制可能另有規定；夜間或惡劣天氣不適合自行接近無照明浪線。" },
      { kicker: "交通方式", title: "從白沙港與花瓶岩前往", body: "從白沙觀光港周邊依現場道路與步行動線前往，若從花瓶岩出發，應先返回安全的港外道路再接往沙灘，不要沿海岸礁石尋找捷徑。騎車者請在合法停放處停妥。" },
      { kicker: "建議步行路線", title: "港口、沙灘與礁岩的海岸比較", body: "01｜白沙港確認返程與補給；02｜前往中澳沙灘入口，觀察貝殼砂與海岸線；03｜在安全的岸上位置拍攝海面和港灣；04｜返回港區，再視時間前往花瓶岩觀察不同地貌。所有轉場以道路及現場指標為準。" },
      { kicker: "攝影機位", title: "沙岸曲線、海面與港景", body: "適合使用三種構圖：遠景保留沙灘曲線與天空；中景記錄潮水與砂地紋理；從安全的岸上位置把港口船隻納入背景。日間光線較足時更容易拍出海水層次；不要為了鏡頭踏入限制區。" },
      { kicker: "住宿與行程", title: "安排海岸慢遊而非趕景點", body: "若住在白沙港周邊，可將中澳沙灘與花瓶岩排為同一個短程海岸行程；若要參加水域活動，請事先確認合格業者與當日狀況，觀景與下水並非同一種行程。" }
    ],
    related: ["baisha-tourist-harbor", "nearby", "safety"],
    faq: [{ question: "中澳沙灘就是花瓶岩嗎？", answer: "不是。中澳沙灘是白沙港附近的砂岸，花瓶岩則是另一處隆起珊瑚礁海蝕地標。" }, { question: "中澳沙灘可以帶小孩玩水嗎？", answer: "可先在岸上觀景；是否適合下水應依當日海況、公告和現場專業評估決定，孩童須有成人全程看顧。" }, { question: "中澳沙灘為什麼要注意海龜？", answer: "這裡涉及海龜產卵棲地保護，應遵守標示，不驚擾、不以強光照射，也不要占用保育區域。" }],
    action: { label: "中澳沙灘 Google Maps", href: "https://www.google.com/maps/search/?api=1&query=%E4%B8%AD%E6%BE%B3%E6%B2%99%E7%81%98%20%E5%B0%8F%E7%90%89%E7%90%83", external: true },
    links: [{ label: "官方中澳沙灘介紹", href: "https://www.dbnsa.gov.tw/attraction/AttractionPage?a=254" }, { label: "白沙觀光港指南", href: "/baisha-tourist-harbor/" }, { label: "花瓶岩地質與形成", href: "/name-origin/" }]
  },
  {
    slug: "name-origin",
    eyebrow: "地標故事與地質",
    title: "花瓶岩為什麼叫花瓶岩？名稱由來與形成過程",
    seoTitle: "花瓶岩由來｜花瓶石為什麼頭大身小？小琉球地質解說",
    description: "花瓶岩又叫花瓶石：珊瑚礁岩抬升後受海水差異侵蝕，形成頭大身小的輪廓；岩頂植物使它像插著花的花瓶。附現場觀察重點與官方資料。",
    lead: "花瓶岩不是人工雕刻的石像。它的名稱與外形都能從現場看懂：隆起的珊瑚礁、長期海蝕，以及長在岩頂的植物共同塑造了這座小琉球地標。",
    image: "/images/vase-rock-geology.webp",
    imageAlt: "小琉球花瓶岩珊瑚礁岩體與頭大身小的輪廓實景",
    facts: [
      { label: "別稱", value: "花瓶石" },
      { label: "岩石", value: "隆起珊瑚礁岩" },
      { label: "造型成因", value: "海水差異侵蝕" },
      { label: "官方資料", value: "大鵬灣管理處" }
    ],
    sections: [
      { kicker: "名稱由來", title: "為什麼叫「花瓶」？", body: "遠看花瓶岩，頂部較寬、下部收窄，像一只立在海邊的花瓶。大鵬灣國家風景區管理處也指出，岩頂生長的臭娘子、盒果藤等植物，好似花瓶中插著花草，名稱便由此而來。", bullets: ["先在岸邊找出頂部寬、腰部窄的輪廓", "觀察岩頂植被，不必靠近或攀爬", "退後一些，讓整座岩體與海平線一起入鏡"] },
      { kicker: "形成過程", title: "先隆起，再經海水侵蝕", body: "花瓶岩原是一塊珊瑚礁岩，因地殼隆起而抬升至海面上。其後海水對岩體不同位置長期侵蝕，逐漸留下上寬下窄的外形。這是自然地形演變，不是短時間內由單一浪潮沖刷而成。", bullets: ["隆起：珊瑚礁岩抬升到海面以上", "侵蝕：海浪長期改變岩體周圍形狀", "留存：形成可從岸上辨識的地標輪廓"] },
      { kicker: "現場看點", title: "從外觀讀懂珊瑚礁海岸", body: "除了花瓶岩本身，周圍海面下還有較新的珊瑚裙礁。對一般旅客而言，最容易辨認的是主岩體形狀、岩頂綠色植被，以及海浪與礁台交界；請從安全的岸上位置觀察，不踩踏珊瑚。" },
      { kicker: "官方參考", title: "核對地質說明與景點位置", body: "以上形成過程與名稱說明參考交通部觀光署大鵬灣國家風景區管理處的花瓶岩景點介紹。地質背景可再搭配本站的地質專題閱讀。", bullets: ["官方花瓶岩景點介紹：https://www.dbnsa.gov.tw/zh-tw/attraction/AttractionPage?a=222", "Google Maps 景點位置：https://maps.app.goo.gl/oJ3AGMRhxSUNnrft9", "現場礁面濕滑，觀察不等於必須走近岩體"] }
    ],
    related: ["geology", "photo-guide", "map"],
    links: [
      { label: "大鵬灣管理處｜花瓶岩官方介紹", href: "https://www.dbnsa.gov.tw/zh-tw/attraction/AttractionPage?a=222", description: "核對名稱由來、隆起珊瑚礁與侵蝕的官方說明。" },
      { label: "花瓶岩地質與珊瑚礁", href: "/geology/", description: "繼續了解海岸礁岩與觀察重點。" }
    ],
    faq: [
      { question: "花瓶岩和花瓶石是不同景點嗎？", answer: "不是，兩個名稱指的是小琉球同一座海岸地標。" },
      { question: "花瓶岩是人工造景嗎？", answer: "不是。大鵬灣國家風景區管理處說明，它是隆起珊瑚礁岩經長期海水差異侵蝕形成的自然地貌。" },
      { question: "為何花瓶岩上面有植物？", answer: "官方景點介紹提到岩頂有臭娘子與盒果藤等植物，外觀像花瓶插著花草，也是名稱的由來。" }
    ],
    action: { label: "查看官方景點說明", href: "https://www.dbnsa.gov.tw/zh-tw/attraction/AttractionPage?a=222", external: true }
  },
  {
    slug: "water-entry-guide",
    eyebrow: "海域活動準備",
    title: "花瓶岩下水指南：浮潛前先確認的事",
    seoTitle: "花瓶岩下水指南｜浮潛入水前的海況、潮汐與安全檢查",
    description: "小琉球花瓶岩可以下水嗎？整理浮潛前的合法活動區域、現場海況、潮流、裝備與教練帶領檢查事項；潮汐時間不能直接當作入水許可。",
    lead: "看到清澈海水，不代表每個時段、每段礁岸都適合入水。這份指南用來協助你在預約或抵達花瓶岩時，向合格業者確認水域、浪況與退出路線。",
    image: "/images/vase-rock-tide.webp",
    imageAlt: "花瓶岩附近海面與露出水面的珊瑚礁海岸實景",
    facts: [
      { label: "活動類型", value: "浮潛／潛水" },
      { label: "先確認", value: "合法水域與管制" },
      { label: "再確認", value: "浪況、潮流、能見度" },
      { label: "初學者", value: "專業人員帶領" }
    ],
    sections: [
      { kicker: "是否能下水", title: "先問今天的水域是否開放、適不適合", body: "大鵬灣管理處的旅遊指引提醒遊客選擇合法水域活動。花瓶岩周邊有浮潛與潛水活動，但實際可否入水要看當日公告、海況與業者評估，不應單靠網路文章判斷。", bullets: ["確認活動位置與當日是否有管制", "詢問當地合格業者或教練當天的入水安排", "不自行跨越標示、繩索或警戒區"] },
      { kicker: "入水前", title: "五個現場檢查", body: "入水前應確認浪況、水溫、潮汐流向與流速，以及水下地形和能見度。若有湧浪、流速不明、雷雨或身體不適，選擇岸上觀景也是完整的花瓶岩行程。", bullets: ["有沒有浪突然拍上礁面？", "入水及上岸位置是否由帶領人員確認？", "潮流與退潮時段是否影響返程？", "裝備是否合身，是否有同伴與救援安排？", "能否清楚說出不適時的停止手勢與撤退路線？"] },
      { kicker: "潮汐不是許可", title: "退潮也未必適合下水", body: "低潮可使更多礁台露出，但同時可能遇到尖銳礁石、淺水區和浪打區。潮汐表提供時間資訊，不能替代當天的浪、流與現場管制判讀。", note: "這不是指定下水點或路線；不要依文字說明自行從礁面入水。" },
      { kicker: "海洋生態", title: "遇到海龜與珊瑚，保持距離", body: "小琉球海域有綠蠵龜活動。保持距離、不追逐觸摸、不餵食、不踩踏珊瑚，並依專業帶領人員指示行動。看見海龜不是保證，也不是追近的理由。" },
      { kicker: "資料與導航", title: "出發前核對官方公告", body: "可使用中央氣象署潮汐預報、管理處官方旅遊指引及現場公告核對資訊。花瓶岩的 Google Maps 位置只用於抵達景點，不代表推薦入水點。", bullets: ["大鵬灣小琉球旅遊指引：https://www.dbnsa.gov.tw/zh-TW/PlanTrip/articles?a=428", "中央氣象署潮汐預報：https://www.cwa.gov.tw/V8/C/M/tide.html", "官方花瓶岩即時影像：https://www.dbnsa.gov.tw/zh-TW/Attraction/LiveVideoPage?a=402"] }
    ],
    related: ["snorkeling", "tide-guide", "safety"],
    links: [
      { label: "大鵬灣管理處｜小琉球旅遊指引", href: "https://www.dbnsa.gov.tw/zh-TW/PlanTrip/articles?a=428", description: "查核合法水域活動與生態保育提醒。" },
      { label: "中央氣象署潮汐預報", href: "https://www.cwa.gov.tw/V8/C/M/tide.html", description: "行前查詢當日潮位，仍須判斷現場浪況。" },
      { label: "花瓶岩潮汐指南", href: "/tide-guide/", description: "了解不同潮位下的礁面變化與風險。" }
    ],
    faq: [
      { question: "花瓶岩退潮就能下水嗎？", answer: "不能只憑退潮判斷。仍需核對海況、合法活動範圍、現場公告與專業帶領人員的評估。" },
      { question: "第一次浮潛可以自己從礁岸下水嗎？", answer: "不建議自行在不熟悉的礁岸入水。應選擇合格業者，依當日安全安排參加活動。" },
      { question: "Google Maps 定位是浮潛入口嗎？", answer: "不是。地圖標示景點位置，非指定入水點；入水與上岸地點須依現場規範與帶領人員指示。" }
    ],
    action: { label: "查看官方旅遊指引", href: "https://www.dbnsa.gov.tw/zh-TW/PlanTrip/articles?a=428", external: true }
  },
  {
    slug: "map",
    eyebrow: "定位與導航",
    title: "花瓶岩 Google Maps 位置",
    seoTitle: "花瓶岩 Google Maps｜位置、座標與步行導航",
    description:
      "查看小琉球花瓶岩 Google Maps 位置、經緯度、白沙港步行與機車導航入口。",
    lead:
      "花瓶岩位於小琉球北側、白沙觀光港西南方的海岸。先儲存座標，再依現場道路與人流調整最後一段路線。",
    image: "/images/vase-rock-bay.webp",
    imageAlt: "從海面望向花瓶岩旁海灣與白沙港沿岸",
    facts: [
      { label: "座標", value: "22.3556469, 120.3807532" },
      { label: "區域", value: "屏東縣琉球鄉" },
      { label: "港口距離", value: "約 300 公尺" },
      { label: "建議模式", value: "步行導航" }
    ],
    sections: [
      {
        kicker: "抵達前",
        title: "先把位置存進手機",
        body:
          "島上巷道短、轉彎多，導航可幫你掌握方向；接近海岸後，仍要以現場指標、道路狀況與人車動線為準。",
        bullets: [
          "在有穩定網路時先開啟地點頁面",
          "從白沙港出發時選擇步行模式",
          "騎車請停在允許停放的位置，再步行接近海岸",
          "返程搭船前，保留足夠回港與找碼頭的時間"
        ]
      },
      {
        kicker: "現場判讀",
        title: "導航終點不是涉水指令",
        body:
          "Google Maps 標示的是景點位置，不代表任何潮位都能沿相同路線靠近。若浪打上礁面、通道積水或視線不佳，停在安全位置遠觀即可。",
        note: "不要為了縮短幾步路，穿越浪區或踩上濕滑、顏色較深的礁面。"
      }
    ],
    related: ["from-baisha-port", "itinerary", "safety"],
    action: {
      label: "在 Google Maps 開啟",
      href: "https://www.google.com/maps/place/Vase+Rock/@22.3556469,120.3807532,17z/data=!3m1!4b1!4m6!3m5!1s0x3471e57038033fd7:0xc842f4c9d32e16bf!8m2!3d22.3556469!4d120.3807532!16s%2Fg%2F1tht9wwv",
      external: true
    }
  },
  {
    slug: "from-baisha-port",
    eyebrow: "登島第一站",
    title: "從白沙觀光港走到花瓶岩",
    seoTitle: "白沙港到花瓶岩怎麼走？步行路線與導航",
    description:
      "白沙觀光港到花瓶岩約 300 公尺、步行 5–10 分鐘；給你出港後步行順序、行李託運建議與搭船前回程時間抓法，避免錯過船班。",
    lead:
      "花瓶岩離白沙觀光港很近，適合安排在剛下船或回程前；但搬運大件行李、炎熱午後或趕船時，體感會和地圖距離不同。",
    image: "/images/baisha-port.webp",
    imageAlt: "停泊客輪與漁船的小琉球白沙觀光港",
    facts: [
      { label: "距離", value: "約 300 公尺" },
      { label: "一般步行", value: "約 5–10 分鐘" },
      { label: "建議停留", value: "20–40 分鐘" },
      { label: "路面", value: "港區道路＋海岸礁面" }
    ],
    sections: [
      {
        kicker: "步行順序",
        title: "白沙港 → 港區 → 海岸入口",
        body:
          "下船後先確認返程碼頭與行李安排，接著沿花瓶岩方向離開港區。通過租車與補給區後，依導航靠近海岸入口；最後一段請看現場指標，不要直接把機車騎上礁面。",
        bullets: [
          "01｜在白沙港確認回程船班與登船位置",
          "02｜沿港區外側往花瓶岩方向移動",
          "03｜通過補給與租車區，留意人車交會",
          "04｜抵達海岸入口後，改以步行接近觀景區"
        ]
      },
      {
        kicker: "回程前",
        title: "別把 300 公尺當成零緩衝",
        body:
          "若要在搭船前順遊，請把拍照、人潮、找路、洗腳與回到正確碼頭的時間一起計入。假日港區人車密集，拖行李也會明顯變慢。",
        note: "距離短不等於可以壓線。建議至少在預定登船時間前 30 分鐘回到港區，並依船公司要求報到。"
      },
      {
        kicker: "移動友善度",
        title: "推車與輪椅先停在平整區域",
        body:
          "港區道路大致平整，但接近海岸後會遇到砂礫、落差與不規則礁石。照顧者可在安全平整處輪流觀景，不必勉強通過礁面。",
        bullets: ["午後注意曝曬與補水", "雨後礁面更滑", "夜間不建議進入無照明礁區"]
      }
    ],
    related: ["map", "family-guide", "itinerary"],
    action: {
      label: "開始步行導航",
      href: "https://www.google.com/maps/dir/?api=1&destination=22.3556469,120.3807532&travelmode=walking",
      external: true
    }
  },
  {
    slug: "best-time",
    eyebrow: "光線 × 潮位 × 人流",
    title: "花瓶岩什麼時候去最好？",
    seoTitle: "花瓶岩最佳造訪時間｜何時去最美？拍照光線、潮汐與避開人潮攻略",
    description:
      "掌握花瓶岩的最佳拍攝與觀景時刻！分析清晨順光時間、退潮潮間帶觀賞期、潮汐與季節氣候建議，避開人潮與雨季。",
    lead:
      "沒有單一時段適合所有人。想拍安靜畫面選清晨，想看海水色澤選日間，想要暖色光線可選傍晚；任何時段都要再看當日海況。",
    image: "/images/vase-rock-hero.webp",
    imageAlt: "陰天海面前完整可辨識的小琉球花瓶岩",
    facts: [
      { label: "安靜構圖", value: "清晨" },
      { label: "海水層次", value: "光線充足時" },
      { label: "暖色輪廓", value: "傍晚" },
      { label: "先查", value: "潮汐與海況" }
    ],
    sections: [
      {
        kicker: "清晨",
        title: "留給安靜與柔和光線",
        body:
          "清晨通常較容易保留乾淨背景，光線也較柔和。若想拍剪影、海面留白或慢節奏旅行照，這段時間較有彈性。",
        bullets: ["提早確認日出時間", "礁面背光時更要看清落腳處", "不要在光線不足時冒險涉水"]
      },
      {
        kicker: "日間",
        title: "海水顏色最容易被看見",
        body:
          "陽光充足時，淺水區的青綠層次較清楚，適合手機與一般旅行拍攝。正午反差強，可稍微降低曝光，避免天空與浪花過曝。",
        bullets: ["帽子與飲水要隨身", "避開浪花直打鏡頭的低位", "人多時改用側面或遠景構圖"]
      },
      {
        kicker: "傍晚",
        title: "暖光之後，留意回程能見度",
        body:
          "傍晚的側光能強調岩體紋理，但太陽落下後海岸很快變暗。看完天色就回到平整道路，不要留在礁面整理裝備。",
        note: "最佳時間是「光線合適、潮位可判讀、海況穩定、你還有充足回程時間」的交集。"
      }
    ],
    related: ["tide-guide", "photo-guide", "safety"]
  },
  {
    slug: "tide-guide",
    eyebrow: "先理解，再靠近",
    title: "花瓶岩潮汐與潮位玩法",
    seoTitle: "花瓶岩潮汐與漲退潮指南｜拍照與安全提醒",
    description:
      "了解花瓶岩較低、中間與較高潮位的景觀差異，並前往中央氣象署查詢當日潮汐。",
    lead:
      "潮位會改變可見礁面與拍照畫面，但潮汐表不等同下水許可。風、浪、離岸流、降雨與現場管制都要一起判斷。",
    image: "/images/vase-rock-tide.webp",
    imageAlt: "花瓶岩周圍露出部分礁面，遠處有浮潛遊客",
    facts: [
      { label: "較低潮位", value: "礁台露出較多" },
      { label: "中間潮位", value: "海岩比例均衡" },
      { label: "較高潮位", value: "活動空間較少" },
      { label: "查詢來源", value: "中央氣象署" }
    ],
    sections: [
      {
        kicker: "01／較低潮位",
        title: "看得到更多礁石，不代表比較不滑",
        body:
          "礁台與潮池露出較多，適合從安全位置觀察潮間帶。深色、長藻或持續被浪洗過的表面仍可能非常滑。",
        bullets: ["不翻動石塊或撈取生物", "不踩潮池與活珊瑚", "預留漲潮回程路線"]
      },
      {
        kicker: "02／中間潮位",
        title: "畫面均衡，仍要觀察浪組",
        body:
          "海水與岩體比例通常較自然，適合一般旅遊拍照。先在岸上觀察數分鐘，確認是否有間歇性較大的浪。",
        bullets: ["相機與手機使用腕帶", "人物不要站在浪線上", "看到水色突然變深就退回"]
      },
      {
        kicker: "03／較高潮位",
        title: "海水包圍岩體，接近空間更少",
        body:
          "較高潮位能呈現岩體浮在海上的完整感，但可行走區縮小。保持遠距構圖，不為了靠近而涉過不熟悉的水域。",
        note: "潮汐預報是行前參考；是否接近、踏浪或下水，以現場浪況、警示與專業帶領為準。"
      }
    ],
    related: ["best-time", "photo-guide", "safety"],
    action: {
      label: "查看中央氣象署潮汐預報",
      href: "https://www.cwa.gov.tw/V8/C/M/tide.html",
      external: true
    },
    links: [
      {
        label: "花瓶岩官方即時影像",
        href: "https://www.dbnsa.gov.tw/zh-TW/Attraction/LiveVideoPage?a=402",
        description: "大鵬灣國家風景區管理處提供的花瓶岩現場即時影像入口。"
      },
      {
        label: "花瓶岩最佳造訪時間",
        href: "/best-time/",
        description: "看懂光線與潮汐後，再決定清晨、日間還是傍晚出發。"
      },
      {
        label: "從白沙港走到花瓶岩",
        href: "/from-baisha-port/",
        description: "登島後第一站的步行順序、回港時間與行李建議。"
      },
      {
        label: "花瓶岩常見問題 FAQ",
        href: "/faq/",
        description: "門票、開放時間、退潮、浮潛等 7 個出發前必看問答。"
      },
      {
        label: "花瓶岩浮潛與下水指南",
        href: "/snorkeling/",
        description: "周邊珊瑚礁、海龜觀察、潮汐與初學者安全須知。"
      }
    ]
  },
  {
    slug: "photo-guide",
    eyebrow: "不靠近，也能拍好",
    title: "花瓶岩拍照位置與構圖",
    seoTitle: "花瓶岩拍照指南｜光線、角度與手機構圖",
    description:
      "花瓶岩清晨、日間與傍晚拍照方法；包含手機廣角、人像比例、避開人群與安全距離。",
    lead:
      "花瓶岩輪廓本身已經足夠有辨識度。先找穩定落腳處，再用焦段與人物比例調整畫面，不需要攀爬或站進浪區。",
    image: "/images/vase-rock-water.webp",
    imageAlt: "陽光下海水環繞、岩頂覆有綠色植物的花瓶岩",
    facts: [
      { label: "手機鏡頭", value: "1× 先拍" },
      { label: "人物位置", value: "與岩體錯位" },
      { label: "水平線", value: "保持水平" },
      { label: "安全原則", value: "不攀爬、不貼近" }
    ],
    sections: [
      {
        kicker: "遠景",
        title: "用天空和海面說明尺度",
        body:
          "先用 1× 鏡頭保留完整岩體、水平線與前景。把花瓶岩放在畫面三分線附近，留一些海面給浪花形成方向感。",
        bullets: ["開啟手機水平儀", "輕點岩體鎖定曝光", "天空太亮時略降曝光"]
      },
      {
        kicker: "人像",
        title: "人與岩體不要互相遮住",
        body:
          "人物站在安全乾燥處，攝影者左右移動，讓人像落在岩體旁而非正前方。想讓人小、景大，可往後退並使用 2× 焦段。",
        bullets: ["不做觸摸、推岩石的錯位姿勢", "人多時改拍半身與細節", "連拍抓走動瞬間"]
      },
      {
        kicker: "潮池與倒影",
        title: "低機位之前，先看浪",
        body:
          "較低潮位可能出現潮池反光，但不要跨過濕滑區找倒影。蹲低即可改變角度，相機不要放在會被浪打到的礁面。",
        note: "拍不到的角度就留給下一次。比起一張照片，穩定站立與不打擾地景更重要。"
      }
    ],
    related: ["best-time", "tide-guide", "safety"]
  },
  {
    slug: "snorkeling",
    eyebrow: "海況優先",
    title: "花瓶岩浮潛與下水指南",
    seoTitle: "花瓶岩浮潛指南｜海況、裝備與海龜保育",
    description:
      "小琉球花瓶岩浮潛全指南！解密花瓶岩周邊珊瑚礁生態、海龜經常出沒區域、潮汐注意事宜、初學者裝備租借建議與退潮下水安全。",
    lead:
      "花瓶岩周邊是熱門水域，但熱門不等於每天、每個人都適合下水。第一次浮潛、不熟潮流或不會游泳，請選擇合格教練與完整裝備。",
    image: "/images/turtle-snorkel.webp",
    imageAlt: "小琉球清澈海域中浮潛者與綠蠵龜保持距離共游",
    facts: [
      { label: "初學者", value: "建議專業帶領" },
      { label: "基本裝備", value: "面鏡、呼吸管、浮具" },
      { label: "足部", value: "包覆式涉水鞋或蛙鞋" },
      { label: "先決條件", value: "海況穩定" }
    ],
    sections: [
      {
        kicker: "下水前",
        title: "先問自己四個問題",
        body:
          "你是否熟悉浮具？能否在嗆水時保持冷靜？是否有人同行？是否看得懂今天的浪與流？只要其中一項不確定，就把行程改為岸上觀景或參加有教練的活動。",
        bullets: [
          "檢查面鏡密合與呼吸管",
          "穿著合身浮力裝備",
          "不單獨下水",
          "告知同行者預計上岸時間"
        ]
      },
      {
        kicker: "水中",
        title: "慢慢踢，不站珊瑚",
        body:
          "保持水平漂浮、縮小踢動幅度，避免蛙鞋打到同伴或底部生物。需要休息時抓浮具，不以珊瑚或海龜作支撐。",
        bullets: ["不追逐海龜", "不觸摸、不餵食", "不穿越船隻航道", "體力保留給回程"]
      },
      {
        kicker: "立即上岸",
        title: "出現這些訊號就停止",
        body:
          "呼吸急促、面鏡持續進水、開始發冷、找不到同伴、離岸速度異常或浪況轉強，都不是硬撐的時候。",
        note: "網站無法判定即時海況。現場警示、管理人員與專業教練的判斷優先。"
      }
    ],
    related: ["sea-turtle", "safety", "tide-guide"]
  },
  {
    slug: "sea-turtle",
    eyebrow: "讓牠決定距離",
    title: "花瓶岩海龜觀察守則",
    seoTitle: "花瓶岩海龜｜觀察距離與不打擾守則",
    description:
      "在小琉球花瓶岩周邊觀察綠蠵龜時，如何保持距離、不追逐、不觸摸並降低干擾。",
    lead:
      "小琉球周邊是綠蠵龜的重要棲地。看見海龜時先停下動作，讓牠保有上浮換氣、覓食與離開的空間。",
    image: "/images/turtle-snorkel.webp",
    imageAlt: "小琉球水下綠蠵龜游過珊瑚礁，浮潛者保持距離",
    facts: [
      { label: "看見海龜", value: "先停、再觀察" },
      { label: "禁止", value: "追逐、觸摸、餵食" },
      { label: "換氣路線", value: "不要阻擋" },
      { label: "拍攝", value: "不開閃光、不包圍" }
    ],
    sections: [
      {
        kicker: "距離",
        title: "退一步，畫面反而更完整",
        body:
          "海龜可能突然改變方向或上浮。不要併排包圍，也不要從正上方壓近；保持側後方觀察，讓牠隨時有離開路線。",
        bullets: ["不為自拍靠近", "不伸手碰背甲", "不擋在海龜與水面之間", "幼童由成人全程陪同"]
      },
      {
        kicker: "拍攝",
        title: "用焦段取代靠近",
        body:
          "相機先設定好再下水，看到海龜不急著追。使用廣角時也要保持距離；若牠改變原本方向、加速或停止覓食，就代表你可能已造成干擾。",
        bullets: ["關閉閃光燈", "不拿自拍棒伸向頭部", "控制拍攝時間", "不為了畫面踩踏底部"]
      },
      {
        kicker: "岸上",
        title: "夜間沙灘要降低光害",
        body:
          "小琉球是海龜產卵區域。夜間進入沙灘前先確認是否有管制，避免強光、喧嘩與跨越巡護範圍。",
        note: "沒有看到海龜也很正常。觀察的前提，是不把野生動物變成必須完成的打卡任務。"
      }
    ],
    related: ["snorkeling", "safety", "geology"]
  },
  {
    slug: "safety",
    eyebrow: "先看腳下，再看鏡頭",
    title: "花瓶岩安全與生態提醒",
    seoTitle: "花瓶岩安全指南｜礁石、海況與生態守則",
    description:
      "到花瓶岩前先了解礁石濕滑、浪況、下水限制與不攀爬、不踩踏珊瑚等安全守則。",
    lead:
      "花瓶岩的風險不在距離，而在礁石、浪況與錯估自己能站的位置。穿對鞋、保持距離、隨時留意退路，就能把多數風險留在行程外。",
    image: "/images/vase-rock-geology.webp",
    imageAlt: "海水拍打花瓶岩底部，可見不規則珊瑚礁岩表面",
    facts: [
      { label: "岩體", value: "不攀爬、不倚靠" },
      { label: "礁面", value: "濕滑且凹凸" },
      { label: "海況差", value: "不下水" },
      { label: "建議鞋款", value: "包覆、防滑" }
    ],
    sections: [
      {
        kicker: "地景",
        title: "保持距離，不攀爬花瓶岩",
        body:
          "花瓶岩頸部持續受侵蝕，岩面也可能有鬆動與尖銳處。遠觀能保護地景，也能避免跌落、割傷與被浪困住。",
        bullets: ["不觸摸或倚靠岩體", "不站上岩體拍照", "不刻字、不帶走石塊"]
      },
      {
        kicker: "礁面",
        title: "深色、發亮、有藻的地方特別滑",
        body:
          "步幅放小，雙手保持可平衡，不邊走邊看手機。穿包覆式、防滑的涉水鞋；拖鞋與赤腳都不適合尖銳礁面。",
        bullets: ["雨後提高警覺", "不要跨跳潮池", "讓孩童走在成人內側"]
      },
      {
        kicker: "海況",
        title: "大浪不是唯一危險訊號",
        body:
          "風向、浪週期、離岸流、雷雨與能見度都會改變風險。若浪持續推上礁台、海水混濁、同伴站立不穩或現場已有警示，就不要下水。",
        note: "不踩活珊瑚、不追逐海龜、不翻動潮池石塊。安全與生態不是兩套規則，而是同一件事。"
      }
    ],
    related: ["tide-guide", "snorkeling", "family-guide"]
  },
  {
    slug: "geology",
    eyebrow: "一座會變化的島嶼",
    title: "花瓶岩是怎麼形成的？",
    seoTitle: "花瓶岩怎麼形成？隆起珊瑚礁與差異侵蝕｜小琉球",
    description:
      "用簡單圖解理解小琉球花瓶岩如何由隆起珊瑚礁、海水差異侵蝕與岩頂植物形成今日外觀。",
    lead:
      "花瓶岩不是突然落在海邊的巨石，而是隆起珊瑚礁在海水、風化與時間共同作用下形成的地景。",
    image: "/images/vase-rock-geology.webp",
    imageAlt: "近看花瓶岩粗糙多孔的珊瑚礁岩紋理與上方植被",
    facts: [
      { label: "岩性", value: "珊瑚礁石灰岩" },
      { label: "第一步", value: "地殼隆起" },
      { label: "造型關鍵", value: "海水差異侵蝕" },
      { label: "外觀", value: "頭大、頸部較細" }
    ],
    sections: [
      {
        kicker: "01／隆起",
        title: "原本在海中的珊瑚礁被抬升",
        body:
          "小琉球是珊瑚礁島，地殼作用使礁體逐漸抬升。花瓶岩周邊可見的珊瑚裙礁，也記錄著島嶼與海面長期互動的痕跡。"
      },
      {
        kicker: "02／侵蝕",
        title: "海水在下方反覆磨蝕",
        body:
          "接近海面的部位受浪、鹽分與碎屑反覆作用，侵蝕速度和上方不同，逐漸形成較窄的頸部與較寬的上部。",
        bullets: ["海浪拍擊", "鹽分結晶與風化", "岩體結構差異", "長時間累積"]
      },
      {
        kicker: "03／植被",
        title: "岩頂植物完成「花瓶」想像",
        body:
          "岩頂植物讓整體看起來像插著花草的花瓶，因此得名。這些植物與岩體同樣處在強風、鹽霧與缺水環境中。",
        note: "侵蝕仍在繼續，花瓶岩不是永遠不變的雕像。保持距離，就是讓自然過程少一點人為干擾。"
      }
    ],
    related: ["safety", "best-time", "about"]
  },
  {
    slug: "nearby",
    eyebrow: "短距離順遊",
    title: "花瓶岩附近景點怎麼排？",
    seoTitle: "花瓶岩附近景點｜白沙港、中澳沙灘與順遊路線",
    description:
      "從花瓶岩串連白沙觀光港、琉球遊客中心、中澳沙灘與美人洞方向，依時間安排順遊。",
    lead:
      "花瓶岩適合和登島、離島動線一起安排。先用可用時間決定範圍，再考慮交通方式，不必為了塞進更多景點反覆折返。",
    image: "/images/zhongao-beach.webp",
    imageAlt: "小琉球中澳沙灘的白色沙灘、清澈海水與遠方海岸",
    facts: [
      { label: "最近節點", value: "白沙觀光港" },
      { label: "資訊補給", value: "琉球遊客中心" },
      { label: "親水選項", value: "中澳沙灘" },
      { label: "西北海岸", value: "美人洞方向" }
    ],
    sections: [
      {
        kicker: "30 分鐘",
        title: "白沙港 ↔ 花瓶岩",
        body:
          "適合等船或剛下船、行李已安置的旅客。重點是看一眼完整岩體、拍一組照片，再從原路回到港區。",
        bullets: ["花瓶岩 20 分鐘", "步行與找路 10 分鐘", "趕船不建議壓線使用"]
      },
      {
        kicker: "1 小時",
        title: "白沙港 → 遊客中心周邊 → 花瓶岩",
        body:
          "先取得旅遊資訊、補水與確認路線，再到花瓶岩。若時間不足，保留花瓶岩與回港動線，其他停留彈性刪減。"
      },
      {
        kicker: "2–3 小時",
        title: "花瓶岩 → 西北海岸 → 白沙港",
        body:
          "有機車或接駁時，可沿美人洞方向看西北海岸，再回白沙港。若以中澳沙灘為主，則改走東側短線，避免跨島折返。",
        note: "實際開放、收費、停車與道路狀況可能調整；出發前查看各景點當日公告。"
      }
    ],
    related: ["baisha-tourist-harbor", "zhongao-beach", "liuqiu-visitor-center", "beauty-cave", "itinerary"],
    links: [{ label: "白沙觀光港完整景點專頁", href: "/baisha-tourist-harbor/", description: "交通門戶、港灣工程、攝影及登船提醒。" }, { label: "中澳沙灘完整景點專頁", href: "/zhongao-beach/", description: "貝殼砂、迎王文化、海龜保育與海岸步行。" }, { label: "琉球管理站暨遊客中心", href: "/liuqiu-visitor-center/", description: "白沙港半山腰的旅遊服務、建築歷史與海景平台。" }, { label: "美人洞景區", href: "/beauty-cave/", description: "珊瑚礁洞穴、十三景、步道與票務資訊。" }, { label: "花瓶岩地質由來", href: "/name-origin/", description: "將珊瑚礁海蝕與沙岸堆積一起認識。" }]
  },
  {
    slug: "itinerary",
    eyebrow: "按時間，而不是按清單",
    title: "花瓶岩 30 分鐘、1 小時與半日行程",
    seoTitle: "花瓶岩行程｜30 分鐘、1 小時與半日安排",
    description:
      "依 30 分鐘、1 小時與半日可用時間，安排花瓶岩、白沙港與小琉球北側順遊。",
    lead:
      "先留下回港緩衝，再把剩餘時間交給景點。花瓶岩靠近白沙港，短行程也能成立；時間多時再往西北海岸延伸。",
    image: "/images/xiaoliuqiu-aerial.webp",
    imageAlt: "從空中望向小琉球島嶼、港區與周邊海面",
    imagePosition: "center 58%",
    facts: [
      { label: "極短停留", value: "30 分鐘" },
      { label: "慢拍＋資訊", value: "1 小時" },
      { label: "延伸海岸", value: "半日" },
      { label: "固定保留", value: "回港緩衝" }
    ],
    sections: [
      {
        kicker: "30 分鐘",
        title: "一張好照片，不繞路",
        body:
          "白沙港出發，直接到花瓶岩觀景區，拍攝遠景與一組人像後原路回港。不要下水，也不安排需要更衣的活動。",
        bullets: ["00:00 港區出發", "00:08 抵達與觀察浪況", "00:10 拍照觀景", "00:25 開始回程"]
      },
      {
        kicker: "1 小時",
        title: "把潮位與光線看完整",
        body:
          "在花瓶岩停留 30–40 分鐘，加入不同角度、地質觀察與附近短走。其餘時間留給步行、補水與回港。"
      },
      {
        kicker: "半日",
        title: "北側海岸小環線",
        body:
          "花瓶岩 → 美人洞方向 → 西北海岸停留 → 白沙港。若同行有長輩或幼童，減少停靠點，讓每次上下車更從容。",
        note: "半日路線仍要依天候、體力、船班與景點開放狀況縮放；不要把浮潛硬塞進趕船行程。"
      }
    ],
    related: ["nearby", "map", "from-baisha-port"],
    links: [
      {
        label: "花瓶岩最佳造訪時間",
        href: "/best-time/",
        description: "30 分鐘、1 小時、半日哪個適合你？這裡告訴你依光線與潮汐選時段。"
      },
      {
        label: "花瓶岩常見問題 FAQ",
        href: "/faq/",
        description: "門票、開放時間、退潮、玩水疑問一次解答。"
      },
      {
        label: "花瓶岩浮潛指南",
        href: "/snorkeling/",
        description: "潮汐、海龜觀察與初學者下水前的安全判斷。"
      },
      {
        label: "花瓶岩潮汐指南",
        href: "/tide-guide/",
        description: "完整潮位玩法、趕海窗口與安全判讀。"
      }
    ]
  },
  {
    slug: "family-guide",
    eyebrow: "親子與長輩",
    title: "帶孩子或長輩去花瓶岩",
    seoTitle: "花瓶岩親子與長輩指南｜步行、礁石與休息安排",
    description:
      "帶孩子、長輩、推車或輪椅到花瓶岩前，先了解步行距離、礁石路面、遮陽與安全安排。",
    lead:
      "從白沙港到花瓶岩距離短，但海岸最後一段不是無障礙步道。把目標設為「安全看到完整地標」，不需要每個人都走到同一個位置。",
    image: "/images/vase-rock-bay.webp",
    imageAlt: "花瓶岩旁平靜海灣與遠方港區，呈現靠近白沙港的地理位置",
    facts: [
      { label: "港口步行", value: "約 5–10 分鐘" },
      { label: "最後一段", value: "砂礫與礁面" },
      { label: "遮陽", value: "有限" },
      { label: "推車輪椅", value: "建議停平整區" }
    ],
    sections: [
      {
        kicker: "帶孩子",
        title: "成人站在靠海的一側",
        body:
          "進入海岸區前先說清楚界線：不跑、不跳礁石、不追浪。孩子走在成人內側，拍照時也不要讓孩子獨自背對海面。",
        bullets: ["穿包覆防滑鞋", "準備飲水與防曬", "不撈潮池生物", "浪大就改為遠觀"]
      },
      {
        kicker: "陪長輩",
        title: "平整處就是最好的觀景台",
        body:
          "不必走上不規則礁面才看得到花瓶岩。先在穩定位置停留，攝影者可用中焦段帶回人與地標的合照。",
        bullets: ["避開正午高溫", "準備可隨時休息的安排", "上下車選擇不影響交通的位置"]
      },
      {
        kicker: "推車與輪椅",
        title: "最後一段視現場折返",
        body:
          "港區道路較平整，但海岸入口可能有砂礫、落差與狹窄處。不要抬著推車硬過礁面，可由同行者輪流前往觀景。",
        note: "若當天風強、雨後濕滑或人潮密集，縮短停留比完成原訂路線更適合。"
      }
    ],
    related: ["from-baisha-port", "safety", "itinerary"]
  },
  {
    slug: "faq",
    eyebrow: "出發前最後確認",
    title: "花瓶岩常見問題",
    seoTitle: "花瓶岩門票、開放時間與交通 FAQ｜小琉球花瓶石",
    description:
      "解答花瓶岩旅遊所有疑問：可以下水嗎？適合帶小孩嗎？要門票嗎？如何看退潮時間？前往花瓶岩前必看的 7 個常見問答。",
    lead:
      "把最常被問的到訪問題集中在這裡。遇到天候、海況、交通或管制變動時，仍以現場與主管機關最新資訊為準。",
    image: "/images/vase-rock-water.webp",
    imageAlt: "海水環繞小琉球花瓶岩的日間景色",
    facts: [
      { label: "門票", value: "景點本體免費" },
      { label: "開放", value: "戶外景點、每日開放" },
      { label: "停留", value: "約 20–40 分鐘" },
      { label: "距白沙港", value: "約 300 公尺" }
    ],
    sections: [
      {
        title: "出發前先存三個頁面",
        body:
          "Google Maps 用來定位、中央氣象署用來查潮汐，安全指南用來快速複習現場判斷。不要用固定截圖取代當日資料。",
        bullets: ["花瓶岩地圖", "中央氣象署潮汐", "花瓶岩安全指南"]
      }
    ],
    related: ["map", "best-time", "safety"],
    links: [
      {
        label: "花瓶岩官方即時影像",
        href: "https://www.dbnsa.gov.tw/zh-TW/Attraction/LiveVideoPage?a=402",
        description: "大鵬灣國家風景區管理處提供的花瓶岩現場即時影像入口。"
      },
      {
        label: "花瓶岩潮汐與漲退潮指南",
        href: "/tide-guide/",
        description: "看懂低潮、中潮與高潮的差異，再決定靠近與拍照時機。"
      },
      {
        label: "白沙港到花瓶岩怎麼走",
        href: "/from-baisha-port/",
        description: "登島後的步行順序、回港時間與行李建議。"
      },
      {
        label: "花瓶岩浮潛與下水指南",
        href: "/snorkeling/",
        description: "海況判斷、裝備與海龜觀察守則。"
      }
    ],
    faq: [
      {
        question: "花瓶岩需要門票嗎？",
        answer: "花瓶岩景點本體免費參觀；若延伸前往其他收費園區，請另查該景點公告。"
      },
      {
        question: "花瓶岩有固定開放時間嗎？",
        answer:
          "大鵬灣國家風景區管理處景點資料列為每日開放。它是戶外海岸景點，天候、海況或臨時管制仍可能影響可接近範圍。"
      },
      {
        question: "從白沙港走過去要多久？",
        answer:
          "兩地相距約 300 公尺，一般步行約 5–10 分鐘；帶行李、親子同行或港區人潮多時應多留時間。"
      },
      {
        question: "花瓶岩建議停留多久？",
        answer:
          "單純觀景拍照約 20–40 分鐘。若要看不同角度、閱讀地質資訊或等待光線，可安排約 1 小時。"
      },
      {
        question: "退潮時才能去嗎？",
        answer:
          "不是。不同潮位都有不同景觀；較低潮位露出礁面較多，較高潮位則讓海水包圍岩體。任何潮位都要注意浪況與濕滑。"
      },
      {
        question: "不會游泳可以在花瓶岩浮潛嗎？",
        answer:
          "不建議自行下水。請選擇合格教練、穿著合身浮力裝備，並由專業人員依當日海況判斷。"
      },
      {
        question: "可以攀爬或觸摸花瓶岩嗎？",
        answer:
          "不可以。岩體持續受侵蝕，請保持距離、不攀爬、不觸摸或倚靠。"
      }
    ]
  },
  {
    slug: "about",
    eyebrow: "資料方法",
    title: "關於 Vase Rock",
    seoTitle: "關於 Vase Rock｜資料來源、編輯原則與圖片授權",
    description:
      "了解 Vase Rock 花瓶岩旅遊指南的資料來源、內容更新方式、編輯原則與實景圖片授權。",
    lead:
      "我們把花瓶岩的定位、交通、潮汐理解、拍照與安全資訊整理成手機上容易使用的旅行工具。",
    image: "/images/vase-rock-hero.webp",
    imageAlt: "小琉球花瓶岩與前景珊瑚礁碎石海岸",
    facts: [
      { label: "內容語言", value: "臺灣繁體中文" },
      { label: "核心範圍", value: "花瓶岩與鄰近動線" },
      { label: "即時資料", value: "連回主管機關" },
      { label: "圖片", value: "實景＋授權標示" }
    ],
    sections: [
      {
        kicker: "編輯原則",
        title: "不把無法維護的資料假裝成即時",
        body:
          "網站解釋潮位、光線與路線如何影響旅行決策；當日潮汐、海況、交通與管制則連回可持續更新的來源。",
        bullets: ["不顯示固定評論分數", "不預測海龜出現機率", "不宣稱即時人潮", "不把潮汐表當成下水保證"]
      },
      {
        kicker: "資訊範圍",
        title: "把五個問題做清楚",
        body:
          "花瓶岩在哪裡、怎麼去、什麼時候去、怎麼拍、能不能下水，是本站優先處理的五個問題。內容聚焦花瓶岩與白沙港周邊，不擴張成泛小琉球清單。"
      },
      {
        kicker: "更新",
        title: "需要即時性的資訊，請再確認",
        body:
          "戶外景點會受天候、海況與臨時管制影響。若你發現路線、設施或來源連結已變更，請以現場告示與主管機關公告優先。",
        note: "本頁下方列出主要資料來源與所有實景圖片的攝影者、原始檔案及授權。圖片均經尺寸調整，部分版位有裁切。"
      }
    ],
    related: ["geology", "safety", "faq"]
  }
];

type NearbyAddition = {
  slug: string; name: string; english: string; description: string; image: string;
  official: string; address: string; manager: string; hours: string; admission: string;
  duration: string; history: string; landscape: string; culture: string; route: string[];
  tips: string[]; photos: string[]; faq: FAQ[]; related: string[];
};

const nextNearby: NearbyAddition[] = [
  {
    slug: "lobster-cave", name: "龍蝦洞", english: "Lobster Cave", image: "/images/lobster-cave.jpg",
    description: "小琉球東北海岸的天然海蝕溝與礁岩觀景點，觀察浪蝕地形、往返白沙港的交通與安全拍照方式。",
    official: "https://www.dbnsa.gov.tw/zh-tw/PlanTrip/articles?a=566", address: "929 臺灣屏東縣琉球鄉龍蝦洞海岸（依 Google Maps 景點標記導航）",
    manager: "龍蝦洞位於小琉球海岸，屬大鵬灣國家風景區遊憩範圍；觀光資訊由大鵬灣國家風景區管理處提供。海岸與保育管制仍依現場各權責機關公告。這是天然海蝕地形，不是人工開鑿的觀光洞穴。",
    hours: "自然海岸依天候及現場公告通行；不建議夜間接近礁岩", admission: "岸上公共觀景無固定售票口", duration: "約20–40分鐘",
    history: "龍蝦洞是小琉球長期受到海浪侵蝕的海岸地貌之一。名稱來自當地地形稱呼，應以自然海蝕溝觀察為主，不將民間說法當成可考證的開發年代。",
    landscape: "珊瑚礁岩經浪蝕形成凹槽、孔洞與不規則岩壁，潮位改變可見礁面面積；濕滑與浪湧風險也隨之變化。",
    culture: "與花瓶岩的獨立海蝕礁柱、附近中澳沙灘的堆積砂岸相比，龍蝦洞展示的是岩岸被海水切割出的溝槽。",
    route: ["先由白沙港確認返程交通", "沿島上道路到龍蝦洞標示位置", "從安全岸邊觀察海蝕溝與浪線，不入水", "視時間與潮況返回道路，續往中澳沙灘"],
    tips: ["強浪或雨後不站上礁面", "勿跨越護欄尋找低角度照片", "攜帶防滑鞋、飲水與防曬", "不踩珊瑚或撈取潮池生物"],
    photos: ["從高處安全岸邊取海蝕溝全景", "以岩壁孔隙和海面作對比", "從道路入口拍攝海岸地貌及遠景"],
    faq: [{ question: "龍蝦洞可以下水嗎？", answer: "海蝕溝受浪與潮流影響，不應把景點導航當作下水點；以岸上觀察為主。" }, { question: "龍蝦洞離花瓶岩遠嗎？", answer: "同在小琉球北側一帶，可沿道路安排順遊；實際時間依交通工具和停車位置而異。" }], related: ["zhongao-beach", "nearby", "safety"]
  },
  {
    slug: "shanzhugou", name: "山豬溝", english: "Shanzhugou", image: "/images/shanzhugou.jpg",
    description: "小琉球西側約400公尺珊瑚礁森林溝谷，認識斷崖、一線天、老雀榕與蕨類、收費資訊及遊覽路線。",
    official: "https://www.dbnsa.gov.tw/zh-tw/attraction/AttractionPage?a=229", address: "929 臺灣屏東縣琉球鄉山豬溝風景區",
    manager: "山豬溝為琉球鄉三大收費景區之一，票務與景區出入應依琉球鄉公所公告；交通部觀光署大鵬灣國家風景區管理處提供自然地景與遊覽資訊。園區步道與生態區域須遵循現場管理規則。",
    hours: "依琉球鄉公所收費景區開放時段與現場公告", admission: "與美人洞、烏鬼洞有聯票安排；最新價格依鄉公所公告", duration: "約40–70分鐘",
    history: "山豬溝保留較完整的島嶼原始植相。其名稱有不同地方解釋，其中一說與耐風、耐鹽的「山豬枷」灌叢有關。",
    landscape: "島西側斷崖形成深谷，步道蜿蜒約400公尺。高位珊瑚礁石灰岩壁與貝殼、珊瑚化石相互交錯，造就一線天般的狹窄視角。",
    culture: "老雀榕的根系、姑婆芋、蕨類與藤蔓攀附岩壁，讓珊瑚礁島上呈現如森林峽谷的空間感；這也是認識島嶼植物適應的場所。",
    route: ["確認入口、門票與今日開放路段", "沿指定步道進入珊瑚礁岩谷", "觀察一線天、老樹根與蕨類", "由標示出口離開，續往蛤板灣或烏鬼洞"],
    tips: ["步道潮濕處放慢腳步", "勿觸碰化石、攀折植物", "注意蚊蟲與林下光線變化", "不跨越封閉路段"],
    photos: ["一線天岩壁的自然框景", "老雀榕根系與珊瑚礁岩的近景", "木棧道與森林層次的縱深"],
    faq: [{ question: "山豬溝是登山步道嗎？", answer: "是以珊瑚礁溝谷、森林與步道觀察為主的景區，並非高山健行。" }, { question: "山豬溝需要門票嗎？", answer: "屬聯票收費景區，請在入口核對票價和開放時間。" }], related: ["beauty-cave", "haban-bay", "wugui-cave"]
  },
  {
    slug: "wugui-cave", name: "烏鬼洞", english: "Black Devil Cave", image: "/images/wugui-cave.jpg",
    description: "小琉球西南側石灰岩洞穴景區，介紹珊瑚礁迷宮地形、入口榕樹、歷史傳說、門票與安全路線。",
    official: "https://www.dbnsa.gov.tw/zh-tw/attraction/AttractionPage?a=236", address: "929 臺灣屏東縣琉球鄉烏鬼洞風景區",
    manager: "烏鬼洞由琉球鄉公所於1975年以公共造產方式開發為風景區。今日的參觀、票務及現場路線依鄉公所管理公告辦理；大鵬灣國家風景區管理處提供官方景點解說。",
    hours: "依琉球鄉公所收費景區開放時段與臨時公告", admission: "與美人洞、山豬溝有聯票安排；票價依現場公告", duration: "約45–75分鐘",
    history: "烏鬼洞相關故事包含地方傳說；可將傳說視為地名文化，但不宜與已確定的歷史事件混淆。1975年開闢景區則有管理處公開資料可核對。",
    landscape: "小琉球西南方分布多處珊瑚礁石灰岩洞穴，洞道曲折、部分狹窄；入口礁岩上的老榕樹盤根錯節，是岩石與植物相互依存的醒目景觀。",
    culture: "洞穴、海景與地方故事構成烏鬼洞的旅遊特色；從狹窄岩道轉到開闊海景，可體會同一塊珊瑚礁岩地形的尺度差異。",
    route: ["抵達景區入口核對票務與開放路段", "沿標示步道觀察入口榕樹及岩壁", "在允許通行的洞道慢行，不逆向擁擠", "從觀景區看海並依出口標示離開"],
    tips: ["狹窄處留意頭部與腳下", "不攀爬洞穴岩壁或擅入封閉區", "穿防滑包覆鞋，不使用閃光干擾其他遊客", "有幽閉恐懼或行動限制者先評估路線"],
    photos: ["景區入口與記事碑", "榕樹根系附著岩壁的細節", "開放洞道的自然光與海景出口"],
    faq: [{ question: "烏鬼洞適合帶小孩嗎？", answer: "可視孩子年齡及狹窄步道適應能力安排，成人應全程陪同。" }, { question: "烏鬼洞是否與美人洞共用票券？", answer: "三大景區有聯票安排，實際適用與價格請以現場公告為準。" }], related: ["shanzhugou", "haban-bay", "beauty-cave"]
  },
  {
    slug: "haban-bay", name: "蛤板灣沙灘", english: "Haban Bay Beach", image: "/images/haban-bay.jpg",
    description: "小琉球蛤板灣（威尼斯沙灘）白色貝殼砂海岸攻略，包含夕陽拍攝、海龜保育夜間管制與禁止游泳提醒。",
    official: "https://www.dbnsa.gov.tw/zh-tw/attraction/AttractionPage?a=231", address: "929 臺灣屏東縣琉球鄉蛤板灣沙灘",
    manager: "蛤板灣位於大鵬灣國家風景區小琉球範圍。屏東縣政府依法規劃綠蠵龜與漁業資源保育措施，交通部觀光署大鵬灣國家風景區管理處發布遊客資訊及管制提醒；各項現場措施應依主管機關公告。",
    hours: "一般日間岸上觀景；每年5月1日至10月31日20:00至翌日05:00沙灘與潮間帶禁止一般遊客擅入，其他臨時管制另依公告", admission: "自然海岸觀景一般無門票；非開放時段不可擅入", duration: "約30–60分鐘（日間岸上觀景）",
    history: "蛤板灣又被稱作威尼斯沙灘，是小琉球西部少見的堆積性沙岸。它以貝殼砂與夕陽景觀聞名，但同時是需要保護的海龜棲地。",
    landscape: "約百公尺的貝殼砂海灘與周圍珊瑚礁岩形成對比；這類沉積沙岸與花瓶岩、龍蝦洞的海蝕地貌不同。",
    culture: "海岸的旅遊價值包含靜看海景與保育學習。管理處明確提醒曾有多起溺水事故，遊客勿下水游泳，不能把夕陽沙灘推薦成游泳地點。",
    route: ["出發前查當日管制及日落時間", "從合法入口到沙灘後緣觀察貝殼砂", "在安全、未限制區域拍攝海岸與夕陽", "天色轉暗前離開，避免進入夜間保育時段"],
    tips: ["請勿下水游泳，官方曾提醒溺水事件", "5至10月夜間管制時段不可擅入", "不打光照射海龜、不接近巢位", "不撿拾珊瑚貝殼或留下垃圾"],
    photos: ["岸上後緣拍攝彎曲的砂岸線", "夕陽側光呈現貝殼砂紋理", "以礁岩作前景、海面作背景的遠景"],
    faq: [{ question: "蛤板灣可以游泳嗎？", answer: "官方景點介紹提醒這裡曾發生溺水事件，遊客請勿下水游泳。" }, { question: "蛤板灣晚上可以進入嗎？", answer: "每年5月1日至10月31日20:00至翌日05:00有夜間管制，一般遊客不得擅入沙灘及潮間帶；其他日期仍應注意公告。" }], related: ["shanzhugou", "wugui-cave", "nearby"]
  },
  {
    slug: "houshi-reef", name: "厚石裙礁", english: "Houshi Fringing Reef", image: "/images/houshi-reef.jpg",
    description: "小琉球東南海岸的大面積珊瑚礁裙狀海蝕地形，從大福漁港至海子口觀察溝槽、奇岩與環島公路景色。",
    official: "https://www.dbnsa.gov.tw/zh-tw/attraction/AttractionPage?a=238", address: "929 臺灣屏東縣琉球鄉厚石裙礁（官方座標22.32275, 120.36119）",
    manager: "厚石裙礁是小琉球東南沿岸自然景觀，交通部觀光署大鵬灣國家風景區管理處提供景點資訊及解說。它不是單一建築或設有固定入口的收費公園；道路、海岸通行與保育規範以現場權責單位公告為準。",
    hours: "管理處列示每日開放；海岸取景仍依天候、浪況及管制", admission: "沿線公共觀景通常不另售景點門票", duration: "約30–60分鐘，分點停留",
    history: "厚石裙礁因岩面被海水侵蝕出一道道溝槽，從高處望去宛如百褶裙而得名。這些形態記錄珊瑚礁地層抬升後，持續受海浪與鹽風雕刻的過程。",
    landscape: "礁岩主要分布在大福漁港與海子口之間的東南岸，既有連續平坦礁面，也有深淺不同的浪蝕槽與孤立奇岩。紅番石、觀音石等形象石是沿線可辨識的觀察題材。",
    culture: "厚石路段適合與花瓶岩對照：花瓶岩以局部差異侵蝕形成頭大身小的礁柱，厚石則是大範圍海蝕溝槽的連續地景。從環島道路欣賞比踏入潮濕礁面更安全。",
    route: ["由白沙港沿環島道路往東南岸行進", "在合規停靠處先看整體裙礁地形", "觀察紅番石、觀音石及海蝕溝的不同尺度", "續往白燈塔或烏鬼洞，不穿越浪打礁盤"],
    tips: ["只在可停車和可通行位置取景", "漲潮、強浪或雨後不要下到礁面", "不踩踏潮池生物或採取珊瑚石", "以遠景與側光呈現溝槽陰影"],
    photos: ["環島道路安全觀景處拍攝裙狀礁岩全貌", "從側面捕捉海蝕槽的明暗紋理", "用大福漁港方向海岸線作地理參照"],
    faq: [{ question: "厚石裙礁是一個固定入口嗎？", answer: "不是單一入口建築，礁岩沿東南岸分布，依官方座標和道路合法停靠點觀察。" }, { question: "可以走到厚石裙礁的海溝裡嗎？", answer: "不建議進入受浪襲的礁盤或海蝕槽，避免濕滑與突發湧浪。" }], related: ["white-lighthouse", "wugui-cave", "nearby"]
  },
  {
    slug: "white-lighthouse", name: "白燈塔", english: "White Lighthouse", image: "/images/white-lighthouse.jpg",
    description: "認識小琉球白燈塔1929年建造的航海功能、白色圓柱塔身、戰後修復歷史，以及從厚石裙礁順遊的方式。",
    official: "https://www.dbnsa.gov.tw/zh-tw/attraction/AttractionPage?a=248", address: "929 臺灣屏東縣琉球鄉白燈塔（官方座標22.32886, 120.36651）",
    manager: "白燈塔是具有航行指引功能的燈塔設施，日常航標維護屬航政燈塔管理權責；交通部觀光署大鵬灣國家風景區管理處提供旅遊介紹。周邊可遊覽範圍不等於塔身內部開放，應遵守現場圍欄與告示。",
    hours: "官方景點列示每日開放；塔內及設備區不視為開放參觀", admission: "外部環境觀賞無固定景點票口", duration: "約15–30分鐘",
    history: "燈塔建於1929年（日治時期昭和四年），第二次世界大戰期間受損，1952年由海關修復。這座小型航標見證小琉球海上交通與近代航行安全設施的發展。",
    landscape: "白色圓形鋼筋混凝土塔身高約10公尺，位於厚石裙礁西側的高地，光束射程原設計可達20海里。塔身與周圍植被形成鮮明對比。",
    culture: "與海岸奇岩相比，白燈塔代表航海基礎設施：漁船、客輪與海上活動需要可辨識的航標。遊客可理解燈塔為何建於高處，以及海上與陸地觀看角度的差異。",
    route: ["先在厚石裙礁合法觀景處停留", "依白燈塔專屬地圖往高處道路行進", "在開放外圍拍攝白色圓柱塔身及環境", "返回道路後可續往碧雲寺，避免擅闖設備區"],
    tips: ["不攀爬圍牆或進入航標設施", "高地道路留意會車與停車位置", "林蔭路段留意蚊蟲、雨後落葉", "夜間不以強光干擾航標或周遭居民"],
    photos: ["側面取景呈現圓柱白塔與樹冠", "沿外部開放路線拍塔體比例", "由合法觀景點遠看其高地位置"],
    faq: [{ question: "白燈塔可以登塔嗎？", answer: "觀光景點資訊不等於塔內開放，請以現場設施管制為準，不可自行入內。" }, { question: "小琉球白燈塔建於哪一年？", answer: "大鵬灣管理處記載建於1929年，二戰受損後於1952年修復。" }], related: ["houshi-reef", "biyun-temple", "nearby"]
  },
  {
    slug: "biyun-temple", name: "碧雲寺", english: "Biyun Temple", image: "/images/biyun-temple.jpg",
    description: "小琉球島中央1736年創建的觀音信仰中心，介紹廟宇空間、香客文化、竹林生態步道與交通、參拜禮儀。",
    official: "https://www.dbnsa.gov.tw/zh-tw/attraction/AttractionPage?a=249", address: "929 臺灣屏東縣琉球鄉和平路61號（官方座標22.33814, 120.36992）",
    manager: "碧雲寺是地方宗教廟宇，日常參拜與廟務由寺方管理。交通部觀光署大鵬灣國家風景區管理處提供歷史與旅遊介紹；寺內禮儀、活動及開放空間以寺方現場指示為準，不能將寺方與政府觀光單位混為同一管理主體。",
    hours: "參拜依寺方每日開放安排；法會可能調整動線", admission: "一般參拜不以觀光門票入場；香油錢隨個人意願", duration: "約20–45分鐘",
    history: "碧雲寺創建於1736年，主祀觀音菩薩，是小琉球歷史悠久的信仰中心。廟宇和三隆宮各自承載佛教觀音信仰與王爺祭典傳統，呈現島民不同的宗教生活。",
    landscape: "除了主殿、香爐及屋脊裝飾，寺下方有竹林生態濕地步道。竹影與流水讓島中央的宗教空間和珊瑚礁海岸形成鮮明對照。",
    culture: "參拜重點除了觀音佛祖，也在於觀察居民如何在節慶、還願與日常生活中使用廟埕。建築裝飾可留意屋脊、柱面與主殿層次，但不應妨礙正在進行的科儀。",
    route: ["沿環島內部道路抵達和平路61號", "在廟埕先閱讀告示並整理服裝", "依允許動線參觀主殿及建築細節", "若竹林步道開放，可緩步觀察，再續往白燈塔"],
    tips: ["廟內有人禮拜時輕聲慢行", "神像及宗教儀式拍攝先徵詢現場意見", "香灰、供品與廟務用品不要任意觸碰", "竹林濕滑處穿止滑鞋並尊重封閉標示"],
    photos: ["廟埕拍正殿與屋脊輪廓", "近距離記錄允許拍攝的雕飾與柱面", "下方竹林步道取林蔭與流水層次"],
    faq: [{ question: "碧雲寺供奉哪位神明？", answer: "主要供奉觀音菩薩（觀音佛祖），與主祀三府千歲的三隆宮不同。" }, { question: "碧雲寺旁有自然步道嗎？", answer: "官方介紹提及寺下方的竹林生態濕地步道，進入前應核對當日開放情況。" }], related: ["sanlong-temple", "white-lighthouse", "nearby"]
  },
  {
    slug: "sanlong-temple", name: "三隆宮", english: "Sanlong Temple", image: "/images/sanlong-temple.jpg",
    description: "小琉球本福村三府千歲信仰中心，認識清代創廟脈絡、每三年一科迎王祭典、宮廟建築與白沙港順遊路線。",
    official: "https://www.dbnsa.gov.tw/zh-tw/attraction/AttractionPage?a=253", address: "929 臺灣屏東縣琉球鄉中山路45號（官方座標22.34675, 120.37674）",
    manager: "三隆宮是地方宗教廟宇，廟務、參拜秩序及迎王祭典活動由宮廟及地方祭典組織籌辦。大鵬灣國家風景區管理處提供旅遊解說，並非宮廟日常管理單位；節慶日期、管制道路與參拜規範以主辦單位公告為準。",
    hours: "官方列示每日開放；大型科儀與迎王期間依廟方調整", admission: "一般參拜無固定觀光門票；祭典活動安排另查公告", duration: "約20–45分鐘，祭典日另計",
    history: "三隆宮又稱王爺廟，奉祀池府、吳府、朱府三府千歲，官方介紹將創廟傳統追溯至清乾隆初年。它與小琉球漁民出海祈福的習俗緊密相連。",
    landscape: "廟宇的牌樓、彩繪、廟埕與正殿共同形成地方信仰空間。觀察牌樓與屋脊色彩，也能理解為何迎王遶境需要從宮廟延伸到聚落與街道。",
    culture: "每三年一科的迎王平安祭典以三隆宮為重要主廟，包含迎王、遶境、王船相關儀式等地方共同參與的活動。漁船返港、鄉親返鄉與提供飲食的習俗，展示海島社會的凝聚力。",
    route: ["由白沙觀光港沿中山路往聚落步行或騎行", "在三隆宮牌樓前辨識地標與活動公告", "由開放廟埕欣賞建築及正殿，尊重參拜動線", "回港或改往碧雲寺，祭典時注意臨時交管"],
    tips: ["祭典人潮時不阻擋神轎與工作人員", "廟埕攝影避開正在進行的儀式", "不要把迎王活動寫成每日固定演出", "遵守香爐、供桌及廟務區域規範"],
    photos: ["從中山路合法位置拍牌樓與入口", "在開放廟埕呈現主殿屋脊與彩繪", "若遇公開祭典，在不阻路前提下拍集體文化場景"],
    faq: [{ question: "三隆宮與碧雲寺有何不同？", answer: "三隆宮主要供奉三府千歲、與迎王祭典關係密切；碧雲寺則以觀音菩薩信仰為核心。" }, { question: "小琉球迎王祭典每天都能看到嗎？", answer: "不是。迎王為每三年一科的周期性祭典，日期和活動內容應向廟方與地方公告核實。" }], related: ["biyun-temple", "baisha-tourist-harbor", "nearby"]
  }
];

for (const item of nextNearby) {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${item.name} 小琉球 屏東縣琉球鄉`)}`;
  guides.push({
    slug: item.slug, eyebrow: "小琉球周邊探索", title: `${item.name}｜小琉球景點完整指南`,
    seoTitle: `${item.name}攻略｜交通、景點特色、開放與拍照｜小琉球`, description: item.description,
    lead: item.description, image: item.image, imageAlt: `小琉球${item.name}景點實景`, gallery: [{ src: item.image, alt: `${item.name}實際景觀與遊覽環境` }],
    facts: [{ label: "名稱", value: item.english }, { label: "地點", value: "屏東縣琉球鄉" }, { label: "建議停留", value: item.duration }, { label: "資訊來源", value: "大鵬灣管理處" }],
    place: { officialName: `${item.name}（${item.english}）`, type: item.landscape.slice(0, 35), address: item.address, mapUrl,
      managerTitle: `關於${item.name}的管理與保育`, managerDescription: item.manager, sourceUrl: item.official,
      hours: item.hours, admission: item.admission, visitDuration: item.duration,
      arrival: `由白沙觀光港出發，沿島上合法道路前往${item.name}；以景點專屬地圖和現場指標確認入口，勿將地圖終點視為可直接穿越礁岩的步道。`,
      highlights: [item.history, item.landscape, item.culture], route: item.route, etiquette: item.tips, photoSpots: item.photos,
      accommodation: `可依住宿地點與返船時間安排${item.name}及附近景點。若住在白沙港周邊，跨島移動應另計交通與停車時間。`,
      ratingNote: `最新評分與評論數請於${item.name}專屬 Google Maps 地點頁查看，本站不捏造即時評價。` },
    sections: [
      { kicker: "探索景點", title: `認識${item.name}`, body: item.history },
      { kicker: "景區特色", title: "地形、環境與觀察重點", body: item.landscape },
      { kicker: "人文與生態", title: "看見自然與島嶼生活", body: item.culture },
      { kicker: "遊覽建議", title: "出發前先安排交通與安全", body: `建議停留${item.duration}。${item.route.join("；")}。`, bullets: item.tips },
      { kicker: "拍攝指南", title: "在開放區域取景", body: item.photos.join("；") }
    ],
    related: item.related, faq: item.faq,
    action: { label: `${item.name} Google Maps`, href: mapUrl, external: true },
    links: [{ label: "主管機關景點資訊", href: item.official, description: "核對地點、開放與旅遊規範。" }, { label: "更多周邊景點", href: "/nearby/" }]
  });
}

const nearbyIndex = guides.find((guide) => guide.slug === "nearby");
if (nearbyIndex) {
  nearbyIndex.related.push(...nextNearby.map((item) => item.slug));
  nearbyIndex.links ??= [];
  for (const item of nextNearby) {
    nearbyIndex.links.push({ label: `${item.name}完整景點專頁`, href: `/${item.slug}/`, description: item.description });
  }
}

export const guideBySlug = Object.fromEntries(
  guides.map((guide) => [guide.slug, guide])
) as Record<string, Guide>;
