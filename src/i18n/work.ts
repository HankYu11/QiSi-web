// FreshToGo case study copy. Every claim traces to the FreshToGo repositories:
// - product positioning & terms: freshtogo-marketing-video/BRAND.md
// - features as shipped to users: the live marketing site (freshtogo-web)
// - stack, tests, CI, contract: freshtogo-kmp|web|admin (README, CLAUDE.md, libs.versions.toml, .github/workflows,
//   .maestro/, composeApp tests) — counts taken at kmp d0cc092 / admin 90de5e0 (see .tools/ftg/facts.md when present)
// Public terminology: 鮮款款 / FreshToGo, 鮮款包, 敲碗, 碗友. Never: surplus / waste / mystery-box wording.

export const workEn = {
  chapter: "Case study",
  name: "FreshToGo",
  nameAlt: "鮮款款",
  tagline: "Helping people walk into the good shop they pass every day.",
  status: "Live on the App Store and Google Play",
  stores: { label: "Get FreshToGo on", ios: "App Store", android: "Google Play" },
  appNote: "Real app card renders, sample listings.",
  summary:
    "FreshToGo is an app for independent food shops in Taiwan. Shops put together a FreshToGo bag (鮮款包) of today’s bread, pastries, bento or deli dishes, with the contents kept a surprise and the price below what the items normally cost. People reserve a bag in the app, then pick it up and pay at the shop. We built the whole product in-house.",
  facts: [
    { k: "We built", v: "iOS and Android app, backend, admin dashboard, marketing website" },
    { k: "In the app", v: "A shopper side and a shop side, 41 screens, one codebase" },
    { k: "Release", v: "Version 1.5, still shipping" },
    { k: "Launch area", v: "Around MRT Xinpu Station, New Taipei" },
  ],
  stageCaption: "Real screens from the FreshToGo website and app. Shops, prices and counts are sample data.",
  flowTitle: "How a FreshToGo bag works",
  flowCaption: "Real FreshToGo app cards and website; the “who can buy” and pickup steps are illustrations using the app’s own wording. Shops and prices are sample data.",
  flow: [
    {
      id: "discover",
      title: "Discover a shop nearby",
      body: "Browse the bakeries, restaurants and snack shops around you and see which ones have put out a bag today.",
    },
    {
      id: "hunt",
      title: "Hunt mode",
      body: "Up to 10 bags a round, one card at a time. Swipe up to reserve, left to skip, right to keep it for later.",
    },
    {
      id: "eligibility",
      title: "The shop decides who can buy",
      body: "Each bag can be open to everyone, only for people who’ve never bought from the shop, one per person, or only for regulars. The form even previews how many people a bag can reach. A good price brings in new customers without undercutting regulars.",
    },
    {
      id: "pickup",
      title: "Pick up and pay at the shop",
      body: "Your reservation holds a QR pickup code. Show it during the pickup window, the shop scans it with the shop side of the app, and you pay in store. There’s no delivery: the point is walking in.",
    },
    {
      id: "knock",
      title: "Knock for the shop you want",
      body: "Name a shop you’d like to see on FreshToGo and knock (敲碗) for it. Friends can join in from a share link, and you can follow its progress from contacting to listed.",
    },
  ],
  eligibility: ["First purchase only", "One per person", "Regulars only", "Everyone"],
  eligForm: {
    title: "Who can buy",
    options: [
      "Everyone can see it",
      "Only people buying from you for the first time can see it",
      "Each person can buy this one only once",
      "Only regulars who have bought from you 3 or more times can see it",
    ],
    preview: "Working out how many people can see it right now…",
  },
  proofTitle: "Built to keep running",
  proofIntro:
    "Shipping is the start. FreshToGo is engineered so it can keep changing safely, by us or by whoever comes next.",
  proof: [
    { n: "1,241", label: "automated tests in the shared app code, plus contract tests that keep the app’s data models matched to the API spec" },
    { n: "34", label: "end-to-end flows that drive the real app on Android and iOS, for shoppers and shops" },
    { n: "117", label: "API paths in an OpenAPI spec: the website and admin generate their types from it, the app is checked against it by a contract test, and CI fails on drift" },
    { n: "2", label: "store pipelines: Google Play from CI, and iOS through fastlane to TestFlight" },
  ],
  proofNote: "Counted in the FreshToGo repositories in October 2026.",
  pickup: ["Reserve in the app", "Show the pickup code", "Pay at the shop"],
  knock: ["Waiting to contact", "In talks", "Listed"],
  surfacesTitle: "One product, four surfaces, one team",
  surfacesIntro:
    "We designed and engineered every part of FreshToGo, so it works as one system: one set of decisions, one owner, no seams between vendors.",
  surfaces: [
    {
      id: "app",
      name: "Consumer and merchant app",
      tech: "Kotlin Multiplatform · Compose Multiplatform",
      body: "One shared codebase ships to iOS and Android. Shoppers sign in with LINE, Google or Apple, then browse, hunt and reserve; shops list bags from templates, set who can buy and scan pickups. Push notifications keep both sides in step.",
    },
    {
      id: "backend",
      name: "Backend",
      tech: "Ktor · Google Cloud Run · OpenAPI",
      body: "The service behind everything: listings, reservations, eligibility rules and accounts, all described in one OpenAPI spec.",
    },
    {
      id: "admin",
      name: "Admin dashboard",
      tech: "React · TypeScript · Vite",
      body: "Where the platform is run day to day: shop applications and verification, users with repeated no-shows, feedback, knock requests, eligibility insights, and the minimum supported app version.",
    },
    {
      id: "web",
      name: "Marketing website",
      tech: "React · TypeScript · Vite",
      body: "Explains FreshToGo in Chinese and English, takes shop applications, and opens shared bag and knock links in the app.",
    },
  ],
  sampleNote: "Real admin interface, shown with sample data.",
  alts: {
    webHero: "The FreshToGo website’s home page: the headline “新鮮款著走，美食不錯過” beside two FreshToGo bag cards.",
    webMobile: "The FreshToGo website on a phone, showing listing cards above the headline.",
    feed: "A FreshToGo bag listing card in the app: shop, pickup time, distance and price.",
    knock: "The FreshToGo knock page for a sample shop: its status is waiting to contact, with the number of neighbours who knocked.",
    hunt: "A hunt-mode card in the app, shown one at a time for swiping.",
    admin: "The FreshToGo admin dashboard: a queue of items needing attention, such as merchant applications and unread feedback.",
  },
  hunt: { up: "Reserve", left: "Skip", right: "Keep for later" },
  arch: { apps: "iOS · Android", admin: "Admin", web: "Website", spec: "OpenAPI · 117 paths", run: "Google Cloud Run" },
  note: "Kotlin Multiplatform and Ktor were the right tools for FreshToGo. The next product gets its own answer.",
};

