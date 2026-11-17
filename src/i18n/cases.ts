// Copy for the case studies that share the CaseStudy template (court booking, scrap-car operations).
// Every claim traces to the project repositories (court @ 27ac39e and scrap @ 1ceafb2, counted October 2026;
// WAWA HOUSE @ 599b2ef, counted November 2026): docs/PRODUCT.md, PROGRESS.md, routes/, app/, tests/.
// WAWA HOUSE is named with the client's agreement. Its screens were captured from the app running locally with sample
// products and orders; product photos are drawn placeholders. Card and AI-dialog wording comes from
// docs/assets/line-flex and AiCopyDialog.vue.
// Court and scrap clients stay anonymous: no venue, company, person or LINE account names. Screens were captured from the real
// apps running locally with sample data; the venue name in the court screens is replaced with sample text.
// LINE illustrations reuse the apps' own wording (AdminNotificationService, LineRichMenuRole). The scrap-car LINE screen
// (assets/scrap/line-chat.jpg) is a real phone screenshot with the plate, contact name and phone number blurred.

import type { Lang } from "./copy";

export type CaseSlug = "wawa-house" | "court-booking" | "scrap-cars";

type Pair = { k: string; v: string };
export type CourtVisual = {
  kind: "court";
  sampleNote: string;
  illustration: string;
  flex: { title: string; rows: [string, string][]; confirm: string; reject: string; supplement: string };
  season: { weeks: string; holiday: string; moved: string; renewal: string };
  tiers: { when: string; pct: number }[];
  tiersTitle: string;
};
export type ScrapVisual = {
  kind: "scrap";
  sampleNote: string;
  illustration: string;
  roles: { title: string; list: string[] };
  stages: string[];
  elig: { title: string; states: string[]; plate: string };
  formula: { profit: string; resale: string; purchase: string; plate: string; driver: string };
};
export type ShopVisual = {
  kind: "shop";
  sampleNote: string;
  illustration: string;
  serp: { site: string; url: string; title: string; desc: string; rich: string[] };
  order: { title: string; steps: string[]; rows: [string, string][]; button: string };
  ai: { head: string; draft: string; ask: string; revised: string; apply: string; note: string };
};
export interface Case {
  slug: CaseSlug;
  path: string;
  meta: { title: string; description: string };
  /** the live product, when the client is named */
  site?: { label: string; href: string };
  card: { kind: string; lede: string };
  chapter: string;
  name: string;
  nameAlt: string;
  tagline: string;
  status: string;
  summary: string;
  facts: Pair[];
  stageCaption: string;
  beforeTitle: string;
  beforeLabel: string;
  afterLabel: string;
  before: { was: string; now: string }[];
  featuresTitle: string;
  features: { id: string; title: string; body: string }[];
  listenTitle: string;
  listenIntro: string;
  heardLabel: string;
  changedLabel: string;
  listen: { heard: string; changed: string }[];
  surfacesTitle: string;
  surfaces: { name: string; tech: string; body: string }[];
  proofTitle: string;
  proofIntro: string;
  proof: { n: string; label: string }[];
  proofNote: string;
  note: string;
  visual: CourtVisual | ScrapVisual | ShopVisual;
  alts: Record<string, string>;
}

// LINE wording shown in the illustrations is the apps' own (Chinese UI), so it is shared by both languages.
const COURT_FLEX: CourtVisual["flex"] = {
  title: "新場地申請",
  rows: [
    ["球場", "B 場"],
    ["日期", "2026-10-17"],
    ["時段", "20:00–22:00"],
    ["聯絡人", "林先生"],
    ["金額", "$1000"],
    ["匯款後五碼", "10411"],
  ],
  confirm: "確認核對",
  reject: "拒絕",
  supplement: "補件通知",
};

