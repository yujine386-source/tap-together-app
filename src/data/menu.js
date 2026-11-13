
export const CATEGORIES = [
  "burger",
  "chicken",
  "side",
  "drink",
  "dessert"
];

export const MENU = [
  // 버거
  {
    id: "ria-bulgogi",
    category: "burger",
    price: 5100,
    icon: "🍔",
    photo: "ria-bulgogi.jpg",
    names: { ko: "리아 불고기", en: "Ria Bulgogi", zh: "烤肉汉堡", ja: "プルコギバーガー", vi: "Burger Bulgogi" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "ria-shrimp",
    category: "burger",
    price: 5100,
    icon: "🍤",
    photo: "ria-shrimp.jpg",
    names: { ko: "리아 새우", en: "Ria Shrimp", zh: "虾肉汉堡", ja: "エビバーガー", vi: "Burger Tôm" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "teri-burger",
    category: "burger",
    price: 3800,
    icon: "🍔",
    photo: "teri-burger.jpg",
    names: { ko: "데리버거", en: "Teri Burger", zh: "照烧汉堡", ja: "テリバーガー", vi: "Burger Teri" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "hanwoo-bulgogi",
    category: "burger",
    price: 9200,
    icon: "🥩",
    photo: "hanwoo-bulgogi.jpg",
    names: { ko: "한우불고기버거", en: "Hanwoo Bulgogi Burger", zh: "韩牛烤肉汉堡", ja: "韓牛プルコギバーガー", vi: "Burger Bulgogi Hanwoo" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "hot-crispy-chicken",
    category: "burger",
    price: 6400,
    icon: "🍗",
    photo: "hot-crispy-chicken.jpg",
    names: { ko: "핫크리스피치킨버거", en: "Hot Crispy Chicken Burger", zh: "香辣脆鸡汉堡", ja: "ホットクリスピーチキンバーガー", vi: "Burger Gà Giòn Cay" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "double-classic-cheese",
    category: "burger",
    price: 7400,
    icon: "🧀",
    photo: "double-classic-cheese.jpg",
    names: { ko: "더블 클래식치즈버거", en: "Double Classic Cheese Burger", zh: "双层经典芝士汉堡", ja: "ダブルクラシックチーズバーガー", vi: "Burger Phô Mai Kép" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "mozzarella-bacon",
    category: "burger",
    price: 8200,
    icon: "🧀",
    photo: "mozzarella-bacon.jpg",
    names: { ko: "모짜렐라 인 더 버거 베이컨", en: "Mozzarella in the Burger Bacon", zh: "培根马苏里拉汉堡", ja: "モッツァレラバーガーベーコン", vi: "Burger Mozzarella Bacon" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "ria-bulgogi-red",
    category: "burger",
    price: 6200,
    icon: "🌶️",
    photo: "ria-bulgogi-red.jpg",
    names: { ko: "리아 불고기 레드", en: "Ria Bulgogi Red", zh: "辣味烤肉汉堡", ja: "リアプルコギレッド", vi: "Burger Bulgogi Cay" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "ria-square-shrimp-double",
    category: "burger",
    price: 6200,
    icon: "🍤",
    photo: "ria-square-shrimp-double.jpg",
    names: { ko: "리아 사각새우 더블", en: "Ria Square Shrimp Double", zh: "双层方形虾堡", ja: "リア四角エビダブル", vi: "Burger Tôm Vuông Kép" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "tender-leg-chicken",
    category: "burger",
    price: 6900,
    icon: "🍗",
    photo: "tender-leg-chicken.jpg",
    names: { ko: "통다리 크리스피치킨버거", en: "Whole Leg Crispy Chicken Burger", zh: "整鸡腿脆鸡汉堡", ja: "チキンレッグクリスピーバーガー", vi: "Burger Gà Đùi Giòn" },
    whip: false,
    iceOnly: true,
  },

  // 치킨
  {
    id: "fire-wing",
    category: "chicken",
    price: 3400,
    icon: "🍗",
    photo: "fire-wing.jpg",
    names: { ko: "화이어윙 2조각", en: "Fire Wing 2pcs", zh: "辣鸡翅 2块", ja: "ファイヤーウィング 2個", vi: "Cánh Gà Cay 2 Miếng" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "fried-chicken",
    category: "chicken",
    price: 11300,
    icon: "🍗",
    photo: "fried-chicken.jpg",
    names: { ko: "후라이드 순살치킨", en: "Fried Boneless Chicken", zh: "炸无骨鸡肉", ja: "フライド骨なしチキン", vi: "Gà Chiên Không Xương" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "jipai",
    category: "chicken",
    price: 4700,
    icon: "🍗",
    photo: "jipai.jpg",
    names: { ko: "지파이 고소한맛", en: "Jipai Original", zh: "香酥鸡排", ja: "ジーパイ オリジナル", vi: "Gà Chiên Jipai" },
    whip: false,
    iceOnly: true,
  },

  // 사이드
  {
    id: "seasoned-potato",
    category: "side",
    price: 2700,
    icon: "🍟",
    photo: "seasoned-potato.jpg",
    names: { ko: "양념감자", en: "Seasoned Potato", zh: "调味薯条", ja: "シーズニングポテト", vi: "Khoai Tây Lắc" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "potato",
    category: "side",
    price: 2000,
    icon: "🍟",
    photo: "potato.jpg",
    names: { ko: "포테이토", en: "French Fries", zh: "薯条", ja: "フライドポテト", vi: "Khoai Tây Chiên" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "cheese-stick",
    category: "side",
    price: 2900,
    icon: "🧀",
    photo: "cheese-stick.jpg",
    names: { ko: "치즈스틱", en: "Cheese Stick", zh: "芝士条", ja: "チーズスティック", vi: "Phô Mai Que" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "chicken-nugget",
    category: "side",
    price: 3300,
    icon: "🍗",
    photo: "chicken-nugget.jpg",
    names: { ko: "치킨너겟", en: "Chicken Nuggets", zh: "鸡块", ja: "チキンナゲット", vi: "Gà Viên" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "squid-ring",
    category: "side",
    price: 2900,
    icon: "🦑",
    photo: "squid-ring.jpg",
    names: { ko: "통오징어링", en: "Squid Rings", zh: "鱿鱼圈", ja: "イカリング", vi: "Mực Khoanh Chiên" },
    whip: false,
    iceOnly: true,
  },

  // 음료
  {
    id: "cola",
    category: "drink",
    price: 2000,
    icon: "🥤",
    photo: "cola.jpg",
    names: { ko: "콜라", en: "Cola", zh: "可乐", ja: "コーラ", vi: "Cola" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "zero-cola",
    category: "drink",
    price: 2000,
    icon: "🥤",
    photo: "zero-cola.jpg",
    names: { ko: "제로콜라", en: "Zero Cola", zh: "零度可乐", ja: "ゼロコーラ", vi: "Cola Không Đường" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "cider",
    category: "drink",
    price: 2000,
    icon: "🥤",
    photo: "cider.jpg",
    names: { ko: "사이다", en: "Cider", zh: "汽水", ja: "サイダー", vi: "Nước Soda" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "iced-tea",
    category: "drink",
    price: 2500,
    icon: "🧊",
    photo: "iced-tea.jpg",
    names: { ko: "아이스티", en: "Iced Tea", zh: "冰茶", ja: "アイスティー", vi: "Trà Đá" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "americano",
    category: "drink",
    price: 2600,
    icon: "☕",
    photo: "americano.jpg",
    names: { ko: "아메리카노", en: "Americano", zh: "美式咖啡", ja: "アメリカーノ", vi: "Americano" },
    whip: false,
    iceOnly: false,
  },

  // 디저트
  {
    id: "tornado-choco",
    category: "dessert",
    price: 3200,
    icon: "🍦",
    photo: "tornado-choco.jpg",
    names: { ko: "토네이도 초코쿠키", en: "Tornado Choco Cookie", zh: "巧克力曲奇冰淇淋", ja: "トルネードチョコクッキー", vi: "Kem Xoáy Socola Cookie" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "tornado-strawberry",
    category: "dessert",
    price: 3200,
    icon: "🍓",
    photo: "tornado-strawberry.jpg",
    names: { ko: "토네이도 스트로베리", en: "Tornado Strawberry", zh: "草莓冰淇淋", ja: "トルネードストロベリー", vi: "Kem Xoáy Dâu" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "soft-cone",
    category: "dessert",
    price: 1300,
    icon: "🍦",
    photo: "soft-cone.jpg",
    names: { ko: "소프트콘", en: "Soft Cone", zh: "甜筒冰淇淋", ja: "ソフトクリーム", vi: "Kem Ốc Quế" },
    whip: false,
    iceOnly: true,
  },
  {
    id: "sundae-choco",
    category: "dessert",
    price: 2300,
    icon: "🍨",
    photo: "sundae-choco.jpg",
    names: { ko: "선데이 허쉬초코", en: "Hershey Chocolate Sundae", zh: "好时巧克力圣代", ja: "ハーシーチョコサンデー", vi: "Kem Sundae Socola" },
    whip: false,
    iceOnly: true,
  },
];

// 아래부터는 자동 생성
export const MENU_NAMES = Object.fromEntries(
  MENU.map((item) => [item.id, item.names])
);

export const WHIP_AVAILABLE_IDS = MENU
  .filter((item) => item.whip)
  .map((item) => item.id);

export const FIXED_ICE_IDS = MENU
  .filter((item) => item.iceOnly)
  .map((item) => item.id);

export const applyMenuNames = (translations) => {
  if (!translations) return translations;

  const result = {};

  Object.keys(translations).forEach((lang) => {
    const menu = { ...(translations[lang].menu || {}) };

    Object.keys(MENU_NAMES).forEach((id) => {
      const name = MENU_NAMES[id][lang] || MENU_NAMES[id].ko;
      if (name) menu[id] = name;
    });

    result[lang] = { ...translations[lang], menu };
  });

  return result;
};

export const ADDON_PRICE = {
  sizeLarge: 500,
  whip: 500,
  toppingPearl: 500
};

export const DEFAULT_OPTIONS = {
  size: "regular",
  whip: "none",
  topping: "none",
  hotIce: "hot"
};

export const getQrImageUrl = (value) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=8&data=${encodeURIComponent(value)}`;

export const getMenuImageUrl = (item) =>
  `${process.env.PUBLIC_URL || ""}/menu-images/${item.photo || `${item.id}.jpg`}`;

export const computeUnitPrice = (item, options) =>
  item.price +
  (options.size === "large" ? ADDON_PRICE.sizeLarge : 0) +
  (options.whip === "add" ? ADDON_PRICE.whip : 0) +
  (options.topping === "pearl" ? ADDON_PRICE.toppingPearl : 0);

export const buildOptionSummary = (t, options, item) => {
  const parts = [];

  if (!FIXED_ICE_IDS.includes(item.id)) {
    parts.push(options.hotIce === "hot" ? t.hotOption : t.iceOption);
  }

  if (options.size === "large") {
    parts.push(t.sizeLarge.replace(/\s*\(.*\)/, ""));
  }

  if (options.whip === "add") {
    parts.push(t.whipAdd.replace(/\s*\(.*\)/, ""));
  }

  if (options.topping === "pearl") {
    parts.push(t.toppingPearl.replace(/\s*\(.*\)/, ""));
  }

  return parts.join(" · ");
};

export const format = (template, vars) =>
  (template || "").replace(/\{(\w+)\}/g, (_, k) =>
    vars[k] !== undefined ? vars[k] : ""
  );