export type Work = typeof workEn;

export const workZh: Work = {
  chapter: "案例",
  name: "鮮款款",
  nameAlt: "FreshToGo",
  tagline: "讓人走進每天路過、|卻從沒走進去的|那間好店。",
  status: "App Store、Google Play 已上架",
  stores: { label: "下載鮮款款", ios: "App Store", android: "Google Play" },
  appNote: "App 實際卡片元件，內容為示意。",
  summary:
    "鮮款款是為台灣在地小店打造的 App。店家把當天現做的麵包、甜點、便當或滷味配成一份「鮮款包」，內容打開才知道，價格比平常划算。大家在 App 裡預約，再到店取餐、付款。整個產品，從前到後都是我們自己做的。",
  facts: [
    { k: "我們打造", v: "iOS 與 Android App、後端、管理後台、品牌官網" },
    { k: "App 內容", v: "消費者端與店家端，41 個畫面，同一套程式碼" },
    { k: "版本", v: "1.5 版，持續更新中" },
    { k: "首發區域", v: "新北板橋，捷運新埔站周邊" },
  ],
  stageCaption: "畫面取自鮮款款官網與 App 實際介面；店家、價格與數字為示意資料。",
  flowTitle: "一份鮮款包，|怎麼運作",
  flowCaption: "畫面取自鮮款款 App 實際卡片與官網；「誰可以買」與取餐流程為示意圖，文字取自 App。店家與價格為示意資料。",
  flow: [
    {
      id: "discover",
      title: "發現附近好店",
      body: "瀏覽身邊的麵包店、餐廳和小吃店，看看今天有哪些店家推出鮮款包。",
    },
    {
      id: "hunt",
      title: "狩獵模式",
      body: "一輪最多 10 個鮮款包，一張一張看：向上滑預約、向左滑跳過、向右滑先收著。",
    },
    {
      id: "eligibility",
      title: "店家決定誰能買",
      body: "每一款鮮款包都能設定所有人都能買、只開放給第一次來的人、同一款每人限買一次，或只給熟客。上架前還能預覽大約有多少人看得到。好價格用來帶新客人，不會讓熟客的原價吃虧。",
    },
    {
      id: "pickup",
      title: "到店取餐付款",
      body: "預約後會拿到一組 QR 取餐碼。在取餐時段到店出示，店家用 App 的店家端掃描核銷，在店內付款。沒有外送，重點就是走進那間店。",
    },
    {
      id: "knock",
      title: "敲碗你想吃的店",
      body: "推薦你想在鮮款款看到的店家，一起敲碗，也能丟連結揪朋友來敲。進度從待聯繫、洽談中到已上架，一路都看得到。",
    },
  ],
  eligibility: ["首購限定", "限購一次", "熟客限定", "所有人"],
  eligForm: {
    title: "誰可以買",
    options: ["所有人都看得到", "只有第一次買你家的人看得到", "同一款每個人只能買一次", "只有買過你家 3 次以上的熟客看得到"],
    preview: "正在算現在有多少人看得到…",
  },
  proofTitle: "上線之後，|還要跑得久",
  proofIntro: "上線只是開始。鮮款款從一開始就為了能持續、安全地改下去而設計，不管之後是我們，還是其他團隊接手。",
  proof: [
    { n: "1,241", label: "個自動化測試涵蓋 App 共用程式碼，另有合約測試，讓資料模型始終對齊 API 規格" },
    { n: "34", label: "條端對端測試流程，實際操作 Android 與 iOS 上的 App，消費者端、店家端都測" },
    { n: "117", label: "條 API 路徑寫在 OpenAPI 規格裡：官網與後台由它產生型別，App 用合約測試對齊，一有落差 CI 就擋下" },
    { n: "2", label: "條上架流程：Google Play 由 CI 自動發布，iOS 透過 fastlane 送上 TestFlight" },
  ],
  proofNote: "數字為 2026 年 10 月於鮮款款程式庫中實際統計。",
  pickup: ["App 預約", "出示取餐碼", "到店付款"],
  knock: ["待聯繫", "洽談中", "已上架"],
  surfacesTitle: "一個產品，四個部分，|同一個團隊",
  surfacesIntro: "鮮款款的每一個部分都由我們設計、開發，所以整個產品是一體的：決策一致、責任清楚，沒有不同廠商之間對不上的縫隙。",
  surfaces: [
    {
      id: "app",
      name: "消費者與店家 App",
      tech: "Kotlin Multiplatform · Compose Multiplatform",
      body: "同一套程式碼同時上架 iOS 與 Android。消費者用 LINE、Google 或 Apple 登入後瀏覽、狩獵、預約；店家用範本快速上架、設定誰可以買、掃碼核銷。推播讓兩端隨時同步。",
    },
    {
      id: "backend",
      name: "後端服務",
      tech: "Ktor · Google Cloud Run · OpenAPI",
      body: "撐起一切的核心服務：鮮款包、預約、購買資格規則與帳號，全部由同一份 OpenAPI 規格定義。",
    },
    {
      id: "admin",
      name: "管理後台",
      tech: "React · TypeScript · Vite",
      body: "日常經營平台的地方：店家申請與審核、多次未取餐的使用者、回饋、敲碗推薦、購買資格分析，還能設定 App 的最低支援版本。",
    },
    {
      id: "web",
      name: "品牌官網",
      tech: "React · TypeScript · Vite",
      body: "用中文與英文介紹鮮款款、受理店家合作申請，分享出去的鮮款包與敲碗連結也能直接開進 App。",
    },
  ],
  sampleNote: "後台實際介面，資料為示意。",
  alts: {
    webHero: "鮮款款官網首頁：標語「新鮮款著走，美食不錯過」與兩張鮮款包卡片。",
    webMobile: "手機版鮮款款官網，鮮款包卡片在標語上方。",
    feed: "App 裡的鮮款包卡片：店家、取餐時段、距離與價格。",
    knock: "鮮款款的敲碗頁面：示意店家目前待聯繫，以及敲碗的鄰居人數。",
    hunt: "狩獵模式的卡片，一次一張、滑動選擇。",
    admin: "鮮款款管理後台：待處理事項，例如店家申請與未讀回饋。",
  },
  hunt: { up: "預約", left: "跳過", right: "先收著" },
  arch: { apps: "iOS・Android", admin: "管理後台", web: "品牌官網", spec: "OpenAPI・117 條路徑", run: "Google Cloud Run" },
  note: "Kotlin Multiplatform 和 Ktor 是鮮款款這個專案最適合的選擇。下一個產品，會有屬於它的答案。",
};