const courtEn: Case = {
  slug: "court-booking",
  path: "/en/work/court-booking/",
  meta: {
    title: "Badminton court booking case study — QI SI",
    description:
      "How QI SI built a booking system for an indoor badminton venue in New Taipei: a public booking site, a LINE Official Account with mini-pages, and an admin for the operator.",
  },
  card: {
    kind: "Booking system · Web + LINE",
    lede: "Players check free courts on the web or in LINE, no sign-up needed. The operator confirms each booking with one tap in LINE.",
  },
  chapter: "Case study",
  name: "Court booking",
  nameAlt: "羽球場預約系統",
  tagline: "Players check the courts themselves. The operator just confirms.",
  status: "Live since August 2026",
  summary:
    "A booking system for an indoor badminton venue with three courts in New Taipei. Players see which slots are free on the web or in LINE without creating an account, request the ones they want and pay by bank transfer. The operator checks the transfer and confirms with one tap in LINE. We built the public site, the LINE integration and the admin, and kept shipping changes after launch.",
  facts: [
    { k: "We built", v: "Public booking site, LINE Official Account and mini-pages, admin, backend" },
    { k: "Used by", v: "Players, no account needed, and the venue operator" },
    { k: "Release", v: "Live since August 2026, still shipping" },
    { k: "Venue", v: "Three indoor badminton courts, New Taipei" },
  ],
  stageCaption:
    "Real screens from the system (Chinese UI): the operator’s schedule and the public booking grid on a phone. Names and bookings are sample data; the venue name is replaced.",
  beforeTitle: "What changed for the |venue",
  beforeLabel: "Before",
  afterLabel: "Now",
  before: [
    {
      was: "“Is court B free on Saturday night?” came in by phone and LINE all day, and the operator searched old records to answer each one.",
      now: "A live grid of courts A, B and C, on the web and in LINE, open to anyone without signing in.",
    },
    {
      was: "Every booking was typed up again by hand.",
      now: "The player’s own request, with name, phone and the last five digits of the transfer, becomes the record. The operator checks the bank and confirms.",
    },
    {
      was: "Seasonal regulars were marked in week by week.",
      now: "A plan books the whole season in one go, skips clashes and reports them.",
    },
    {
      was: "Slots could sit reserved by people who never paid.",
      now: "Unpaid holds release themselves after 24 hours.",
    },
  ],
  featuresTitle: "How it |works",
  features: [
    {
      id: "grid",
      title: "Pick slots across days and courts",
      body: "A court-by-time grid shows what’s free. Players tick several slots across dates and courts and send one request; all three courts together count as a whole-venue booking at a fixed price. The public grid only ever says “booked”, never who.",
    },
    {
      id: "line",
      title: "Confirm from LINE",
      body: "Each request reaches the operator in LINE as a card with the court, time, contact and the last five digits of the transfer. Confirm, reject or ask for missing details without opening the admin. Players hear back in LINE when the request arrives and again when it’s confirmed.",
    },
    {
      id: "season",
      title: "Seasonal plans that renew themselves",
      body: "The operator sets up plans by court, weekday and time. Applying one books the whole series and moves sessions that land on a public holiday to the end. Before a season ends, the same slots are held for the regular and they’re asked in LINE whether to renew; with no reply in 14 days, the hold is released.",
    },
    {
      id: "self",
      title: "Change or cancel without a phone call",
      body: "Players reschedule or cancel their own bookings under the venue’s policy, and see the refund before they confirm. The operator gets a LINE card to mark the transfer back as done.",
    },
    {
      id: "admin",
      title: "One place to run the venue",
      body: "Pending requests, a schedule that shows who booked and what’s still on hold, history, seasonal plans and admin accounts. A single switch pauses public requests, which made moving bookings over from the old calendar safe.",
    },
  ],
  listenTitle: "Shaped by the people |using it",
  listenIntro: "After launch we kept shipping in small steps. Almost every change started with something the operator or a player ran into.",
  heardLabel: "What came up",
  changedLabel: "What we changed",
  listen: [
    {
      heard: "Players typed their phone number into the chat to link their LINE, and many got it wrong.",
      changed: "Linking moved to a short form inside LINE, with separate menus for linked and unlinked players.",
    },
    {
      heard: "“My bookings” asked people to log in every single time.",
      changed: "Rebuilt as a page inside LINE that already knows who you are. No login button.",
    },
    {
      heard: "Regulars’ slots were taken while the operator waited to hear whether they’d renew.",
      changed: "The next season is now held for them automatically.",
    },
    {
      heard: "Players weren’t sure their request had gone through.",
      changed: "Every kind of request now sends a “request received” message in LINE.",
    },
  ],
  surfacesTitle: "What we |built",
  surfaces: [
    {
      name: "Public booking site",
      tech: "Vue 3 · TypeScript · Vite",
      body: "Availability grid, multi-slot requests, prepaid hours, seasonal plans, FAQ and directions. Works without an account.",
    },
    {
      name: "LINE Official Account",
      tech: "Messaging API · LINE Login · LIFF",
      body: "A rich menu, chat commands to check a date, your balance or your bookings, five mini-pages inside LINE, and a message at every step.",
    },
    {
      name: "Admin",
      tech: "Vue 3 · Bootstrap 5",
      body: "Requests, schedule, history, plans and admin accounts, laid out for one person running a venue.",
    },
    {
      name: "Backend",
      tech: "Laravel 13 · PHP · MySQL",
      body: "Prices worked out on the server, holds that expire on schedule, and database locks so two people can never book the same slot.",
    },
  ],
  proofTitle: "Small venue, |solid engineering",
  proofIntro: "A booking system is only as good as the rules underneath it: no double bookings, the right price, holds that let go on time.",
  proof: [
    { n: "788", label: "automated tests in the backend" },
    { n: "96", label: "API endpoints behind the site, the LINE pages and the admin" },
    { n: "5", label: "mini-pages inside LINE: book, buy hours, my bookings, link account, applications" },
    { n: "4", label: "scheduled jobs, including releasing unpaid holds every five minutes and renewal reminders" },
  ],
  proofNote: "Counted in the project repository in October 2026.",
  note: "Laravel, Vue and LINE were the right tools for a venue whose players already live in LINE. The next product gets its own answer.",
  visual: {
    kind: "court",
    sampleNote: "Real interface, sample data.",
    illustration: "Illustration using the system’s own wording (Chinese UI).",
    flex: COURT_FLEX,
    season: { weeks: "Weekly sessions", holiday: "Holiday", moved: "Moved to the end", renewal: "Held for renewal" },
    tiers: [
      { when: "3 days before", pct: 100 },
      { when: "2 days before", pct: 50 },
      { when: "1 day before or on the day", pct: 0 },
    ],
    tiersTitle: "Refund if cancelled",
  },
  alts: {
    browser: "The operator’s schedule: courts A, B and C by hour, showing booked slots with the booker’s name and requests on hold.",
    phone: "The public booking grid on a phone: courts A, B and C by hour, marked available or booked, with two slots selected.",
    admin: "The operator’s list of requests on hold, each with confirm and cancel buttons.",
  },
};

