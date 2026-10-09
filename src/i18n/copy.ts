// All site copy, one object per language with an identical shape.
// English is the source; zh-TW is written for Taiwanese readers, not translated line by line.
// FreshToGo copy follows the product's own brand brief (freshtogo-marketing-video/BRAND.md).

import { workEn, workZh } from "./work";

export type Lang = "zh" | "en";

export const EMAIL = "support@handyla.co";

const en = {
  htmlLang: "en",
  path: "/en/",
  meta: {
    title: "QI SI — Product studio in Taipei",
    description:
      "QI SI TECHNOLOGY is a product studio in Taipei. We design and build mobile apps, websites and SaaS products for clients, and stay responsible for them from the first sketch to the live release.",
  },
  a11y: {
    skip: "Skip to content",
    nav: "Main",
    langSwitch: "Language",
    home: "QI SI TECHNOLOGY, home",
    menu: "Menu",
  },
  header: { cta: "Contact us" },
  nav: [
    { href: "#work", label: "Work" },
    { href: "#process", label: "How we work" },
    { href: "#build", label: "Services" },
  ],
  hero: {
    title: ["Where rare ideas", "go live."],
    lede:
      "QI SI is a product studio in Taipei. We design and build mobile apps, websites and SaaS products for clients, and we’re responsible for them from the first sketch to the live release and after. AI is built into how we work, so we move fast. Our standards keep what we ship solid.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See our work",
  },
  work: workEn,
  process: {
    chapter: "How we work",
    title: "One deep, one bright.",
    intro:
      "In our mark, the deep grain stands for reliable technology and the bright one for warm, energetic innovation. That’s how we work: AI gets us to new ideas fast, and the engineering underneath is ours to answer for. You need both.",
    bright: {
      word: "Fast",
      title: "Where AI speeds us up",
      items: [
        "Exploring directions and prototypes early",
        "Drafting and scaffolding code",
        "Writing tests and widening their coverage",
        "Reviewing changes for what people miss",
        "Keeping documentation current",
      ],
    },
    deep: {
      word: "Solid",
      title: "What stays with us",
      items: [
        "Deciding what’s worth building",
        "Architecture, and the trade-offs behind it",
        "Every interaction and every detail of the interface",
        "Reviewing every line before it ships",
        "The call on when it’s ready",
      ],
    },
    ownTitle: "What we take responsibility for",
    own: [
      { name: "The problem", text: "We work out what needs to exist, and why, before anyone opens an editor." },
      { name: "The experience", text: "Flows, states, edge cases, empty screens and error messages, all designed on purpose." },
      { name: "The engineering", text: "An architecture that fits, code that’s tested and reviewed, and a stack chosen for this product." },
      { name: "The launch", text: "Store releases, servers, the unglamorous last mile. It isn’t finished until it’s live." },
      { name: "The handover", text: "Readable code and clear documentation, so whoever maintains it next can keep going." },
    ],
  },
  build: {
    chapter: "Services",
    title: "Whatever the problem calls for.",
    intro: "We’re technology-agnostic. We choose the stack after we understand the problem, never before.",
    stackA: "No house stack.",
    stackB: "The right one is an answer, not a starting point.",
    items: [
      { name: "Mobile apps", body: "iOS and Android, from the first store release through every update after it." },
      { name: "Websites", body: "Marketing sites and web apps that load fast, read well and are easy to change." },
      { name: "SaaS products", body: "Subscription software with the accounts, roles and admin tools a working business needs." },
      { name: "Internal tools", body: "Dashboards and back-office systems that keep an operation running." },
      { name: "Backends & APIs", body: "The services, data and integrations everything else depends on." },
      { name: "Something else", body: "If it’s software and it has to work, tell us about it." },
    ],
  },
  contact: {
    title: "Have something that needs to go live?",
    body: "Tell us what you’re building, where it stands today, and what “done” looks like to you. We’ll take it from there.",
    copy: "Copy email",
    copied: "Copied",
    copyLabel: "Copy email address",
    addressLabel: "Studio",
    emailLabel: "Email",
  },
  footer: {
    legal: "QI SI TECHNOLOGY LIMITED",
    city: "Taipei, Taiwan",
  },
  address: "1F., No. 39, Sec. 2, Kaifeng St., Wanhua Dist., Taipei City 108, Taiwan",
  notFound: {
    title: "This page didn’t ship.",
    body: "The address may be mistyped, or the page has moved.",
    back: "Back to the homepage",
  },
};

export type Copy = typeof en;

