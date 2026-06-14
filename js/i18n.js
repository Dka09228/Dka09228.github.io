/* ====================================================================
   i18n.js — система мультиязычности (русский / английский)
   - словари переводов для всех элементов с атрибутом data-i18n
   - сохранение выбора в localStorage
   - автоопределение языка браузера при первом визите
==================================================================== */

"use strict";

const I18N = {
  /* ----------------------------- РУССКИЙ -------------------------- */
  ru: {
    "meta.title": "Kurmet Dosmagambet — Full-Stack Software Engineer & Automation Engineer",
    "meta.description": "Full-Stack Software Engineer и Automation Engineer. Разработка REST API на FastAPI и Golang, микросервисная архитектура, PostgreSQL, Docker, CI/CD, автоматизация бизнес-процессов и корпоративные интеграции.",

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

  /* ----------------------------- ENGLISH -------------------------- */
  en: {
    "meta.title": "Kurmet Dosmagambet — Full-Stack Software Engineer & Automation Engineer",
    "meta.description": "Full-Stack Software Engineer and Automation Engineer. REST API development with FastAPI and Golang, microservice architecture, PostgreSQL, Docker, CI/CD, business process automation and enterprise integrations.",

    "header.online": "online",

    "nav.about": "Profile",
    "nav.services": "Services",
    "nav.stack": "Tech Stack",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.terminal": "initializing developer control center…",
    "hero.title1": "Digital systems",
    "hero.title2": "that work for your business",
    "hero.subtitle": "I design and build backend systems, REST APIs, microservices and business-process automation solutions — from architecture to production.",
    "hero.hire": "Hire Me",
    "hero.contact": "Contact Me",

    "stats.apis": "APIs Developed",
    "stats.projects": "Projects Completed",
    "stats.automation": "Automation Solutions",
    "stats.years": "Years of Experience",

    "about.module": "// MODULE 01 — PROFILE",
    "about.title": "Systems & Automation Engineer",
    "about.p1": "I'm Kurmet Dosmagambet, a Full-Stack engineer specializing in backend development and automation. I work with enterprise systems: workforce management, third-party integrations, monitoring and high-load APIs.",
    "about.p2": "My approach is engineering-first: architecture and data before code. Every solution is designed to be easy to maintain, scale and measure. To me, automation is a way to eliminate manual work and give time back to the business.",
    "about.d1.title": "Architecture before code",
    "about.d1.text": "Microservices, clean API contracts and well-designed PostgreSQL data schemas are the foundation of every project.",
    "about.d2.title": "Process automation",
    "about.d2.text": "I turn manual business processes into reliable automated pipelines: from CI/CD to enterprise system integrations.",
    "about.d3.title": "Production reliability",
    "about.d3.text": "Docker, monitoring, logging and load-aware engineering — systems that run 24/7 without surprises.",

    "services.module": "// MODULE 02 — SERVICE ARCHITECTURE",
    "services.title": "What I do for business",
    "services.subtitle": "Every service is a complete module: from task analysis to a solution deployed in production.",
    "services.s1.title": "Full-Stack Development",
    "services.s1.text": "Full-cycle web application development: React/TypeScript on the frontend, Python and Golang on the backend.",
    "services.s2.title": "Backend Development",
    "services.s2.text": "Reliable server-side systems with FastAPI: business logic, authentication, background jobs, integrations.",
    "services.s3.title": "Golang Development",
    "services.s3.text": "High-load services in Go: concurrent processing, low latency, efficient resource usage.",
    "services.s4.title": "API Development",
    "services.s4.text": "REST API design and development: versioning, OpenAPI documentation, security and performance.",
    "services.s5.title": "Database Design",
    "services.s5.text": "PostgreSQL schema design and Redis caching: indexes, migrations, data integrity and query speed.",
    "services.s6.title": "DevOps & Deployment",
    "services.s6.text": "Docker, Nginx, GitLab CI/CD and Linux server administration: from repository to stable production.",
    "services.s7.title": "Process Automation",
    "services.s7.text": "Business process automation: workforce management, reporting, integrations and eliminating manual work.",
    "services.s8.title": "Technical Consulting",
    "services.s8.text": "Architecture audits, technology selection, scaling plans — engineering decisions justified in business terms.",

    "stack.module": "// MODULE 03 — TECHNOLOGY ECOSYSTEM",
    "stack.title": "Tools I command",
    "stack.subtitle": "A unified ecosystem: from interface to server, from database to monitoring.",
    "stack.db": "Databases",
    "stack.servers": "Server Administration",
    "stack.expertise": "Additional Expertise",
    "stack.e1": "Business Process Automation",
    "stack.e2": "Workforce Management Systems",
    "stack.e3": "Enterprise Integrations",
    "stack.e4": "Monitoring Systems",
    "stack.e5": "System Architecture",
    "stack.e6": "Mobile Development",
    "stack.core": "// Core competencies",

    "portfolio.module": "// MODULE 04 — PROJECT NETWORK",
    "portfolio.title": "Selected projects",
    "portfolio.subtitle": "Systems already solving real business problems.",
    "portfolio.p1.title": "Workforce Management System",
    "portfolio.p1.text": "Enterprise staff management system: shift tracking, automated reporting, integration with internal company services.",
    "portfolio.p2.title": "High-Load API Service",
    "portfolio.p2.text": "A Golang microservice for processing data streams: concurrent processing, Redis caching, monitoring and alerting.",
    "portfolio.p3.title": "Process Automation Platform",
    "portfolio.p3.text": "Mobile app backend and automation pipelines: external API integrations, background jobs, CI/CD deployment.",
    "portfolio.view": "Code on GitHub",

    "testimonials.module": "// MODULE 05 — TESTIMONIALS",
    "testimonials.title": "What clients say",
    "testimonials.empty": "Reviews from my first clients will appear here. Want to be one of them — drop me a line.",
    "testimonials.cta": "Discuss a project",

    "contact.module": "// MODULE 06 — CONTACT GATEWAY",
    "contact.title": "Let's discuss your project",
    "contact.subtitle": "I reply within 24 hours. Describe your task — I'll propose a solution and an estimate.",
    "contact.form.name": "Your name",
    "contact.form.email": "Your email",
    "contact.form.message": "Describe your task",
    "contact.form.submit": "Send message",
    "contact.form.hint": "// your email client will open with a ready-to-send message",

    "footer.built": "Designed and built by hand — HTML, CSS and Vanilla JS."
  }
};

/* Определение стартового языка:
   1) сохранённый выбор в localStorage
   2) язык браузера: ru → русский
   3) английский по умолчанию (зарубежные клиенты Upwork/Fiverr) */
function detectLanguage() {
  const saved = localStorage.getItem("lang");
  if (saved && I18N[saved]) return saved;

  const browser = (navigator.language || "").toLowerCase();
  if (browser.startsWith("ru")) return "ru";
  return "en";
}

/* Применение языка ко всем элементам с data-i18n */
function applyLanguage(lang) {
  const dict = I18N[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  /* Заголовок вкладки и описание страницы */
  document.title = dict["meta.title"];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", dict["meta.description"]);

  /* Атрибут lang для доступности и SEO */
  document.documentElement.setAttribute("lang", lang);

  /* Состояние кнопок переключателя */
  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });

  localStorage.setItem("lang", lang);

  /* Сообщаем остальным скриптам о смене языка (перезапуск эффекта печати) */
  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(detectLanguage());

  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });
});
