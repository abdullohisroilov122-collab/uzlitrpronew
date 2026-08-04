// ==========================================================================
// UzLitrPro — shared interactions
// ==========================================================================

/* ==========================================================================
   Language switcher — translates the ENTIRE site (nav, footer, hero,
   every page's headings/paragraphs/buttons/forms).
   ========================================================================== */
const i18n = {
  uz: {
    label: "O'zbek",
    nav_home: "Bosh sahifa", nav_products: "Mahsulotlar", nav_about: "Biz haqimizda",
    nav_news: "Yangiliklar", nav_contact: "Aloqa", nav_cta: "Bog'lanish",
    hours: "Dushanba – Shanba, 9:00 AM – 6:00 PM",

    hero_eyebrow: "Sertifikatlangan brend",
    hero_h1_pre: "Har bir tomchi ", hero_h1_em: "hisobga", hero_h1_post: " olinadi.",
    hero_p: "UzLitrPro — sovuq va issiq suv uchun yuqori aniqlikdagi hisoblagichlar. Bardoshli, suv o'tkazmaydigan va uzoq muddat xizmat qiladigan — Toshkentda ishlab chiqarilgan.",
    hero_btn1: "Mahsulotlarni ko'rish", hero_btn2: "Buyurtma berish",
    stat1: "Suv o'tkazmaydigan", stat2: "Kafolat", stat2_val: "1 yil", stat3: "O'lcham diapazoni",
    badge_ip68: "IP68", badge_warranty: "1 yil kafolat", badge_iso: "ISO 4064-1", badge_hotcold: "Sovuq / Issiq",
    badge_ip68_long: "IP68 himoya",

    trust2: "Toshkent shahrida ishlab chiqarilgan",
    trust3: "O'zMsT ISO 4064-1:2024 standartiga muvofiq",
    trust4: "Premium Quality",

    feat_eyebrow: "Xususiyatlar", feat_h2: "Har bir detalda mo'ljallangan aniqlik",
    feat_p: "UzLitrPro hisoblagichlari uzoq muddat ishonchli ishlashi uchun sinovdan o'tkazilgan — uy egalaridan tortib santexnik ustalargacha.",
    feat1_h: "Sovuq va issiq suv", feat1_p: "Bitta hisoblagich ikkala tizim uchun ham mos — qo'shimcha uskunasiz.",
    feat2_h: "Aniq o'lchov", feat2_p: "Yuqori sifatli mexanizm har bir litr suvni xatosiz hisoblaydi.",
    feat3_h: "Bardoshli material", feat3_p: "Korroziyaga chidamli qurilma uzoq yillar davomida xizmat qiladi.",
    feat4_h: "IP68 himoya", feat4_p: "Namlik va changdan to'liq himoyalangan — har qanday sharoitga mos.",

    size_eyebrow: "O'lchamlar", size_h2: "Har bir tizimga mos o'lcham",
    size_p: "Kvartiradan tortib ko'p qavatli binolargacha — UzLitrPro uch xil diametrda mavjud.",
    sizespec1: "O'zMsT standarti", sizespec2: "Himoya darajasi", sizespec3: "Kafolat muddati", sizespec4: "Ishlab chiqaruvchi",
    prod_flow_15: "0.6 – 3.0 m³/h", prod_flow_20: "1.0 – 5.0 m³/h", prod_flow_25: "1.6 – 7.0 m³/h",
    size_view_all: "Barcha mahsulotlar", size_available: "Mavjud",
    team_eyebrow: "Bizning jamoa", team_h2: "Bizning jamoa", team_p: "Professional va tajribali mutaxassislar jamoasi",
    team1_role: "Dasturiy bo'lim boshlig'i", team_soon: "Tez orada",

    home_cta_h2: "To'liq spetsifikatsiyani ko'rishga tayyormisiz?",
    home_cta_p: "Har bir o'lcham bo'yicha batafsil texnik ma'lumotlarni Mahsulotlar sahifasida toping.",

    footer_desc: "Sovuq va issiq suv uchun ishonchli, aniq hisoblagichlar. MCHJ «LITR ENERGY GROUP» tomonidan Toshkentda ishlab chiqariladi.",
    footer_nav_h: "Navigatsiya", footer_contact_h: "Aloqa",
    footer_rights: "© 2026 UzLitrPro / LITR ENERGY GROUP. Barcha huquqlar himoyalangan.",

    cta_contact_btn: "Biz bilan bog'laning",

    about_eyebrow: "Biz haqimizda", about_h1: "Aniqlik — bizning ishimizning asosi",
    about_p: "UzLitrPro — MCHJ «LITR ENERGY GROUP» ning suv hisoblagichlari yo'nalishidagi brendi. Toshkentda joylashgan.",
    about_mission_eyebrow: "Missiyamiz", about_mission_h2: "Har bir uy va bino uchun ishonchli o'lchov",
    about_mission_p: "Suv sarfini aniq hisoblash — adolatli to'lov va tejamkorlikning boshlanishi. Shuning uchun UzLitrPro har bir hisoblagichni bardoshli, suv o'tkazmaydigan va O'zMsT ISO 4064-1:2024 standartiga to'liq mos qilib ishlab chiqaradi.",
    value1_h: "Sifat nazorati", value1_p: "Har bir hisoblagich ishlab chiqarish jarayonida tekshiruvdan o'tadi.",
    value2_h: "Bardoshli materiallar", value2_p: "Uzoq muddatli xizmat va korroziyaga chidamlilik uchun tanlangan qurilmalar.",
    value3_h: "Mahalliy ishlab chiqarish", value3_p: "Toshkentda joylashgan — bu tezroq yetkazib berish va qulay xizmat degani.",
    about_timeline: "MCHJ «LITR ENERGY GROUP» — Toshkent shahri, Yakkasaroy tumani, Rakatboshi MFY, O'rikzor 1-tor ko'chasi, 40-uyda joylashgan ishlab chiqaruvchi korxona.",
    about_why_eyebrow: "Nega UzLitrPro", about_why_h2: "Har bir hisoblagich ortida turgan standart",
    about_f1_p: "Rasmiy standartga to'liq muvofiqlik.",
    about_f2_h: "1 yillik kafolat", about_f2_p: "Har bir mahsulotga ishonch bilan beriladigan kafolat.",
    about_f3_h: "IP68 himoya", about_f3_p: "Namlik va tashqi ta'sirlardan to'liq himoya.",
    about_f4_p: "Yuqori sifatli komponentlar va ishlov berish.",
    about_cta_h2: "Kompaniyamiz bilan hamkorlik qilmoqchimisiz?", about_cta_p: "Buyurtma, hamkorlik yoki savol bo'yicha biz bilan bog'laning.",

    prod_eyebrow: "Mahsulot", prod_h1: "Sovuq va issiq suv uchun hisoblagich",
    prod_p: "Uch xil o'lchamda mavjud — kvartiradan tortib yuqori sarfli tizimlargacha. Quyidagi o'lchamni tanlab, texnik xususiyatlarini ko'ring.",
    prod_card_p: "Yuqori aniqlikdagi o'lchov mexanizmi, bardoshli korpus va IP68 himoya darajasi bilan — uy, kvartira va tijorat binolari uchun mos.",
    prod_choose_size: "O'lchamni tanlang:", prod_order_btn: "Ushbu o'lchamni buyurtma qilish",
    prod_spec_eyebrow: "Texnik xususiyatlar", prod_spec_h2: "To'liq spetsifikatsiya", prod_spec_p: "Tanlangan o'lcham bo'yicha batafsil ma'lumot.",
    spec_size: "O'lcham", spec_flow: "Suv oqimi diapazoni", spec_length: "Uzunligi", spec_use: "Tavsiya etilgan foydalanish",
    spec_weight: "Og'irligi", spec_protection: "Himoya darajasi", spec_standard: "Standart", spec_warranty: "Kafolat",
    spec_use_15: "Kvartira / uy uchun standart", spec_use_20: "Ko'p qavatli va tijorat binolari", spec_use_25: "Yuqori sarfli tizimlar",
    prod_why_eyebrow: "Nima uchun UzLitrPro", prod_why_h2: "Har bir detalda o'ylab ishlab chiqilgan",
    prod_f1_p: "Ikkala tizim uchun ham bitta ishonchli yechim.",
    prod_f2_p: "Har bir litr aniq va xatosiz hisoblanadi.",
    prod_cta_h2: "Buyurtma berishga tayyormisiz?", prod_cta_p: "Kerakli o'lchamni tanlang va biz bilan bog'laning — jarayon oddiy va tez.",

    contact_eyebrow: "Aloqa", contact_h1: "Biz bilan bog'laning",
    contact_p: "Buyurtma berish, hamkorlik yoki savolingiz bormi? Quyidagi forma orqali yozing yoki to'g'ridan-to'g'ri qo'ng'iroq qiling.",
    contact_info_h: "Bog'lanish ma'lumotlari",
    contact_address: "Toshkent shahri, Yakkasaroy tumani, Rakatboshi MFY, O'rikzor 1-tor ko'chasi, 40-uy",
    contact_form_h: "Xabar yuborish",
    form_name: "Ismingiz", form_name_ph: "Ismingizni kiriting",
    form_phone: "Telefon raqami",
    form_size: "Qiziqtirgan o'lcham", form_notsure: "Hali aniq emas",
    form_message: "Xabaringiz", form_message_ph: "Buyurtma miqdori, yetkazib berish manzili yoki savolingizni yozing...",
    form_submit: "Xabarni yuborish",
    form_note: "Bu forma frontend namoyishi sifatida ishlaydi. Haqiqiy xabarlarni qabul qilish uchun uni backend yoki elektron pochta xizmatiga ulash kerak bo'ladi.",
    form_success: "Rahmat! Xabaringiz qabul qilindi (namoyish rejimi) — tez orada siz bilan bog'lanamiz.",

    news_eyebrow: "Yangiliklar", news_h1: "Kompaniya yangiliklari",
    news_p: "UzLitrPro'dagi so'nggi voqealar, mahsulot yangilanishlari va e'lonlar tez orada shu yerda paydo bo'ladi.",
    news_soon_eyebrow: "Tez orada", news_soon_h2: "Bu bo'lim hozircha tayyorlanmoqda",
    news_soon_p: "Yangiliklar va maqolalar qo'shilishi bilan bu yerda ko'rinadi. Hozircha mahsulotlarimiz va kompaniya haqida ma'lumot olish uchun boshqa sahifalarga tashrif buyuring.",
    news_f1_h: "Mahsulot yangilanishlari", news_f1_p: "Yangi o'lchamlar va texnik yaxshilanishlar haqida bu yerdan xabardor bo'lasiz.",
    news_f2_h: "Kompaniya e'lonlari", news_f2_p: "Sertifikatlar, hamkorliklar va boshqa muhim yangiliklar.",
    news_f3_h: "Foydali maslahatlar", news_f3_p: "Suv hisoblagichlarini o'rnatish va parvarish qilish bo'yicha tavsiyalar.",
    news_cta_h2: "Savolingiz bormi?", news_cta_p: "Biz bilan bog'laning — sizga yordam berishdan mamnunmiz.",
  },

  ru: {
    label: "Русский",
    nav_home: "Главная", nav_products: "Продукты", nav_about: "О нас",
    nav_news: "Новости", nav_contact: "Контакты", nav_cta: "Связаться",
    hours: "Пн – Сб, 9:00 AM – 6:00 PM",

    hero_eyebrow: "Сертифицированный бренд",
    hero_h1_pre: "Каждая капля ", hero_h1_em: "на счету", hero_h1_post: ".",
    hero_p: "UzLitrPro — высокоточные счётчики для холодной и горячей воды. Прочные, водонепроницаемые и долговечные — производятся в Ташкенте.",
    hero_btn1: "Смотреть продукцию", hero_btn2: "Оформить заказ",
    stat1: "Водонепроницаемость", stat2: "Гарантия", stat2_val: "1 год", stat3: "Диапазон размеров",
    badge_ip68: "IP68", badge_warranty: "Гарантия 1 год", badge_iso: "ISO 4064-1", badge_hotcold: "Холод / Тепло",
    badge_ip68_long: "Защита IP68",

    trust2: "Производится в Ташкенте",
    trust3: "Соответствует стандарту O'zMsT ISO 4064-1:2024",
    trust4: "Premium Quality",

    feat_eyebrow: "Особенности", feat_h2: "Точность, продуманная в каждой детали",
    feat_p: "Счётчики UzLitrPro протестированы для надёжной долгосрочной работы — от владельцев квартир до сантехников.",
    feat1_h: "Холодная и горячая вода", feat1_p: "Один счётчик подходит для обеих систем — без дополнительного оборудования.",
    feat2_h: "Точное измерение", feat2_p: "Качественный механизм точно считает каждый литр воды.",
    feat3_h: "Прочный материал", feat3_p: "Устойчивое к коррозии устройство служит долгие годы.",
    feat4_h: "Защита IP68", feat4_p: "Полная защита от влаги и пыли — подходит для любых условий.",

    size_eyebrow: "Размеры", size_h2: "Подходящий размер для любой системы",
    size_p: "От квартиры до многоэтажного здания — UzLitrPro доступен в трёх диаметрах.",
    sizespec1: "Стандарт O'zMsT", sizespec2: "Уровень защиты", sizespec3: "Срок гарантии", sizespec4: "Производитель",
    prod_flow_15: "0.6 – 3.0 м³/ч", prod_flow_20: "1.0 – 5.0 м³/ч", prod_flow_25: "1.6 – 7.0 м³/ч",
    size_view_all: "Все продукты", size_available: "В наличии",
    team_eyebrow: "Наша команда", team_h2: "Наша команда", team_p: "Команда профессиональных и опытных специалистов",
    team1_role: "Руководитель отдела программирования", team_soon: "Скоро",

    home_cta_h2: "Готовы увидеть полную спецификацию?",
    home_cta_p: "Подробные технические данные по каждому размеру — на странице «Продукты».",

    footer_desc: "Надёжные и точные счётчики для холодной и горячей воды. Производятся компанией ООО «LITR ENERGY GROUP» в Ташкенте.",
    footer_nav_h: "Навигация", footer_contact_h: "Контакты",
    footer_rights: "© 2026 UzLitrPro / LITR ENERGY GROUP. Все права защищены.",

    cta_contact_btn: "Связаться с нами",

    about_eyebrow: "О нас", about_h1: "Точность — основа нашей работы",
    about_p: "UzLitrPro — бренд ООО «LITR ENERGY GROUP» в сфере счётчиков воды. Расположен в Ташкенте.",
    about_mission_eyebrow: "Наша миссия", about_mission_h2: "Надёжное измерение для каждого дома и здания",
    about_mission_p: "Точный учёт расхода воды — начало справедливой оплаты и экономии. Поэтому UzLitrPro производит каждый счётчик прочным, водонепроницаемым и полностью соответствующим стандарту O'zMsT ISO 4064-1:2024.",
    value1_h: "Контроль качества", value1_p: "Каждый счётчик проходит проверку в процессе производства.",
    value2_h: "Прочные материалы", value2_p: "Устройства, выбранные за долгий срок службы и устойчивость к коррозии.",
    value3_h: "Местное производство", value3_p: "Расположены в Ташкенте — это более быстрая доставка и удобный сервис.",
    about_timeline: "ООО «LITR ENERGY GROUP» — производственное предприятие, расположенное по адресу: г. Ташкент, Яккасарайский район, махалля Ракатбоши, ул. Орикзор 1-тор, дом 40.",
    about_why_eyebrow: "Почему UzLitrPro", about_why_h2: "Стандарт, стоящий за каждым счётчиком",
    about_f1_p: "Полное соответствие официальному стандарту.",
    about_f2_h: "Гарантия 1 год", about_f2_p: "Гарантия, предоставляемая с уверенностью на каждый продукт.",
    about_f3_h: "Защита IP68", about_f3_p: "Полная защита от влаги и внешних воздействий.",
    about_f4_p: "Высококачественные компоненты и обработка.",
    about_cta_h2: "Хотите сотрудничать с нашей компанией?", about_cta_p: "Свяжитесь с нами по вопросам заказа, сотрудничества или другим вопросам.",

    prod_eyebrow: "Продукт", prod_h1: "Счётчик для холодной и горячей воды",
    prod_p: "Доступен в трёх размерах — от квартиры до систем с высоким расходом. Выберите размер ниже, чтобы увидеть характеристики.",
    prod_card_p: "Высокоточный измерительный механизм, прочный корпус и уровень защиты IP68 — подходит для дома, квартиры и коммерческих зданий.",
    prod_choose_size: "Выберите размер:", prod_order_btn: "Заказать этот размер",
    prod_spec_eyebrow: "Технические характеристики", prod_spec_h2: "Полная спецификация", prod_spec_p: "Подробная информация по выбранному размеру.",
    spec_size: "Размер", spec_flow: "Диапазон расхода воды", spec_length: "Длина", spec_use: "Рекомендуемое использование",
    spec_weight: "Вес", spec_protection: "Уровень защиты", spec_standard: "Стандарт", spec_warranty: "Гарантия",
    spec_use_15: "Стандарт для квартиры / дома", spec_use_20: "Многоэтажные и коммерческие здания", spec_use_25: "Системы с высоким расходом",
    prod_why_eyebrow: "Почему UzLitrPro", prod_why_h2: "Продумано в каждой детали",
    prod_f1_p: "Одно надёжное решение для обеих систем.",
    prod_f2_p: "Каждый литр считается точно и без ошибок.",
    prod_cta_h2: "Готовы сделать заказ?", prod_cta_p: "Выберите нужный размер и свяжитесь с нами — процесс простой и быстрый.",

    contact_eyebrow: "Контакты", contact_h1: "Свяжитесь с нами",
    contact_p: "Хотите сделать заказ, сотрудничать или у вас есть вопрос? Напишите через форму ниже или позвоните напрямую.",
    contact_info_h: "Контактная информация",
    contact_address: "г. Ташкент, Яккасарайский район, махалля Ракатбоши, ул. Орикзор 1-тор, дом 40",
    contact_form_h: "Отправить сообщение",
    form_name: "Ваше имя", form_name_ph: "Введите ваше имя",
    form_phone: "Номер телефона",
    form_size: "Интересующий размер", form_notsure: "Пока не уверен(а)",
    form_message: "Ваше сообщение", form_message_ph: "Напишите объём заказа, адрес доставки или ваш вопрос...",
    form_submit: "Отправить сообщение",
    form_note: "Эта форма работает как демонстрация интерфейса. Для приёма реальных сообщений её нужно подключить к backend или почтовому сервису.",
    form_success: "Спасибо! Ваше сообщение получено (демо-режим) — мы свяжемся с вами в ближайшее время.",

    news_eyebrow: "Новости", news_h1: "Новости компании",
    news_p: "Последние события, обновления продукции и объявления UzLitrPro скоро появятся здесь.",
    news_soon_eyebrow: "Скоро", news_soon_h2: "Этот раздел пока готовится",
    news_soon_p: "Здесь будут появляться новости и статьи. А пока посетите другие страницы, чтобы узнать о нашей продукции и компании.",
    news_f1_h: "Обновления продукции", news_f1_p: "Узнавайте здесь о новых размерах и технических улучшениях.",
    news_f2_h: "Объявления компании", news_f2_p: "Сертификаты, партнёрства и другие важные новости.",
    news_f3_h: "Полезные советы", news_f3_p: "Рекомендации по установке и обслуживанию счётчиков воды.",
    news_cta_h2: "Остались вопросы?", news_cta_p: "Свяжитесь с нами — мы будем рады помочь.",
  },

  en: {
    label: "English",
    nav_home: "Home", nav_products: "Products", nav_about: "About Us",
    nav_news: "News", nav_contact: "Contact", nav_cta: "Contact Us",
    hours: "Mon – Sat, 9:00 AM – 6:00 PM",

    hero_eyebrow: "Certified brand",
    hero_h1_pre: "Every drop ", hero_h1_em: "counts", hero_h1_post: ".",
    hero_p: "UzLitrPro makes high-precision meters for cold and hot water — durable, waterproof, and built to last. Manufactured in Tashkent.",
    hero_btn1: "View products", hero_btn2: "Request an order",
    stat1: "Waterproof", stat2: "Warranty", stat2_val: "1 year", stat3: "Size range",
    badge_ip68: "IP68", badge_warranty: "1-year warranty", badge_iso: "ISO 4064-1", badge_hotcold: "Cold / Hot",
    badge_ip68_long: "IP68 protection",

    trust2: "Manufactured in Tashkent",
    trust3: "Compliant with O'zMsT ISO 4064-1:2024",
    trust4: "Premium Quality",

    feat_eyebrow: "Features", feat_h2: "Precision engineered into every detail",
    feat_p: "UzLitrPro meters are tested for reliable long-term performance — from homeowners to plumbing professionals.",
    feat1_h: "Cold and hot water", feat1_p: "One meter works for both systems — no extra equipment needed.",
    feat2_h: "Accurate measurement", feat2_p: "A high-quality mechanism counts every litre without error.",
    feat3_h: "Durable material", feat3_p: "A corrosion-resistant build that lasts for years.",
    feat4_h: "IP68 protection", feat4_p: "Fully protected against moisture and dust — suited to any condition.",

    size_eyebrow: "Sizes", size_h2: "The right size for every system",
    size_p: "From apartments to multi-story buildings — UzLitrPro comes in three diameters.",
    sizespec1: "O'zMsT standard", sizespec2: "Protection rating", sizespec3: "Warranty period", sizespec4: "Manufacturer",
    prod_flow_15: "0.6 – 3.0 m³/h", prod_flow_20: "1.0 – 5.0 m³/h", prod_flow_25: "1.6 – 7.0 m³/h",
    size_view_all: "All products", size_available: "In stock",
    team_eyebrow: "Our team", team_h2: "Our team", team_p: "A team of professional and experienced specialists",
    team1_role: "Head of Software Department", team_soon: "Coming soon",

    home_cta_h2: "Ready to see the full specification?",
    home_cta_p: "Find detailed technical data for every size on the Products page.",

    footer_desc: "Reliable, precise meters for cold and hot water. Manufactured by LITR ENERGY GROUP LLC in Tashkent.",
    footer_nav_h: "Navigation", footer_contact_h: "Contact",
    footer_rights: "© 2026 UzLitrPro / LITR ENERGY GROUP. All rights reserved.",

    cta_contact_btn: "Get in touch",

    about_eyebrow: "About Us", about_h1: "Precision is the foundation of our work",
    about_p: "UzLitrPro is LITR ENERGY GROUP LLC's water metering brand, based in Tashkent.",
    about_mission_eyebrow: "Our mission", about_mission_h2: "Reliable measurement for every home and building",
    about_mission_p: "Accurate water measurement is where fair billing and savings begin. That's why UzLitrPro builds every meter to be durable, waterproof, and fully compliant with the O'zMsT ISO 4064-1:2024 standard.",
    value1_h: "Quality control", value1_p: "Every meter is inspected during the manufacturing process.",
    value2_h: "Durable materials", value2_p: "Devices chosen for long service life and corrosion resistance.",
    value3_h: "Local manufacturing", value3_p: "Based in Tashkent — meaning faster delivery and convenient service.",
    about_timeline: "LITR ENERGY GROUP LLC — a manufacturing company located at Rakatboshi MFY, O'rikzor 1st lane, House 40, Yakkasaray district, Tashkent.",
    about_why_eyebrow: "Why UzLitrPro", about_why_h2: "The standard behind every meter",
    about_f1_p: "Full compliance with the official standard.",
    about_f2_h: "1-year warranty", about_f2_p: "A warranty backed with confidence on every product.",
    about_f3_h: "IP68 protection", about_f3_p: "Complete protection from moisture and external elements.",
    about_f4_p: "High-quality components and finishing.",
    about_cta_h2: "Want to work with our company?", about_cta_p: "Get in touch with us for orders, partnerships, or any questions.",

    prod_eyebrow: "Product", prod_h1: "Meter for cold and hot water",
    prod_p: "Available in three sizes — from apartments to high-flow systems. Choose a size below to see its specifications.",
    prod_card_p: "A high-precision measuring mechanism, durable housing, and IP68 protection — suited for homes, apartments, and commercial buildings.",
    prod_choose_size: "Choose a size:", prod_order_btn: "Order this size",
    prod_spec_eyebrow: "Technical specifications", prod_spec_h2: "Full specification", prod_spec_p: "Detailed information for the selected size.",
    spec_size: "Size", spec_flow: "Flow rate range", spec_length: "Length", spec_use: "Recommended use",
    spec_weight: "Weight", spec_protection: "Protection rating", spec_standard: "Standard", spec_warranty: "Warranty",
    spec_use_15: "Standard for apartments / homes", spec_use_20: "Multi-story and commercial buildings", spec_use_25: "High-flow systems",
    prod_why_eyebrow: "Why UzLitrPro", prod_why_h2: "Thoughtfully engineered in every detail",
    prod_f1_p: "One reliable solution for both systems.",
    prod_f2_p: "Every litre is counted accurately, without error.",
    prod_cta_h2: "Ready to place an order?", prod_cta_p: "Choose the size you need and get in touch — the process is simple and fast.",

    contact_eyebrow: "Contact", contact_h1: "Get in touch",
    contact_p: "Want to place an order, partner with us, or have a question? Write via the form below or call us directly.",
    contact_info_h: "Contact information",
    contact_address: "Rakatboshi MFY, O'rikzor 1st lane, House 40, Yakkasaray district, Tashkent",
    contact_form_h: "Send a message",
    form_name: "Your name", form_name_ph: "Enter your name",
    form_phone: "Phone number",
    form_size: "Size you're interested in", form_notsure: "Not sure yet",
    form_message: "Your message", form_message_ph: "Write the order quantity, delivery address, or your question...",
    form_submit: "Send message",
    form_note: "This form works as a front-end demo. To receive real messages, it needs to be connected to a backend or email service.",
    form_success: "Thank you! Your message has been received (demo mode) — we'll get back to you soon.",

    news_eyebrow: "News", news_h1: "Company news",
    news_p: "UzLitrPro's latest updates, product news, and announcements will appear here soon.",
    news_soon_eyebrow: "Coming soon", news_soon_h2: "This section is being prepared",
    news_soon_p: "News and articles will appear here as they're added. In the meantime, visit our other pages to learn about our products and company.",
    news_f1_h: "Product updates", news_f1_p: "Stay informed here about new sizes and technical improvements.",
    news_f2_h: "Company announcements", news_f2_p: "Certifications, partnerships, and other important news.",
    news_f3_h: "Helpful tips", news_f3_p: "Recommendations for installing and maintaining water meters.",
    news_cta_h2: "Have a question?", news_cta_p: "Get in touch with us — we're happy to help.",
  },
};

