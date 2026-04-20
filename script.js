// Nav background on scroll
const nav = document.getElementById('nav');
const toggleScrolled = () => {
  if (window.scrollY > 20) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', toggleScrolled, { passive: true });
toggleScrolled();

// Mobile menu
const toggle = document.getElementById('nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Fecha menu ao clicar num link
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Reveal on scroll (IntersectionObserver)
const revealTargets = document.querySelectorAll('.hero-inner > *, .section-head, .about-grid > *, .skill-card, .project, .project-soon, .contact-grid > *');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
);
revealTargets.forEach((el) => io.observe(el));
