// 1. Initialize Lucide Icons
lucide.createIcons();

// 2. Dark / Light Mode Toggle
const htmlEl = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    htmlEl.classList.toggle('dark');
  });
}

// 3. Spotlight Card Hover Effect
const cards = document.querySelectorAll('.spotlight-card');
document.addEventListener('mousemove', (e) => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  });
});

// 4. Scroll Reveal Animations
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// 5. Simple FAQ Accordion
const faqTriggers = document.querySelectorAll('.faq-trigger');
faqTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const content = trigger.nextElementSibling;
    const icon = trigger.querySelector('.faq-icon');
    const isOpen = !content.classList.contains('hidden');

    // Close all others
    document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
    document.querySelectorAll('.faq-icon').forEach(i => i.style.transform = 'rotate(0deg)');

    // Toggle current
    if (!isOpen) {
      content.classList.remove('hidden');
      icon.style.transform = 'rotate(45deg)';
    }
  });
});

