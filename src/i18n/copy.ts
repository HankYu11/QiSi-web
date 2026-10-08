// All site copy, one object per language with an identical shape.
// English is the source; zh-TW is written for Taiwanese readers, not translated line by line.

export type Lang = "zh" | "en";

export const EMAIL = "support@handyla.co";

const en = {
  htmlLang: "en",
  path: "/en/",
  meta: {
    title: "QI SI — A product studio in Taipei",
    description:
      "QI SI TECHNOLOGY is a product studio in Taipei. We design and build mobile apps, websites and SaaS products for clients, and take responsibility for them all the way to production.",
  },
  a11y: {
    skip: "Skip to content",
    nav: "Primary",
    langSwitch: "Language",
    home: "QI SI home",
    menu: "Menu",
  },
  nav: [
    { href: "#work", label: "Work" },
    { href: "#process", label: "How we work" },
    { href: "#build", label: "What we build" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    eyebrow: "Product studio · Taipei",
    titleA: "We put *our name*",
    titleB: "on what we ship.",
    lede:
      "QI SI designs and builds mobile apps, websites and SaaS products for clients, and owns them all the way to production. We’re fast because AI is built into how we work. What we ship is solid because we answer for every release.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See the work",
    stageLabel: "Fidelity",
    stageHint: "Drag to take it from first sketch to live product.",
    stages: ["Sketch", "Wireframe", "Interface", "Live"],
    stageStatus: "Stage {n} of 4: {name}",
    figureLabel:
      "An illustrated product, drawn at four levels of finish: a rough sketch, a wireframe, a finished interface, and the live release.",
    ui: {
      live: "Live",
      deployed: "Release deployed",
      checks: "All checks passed",
    },
  },
  signoff: {
    kicker: "Responsibility",
    title: "Not an extra pair of hands. A team that answers for the outcome.",
    intro:
      "In Taiwan, you put your seal on what you’re prepared to answer for. That’s how we treat every product: one team owns it end to end, and signs off on each part before it leaves the studio.",
    sheetTitle: "Release sign-off",
    sheetForm: "Form QS-01",
    cols: ["Item", "What we commit to", "Signed"],
    rows: [
      {
        item: "The problem",
        text: "We work out what needs to exist, and why, before anyone opens an editor. Scope is a decision, not an accident.",
      },
      {
        item: "The experience",
        text: "Flows, states, edge cases, empty screens, error messages. All designed on purpose, so people understand it without being taught.",
      },
      {
        item: "The engineering",
        text: "An architecture that fits the problem, code that’s tested and reviewed, and a stack chosen for this product rather than out of habit.",
      },
      {
        item: "The launch",
        text: "Releases, infrastructure, the unglamorous last mile. It isn’t finished until it’s live and running.",
      },
      {
        item: "The handover",
        text: "Readable code and clear documentation, so whoever maintains it next, whether that’s you, us or another team, can pick it up and keep going.",
      },
    ],
    signedBy: "Signed by QI SI",
  },
  work: {
    kicker: "Selected work",
    nameZh: "鮮款款",
    nameEn: "FreshToGo",
    summary:
      "A food surplus marketplace in Taiwan. We built the whole product in-house, every surface, front to back.",
    meta: [
      { k: "Scope", v: "Full stack, in-house" },
      { k: "Platforms", v: "iOS, Android, web" },
      { k: "Delivered", v: "App, backend, admin, website" },
    ],
    mapTitle: "One product. Four surfaces. One team.",
    hub: "One team",
    nodes: [
      {
        id: "app",
        name: "Consumer app",
        tech: "iOS + Android · Kotlin Multiplatform",
        body: "The app people use to find and buy surplus food. One shared Kotlin Multiplatform codebase runs on both iOS and Android.",
      },
      {
        id: "backend",
        name: "Backend",
        tech: "Ktor",
        body: "The Ktor service at the core of the marketplace, behind both the consumer app and the admin dashboard.",
      },
      {
        id: "admin",
        name: "Admin dashboard",
        tech: "Internal tool",
        body: "The internal tool for running the marketplace day to day.",
      },
      {
        id: "site",
        name: "Marketing website",
        tech: "Public site",
        body: "FreshToGo’s public face: what it is, and why it’s worth using.",
      },
    ],
    closing:
      "Because one team built all four, they behave as one system: consistent decisions, one owner, and no seams where one vendor’s work ends and another’s begins.",
    note: "Kotlin Multiplatform and Ktor were the right tools for FreshToGo. The next product gets its own answer.",
  },
  process: {
    kicker: "How we work",
    titleA: "Fast because of AI.",
    titleB: "Solid because of *us*.",
    body:
      "AI is part of how we work every day, and it’s why we move quickly. But it isn’t what we sell. What we sell is software that goes live, runs reliably, and can be maintained long after launch.",
    pipelineLabel: "Every change follows the same path",
    legendAi: "Accelerated by AI",
    legendUs: "Signed off by us",
    steps: [
      { name: "Frame", ai: false, us: true },
      { name: "Draft", ai: true, us: false },
      { name: "Review", ai: true, us: true },
      { name: "Test", ai: true, us: true },
      { name: "Release", ai: false, us: true },
    ],
    colAi: "Where AI speeds us up",
    colUs: "What stays with us",
    ai: [
      "Exploring directions and prototypes early",
      "Drafting and scaffolding code",
      "Writing tests and widening their coverage",
      "Reviewing changes for what people miss",
      "Keeping documentation current",
    ],
    us: [
      "Deciding what’s worth building",
      "Architecture, and the trade-offs behind it",
      "Every interaction, every detail of the interface",
      "Reviewing every line before it ships",
      "The call on when it’s ready",
    ],
  },
  build: {
    kicker: "What we build",
    title: "Whatever the problem calls for.",
    intro:
      "We’re technology-agnostic. We choose the stack after we understand the problem, never before.",
    items: [
      { id: "mobile", name: "Mobile apps", body: "Apps for iOS and Android, from the first store release through every update after it." },
      { id: "web", name: "Websites", body: "From marketing sites to web apps: fast to load, easy to read, simple to change." },
      { id: "saas", name: "SaaS products", body: "Subscription software with the accounts, roles and admin tooling a working business needs." },
      { id: "tools", name: "Internal tools", body: "Dashboards and back-office systems that keep an operation running." },
      { id: "api", name: "Backends & APIs", body: "The services, data and integrations everything else depends on." },
      { id: "other", name: "Something else", body: "If it’s software and it has to work, tell us about it." },
    ],
    statementA: "No house stack.",
    statementB: "The right one is an answer, not a starting point.",
  },
  contact: {
    kicker: "Contact",
    title: "Have something that needs to go live?",
    body:
      "Tell us what you’re building, where it stands today, and what “done” looks like to you. We’ll take it from there.",
    copy: "Copy",
    copied: "Copied",
    copyLabel: "Copy email address",
    note: "QI SI TECHNOLOGY LIMITED · Taipei, Taiwan",
  },
  footer: {
    legal: "QI SI TECHNOLOGY LIMITED",
    city: "Taipei, Taiwan",
    top: "Back to top",
  },
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
      "奇斯科技是位於台北的產品工作室，為客戶設計、開發 App、網站與 SaaS 產品，從第一張草圖一路負責到正式上線。",
  },
  a11y: {
    skip: "跳到主要內容",
    nav: "主選單",
    langSwitch: "語言",
    home: "奇斯科技首頁",
    menu: "選單",
  },
  nav: [
    { href: "#work", label: "作品" },
    { href: "#process", label: "工作方式" },
    { href: "#build", label: "服務項目" },
    { href: "#contact", label: "聯絡我們" },
  ],
  hero: {
    eyebrow: "產品工作室・台北",
    titleA: "交出去的產品，",
    titleB: "我們*蓋章*負責。",
    lede:
      "奇斯科技為客戶打造 App、網站和 SaaS 產品。從釐清需求、設計、開發到正式上線，整段都由我們扛。AI 早已是我們日常工作的一部分，所以動作快；每一次上線都由我們親自把關，所以做得穩。",
    ctaPrimary: "聊聊你的專案",
    ctaSecondary: "看看作品",
    stageLabel: "完成度",
    stageHint: "拖拖看：從一張草圖，到正式上線。",
    stages: ["草圖", "線框", "介面", "上線"],
    stageStatus: "第 {n} 階段，共 4 階段：{name}",
    figureLabel: "一個示意產品在四種完成度下的樣子：手繪草圖、線框稿、完成的介面，以及正式上線。",
    ui: {
      live: "上線中",
      deployed: "新版本已部署",
      checks: "檢查全數通過",
    },
  },
  signoff: {
    kicker: "責任",
    title: "我們不只是多一雙手，而是對結果負責的團隊。",
    intro:
      "在台灣，願意負責的事，才會蓋上自己的章。我們做產品也是這樣：同一個團隊從頭做到尾，每個環節都確認過、簽核過，才讓它出門。",
    sheetTitle: "上線簽核單",
    sheetForm: "表單 QS-01",
    cols: ["項目", "我們的承諾", "核章"],
    rows: [
      {
        item: "問題",
        text: "先搞清楚要做什麼、為什麼要做，才打開編輯器。範圍是刻意決定的，不是做著做著長出來的。",
      },
      {
        item: "體驗",
        text: "流程、狀態、例外情境、空白畫面、錯誤訊息，每一處都經過設計。真正好用的介面，不需要教。",
      },
      {
        item: "工程",
        text: "架構貼合問題，程式碼經過測試與審查。技術選型是為了這個產品，不是出於習慣。",
      },
      {
        item: "上線",
        text: "發布流程、基礎設施，那些不起眼卻最關鍵的最後一哩路。沒有上線、沒有穩定運作，就不算完成。",
      },
      {
        item: "交接",
        text: "看得懂的程式碼、寫清楚的文件。之後不管是你、我們，還是其他團隊接手，都能順順地接下去。",
      },
    ],
    signedBy: "奇斯科技核章",
  },
  work: {
    kicker: "作品",
    nameZh: "鮮款款",
    nameEn: "FreshToGo",
    summary: "台灣的惜食媒合平台。整個產品從前台到後端，每一個部分都由我們自己的團隊打造。",
    meta: [
      { k: "範圍", v: "全端開發，全數自製" },
      { k: "平台", v: "iOS、Android、Web" },
      { k: "交付", v: "App、後端、管理後台、官網" },
    ],
    mapTitle: "一個產品，四個部分，同一個團隊。",
    hub: "同一個團隊",
    nodes: [
      {
        id: "app",
        name: "消費者 App",
        tech: "iOS + Android・Kotlin Multiplatform",
        body: "大家用來找到、買下惜食的 App。iOS 與 Android 共用同一套 Kotlin Multiplatform 程式碼。",
      },
      {
        id: "backend",
        name: "後端服務",
        tech: "Ktor",
        body: "以 Ktor 打造的平台核心，同時撐起消費者 App 與管理後台。",
      },
      {
        id: "admin",
        name: "管理後台",
        tech: "內部工具",
        body: "日常經營平台用的內部工具。",
      },
      {
        id: "site",
        name: "品牌官網",
        tech: "對外網站",
        body: "鮮款款對外的門面：說清楚它是什麼，又為什麼值得一用。",
      },
    ],
    closing:
      "四個部分出自同一個團隊，所以它們像一個系統般運作：決策一致、責任歸屬清楚，不會有不同廠商之間對不上的縫隙。",
    note: "Kotlin Multiplatform 和 Ktor 是鮮款款這個專案的最佳解。下一個產品，會有屬於它的答案。",
  },
  process: {
    kicker: "工作方式",
    titleA: "快，是因為 AI。",
    titleB: "穩，是因為*我們*。",
    body:
      "AI 已經是我們每天工作的一部分，這是我們動作快的原因。但我們賣的不是 AI，而是能順利上線、穩定運作，上線之後也能長期維護的軟體。",
    pipelineLabel: "每一次變更，都走同一條路",
    legendAi: "AI 加速",
    legendUs: "我們核章",
    steps: [
      { name: "定義", ai: false, us: true },
      { name: "草擬", ai: true, us: false },
      { name: "審查", ai: true, us: true },
      { name: "測試", ai: true, us: true },
      { name: "發布", ai: false, us: true },
    ],
    colAi: "AI 幫我們加速的",
    colUs: "始終由我們把關的",
    ai: [
      "前期快速探索方向、做出原型",
      "起草程式碼、搭好骨架",
      "撰寫測試，並補齊覆蓋範圍",
      "審查變更，抓出人容易漏看的地方",
      "讓文件隨時跟上進度",
    ],
    us: [
      "判斷什麼值得做",
      "架構設計，以及背後的取捨",
      "每一個互動、介面上的每個細節",
      "每一行程式碼上線前的審查",
      "什麼時候可以上線的最後決定",
    ],
  },
  build: {
    kicker: "服務項目",
    title: "問題需要什麼，我們就做什麼。",
    intro: "我們不綁定任何技術。先弄懂問題，再決定用什麼技術，這個順序不會反過來。",
    items: [
      { id: "mobile", name: "行動 App", body: "iOS 與 Android 應用程式，從第一版上架，到之後的每一次更新。" },
      { id: "web", name: "網站", body: "從形象網站到網頁應用：載入快、讀起來舒服，之後要改也容易。" },
      { id: "saas", name: "SaaS 產品", body: "訂閱制軟體，連同帳號、權限與管理工具，一個真正在營運的產品該有的都有。" },
      { id: "tools", name: "內部系統", body: "讓營運順利運轉的儀表板與後台系統。" },
      { id: "api", name: "後端與 API", body: "其他一切都仰賴的服務、資料與系統串接。" },
      { id: "other", name: "其他需求", body: "只要是軟體，而且必須真的能用，都歡迎來聊。" },
    ],
    statementA: "沒有固定的技術棧。",
    statementB: "適合的技術是答案，不是起點。",
  },
  contact: {
    kicker: "聯絡我們",
    title: "手上有需要上線的產品嗎？",
    body: "跟我們說說你在做什麼、現在進展到哪裡，還有你心中的「完成」長什麼樣子。接下來，交給我們。",
    copy: "複製",
    copied: "已複製",
    copyLabel: "複製電子郵件地址",
    note: "奇斯科技 QI SI TECHNOLOGY LIMITED・台灣台北",
  },
  footer: {
    legal: "奇斯科技 QI SI TECHNOLOGY LIMITED",
    city: "台灣台北",
    top: "回到頂端",
  },
  notFound: {
    title: "這一頁沒有上線。",
    body: "網址可能打錯了，或是頁面已經搬家。",
    back: "回到首頁",
  },
};

export const copy: Record<Lang, Copy> = { en, zh };