const courtZh: Case = {
  slug: "court-booking",
  path: "/work/court-booking/",
  meta: {
    title: "羽球場預約系統案例｜奇斯科技 QI SI",
    description: "奇斯科技為新北一間室內羽球場打造的預約系統：公開查詢網站、LINE 官方帳號與 LIFF 頁面，以及給業主用的管理後台。",
  },
  card: {
    kind: "預約系統・網站＋LINE",
    lede: "球友不用註冊，在網站或 LINE 就能查空場、送出預約；業主在 LINE 按一下就能確認。",
  },
  chapter: "案例",
  name: "羽球場預約系統",
  nameAlt: "Court booking",
  tagline: "球友自己查空場，|業主只要按確認。",
  status: "2026 年 8 月上線",
  summary:
    "這是為新北一間室內羽球場打造的預約系統，場館有 A、B、C 三面場地。球友不用註冊，在網站或 LINE 就能看到哪些時段還空著，選好後送出申請、匯款；業主核對匯款後，在 LINE 裡按一下就完成確認。公開網站、LINE 串接和管理後台都由我們打造，上線之後也持續更新。",
  facts: [
    { k: "我們打造", v: "公開查詢網站、LINE 官方帳號與 LIFF 頁面、管理後台、後端" },
    { k: "使用者", v: "球友（免註冊）與場館業主" },
    { k: "版本", v: "2026 年 8 月上線，持續更新中" },
    { k: "場館", v: "新北市，三面室內羽球場" },
  ],
  stageCaption: "畫面取自系統實際介面：業主端的場地管理，以及手機上的公開查詢頁。姓名與預約為示意資料，場館名稱已替換。",
  beforeTitle: "場館的日常，|變了什麼",
  beforeLabel: "以前",
  afterLabel: "現在",
  before: [
    {
      was: "「週六晚上 B 場還有空嗎？」一整天電話、LINE 問個不停，業主每次都得翻舊紀錄才能回答。",
      now: "A、B、C 三面場地的即時空檔，網站和 LINE 都查得到，任何人免登入就能看。",
    },
    {
      was: "每一筆預約都要再手動抄一次。",
      now: "球友自己填的姓名、電話和匯款末五碼直接成為紀錄，業主核對帳戶後按確認就好。",
    },
    {
      was: "季租的熟客，要一週一週手動登記。",
      now: "套用方案就能一次排好整季，撞期的時段會自動略過並列出來。",
    },
    {
      was: "時段被人佔著，卻遲遲沒有匯款。",
      now: "沒付款的保留，24 小時後自動釋出。",
    },
  ],
  featuresTitle: "系統怎麼|運作",
  features: [
    {
      id: "grid",
      title: "跨日期、跨場地一次選",
      body: "場地 × 時段的表格，一眼看出哪裡還空著。球友可以跨日期、跨場地複選，一次送出；三面場同時段一起租就是包場，固定價格。公開頁面只會顯示「已預約」，不會顯示是誰訂的。",
    },
    {
      id: "line",
      title: "在 LINE 裡直接確認",
      body: "每一筆申請都會以卡片傳到業主的 LINE，球場、時段、聯絡人和匯款末五碼一次看清楚。確認、拒絕或請對方補件，都不用打開後台。球友這邊，申請送出和確認完成時也都會收到 LINE 通知。",
    },
    {
      id: "season",
      title: "季租方案，自動續約保留",
      body: "業主依場地、星期和時段設定方案，套用後整季一次排好，遇到國定假日的場次會順延到最後。季末前，系統會先把同樣的時段保留給熟客，並在 LINE 詢問要不要續租；14 天沒回覆就自動釋出。",
    },
    {
      id: "self",
      title: "改期、取消，不用再打電話",
      body: "球友可以依場館規範自己改期或取消，確認前就看得到能退多少。業主會收到一張 LINE 卡片，退款轉帳完成後按一下回報。",
    },
    {
      id: "admin",
      title: "經營場館，一個後台就夠",
      body: "保留中的申請、看得到預約人和保留狀態的場地管理、歷史紀錄、季租方案與管理員名單都在這裡。一個開關就能暫停公開申請，從舊行事曆搬資料過來時也不怕撞單。",
    },
  ],
  listenTitle: "跟著使用的人，|一起長出來",
  listenIntro: "上線之後，我們一小步一小步地持續更新。幾乎每一次修改，都來自業主或球友實際遇到的狀況。",
  heardLabel: "遇到的狀況",
  changedLabel: "我們的調整",
  listen: [
    {
      heard: "球友要在聊天室輸入手機號碼來綁定 LINE，很多人打錯。",
      changed: "改成 LINE 裡的簡短表單，已綁定、未綁定的人看到不同的選單。",
    },
    {
      heard: "「我的預約」每次打開都要重新登入。",
      changed: "改成 LINE 裡的頁面，直接認得你是誰，不再有登入按鈕。",
    },
    {
      heard: "業主還在等熟客回覆要不要續租，時段就被別人訂走了。",
      changed: "下一季的時段，現在會自動先幫熟客保留。",
    },
    {
      heard: "球友不確定申請到底有沒有送出。",
      changed: "每一種申請送出後，都會在 LINE 收到「已收到申請」的訊息。",
    },
  ],
  surfacesTitle: "我們|打造的部分",
  surfaces: [
    {
      name: "公開查詢網站",
      tech: "Vue 3 · TypeScript · Vite",
      body: "場地空檔、多時段申請、儲值時數、季租方案、常見問題與交通資訊，全部免註冊就能用。",
    },
    {
      name: "LINE 官方帳號",
      tech: "Messaging API · LINE Login · LIFF",
      body: "圖文選單、查日期、查餘額、查預約的聊天指令、五個 LINE 內的頁面，每一步都有訊息通知。",
    },
    {
      name: "管理後台",
      tech: "Vue 3 · Bootstrap 5",
      body: "申請、場地、歷史紀錄、方案與管理員名單，為一個人就能顧好整間場館而設計。",
    },
    {
      name: "後端服務",
      tech: "Laravel 13 · PHP · MySQL",
      body: "價格一律由伺服器計算、保留時間到了自動釋出，並用資料庫鎖確保同一個時段不可能被訂兩次。",
    },
  ],
  proofTitle: "場館不大，|工程一樣扎實",
  proofIntro: "預約系統好不好，取決於底下的規則：不會撞單、價格正確、保留到期就放手。",
  proof: [
    { n: "788", label: "個後端自動化測試" },
    { n: "96", label: "個 API 端點，撐起網站、LINE 頁面與後台" },
    { n: "5", label: "個 LINE 內頁面：預約、購買時數、我的預約、綁定帳號、申請" },
    { n: "4", label: "個排程工作，包括每五分鐘釋出未付款的保留，以及續約提醒" },
  ],
  proofNote: "數字為 2026 年 10 月於專案程式庫中實際統計。",
  note: "對一間球友都在用 LINE 的場館來說，Laravel、Vue 加上 LINE 是最適合的組合。下一個產品，會有屬於它的答案。",
  visual: {
    kind: "court",
    sampleNote: "實際介面，資料為示意。",
    illustration: "示意圖，文字取自系統實際用語。",
    flex: COURT_FLEX,
    season: { weeks: "每週固定場次", holiday: "國定假日", moved: "順延到最後", renewal: "續約保留" },
    tiers: [
      { when: "3 天前取消", pct: 100 },
      { when: "2 天前取消", pct: 50 },
      { when: "前 1 天或當天", pct: 0 },
    ],
    tiersTitle: "取消可退費用",
  },
  alts: {
    browser: "業主端的場地管理：A、B、C 三面場地依時段排列，顯示已預約的預約人與保留中的申請。",
    phone: "手機上的公開查詢頁：A、B、C 三面場地依時段標示可預約或已預約，其中兩個時段已選取。",
    admin: "業主端保留中的申請清單，每一筆都有確認與撤銷按鈕。",
  },
};

