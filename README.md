# KD.SYS — Developer Control Center

Премиальный персональный сайт-визитка **Kurmet Dosmagambet** — Full-Stack Software Engineer & Automation Engineer.

Чистый HTML5 + CSS3 + Vanilla JavaScript. Без фреймворков, без сборщиков, без backend — полностью статический сайт, готовый к публикации на GitHub Pages.

## Структура проекта

```
kurmet-portfolio/
├── index.html        # Вся разметка сайта (семантическая, ARIA, SEO, JSON-LD)
├── css/
│   └── style.css     # Все стили: glassmorphism, тёмная/светлая тема, анимации
├── js/
│   ├── i18n.js       # Мультиязычность RU/KZ (localStorage + автоопределение)
│   └── main.js       # Частицы, курсор, тема, счётчики, форма, скролл-эффекты
├── favicon.svg       # Векторная иконка
├── sitemap.xml       # Карта сайта для поисковиков
├── robots.txt        # Правила индексации
├── .nojekyll         # Отключает обработку Jekyll на GitHub Pages
└── README.md
```

## Возможности

- **Концепция Developer Control Center** — каждый раздел оформлен как модуль системы (Profile Module, Service Architecture, Technology Ecosystem…)
- **Мультиязычность RU / ҚАЗ** — мгновенное переключение без перезагрузки, выбор сохраняется в `localStorage`, при первом визите язык определяется по браузеру
- **Тёмная / светлая тема** с сохранением выбора
- **Интерактивный фон** — канвас с сетью частиц, реагирующей на курсор (пауза при скрытой вкладке)
- **Кастомный курсор** (автоматически отключается на сенсорных устройствах)
- **Анимации появления при скролле**, анимированные счётчики статистики и шкалы навыков
- **Accessibility**: ARIA-атрибуты, видимый фокус, поддержка `prefers-reduced-motion`
- **SEO**: meta tags, Open Graph, Twitter Cards, JSON-LD (Person + WebSite), sitemap.xml, robots.txt, hreflang

## Публикация на GitHub Pages

### Вариант 1 — отдельный репозиторий проекта

1. Создайте на GitHub репозиторий, например `kurmet-portfolio`.
2. В папке проекта выполните:

```bash
git init
git add .
git commit -m "Initial commit: personal portfolio site"
git branch -M main
git remote add origin https://github.com/ВАШ_ЛОГИН/kurmet-portfolio.git
git push -u origin main
```

3. На GitHub откройте **Settings → Pages**.
4. В разделе **Build and deployment** выберите Source: **Deploy from a branch**, Branch: **main**, папка **/(root)** → **Save**.
5. Через 1–2 минуты сайт будет доступен по адресу
   `https://ВАШ_ЛОГИН.github.io/kurmet-portfolio/`.

### Вариант 2 — главный сайт пользователя (рекомендуется)

Назовите репозиторий `ВАШ_ЛОГИН.github.io` — тогда сайт откроется прямо на
`https://ВАШ_ЛОГИН.github.io/` без суффикса. Это короче и солиднее для визитки.

### После публикации обязательно

1. **Проверьте ссылки на профили** в секции Contact и в JSON-LD (`index.html`): LinkedIn, Upwork, Telegram — стоят заглушки, замените на реальные.
2. Зарегистрируйте сайт в [Google Search Console](https://search.google.com/search-console) и отправьте `sitemap.xml`.

## Как добавить новый проект

В `index.html` найдите секцию `PORTFOLIO — Project Network`, скопируйте любой блок `<article class="project">…</article>` и замените заголовок, описание, теги и ссылку на GitHub. Для переводов добавьте ключи `portfolio.p4.title` / `portfolio.p4.text` в оба словаря в `js/i18n.js`.

## Как добавить отзыв

В секции Testimonials уже есть закомментированный шаблон `<blockquote class="testimonial">` — раскомментируйте и заполните. Пустое состояние («awaiting incoming transmissions») после этого можно удалить.

## Рекомендации: как превратить сайт в поток клиентов с Upwork

1. **Единый бренд везде.** Используйте одно и то же позиционирование («Full-Stack Software Engineer & Automation Engineer»), фото и тон на Upwork, LinkedIn, GitHub и сайте. Клиент, проверяющий вас, должен видеть согласованную картину.
2. **Ссылка на сайт в профиле Upwork** — в разделе Portfolio и в первых строках Overview. Сайт работает как «доказательство премиальности», когда клиент сравнивает кандидатов.
3. **Кейсы вместо описаний.** Каждый проект в Project Network со временем превратите в мини-кейс по формуле: *проблема бизнеса → решение → измеримый результат* («сократил время формирования отчётов с 4 часов до 3 минут»). Цифры продают лучше технологий.
4. **Английская версия.** Клиенты Upwork/Fiverr читают по-английски — добавьте `en` третьим языком в `i18n.js` (структура уже готова, нужен только словарь) и сделайте его языком по умолчанию для зарубежного трафика.
5. **Отзывы — сразу после первых заказов.** Просите у каждого клиента короткий отзыв с именем и должностью и публикуйте в секции Testimonials. 2–3 настоящих отзыва резко повышают конверсию.
6. **Видимый GitHub.** Держите 3–4 публичных репозитория с чистым кодом, README и CI-бейджами — клиенты-технари проверяют именно это.
7. **Специализация в заголовке.** На Upwork выигрывают узкие позиционирования: «FastAPI & Golang backend for business automation» работает лучше, чем «Full-Stack Developer».
8. **Блог/заметки (позже).** 3–5 коротких статей («How I automated workforce reporting with FastAPI») дают SEO-трафик и демонстрируют экспертизу в переписке с клиентом.
9. **Рабочая форма связи.** Когда появится поток обращений, замените mailto-форму на [Formspree](https://formspree.io) или [Web3Forms] — бесплатно, без backend, письма приходят сразу на почту.
10. **Аналитика.** Подключите бесплатный [Cloudflare Web Analytics] или GoatCounter (без cookie-баннеров), чтобы видеть, откуда приходят клиенты и какие секции читают.

## Лицензия

Личный сайт — все права принадлежат Kurmet Dosmagambet.