const zh: Copy = {
  htmlLang: "zh-Hant-TW",
  path: "/",
  meta: {
    title: "奇斯科技 QI SI｜台北的產品工作室",
    description:
      "奇斯科技是台北的產品工作室，為客戶設計、開發 App、網站與 SaaS 產品，從第一張草圖一路負責到正式上線。",
  },
  a11y: {
    skip: "跳到主要內容",
    nav: "主選單",
    langSwitch: "語言",
    home: "奇斯科技首頁",
    menu: "選單",
  },
  header: { cta: "聯絡我們" },
  nav: [
    { href: "#work", label: "案例" },
    { href: "#process", label: "工作方式" },
    { href: "#build", label: "服務" },
  ],
  hero: {
    title: ["讓獨特的可能，", "在這裡上線。"],
    lede:
      "奇斯科技是台北的產品工作室，為客戶打造 App、網站與 SaaS 產品。從第一張草圖到正式上線，上線之後也接得住，整段都由我們負責。AI 早已融入我們的工作方式，所以快；對品質的堅持，讓交出去的東西穩。",
    ctaPrimary: "聊聊你的專案",
    ctaSecondary: "看看案例",
  },
  work: workZh,
  process: {
    chapter: "工作方式",
    title: "一深一亮。",
    intro:
      "標誌裡的深藍米粒代表穩健可靠的技術底蘊，亮橘米粒代表積極、有溫度的創新能量。我們做事也是這樣：用 AI 加速，更快走到新點子；底下是我們親自把關的工程。兩者缺一不可。",
    bright: {
      word: "快",
      title: "AI 幫我們加速的",
      items: [
        "前期快速探索方向、做出原型",
        "起草程式碼、搭好骨架",
        "撰寫測試，並補齊覆蓋範圍",
        "審查變更，抓出人容易漏看的地方",
        "讓文件隨時跟上進度",
      ],
    },
    deep: {
      word: "穩",
      title: "始終由我們把關的",
      items: [
        "判斷什麼值得做",
        "架構設計，以及背後的取捨",
        "每一個互動、介面上的每個細節",
        "每一行程式碼上線前的審查",
        "什麼時候可以上線的最後決定",
      ],
    },
    ownTitle: "我們負責|到底的事",
    own: [
      { name: "問題", text: "先搞清楚要做什麼、為什麼要做，才打開編輯器。" },
      { name: "體驗", text: "流程、狀態、例外情境、空白畫面、錯誤訊息，每一處都經過設計。" },
      { name: "工程", text: "架構貼合問題，程式碼經過測試與審查，技術選型是為了這個產品。" },
      { name: "上線", text: "上架審核、伺服器，那些不起眼卻最關鍵的最後一哩路。沒上線，就不算完成。" },
      { name: "交接", text: "看得懂的程式碼、寫清楚的文件，之後誰來接手維護，都能順順地接下去。" },
    ],
  },
  build: {
    chapter: "服務",
    title: "問題需要什麼，|我們就做什麼。",
    intro: "我們不綁定任何技術。先弄懂問題，再決定用什麼技術，這個順序不會反過來。",
    stackA: "沒有固定的技術棧。",
    stackB: "適合的技術是答案，不是起點。",
    items: [
      { name: "行動 App", body: "iOS 與 Android，從第一版上架，到之後的每一次更新。" },
      { name: "網站", body: "形象網站到網頁應用，載入快、讀起來舒服，之後要改也容易。" },
      { name: "SaaS 產品", body: "訂閱制軟體，連同帳號、權限與管理工具，真正在營運的產品該有的都有。" },
      { name: "內部系統", body: "讓營運順利運轉的儀表板與後台系統。" },
      { name: "後端與 API", body: "其他一切都仰賴的服務、資料與系統串接。" },
      { name: "其他需求", body: "只要是軟體，而且必須真的能用，都歡迎來聊。" },
    ],
  },
  contact: {
    title: "手上有|需要上線的|產品嗎？",
    body: "跟我們說說你在做什麼、現在進展到哪裡，還有你心中「完成」的樣子。接下來，交給我們。",
    copy: "複製信箱",
    copied: "已複製",
    copyLabel: "複製電子郵件地址",
    addressLabel: "地址",
    emailLabel: "信箱",
  },
  footer: {
    legal: "奇斯科技 QI SI TECHNOLOGY LIMITED",
    city: "台灣台北",
  },
  address: "台北市萬華區開封街2段39號1樓",
  notFound: {
    title: "這一頁|沒有上線。",
    body: "網址可能打錯了，或是頁面已經搬家。",
    back: "回到首頁",
  },
};

export const copy: Record<Lang, Copy> = { en, zh };
