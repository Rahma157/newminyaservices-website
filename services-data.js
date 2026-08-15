/* ==========================================================================
   services-data.js — قاعدة بيانات الخدمات (Static) تُستخدم في صفحة
   service-details.html لعرض تفاصيل كل مكان حسب المعرّف (id) في الرابط
   ========================================================================== */

const servicesData = {

  "nile-golden-restaurant": {
    name: "مطعم النيل الذهبي",
    category: "مطاعم",
    rating: 4.8,
    address: "الحي الأول، بجوار حديقة المدينة المركزية",
    phone: "086-2345678 / 01098765432",
    hours: "يوميًا من 12:00 ظهرًا حتى 1:00 صباحًا",
    priceLabel: "متوسط السعر",
    priceValue: "150 - 350 جنيه للفرد",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&q=80",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&q=80"
    ],
    description: "يقدم مطعم النيل الذهبي تجربة طعام فاخرة تجمع بين المأكولات الشرقية والغربية الأصيلة، في أجواء هادئة تطل على المسطحات الخضراء بالمنيا الجديدة. يتميز المطعم بفريق ضيافة محترف، وقائمة طعام متجددة تناسب جميع الأذواق، مع صالات مخصصة للعائلات والمناسبات الخاصة. كما يوفر المطعم خدمة التوصيل السريع لجميع أحياء المدينة."
  },

  "waha-sharq-restaurant": {
    name: "مطعم واحة الشرق",
    category: "مطاعم",
    rating: 4.5,
    address: "الحي الثالث، شارع النخيل الرئيسي",
    phone: "086-2345690 / 01099887766",
    hours: "يوميًا من 1:00 ظهرًا حتى 12:00 منتصف الليل",
    priceLabel: "متوسط السعر",
    priceValue: "90 - 220 جنيه للفرد",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&q=80",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=200&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&q=80"
    ],
    description: "يقدم مطعم واحة الشرق أشهى المشويات والمأكولات الشعبية الأصيلة بأسعار مناسبة لجميع الفئات. يتميز المكان بأجواء شعبية دافئة وخدمة سريعة، ويستقبل العائلات والمجموعات الكبيرة في صالاته الواسعة. كما يوفر خدمة توصيل للطلبات داخل المدينة."
  },

  "minya-specialist-hospital": {
    name: "مستشفى المنيا الجديدة التخصصي",
    category: "مستشفيات",
    rating: 4.9,
    address: "المحور المركزي، بجوار مبنى الهيئة",
    phone: "086-2233445 / 01011223344",
    hours: "يعمل على مدار 24 ساعة طوال أيام الأسبوع",
    priceLabel: "الخدمة",
    priceValue: "طوارئ واستقبال على مدار الساعة",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=200&q=80",
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&q=80",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&q=80"
    ],
    description: "يقدم مستشفى المنيا الجديدة التخصصي رعاية طبية متكاملة على مدار الساعة بأحدث الأجهزة الطبية وأطباء متخصصين في مختلف التخصصات. يضم المستشفى قسم طوارئ مجهز بالكامل، إلى جانب عيادات خارجية وأقسام أشعة وتحاليل حديثة. يحرص فريق التمريض على تقديم رعاية إنسانية متميزة لكل المرضى."
  },

  "modern-medical-center": {
    name: "مركز الرعاية الطبية الحديث",
    category: "مستشفيات",
    rating: 4.6,
    address: "الحي الثاني، خلف السوق المركزي",
    phone: "086-2233467 / 01055667788",
    hours: "يوميًا من 9 صباحًا حتى 11 مساءً",
    priceLabel: "الخدمة",
    priceValue: "حجز فوري للكشف والتحاليل",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&q=80",
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&q=80",
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=200&q=80"
    ],
    description: "يوفر مركز الرعاية الطبية الحديث عيادات متخصصة في مختلف التخصصات، إلى جانب خدمات الأشعة والتحاليل الطبية بأحدث الأجهزة. يتيح المركز حجز المواعيد بسهولة وسرعة، مع فريق طبي وفني على درجة عالية من الخبرة. كما يقدم خصومات على الفحوصات الدورية للمشتركين."
  },

  "shifa-pharmacy": {
    name: "صيدلية الشفاء",
    category: "صيدليات",
    rating: 4.7,
    address: "شارع السوق المركزي، بجوار محطة البنزين",
    phone: "086-2456781 / 01122334455",
    hours: "يوميًا من 8 صباحًا حتى 2 صباحًا",
    priceLabel: "التوصيل",
    priceValue: "توصيل مجاني لجميع أحياء المدينة",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=200&q=80",
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=200&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&q=80",
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&q=80"
    ],
    description: "توفر صيدلية الشفاء جميع الأدوية ومستلزمات العناية الشخصية والتجميل بأسعار تنافسية. يقدم فريق الصيادلة استشارات دوائية مجانية للعملاء، مع إمكانية طلب الأدوية والاستفسار عن توافرها عبر الهاتف. تتميز الصيدلية بخدمة التوصيل السريع لجميع أحياء المدينة."
  },

  "nour-pharmacy": {
    name: "صيدلية النور",
    category: "صيدليات",
    rating: 4.4,
    address: "الحي الرابع، شارع الجامعة",
    phone: "086-2456799 / 01133445566",
    hours: "تعمل 24 ساعة طوال أيام الأسبوع",
    priceLabel: "التوصيل",
    priceValue: "خدمة توصيل سريعة على مدار الساعة",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&q=80",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&q=80",
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=200&q=80",
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=200&q=80"
    ],
    description: "تعمل صيدلية النور على مدار 24 ساعة لتوفير الأدوية والمستلزمات الطبية في أي وقت. يضم فريقها صيادلة متخصصين لتقديم الاستشارة المناسبة لكل حالة. كما تتيح الصيدلية خدمة الحجز المسبق للأدوية النادرة."
  },

  "minya-private-university": {
    name: "جامعة المنيا الجديدة الأهلية",
    category: "تعليم",
    rating: 4.7,
    address: "المنطقة التعليمية، المحور المركزي",
    phone: "086-2678901 / 01001122334",
    hours: "من السبت للخميس، 9 صباحًا حتى 4 عصرًا",
    priceLabel: "الرسوم الدراسية",
    priceValue: "تختلف حسب الكلية — تواصل مع القبول والتسجيل",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=200&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&q=80",
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=200&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&q=80"
    ],
    description: "تضم جامعة المنيا الجديدة الأهلية كليات متنوعة ومعتمدة من المجلس الأعلى للجامعات، وحرمًا جامعيًا حديثًا مجهزًا بالكامل. توفر الجامعة أنشطة طلابية وبحثية متنوعة، وشراكات مع جهات صناعية وأكاديمية. باب التسجيل مفتوح حاليًا للفصل الدراسي القادم."
  },

  "future-international-school": {
    name: "مدرسة المستقبل الدولية",
    category: "تعليم",
    rating: 4.6,
    address: "الحي التعليمي، بجوار النادي الرياضي",
    phone: "086-2678922 / 01044556677",
    hours: "من السبت للخميس، 7 صباحًا حتى 3 عصرًا",
    priceLabel: "المصروفات الدراسية",
    priceValue: "تواصل مع إدارة القبول لمعرفة التفاصيل",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&q=80",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=200&q=80",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=200&q=80"
    ],
    description: "تقدم مدرسة المستقبل الدولية مناهج بريطانية ومصرية معتمدة، إلى جانب أنشطة لا منهجية متكاملة تنمي مهارات الطلاب. تضم المدرسة فصولًا مجهزة بالوسائل التعليمية الحديثة ومعامل علوم وحاسب آلي. باب القبول مفتوح حاليًا للمراحل الدراسية المختلفة."
  },

  "minya-sports-club": {
    name: "نادي المنيا الجديدة الرياضي",
    category: "رياضة",
    rating: 4.5,
    address: "شارع الحدائق، بجوار الحديقة المركزية",
    phone: "086-2789012 / 01066778899",
    hours: "يوميًا من 7 صباحًا حتى 12 منتصف الليل",
    priceLabel: "الاشتراك",
    priceValue: "خطط اشتراك شهرية ونصف سنوية وسنوية",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1552667466-07770ae110d0?w=200&q=80",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=200&q=80",
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=200&q=80",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=200&q=80"
    ],
    description: "يضم نادي المنيا الجديدة الرياضي صالة جيم مجهزة بأحدث الأجهزة، وحمام سباحة، وملاعب متعددة الأغراض. يوفر النادي مدربين شخصيين وحصصًا جماعية متنوعة تناسب كل الأعمار. كما يقدم عروض اشتراك مميزة للعائلات والمجموعات."
  },

  "elite-football-academy": {
    name: "أكاديمية النخبة لكرة القدم",
    category: "رياضة",
    rating: 4.3,
    address: "منطقة الأندية، بجوار نادي المنيا الجديدة",
    phone: "086-2789033 / 01077889900",
    hours: "تدريبات يومية من 4 عصرًا حتى 9 مساءً",
    priceLabel: "الاشتراك",
    priceValue: "باقات تدريب شهرية للأطفال والناشئين",
    image: "https://images.unsplash.com/photo-1552667466-07770ae110d0?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=200&q=80",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=200&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
      "https://images.unsplash.com/photo-1552667466-07770ae110d0?w=200&q=80"
    ],
    description: "تقدم أكاديمية النخبة لكرة القدم تدريبًا احترافيًا للأطفال والناشئين على أيدي مدربين معتمدين من اتحاد الكرة. تعتمد الأكاديمية برامج تدريبية مقسمة حسب الفئات العمرية والمستوى المهاري. تتوفر تجربة تدريب مجانية للمنضمين الجدد."
  },

  "waha-minya-mall": {
    name: "مول واحة المنيا",
    category: "تسوق",
    rating: 4.6,
    address: "شارع الساحل الأخضر، وسط المدينة",
    phone: "086-2890123 / 01088990011",
    hours: "يوميًا من 10 صباحًا حتى 12 منتصف الليل",
    priceLabel: "ملاحظة",
    priceValue: "يضم أكثر من 100 متجر ومطعم ومنطقة ترفيهية",
    image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580281657702-257584239a55?w=200&q=80",
      "https://images.unsplash.com/photo-1555529771-7888783a18d3?w=200&q=80",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=200&q=80",
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=200&q=80"
    ],
    description: "يُعد مول واحة المنيا أكبر مركز تسوق بالمدينة، ويضم أشهر الماركات العالمية والمحلية إلى جانب مجموعة متنوعة من المطاعم والمقاهي. يوفر المول منطقة ترفيهية للعائلات وأماكن انتظار سيارات واسعة. كما يستضيف فعاليات وعروض ترويجية بشكل دوري."
  },

  "minya-trade-market": {
    name: "سوق المنيا الجديدة التجاري",
    category: "تسوق",
    rating: 4.2,
    address: "وسط المدينة، بجوار الموقف العام",
    phone: "086-2890144 / 01099001122",
    hours: "يوميًا من 9 صباحًا حتى 11 مساءً",
    priceLabel: "ملاحظة",
    priceValue: "عروض وتخفيضات يومية على المحلات المشاركة",
    image: "https://images.unsplash.com/photo-1555529771-7888783a18d3?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=200&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=200&q=80",
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&q=80",
      "https://images.unsplash.com/photo-1555529771-7888783a18d3?w=200&q=80"
    ],
    description: "يضم سوق المنيا الجديدة التجاري محلات متنوعة للملابس والأدوات المنزلية والمستلزمات اليومية بأسعار مناسبة لجميع الفئات. شهد السوق توسعة حديثة بإضافة عشرات المحلات الجديدة. يستقطب السوق زوارًا من مختلف أحياء المدينة يوميًا."
  },

  "home-cleaning-services": {
    name: "خدمات النظافة المنزلية الشاملة",
    category: "خدمات منزلية",
    rating: 4.5,
    address: "تغطية جميع أحياء المدينة",
    phone: "086-2901255 / 01100112233",
    hours: "يوميًا من 8 صباحًا حتى 10 مساءً",
    priceLabel: "السعر",
    priceValue: "من 200 جنيه حسب مساحة المكان",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=200&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
      "https://images.unsplash.com/photo-1555529771-7888783a18d3?w=200&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=200&q=80"
    ],
    description: "تقدم خدمات النظافة المنزلية الشاملة تنظيف المنازل والشقق والمكاتب بواسطة فريق مدرب وأدوات ومعقمات عالية الجودة. يمكن حجز الخدمة بشكل دوري أو لمرة واحدة حسب احتياج العميل. يلتزم الفريق بمواعيد دقيقة وجودة عالية في التنفيذ."
  },

  "plumbing-electrical-maintenance": {
    name: "صيانة السباكة والكهرباء الفورية",
    category: "خدمات منزلية",
    rating: 4.4,
    address: "تغطية جميع أحياء المدينة",
    phone: "086-2901266 / 01111223344",
    hours: "خدمة طوارئ متاحة على مدار 24 ساعة",
    priceLabel: "السعر",
    priceValue: "تسعير حسب نوع العطل بعد المعاينة",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=200&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
      "https://images.unsplash.com/photo-1555529771-7888783a18d3?w=200&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=200&q=80"
    ],
    description: "توفر خدمة صيانة السباكة والكهرباء الفورية فريقًا فنيًا متخصصًا للاستجابة السريعة لأعطال السباكة والكهرباء في أي وقت. يعمل الفنيون على مدار اليوم لتغطية الحالات الطارئة بجميع أحياء المدينة. تشمل الخدمة معاينة مجانية قبل تحديد تكلفة الإصلاح."
  },

  "green-cafe": {
    name: "كافيه ذا جرين",
    category: "مطاعم",
    rating: 4.6,
    address: "الحي الأول، شارع المكتبات",
    phone: "086-2345712 / 01122556677",
    hours: "يوميًا من 8 صباحًا حتى 2 صباحًا",
    priceLabel: "متوسط السعر",
    priceValue: "60 - 150 جنيه للفرد",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&q=80",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=200&q=80"
    ],
    description: "يوفر كافيه ذا جرين أجواءً هادئة مثالية للعمل والدراسة، مع تشكيلة واسعة من المشروبات الساخنة والباردة والحلويات. يتميز المكان بتصميم عصري وإنترنت مجاني عالي السرعة. كما يقدم الكافيه خصومات للطلاب في أيام محددة من الأسبوع."
  },

  "rowad-language-center": {
    name: "مركز الرواد لتعليم اللغات",
    category: "تعليم",
    rating: 4.8,
    address: "المنطقة التعليمية، بجوار الجامعة",
    phone: "086-2678944 / 01033667788",
    hours: "من السبت للخميس، 10 صباحًا حتى 9 مساءً",
    priceLabel: "الرسوم",
    priceValue: "مجموعات جديدة بأسعار تنافسية شهريًا",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&q=80",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=200&q=80",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=200&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&q=80"
    ],
    description: "يقدم مركز الرواد لتعليم اللغات دورات معتمدة في اللغتين الإنجليزية والفرنسية لجميع المستويات والأعمار. يعتمد المركز مدربين مؤهلين ومناهج تفاعلية حديثة، مع اختبارات تحديد مستوى مجانية. تنطلق مجموعات جديدة بشكل شهري لضمان مرونة الالتحاق."
  }

};
