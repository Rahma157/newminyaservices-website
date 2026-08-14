/* ==========================================================================
   service-details.js — يقرأ id الخدمة من رابط الصفحة (?id=...)
   ويملأ صفحة service-details.html ببيانات المكان المطلوب من servicesData
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('detailsRoot');
  if (!root) return; // هذه الصفحة ليست صفحة تفاصيل الخدمة

  const params = new URLSearchParams(window.location.search);
  const serviceId = params.get('id');
  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    root.innerHTML = `
      <section style="padding:110px 0 90px">
        <div class="container">
          <div class="empty-state">
            <i class="bi bi-exclamation-circle"></i>
            <h4>لم يتم العثور على هذه الخدمة</h4>
            <p>الرابط غير صحيح أو الخدمة غير متاحة حاليًا.</p>
            <a href="services.html" class="btn btn-primary mt-3">تصفح كل الخدمات</a>
          </div>
        </div>
      </section>`;
    return;
  }

  // العنوان + الـ breadcrumb
  document.title = service.name + ' | تفاصيل الخدمة';
  document.getElementById('breadcrumbName').textContent = service.name;

  // صورة الهيدر
  const heroImg = document.getElementById('detailsHeroImg');
  heroImg.src = service.image;
  heroImg.alt = service.name;

  // بطاقة العنوان
  document.getElementById('detailsBadge').textContent = service.category;
  document.getElementById('detailsName').textContent = service.name;
  document.getElementById('detailsRating').setAttribute('data-rating', service.rating);

  // أزرار الحجز (فوق وفي الشريط الجانبي)
  document.querySelectorAll('[data-open-booking]').forEach(btn => {
    btn.setAttribute('data-service-name', service.name);
  });

  // نبذة عن الخدمة
  document.getElementById('detailsDescription').textContent = service.description;

  // معرض الصور
  const galleryEls = document.querySelectorAll('#detailsGallery img');
  galleryEls.forEach((img, i) => {
    if (service.gallery[i]) {
      img.src = service.gallery[i];
      img.alt = service.name;
    }
  });

  // معلومات الخدمة (العنوان، الهاتف، الساعات، السعر)
  document.getElementById('detailsAddress').textContent = service.address;
  document.getElementById('detailsPhone').textContent = service.phone;
  document.getElementById('detailsHours').textContent = service.hours;
  document.getElementById('detailsPriceLabel').textContent = service.priceLabel;
  document.getElementById('detailsPriceValue').textContent = service.priceValue;

  // تعبئة قائمة "اختر الخدمة" في نافذة الحجز بكل الخدمات + تحديد الخدمة الحالية
  const select = document.getElementById('bookingService');
  if (select) {
    select.innerHTML = '<option value="">-- اختر الخدمة --</option>';
    Object.values(servicesData).forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.name;
      opt.textContent = s.name;
      if (s.name === service.name) opt.selected = true;
      select.appendChild(opt);
    });
  }
});