const scrapEn: Case = {
  slug: "scrap-cars",
  path: "/en/work/scrap-cars/",
  meta: {
    title: "Scrap-car operations case study — QI SI",
    description:
      "How QI SI built the operations system for a scrap-car buying and towing business in Taipei: a LINE Official Account for everyone in the field, and a web back office for the owner and office.",
  },
  card: {
    kind: "Operations system · LINE + web",
    lede: "Salespeople, drivers and the courier work entirely in LINE. The owner and office see every car, from the tow to the paperwork, in one back office.",
  },
  chapter: "Case study",
  name: "Scrap-car operations",
  nameAlt: "報廢車收購管理系統",
  tagline: "Every car, from the tow truck to the motor vehicles office, in one place.",
  status: "In production since July 2026",
  summary:
    "An operations system for a small business in Taipei and New Taipei that buys end-of-life cars from dealerships and repair shops, tows them, handles the deregistration paperwork and sells them on. The owner also drives the tow truck, and an office assistant handles the motor vehicles office. Salespeople, drivers and the document courier do everything in LINE; the owner and the office use a web back office. We built both, and the backend behind them.",
  facts: [
    { k: "We built", v: "LINE Official Account with menus and forms for each role, web back office, backend" },
    { k: "Used by", v: "Owner, office assistant, partner salespeople, drivers, document courier" },
    { k: "Release", v: "In production since July 2026, still shipping" },
    { k: "Area", v: "Taipei and New Taipei" },
  ],
  stageCaption:
    "Real screens (Chinese UI): the back office with sample data, and a tow notice in LINE from the live system, with personal details blurred.",
  beforeTitle: "What changed for the |business",
  beforeLabel: "Before",
  afterLabel: "Now",
  before: [
    {
      was: "Same-day tows and bookings made two months ahead lived in the owner’s head and in LINE chats.",
      now: "One schedule. Bookings move onto the day’s list by themselves, with LINE reminders at 8 am and 9 pm.",
    },
    {
      was: "Each evening the owner tried to remember which cars had been collected that day, dug the photos out of LINE and forwarded them. Progress was tracked on paper.",
      now: "Salespeople and drivers send details and photos to the company’s LINE account, and they’re filed under the right car automatically.",
    },
    {
      was: "Whether a car qualified for the government trade-in subsidy was often only found out at the motor vehicles office.",
      now: "Eligibility is worked out from the car’s dates as soon as they’re entered.",
    },
    {
      was: "Cash deals, instalments and export sales were mixed together, and cash handed to the courier went unrecorded.",
      now: "Every car has its own profit line, partner payments are tracked, and each cash hand-off is followed in three steps.",
    },
  ],
  featuresTitle: "How it |works",
  features: [
    {
      id: "line",
      title: "LINE is the whole field app",
      body: "Seven menus, one for each role. Salespeople book tows and add documents through forms inside LINE, drivers mark cars towed and delivered, the courier confirms hand-offs. The bot answers commands like 今日行程 (today’s tows) and understands everyday dates like “tomorrow” or “in five days”.",
    },
    {
      id: "schedule",
      title: "Booking the tow creates the car",
      body: "Filling in a tow booking creates the vehicle record in the same step, so nothing is typed twice. Each car moves from awaiting tow to towed to delivered, and the day’s order can be dragged around as plans change.",
    },
    {
      id: "progress",
      title: "Paperwork, car by car",
      body: "Every car follows the same five stages, from collected through deregistration to the tax refund and the recycling reward. Stages can be skipped when the office works in batches, and the assistant can ask the right salesperson for a missing document in one tap.",
    },
    {
      id: "rules",
      title: "Rules that used to live in the owner’s head",
      body: "Subsidy eligibility (a car at least 10 years old, owned for at least a year) shows as eligible, not eligible or not yet known. Cars can be found by the digits on the plate alone, cars without plates get a short tracking number like T0001, and duplicate photos are caught automatically.",
    },
    {
      id: "money",
      title: "Profit, per car",
      body: "Resale price minus purchase price, plate fee and driver fee, worked out for every car, with weekly and monthly totals and partner payments. The office assistant never sees resale prices or profit.",
    },
  ],
  listenTitle: "Built with the owner, |one change at a time",
  listenIntro: "We shipped in small slices, and the owner tried each one on their own phone. What they said decided what came next.",
  heardLabel: "What the owner said",
  changedLabel: "What we changed",
  listen: [
    {
      heard: "“Why type in the manufacture date at all? You can tell at a glance.”",
      changed: "Both date fields became optional, and subsidy eligibility gained a “not yet known” state.",
    },
    {
      heard: "Booking a tow and then entering the car again was two jobs for one car.",
      changed: "The booking form became the place where cars are created.",
    },
    {
      heard: "T000001 was too long to read in a LINE message.",
      changed: "Tracking numbers became four digits: T0001.",
    },
    {
      heard: "A full accounting module wasn’t what the business needed.",
      changed: "Finance was cut down to a clear profit formula for each car.",
    },
  ],
  surfacesTitle: "What we |built",
  surfaces: [
    {
      name: "LINE Official Account",
      tech: "Messaging API · LIFF",
      body: "A menu for each of the seven roles, 26 forms inside LINE, chat commands and scheduled reminders. The menu images are drawn by the server.",
    },
    {
      name: "Web back office",
      tech: "Vue 3 · TypeScript · Bootstrap 5",
      body: "Today’s schedule, vehicles, office progress, past vehicles, models and prices, partners and a profit summary, with access set by role.",
    },
    {
      name: "Backend",
      tech: "Laravel 13 · PHP · Sanctum",
      body: "One set of business rules behind both LINE and the web, a signed LINE webhook, and scheduled jobs for reminders, alerts and photo clean-up.",
    },
  ],
  proofTitle: "Built to keep |changing",
  proofIntro: "The rules of a business like this change every week. Tests are what let us change them quickly without breaking what already works.",
  proof: [
    { n: "860", label: "automated test cases, all passing" },
    { n: "106", label: "API endpoints behind LINE and the back office" },
    { n: "26", label: "forms inside LINE, from booking a tow to uploading documents" },
    { n: "7", label: "LINE menus, one for each role" },
  ],
  proofNote: "Counted in the project repository in October 2026.",
  note: "Laravel and LINE were the right tools for a team that already ran its day in LINE. The next product gets its own answer.",
  visual: {
    kind: "scrap",
    sampleNote: "Real interface, sample data.",
    illustration: "Illustration using the system’s own wording (Chinese UI).",
    roles: {
      title: "A LINE menu for each role",
      list: ["Owner", "Office assistant", "Salesperson", "Document courier", "Driver (tow)", "Driver (drive-in)", "Guest (not linked)"],
    },
    stages: ["Collected", "Filed with scrapyard", "Deregistered", "Tax refund", "Recycling reward"],
    elig: { title: "Subsidy eligibility", states: ["Eligible", "Not eligible", "Not yet known"], plate: "No plate? Tracking number" },
    formula: { profit: "Profit", resale: "Resale price", purchase: "Purchase price", plate: "Plate fee", driver: "Driver fee" },
  },
  alts: {
    browser: "The vehicle list in the back office: plate, salesperson, model, purchase and resale amounts, subsidy eligibility and tow status.",
    phone: "A tow notice in the company’s LINE account: a card with the pickup date, address and documents to collect, buttons to view photos and mark the car towed or delivered, and the role menu below.",
    schedule: "Today’s tow schedule: each car’s plate, salesperson, pickup location and status, with buttons to mark it towed or delivered.",
    progress: "The office progress board: each car’s current deregistration stage and paperwork status.",
  },
};

