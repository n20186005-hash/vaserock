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
  facts: { label: string; value: string }[];
  sections: GuideSection[];
  related: string[];
  faq?: FAQ[];
  action?: { label: string; href: string; external?: boolean };
};

export const guides: Guide[] = [
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
    seoTitle: "白沙港到花瓶岩怎麼走｜步行距離與回港提醒",
    description:
      "白沙觀光港到花瓶岩約 300 公尺；查看步行順序、時間抓法與搭船前回程提醒。",
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
    seoTitle: "花瓶岩最佳時間｜清晨、日間、傍晚怎麼選",
    description:
      "依拍照、看海、潮間帶與行程需求，比較花瓶岩清晨、日間與傍晚的到訪差異。",
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
    seoTitle: "花瓶岩潮汐指南｜低潮、滿潮與安全判讀",
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
    }
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
    seoTitle: "花瓶岩浮潛指南｜裝備、海況與初學者提醒",
    description:
      "了解花瓶岩周邊浮潛環境、初學者裝備、海況判斷與海龜觀察原則。",
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
    seoTitle: "花瓶岩形成原因｜隆起珊瑚礁與差異侵蝕",
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
    related: ["itinerary", "from-baisha-port", "family-guide"]
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
    related: ["nearby", "map", "from-baisha-port"]
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
    seoTitle: "花瓶岩 FAQ｜門票、開放時間、停留與交通",
    description:
      "回答花瓶岩是否要門票、何時開放、停留多久、從白沙港怎麼走、能否浮潛等常見問題。",
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

export const guideBySlug = Object.fromEntries(
  guides.map((guide) => [guide.slug, guide])
) as Record<string, Guide>;
