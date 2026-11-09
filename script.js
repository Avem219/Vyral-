(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const search = document.getElementById('course-search');
  const cards = [...document.querySelectorAll('.course-card')];
  const filters = [...document.querySelectorAll('.filter-btn')];
  const note = document.getElementById('course-note');
  let activeFilter = 'all';

  function filterCourses() {
    const term = (search?.value || '').trim().toLowerCase();
    let shown = 0;
    cards.forEach(card => {
      const matchesCategory = activeFilter === 'all' || card.dataset.category === activeFilter;
      const matchesText = !term || card.textContent.toLowerCase().includes(term);
      const visible = matchesCategory && matchesText;
      card.hidden = !visible;
      if (visible) shown++;
    });
    if (note) note.textContent = shown
      ? `Showing ${shown} programme${shown === 1 ? '' : 's'} from the current website preview. Confirm the official programme list before applying.`
      : 'No matching programmes in this preview. Try a different search or filter.';
  }

  search?.addEventListener('input', filterCourses);
  filters.forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter || 'all';
    filters.forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    filterCourses();
  }));

  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('dismiss-notice')?.addEventListener('click', () => {
    document.getElementById('notice-banner')?.classList.add('dismissed');
  });

  // Avoid loading external navigation in the same tab for official university links.
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
  });
})();