const scrapZh: Case = {
  slug: "scrap-cars",
  path: "/work/scrap-cars/",
  meta: {
    title: "報廢車收購管理系統案例｜奇斯科技 QI SI",
    description: "奇斯科技為雙北一家報廢車收購拖吊業者打造的管理系統：業務、司機、送件全在 LINE 完成，業主與行政用網頁後台掌握每一台車。",
  },
  card: {
    kind: "營運管理系統・LINE＋網頁",
    lede: "業務、司機、送件大哥全在 LINE 上作業；業主和行政在同一個後台，從拖吊到監理站，每台車都看得到。",
  },
  chapter: "案例",
  name: "報廢車收購管理系統",
  nameAlt: "Scrap-car operations",
  tagline: "從拖車到監理站，|每一台車都在同一個地方。",
  status: "2026 年 7 月正式上線",
  summary:
    "這是為雙北一家報廢車業者打造的管理系統。他們向汽車營業所與修車廠收購報廢車，拖吊回來、到監理站辦理車籍，再轉手出去。業主自己兼開拖車，行政負責跑監理站；業務、司機和送件大哥全部在 LINE 上作業，業主和行政則用網頁後台。兩邊和背後的後端，都由我們打造。",
  facts: [
    { k: "我們打造", v: "LINE 官方帳號（各角色專屬選單與表單）、網頁後台、後端" },
    { k: "使用者", v: "業主、行政、合作業務、司機、送件大哥" },
    { k: "版本", v: "2026 年 7 月上線，持續更新中" },
    { k: "服務區域", v: "雙北" },
  ],
  stageCaption: "畫面取自系統實際介面：後台為示意資料；LINE 畫面為實際使用中的拖吊通知，個人資料已模糊處理。",
  beforeTitle: "每天的工作，|變了什麼",
  beforeLabel: "以前",
  afterLabel: "現在",
  before: [
    {
      was: "當天臨時的拖吊，和兩個月前就約好的預約，全靠業主記在腦袋和 LINE 對話裡。",
      now: "同一張排程表。預約到了當天會自動排進今日調度，早上 8 點、晚上 9 點還有 LINE 提醒。",
    },
    {
      was: "業主每天晚上要回想收了哪幾台車，再從 LINE 翻出照片轉給行政，進度靠紙本追。",
      now: "業務和司機把資料、照片傳到公司 LINE 官方帳號，系統自動歸到對應的車輛底下。",
    },
    {
      was: "能不能申請汰舊換新補助，常常到了監理站才知道。",
      now: "填好車輛日期，系統當下就判定符不符合補助資格。",
    },
    {
      was: "現結、分次付款和外銷混在一起，交給送件大哥的現金也沒有紀錄。",
      now: "每台車都有自己的利潤，合作對象的款項有帳可查，每一筆現金交付都分三個階段追蹤。",
    },
  ],
  featuresTitle: "系統怎麼|運作",
  features: [
    {
      id: "line",
      title: "LINE 就是現場用的 App",
      body: "七種角色，各有專屬選單。業務在 LINE 裡用表單預約拖吊、補件，司機回報已拖吊、已交車，送件大哥確認簽收。聊天室輸入「今日行程」就能查行程，「明天」「五天後」這種口語日期也看得懂。",
    },
    {
      id: "schedule",
      title: "預約拖吊，就是建立車輛",
      body: "填寫拖吊預約的同時就建立車輛資料，同一台車不用輸入兩次。每台車從待拖吊、已拖未交車到已交車，當天的順序也能隨時拖曳調整。",
    },
    {
      id: "progress",
      title: "行政進度，一台一台追",
      body: "每台車都走同樣五個階段：完成拖吊、報廢廠開單、監理站車籍處理、退稅，到環保獎勵金。行政一次處理很多台時可以跳過階段，缺文件時一鍵就能通知負責的業務補件。",
    },
    {
      id: "rules",
      title: "原本只在業主腦中的規則",
      body: "補助資格（車齡滿 10 年、持有滿 1 年）分成符合、不符合、尚未判定三種狀態。只輸入車牌數字就查得到車，沒車牌的車自動配發 T0001 這樣的短編號，重複上傳的照片也會自動擋下。",
    },
    {
      id: "money",
      title: "每台車的利潤",
      body: "賣車金額扣掉收購金額、牌照費和司機費，每台車的利潤自動算好，還有週、月利潤總覽與合作對象款項。行政看不到賣車金額和利潤。",
    },
  ],
  listenTitle: "跟業主一起，|一次改一點",
  listenIntro: "我們一小段一小段地交付，業主用自己的手機實際試過每一版，業主的回饋決定下一步做什麼。",
  heardLabel: "業主說",
  changedLabel: "我們的調整",
  listen: [
    {
      heard: "「填出廠日期做什麼？行政瞄一眼就判斷得出來了。」",
      changed: "兩個日期欄位改成選填，補助資格多了「尚未判定」的狀態。",
    },
    {
      heard: "預約完拖吊，還要到車輛管理再填一次，同一台車做兩次工。",
      changed: "預約表單直接成為建立車輛的入口。",
    },
    {
      heard: "T000001 在 LINE 訊息裡太長、不好讀。",
      changed: "追蹤編號縮短成四碼：T0001。",
    },
    {
      heard: "完整的財務記帳模組，並不是業主要的。",
      changed: "財務改成每台車一條清楚的利潤公式。",
    },
  ],
  surfacesTitle: "我們|打造的部分",
  surfaces: [
    {
      name: "LINE 官方帳號",
      tech: "Messaging API · LIFF",
      body: "七種角色各自的選單、26 個 LINE 內表單、聊天指令與排程提醒。圖文選單的圖片由伺服器自動產生。",
    },
    {
      name: "網頁後台",
      tech: "Vue 3 · TypeScript · Bootstrap 5",
      body: "今日調度、車輛管理、行政進度、歷史車輛、車型與價格、合作對象和利潤總覽，依角色控管權限。",
    },
    {
      name: "後端服務",
      tech: "Laravel 13 · PHP · Sanctum",
      body: "LINE 和網頁共用同一套商業規則，LINE Webhook 驗證簽章，排程工作負責提醒、通知與照片清理。",
    },
  ],
  proofTitle: "規則常常變，|系統跟得上",
  proofIntro: "這種生意的規則每週都在調整。有測試在，我們才能改得快，又不會弄壞原本好好的功能。",
  proof: [
    { n: "860", label: "個自動化測試案例，全數通過" },
    { n: "106", label: "個 API 端點，撐起 LINE 與網頁後台" },
    { n: "26", label: "個 LINE 內表單，從預約拖吊到上傳文件" },
    { n: "7", label: "套 LINE 選單，每種角色各一套" },
  ],
  proofNote: "數字為 2026 年 10 月於專案程式庫中實際統計。",
  note: "對一個每天都在 LINE 上跑業務的團隊來說，Laravel 加上 LINE 是最適合的組合。下一個產品，會有屬於它的答案。",
  visual: {
    kind: "scrap",
    sampleNote: "實際介面，資料為示意。",
    illustration: "示意圖，文字取自系統實際用語。",
    roles: { title: "每種角色，各有一套 LINE 選單", list: ["業主", "行政", "業務", "送件大哥", "司機（拖車）", "司機（自行開）", "訪客（未綁定）"] },
    stages: ["完成拖吊", "報廢廠開單", "車籍處理", "退稅", "環保獎勵金"],
    elig: { title: "補助資格", states: ["符合", "不符合", "尚未判定"], plate: "沒有車牌？追蹤編號" },
    formula: { profit: "利潤", resale: "賣車金額", purchase: "收購金額", plate: "牌照費", driver: "司機費" },
  },
  alts: {
    browser: "後台的車輛管理：車牌、業務、車型、收購與賣車金額、補助資格和拖吊狀態。",
    phone: "公司 LINE 官方帳號裡的拖吊通知：卡片列出拖吊日期、地址與需收資料，可查看照片、標記已拖未交車或已交車，下方是角色選單。",
    schedule: "今日調度：每台車的車牌、業務、拖車地點與狀態，以及標記已拖未交車、已交車的按鈕。",
    progress: "行政進度追蹤：每台車目前的車籍處理階段與送件狀態。",
  },
};

