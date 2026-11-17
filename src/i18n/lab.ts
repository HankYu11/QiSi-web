// Copy for 旋轉教練 / Spin Coach, QI SI's own product, still a prototype in testing.
// Facts trace to the project repository (experiments/04-live-coach README and research/, experiments/05-ball-marker),
// counted November 2026, and to the owner's measurement notes from the 15 Nov 2026 sessions:
// answers in about 1.1 s (median of 14 clear serves), spin within about 5% of a frame-by-frame count on 4 serves,
// 18 of 18 real serves recorded (research/missed-serves-2026-11-15.md), 14 of them read clearly.
// The result screen in the illustration is redrawn from a real app screenshot (0.13.24, a real serve's clip replayed):
// 2,710 RPM, strong backspin, 42 / 9 / 13 rev/s. Keep it redrawn, not pasted, so it survives the app's redesigns.
// Not public: pricing, partners, government contacts, team size, the company's district. The coach mode is planned only.

import type { Lang } from "./copy";

export type LabSlug = "spin-coach";

const HUD = {
  status: "READY: SERVE",
  meta: "SERVE 01",
  rpm: "2710",
  unit: "RPM",
  scaleFrom: "NO SPIN",
  type: "STRONG BACKSPIN",
  sub: "off the bat",
  unitSplit: "REV/S",
  split: [
    ["BACKSPIN", 42],
    ["SIDE RIGHT", 9],
    ["GYRO", 13],
  ] as [string, number][],
  button: "START",
};

const en = {
  slug: "spin-coach" as LabSlug,
  path: "/en/work/spin-coach/",
  meta: {
    title: "Spin Coach (旋轉教練): a phone that reads your serve — QI SI",
    description:
      "QI SI’s own product in development: a phone beside the table films each table-tennis serve in 240 fps slow motion and says, within seconds, how much spin it had and why.",
  },
  card: {
    kind: "Our own product · Mobile app",
    lede: "A phone beside the table watches your serve and says, within seconds, how much spin it had and why.",
  },
  chapter: "In the lab",
  name: "Spin Coach",
  nameAlt: "旋轉教練",
  status: "Prototype in testing",
  tagline: "Learn table tennis serves |with just your phone.",
  summary:
    "Spin decides a serve, and nobody can see it: a beginner can’t tell whether a serve had backspin, let alone why it didn’t. Spin Coach is our own product. A phone on a stand beside the table films every serve in 240 fps slow motion, finds the ball, measures how fast and which way it turned, and says the result out loud before the player picks up the next ball. Everything is measured on the phone.",
  facts: [
    { k: "We built", v: "The app, the spin-measuring engine, 3D-printed ball-marking tools" },
    { k: "Status", v: "Prototype, version 0.13, tested on a Pixel 8" },
    { k: "Platforms", v: "Android now, iOS to follow" },
    { k: "Camera", v: "1920×1080 at 240 frames a second" },
  ],
  stageCaption:
    "Illustration of the result screen, redrawn from the real app (English UI). The numbers are one real serve’s reading.",
  hud: HUD,
  stepsTitle: "From serve to answer, |in about a second",
  steps: [
    {
      title: "Set the phone up",
      body: "A stand beside the table, level with the net. The app opens the camera’s slow-motion mode at 240 frames a second, the same mode the camera app uses, and its setup advice says when to move closer.",
    },
    {
      title: "See the serve",
      body: "The graphics chip shrinks every frame as it arrives, and a tracker follows small round things that fly. A toss, a ball being picked up or someone walking past is not a serve, and the app has learned to tell.",
    },
    {
      title: "Measure the spin",
      body: "The ball carries a simple marking: one half black, three coloured dots. From the frames of its flight the engine fits how the ball turned, then splits the spin into end over end, sideways and corkscrew.",
    },
    {
      title: "Say it out loud",
      body: "Rate, type and strength, spoken, so the player never has to walk to the phone. When a serve has little spin, the app says why: “You pushed the ball instead of brushing it.”",
    },
  ],
  splitTitle: "One number isn’t enough",
  splitBody:
    "Two serves at 2,700 RPM can behave nothing alike. The app shows the three parts it measures, on one scale: backspin, which makes the ball stop or come back; sidespin, which bends it; and gyro, the corkscrew part that does little until the bounce.",
  markTitle: "The marking, and the tools for it",
  markBody:
    "A plain ball’s turn is invisible, so the ball is marked: the black half gives the spin over a full turn, a coloured dot seen in a few frames gives it from a quarter turn. Marking by hand is slow and uneven, so we designed 3D-printed tools: a cup that holds the ball to its middle, a tray for a batch, and a stencil for the dots.",
  markAlt: "Renders of the 3D-printed marking tools: a tray of twelve cups and a dot stencil.",
  markNote: "3D renders of the tool designs.",
  proofTitle: "Measured on real serves",
  proofIntro:
    "Every reading is checked against slow-motion frames we look at ourselves. These are early numbers from testing, and we say where they stop.",
  proof: [
    { n: "1.1 s", label: "median time from the serve to the answer (14 clear serves)" },
    { n: "5%", label: "within this of a frame-by-frame count, on 4 real serves" },
    { n: "18 / 18", label: "real serves recorded across three sessions, none missed" },
    { n: "66", label: "releases so far, each tried on the phone" },
  ],
  proofNote:
    "Measured in November 2026, on one Pixel 8, in one room. 14 of the 18 serves read clearly; making more of them readable is the work in progress.",
  storyTitle: "What the phone taught us",
  storyIntro: "Most of the work was finding out what a phone can really do at 240 frames a second, then changing course.",
  story: [
    {
      v: "0.1",
      title: "Can a phone even do this?",
      body: "The first version only asked questions. The answer: a Pixel 8 gives apps 1080p at a full 240 frames a second, and the measuring worked, but took 9 to 16 seconds a serve.",
    },
    {
      v: "0.3",
      title: "Watch the ball, don’t listen for it",
      body: "Listening for the bat’s click failed in a hall full of other tables. The app now looks for the ball’s flight instead.",
    },
    {
      v: "0.5",
      title: "Let the graphics chip look",
      body: "Decoding 2 million pixels 240 times a second fell behind. The preview now goes through the graphics chip, which hands over a picture a sixteenth the size.",
    },
    {
      v: "0.10",
      title: "One glance between serves",
      body: "A player reads the screen for about a second, from a metre and a half away. Twelve groups of information became one number, one scale and the spin in three parts.",
    },
    {
      v: "0.13",
      title: "An answer before the next ball",
      body: "Measuring only a box around the ball, and only the frames that matter, brought the answer to about a second.",
    },
  ],
  surfacesTitle: "What we |built",
  surfaces: [
    { name: "Android app", tech: "Kotlin · Camera2 · OpenGL ES · NDK", body: "Slow-motion capture, the serve tracker, the result screen and the spoken results." },
    { name: "Measuring engine", tech: "JavaScript · WebCodecs", body: "Finds the ball in every frame of a flight and fits its rotation, offline, on the phone." },
    { name: "Ball-marking tools", tech: "OpenSCAD · 3D printing", body: "A cup, a tray and a dot stencil, so every ball is marked the same way, quickly." },
  ],
  nextTitle: "What’s next",
  next: [
    "An iOS version.",
    "A coach view that follows each student’s serves over time (planned).",
    "Testing in more halls, under more kinds of light.",
  ],
  note: "We build products for clients, and we build our own. Both get the same engineering: measure, look at the data, change course.",
  alts: {
    hud: "The app’s result screen: 2,710 RPM, strong backspin off the bat, split into backspin 42, side right 9 and gyro 13 revolutions a second.",
  },
};