let currentLang = "uz";

/* Size specification data, keyed by language then size */
const specData = {
  uz: {
    15: { size: "15∅ (DN15)", flow: "0.6 – 3.0 m³/h", length: "110 mm", use: "Kvartira / uy uchun standart", weight: "≈ 0.55 kg" },
    20: { size: "20∅ (DN20)", flow: "1.0 – 5.0 m³/h", length: "130 mm", use: "Ko'p qavatli va tijorat binolari", weight: "≈ 0.70 kg" },
    25: { size: "25∅ (DN25)", flow: "1.6 – 7.0 m³/h", length: "160 mm", use: "Yuqori sarfli tizimlar", weight: "≈ 0.95 kg" },
  },
  ru: {
    15: { size: "15∅ (DN15)", flow: "0.6 – 3.0 м³/ч", length: "110 мм", use: "Стандарт для квартиры / дома", weight: "≈ 0.55 кг" },
    20: { size: "20∅ (DN20)", flow: "1.0 – 5.0 м³/ч", length: "130 мм", use: "Многоэтажные и коммерческие здания", weight: "≈ 0.70 кг" },
    25: { size: "25∅ (DN25)", flow: "1.6 – 7.0 м³/ч", length: "160 мм", use: "Системы с высоким расходом", weight: "≈ 0.95 кг" },
  },
  en: {
    15: { size: "15∅ (DN15)", flow: "0.6 – 3.0 m³/h", length: "110 mm", use: "Standard for apartments / homes", weight: "≈ 0.55 kg" },
    20: { size: "20∅ (DN20)", flow: "1.0 – 5.0 m³/h", length: "130 mm", use: "Multi-story and commercial buildings", weight: "≈ 0.70 kg" },
    25: { size: "25∅ (DN25)", flow: "1.6 – 7.0 m³/h", length: "160 mm", use: "High-flow systems", weight: "≈ 0.95 kg" },
  },
};

