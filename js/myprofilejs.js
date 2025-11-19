// ========== FADE-IN ON SCROLL ==========
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// ========== FLOATING FIRE ANIMATION ==========
const fires = document.querySelectorAll('.floating-fire .fire');

fires.forEach((fire, index) => {
  const duration = 600 + Math.random() * 2; // 6-8s
  const delay = index * 1.5; // Stagger
  fire.style.top = Math.random() * 80 + '%'; // Random top
  fire.style.left = Math.random() * 80 + '%'; // Random left
  fire.style.animation = `floatFire ${duration}s ${delay}s infinite ease-in-out`;
});

// ========== PARALLAX BACKGROUND ==========
const parallax = document.querySelector('.parallax-bg');

window.addEventListener('scroll', () => {
  const offset = window.pageYOffset;
  if (parallax) {
    parallax.style.transform = `translateY(${offset * 0.1}px)`; // More subtle
  }
});

// ========== EXPAND CARD FUNCTION ==========
function expandCard(card) {
  card.classList.toggle('expanded');
}

// ========== STICKY HEADER FADE ==========
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = 'rgba(17,17,17,1)'; // Solid on scroll
  } else {
    header.style.background = 'rgba(17,17,17,0.9)';
  }
});