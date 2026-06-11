/* ====================================================================
   main.js — интерактивность Developer Control Center
   - канвас-фон с сетью частиц (hero)
   - кастомный курсор
   - тёмная/светлая тема с сохранением в localStorage
   - reveal-анимации при скролле (IntersectionObserver)
   - анимированные счётчики статистики и шкалы навыков
   - прогресс скролла, кнопка «наверх», мобильное меню
   - контактная форма без backend (mailto)
==================================================================== */

"use strict";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ================================================================
   1. Тема (dark / light)
================================================================ */
(function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    document.documentElement.setAttribute("data-theme", saved);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("themeToggle");
    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  });
})();

document.addEventListener("DOMContentLoaded", () => {

  /* ================================================================
     2. Кастомный курсор (только мышь, не сенсор)
  ================================================================ */
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (finePointer && dot && ring && !prefersReducedMotion) {
    let mouseX = -100, mouseY = -100;   // позиция мыши
    let ringX = -100, ringY = -100;     // позиция кольца (с инерцией)

    window.addEventListener("mousemove", (e) => {
      /* Системный курсор скрываем только после первого реального движения —
         так курсор гарантированно не «исчезает» ни при каких условиях */
      document.body.classList.add("cursor-enabled");
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    }, { passive: true });

    window.addEventListener("mousedown", () => dot.classList.add("is-pressed"));
    window.addEventListener("mouseup", () => dot.classList.remove("is-pressed"));

    (function animateRing() {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animateRing);
    })();

    /* Кольцо увеличивается над интерактивными элементами */
    document.querySelectorAll("a, button, input, textarea, .chip").forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("is-hover"));
      el.addEventListener("mouseleave", () => ring.classList.remove("is-hover"));
    });
  }

  /* ================================================================
     3. Канвас: сеть частиц в hero
  ================================================================ */
  const canvas = document.getElementById("particles");
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext("2d");
    let particles = [];
    let raf = null;
    const pointer = { x: null, y: null };

    function accentColor() {
      return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
    }

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      /* Количество частиц зависит от площади экрана */
      const count = Math.min(90, Math.floor((canvas.width * canvas.height) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.6 + 0.6
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const color = accentColor();
      const linkDist = 130;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        /* Лёгкое притяжение к курсору */
        if (pointer.x !== null) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 180 && dist > 0.001) {
            p.x += (dx / dist) * 0.25;
            p.y += (dy / dist) * 0.25;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.55;
        ctx.fill();
      }

      /* Линии между близкими частицами */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < linkDist) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = color;
            ctx.globalAlpha = (1 - dist / linkDist) * 0.18;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }

    canvas.parentElement.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    }, { passive: true });
    canvas.parentElement.addEventListener("mouseleave", () => {
      pointer.x = null;
      pointer.y = null;
    });

    /* Пауза анимации, когда вкладка не видна — экономия батареи */
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        raf = requestAnimationFrame(draw);
      }
    });

    window.addEventListener("resize", resize, { passive: true });
    resize();
    draw();
  }

  /* ================================================================
     4. Header: фон при скролле + прогресс-бар + активная секция
  ================================================================ */
  const header = document.getElementById("header");
  const progress = document.querySelector(".scroll-progress");
  const backToTop = document.getElementById("backToTop");
  const navLinks = document.querySelectorAll(".nav__link");
  const heroContent = document.querySelector(".hero__content");

  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 30);
    backToTop.classList.toggle("is-visible", y > 600);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${(y / docHeight) * 100}%`;

    /* Параллакс hero: контент уезжает медленнее скролла и плавно гаснет */
    if (heroContent && !prefersReducedMotion && y < window.innerHeight) {
      heroContent.style.transform = `translateY(${y * 0.22}px)`;
      heroContent.style.opacity = Math.max(0, 1 - y / (window.innerHeight * 0.9));
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });

  /* Подсветка активного пункта меню */
  const sections = document.querySelectorAll("section[id]");
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle("is-active",
            link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach((s) => sectionObserver.observe(s));

  /* ================================================================
     5. Мобильное меню
  ================================================================ */
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");

  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  });
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });

  /* ================================================================
     6. Reveal-анимации при скролле
  ================================================================ */
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* ================================================================
     7. Счётчики статистики
  ================================================================ */
  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1600;
    const start = performance.now();

    function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      /* ease-out cubic — быстрый разгон, плавное замедление */
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased);
      if (t < 1) requestAnimationFrame(tick);
    }
    if (prefersReducedMotion) {
      el.textContent = target;
    } else {
      requestAnimationFrame(tick);
    }
  }

  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".counter").forEach(animateCounter);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  const stats = document.getElementById("stats");
  if (stats) statsObserver.observe(stats);

  /* ================================================================
     8. Шкалы навыков
  ================================================================ */
  const skillsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.querySelectorAll(".skill__fill").forEach((bar) => {
        bar.style.width = `${bar.dataset.level}%`;
      });
      entry.target.querySelectorAll(".skill__pct").forEach((pct) => {
        const target = parseInt(pct.dataset.pct, 10);
        const start = performance.now();
        function tick(now) {
          const t = Math.min((now - start) / 1400, 1);
          pct.textContent = `${Math.round(target * (1 - Math.pow(1 - t, 3)))}%`;
          if (t < 1) requestAnimationFrame(tick);
        }
        if (prefersReducedMotion) {
          pct.textContent = `${target}%`;
        } else {
          requestAnimationFrame(tick);
        }
      });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.3 });
  document.querySelectorAll(".skills").forEach((el) => skillsObserver.observe(el));

  /* ================================================================
     9. Эффект свечения на карточках услуг (следует за курсором)
  ================================================================ */
  document.querySelectorAll(".service").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    }, { passive: true });
  });

  /* ================================================================
     10. Эффект печатающегося текста в терминальной строке hero
         (перезапускается при смене языка — событие langchange из i18n.js)
  ================================================================ */
  const typeEl = document.getElementById("typewriter");
  let typeTimer = null;

  function runTypewriter() {
    if (!typeEl) return;
    const full = typeEl.textContent;
    if (prefersReducedMotion || !full) return;

    clearInterval(typeTimer);
    let i = 0;
    typeEl.textContent = "";
    typeTimer = setInterval(() => {
      i += 1;
      typeEl.textContent = full.slice(0, i);
      if (i >= full.length) clearInterval(typeTimer);
    }, 36);
  }
  runTypewriter();
  document.addEventListener("langchange", runTypewriter);

  /* ================================================================
     11. Параллакс световых сфер за курсором (hero)
  ================================================================ */
  const hero = document.getElementById("hero");
  const orbs = document.querySelectorAll(".orb");
  if (hero && orbs.length && finePointer && !prefersReducedMotion) {
    hero.addEventListener("mousemove", (e) => {
      const cx = e.clientX / window.innerWidth - 0.5;
      const cy = e.clientY / window.innerHeight - 0.5;
      orbs.forEach((orb, i) => {
        /* Каждая сфера на своей «глубине» — разная амплитуда */
        const depth = (i + 1) * 22;
        orb.style.translate = `${(cx * depth).toFixed(1)}px ${(cy * depth).toFixed(1)}px`;
      });
    }, { passive: true });
  }

  /* ================================================================
     12. 3D-наклон карточек услуг за курсором
  ================================================================ */
  if (finePointer && !prefersReducedMotion) {
    document.querySelectorAll(".tilt").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const dx = (e.clientX - r.left) / r.width - 0.5;
        const dy = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform =
          `perspective(700px) rotateX(${(-dy * 8).toFixed(2)}deg) rotateY(${(dx * 8).toFixed(2)}deg) translateY(-4px)`;
      }, { passive: true });
      card.addEventListener("mouseleave", () => { card.style.transform = ""; });
    });

    /* Магнитные кнопки в hero — слегка тянутся к курсору */
    document.querySelectorAll(".hero__actions .btn").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const r = btn.getBoundingClientRect();
        const dx = e.clientX - r.left - r.width / 2;
        const dy = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${(dx * 0.18).toFixed(1)}px, ${(dy * 0.3).toFixed(1)}px)`;
      }, { passive: true });
      btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
    });
  }

  /* ================================================================
     13. Контактная форма — без backend (mailto)
  ================================================================ */
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    const name = document.getElementById("fName").value.trim();
    const email = document.getElementById("fEmail").value.trim();
    const message = document.getElementById("fMsg").value.trim();

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href =
      `mailto:kurmet.dosmagambetov2004@gmail.com?subject=${subject}&body=${body}`;
  });

  /* ================================================================
     14. Текущий год в футере
  ================================================================ */
  document.getElementById("year").textContent = new Date().getFullYear();
});
