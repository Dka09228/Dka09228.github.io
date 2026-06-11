/* ====================================================================
   i18n.js — система мультиязычности (русский / қазақша)
   - словари переводов для всех элементов с атрибутом data-i18n
   - сохранение выбора в localStorage
   - автоопределение языка браузера при первом визите
==================================================================== */

"use strict";

const I18N = {
  /* ----------------------------- РУССКИЙ -------------------------- */
  ru: {
    "header.online": "онлайн",

    "nav.about": "Профиль",
    "nav.services": "Услуги",
    "nav.stack": "Технологии",
    "nav.projects": "Проекты",
    "nav.contact": "Контакты",

    "hero.terminal": "инициализация центра управления разработкой…",
    "hero.title1": "Цифровые системы,",
    "hero.title2": "которые работают на ваш бизнес",
    "hero.subtitle": "Проектирую и разрабатываю backend-системы, REST API, микросервисы и решения для автоматизации бизнес-процессов — от архитектуры до продакшена.",
    "hero.hire": "Нанять меня",
    "hero.contact": "Связаться",

    "stats.apis": "Разработано API",
    "stats.projects": "Завершённых проектов",
    "stats.automation": "Решений автоматизации",
    "stats.years": "Лет опыта",

    "about.module": "// МОДУЛЬ 01 — ПРОФИЛЬ",
    "about.title": "Инженер систем и автоматизации",
    "about.p1": "Я — Kurmet Dosmagambet, Full-Stack инженер со специализацией в backend-разработке и автоматизации. Работаю с корпоративными системами: workforce management, интеграции внешних сервисов, мониторинг и высоконагруженные API.",
    "about.p2": "Мой подход — инженерный: сначала архитектура и данные, затем код. Каждое решение проектируется так, чтобы его было легко поддерживать, масштабировать и измерять. Автоматизация для меня — это способ убрать ручную работу и вернуть бизнесу время.",
    "about.d1.title": "Архитектура прежде кода",
    "about.d1.text": "Микросервисы, чистые контракты API и продуманные схемы данных PostgreSQL — фундамент каждого проекта.",
    "about.d2.title": "Автоматизация процессов",
    "about.d2.text": "Превращаю ручные бизнес-процессы в надёжные автоматические пайплайны: от CI/CD до интеграций корпоративных систем.",
    "about.d3.title": "Продакшен-надёжность",
    "about.d3.text": "Docker, мониторинг, логирование и нагрузочное мышление — системы, которые работают 24/7 без сюрпризов.",

    "services.module": "// МОДУЛЬ 02 — АРХИТЕКТУРА УСЛУГ",
    "services.title": "Что я делаю для бизнеса",
    "services.subtitle": "Каждая услуга — это законченный модуль: от анализа задачи до развёрнутого в продакшене решения.",
    "services.s1.title": "Full-Stack Development",
    "services.s1.text": "Полный цикл разработки веб-приложений: React/TypeScript на фронтенде, Python и Golang на бэкенде.",
    "services.s2.title": "Backend Development",
    "services.s2.text": "Надёжные серверные системы на FastAPI: бизнес-логика, аутентификация, фоновые задачи, интеграции.",
    "services.s3.title": "Golang Development",
    "services.s3.text": "Высоконагруженные сервисы на Go: конкурентная обработка, низкие задержки, эффективное использование ресурсов.",
    "services.s4.title": "API Development",
    "services.s4.text": "Проектирование и разработка REST API: версионирование, документация OpenAPI, безопасность и производительность.",
    "services.s5.title": "Database Design",
    "services.s5.text": "Проектирование схем PostgreSQL и кеширование Redis: индексы, миграции, целостность и скорость запросов.",
    "services.s6.title": "DevOps & Deployment",
    "services.s6.text": "Docker, Nginx, GitLab CI/CD и администрирование Linux-серверов: от репозитория до стабильного продакшена.",
    "services.s7.title": "Process Automation",
    "services.s7.text": "Автоматизация бизнес-процессов: workforce management, отчётность, интеграции и устранение ручной работы.",
    "services.s8.title": "Technical Consulting",
    "services.s8.text": "Аудит архитектуры, выбор технологий, план масштабирования — инженерные решения с обоснованием для бизнеса.",

    "stack.module": "// МОДУЛЬ 03 — ТЕХНОЛОГИЧЕСКАЯ ЭКОСИСТЕМА",
    "stack.title": "Инструменты, которыми я управляю",
    "stack.subtitle": "Единая экосистема: от интерфейса до сервера, от базы данных до мониторинга.",
    "stack.db": "Базы данных",
    "stack.servers": "Администрирование серверов",
    "stack.expertise": "Дополнительная экспертиза",
    "stack.e1": "Автоматизация бизнес-процессов",
    "stack.e2": "Workforce Management системы",
    "stack.e3": "Корпоративные интеграции",
    "stack.e4": "Системы мониторинга",
    "stack.e5": "Системная архитектура",
    "stack.e6": "Мобильная разработка",
    "stack.core": "// Ключевые компетенции",

    "portfolio.module": "// МОДУЛЬ 04 — СЕТЬ ПРОЕКТОВ",
    "portfolio.title": "Избранные проекты",
    "portfolio.subtitle": "Системы, которые уже решают реальные задачи бизнеса.",
    "portfolio.p1.title": "Workforce Management система",
    "portfolio.p1.text": "Корпоративная система управления персоналом: учёт смен, автоматические отчёты, интеграция с внутренними сервисами компании.",
    "portfolio.p2.title": "Высоконагруженный API-сервис",
    "portfolio.p2.text": "Микросервис на Golang для обработки потоков данных: конкурентная обработка, кеширование Redis, мониторинг и алертинг.",
    "portfolio.p3.title": "Платформа автоматизации процессов",
    "portfolio.p3.text": "Backend мобильного приложения и пайплайны автоматизации: интеграция внешних API, фоновые задачи, CI/CD-развёртывание.",
    "portfolio.view": "Код на GitHub",

    "testimonials.module": "// МОДУЛЬ 05 — ОТЗЫВЫ",
    "testimonials.title": "Что говорят клиенты",
    "testimonials.empty": "Здесь появятся отзывы первых клиентов. Хотите стать одним из них — напишите мне.",
    "testimonials.cta": "Обсудить проект",

    "contact.module": "// МОДУЛЬ 06 — ШЛЮЗ СВЯЗИ",
    "contact.title": "Обсудим ваш проект",
    "contact.subtitle": "Отвечаю в течение 24 часов. Опишите задачу — предложу решение и оценку.",
    "contact.form.name": "Ваше имя",
    "contact.form.email": "Ваш email",
    "contact.form.message": "Опишите задачу",
    "contact.form.submit": "Отправить сообщение",
    "contact.form.hint": "// откроется ваш почтовый клиент с готовым письмом",

    "footer.built": "Спроектировано и собрано вручную — HTML, CSS и Vanilla JS."
  },

  /* ----------------------------- ҚАЗАҚША -------------------------- */
  kz: {
    "header.online": "онлайн",

    "nav.about": "Профиль",
    "nav.services": "Қызметтер",
    "nav.stack": "Технологиялар",
    "nav.projects": "Жобалар",
    "nav.contact": "Байланыс",

    "hero.terminal": "әзірлеуді басқару орталығы іске қосылуда…",
    "hero.title1": "Сіздің бизнесіңізге",
    "hero.title2": "жұмыс істейтін цифрлық жүйелер",
    "hero.subtitle": "Backend-жүйелерді, REST API, микросервистерді және бизнес-процестерді автоматтандыру шешімдерін жобалаймын әрі әзірлеймін — архитектурадан продакшенге дейін.",
    "hero.hire": "Мені жалдау",
    "hero.contact": "Байланысу",

    "stats.apis": "Әзірленген API",
    "stats.projects": "Аяқталған жобалар",
    "stats.automation": "Автоматтандыру шешімдері",
    "stats.years": "Жыл тәжірибе",

    "about.module": "// МОДУЛЬ 01 — ПРОФИЛЬ",
    "about.title": "Жүйелер мен автоматтандыру инженері",
    "about.p1": "Мен — Kurmet Dosmagambet, backend-әзірлеу мен автоматтандыруға маманданған Full-Stack инженермін. Корпоративтік жүйелермен жұмыс істеймін: workforce management, сыртқы сервистермен интеграциялар, мониторинг және жоғары жүктемелі API.",
    "about.p2": "Менің тәсілім — инженерлік: алдымен архитектура мен деректер, содан кейін код. Әр шешім оңай қолдауға, масштабтауға және өлшеуге болатындай етіп жобаланады. Автоматтандыру — қол еңбегін жойып, бизнеске уақытты қайтару тәсілі.",
    "about.d1.title": "Кодтан бұрын архитектура",
    "about.d1.text": "Микросервистер, таза API келісімшарттары және ойластырылған PostgreSQL деректер схемалары — әр жобаның іргетасы.",
    "about.d2.title": "Процестерді автоматтандыру",
    "about.d2.text": "Қолмен жасалатын бизнес-процестерді сенімді автоматты пайплайндарға айналдырамын: CI/CD-ден корпоративтік интеграцияларға дейін.",
    "about.d3.title": "Продакшен сенімділігі",
    "about.d3.text": "Docker, мониторинг, логтау және жүктемелік ойлау — тәулік бойы тоқтаусыз жұмыс істейтін жүйелер.",

    "services.module": "// МОДУЛЬ 02 — ҚЫЗМЕТТЕР АРХИТЕКТУРАСЫ",
    "services.title": "Бизнес үшін не істеймін",
    "services.subtitle": "Әр қызмет — аяқталған модуль: тапсырманы талдаудан продакшенге орналастырылған шешімге дейін.",
    "services.s1.title": "Full-Stack Development",
    "services.s1.text": "Веб-қосымшаларды толық циклмен әзірлеу: фронтендте React/TypeScript, бэкендте Python және Golang.",
    "services.s2.title": "Backend Development",
    "services.s2.text": "FastAPI негізіндегі сенімді серверлік жүйелер: бизнес-логика, аутентификация, фондық тапсырмалар, интеграциялар.",
    "services.s3.title": "Golang Development",
    "services.s3.text": "Go тіліндегі жоғары жүктемелі сервистер: қатар өңдеу, төмен кідіріс, ресурстарды тиімді пайдалану.",
    "services.s4.title": "API Development",
    "services.s4.text": "REST API жобалау және әзірлеу: нұсқалау, OpenAPI құжаттамасы, қауіпсіздік және өнімділік.",
    "services.s5.title": "Database Design",
    "services.s5.text": "PostgreSQL схемаларын жобалау және Redis кештеу: индекстер, миграциялар, тұтастық және сұраныс жылдамдығы.",
    "services.s6.title": "DevOps & Deployment",
    "services.s6.text": "Docker, Nginx, GitLab CI/CD және Linux серверлерін басқару: репозиторийден тұрақты продакшенге дейін.",
    "services.s7.title": "Process Automation",
    "services.s7.text": "Бизнес-процестерді автоматтандыру: workforce management, есептілік, интеграциялар және қол еңбегін жою.",
    "services.s8.title": "Technical Consulting",
    "services.s8.text": "Архитектура аудиті, технологияларды таңдау, масштабтау жоспары — бизнеске негізделген инженерлік шешімдер.",

    "stack.module": "// МОДУЛЬ 03 — ТЕХНОЛОГИЯЛЫҚ ЭКОЖҮЙЕ",
    "stack.title": "Мен басқаратын құралдар",
    "stack.subtitle": "Біртұтас экожүйе: интерфейстен серверге дейін, дерекқордан мониторингке дейін.",
    "stack.db": "Дерекқорлар",
    "stack.servers": "Серверлерді басқару",
    "stack.expertise": "Қосымша сараптама",
    "stack.e1": "Бизнес-процестерді автоматтандыру",
    "stack.e2": "Workforce Management жүйелері",
    "stack.e3": "Корпоративтік интеграциялар",
    "stack.e4": "Мониторинг жүйелері",
    "stack.e5": "Жүйелік архитектура",
    "stack.e6": "Мобильді әзірлеу",
    "stack.core": "// Негізгі құзыреттер",

    "portfolio.module": "// МОДУЛЬ 04 — ЖОБАЛАР ЖЕЛІСІ",
    "portfolio.title": "Таңдаулы жобалар",
    "portfolio.subtitle": "Бизнестің нақты міндеттерін шешіп жатқан жүйелер.",
    "portfolio.p1.title": "Workforce Management жүйесі",
    "portfolio.p1.text": "Персоналды басқарудың корпоративтік жүйесі: ауысымдарды есепке алу, автоматты есептер, компанияның ішкі сервистерімен интеграция.",
    "portfolio.p2.title": "Жоғары жүктемелі API-сервис",
    "portfolio.p2.text": "Деректер ағындарын өңдеуге арналған Golang микросервисі: қатар өңдеу, Redis кештеу, мониторинг және ескерту жүйесі.",
    "portfolio.p3.title": "Процестерді автоматтандыру платформасы",
    "portfolio.p3.text": "Мобильді қосымшаның backend-і және автоматтандыру пайплайндары: сыртқы API интеграциясы, фондық тапсырмалар, CI/CD арқылы орналастыру.",
    "portfolio.view": "GitHub-тағы код",

    "testimonials.module": "// МОДУЛЬ 05 — ПІКІРЛЕР",
    "testimonials.title": "Клиенттер не дейді",
    "testimonials.empty": "Мұнда алғашқы клиенттердің пікірлері пайда болады. Солардың бірі болғыңыз келсе — маған жазыңыз.",
    "testimonials.cta": "Жобаны талқылау",

    "contact.module": "// МОДУЛЬ 06 — БАЙЛАНЫС ШЛЮЗІ",
    "contact.title": "Жобаңызды талқылайық",
    "contact.subtitle": "24 сағат ішінде жауап беремін. Тапсырманы сипаттаңыз — шешім мен бағалау ұсынамын.",
    "contact.form.name": "Атыңыз",
    "contact.form.email": "Email мекенжайыңыз",
    "contact.form.message": "Тапсырманы сипаттаңыз",
    "contact.form.submit": "Хабарлама жіберу",
    "contact.form.hint": "// дайын хатпен пошта клиентіңіз ашылады",

    "footer.built": "Қолмен жобаланып, құрастырылған — HTML, CSS және Vanilla JS."
  }
};

/* Определение стартового языка:
   1) сохранённый выбор в localStorage
   2) язык браузера (kk → казахский)
   3) русский по умолчанию */
function detectLanguage() {
  const saved = localStorage.getItem("lang");
  if (saved && I18N[saved]) return saved;

  const browser = (navigator.language || "").toLowerCase();
  if (browser.startsWith("kk")) return "kz";
  return "ru";
}

/* Применение языка ко всем элементам с data-i18n */
function applyLanguage(lang) {
  const dict = I18N[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  /* Атрибут lang для доступности и SEO */
  document.documentElement.setAttribute("lang", lang === "kz" ? "kk" : "ru");

  /* Состояние кнопок переключателя */
  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });

  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(detectLanguage());

  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });
});