// Shop illustrations reuse the app's own wording (Chinese UI): the customer order card
// (docs/assets/line-flex/customer-placed-transfer.json) and the AI copy dialog (AiCopyDialog.vue). Shared by both languages.
const SHOP_VISUAL = {
  serp: {
    site: "WAWA HOUSE 泰香旺旺屋",
    url: "https://wawahouse1688.com › products",
    title: "玫瑰淡香水｜WAWA HOUSE",
    desc: "清新玫瑰揉合白麝香，溫柔不甜膩，適合上班日和約會。",
    rich: ["NT$1,280", "有現貨"],
  },
  order: {
    title: "訂單成立，請完成匯款",
    steps: ["訂單成立", "付款完成", "已出貨"],
    rows: [
      ["應付金額", "NT$ 1,746"],
      ["匯款期限", "2026/11/18 23:59"],
      ["訂單編號", "W2611016001"],
    ] as [string, string][],
    button: "查看訂單／回報匯款",
  },
  ai: {
    head: "AI 幫我寫：玫瑰淡香水",
    draft: "清新玫瑰揉合白麝香，溫柔不甜膩，適合上班日和約會。",
    ask: "簡介改成偏送禮的感覺",
    revised: "想送喜歡玫瑰的人？清新玫瑰揉合白麝香，溫柔不甜膩。",
    apply: "套用這版",
    note: "套用後仍要按「儲存」",
  },
};

