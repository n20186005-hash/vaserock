[![Visit Liuqiu: 2026 Travel Guide for Liuqiu, Pingtung County | Expedia](https://images.openai.com/static-rsc-4/RlRO20rl2bUfEVZ5m9eNOiydJMybVg35BGIvnFlE4HyP4FYHHVMlgyAQ-kEVGmouhvSYnxZtbSzD1-x0CQPtko7315hXxtgi1rQU5LhmqQWY87PsVSeO05fYrMD5x50vAyE0TLGc1_4Z-QNT1are_xJm4j4gZqraWJEa6XUx3m4?purpose=inline)](https://www.expedia.com/Liuqiu.dx6129754?utm_source=chatgpt.com)

# VaseRock.com 完整建站建議

## 一、專案最終定位

**VaseRock.com** 不應只是一篇「花瓶岩景點介紹」，而應定位為：

> **小琉球花瓶岩獨立旅遊指南，協助遊客完成位置導航、到訪時間判斷、拍照規劃、潮汐理解、浮潛安全與周邊行程安排。**

花瓶岩又稱花瓶石，是小琉球最具辨識度的自然地標之一，位於靈山寺前方海岸，距離白沙觀光港約三百公尺。岩體由隆起珊瑚礁岩經海水差異侵蝕形成，官方亦提醒其頸部持續變細，遊客應保持距離、不攀爬岩體。周邊海域同時具備攝影、浮潛和潮間帶觀察價值。([国家安全局][1])

### 網站名稱

**VaseRock.com｜小琉球花瓶岩旅遊指南**

### 首頁 H1

> 小琉球花瓶岩旅遊指南

### 首頁副標題

> 從白沙港出發，查看 Google Maps 位置、步行路線、拍照建議、潮汐玩法與浮潛安全。

### 品牌標語

> 下船幾分鐘，看見小琉球最經典的海岸地標。

網站不要使用：

* 花瓶岩官方網站
* 官方訂票
* 官方潮汐
* 花瓶岩管理處

頁尾可以用低調方式說明：

> VaseRock.com 為獨立旅遊資訊網站。交通、海況與管制資訊請以現場及主管機關公告為準。

---

# 二、VaseRock.com 域名策略

## 這個域名的優勢

**VaseRock.com** 非常適合這個專案：

1. 與 Google Maps 英文名稱 `Vase Rock` 完全一致。
2. 字數短，方便遊客記憶和輸入。
3. `.com` 適合建立長期旅遊內容品牌。
4. 不會把網站限制在繁體中文，未來可以增加英文內容。
5. 比 `Huapingyan.com` 更容易讓海外遊客理解。
6. 可以自然承接 `Vase Rock Taiwan`、`Vase Rock Xiaoliuqiu` 等英文搜尋。

## 網址規則

主站統一使用：

```text
https://vaserock.com/
```

建議設定：

```text
www.vaserock.com → 301 → vaserock.com
http://vaserock.com → 301 → https://vaserock.com
```

因為首發只有繁體中文，不需要把首頁放在：

```text
/zh-tw/
```

直接以根目錄作為繁體中文主站即可。

未來需要英文時，再增加：

```text
/en/
```

但第一版不建議為了「多語言看起來完整」而建立內容單薄的英文頁面。

---

# 三、核心客群

## 1. 第一次到小琉球的遊客

最關心：

* 花瓶岩在哪裡？
* 從白沙港怎麼走？
* 下船後先去還是最後再去？
* 要停留多久？
* 是否需要門票？

主要承接頁面：

```text
/
 /map/
 /from-baisha-port/
 /faq/
```

## 2. 拍照和打卡遊客

最關心：

* 早上還是傍晚好看？
* 低潮還是滿潮適合拍照？
* 哪個方向拍最好？
* 怎麼避開人群？
* 手機怎麼構圖？

主要承接頁面：

```text
/best-time/
/photo-guide/
/tide-guide/
```

## 3. 浮潛與海龜遊客

最關心：

* 花瓶岩可以浮潛嗎？
* 不會游泳是否適合？
* 有沒有機會看到海龜？
* 海況不好還能不能下水？
* 哪些行為會傷害海龜或珊瑚？

主要承接頁面：

```text
/snorkeling/
/sea-turtle/
/safety/
```

## 4. 親子與長輩遊客

最關心：

* 從港口走過去會不會太遠？
* 礁石是否濕滑？
* 有沒有遮陽處？
* 推車或輪椅是否方便？
* 小朋友能不能踏浪？

主要承接頁面：

```text
/family-guide/
/accessibility/
/from-baisha-port/
```

## 5. 行程時間有限的遊客

最關心：

* 等船期間能不能去？
* 半小時夠不夠？
* 花瓶岩附近還能去哪裡？
* 如何接美人洞、中澳沙灘或白沙港？

主要承接頁面：

```text
/itineraries/30-minutes/
/itineraries/one-hour/
/nearby/
```

---

# 四、網站資訊架構

第一版建議上線 **12至15個高品質頁面**，不要一次生成大量薄內容。

| URL                  | 頁面主題             | 主要搜尋需求      |
| -------------------- | ---------------- | ----------- |
| `/`                  | 花瓶岩完整旅遊指南        | 花瓶岩、小琉球花瓶岩  |
| `/map/`              | Google Maps位置與導航 | 花瓶岩地圖、花瓶岩在哪 |
| `/from-baisha-port/` | 從白沙港步行到花瓶岩       | 花瓶岩離碼頭多遠    |
| `/best-time/`        | 最佳到訪時間           | 花瓶岩什麼時候去    |
| `/tide-guide/`       | 潮汐與不同潮位玩法        | 花瓶岩潮汐、花瓶岩退潮 |
| `/photo-guide/`      | 拍照位置與構圖          | 花瓶岩拍照、花瓶岩日出 |
| `/snorkeling/`       | 浮潛與下水指南          | 花瓶岩浮潛       |
| `/sea-turtle/`       | 海龜觀察守則           | 花瓶岩海龜       |
| `/safety/`           | 礁石、海況與生態安全       | 花瓶岩危險嗎      |
| `/geology/`          | 花瓶岩如何形成          | 花瓶岩形成原因     |
| `/nearby/`           | 附近景點與順遊路線        | 花瓶岩附近景點     |
| `/itinerary/`        | 30分鐘、1小時與半日路線    | 花瓶岩行程       |
| `/family-guide/`     | 親子與長輩指南          | 花瓶岩親子       |
| `/faq/`              | 門票、停留、交通常見問題     | 花瓶岩門票、開放時間  |
| `/about/`            | 網站資料方法與編輯說明      | 品牌與信任       |

官方資料列出的周邊節點包括白沙觀光港、琉球管理站暨遊客中心、美人洞及中澳沙灘，因此附近頁面應圍繞這些實際旅遊節點，而不是擴張成泛小琉球景點大全。([国家安全局][2])

---

# 五、首頁完整結構

## 1. 頂部導覽列

桌面版：

```text
VASE ROCK

景點指南
Google 地圖
怎麼前往
最佳時間
拍照指南
浮潛安全
附近景點
```

右側主要按鈕：

> Google Maps 導航

手機版底部可以固定一個輕量導航列：

```text
地圖｜交通｜拍照｜安全
```

不要放過多選單，也不要建立複雜的下拉式導航。

---

## 2. 首屏 Hero

### 建議文案

```text
小琉球花瓶岩旅遊指南

從白沙觀光港步行即可抵達，
一次了解 Google Maps 位置、拍照時間、
潮汐差異、浮潛安全與周邊路線。
```

主要按鈕：

```text
在 Google Maps 開始導航
```

次要按鈕：

```text
查看從白沙港怎麼走
```

首圖使用：

* 真實花瓶岩；
* 海水清澈；
* 岩體完整可辨識；
* 保留足夠天空或海面供文字排版；
* 不要用過度飽和濾鏡；
* 不要使用無授權的 Google Maps 使用者照片。

首屏資訊標籤：

```text
免費參觀
鄰近白沙港
自然地質景觀
適合攝影
礁石濕滑
```

---

## 3. 快速資訊區

建議使用五個簡潔資訊格：

| 項目   | 顯示內容         |
| ---- | ------------ |
| 地點   | 屏東縣琉球鄉       |
| 距離港口 | 約300公尺       |
| 參觀費用 | 景點本體免費       |
| 建議停留 | 拍照約20至40分鐘   |
| 適合活動 | 拍照、觀景、潮間帶、浮潛 |

官方資料顯示花瓶岩每日開放，地址為屏東縣琉球鄉花瓶岩，座標約為北緯22.35566、東經120.38076，並列有停車場設施。([国家安全局][1])

不要在這裡顯示：

* 固定 Google 評分；
* 固定評論數；
* 「目前人潮」；
* 假的即時潮汐；
* 假的海龜出現機率。

---

## 4. 你這次想怎麼玩

做四張大入口卡：

### 第一次到訪

> 從港口怎麼走、停留多久、需要準備什麼。

連結：

```text
/from-baisha-port/
```

### 想拍好照片

> 比較不同光線、潮位與拍攝角度。

連結：

```text
/photo-guide/
```

### 想下水或浮潛

> 了解礁石環境、裝備、海況與海龜守則。

連結：

```text
/snorkeling/
```

### 只有一小時

> 從白沙港出發，快速安排花瓶岩與周邊景點。

連結：

```text
/itinerary/
```

---

## 5. Google Maps 地圖區

內容包括：

* 花瓶岩 Google Maps；
* 經緯度；
* 從白沙港步行導航；
* 騎車導航；
* 開啟 Google Maps 按鈕；
* 複製座標按鈕。

建議把地圖放在首屏以下，使用懶載入，不要讓 Google Maps iframe 成為最大內容元素。

### 導航資料

```ts
export const vaseRock = {
  name: "花瓶岩",
  englishName: "Vase Rock",
  latitude: 22.3556469,
  longitude: 120.3807532,

  placeUrl:
    "https://www.google.com/maps/place/Vase+Rock/@22.3556469,120.3807532,17z/data=!3m1!4b1!4m6!3m5!1s0x3471e57038033fd7:0xc842f4c9d32e16bf!8m2!3d22.3556469!4d120.3807532!16s%2Fg%2F1tht9wwv",

  walkingDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=22.3556469,120.3807532&travelmode=walking",

  drivingDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=22.3556469,120.3807532&travelmode=driving"
};
```

景點座標及 Google Maps 地標可由使用者提供的地圖頁與官方景點資料相互對應。([国家安全局][1])

---

## 6. 不同潮位怎麼玩

不要試圖在純靜態站內自行宣稱「現在適合下水」。

固定解釋三種狀態：

### 較低潮位

* 礁石平台和潮池露出較多；
* 適合觀察潮間帶；
* 可行走區域較大；
* 礁面仍可能濕滑。

### 中間潮位

* 海水和岩體比例均衡；
* 適合一般旅遊拍照；
* 可以拍出清澈淺水層次。

### 較高潮位

* 海水包圍岩體的畫面更完整；
* 可活動空間變少；
* 不應為了靠近岩體冒險涉水。

頁面提供：

> 查看官方潮汐資訊

但不要把動態資料抄進 Markdown 中長期不更新。

---

## 7. 從白沙港前往

首頁放簡版，完整內容連到獨立頁。

```text
白沙觀光港
↓
港區補給與租車區
↓
沿海岸方向步行
↓
花瓶岩入口
↓
花瓶岩觀景區
```

花瓶岩靠近白沙觀光港，官方景點資料指出兩者約相距三百公尺，因此「從港口怎麼走」應是網站最重要的實用頁之一。([国家安全局][1])

頁面需要自己拍攝或整理：

* 港口出口照片；
* 第一個轉彎位置；
* 人行與機車路線；
* 入口辨識照片；
* 返回碼頭方向；
* 下雨或夜間注意事項。

單純嵌入 Google Maps 不足以形成原創價值；真正能提升頁面品質的是現場路線說明和照片。

---

## 8. 拍照指南

首頁展示三種場景：

### 清晨

* 柔和光線；
* 相對適合安靜構圖；
* 適合剪影和長曝光。

### 日間

* 海水顏色較清楚；
* 適合手機旅行照；
* 陰影和反差可能較強。

### 傍晚

* 暖色側光；
* 適合岩體輪廓和天空色彩；
* 需要留意返程和礁石能見度。

官方介紹特別指出花瓶岩在日出、晚霞與星空下會呈現不同風貌，因此拍照內容可以成為網站的重要差異化主題。([国家安全局][1])

拍照頁應包含：

* 橫幅構圖；
* 人像比例；
* 手機廣角；
* 潮池倒影；
* 遠景與近景；
* 不攀爬拍攝示意；
* 人多時如何避開背景人物。

---

## 9. 安全與生態區

首頁一定要直接顯示：

```text
不攀爬花瓶岩
不觸摸或倚靠岩體
不踩踏活珊瑚
不追逐、觸摸或餵食海龜
海況不佳時不要下水
礁石濕滑，建議穿包覆式涉水鞋
```

花瓶岩頸部因侵蝕逐漸變細，官方明確呼籲遊客保持距離、遠觀而不宜近玩。([国家安全局][1])

這個區塊不要使用恐嚇式紅色警告，視覺上可以使用低飽和珊瑚橙搭配圖示。

---

## 10. 附近順遊路線

首頁提供三條：

### 30分鐘路線

```text
白沙港 → 花瓶岩拍照 → 返回港區
```

### 1小時路線

```text
白沙港 → 遊客中心周邊 → 花瓶岩 → 港區
```

### 半日路線

```text
花瓶岩 → 美人洞方向 → 西北海岸 → 白沙港
```

不要在網站內做線上預訂，只提供：

* 行程順序；
* Google Maps 導航；
* 建議停留；
* 交通方式；
* 安全提醒。

---

# 六、視覺設計方向

## 設計主題

建議採用：

> **海島地質圖鑑 × 現代旅行導航**

避免：

* 通用藍色旅行社模板；
* 大量玻璃擬態；
* 滿版動態海浪；
* 廉價熱帶插畫；
* 倒數計時器；
* 假促銷；
* 過度圓角和陰影。

## 色彩系統

```css
:root {
  --color-ocean-deep: #123B4A;
  --color-ocean: #17798A;
  --color-sea-glass: #72B8B1;
  --color-sand: #F4EFE5;
  --color-coral-rock: #70665B;
  --color-foam: #FAFCFB;
  --color-warning: #C56F45;
  --color-text: #17272B;
  --color-muted: #5E6E71;
}
```

### 使用方式

* 深海藍：Header、主要按鈕；
* 海玻璃青：圖標、連結和次要標籤；
* 沙色：大面積背景；
* 珊瑚灰：地質內容；
* 低飽和橙：安全提醒；
* 暖白：文章閱讀區。

## 系統字體

不載入 Google Fonts、Adobe Fonts 或任何外部字型。

```css
html {
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    "PingFang TC",
    "Noto Sans TC",
    "Microsoft JhengHei",
    Arial,
    sans-serif;
}
```

其中 `Noto Sans TC` 只是系統中存在時使用，不由網站外部下載。

HTML語言：

```html
<html lang="zh-Hant-TW">
```

## Logo建議

Logo以文字為主：

```text
VASE ROCK
小琉球花瓶岩
```

圖形可用：

* 花瓶岩簡化輪廓；
* 一條海平面；
* 岩頂小面積植被；
* 單色 SVG。

不要把真實照片直接裁成 Logo。

---

# 七、SEO定位

## 首頁 SEO

### Title

```text
小琉球花瓶岩旅遊指南｜Google 地圖、交通、潮汐與拍照
```

### Meta Description

```text
規劃小琉球花瓶岩行程：查看 Google Maps 位置、
白沙港步行路線、潮汐玩法、拍照建議、浮潛安全與附近景點。
```

### Canonical

```html
<link rel="canonical" href="https://vaserock.com/" />
```

## 關鍵字群組

### 景點核心

```text
花瓶岩
小琉球花瓶岩
花瓶石
Vase Rock
Vase Rock Taiwan
Vase Rock Xiaoliuqiu
```

### 交通

```text
花瓶岩怎麼去
花瓶岩離白沙港多遠
花瓶岩 Google Maps
花瓶岩停車
白沙港到花瓶岩
```

### 時間與潮汐

```text
花瓶岩最佳時間
花瓶岩潮汐
花瓶岩退潮
花瓶岩日出
花瓶岩夕陽
```

### 體驗

```text
花瓶岩浮潛
花瓶岩海龜
花瓶岩潮間帶
花瓶岩拍照
花瓶岩親子
```

## 避免關鍵字內耗

不要同時建立：

```text
/huapingyan-map/
/vase-rock-map/
/google-map/
/maps/
```

地圖意圖只保留一頁：

```text
/map/
```

潮汐和最佳時間要區分：

* `/tide-guide/`：解釋潮位差異和判讀方式；
* `/best-time/`：解釋光線、人潮、體感和行程安排。

---

# 八、內容品質策略

Google明確建議優先建立對使用者有幫助、可靠且以人為中心的內容，而不是為操控搜尋排名批量生成頁面。([Google for Developers][3])

每個頁面至少加入一種原創價值：

* 自製步行路線圖；
* 現場路口照片；
* 不同潮位對比；
* 原創拍照位置標示；
* 手機構圖示例；
* 礁岩安全示意；
* 不同遊客類型的決策表；
* 從港口出發的真實行程；
* 資料來源與編輯說明。

不建議：

* 改寫十篇部落格後拼成一篇；
* 抄Google Maps評論；
* 顯示無法維護的即時資料；
* 每個長尾詞建立一篇五百字文章；
* 使用相同內容只更換標題；
* 為增加頁數建立空洞附近美食頁。

---

# 九、結構化資料

首頁可以使用：

```text
TouristAttraction
Place
GeoCoordinates
WebSite
BreadcrumbList
```

文章頁使用：

```text
Article
BreadcrumbList
```

FAQ頁可以使用語意清楚的問答 HTML，但不要假設一定會顯示 FAQ 富結果。

`TouristAttraction` 是 Schema.org 專門描述旅遊景點的類型；Google則建議透過 JSON-LD 提供與頁面可見內容一致的結構化資料。([Schema.org][4])

### 首頁 JSON-LD

```astro
---
const attractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "花瓶岩",
  alternateName: ["花瓶石", "Vase Rock"],
  url: "https://vaserock.com/",
  description:
    "位於屏東縣琉球鄉的小琉球珊瑚礁岩自然地標與旅遊景點。",
  isAccessibleForFree: true,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.3556469,
    longitude: 120.3807532
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "琉球鄉",
    addressRegion: "屏東縣",
    addressCountry: "TW"
  },
  hasMap:
    "https://www.google.com/maps/place/Vase+Rock/@22.3556469,120.3807532,17z/"
};
---

<script
  type="application/ld+json"
  set:html={JSON.stringify(attractionSchema)}
></script>
```

不要加入：

* 從Google Maps抄來的 `aggregateRating`；
* 虛構的評論；
* 不屬於網站的電話；
* 虛構票價；
* 不存在的預訂入口；
* 把網站本身標記為景點管理單位。

---

# 十、Astro 技術方案

這個專案非常適合純靜態 Astro。Astro預設適合內容型網站，可輸出輕量 HTML；Astro Content Collections可以管理本地 Markdown、MDX和結構化資料，並提供欄位驗證與 TypeScript 型別。([Cloudflare Docs][5])

## 建立專案

```bash
pnpm create astro@latest vaserock
cd vaserock

pnpm astro add tailwind
pnpm astro add mdx
pnpm astro add sitemap

pnpm dev
```

目前Astro可透過 `pnpm astro add tailwind` 加入 Tailwind CSS，並使用 Tailwind的 Vite整合。([Astro 文档][6])

## Astro設定

```js
// astro.config.mjs
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://vaserock.com",
  output: "static",

  integrations: [
    mdx(),
    sitemap()
  ],

  vite: {
    plugins: [
      tailwindcss()
    ]
  }
});
```

純靜態輸出不需要資料庫，也不需要 Cloudflare Adapter。

## 全域 CSS

```css
/* src/styles/global.css */
@import "tailwindcss";

:root {
  color-scheme: light;

  --ocean-deep: #123b4a;
  --ocean: #17798a;
  --sea-glass: #72b8b1;
  --sand: #f4efe5;
  --rock: #70665b;
  --foam: #fafcfb;
  --warning: #c56f45;
  --text: #17272b;
  --muted: #5e6e71;
}

html {
  scroll-behavior: smooth;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    "PingFang TC",
    "Microsoft JhengHei",
    Arial,
    sans-serif;
}

body {
  margin: 0;
  background: var(--foam);
  color: var(--text);
}

img {
  max-width: 100%;
  height: auto;
}
```

---

# 十一、目錄結構

```text
vaserock/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── _headers
│   ├── og/
│   │   ├── homepage.webp
│   │   ├── tide-guide.webp
│   │   └── photo-guide.webp
│   └── images/
│       ├── hero/
│       ├── maps/
│       ├── routes/
│       ├── geology/
│       └── safety/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── QuickFacts.astro
│   │   ├── GoogleMapCard.astro
│   │   ├── MobileMapButton.astro
│   │   ├── TideGuide.astro
│   │   ├── SafetyNotice.astro
│   │   ├── RouteSteps.astro
│   │   ├── RelatedGuides.astro
│   │   └── Breadcrumbs.astro
│   ├── content/
│   │   └── guides/
│   │       ├── best-time.mdx
│   │       ├── tide-guide.mdx
│   │       ├── photo-guide.mdx
│   │       ├── snorkeling.mdx
│   │       ├── geology.mdx
│   │       └── safety.mdx
│   ├── data/
│   │   ├── place.ts
│   │   ├── navigation.ts
│   │   ├── nearby.ts
│   │   └── faq.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── GuideLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── map.astro
│   │   ├── from-baisha-port.astro
│   │   ├── nearby.astro
│   │   ├── itinerary.astro
│   │   ├── family-guide.astro
│   │   ├── faq.astro
│   │   ├── about.astro
│   │   └── guides/
│   │       └── [...slug].astro
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

---

# 十二、內容集合設計

```ts
// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const guides = defineCollection({
  loader: glob({
    base: "./src/content/guides",
    pattern: "**/*.{md,mdx}"
  }),

  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.enum([
        "planning",
        "transport",
        "photography",
        "nature",
        "safety"
      ]),
      heroImage: image(),
      heroAlt: z.string(),
      publishedAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      featured: z.boolean().default(false),
      noindex: z.boolean().default(false),
      related: z.array(z.string()).default([])
    })
});

