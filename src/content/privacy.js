// Privacy policy. The English text is the reference version.
const OSM = "https://osmfoundation.org/wiki/Privacy_Policy";

export const PRIVACY = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated: October 30, 2026",
    summary:
      "**Summary:** Wheel Habits keeps your habits on your device. Data only leaves it for features you turn on: sharing with an accountability partner, and prayer times. We never sell your data or use analytics.",
    sections: [
      {
        h2: "1. Introduction",
        blocks: [
          {
            p: 'This Privacy Policy explains how Wheel Habits ("we", "our", "us"), developed by Pactence, handles information when you use the Wheel Habits mobile application (the "App").',
          },
        ],
      },
      {
        h2: "2. Data Stored Only on Your Device",
        blocks: [
          { p: "The following data is stored locally on your device and is never sent to us:" },
          {
            ul: [
              "Habits, wheels, activities and their weights",
              "Completion status, journal entries, streaks and statistics",
              "Reminder and notification settings",
              "Daily step counts (see section 3.3)",
              "Prayer time settings and your saved location or mosque",
              "App preferences",
            ],
          },
        ],
      },
      {
        h2: "3. Optional Features",
        blocks: [
          { h3: "3.1 Accountability Partner" },
          {
            p: "This feature is optional. To use it, you sign in with your Google account. We then store, on our backend hosted by Supabase:",
          },
          {
            ul: [
              "Your account identifier and email address (provided by Google Sign-In)",
              "Your display name and profile photo URL (provided by Google)",
              "Your partnership: who your partner is, and when it started",
              "For each habit **you choose to share**: its name, the day, and whether it was done",
              "Reactions sent between you and your partner",
            ],
          },
          {
            p: "Shared habits and reactions are visible only to you and your current partner. Habits you do not share are never sent.",
          },
          { h3: "3.2 Prayer Times" },
          { p: "This feature is optional and disabled by default." },
          {
            ul: [
              `**By location:** with your permission, the App reads your device's location to calculate prayer times on your device. Your coordinates are sent to OpenStreetMap (Nominatim) only to display the name of your city. See the [OpenStreetMap Foundation's privacy policy](${OSM}).`,
              "**By mosque:** the App sends the address of the Mawaqit mosque page you enter to our server, which retrieves that mosque's prayer times. Your timezone may be used to show them correctly.",
            ],
          },
          { h3: "3.3 Step Counter" },
          {
            p: "If you create a step goal, the App reads your step count from your phone's motion sensor or from Health Connect, with your permission. Step data is used only to display your progress and check your goal. It stays on your device and is not shared with your partner, except whether the step habit was done, if you choose to share that habit.",
          },
        ],
      },
      {
        h2: "4. How We Use Data",
        blocks: [
          {
            p: "We use data only to provide the App's features. We do not use it for advertising, analytics, profiling or tracking, and we do not sell or rent it. We process it with your consent when you turn on a feature, such as location for prayer times, and to provide the partner feature you ask for.",
          },
        ],
      },
      {
        h2: "5. Data Sharing",
        blocks: [
          { p: "We share data only with the services needed to run the features above:" },
          {
            ul: [
              "**Supabase** (backend hosting for the Accountability Partner feature)",
              "**Google** (sign-in)",
              "**OpenStreetMap / Nominatim** (city name for prayer times)",
              "**Mawaqit**, through our server (mosque prayer times)",
              "**Cloudflare** (hosting of our prayer times server)",
            ],
          },
          {
            p: "Like any online service, these services receive your device's IP address when the App connects to them. Some of them may process data outside the European Union, with the safeguards required by the GDPR, such as the European Commission's standard contractual clauses.",
          },
        ],
      },
      {
        h2: "6. Notifications",
        blocks: [
          {
            p: "Reminder and prayer notifications are scheduled on your device. They can be turned off at any time in the App or in your device settings.",
          },
        ],
      },
      {
        h2: "7. Data Retention and Deletion",
        blocks: [
          {
            ul: [
              "**Data on your device** stays until you delete it in the App (Settings → Clear journal), clear the App's data, or uninstall the App.",
              "**Shared history** is deleted when a partnership ends. You can also delete it when clearing your journal.",
              "**Your account** can be deleted at any time in the App: **Settings → Account → Delete my account**. This immediately and permanently deletes your account, profile, partnerships, shared habits and reactions from our servers. Your habits stay on your device. See [Delete your account](/delete-account).",
            ],
          },
        ],
      },
      {
        h2: "8. Data Security",
        blocks: [
          {
            p: "Data sent to our backend is encrypted in transit (HTTPS). Access rules on our database let each user read only their own data and the data their partner shares with them. Data on your device is protected by your device's own security, such as its screen lock and encryption.",
          },
        ],
      },
      {
        h2: "9. Children's Privacy",
        blocks: [
          {
            p: "The App is not directed to children under 13, and we do not knowingly collect personal information from them. If you believe a child has created an account, contact us and we will delete it.",
          },
        ],
      },
      {
        h2: "10. Your Rights",
        blocks: [
          {
            p: "Under the GDPR, you can access, correct, delete or export your data, and object to its use. You can view and edit your data in the App, delete your shared history, and delete your account at any time (see section 7). For any other request, contact us. You can also file a complaint with your data protection authority (in France, the CNIL).",
          },
        ],
      },
      {
        h2: "11. Changes to This Policy",
        blocks: [
          {
            p: 'We may update this policy. Changes are posted on this page, with a new "Last updated" date.',
          },
        ],
      },
    ],
  },

  fr: {
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour : 30 octobre 2026",
    summary:
      "**En bref :** Wheel Habits garde vos habitudes sur votre téléphone. Des données n'en sortent que pour les fonctions que vous activez : le partage avec un partenaire d'engagement et les horaires de prière. Nous ne vendons jamais vos données et n'utilisons pas d'outils d'analyse.",
    sections: [
      {
        h2: "1. Introduction",
        blocks: [
          {
            p: "Cette politique explique comment Wheel Habits (« nous »), développée par Pactence, traite les informations lorsque vous utilisez l'application mobile Wheel Habits (l'« App »).",
          },
        ],
      },
      {
        h2: "2. Données stockées uniquement sur votre téléphone",
        blocks: [
          { p: "Les données suivantes sont stockées sur votre téléphone et ne nous sont jamais envoyées :" },
          {
            ul: [
              "Les habitudes, les roues, les activités et leurs poids",
              "L'état des habitudes, le journal, les séries et les statistiques",
              "Les réglages des rappels et des notifications",
              "Le nombre de pas quotidien (voir la section 3.3)",
              "Les réglages des horaires de prière, et la position ou la mosquée enregistrée",
              "Les préférences de l'App",
            ],
          },
        ],
      },
      {
        h2: "3. Fonctions facultatives",
        blocks: [
          { h3: "3.1 Partenaire d'engagement" },
          {
            p: "Cette fonction est facultative. Pour l'utiliser, vous vous connectez avec votre compte Google. Nous enregistrons alors, sur notre serveur hébergé par Supabase :",
          },
          {
            ul: [
              "L'identifiant de votre compte et votre adresse e-mail (fournis par Google Sign-In)",
              "Votre nom et l'adresse de votre photo de profil (fournis par Google)",
              "Votre partenariat : qui est votre partenaire, et depuis quand",
              "Pour chaque habitude **que vous choisissez de partager** : son nom, le jour, et si elle a été faite",
              "Les réactions échangées avec votre partenaire",
            ],
          },
          {
            p: "Les habitudes partagées et les réactions ne sont visibles que par vous et votre partenaire actuel. Les habitudes non partagées ne sont jamais envoyées.",
          },
          { h3: "3.2 Horaires de prière" },
          { p: "Cette fonction est facultative et désactivée par défaut." },
          {
            ul: [
              `**Par la position :** avec votre autorisation, l'App lit la position de votre téléphone pour calculer les horaires sur le téléphone. Vos coordonnées sont envoyées à OpenStreetMap (Nominatim) uniquement pour afficher le nom de votre ville. Voir la [politique de confidentialité de la Fondation OpenStreetMap](${OSM}).`,
              "**Par la mosquée :** l'App envoie à notre serveur l'adresse de la page Mawaqit de la mosquée que vous indiquez, pour récupérer ses horaires. Votre fuseau horaire peut servir à les afficher correctement.",
            ],
          },
          { h3: "3.3 Compteur de pas" },
          {
            p: "Si vous créez un objectif de pas, l'App lit votre nombre de pas depuis le capteur de mouvement du téléphone ou depuis Health Connect, avec votre autorisation. Ces données servent uniquement à afficher votre progression et à vérifier votre objectif. Elles restent sur votre téléphone et ne sont pas partagées avec votre partenaire, sauf le fait que l'habitude de pas a été faite, si vous choisissez de la partager.",
          },
        ],
      },
      {
        h2: "4. Utilisation des données",
        blocks: [
          {
            p: "Nous utilisons les données uniquement pour faire fonctionner l'App. Nous ne les utilisons pas pour la publicité, l'analyse, le profilage ou le pistage, et nous ne les vendons ni ne les louons. Nous les traitons avec votre accord quand vous activez une fonction, comme la position pour les horaires de prière, et pour fournir la fonction partenaire que vous demandez.",
          },
        ],
      },
      {
        h2: "5. Partage des données",
        blocks: [
          { p: "Nous partageons des données uniquement avec les services nécessaires aux fonctions ci-dessus :" },
          {
            ul: [
              "**Supabase** (hébergement du serveur de la fonction Partenaire d'engagement)",
              "**Google** (connexion)",
              "**OpenStreetMap / Nominatim** (nom de la ville pour les horaires de prière)",
              "**Mawaqit**, via notre serveur (horaires des mosquées)",
              "**Cloudflare** (hébergement de notre serveur d'horaires de prière)",
            ],
          },
          {
            p: "Comme tout service en ligne, ces services reçoivent l'adresse IP de votre téléphone quand l'App s'y connecte. Certains peuvent traiter des données hors de l'Union européenne, avec les garanties exigées par le RGPD, comme les clauses contractuelles types de la Commission européenne.",
          },
        ],
      },
      {
        h2: "6. Notifications",
        blocks: [
          {
            p: "Les rappels et les alarmes de prière sont programmés sur votre téléphone. Vous pouvez les désactiver à tout moment dans l'App ou dans les réglages du téléphone.",
          },
        ],
      },
      {
        h2: "7. Conservation et suppression des données",
        blocks: [
          {
            ul: [
              "**Les données sur votre téléphone** restent jusqu'à ce que vous les effaciez dans l'App (Paramètres → Effacer le journal), que vous vidiez les données de l'App ou que vous la désinstalliez.",
              "**L'historique partagé** est supprimé quand un partenariat prend fin. Vous pouvez aussi le supprimer en effaçant votre journal.",
              "**Votre compte** peut être supprimé à tout moment dans l'App : **Paramètres → Compte → Supprimer mon compte**. Cela supprime immédiatement et définitivement de nos serveurs votre compte, votre profil, vos partenariats, vos habitudes partagées et les réactions. Vos habitudes restent sur votre téléphone. Voir [Supprimer votre compte](/delete-account).",
            ],
          },
        ],
      },
      {
        h2: "8. Sécurité des données",
        blocks: [
          {
            p: "Les données envoyées à notre serveur sont chiffrées pendant le transfert (HTTPS). Les règles d'accès de notre base de données permettent à chaque utilisateur de lire uniquement ses propres données et celles que son partenaire partage avec lui. Les données sur votre téléphone sont protégées par la sécurité du téléphone, comme le verrouillage de l'écran et le chiffrement.",
          },
        ],
      },
      {
        h2: "9. Protection des enfants",
        blocks: [
          {
            p: "L'App ne s'adresse pas aux enfants de moins de 13 ans, et nous ne collectons pas sciemment d'informations personnelles les concernant. Si vous pensez qu'un enfant a créé un compte, contactez-nous et nous le supprimerons.",
          },
        ],
      },
      {
        h2: "10. Vos droits",
        blocks: [
          {
            p: "Selon le RGPD, vous pouvez accéder à vos données, les corriger, les supprimer ou les exporter, et vous opposer à leur utilisation. Vous pouvez consulter et modifier vos données dans l'App, supprimer votre historique partagé et supprimer votre compte à tout moment (voir la section 7). Pour toute autre demande, contactez-nous. Vous pouvez aussi déposer une réclamation auprès de votre autorité de protection des données (en France, la CNIL).",
          },
        ],
      },
      {
        h2: "11. Modifications de cette politique",
        blocks: [
          {
            p: "Nous pouvons mettre à jour cette politique. Les changements sont publiés sur cette page, avec une nouvelle date de mise à jour.",
          },
        ],
      },
    ],
  },

  es: {
    title: "Política de privacidad",
    updated: "Última actualización: 30 de octubre de 2026",
    summary:
      "**En resumen:** Wheel Habits guarda tus hábitos en tu teléfono. Los datos solo salen de él para las funciones que activas: compartir con un compañero de compromiso y los horarios de oración. Nunca vendemos tus datos ni usamos herramientas de análisis.",
    sections: [
      {
        h2: "1. Introducción",
        blocks: [
          {
            p: "Esta política explica cómo Wheel Habits («nosotros»), desarrollada por Pactence, trata la información cuando usas la aplicación móvil Wheel Habits (la «App»).",
          },
        ],
      },
      {
        h2: "2. Datos guardados solo en tu teléfono",
        blocks: [
          { p: "Los siguientes datos se guardan en tu teléfono y nunca se nos envían:" },
          {
            ul: [
              "Los hábitos, las ruedas, las actividades y sus pesos",
              "El estado de los hábitos, el diario, las rachas y las estadísticas",
              "Los ajustes de recordatorios y notificaciones",
              "El número de pasos diario (ver la sección 3.3)",
              "Los ajustes de los horarios de oración, y la ubicación o mezquita guardada",
              "Las preferencias de la App",
            ],
          },
        ],
      },
      {
        h2: "3. Funciones opcionales",
        blocks: [
          { h3: "3.1 Compañero de compromiso" },
          {
            p: "Esta función es opcional. Para usarla, inicias sesión con tu cuenta de Google. Entonces guardamos, en nuestro servidor alojado por Supabase:",
          },
          {
            ul: [
              "El identificador de tu cuenta y tu correo electrónico (proporcionados por Google Sign-In)",
              "Tu nombre y la dirección de tu foto de perfil (proporcionados por Google)",
              "Tu vínculo: quién es tu compañero y desde cuándo",
              "Para cada hábito **que decides compartir**: su nombre, el día y si se hizo",
              "Las reacciones intercambiadas con tu compañero",
            ],
          },
          {
            p: "Los hábitos compartidos y las reacciones solo son visibles para ti y tu compañero actual. Los hábitos que no compartes nunca se envían.",
          },
          { h3: "3.2 Horarios de oración" },
          { p: "Esta función es opcional y está desactivada por defecto." },
          {
            ul: [
              `**Por ubicación:** con tu permiso, la App lee la ubicación de tu teléfono para calcular los horarios en el propio teléfono. Tus coordenadas se envían a OpenStreetMap (Nominatim) solo para mostrar el nombre de tu ciudad. Consulta la [política de privacidad de la Fundación OpenStreetMap](${OSM}).`,
              "**Por mezquita:** la App envía a nuestro servidor la dirección de la página de Mawaqit de la mezquita que indicas, para obtener sus horarios. Tu zona horaria puede usarse para mostrarlos correctamente.",
            ],
          },
          { h3: "3.3 Contador de pasos" },
          {
            p: "Si creas un objetivo de pasos, la App lee tu número de pasos desde el sensor de movimiento del teléfono o desde Health Connect, con tu permiso. Estos datos solo sirven para mostrar tu progreso y comprobar tu objetivo. Se quedan en tu teléfono y no se comparten con tu compañero, salvo si el hábito de pasos se hizo, si decides compartirlo.",
          },
        ],
      },
      {
        h2: "4. Uso de los datos",
        blocks: [
          {
            p: "Usamos los datos solo para que la App funcione. No los usamos para publicidad, análisis, perfiles ni rastreo, y no los vendemos ni alquilamos. Los tratamos con tu consentimiento cuando activas una función, como la ubicación para los horarios de oración, y para prestar la función de compañero que pides.",
          },
        ],
      },
      {
        h2: "5. Datos compartidos",
        blocks: [
          { p: "Solo compartimos datos con los servicios necesarios para las funciones anteriores:" },
          {
            ul: [
              "**Supabase** (alojamiento del servidor de la función Compañero de compromiso)",
              "**Google** (inicio de sesión)",
              "**OpenStreetMap / Nominatim** (nombre de la ciudad para los horarios de oración)",
              "**Mawaqit**, a través de nuestro servidor (horarios de las mezquitas)",
              "**Cloudflare** (alojamiento de nuestro servidor de horarios de oración)",
            ],
          },
          {
            p: "Como cualquier servicio en línea, estos servicios reciben la dirección IP de tu teléfono cuando la App se conecta a ellos. Algunos pueden tratar datos fuera de la Unión Europea, con las garantías que exige el RGPD, como las cláusulas contractuales tipo de la Comisión Europea.",
          },
        ],
      },
      {
        h2: "6. Notificaciones",
        blocks: [
          {
            p: "Los recordatorios y las alarmas de oración se programan en tu teléfono. Puedes desactivarlos en cualquier momento en la App o en los ajustes del teléfono.",
          },
        ],
      },
      {
        h2: "7. Conservación y eliminación de los datos",
        blocks: [
          {
            ul: [
              "**Los datos de tu teléfono** se conservan hasta que los borres en la App (Ajustes → Borrar diario), borres los datos de la App o la desinstales.",
              "**El historial compartido** se elimina cuando termina un vínculo. También puedes eliminarlo al borrar tu diario.",
              "**Tu cuenta** puede eliminarse en cualquier momento desde la App: **Ajustes → Cuenta → Eliminar mi cuenta**. Esto elimina de inmediato y de forma definitiva de nuestros servidores tu cuenta, tu perfil, tus vínculos, tus hábitos compartidos y las reacciones. Tus hábitos se quedan en tu teléfono. Consulta [Eliminar tu cuenta](/delete-account).",
            ],
          },
        ],
      },
      {
        h2: "8. Seguridad de los datos",
        blocks: [
          {
            p: "Los datos enviados a nuestro servidor se cifran durante la transmisión (HTTPS). Las reglas de acceso de nuestra base de datos permiten a cada usuario leer solo sus propios datos y los que su compañero comparte con él. Los datos de tu teléfono están protegidos por su propia seguridad, como el bloqueo de pantalla y el cifrado.",
          },
        ],
      },
      {
        h2: "9. Privacidad de los menores",
        blocks: [
          {
            p: "La App no está dirigida a menores de 13 años y no recopilamos a sabiendas información personal suya. Si crees que un menor ha creado una cuenta, contáctanos y la eliminaremos.",
          },
        ],
      },
      {
        h2: "10. Tus derechos",
        blocks: [
          {
            p: "Según el RGPD, puedes acceder a tus datos, corregirlos, eliminarlos o exportarlos, y oponerte a su uso. Puedes ver y modificar tus datos en la App, eliminar tu historial compartido y eliminar tu cuenta en cualquier momento (ver la sección 7). Para cualquier otra solicitud, contáctanos. También puedes presentar una reclamación ante tu autoridad de protección de datos (en España, la AEPD; en Francia, la CNIL).",
          },
        ],
      },
      {
        h2: "11. Cambios en esta política",
        blocks: [
          {
            p: "Podemos actualizar esta política. Los cambios se publican en esta página, con una nueva fecha de actualización.",
          },
        ],
      },
    ],
  },

  ar: {
    title: "سياسة الخصوصية",
    updated: "آخر تحديث: 30 أكتوبر 2026",
    summary:
      "**باختصار:** يحتفظ Wheel Habits بعاداتك على هاتفك. لا تغادره البيانات إلا للميزات التي تفعّلها: المشاركة مع شريك الالتزام، وأوقات الصلاة. لا نبيع بياناتك أبدًا، ولا نستخدم أدوات تحليل.",
    sections: [
      {
        h2: "1. مقدمة",
        blocks: [
          {
            p: "توضح هذه السياسة كيف يتعامل Wheel Habits («نحن»)، من تطوير Pactence، مع المعلومات عند استخدامك تطبيق Wheel Habits للهاتف («التطبيق»).",
          },
        ],
      },
      {
        h2: "2. بيانات تُحفظ على هاتفك فقط",
        blocks: [
          { p: "تُحفظ البيانات التالية على هاتفك ولا تُرسل إلينا أبدًا:" },
          {
            ul: [
              "العادات والعجلات والأنشطة وأوزانها",
              "حالة الإنجاز والسجل والسلاسل والإحصائيات",
              "إعدادات التذكيرات والإشعارات",
              "عدد الخطوات اليومي (انظر البند 3.3)",
              "إعدادات أوقات الصلاة والموقع أو المسجد المحفوظ",
              "تفضيلات التطبيق",
            ],
          },
        ],
      },
      {
        h2: "3. ميزات اختيارية",
        blocks: [
          { h3: "3.1 شريك الالتزام" },
          {
            p: "هذه الميزة اختيارية. لاستخدامها تسجّل الدخول بحساب Google. ونحفظ عندها على خادمنا المستضاف لدى Supabase:",
          },
          {
            ul: [
              "معرّف حسابك وبريدك الإلكتروني (يوفّرهما تسجيل الدخول عبر Google)",
              "اسمك وعنوان صورة ملفك الشخصي (يوفّرهما Google)",
              "شراكتك: من هو شريكك ومنذ متى",
              "لكل عادة **تختار مشاركتها**: اسمها واليوم وهل أُنجزت",
              "التفاعلات المتبادلة بينك وبين شريكك",
            ],
          },
          {
            p: "لا يرى العادات المشتركة والتفاعلات إلا أنت وشريكك الحالي. أما العادات غير المشتركة فلا تُرسل أبدًا.",
          },
          { h3: "3.2 أوقات الصلاة" },
          { p: "هذه الميزة اختيارية ومتوقفة افتراضيًا." },
          {
            ul: [
              `**حسب الموقع:** بإذنك، يقرأ التطبيق موقع هاتفك ليحسب أوقات الصلاة على الهاتف نفسه. تُرسل إحداثياتك إلى OpenStreetMap (Nominatim) فقط لعرض اسم مدينتك. انظر [سياسة الخصوصية لمؤسسة OpenStreetMap](${OSM}).`,
              "**حسب المسجد:** يرسل التطبيق إلى خادمنا عنوان صفحة المسجد على Mawaqit الذي تدخله، لجلب أوقاته. قد تُستخدم منطقتك الزمنية لعرضها بشكل صحيح.",
            ],
          },
          { h3: "3.3 عداد الخطوات" },
          {
            p: "إذا أنشأت هدفًا للخطوات، يقرأ التطبيق عدد خطواتك من مستشعر الحركة في الهاتف أو من Health Connect، بإذنك. تُستخدم هذه البيانات فقط لعرض تقدمك والتحقق من هدفك. تبقى على هاتفك ولا تُشارك مع شريكك، باستثناء ما إذا أُنجزت عادة الخطوات، إن اخترت مشاركتها.",
          },
        ],
      },
      {
        h2: "4. كيف نستخدم البيانات",
        blocks: [
          {
            p: "نستخدم البيانات فقط لتشغيل ميزات التطبيق. لا نستخدمها للإعلانات أو التحليل أو التنميط أو التتبع، ولا نبيعها ولا نؤجرها. ونعالجها بموافقتك عندما تفعّل ميزة، مثل الموقع لأوقات الصلاة، ولتقديم ميزة الشريك التي تطلبها.",
          },
        ],
      },
      {
        h2: "5. مشاركة البيانات",
        blocks: [
          { p: "لا نشارك البيانات إلا مع الخدمات اللازمة لتشغيل الميزات المذكورة أعلاه:" },
          {
            ul: [
              "**Supabase** (استضافة خادم ميزة شريك الالتزام)",
              "**Google** (تسجيل الدخول)",
              "**OpenStreetMap / Nominatim** (اسم المدينة لأوقات الصلاة)",
              "**Mawaqit** عبر خادمنا (أوقات المساجد)",
              "**Cloudflare** (استضافة خادم أوقات الصلاة لدينا)",
            ],
          },
          {
            p: "مثل أي خدمة على الإنترنت، تتلقى هذه الخدمات عنوان IP لهاتفك عندما يتصل بها التطبيق. وقد يعالج بعضها البيانات خارج الاتحاد الأوروبي، مع الضمانات التي تفرضها اللائحة العامة لحماية البيانات (GDPR)، مثل البنود التعاقدية النموذجية للمفوضية الأوروبية.",
          },
        ],
      },
      {
        h2: "6. الإشعارات",
        blocks: [
          {
            p: "تُجدول التذكيرات وتنبيهات الصلاة على هاتفك. يمكنك إيقافها في أي وقت من التطبيق أو من إعدادات الهاتف.",
          },
        ],
      },
      {
        h2: "7. الاحتفاظ بالبيانات وحذفها",
        blocks: [
          {
            ul: [
              "**البيانات على هاتفك** تبقى حتى تحذفها من التطبيق (الإعدادات ← مسح السجل)، أو تمسح بيانات التطبيق، أو تزيل تثبيته.",
              "**السجل المشترك** يُحذف عند انتهاء الشراكة. ويمكنك أيضًا حذفه عند مسح سجلك.",
              "**حسابك** يمكن حذفه في أي وقت من التطبيق: **الإعدادات ← الحساب ← حذف حسابي**. يحذف ذلك فورًا ونهائيًا من خوادمنا حسابك وملفك الشخصي وشراكاتك وعاداتك المشتركة والتفاعلات. تبقى عاداتك على هاتفك. انظر [حذف حسابك](/delete-account).",
            ],
          },
        ],
      },
      {
        h2: "8. أمان البيانات",
        blocks: [
          {
            p: "تُشفَّر البيانات المرسلة إلى خادمنا أثناء النقل (HTTPS). وتسمح قواعد الوصول في قاعدة بياناتنا لكل مستخدم بقراءة بياناته فقط والبيانات التي يشاركها معه شريكه. أما البيانات على هاتفك فتحميها وسائل أمان الهاتف، مثل قفل الشاشة والتشفير.",
          },
        ],
      },
      {
        h2: "9. خصوصية الأطفال",
        blocks: [
          {
            p: "التطبيق غير موجّه للأطفال دون 13 عامًا، ولا نجمع عن علم معلومات شخصية عنهم. إذا كنت تعتقد أن طفلًا أنشأ حسابًا، فاتصل بنا وسنحذفه.",
          },
        ],
      },
      {
        h2: "10. حقوقك",
        blocks: [
          {
            p: "بموجب اللائحة العامة لحماية البيانات (GDPR)، يمكنك الاطلاع على بياناتك وتصحيحها وحذفها وتصديرها، والاعتراض على استخدامها. يمكنك عرض بياناتك وتعديلها في التطبيق، وحذف سجلك المشترك، وحذف حسابك في أي وقت (انظر البند 7). لأي طلب آخر، اتصل بنا. ويمكنك أيضًا تقديم شكوى إلى هيئة حماية البيانات في بلدك (في فرنسا: CNIL).",
          },
        ],
      },
      {
        h2: "11. تغييرات هذه السياسة",
        blocks: [
          {
            p: "قد نحدّث هذه السياسة. تُنشر التغييرات في هذه الصفحة مع تاريخ تحديث جديد.",
          },
        ],
      },
    ],
  },
};