const shopEn: Case = {
  slug: "wawa-house",
  path: "/en/work/wawa-house/",
  site: { label: "Visit wawahouse1688.com", href: "https://wawahouse1688.com/" },
  meta: {
    title: "WAWA HOUSE site and shop case study — QI SI",
    description:
      "How QI SI built WAWA HOUSE’s own website and shop: a storefront search engines can read, LINE membership and staff pages, and an admin where AI drafts the product copy.",
  },
  card: {
    kind: "Shop website · Web + LINE",
    lede: "A fragrance shop’s own storefront, with members and order updates in LINE, and an admin where AI drafts the product copy.",
  },
  chapter: "Case study",
  name: "WAWA HOUSE",
  nameAlt: "泰香旺旺屋",
  tagline: "A shop’s own home, where customers find it and buy.",
  status: "Live since October 2026",
  summary:
    "WAWA HOUSE, a Taiwanese shop for perfume, home fragrance and beauty products, had mostly sold through large shopping platforms. It wanted a home of its own: a site people can find on Google, and customers who stay in touch through LINE. We built the storefront and checkout, LINE membership, and a back office the owner and staff run themselves, and we have kept shipping changes since launch.",
  facts: [
    { k: "We built", v: "Storefront and checkout, LINE Official Account with member and staff pages, admin, backend" },
    { k: "Used by", v: "Shoppers, the owner and staff" },
    { k: "Release", v: "Live since October 2026, still shipping" },
    { k: "Sells", v: "Perfume, home fragrance, beauty" },
  ],
  stageCaption:
    "Real screens from the system (Chinese UI): the catalogue and a product page on a phone. Products, photos and prices are sample data.",
  beforeTitle: "What changed for the |shop",
  beforeLabel: "Before",
  afterLabel: "Now",
  before: [
    {
      was: "Customers met the shop on large shopping platforms. It had no site of its own that search could find.",
      now: "Its own storefront, rendered on the server, with structured data and a share preview on every product page.",
    },
    {
      was: "Bank transfers were arranged in plain-text chat, which the owner worried could look like a scam.",
      now: "Customers get a branded LINE card at each step: order placed, payment received, shipped.",
    },
    {
      was: "Hundreds of products were waiting for copy, written one by one.",
      now: "AI drafts it from the name, category and photos. Staff ask for changes and apply only what they approve.",
    },
    {
      was: "Every order was followed by hand: wait for the transfer, check the bank, then ship.",
      now: "Orders sort themselves into to ship, awaiting payment and shipped. Unpaid orders cancel when they expire, and staff confirm and ship in batches from LINE.",
    },
  ],
  featuresTitle: "How it |works",
  features: [
    {
      id: "seo",
      title: "A site search engines can read",
      body: "Product pages are rendered on the server, so search engines see the full content, with product and FAQ structured data, a sitemap, and share previews that use each product’s own photo. Categories nest, from perfume down to woody or floral, and a journal of fragrance articles links to the products it mentions.",
    },
    {
      id: "checkout",
      title: "Members through LINE",
      body: "Adding to the cart needs no account. At checkout, customers sign in with LINE in one tap, and the address they type is saved for next time. From then on, the order, the payment and the shipment each arrive as a LINE card. Sold-out items take restock sign-ups, and a cart left alone for three hours gets one reminder.",
    },
    {
      id: "staff",
      title: "Staff run the shop from LINE",
      body: "Staff who link their LINE see a menu of their own: overview, to ship, payment checks and questions waiting for a reply. They confirm bank transfers one at a time or several at once, and can undo a mistake. Once a day, one card lists the transfers due within 24 hours, instead of a message per order.",
    },
    {
      id: "ai",
      title: "AI writes the first draft",
      body: "On the product form, AI drafts the summary, the description and each variant’s text, following a style guide the owner keeps. Staff ask for changes in plain words, and AI edits only what they point to. If it can’t confirm a perfume’s notes, it says so instead of guessing. Nothing is saved until staff apply the draft and press save.",
    },
    {
      id: "admin",
      title: "Everything else, in one back office",
      body: "Orders, products with variants, stock and sale prices, promotions, gift offers, vouchers, refunds, sales reports and staff accounts. Settings pages preview the storefront as you type, so the owner sees the result before saving.",
    },
  ],
  listenTitle: "Shaped by the people |using it",
  listenIntro: "The owner and staff used each release for real, and what they ran into decided what we changed next.",
  heardLabel: "What came up",
  changedLabel: "What we changed",
  listen: [
    {
      heard: "Signing in meant visiting the member area first, which the owner found backwards.",
      changed: "“Sign in with LINE” moved onto the checkout page, and the first address typed goes into an address book.",
    },
    {
      heard: "Every round of edits rewrote the whole text, and the AI copy grew longer and drifted.",
      changed: "Edits now touch only what staff mention, copy has a length limit, and AI asks instead of guessing perfume notes.",
    },
    {
      heard: "Eight items in the admin menu felt cluttered.",
      changed: "Related pages became tabs, and everything that comes in from LINE got a section of its own.",
    },
    {
      heard: "Staff lost their edits when they left a product form before saving.",
      changed: "Every admin form now warns before you leave with unsaved changes.",
    },
  ],
  surfacesTitle: "What we |built",
  surfaces: [
    {
      name: "Storefront and checkout",
      tech: "Laravel · Blade",
      body: "Catalogue, search, cart, checkout, events, a fragrance journal and order pages, rendered on the server for search.",
    },
    {
      name: "LINE Official Account",
      tech: "Messaging API · LINE Login · LIFF",
      body: "Separate menus for customers and staff, a member area and five staff pages inside LINE, and a card at every step.",
    },
    {
      name: "Admin",
      tech: "Vue 3 · TypeScript · Inertia.js",
      body: "Orders, products, LINE, Instagram, reports and settings, with live previews, for the owner and staff.",
    },
    {
      name: "Backend",
      tech: "Laravel 13 · PHP · ECPay · Claude API",
      body: "Prices, stock and promotions worked out on the server, ECPay payments and invoices built in to switch on in stages, and AI copy that never saves itself.",
    },
  ],
  proofTitle: "A complete shop, |down to the rules",
  proofIntro: "Selling online means money, stock and promises to customers. The rules underneath have to hold.",
  proof: [
    { n: "754", label: "automated tests in the backend" },
    { n: "211", label: "routes behind the storefront, the admin and the LINE pages" },
    { n: "5", label: "staff pages inside LINE: overview, shipping, payment checks, replies, restock" },
    { n: "8", label: "scheduled jobs, including cancelling expired unpaid orders and the daily payment reminder" },
  ],
  proofNote: "Counted in the project repository in November 2026.",
  note: "Laravel, Vue and LINE fit a shop whose customers already talk to it in LINE. The next product gets its own answer.",
  visual: {
    kind: "shop",
    sampleNote: "Real interface, sample data.",
    illustration: "Illustration using the system’s own wording (Chinese UI).",
    ...SHOP_VISUAL,
  },
  alts: {
    browser: "The storefront catalogue: a search box, category and tag filters, and perfume product cards with prices.",
    phone: "A product page on a phone: photo, price, quantity, and add-to-cart and buy-now buttons.",
    transfers: "The payment-check page inside LINE: bank-transfer orders with the amount, the last five digits of the transfer and the deadline.",
    admin: "The admin order list on the awaiting-payment tab: three bank-transfer orders with amounts and deadlines, and buttons to confirm several transfers or notify customers.",
  },
};

