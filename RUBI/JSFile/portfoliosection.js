const track = document.querySelector('.portfolio-slider'); 
const cards = document.querySelectorAll('.portfolio-card');
const next = document.querySelector('.arrow.right');
const prev = document.querySelector('.arrow.left');

let index = 0; 
const visible = window.innerWidth <= 768 ? 1 : 2; // 2 cards on desktop, 1 on mobile

function showCards() {
  cards.forEach((card, i) => {
    card.classList.remove('active');
    card.style.display = 'none';
  });

  for (let i = index; i < index + visible && i < cards.length; i++) {
    cards[i].classList.add('active');
    cards[i].style.display = 'block';
  }
}

// 👉 Show next two cards
next.addEventListener('click', () => {
  index += visible;
  if (index >= cards.length) index = 0; // Loop back to start
  showCards();
});

// 👉 Show previous two cards
prev.addEventListener('click', () => {
  index -= visible;
  if (index < 0) index = cards.length - visible;
  showCards();
});

// 👉 Optional: Auto-slide every 5s
setInterval(() => {
  index += visible;
  if (index >= cards.length) index = 0;
  showCards();
}, 5000);

// ✅ Initial render
showCards();
