// Title and description of each page, by language: shown in the browser tab
// and in search results. Shared by the app and the build-time prerender.
import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  langFromPath,
  localizedPath,
  stripLang,
} from "./i18n/context";
import { COMMON } from "./content/common";

export const SITE_URL = "https://wheel-habits.vercel.app";

const PAGES = {
  "/": {
    en: {
      title: "Wheel Habits — Spin Your Way to Better Days",
      description:
        "Your habits, your activities, your hobbies: together in one app. Simple habits, wheels that pick an activity, and a streak. In English, French, Spanish and Arabic.",
    },
    fr: {
      title: "Wheel Habits — Habitudes et roues d'activités",
      description:
        "Vos habitudes, vos activités, vos loisirs : réunis dans une seule app. Des habitudes simples, des roues qui choisissent une activité, et une série. En français, anglais, espagnol et arabe.",
    },
    es: {
      title: "Wheel Habits — Hábitos y ruedas de actividades",
      description:
        "Tus hábitos, tus actividades, tus aficiones: reunidos en una sola app. Hábitos simples, ruedas que eligen una actividad y una racha. En español, inglés, francés y árabe.",
    },
    ar: {
      title: "Wheel Habits — العادات وعجلات الأنشطة",
      description:
        "عاداتك وأنشطتك وهواياتك: مجتمعة في تطبيق واحد. عادات بسيطة، وعجلات تختار لك نشاطًا، وسلسلة تكبر يومًا بعد يوم. بالعربية والإنجليزية والفرنسية والإسبانية.",
    },
  },
  "/privacy-policy": {
    en: {
      title: "Privacy Policy · Wheel Habits",
      description:
        "How Wheel Habits handles your data: habits stay on your phone, and data only leaves it for the partner and prayer times features you turn on.",
    },
    fr: {
      title: "Politique de confidentialité · Wheel Habits",
      description:
        "Comment Wheel Habits traite vos données : vos habitudes restent sur votre téléphone, et des données n'en sortent que pour les fonctions partenaire et horaires de prière que vous activez.",
    },
    es: {
      title: "Política de privacidad · Wheel Habits",
      description:
        "Cómo trata Wheel Habits tus datos: tus hábitos se quedan en tu teléfono, y solo salen datos para las funciones de compañero y horarios de oración que actives.",
    },
    ar: {
      title: "سياسة الخصوصية · Wheel Habits",
      description:
        "كيف يتعامل Wheel Habits مع بياناتك: تبقى عاداتك على هاتفك، ولا تخرج البيانات منه إلا لميزتي الشريك وأوقات الصلاة عند تفعيلهما.",
    },
  },
  "/terms-of-service": {
    en: {
      title: "Terms of Service · Wheel Habits",
      description: "The terms for using the Wheel Habits app.",
    },
    fr: {
      title: "Conditions d'utilisation · Wheel Habits",
      description: "Les conditions d'utilisation de l'application Wheel Habits.",
    },
    es: {
      title: "Condiciones de uso · Wheel Habits",
      description: "Las condiciones de uso de la app Wheel Habits.",
    },
    ar: {
      title: "شروط الاستخدام · Wheel Habits",
      description: "شروط استخدام تطبيق Wheel Habits.",
    },
  },
  "/delete-account": {
    en: {
      title: "Delete Your Account · Wheel Habits",
      description:
        "How to delete your Wheel Habits account, in the app or by email, and what is deleted.",
    },
    fr: {
      title: "Supprimer votre compte · Wheel Habits",
      description:
        "Comment supprimer votre compte Wheel Habits, dans l'app ou par e-mail, et ce qui est supprimé.",
    },
    es: {
      title: "Eliminar tu cuenta · Wheel Habits",
      description:
        "Cómo eliminar tu cuenta de Wheel Habits, en la app o por correo, y qué se elimina.",
    },
    ar: {
      title: "حذف حسابك · Wheel Habits",
      description:
        "كيفية حذف حسابك في Wheel Habits، من التطبيق أو عبر البريد الإلكتروني، وما الذي يُحذف.",
    },
  },
  "/prayer-times": {
    en: {
      title: "Prayer Times · Wheel Habits",
      description:
        "Track the 5 daily prayers in Wheel Habits, with times from your location or your mosque on Mawaqit, and alarms.",
    },
    fr: {
      title: "Horaires de prière · Wheel Habits",
      description:
        "Suivez les 5 prières du jour dans Wheel Habits, avec les horaires de votre position ou de votre mosquée sur Mawaqit, et des alarmes.",
    },
    es: {
      title: "Horarios de oración · Wheel Habits",
      description:
        "Sigue las 5 oraciones del día en Wheel Habits, con los horarios de tu ubicación o de tu mezquita en Mawaqit, y alarmas.",
    },
    ar: {
      title: "أوقات الصلاة · Wheel Habits",
      description:
        "تابع الصلوات الخمس في Wheel Habits، بأوقات موقعك أو مسجدك على مواقيت، مع منبّهات.",
    },
  },
};

export const PAGE_PATHS = Object.keys(PAGES);

// The page of [pathname] without its language, or null if there is none.
const pagePath = (pathname) => {
  const path = stripLang(pathname);
  return PAGES[path] ? path : null;
};

/// The title and description of [pathname], in its language.
export const pageMeta = (pathname) => {
  const path = pagePath(pathname);
  const lang = langFromPath(pathname);
  if (path) return PAGES[path][lang];
  const c = { ...COMMON.en, ...COMMON[lang] };
  return { title: `${c.notFoundTitle} · Wheel Habits`, description: c.notFoundText };
};

// The full URL of the page [path] in [lang].
const pageUrl = (path, lang) => SITE_URL + localizedPath(path, lang);

/// The canonical URL of [pathname] and its versions in every language, for
/// search engines. English is the default for other languages. A missing
/// page has none.
export const pageLinks = (pathname) => {
  const path = pagePath(pathname);
  if (!path) return null;
  return {
    canonical: pageUrl(path, langFromPath(pathname)),
    alternates: [
      ...LANGUAGES.map(({ code }) => ({ hreflang: code, href: pageUrl(path, code) })),
      { hreflang: "x-default", href: pageUrl(path, DEFAULT_LANGUAGE) },
    ],
  };
};
