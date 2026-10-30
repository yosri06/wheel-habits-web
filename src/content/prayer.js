// Prayer times page texts. **bold** and [label](href) are rendered by rich().
export const PRAYER = {
  en: {
    mockup: {
      title: "Prayer Settings",
      source: "Prayer times source",
      geo: "Geolocation",
      geoSub: "Automatic from your location",
      mawaqit: "Mawaqit",
      mawaqitSub: "From your mosque page",
      location: "Location",
      place: "Paris, France",
      alarms: "Prayer alarms",
      names: ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"],
      save: "Save",
    },
    badge: "Muslim Prayer Support",
    title: "Prayer Times (Optional Feature)",
    intro: "Track the 5 daily prayers in Today, with their times and an alarm for the ones you choose.",
    setupTitle: "How to set up prayer times",
    steps: [
      ["Turn on prayer times", ["In the app, open **Settings → Prayers** and turn on **Prayer times**."]],
      [
        "Choose a source",
        [
          "**Geolocation:** times are calculated on your phone from your location, with the calculation method of your region (detected automatically).",
          "**Mawaqit:** the exact times of your mosque. Find it on [mawaqit.net](https://mawaqit.net) and paste the address of its page.",
        ],
      ],
      ["Pick your alarms", ["Choose which prayers ring. The 5 prayers then appear in Today and in your journal."]],
    ],
    features: ["Alarms at prayer times", "Time left before sunrise for Fajr", "Your mosque's times or your location"],
    sourceLabel: "Mosque prayer times from",
  },

  fr: {
    mockup: {
      title: "Réglages de prière",
      source: "Source des horaires",
      geo: "Géolocalisation",
      geoSub: "Automatique depuis votre position",
      mawaqit: "Mawaqit",
      mawaqitSub: "Depuis la page de votre mosquée",
      location: "Localisation",
      place: "Paris, France",
      alarms: "Alarmes de prière",
      names: ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"],
      save: "Enregistrer",
    },
    badge: "Prières musulmanes",
    title: "Horaires de prière (fonction facultative)",
    intro:
      "Suivez les 5 prières du jour dans Aujourd'hui, avec leurs horaires et une alarme pour celles que vous choisissez.",
    setupTitle: "Configurer les horaires de prière",
    steps: [
      ["Activez les horaires", ["Dans l'app, ouvrez **Paramètres → Prières** et activez **Horaires de prière**."]],
      [
        "Choisissez une source",
        [
          "**Géolocalisation :** les horaires sont calculés sur votre téléphone à partir de votre position, avec la méthode de calcul de votre région (détectée automatiquement).",
          "**Mawaqit :** les horaires exacts de votre mosquée. Trouvez-la sur [mawaqit.net](https://mawaqit.net) et collez l'adresse de sa page.",
        ],
      ],
      ["Choisissez vos alarmes", ["Choisissez les prières qui sonnent. Les 5 prières apparaissent ensuite dans Aujourd'hui et dans votre journal."]],
    ],
    features: ["Alarmes à l'heure des prières", "Temps restant avant le lever du soleil pour le Fajr", "Les horaires de votre mosquée ou de votre position"],
    sourceLabel: "Horaires des mosquées fournis par",
  },

  es: {
    mockup: {
      title: "Ajustes de oración",
      source: "Fuente de horarios",
      geo: "Geolocalización",
      geoSub: "Automático desde tu ubicación",
      mawaqit: "Mawaqit",
      mawaqitSub: "Desde la página de tu mezquita",
      location: "Ubicación",
      place: "París, Francia",
      alarms: "Alarmas de oración",
      names: ["Fajr", "Duhr", "Asr", "Maghrib", "Isha"],
      save: "Guardar",
    },
    badge: "Oraciones musulmanas",
    title: "Horarios de oración (función opcional)",
    intro: "Sigue las 5 oraciones del día en Hoy, con sus horarios y una alarma para las que elijas.",
    setupTitle: "Cómo configurar los horarios de oración",
    steps: [
      ["Activa los horarios", ["En la app, abre **Ajustes → Oraciones** y activa **Horarios de oración**."]],
      [
        "Elige una fuente",
        [
          "**Geolocalización:** los horarios se calculan en tu teléfono a partir de tu ubicación, con el método de cálculo de tu región (detectado automáticamente).",
          "**Mawaqit:** los horarios exactos de tu mezquita. Búscala en [mawaqit.net](https://mawaqit.net) y pega la dirección de su página.",
        ],
      ],
      ["Elige tus alarmas", ["Elige qué oraciones suenan. Las 5 oraciones aparecen entonces en Hoy y en tu diario."]],
    ],
    features: ["Alarmas a la hora de cada oración", "Tiempo restante hasta la salida del sol para el Fajr", "Los horarios de tu mezquita o de tu ubicación"],
    sourceLabel: "Horarios de las mezquitas de",
  },

  ar: {
    mockup: {
      title: "إعدادات الصلاة",
      source: "مصدر أوقات الصلاة",
      geo: "تحديد الموقع",
      geoSub: "تلقائي من موقعك الجغرافي",
      mawaqit: "مواقيت",
      mawaqitSub: "من صفحة مسجدك",
      location: "الموقع",
      place: "باريس، فرنسا",
      alarms: "تنبيهات الصلاة",
      names: ["الفجر", "الظهر", "العصر", "المغرب", "العشاء"],
      save: "حفظ",
    },
    badge: "دعم الصلوات",
    title: "أوقات الصلاة (ميزة اختيارية)",
    intro: "تابع الصلوات الخمس في قائمة اليوم، مع أوقاتها وتنبيه لما تختاره منها.",
    setupTitle: "كيفية إعداد أوقات الصلاة",
    steps: [
      ["فعّل أوقات الصلاة", ["في التطبيق، افتح **الإعدادات ← الصلوات** وفعّل **أوقات الصلاة**."]],
      [
        "اختر المصدر",
        [
          "**تحديد الموقع:** تُحسب الأوقات على هاتفك انطلاقًا من موقعك، بطريقة الحساب المعتمدة في منطقتك (تُكتشف تلقائيًا).",
          "**مواقيت (Mawaqit):** الأوقات الدقيقة لمسجدك. ابحث عنه في [mawaqit.net](https://mawaqit.net) والصق عنوان صفحته.",
        ],
      ],
      ["اختر تنبيهاتك", ["اختر الصلوات التي يرنّ لها التنبيه. تظهر بعدها الصلوات الخمس في قائمة اليوم وفي سجلك."]],
    ],
    features: ["تنبيهات عند أوقات الصلاة", "الوقت المتبقي قبل الشروق لصلاة الفجر", "أوقات مسجدك أو أوقات موقعك"],
    sourceLabel: "أوقات المساجد من",
  },
};
