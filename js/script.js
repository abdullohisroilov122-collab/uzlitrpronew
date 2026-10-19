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

    hero_eyebrow: "Sifat kafolatiga ega brend",
    hero_h1_pre: "Aniq o'lchash ", hero_h1_em: "ishonchli", hero_h1_post: " natija",
    hero_p: "Eng so'nggi texnologiyalar asosida yaratilgan yangi avlod suv hisoblagichlari iste'molni to'liq nazorat qilish uchun eng oqilona tanlov.",
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
    team_eyebrow: "Bizning jamoamiz", team_h2: "Bizning jamoamiz", team_p: "Professional va tajribali mutaxassislar jamoasi",
    team1_role: "Dasturiy bo'lim boshlig'i", team_soon: "Tez orada",

    home_cta_h2: "To'liq spetsifikatsiyani ko'rishga tayyormisiz?",
    home_cta_p: "Har bir o'lcham bo'yicha to'liq texnik xususiyatlar va batafsil ma'lumotlarni mahsulotlar sahifasida ko'rishingiz mumkin.",

    footer_desc: "O'zbekiston bozoriga zamonaviy va ishonchli suv hisoblagichlarini yetkazib beruvchi kompaniya",
    footer_nav_h: "Asosiy bo'limlar", footer_contact_h: "Aloqa ma'lumotlari",
    footer_rights: "© 2026 UzLitrPro / LITR ENERGY GROUP. Barcha huquqlar himoyalangan.",

    cta_contact_btn: "Biz bilan bog'laning",

    about_eyebrow: "Biz haqimizda", about_h1: "Aniqlik — bizning ishimizning asosi",
    about_p: "UzLitrPro — MCHJ «LITR ENERGY GROUP» ning suv hisoblagichlari yo'nalishidagi brendi. Toshkentda joylashgan.",
    about_mission_eyebrow: "Missiyamiz", about_mission_h2: "Har bir uy va bino uchun ishonchli o'lchov",
    about_mission_p: "Suv sarfini aniq hisoblash — adolatli to'lov va tejamkorlikning boshlanishi. Shuning uchun UzLitrPro har bir hisoblagichni bardoshli, suv o'tkazmaydigan va O'zMsT ISO 4064-1:2024 standartiga to'liq mos qilib ishlab chiqaradi.",
    about_vision_h: "Viziyamiz", about_vision_p: "Biz O'zbekistonda ishlab chiqarilgan, xalqaro standartlarga to'liq javob beradigan suv hisoblagichlari bilan tanilgan ishonchli mahalliy brendga aylanishni maqsad qilganmiz.",
    about_factory_pill: "Ishlab chiqarish", about_factory_h: "Suv hisoblagichlari ishlab chiqaruvchi brend",
    about_factory_p: "UzLitrPro — Toshkentda joylashgan suv hisoblagichlari brendi. 2026 yildan beri suv o'tkazmaydigan, IP68 himoyali va O'zMsT ISO 4064-1:2024 standartiga mos hisoblagichlar ishlab chiqaramiz.",
    about_values_eyebrow: "Qadriyatlarimiz", about_values_h2: "Qadriyatlarimiz",
    about_val1_h: "Halollik", about_val1_p: "Mijozlarimiz va hamkorlarimiz oldida ochiq va halol bo'lishga intilamiz — narx, muddat va texnik xususiyatlarda aniqlik bilan.",
    about_val2_h: "Sifat", about_val2_p: "Har bir hisoblagich ishlab chiqarish jarayonida tekshiruvdan o'tadi va O'zMsT ISO 4064-1:2024 standartiga mos ishlab chiqariladi.",
    about_val3_h: "Ishonch", about_val3_p: "1 yillik kafolat va Toshkentdagi mahalliy ishlab chiqarish orqali mijozlarimizga ishonchli xizmat ko'rsatamiz.",
    about_val4_h: "O'lchov aniqligi", about_val4_p: "Yuqori aniqlikdagi mexanizm har bir litr suvni xatosiz hisoblab, adolatli to'lovga asos yaratadi.",
    about_certs_eyebrow: "Sertifikatlar", about_certs_h2: "Sertifikatlar va sifat", about_certs_p: "Mahsulotlarimiz O'zMsT ISO 4064-1:2024 standartiga muvofiqligini tasdiqlovchi hujjatlar tez orada shu yerda joylashtiriladi.",
    about_cert_soon: "Sertifikat tez orada qo'shiladi",
    about_standards_pill: "Xalqaro standartlar", about_standards_h2: "Mahsulotlarimiz barcha zamonaviy talablarga javob beradi",
    about_standards_p: "Biz har bir qurilmaning sifati va aniqligiga alohida e'tibor qaratamiz. Har bir hisoblagich sinovdan o'tadi.",
    about_stat_control: "Nazorat", about_stat_control_val: "100%",
    about_partners_eyebrow: "Bizning hamkorlarimiz", about_partners_h2: "Ishonchga asoslangan hamkorlik",
    about_partners_p: "Biz O'zbekistonning turli hududlaridagi tashkilotlar bilan samarali hamkorlik qilishga intilamiz.",
    about_partner_soon: "Hamkor tez orada qo'shiladi",
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

    contact_eyebrow: "Aloqa", contact_h1: "Suv hisoblagich sotib olish va aloqa",
    contact_p: "UzLitrPro bilan bog'laning: suv hisoblagichlari narxi, buyurtma va texnik maslahat. Manzil: Toshkent, Yakkasaroy tumani, Rakatboshi MFY, O'rikzor 1-tor ko'chasi, 40-uy. Tel: +998 77 090 05 50.",
    contact_info_h: "Bog'lanish ma'lumotlari",
    contact_address: "Toshkent shahri, Yakkasaroy tumani, Rakatboshi MFY, O'rikzor 1-tor ko'chasi, 40-uy",
    contact_label_address: "Manzil", contact_label_phone: "Telefon", contact_label_email: "Elektron pochta", contact_label_hours: "Ish vaqti",
    contact_map_link: "Google Xaritada ko'rish",
    contact_form_h: "Suv hisoblagich sotib olish va aloqa",
    form_name: "Ismingiz", form_name_ph: "Ismingizni kiriting",
    form_email: "Elektron pochtangiz", form_email_ph: "email@misol.uz",
    form_phone: "Telefon raqamingiz",
    form_size: "Qiziqtirgan o'lcham", form_notsure: "Hali aniq emas",
    form_message: "Xabaringiz", form_message_ph: "Buyurtma miqdori, yetkazib berish manzili yoki savolingizni yozing...",
    form_submit: "Yuborish",
    form_note: "Bu forma frontend namoyishi sifatida ishlaydi. Haqiqiy xabarlarni qabul qilish uchun uni backend yoki elektron pochta xizmatiga ulash kerak bo'ladi.",
    form_success: "Rahmat! Xabaringiz qabul qilindi (namoyish rejimi) — tez orada siz bilan bog'lanamiz.",

    news_eyebrow: "Yangiliklar", news_h1: "Suv hisoblagichlar yangiliklari va maqolalari",
    news_p: "UzLitrPro kompaniyasi yangiliklari, suv hisoblagichlari bo'yicha foydali maqolalar, soha yangiliklari va texnik maslahatlar bilan muntazam tanishing.",
    news_filter_all: "Barcha", news_filter_company: "Kompaniya", news_filter_products: "Mahsulotlar", news_filter_events: "Tadbirlar",
    news_date_soon: "Tez orada", news_no_results: "Bu toifada hozircha maqola yo'q.",
    news_soon_eyebrow: "Tez orada", news_soon_h2: "Bu bo'lim hozircha tayyorlanmoqda",
    news_soon_p: "Yangiliklar va maqolalar qo'shilishi bilan bu yerda ko'rinadi. Hozircha mahsulotlarimiz va kompaniya haqida ma'lumot olish uchun boshqa sahifalarga tashrif buyuring.",
    news_f1_h: "Mahsulot yangilanishlari", news_f1_p: "Yangi o'lchamlar va texnik yaxshilanishlar haqida bu yerdan xabardor bo'lasiz.",
    news_f2_h: "Kompaniya e'lonlari", news_f2_p: "Sertifikatlar, hamkorliklar va boshqa muhim yangiliklar.",
    news_f3_h: "Foydali maslahatlar", news_f3_p: "Suv hisoblagichlarini o'rnatish va parvarish qilish bo'yicha tavsiyalar.",
    news_cta_h2: "Savolingiz bormi?", news_cta_p: "Biz bilan bog'laning — sizga yordam berishdan mamnunmiz.",

    prod_catalog_pill: "Sifatli mahsulotlar", prod_catalog_h1: "Suv hisoblagichlari katalogi",
    prod_catalog_p: "UzLitrPro suv hisoblagichlari katalogi: o'lchami va texnik xususiyatlarini ko'ring, kerakli variantni tanlab buyurtma bering.",
    prod_search_ph: "Qidirish...", prod_filter_all_sizes: "Barcha o'lchamlar",
    prod_sort_default: "Standart tartib", prod_sort_size_asc: "O'lcham: kichikdan kattaga", prod_sort_size_desc: "O'lcham: kattadan kichikka",
    prod_top_tag: "TOP", prod_price_on_request: "Narx so'rov asosida", prod_no_results: "Hech narsa topilmadi. Boshqa so'rov bilan qidirib ko'ring.",
    prod_qty_label: "Miqdori", prod_add_to_cart: "Savatga qo'shish",
    footer_newsletter_h: "So'nggi yangiliklar", footer_newsletter_p: "Yangiliklardan birinchi bo'lib xabardor bo'ling",
    footer_newsletter_ph: "Elektron pochtangiz", footer_newsletter_btn: "Obuna bo'lish",
    footer_newsletter_note: "Bu forma frontend namoyishi sifatida ishlaydi.", footer_newsletter_success: "Rahmat! Obunangiz qabul qilindi.",

    // Home page (from the content documents)
    home_prod_eyebrow: "Mahsulotlarimiz",
    home_prod_h2: "Top mahsulotlar",
    cat_mech: "Mexanik suv hisoblagichlari",
    cat_pulse: "Impulsli suv hisoblagichlari",
    cat_module: "Ma'lumotlar uzatish moduli",
    p_mech15: "DN15 mexanik suv hisoblagichi",
    p_mech20: "DN20 mexanik suv hisoblagichi",
    p_pulse15: "DN15 impulsli suv hisoblagichi",
    p_pulse20: "DN20 impulsli suv hisoblagichi",
    p_module: "Aloqa moduli",
    home_f1_h: "Issiq va sovuq suv",
    home_f1_p: "Ushbu hisoblagich ikkala tizim uchun ham to'liq mos keladi.",
    home_f2_h: "Har bir litrda aniqlik",
    home_f2_p: "Yuqori sifatli mexanizm suv sarfini ishonchli va aniq hisoblaydi.",
    home_f3_h: "Bardoshli material",
    home_f3_p: "Korroziyaga chidamli material — uzoq yillik xizmat garovi.",
    home_f4_h: "IP68 himoya",
    home_f4_p: "Namlik va changdan to'liq himoyalangan.",
    home_about_eyebrow: "Biz haqimizda",
    home_about_h2: "Aniqlik, sifat va ishonch — UzLitrPro qadriyatlari.",
    home_about_p1: "UzLitrPro — O'zbekiston bozoriga zamonaviy, yuqori sifatli va ishonchli suv hisoblagichlarini yetkazib berishga ixtisoslashgan kompaniya.",
    home_about_p2: "2025-yildan buyon faoliyat yuritib kelayotgan kompaniyamiz suv sarfini aniq o'lchash, resurslardan oqilona foydalanish va hisob-kitob jarayonlarini takomillashtirishga xizmat qiluvchi zamonaviy mahsulotlarni mijozlarga taqdim etib kelmoqda.",
    home_about_p3: "Faoliyatimizning asosini mahsulot sifati, ishonchlilik, mijozlar ehtiyojiga individual yondashuv va professional xizmat ko'rsatish tamoyillari tashkil etadi.",
    home_about_p4: "Biz zamonaviy texnologiyalar, yuqori sifat va xalqaro standartlarga asoslanib, har bir mijoz uchun samarali yechimlarni taklif etish, uzoq muddatli hamkorlikni rivojlantirish hamda mijozlar ishonchini mustahkamlashga intilamiz.",
    home_about_more: "Batafsil",
    n1_v: "100+",
    n1_l: "Hamkorlarimiz",
    n2_v: "14",
    n2_l: "Hududiy qamrov",
    n3_v: "24/7",
    n3_l: "Texnik qo'llab-quvvatlash",
    n4_v: "99,9%",
    n4_l: "O'lchash aniqligi",
    n5_v: "1 yil",
    n5_l: "Kafolat muddati",
    n6_v: "ISO 4064",
    n6_l: "Xalqaro standartlarga muvofiqlik",
    n7_v: "Sertifikatlangan",
    n7_l: "Mahsulot sifati va muvofiqligi",
    n8_v: "Keng assortiment",
    n8_l: "Turli xil mahsulotlar",
    n9_v: "Malakali mutaxassislar",
    n9_l: "Ko'p yillik tajriba",
    n10_v: "Tezkor yetkazib berish",
    n10_l: "O'zbekiston bo'ylab",
    role_director: "Direktor",
    role_sales: "Sotuv bo'limi boshlig'i",
    role_dev: "Dasturlash bo'limi boshlig'i",
    role_finance: "Moliya bo'limi boshlig'i",
    role_metrology: "Metrologiya bo'limi boshlig'i",
    role_marketing: "OAV marketologi",
    role_lawyer: "Yurist",
    home_partners_eyebrow: "Hamkorlarimiz",
    home_partners_h2: "O'zaro ishonch va manfaatli hamkorlik",
    home_partners_p: "Biz O'zbekistonning barcha hududlaridagi davlat va xususiy tashkilotlar bilan samarali hamkorlik qilib kelmoqdamiz. Hamkorlarimiz bilan o'zaro ishonch, manfaatli aloqalar va uzoq muddatli hamkorlik tamoyillari asosida faoliyat yuritamiz.",
    pt1_l: "Korporativ mijozlar",
    pt2_l: "Hudud qamrovi",
    pt3_l: "Qo'llab-quvvatlash",
    home_dealers_eyebrow: "Dilerlar tarmog'imiz",
    home_dealers_h2: "Butun O'zbekiston bo'ylab rasmiy dilerlar tarmog'i",
    home_dealers_p: "Mijozlarimizga yanada yaqin bo'lish va yuqori sifatli xizmat ko'rsatish maqsadida O'zbekiston bo'ylab rasmiy dilerlarimiz faoliyat yuritadi. Quyidagi xarita orqali o'z hududingizni tanlang va sizga eng yaqin dilerimiz haqida ma'lumot oling.",
    dl1_v: "12 ta",
    dl1_l: "Jami rasmiy dilerlar",
    dl2_v: "14 ta",
    dl2_l: "Qamrab olingan hududlar",
    home_dealers_cta: "O'z hududingizni tanlang va biz bilan bog'laning!",
    footer_address: "O'zbekiston, Toshkent shahri, Yakkasaroy tumani, Rakatboshi MFY, O'rikzor 1-tor ko'chasi, 40-uy",
    footer_newsletter_fail: "Yuborib bo'lmadi. Iltimos, keyinroq urinib ko'ring.",
  },

  ru: {
    label: "Русский",
    nav_home: "Главная", nav_products: "Продукты", nav_about: "О нас",
    nav_news: "Новости", nav_contact: "Контакты", nav_cta: "Связаться",
    hours: "Пн – Сб, 9:00 AM – 6:00 PM",

    hero_eyebrow: "Бренд с гарантией качества",
    hero_h1_pre: "Точное измерение", hero_h1_em: "надёжный", hero_h1_post: " результат",
    hero_p: "Счётчики воды нового поколения, созданные на основе новейших технологий, — самый разумный выбор для полного контроля потребления.",
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
    home_cta_p: "Полные технические характеристики и подробную информацию по каждому размеру вы найдёте на странице продукции.",

    footer_desc: "Компания, поставляющая современные и надёжные счётчики воды на рынок Узбекистана",
    footer_nav_h: "Основные разделы", footer_contact_h: "Контактная информация",
    footer_rights: "© 2026 UzLitrPro / LITR ENERGY GROUP. Все права защищены.",

    cta_contact_btn: "Связаться с нами",

    about_eyebrow: "О нас", about_h1: "Точность — основа нашей работы",
    about_p: "UzLitrPro — бренд ООО «LITR ENERGY GROUP» в сфере счётчиков воды. Расположен в Ташкенте.",
    about_mission_eyebrow: "Наша миссия", about_mission_h2: "Надёжное измерение для каждого дома и здания",
    about_mission_p: "Точный учёт расхода воды — начало справедливой оплаты и экономии. Поэтому UzLitrPro производит каждый счётчик прочным, водонепроницаемым и полностью соответствующим стандарту O'zMsT ISO 4064-1:2024.",
    about_vision_h: "Наше видение", about_vision_p: "Мы стремимся стать надёжным местным брендом, известным счётчиками воды, произведёнными в Узбекистане и полностью соответствующими международным стандартам.",
    about_factory_pill: "Производство", about_factory_h: "Бренд по производству счётчиков воды",
    about_factory_p: "UzLitrPro — бренд счётчиков воды, расположенный в Ташкенте. С 2026 года мы производим водонепроницаемые счётчики с защитой IP68, соответствующие стандарту O'zMsT ISO 4064-1:2024.",
    about_values_eyebrow: "Наши ценности", about_values_h2: "Наши ценности",
    about_val1_h: "Честность", about_val1_p: "Мы стремимся быть открытыми и честными перед клиентами и партнёрами — в цене, сроках и технических характеристиках.",
    about_val2_h: "Качество", about_val2_p: "Каждый счётчик проходит проверку в процессе производства и изготавливается в соответствии со стандартом O'zMsT ISO 4064-1:2024.",
    about_val3_h: "Доверие", about_val3_p: "Мы обеспечиваем надёжный сервис благодаря гарантии на 1 год и местному производству в Ташкенте.",
    about_val4_h: "Точность измерения", about_val4_p: "Высокоточный механизм считает каждый литр воды без ошибок, создавая основу для справедливой оплаты.",
    about_certs_eyebrow: "Сертификаты", about_certs_h2: "Сертификаты и качество", about_certs_p: "Документы, подтверждающие соответствие нашей продукции стандарту O'zMsT ISO 4064-1:2024, скоро появятся здесь.",
    about_cert_soon: "Сертификат будет добавлен позже",
    about_standards_pill: "Международные стандарты", about_standards_h2: "Наша продукция отвечает всем современным требованиям",
    about_standards_p: "Мы уделяем особое внимание качеству и точности каждого устройства. Каждый счётчик проходит проверку.",
    about_stat_control: "Контроль", about_stat_control_val: "100%",
    about_partners_eyebrow: "Наши партнёры", about_partners_h2: "Сотрудничество, основанное на доверии",
    about_partners_p: "Мы стремимся к эффективному сотрудничеству с организациями в разных регионах Узбекистана.",
    about_partner_soon: "Партнёр будет добавлен позже",
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

    contact_eyebrow: "Контакты", contact_h1: "Купить счётчик воды и связаться с нами",
    contact_p: "Свяжитесь с UzLitrPro: цены на счётчики воды, заказ и техническая консультация. Адрес: г. Ташкент, Яккасарайский район, махалля Ракатбоши, ул. Орикзор 1-тор, дом 40. Тел: +998 77 090 05 50.",
    contact_info_h: "Контактная информация",
    contact_address: "г. Ташкент, Яккасарайский район, махалля Ракатбоши, ул. Орикзор 1-тор, дом 40",
    contact_label_address: "Адрес", contact_label_phone: "Телефон", contact_label_email: "Электронная почта", contact_label_hours: "Часы работы",
    contact_map_link: "Смотреть на Google Картах",
    contact_form_h: "Купить счётчик воды и связаться с нами",
    form_name: "Ваше имя", form_name_ph: "Введите ваше имя",
    form_email: "Ваш email", form_email_ph: "email@example.uz",
    form_phone: "Номер телефона",
    form_size: "Интересующий размер", form_notsure: "Пока не уверен(а)",
    form_message: "Ваше сообщение", form_message_ph: "Напишите объём заказа, адрес доставки или ваш вопрос...",
    form_submit: "Отправить",
    form_note: "Эта форма работает как демонстрация интерфейса. Для приёма реальных сообщений её нужно подключить к backend или почтовому сервису.",
    form_success: "Спасибо! Ваше сообщение получено (демо-режим) — мы свяжемся с вами в ближайшее время.",

    news_eyebrow: "Новости", news_h1: "Новости и статьи о счётчиках воды",
    news_p: "Следите за новостями компании UzLitrPro, полезными статьями о счётчиках воды, новостями отрасли и техническими советами.",
    news_filter_all: "Все", news_filter_company: "Компания", news_filter_products: "Продукты", news_filter_events: "Мероприятия",
    news_date_soon: "Скоро", news_no_results: "В этой категории пока нет статей.",
    news_soon_eyebrow: "Скоро", news_soon_h2: "Этот раздел пока готовится",
    news_soon_p: "Здесь будут появляться новости и статьи. А пока посетите другие страницы, чтобы узнать о нашей продукции и компании.",
    news_f1_h: "Обновления продукции", news_f1_p: "Узнавайте здесь о новых размерах и технических улучшениях.",
    news_f2_h: "Объявления компании", news_f2_p: "Сертификаты, партнёрства и другие важные новости.",
    news_f3_h: "Полезные советы", news_f3_p: "Рекомендации по установке и обслуживанию счётчиков воды.",
    news_cta_h2: "Остались вопросы?", news_cta_p: "Свяжитесь с нами — мы будем рады помочь.",

    prod_catalog_pill: "Качественная продукция", prod_catalog_h1: "Каталог счётчиков воды",
    prod_catalog_p: "Каталог счётчиков воды UzLitrPro: изучите размеры и технические характеристики, выберите нужный вариант и оформите заказ.",
    prod_search_ph: "Поиск...", prod_filter_all_sizes: "Все размеры",
    prod_sort_default: "Стандартный порядок", prod_sort_size_asc: "Размер: по возрастанию", prod_sort_size_desc: "Размер: по убыванию",
    prod_top_tag: "TOP", prod_price_on_request: "Цена по запросу", prod_no_results: "Ничего не найдено. Попробуйте другой запрос.",
    prod_qty_label: "Количество", prod_add_to_cart: "Добавить в корзину",
    footer_newsletter_h: "Последние новости", footer_newsletter_p: "Узнавайте наши новости первыми",
    footer_newsletter_ph: "Ваш email", footer_newsletter_btn: "Подписаться",
    footer_newsletter_note: "Эта форма работает как демонстрация интерфейса.", footer_newsletter_success: "Спасибо! Вы подписались.",

    // Home page (from the content documents)
    home_prod_eyebrow: "Наша продукция",
    home_prod_h2: "Топ продукты",
    cat_mech: "Механические счётчики воды",
    cat_pulse: "Импульсные счётчики воды",
    cat_module: "Модуль передачи данных",
    p_mech15: "Механический счётчик воды DN15",
    p_mech20: "Механический счётчик воды DN20",
    p_pulse15: "Импульсный счётчик воды DN15",
    p_pulse20: "Импульсный счётчик воды DN20",
    p_module: "Модуль связи",
    home_f1_h: "Горячая и холодная вода",
    home_f1_p: "Этот счётчик полностью подходит для обеих систем.",
    home_f2_h: "Точность в каждом литре",
    home_f2_p: "Высококачественный механизм надёжно и точно учитывает расход воды.",
    home_f3_h: "Прочный материал",
    home_f3_p: "Коррозионностойкий материал — залог долгих лет службы.",
    home_f4_h: "Защита IP68",
    home_f4_p: "Полная защита от влаги и пыли.",
    home_about_eyebrow: "О нас",
    home_about_h2: "Точность, качество и доверие — ценности UzLitrPro.",
    home_about_p1: "UzLitrPro — компания, специализирующаяся на поставке современных, высококачественных и надёжных счётчиков воды на рынок Узбекистана.",
    home_about_p2: "Работая с 2025 года, наша компания предлагает клиентам современные продукты для точного измерения расхода воды, рационального использования ресурсов и совершенствования процессов учёта.",
    home_about_p3: "В основе нашей работы — качество продукции, надёжность, индивидуальный подход к потребностям клиентов и профессиональный сервис.",
    home_about_p4: "Опираясь на современные технологии, высокое качество и международные стандарты, мы стремимся предлагать каждому клиенту эффективные решения, развивать долгосрочное сотрудничество и укреплять доверие клиентов.",
    home_about_more: "Подробнее",
    n1_v: "100+",
    n1_l: "Партнёров",
    n2_v: "14",
    n2_l: "Регионов охвата",
    n3_v: "24/7",
    n3_l: "Техническая поддержка",
    n4_v: "99,9%",
    n4_l: "Точность измерения",
    n5_v: "1 год",
    n5_l: "Гарантийный срок",
    n6_v: "ISO 4064",
    n6_l: "Соответствие международным стандартам",
    n7_v: "Сертифицировано",
    n7_l: "Качество и соответствие продукции",
    n8_v: "Широкий ассортимент",
    n8_l: "Разнообразная продукция",
    n9_v: "Квалифицированные специалисты",
    n9_l: "Многолетний опыт",
    n10_v: "Быстрая доставка",
    n10_l: "По всему Узбекистану",
    role_director: "Директор",
    role_sales: "Руководитель отдела продаж",
    role_dev: "Руководитель отдела программирования",
    role_finance: "Руководитель финансового отдела",
    role_metrology: "Руководитель отдела метрологии",
    role_marketing: "Маркетолог по СМИ",
    role_lawyer: "Юрист",
    home_partners_eyebrow: "Наши партнёры",
    home_partners_h2: "Взаимное доверие и выгодное сотрудничество",
    home_partners_p: "Мы успешно сотрудничаем с государственными и частными организациями во всех регионах Узбекистана. С партнёрами мы работаем на принципах взаимного доверия, взаимовыгодных отношений и долгосрочного сотрудничества.",
    pt1_l: "Корпоративных клиентов",
    pt2_l: "Регионов охвата",
    pt3_l: "Поддержка",
    home_dealers_eyebrow: "Дилерская сеть",
    home_dealers_h2: "Сеть официальных дилеров по всему Узбекистану",
    home_dealers_p: "Чтобы быть ближе к клиентам и обеспечивать высокое качество обслуживания, по всему Узбекистану работают наши официальные дилеры. Выберите свой регион на карте ниже и узнайте о ближайшем дилере.",
    dl1_v: "12",
    dl1_l: "Официальных дилеров",
    dl2_v: "14",
    dl2_l: "Охваченных регионов",
    home_dealers_cta: "Выберите свой регион и свяжитесь с нами!",
    footer_address: "Узбекистан, г. Ташкент, Яккасарайский район, МСГ Ракатбоши, ул. Урикзор 1-й тупик, д. 40",
    footer_newsletter_fail: "Не удалось отправить. Попробуйте позже.",
  },

  en: {
    label: "English",
    nav_home: "Home", nav_products: "Products", nav_about: "About Us",
    nav_news: "News", nav_contact: "Contact", nav_cta: "Contact Us",
    hours: "Mon – Sat, 9:00 AM – 6:00 PM",

    hero_eyebrow: "A brand with a quality guarantee",
    hero_h1_pre: "Precise measurement ", hero_h1_em: "reliable", hero_h1_post: " result",
    hero_p: "New-generation water meters built on the latest technology — the smartest choice for full control over consumption.",
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
    home_cta_p: "You can find full technical specifications and detailed information for every size on the products page.",

    footer_desc: "A company supplying modern and reliable water meters to the Uzbekistan market",
    footer_nav_h: "Main sections", footer_contact_h: "Contact details",
    footer_rights: "© 2026 UzLitrPro / LITR ENERGY GROUP. All rights reserved.",

    cta_contact_btn: "Get in touch",

    about_eyebrow: "About Us", about_h1: "Precision is the foundation of our work",
    about_p: "UzLitrPro is LITR ENERGY GROUP LLC's water metering brand, based in Tashkent.",
    about_mission_eyebrow: "Our mission", about_mission_h2: "Reliable measurement for every home and building",
    about_mission_p: "Accurate water measurement is where fair billing and savings begin. That's why UzLitrPro builds every meter to be durable, waterproof, and fully compliant with the O'zMsT ISO 4064-1:2024 standard.",
    about_vision_h: "Our vision", about_vision_p: "We aim to become a trusted local brand known for water meters made in Uzbekistan that fully meet international standards.",
    about_factory_pill: "Manufacturing", about_factory_h: "A water meter manufacturing brand",
    about_factory_p: "UzLitrPro is a water meter brand based in Tashkent. Since 2026, we've been manufacturing waterproof, IP68-rated meters compliant with the O'zMsT ISO 4064-1:2024 standard.",
    about_values_eyebrow: "Our values", about_values_h2: "Our values",
    about_val1_h: "Honesty", about_val1_p: "We aim to be open and honest with our customers and partners — on price, timelines, and technical specifications.",
    about_val2_h: "Quality", about_val2_p: "Every meter is inspected during manufacturing and built to comply with the O'zMsT ISO 4064-1:2024 standard.",
    about_val3_h: "Trust", about_val3_p: "A 1-year warranty and local manufacturing in Tashkent let us offer customers dependable service.",
    about_val4_h: "Measurement accuracy", about_val4_p: "A high-precision mechanism counts every litre without error, forming the basis for fair billing.",
    about_certs_eyebrow: "Certificates", about_certs_h2: "Certificates and quality", about_certs_p: "Documents confirming our products' compliance with the O'zMsT ISO 4064-1:2024 standard will appear here soon.",
    about_cert_soon: "Certificate coming soon",
    about_standards_pill: "International standards", about_standards_h2: "Our products meet every modern requirement",
    about_standards_p: "We pay close attention to the quality and accuracy of every device. Every meter is tested.",
    about_stat_control: "Control", about_stat_control_val: "100%",
    about_partners_eyebrow: "Our partners", about_partners_h2: "Partnerships built on trust",
    about_partners_p: "We aim for effective cooperation with organizations across different regions of Uzbekistan.",
    about_partner_soon: "Partner coming soon",
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

    contact_eyebrow: "Contact", contact_h1: "Buy a water meter and get in touch",
    contact_p: "Get in touch with UzLitrPro: water meter pricing, orders, and technical advice. Address: Rakatboshi MFY, O'rikzor 1st lane, House 40, Yakkasaray district, Tashkent. Tel: +998 77 090 05 50.",
    contact_info_h: "Contact information",
    contact_address: "Rakatboshi MFY, O'rikzor 1st lane, House 40, Yakkasaray district, Tashkent",
    contact_label_address: "Address", contact_label_phone: "Phone", contact_label_email: "Email", contact_label_hours: "Working hours",
    contact_map_link: "View on Google Maps",
    contact_form_h: "Buy a water meter and get in touch",
    form_name: "Your name", form_name_ph: "Enter your name",
    form_email: "Your email", form_email_ph: "email@example.uz",
    form_phone: "Phone number",
    form_size: "Size you're interested in", form_notsure: "Not sure yet",
    form_message: "Your message", form_message_ph: "Write the order quantity, delivery address, or your question...",
    form_submit: "Send",
    form_note: "This form works as a front-end demo. To receive real messages, it needs to be connected to a backend or email service.",
    form_success: "Thank you! Your message has been received (demo mode) — we'll get back to you soon.",

    news_eyebrow: "News", news_h1: "Water meter news and articles",
    news_p: "Follow UzLitrPro's company news, helpful articles about water meters, industry updates, and technical tips.",
    news_filter_all: "All", news_filter_company: "Company", news_filter_products: "Products", news_filter_events: "Events",
    news_date_soon: "Coming soon", news_no_results: "No articles in this category yet.",
    news_soon_eyebrow: "Coming soon", news_soon_h2: "This section is being prepared",
    news_soon_p: "News and articles will appear here as they're added. In the meantime, visit our other pages to learn about our products and company.",
    news_f1_h: "Product updates", news_f1_p: "Stay informed here about new sizes and technical improvements.",
    news_f2_h: "Company announcements", news_f2_p: "Certifications, partnerships, and other important news.",
    news_f3_h: "Helpful tips", news_f3_p: "Recommendations for installing and maintaining water meters.",
    news_cta_h2: "Have a question?", news_cta_p: "Get in touch with us — we're happy to help.",

    prod_catalog_pill: "Quality products", prod_catalog_h1: "Water meter catalog",
    prod_catalog_p: "UzLitrPro's water meter catalog: browse sizes and technical specs, pick the right option, and place your order.",
    prod_search_ph: "Search...", prod_filter_all_sizes: "All sizes",
    prod_sort_default: "Default order", prod_sort_size_asc: "Size: smallest first", prod_sort_size_desc: "Size: largest first",
    prod_top_tag: "TOP", prod_price_on_request: "Price on request", prod_no_results: "No results found. Try a different search.",
    prod_qty_label: "Quantity", prod_add_to_cart: "Add to cart",
    footer_newsletter_h: "Latest news", footer_newsletter_p: "Be the first to hear our news",
    footer_newsletter_ph: "Your email", footer_newsletter_btn: "Subscribe",
    footer_newsletter_note: "This form works as a front-end demo.", footer_newsletter_success: "Thank you! You're subscribed.",

    // Home page (from the content documents)
    home_prod_eyebrow: "Our products",
    home_prod_h2: "Top products",
    cat_mech: "Mechanical water meters",
    cat_pulse: "Pulse-output water meters",
    cat_module: "Data transmission module",
    p_mech15: "DN15 mechanical water meter",
    p_mech20: "DN20 mechanical water meter",
    p_pulse15: "DN15 pulse-output water meter",
    p_pulse20: "DN20 pulse-output water meter",
    p_module: "Communication module",
    home_f1_h: "Hot and cold water",
    home_f1_p: "This meter is fully suited to both systems.",
    home_f2_h: "Accuracy in every litre",
    home_f2_p: "A high-quality mechanism measures water use reliably and accurately.",
    home_f3_h: "Durable material",
    home_f3_p: "Corrosion-resistant material — the key to many years of service.",
    home_f4_h: "IP68 protection",
    home_f4_p: "Fully protected against moisture and dust.",
    home_about_eyebrow: "About us",
    home_about_h2: "Precision, quality and trust — the values of UzLitrPro.",
    home_about_p1: "UzLitrPro is a company specialising in supplying modern, high-quality and reliable water meters to the Uzbekistan market.",
    home_about_p2: "Operating since 2025, our company offers customers modern products for accurate water metering, efficient use of resources and better billing processes.",
    home_about_p3: "Our work is built on product quality, reliability, an individual approach to each customer's needs and professional service.",
    home_about_p4: "Drawing on modern technology, high quality and international standards, we aim to offer every customer effective solutions, build long-term partnerships and strengthen our customers' trust.",
    home_about_more: "Learn more",
    n1_v: "100+",
    n1_l: "Partners",
    n2_v: "14",
    n2_l: "Regions covered",
    n3_v: "24/7",
    n3_l: "Technical support",
    n4_v: "99.9%",
    n4_l: "Measurement accuracy",
    n5_v: "1 year",
    n5_l: "Warranty period",
    n6_v: "ISO 4064",
    n6_l: "International standards compliance",
    n7_v: "Certified",
    n7_l: "Product quality and compliance",
    n8_v: "Wide range",
    n8_l: "A variety of products",
    n9_v: "Qualified specialists",
    n9_l: "Years of experience",
    n10_v: "Fast delivery",
    n10_l: "Across Uzbekistan",
    role_director: "Director",
    role_sales: "Head of Sales",
    role_dev: "Head of Software Development",
    role_finance: "Head of Finance",
    role_metrology: "Head of Metrology",
    role_marketing: "Media marketer",
    role_lawyer: "Lawyer",
    home_partners_eyebrow: "Our partners",
    home_partners_h2: "Mutual trust and beneficial partnership",
    home_partners_p: "We work effectively with public and private organisations in every region of Uzbekistan. Our partnerships are built on mutual trust, mutually beneficial relations and long-term cooperation.",
    pt1_l: "Corporate clients",
    pt2_l: "Regions covered",
    pt3_l: "Support",
    home_dealers_eyebrow: "Dealer network",
    home_dealers_h2: "A network of official dealers across Uzbekistan",
    home_dealers_p: "To be closer to our customers and provide high-quality service, our official dealers operate throughout Uzbekistan. Select your region on the map below to find out about your nearest dealer.",
    dl1_v: "12",
    dl1_l: "Official dealers",
    dl2_v: "14",
    dl2_l: "Regions covered",
    home_dealers_cta: "Select your region and get in touch!",
    footer_address: "40 O'rikzor 1st lane, Rakatboshi MFY, Yakkasaroy district, Tashkent, Uzbekistan",
    footer_newsletter_fail: "Couldn't send. Please try again later.",
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
  document.dispatchEvent(new CustomEvent("litrpro:langchange", { detail: { lang } }));
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

  // Footer newsletter signup — sent to Telegram through api/callback.js
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterSuccess = document.getElementById("newsletter-success");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const dict = i18n[currentLang] || i18n.uz;
      const button = newsletterForm.querySelector("button");
      if (button) button.disabled = true;
      let ok = false;
      try {
        const response = await fetch("/api/callback", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "newsletter", email: newsletterForm.email.value, page: document.title })
        });
        ok = response.ok;
      } catch (err) { /* network error: reported below */ }
      if (button) button.disabled = false;
      if (newsletterSuccess) {
        newsletterSuccess.textContent = ok ? dict.footer_newsletter_success : dict.footer_newsletter_fail;
        newsletterSuccess.classList.toggle("is-fail", !ok);
        newsletterSuccess.classList.add("show");
      }
      if (ok) newsletterForm.reset();
    });
  }
});