const shopZh: Case = {
  slug: "wawa-house",
  path: "/work/wawa-house/",
  site: { label: "前往 wawahouse1688.com", href: "https://wawahouse1688.com/" },
  meta: {
    title: "泰香旺旺屋 WAWA HOUSE 官網與購物系統案例｜奇斯科技 QI SI",
    description: "奇斯科技為香氛選物店泰香旺旺屋打造的官網與購物系統：Google 讀得懂的官網、LINE 會員與管理員頁面，以及會用 AI 幫忙寫商品文案的管理後台。",
  },
  card: {
    kind: "選物店官網與購物・網站＋LINE",
    lede: "香氛選物店自己的官網與購物車，會員和訂單通知都在 LINE；後台還有 AI 幫忙寫商品文案。",
  },
  chapter: "案例",
  name: "泰香旺旺屋",
  nameAlt: "WAWA HOUSE",
  tagline: "有了自己的家，|客人找得到也買得到。",
  status: "2026 年 10 月上線",
  summary:
    "泰香旺旺屋（WAWA HOUSE）是台灣一家販售香水、居家香氛與彩妝保養的選物店，原本主要透過大型購物平台銷售，想要有一個屬於自己的地方：在 Google 搜得到，客人也能透過 LINE 跟店家保持聯繫。前台與結帳、LINE 會員，以及業主和員工自己就能操作的後台，都由我們打造，上線之後也持續更新。",
  facts: [
    { k: "我們打造", v: "官網與結帳、LINE 官方帳號（會員與管理員頁面）、管理後台、後端" },
    { k: "使用者", v: "消費者、業主與員工" },
    { k: "版本", v: "2026 年 10 月上線，持續更新中" },
    { k: "品類", v: "香水、居家香氛、彩妝保養" },
  ],
  stageCaption: "畫面取自系統實際介面：商品列表，以及手機上的商品頁。商品、照片與價格為示意資料。",
  beforeTitle: "店家的日常，|變了什麼",
  beforeLabel: "以前",
  afterLabel: "現在",
  before: [
    {
      was: "客人都是在大型購物平台上認識這家店，店家自己沒有一個搜尋得到的網站。",
      now: "有了自己的官網，伺服器端渲染，每個商品頁都有結構化資料和分享預覽。",
    },
    {
      was: "匯款靠聊天室的純文字對話往來，業主擔心被客人誤會是詐騙。",
      now: "訂單成立、付款完成、已出貨，每一步客人都會收到有品牌感的 LINE 卡片。",
    },
    {
      was: "上百個商品等著上架，文案只能一個一個手打。",
      now: "AI 依名稱、分類和照片先寫草稿，員工打字要求修改，滿意了才套用。",
    },
    {
      was: "每筆訂單都靠人工追：等客人匯款、對帳，再出貨。",
      now: "訂單自動分成待出貨、待付款、已出貨；逾期沒付款自動取消，確認收款和出貨在 LINE 裡就能批次完成。",
    },
  ],
  featuresTitle: "系統怎麼|運作",
  features: [
    {
      id: "seo",
      title: "Google 讀得懂的官網",
      body: "商品頁由伺服器端渲染，搜尋引擎能讀到完整內容，還有商品與常見問題的結構化資料、sitemap，分享出去的預覽圖就是商品自己的照片。分類可以多層，從香水再分木質調、花香調；香氛專欄的文章會連回文中提到的商品。",
    },
    {
      id: "checkout",
      title: "用 LINE 就是會員",
      body: "加入購物車不用登入。到了結帳頁，按一下就能用 LINE 登入，第一次填的收件資料會存起來，下次自動帶入。之後訂單成立、付款、出貨，都會用 LINE 卡片通知。售完的商品可以登記到貨通知，購物車放了三小時沒結帳，也會提醒一次。",
    },
    {
      id: "staff",
      title: "員工在 LINE 裡顧店",
      body: "綁定 LINE 的員工會看到專屬的「管理」選單：總覽、待出貨、匯款確認、待回覆。銀行轉帳可以一筆一筆確認，也能一次勾選好幾筆，按錯了還能回溯。每天一張卡片列出 24 小時內到期的匯款，不會每筆訂單都跳一則通知。",
    },
    {
      id: "ai",
      title: "AI 先寫第一版",
      body: "商品表單上按「AI 幫我寫」，AI 會照業主維護的風格指南，寫出簡介、完整介紹和每個款式的說明。員工直接打字要求修改，AI 只改提到的地方；查不到確定的香調，就老實說，不會亂猜。員工按下「套用這版」、再按儲存，才算數。",
    },
    {
      id: "admin",
      title: "其他的事，一個後台就夠",
      body: "訂單、商品款式、庫存與特價、促銷活動、贈品、票券、退款、營收報表和員工帳號都在這裡。設定頁面邊打字邊預覽前台，存檔前就知道排版長什麼樣子。",
    },
  ],
  listenTitle: "跟著使用的人，|一起長出來",
  listenIntro: "業主和員工每一版都實際拿來用，他們遇到的狀況，決定了下一步要改什麼。",
  heardLabel: "遇到的狀況",
  changedLabel: "我們的調整",
  listen: [
    {
      heard: "要先進會員中心才能登入，業主覺得不直覺。",
      changed: "「用 LINE 登入」直接放在結帳頁，第一次填的地址存進收件地址簿。",
    },
    {
      heard: "AI 每次修改都整篇重寫，越改越長、越寫越歪。",
      changed: "改成只修改員工提到的地方、文案有字數上限，查不到香調就先問員工。",
    },
    {
      heard: "後台選單有 8 個項目，太雜。",
      changed: "有從屬關係的功能併成頁內分頁籤，LINE 送來的東西獨立成一區。",
    },
    {
      heard: "員工編輯商品到一半離開頁面，改好的內容就不見了。",
      changed: "後台所有表單都加上「離開前未存檔」提醒。",
    },
  ],
  surfacesTitle: "我們|打造的部分",
  surfaces: [
    {
      name: "官網與結帳",
      tech: "Laravel · Blade",
      body: "商品型錄、搜尋、購物車、結帳、活動、香氛專欄與訂單頁，由伺服器端渲染，讓搜尋引擎讀得到。",
    },
    {
      name: "LINE 官方帳號",
      tech: "Messaging API · LINE Login · LIFF",
      body: "客人與員工各一套圖文選單、LINE 裡的會員中心和五個管理員頁面，每一步都有卡片通知。",
    },
    {
      name: "管理後台",
      tech: "Vue 3 · TypeScript · Inertia.js",
      body: "訂單、商品、LINE、IG、報表與設定，附即時預覽，業主和員工自己就能操作。",
    },
    {
      name: "後端服務",
      tech: "Laravel 13 · PHP · 綠界 ECPay · Claude API",
      body: "價格、庫存和促銷一律由伺服器計算；綠界金流與電子發票已串好、分階段開放；AI 寫的文案絕不自動存檔。",
    },
  ],
  proofTitle: "購物系統，|每條規則都站得住",
  proofIntro: "在網路上賣東西，牽涉到錢、庫存和對客人的承諾，底下的規則必須站得住。",
  proof: [
    { n: "754", label: "個後端自動化測試" },
    { n: "211", label: "條路由，撐起官網、後台與 LINE 頁面" },
    { n: "5", label: "個 LINE 管理員頁面：總覽、出貨、匯款確認、待回覆、待補貨" },
    { n: "8", label: "個排程工作，包括取消逾期未付款的訂單，以及每天的匯款到期提醒" },
  ],
  proofNote: "數字為 2026 年 11 月於專案程式庫中實際統計。",
  note: "對一家客人本來就用 LINE 聯絡的店來說，Laravel、Vue 加上 LINE 是最適合的組合。下一個產品，會有屬於它的答案。",
  visual: {
    kind: "shop",
    sampleNote: "實際介面，資料為示意。",
    illustration: "示意圖，文字取自系統實際用語。",
    ...SHOP_VISUAL,
  },
  alts: {
    browser: "官網的商品列表：搜尋框、分類與標籤篩選，以及標示價格的香水商品卡片。",
    phone: "手機上的商品頁：商品照片、價格、數量，以及加入購物車與直接購買按鈕。",
    transfers: "LINE 裡的匯款確認頁：每筆銀行轉帳訂單的金額、帳號末五碼與匯款期限。",
    admin: "後台訂單的待付款分頁：三筆宅配銀行轉帳的金額與匯款期限，以及一次確認多筆收款或通知客人的按鈕。",
  },
};

export const cases: Record<CaseSlug, Record<Lang, Case>> = {
  "wawa-house": { en: shopEn, zh: shopZh },
  "court-booking": { en: courtEn, zh: courtZh },
  "scrap-cars": { en: scrapEn, zh: scrapZh },
};
export const caseSlugs = Object.keys(cases) as CaseSlug[];

// Cross-links between case studies (home page and the end of each case page).
export const moreWork = {
  en: { title: "More work", homeTitle: "More from the studio", cta: "Read the case study", ftgKind: "Consumer app · iOS, Android, web" },
  zh: { title: "更多案例", homeTitle: "更多我們做的產品", cta: "看完整案例", ftgKind: "消費者 App・iOS、Android、網站" },
};