function renderSpecTable(size) {
  const table = document.getElementById("spec-table-body");
  if (!table) return;
  const dict = i18n[currentLang];
  const val = specData[currentLang][size];
  table.innerHTML = `
    <tr><td>${dict.spec_size}</td><td>${val.size}</td></tr>
    <tr><td>${dict.spec_flow}</td><td>${val.flow}</td></tr>
    <tr><td>${dict.spec_length}</td><td>${val.length}</td></tr>
    <tr><td>${dict.spec_use}</td><td>${val.use}</td></tr>
    <tr><td>${dict.spec_weight}</td><td>${val.weight}</td></tr>
    <tr><td>${dict.spec_protection}</td><td>IP68</td></tr>
    <tr><td>${dict.spec_standard}</td><td>O'zMsT ISO 4064-1:2024</td></tr>
    <tr><td>${dict.spec_warranty}</td><td>${dict.stat2_val}</td></tr>
  `;
}

function applyLanguage(lang) {
  const dict = i18n[lang];
  if (!dict) return;
  currentLang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key === "hero_h1") {
      el.innerHTML = `<span class="h1-line">${dict.hero_h1_pre.trim()}</span><span class="h1-line h1-line2">${dict.hero_h1_em}${dict.hero_h1_post}<span class="h1-dot" aria-hidden="true"></span></span>`;
    } else if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });

  const label = document.getElementById("lang-label");
  if (label) label.textContent = dict.label;
  document.querySelectorAll(".lang-dropdown button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  const activeChip = document.querySelector(".size-chip.active");
  if (activeChip && activeChip.dataset.size) {
    renderSpecTable(activeChip.dataset.size);
  }

  document.documentElement.setAttribute("lang", lang);
  try { localStorage.setItem("litrpro_lang", lang); } catch (e) { /* storage unavailable */ }
}

