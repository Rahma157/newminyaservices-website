/* ==========================================================================
   filter.js — فلترة وبحث صفحة الخدمات
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const grid          = document.getElementById('servicesGrid');
  const searchInput    = document.getElementById('serviceSearch');
  const filterChips     = document.querySelectorAll('.filter-chip');
  const resultsCount   = document.getElementById('resultsCount');
  const emptyState     = document.getElementById('emptyState');

  if (!grid) return; // هذه الصفحة ليست صفحة الخدمات

  const cards = Array.from(grid.querySelectorAll('.service-card'));
  let activeCategory = 'all';
  let activeQuery = '';

  function applyFilters() {
    let visibleCount = 0;

    cards.forEach(card => {
      const category = card.dataset.category || '';
      const name = (card.dataset.name || '').toLowerCase();

      const matchesCategory = activeCategory === 'all' || category === activeCategory;
      const matchesQuery = name.includes(activeQuery.toLowerCase());

      const isVisible = matchesCategory && matchesQuery;
      card.style.display = isVisible ? '' : 'none';
      if (isVisible) visibleCount++;
    });

    if (resultsCount) {
      resultsCount.textContent = `${visibleCount} خدمة متاحة`;
    }

    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  // فلترة حسب التصنيف
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.dataset.category;
      applyFilters();
    });
  });

  // البحث الفوري
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeQuery = e.target.value.trim();
      applyFilters();
    });
  }

  applyFilters();
});
