// Animation for experience cards
const cards = document.querySelectorAll('.experience-card img');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.08) rotate(1deg)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1) rotate(0deg)';
  });
});