document.addEventListener("DOMContentLoaded", () => {
  const langSwitch = document.getElementById("lang-switch");
  const langCurrent = document.getElementById("lang-current");
  if (langSwitch && langCurrent) {
    langCurrent.addEventListener("click", (e) => {
      e.stopPropagation();
      langSwitch.classList.toggle("open");
    });
    document.addEventListener("click", () => langSwitch.classList.remove("open"));
    document.querySelectorAll(".lang-dropdown button").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        applyLanguage(btn.dataset.lang);
        langSwitch.classList.remove("open");
      });
    });
    let saved = null;
    try { saved = localStorage.getItem("litrpro_lang"); } catch (e) { /* storage unavailable */ }
    if (saved) applyLanguage(saved);
  }

  const heroOrbit = document.getElementById("hero-orbit");
  const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (heroOrbit && !prefersReducedMotion && window.matchMedia("(min-width: 901px)").matches) {
    const heroSection = document.querySelector(".hero");
    heroSection && heroSection.addEventListener("mousemove", (e) => {
      const rect = heroSection.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      heroOrbit.style.transform = `translate(${relX * -14}px, ${relY * -14}px)`;
    });
    heroSection && heroSection.addEventListener("mouseleave", () => {
      heroOrbit.style.transform = "translate(0, 0)";
    });
  }

  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      const expanded = links.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded);
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }

  const revealEls = document.querySelectorAll(".reveal, .callout");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in-view"));
  }

  const chips = document.querySelectorAll(".size-chip");
  const table = document.getElementById("spec-table-body");
  if (chips.length && table) {
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        renderSpecTable(chip.dataset.size);
      });
    });
  }

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const success = document.getElementById("form-success");
      if (success) {
        success.classList.add("show");
        success.setAttribute("tabindex", "-1");
        success.focus();
      }
      form.reset();
    });
  }
});
