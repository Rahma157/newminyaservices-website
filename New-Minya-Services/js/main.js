/* ==========================================================================
   main.js — سلوكيات عامة: التحميل، القائمة، التمرير، الرجوع للأعلى
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. إخفاء شاشة التحميل ---------- */
  const loader = document.getElementById('page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('loaded'), 350);
    });
    // حماية في حال تأخر الحدث load
    setTimeout(() => loader.classList.add('loaded'), 1800);
  }

  /* ---------- 2. تأثير الهيدر عند التمرير ---------- */
  const header = document.querySelector('.site-header');
  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 20;
    if (header) header.classList.toggle('scrolled', scrolled);
    if (backToTop) backToTop.classList.toggle('show', window.scrollY > 500);
  });

  /* ---------- 3. قائمة الجوال ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      const icon = navToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('bi-list');
        icon.classList.toggle('bi-x-lg');
      }
    });
  }

  /* ---------- 4. تحديد الرابط النشط في القائمة ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) link.classList.add('active');
  });

  /* ---------- 5. زر الرجوع للأعلى ---------- */
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- 6. Scroll Reveal بسيط باستخدام IntersectionObserver ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('revealed'));
  }

  /* ---------- 7. تفعيل مؤشرات النجوم للتقييم بشكل ديناميكي (اختياري) ---------- */
  document.querySelectorAll('[data-rating]').forEach(el => {
    const rating = parseFloat(el.dataset.rating) || 0;
    const full = Math.floor(rating);
    let html = '';
    for (let i = 0; i < full; i++) html += '<i class="bi bi-star-fill"></i>';
    if (rating - full >= 0.5) html += '<i class="bi bi-star-half"></i>';
    const empty = 5 - Math.ceil(rating);
    for (let i = 0; i < empty; i++) html += '<i class="bi bi-star"></i>';
    el.innerHTML = html + ` <span>${rating.toFixed(1)}</span>`;
  });

});

/* ---------- دوال عامة تستخدم عبر أكثر من صفحة ---------- */

// تبديل عرض/إخفاء كلمة المرور
function togglePassword(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';
  const icon = btn.querySelector('i');
  if (icon) {
    icon.classList.toggle('bi-eye', !isPassword);
    icon.classList.toggle('bi-eye-slash', isPassword);
  }
}