export const collections = {
  guides
};
```

## MDX示例

```mdx
---
title: "花瓶岩什麼時候去最好？潮位、光線與人潮指南"
description: "比較花瓶岩不同潮位、清晨、日間與傍晚的景觀差異。"
category: "planning"
heroImage: "../../assets/best-time.webp"
heroAlt: "海水環繞花瓶岩的日間景觀"
featured: true
related:
  - tide-guide
  - photo-guide
  - safety
---

花瓶岩在不同光線和潮位下，會呈現明顯不同的景觀。

## 想拍攝清澈海水

選擇光線充足、海況穩定的時段，通常較容易看見淺海層次。

## 想觀察潮池

先查看潮汐資料，再評估現場海況和管制標示。

<SafetyNotice />
```

---

# 十三、Google Maps元件

```astro
---
// src/components/GoogleMapCard.astro
import { vaseRock } from "../data/place";
---

<section
  class="rounded-3xl border border-black/10 bg-white p-5"
  aria-labelledby="map-heading"
>
  <div class="mb-4">
    <p class="text-sm text-[var(--muted)]">Google Maps</p>
    <h2 id="map-heading" class="text-2xl font-semibold">
      花瓶岩位置與導航
    </h2>
  </div>

  <div class="aspect-[16/9] overflow-hidden rounded-2xl bg-[var(--sand)]">
    <iframe
      title="花瓶岩 Google Maps 地圖"
      src={`https://www.google.com/maps?q=${vaseRock.latitude},${vaseRock.longitude}&z=17&output=embed`}
      width="100%"
      height="100%"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  <div class="mt-4 flex flex-col gap-3 sm:flex-row">
    <a
      href={vaseRock.placeUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="rounded-full bg-[var(--ocean-deep)] px-5 py-3 text-center text-white"
    >
      在 Google Maps 開啟
    </a>

    <a
      href={vaseRock.walkingDirectionsUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="rounded-full border border-black/15 px-5 py-3 text-center"
    >
      步行導航
    </a>
  </div>
</section>
```

如果追求更好的首頁效能，可以先顯示靜態地圖預覽，使用者點擊後才插入 iframe。

---

# 十四、圖片策略

## 必備圖片

第一版至少準備：

1. 首頁16:9花瓶岩全景；
2. 低潮景觀；
3. 較高潮位景觀；
4. 白沙港出發路線；
5. 入口位置；
6. 礁石地面；
7. 安全拍照距離；
8. 潮池細節；
9. 日間海水；
10. 周邊路線。

## 圖片格式

優先使用：

```text
AVIF
WebP
```

每張圖片至少準備：

```text
寬度
高度
alt
caption
來源
授權狀態
```

Alt不要寫：

```text
花瓶岩圖片
```

應寫：

```text
退潮時露出珊瑚礁平台的小琉球花瓶岩
```

## 圖片版權

Google Maps只作為：

* 地點核對；
* 導航；
* 嵌入地圖；
* 外部連結。

不要批量下載Google Maps使用者照片，也不要複製評論到網站。

---

# 十五、Cloudflare Pages部署

Cloudflare Pages提供Astro專案部署指南，可從Git倉庫建置並發布靜態輸出；Astro專案的靜態輸出目錄為 `dist`。([Cloudflare Docs][5])

## 部署設定

| 項目                     | 設定           |
| ---------------------- | ------------ |
| Production branch      | `main`       |
| Build command          | `pnpm build` |
| Build output directory | `dist`       |
| Root directory         | `/`          |
| Functions              | 不使用          |
| Database               | 不使用          |
| Server rendering       | 不使用          |

## package.json

```json
{
  "name": "vaserock",
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check"
  }
}
```

一定提交：

```text
pnpm-lock.yaml
```

## 自訂標頭

```text
# public/_headers

/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/images/*
  Cache-Control: public, max-age=2592000

/og/*
  Cache-Control: public, max-age=2592000

/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: SAMEORIGIN
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

不要對 HTML 設定一年快取，否則內容更新後可能不容易立即生效。

---

# 十六、效能要求

網站大部分頁面應做到零或極少客戶端 JavaScript。Cloudflare對Astro的說明也強調其適合建立快速、內容導向並預設不需要大量前端執行碼的網站。([Cloudflare Docs][5])

## 建議目標

* 首屏只載入一張主要圖片；
* Google Maps在首屏以下懶載入；
* 不使用外部字型；
* 不使用大型圖標庫；
* 圖標使用內聯 SVG；
* 圖片固定寬高；
* 非首屏圖片 `loading="lazy"`；
* 不使用全站 React；
* 手機選單用少量原生 JavaScript；
* 不加入自動播放影片；
* 不加入首頁輪播圖。

---

# 十七、流量分析

建議使用：

1. Google Search Console；
2. Cloudflare Web Analytics；
3. Google Maps按鈕點擊事件；
4. 外部合作連結點擊事件。

Search Console可以查看Google如何檢索、索引和展示網站，並分析搜尋字詞、頁面和地區流量。([Google for Developers][7])

Cloudflare Pages可直接啟用Web Analytics，並用於查看瀏覽量、訪客和頁面效能資料。([Cloudflare Docs][8])

## 重點追蹤事件

```text
map_open
walking_directions
driving_directions
tide_source_click
nearby_place_click
photo_guide_click
safety_guide_click
```

最重要的轉換不是「註冊」，而是：

> 使用者是否點擊 Google Maps 開始導航。

---

# 十八、內容上線順序

## 第一階段：完成核心決策

優先製作：

```text
首頁
Google Maps地圖
白沙港步行路線
最佳時間
潮汐指南
安全指南
FAQ
```

## 第二階段：擴大搜尋入口

增加：

```text
拍照指南
浮潛指南
海龜守則
地質形成
附近景點
一小時路線
親子指南
```

## 第三階段：增加原創資料

補充：

```text
現場路線照片
不同潮位對比
手機拍照構圖
步行路線示意圖
親子風險表
周邊景點距離比較
```

不要先建立五十篇文章，再慢慢補內容。先把十幾個最重要頁面做完整，更有利於品牌、SEO與後續Google Maps提交。

---

# 十九、商業化方向

網站沒有預訂系統，也仍可商業化。

## 適合的方式

* AdSense內容廣告；
* 小琉球住宿聯盟連結；
* 船票資訊外部連結；
* 浮潛業者介紹；
* 機車租賃資訊；
* 攝影服務合作；
* 小琉球完整行程站交叉導流。

## 不建議

* 首屏放滿廣告；
* 假裝站內可以訂船票；
* 接受付款後人工代訂；
* 無揭露的業者推薦；
* 把所有頁面做成聯盟行銷清單；
* 未有足夠內容就申請大量廣告版位。

VaseRock.com初期應先建立「位置和旅行決策工具」價值，廣告只作為後續補充。

---

# 二十、最終專案規格

```yaml
domain: VaseRock.com

siteName: 小琉球花瓶岩旅遊指南
brandName: Vase Rock

language:
  primary: zh-Hant-TW
  future:
    - en

framework: Astro
packageManager: pnpm
css: Tailwind CSS
content:
  - Markdown
  - MDX
  - Astro Content Collections

hosting: Cloudflare Pages
rendering: static

database: false
userLogin: false
onlineBooking: false
externalFonts: false

mapProvider: Google Maps

primaryCTA: 在 Google Maps 開始導航

primaryPages:
  - 首頁
  - Google Maps位置
  - 白沙港步行路線
  - 最佳時間
  - 潮汐指南
  - 拍照指南
  - 浮潛指南
  - 安全與生態
  - 地質形成
  - 附近景點
  - 行程建議
  - 常見問題

designStyle:
  - 海島自然
  - 珊瑚礁地質
  - 現代旅行導航
  - 真實攝影
  - 系統字體

positioning:
  - 獨立景點旅遊指南
  - Google Maps導航入口
  - 花瓶岩實用決策工具
```

**VaseRock.com最合適的方向，不是做成小琉球百科站，而是把「花瓶岩在哪裡、怎麼去、什麼時候去、怎麼拍、能不能下水」這五個問題做到比其他網站更清楚、更直觀、更容易在手機上使用。**

[1]: https://www.dbnsa.gov.tw/attraction/AttractionPage?a=222 "花瓶岩-大鵬灣全球資訊網"
[2]: https://www.dbnsa.gov.tw/zh-TW/attraction/AttractionPage?a=222&near=Hotel&utm_source=chatgpt.com "花瓶岩-大鵬灣全球資訊網"
[3]: https://developers.google.com/search/docs/fundamentals/creating-helpful-content?utm_source=chatgpt.com "Creating Helpful, Reliable, People-First Content"
[4]: https://schema.org/TouristAttraction?utm_source=chatgpt.com "TouristAttraction - Schema.org Type"
[5]: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/ "Astro · Cloudflare Pages docs"
[6]: https://docs.astro.build/en/guides/styling/ "Styles and CSS | Docs"
[7]: https://developers.google.com/search/docs/monitor-debug/search-console-start?utm_source=chatgpt.com "How To Use Search Console | Documentation - Google for Developers"
[8]: https://developers.cloudflare.com/web-analytics/?utm_source=chatgpt.com "Overview · Cloudflare Web Analytics docs"