const zh: typeof en = {
  slug: "spin-coach",
  path: "/work/spin-coach/",
  meta: {
    title: "旋轉教練：用一支手機看懂發球｜奇斯科技 QI SI",
    description: "奇斯科技自己開發中的產品：手機架在球桌旁，用 240 fps 慢動作拍下每一顆發球，幾秒內用語音說出轉速、旋轉種類和原因。",
  },
  card: {
    kind: "自有產品・手機 App",
    lede: "手機架在球桌旁看你發球，幾秒內就說出這顆球轉多快、為什麼沒轉。",
  },
  chapter: "研發中",
  name: "旋轉教練",
  nameAlt: "Spin Coach",
  status: "開發中原型",
  tagline: "只要一支手機，|學會桌球發球。",
  summary:
    "發球好不好，關鍵在旋轉，偏偏旋轉看不見：初學者分不出自己的發球有沒有下旋，更不知道為什麼沒轉。旋轉教練是我們自己的產品。手機架在球桌旁，用 240 fps 慢動作拍下每一顆發球，找到球、量出它轉多快、往哪個方向轉，在球員撿下一顆球之前就用語音說出結果。所有量測都在手機上完成。",
  facts: [
    { k: "我們打造", v: "App、旋轉量測引擎、3D 列印的球體標記工具" },
    { k: "狀態", v: "開發中原型，0.13 版，在 Pixel 8 上測試" },
    { k: "平台", v: "目前是 Android，之後推出 iOS 版" },
    { k: "相機", v: "1920×1080，每秒 240 格" },
  ],
  stageCaption: "結果畫面示意圖，依 App 實際介面重新繪製（英文介面），數值取自一顆真實發球的量測結果。",
  hud: HUD,
  stepsTitle: "從發球到結果，|大約一秒",
  steps: [
    {
      title: "架好手機",
      body: "手機架在球桌旁，跟球網差不多高。App 打開相機的慢動作模式，每秒 240 格，跟相機 App 錄慢動作用的是同一種；位置不對時，設定提示會說要再靠近一點。",
    },
    {
      title: "看見發球",
      body: "每一格畫面一進來，就交給顯示晶片縮小，再由追蹤器找出會飛的小圓點。拋球、撿球、有人從鏡頭前走過都不算發球，App 已經學會分辨。",
    },
    {
      title: "量出旋轉",
      body: "球上有簡單的標記：一半塗黑，再點三個彩色圓點。引擎從飛行過程的每一格算出球怎麼轉，再把旋轉拆成上下旋、側旋和陀螺旋三個部分。",
    },
    {
      title: "說出結果",
      body: "轉速、旋轉種類和強弱直接用語音說出來（目前是英文語音），球員不用走到手機前看。旋轉不夠時，還會說出原因，像是「球是推出去的，沒有摩擦到」。",
    },
  ],
  splitTitle: "只看一個數字不夠",
  splitBody:
    "同樣 2,700 RPM 的兩顆發球，表現可能完全不同。App 把量到的旋轉拆成三個部分，放在同一個刻度上：讓球停住或往回跑的下旋、讓球拐彎的側旋，以及落地前幾乎沒作用、像螺旋一樣的陀螺旋。",
  markTitle: "球上的標記，和畫標記的工具",
  markBody:
    "一般的球看不出轉動，所以要先做標記：黑色半邊可以算出轉一整圈的旋轉，彩色圓點只要出現幾格，轉四分之一圈就算得出來。手工畫標記又慢又不一致，所以我們設計了 3D 列印的工具：把球卡在正中間的杯子、一次處理一批的托盤，以及畫圓點用的模板。",
  markAlt: "3D 列印標記工具的渲染圖：十二格杯子托盤，和畫圓點的模板。",
  markNote: "工具設計的 3D 渲染圖。",
  proofTitle: "在真實發球上量過",
  proofIntro: "每一次量測，我們都拿慢動作畫面親自核對。以下是測試初期的數字，也寫清楚它們的限制。",
  proof: [
    { n: "1.1 秒", label: "從發球到說出結果的中位數（14 顆讀得清楚的發球）" },
    { n: "5%", label: "4 顆真實發球的轉速，和逐格人工數的差距在這以內" },
    { n: "18 / 18", label: "三次測試中的真實發球全部錄到，沒有漏掉" },
    { n: "66", label: "個版本，每一版都在手機上實際試過" },
  ],
  proofNote: "2026 年 11 月在一支 Pixel 8、一個房間裡測得。18 顆發球中 14 顆讀得清楚，讓更多發球讀得出來，是我們正在做的事。",
  storyTitle: "手機教會我們的事",
  storyIntro: "大部分的功夫，花在弄清楚一支手機在每秒 240 格下真正做得到什麼，然後換方向。",
  story: [
    {
      v: "0.1",
      title: "手機真的做得到嗎？",
      body: "第一版只為了回答問題。答案是：Pixel 8 開放 App 用 1080p、每秒整整 240 格錄影，量測也成功了，只是一顆發球要算 9 到 16 秒。",
    },
    {
      v: "0.3",
      title: "用看的，不用聽的",
      body: "靠聽球拍擊球的聲音，在一整排球桌的球館裡行不通。App 改成直接看球的飛行軌跡。",
    },
    {
      v: "0.5",
      title: "交給顯示晶片去看",
      body: "每秒解碼 240 次、每次兩百萬個像素，手機跟不上。現在預覽畫面先經過顯示晶片，交出來的畫面只剩十六分之一大。",
    },
    {
      v: "0.10",
      title: "兩顆球之間，看一眼就懂",
      body: "球員從一公尺半外看螢幕，大約只看一秒。十二組資訊精簡成一個數字、一條刻度，和拆成三部分的旋轉。",
    },
    {
      v: "0.13",
      title: "下一顆球之前就有答案",
      body: "只量球周圍的一小塊、只用真正需要的那幾格，把結果縮短到大約一秒。",
    },
  ],
  surfacesTitle: "我們|打造的部分",
  surfaces: [
    { name: "Android App", tech: "Kotlin · Camera2 · OpenGL ES · NDK", body: "慢動作錄影、發球追蹤、結果畫面與語音播報。" },
    { name: "量測引擎", tech: "JavaScript · WebCodecs", body: "在飛行過程的每一格找到球、算出它怎麼轉，離線在手機上完成。" },
    { name: "球體標記工具", tech: "OpenSCAD · 3D 列印", body: "杯子、托盤和圓點模板，讓每一顆球都能又快又一致地做好標記。" },
  ],
  nextTitle: "接下來",
  next: ["推出 iOS 版。", "教練模式：追蹤每位學員一段時間以來的發球表現（規劃中）。", "到更多球館、在更多種燈光下測試。"],
  note: "我們幫客戶做產品，也做自己的產品。兩者用的是同一套工程方法：量測、看數據、隨時調整方向。",
  alts: {
    hud: "App 的結果畫面：2,710 RPM，擊球後的強烈下旋，拆成下旋 42、右側旋 9、陀螺旋 13，單位是每秒轉數。",
  },
};

export type Lab = typeof en;
export const labs: Record<LabSlug, Record<Lang, Lab>> = { "spin-coach": { en, zh } };
