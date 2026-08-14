/* ==========================================================================
   booking.js — نافذة حجز الخدمة (Modal) + التحقق من الإدخال
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const overlay      = document.getElementById('bookingModal');
  const openButtons   = document.querySelectorAll('[data-open-booking]');
  const closeButtons  = document.querySelectorAll('[data-close-booking]');
  const form          = document.getElementById('bookingForm');
  const formStep      = document.getElementById('bookingFormStep');
  const successStep   = document.getElementById('bookingSuccessStep');
  const serviceSelect = document.getElementById('bookingService');

  if (!overlay) return; // لا يوجد Modal في هذه الصفحة

  function openModal(serviceName) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (formStep) formStep.style.display = 'block';
    if (successStep) successStep.style.display = 'none';
    if (serviceName && serviceSelect) {
      const optionExists = Array.from(serviceSelect.options).some(o => o.value === serviceName);
      if (optionExists) serviceSelect.value = serviceName;
    }
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.serviceName));
  });

  closeButtons.forEach(btn => btn.addEventListener('click', closeModal));

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });

  /* ---------- التحقق من صحة نموذج الحجز ---------- */
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const fields = [
        { id: 'bookingName', test: v => v.trim().length >= 3, msg: 'برجاء إدخال اسم صحيح (3 أحرف على الأقل)' },
        { id: 'bookingPhone', test: v => /^01[0-2,5]{1}[0-9]{8}$/.test(v.trim()), msg: 'رقم الهاتف غير صحيح (مثال: 01012345678)' },
        { id: 'bookingService', test: v => v !== '', msg: 'برجاء اختيار الخدمة' },
        { id: 'bookingDate', test: v => v !== '', msg: 'برجاء اختيار التاريخ' },
        { id: 'bookingTime', test: v => v !== '', msg: 'برجاء اختيار الوقت' },
      ];

      fields.forEach(field => {
        const input = document.getElementById(field.id);
        if (!input) return;
        const group = input.closest('.form-group');
        const ok = field.test(input.value);
        if (group) group.classList.toggle('has-error', !ok);
        if (!ok) isValid = false;
      });

      if (!isValid) return;

      // نجاح الحجز — إظهار رسالة التأكيد
      if (formStep) formStep.style.display = 'none';
      if (successStep) successStep.style.display = 'block';
      form.reset();

      setTimeout(() => {
        closeModal();
      }, 3200);
    });

    // إزالة رسالة الخطأ فور الكتابة
    form.querySelectorAll('.form-control').forEach(input => {
      input.addEventListener('input', () => {
        input.closest('.form-group')?.classList.remove('has-error');
      });
    });
  }
});
