// Copy for 旋轉教練 / Spin Coach, QI SI's own product, still a prototype in testing.
// Facts trace to the project repository (experiments/04-live-coach README and research/, experiments/05-ball-marker),
// counted November 2026, and to the owner's measurement notes from the 15 Nov 2026 sessions:
// answers in about 1.1 s (median of 14 clear serves), spin within about 5% of a frame-by-frame count on 4 serves,
// 18 of 18 real serves recorded and no real serve among the skipped clips (experiments/04-live-coach/research/
// missed-serves-2026-11-15.md; home setup, serving against a wall), 14 of them read clearly. Marking tools: not printed yet.
// The result screen in the illustration is redrawn from a real app screenshot (0.13.24, a real serve's clip replayed):
// 2,710 RPM, strong backspin, 42 / 9 / 13 rev/s. 0.1 took 9–16 s a serve (README, 'What 0.1 showed'). Keep it redrawn, not pasted, so it survives the app's redesigns.
// Not public: pricing, partners, government contacts, team size, the company's district. The coach mode is planned only.

import type { Lang } from "./copy";

export type LabSlug = "spin-coach";

const HUD = {
  status: "READY: SERVE",
  meta: "SERVE 01",
  rpm: "2710",
  // the app's scale runs to about 3,750 RPM (0.9.0 notes); 2,710 fills about 72% of it
  scaleMax: 3750,
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
    lede: "A phone beside the table watches your serve and says, in about a second, how much spin it had, and why when it had little.",
  },
  chapter: "In the lab",
  name: "Spin Coach",
  nameAlt: "旋轉教練",
  status: "Prototype in testing",
  tagline: "Learn table tennis serves |with just your phone.",
  summary:
    "Spin decides a serve, and nobody can see it: a beginner can’t tell whether a serve had backspin, let alone why it didn’t. Spin Coach is our own product. A phone on a stand beside the table films every serve in 240 fps slow motion, finds the ball, measures how fast and which way it turned, and says the result out loud before the player picks up the next ball. Everything is measured on the phone.",
  facts: [
    { k: "We built", v: "The app, the spin-measuring engine, designs for 3D-printable ball-marking tools" },
    { k: "Status", v: "Prototype, version 0.13. Not available to download yet." },
    { k: "Tested on", v: "Android (Pixel 8)" },
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
    "Two serves at 2,700 RPM can behave nothing alike. The app splits the spin into three parts around three axes: backspin, end over end, which makes the ball stop or come back; sidespin, which bends it; and gyro, the corkscrew turn along the flight that does little until the bounce.",
  axes: {
    label: "A ball in flight with its three spin axes: backspin end over end, sidespin around the vertical, gyro along the flight.",
    back: "Backspin",
    side: "Sidespin",
    gyro: "Gyro",
    note: "Illustration.",
  },
  markTitle: "The marking, and the tools for it",
  markBody:
    "A plain ball’s turn is invisible, so the ball is marked: the black half gives the spin over a full turn, a coloured dot seen in a few frames gives it from a quarter turn. Marking by hand is slow and uneven, so we designed 3D-printed tools: a cup that holds the ball to its middle, a tray for a batch, and a stencil for the dots.",
  markAlt: "Renders of the marking-tool designs: a single cup, a tray of twelve cups and a dot stencil.",
  markNote: "3D renders of the tool designs; not printed yet.",
  proofTitle: "Measured on real serves",
  proofIntro:
    "We check readings against slow-motion frames we count ourselves. These are early numbers from testing, and we say where they stop.",
  proof: [
    { n: "1.1 s", label: "median time from the serve to the answer (14 clear serves)" },
    { n: "5%", label: "within this of a frame-by-frame count, on 4 real serves" },
    { n: "18 / 18", label: "real serves recorded across three sessions; none of the clips the app skipped held a serve" },
    { n: "16 s → 1.1 s", label: "slowest answer in the first version, against the median now" },
  ],
  proofNote:
    "Measured in November 2026 on one Pixel 8, at home, serving against a wall with no table. 14 of the 18 serves read clearly; making more of them readable is the work in progress.",
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
      body: "In a hall, other tables click too, so listening for the bat can’t work. The app now looks for the ball’s flight instead.",
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
    { name: "Ball-marking tools", tech: "OpenSCAD · designed for 3D printing", body: "A cup, a tray and a dot stencil, designed so every ball can be marked the same way. Not printed yet." },
  ],
  nextTitle: "What’s next",
  next: [
    "Testing in more halls, at real tables, under more kinds of light.",
    "A coach view that follows each student’s serves over time (planned).",
    "More phones, including iPhone.",
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
    lede: "手機架在球桌旁看你發球，大約一秒就說出這顆球轉多快，轉不夠時還會說原因。",
  },
  chapter: "研發中",
  name: "旋轉教練",
  nameAlt: "Spin Coach",
  status: "開發中原型",
  tagline: "只要一支手機，|學會桌球發球。",
  summary:
    "發球好不好，關鍵在旋轉，偏偏旋轉看不見：初學者分不出自己的發球有沒有下旋，更不知道為什麼沒轉。旋轉教練是我們自己的產品。手機架在球桌旁，用 240 fps 慢動作拍下每一顆發球，找到球、量出它轉多快、往哪個方向轉，在球員撿下一顆球之前就用語音說出結果。所有量測都在手機上完成。",
  facts: [
    { k: "我們打造", v: "App、旋轉量測引擎、球的標記工具設計（3D 列印用）" },
    { k: "狀態", v: "開發中原型，0.13 版，尚未開放下載" },
    { k: "測試環境", v: "Android（Pixel 8）" },
    { k: "相機", v: "1920×1080，每秒 240 格" },
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
    "同樣 2,700 RPM 的兩顆發球，表現可能完全不同。App 把旋轉依三個軸拆開：前後翻滾、讓球停住或往回跑的下旋；讓球拐彎的側旋；以及順著飛行方向、像螺旋一樣，落地前幾乎沒作用的陀螺旋。",
  axes: {
    label: "飛行中的球與三個旋轉軸：前後翻滾的下旋、繞垂直軸的側旋、順著飛行方向的陀螺旋。",
    back: "下旋",
    side: "側旋",
    gyro: "陀螺旋",
    note: "示意圖。",
  },
  markTitle: "球上的標記，和畫標記的工具",
  markBody:
    "一般的球看不出轉動，所以要先做標記：黑色半邊可以算出轉一整圈的旋轉，彩色圓點只要出現幾格，轉四分之一圈就算得出來。手工畫標記又慢又不一致，所以我們設計了 3D 列印的工具：把球卡在正中間的杯子、一次處理一批的托盤，以及畫圓點用的模板。",
  markAlt: "標記工具設計的渲染圖：單個杯子、十二格托盤，和畫圓點的模板。",
  markNote: "工具設計的 3D 渲染圖，尚未實際列印。",
  proofTitle: "在真實發球上量過",
  proofIntro: "我們拿慢動作畫面，逐格人工核對量測結果。以下是測試初期的數字，也寫清楚它們的限制。",
  proof: [
    { n: "1.1 秒", label: "從發球到說出結果的中位數（14 顆讀得清楚的發球）" },
    { n: "5%", label: "轉速與逐格人工計數相差不到 5%（4 顆真實發球）" },
    { n: "18 / 18", label: "三次測試的 18 顆真實發球都錄到了；App 略過的片段裡沒有一顆是發球" },
    { n: "16 秒 → 1.1 秒", label: "第一版最慢要等 16 秒，現在的中位數是 1.1 秒" },
  ],
  proofNote: "2026 年 11 月用一支 Pixel 8 在家中對牆發球測得，沒有球桌。18 顆發球中 14 顆讀得清楚，讓更多發球讀得出來，是我們正在做的事。",
  storyTitle: "手機教會我們的事",
  storyIntro: "大部分的功夫，花在弄清楚一支手機在每秒 240 格下真正做得到什麼，再據此調整方向。",
  story: [
    {
      v: "0.1",
      title: "手機真的做得到嗎？",
      body: "第一版只是可行性測試。結果是：Pixel 8 開放 App 用 1080p、每秒整整 240 格錄影，量測也成功了，只是一顆發球要算 9 到 16 秒。",
    },
    {
      v: "0.3",
      title: "用看的，不用聽的",
      body: "球館裡別桌也在擊球，靠聲音分不出來。App 改成直接看球的飛行軌跡。",
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
    { name: "球的標記工具", tech: "OpenSCAD · 3D 列印設計", body: "杯子、托盤和圓點模板，設計來讓每一顆球都標得一致；還沒實際印出來。" },
  ],
  nextTitle: "接下來",
  next: ["到更多球館、在真正的球桌和更多種燈光下測試。", "教練模式：追蹤每位學員一段時間以來的發球表現（規劃中）。", "支援更多手機，包括 iPhone。"],
  note: "我們幫客戶做產品，也做自己的產品。兩者用的是同一套工程方法：量測、看數據、隨時調整方向。",
  alts: {
    hud: "App 的結果畫面：2,710 RPM，擊球後的強烈下旋，拆成下旋 42、右側旋 9、陀螺旋 13，單位是每秒轉數。",
  },
};

export type Lab = typeof en;
export const labs: Record<LabSlug, Record<Lang, Lab>> = { "spin-coach": { en, zh } };
