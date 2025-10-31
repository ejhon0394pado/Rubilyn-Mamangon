const services = document.querySelectorAll('.service-box');
const leftBtn = document.querySelector('.service-arrow.left');
const rightBtn = document.querySelector('.service-arrow.right');
const dotsContainer = document.querySelector('.service-dots');
let serviceIndex = 0;

// Generate dots dynamically
services.forEach((_, i) => {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.service-dots span');

// Function to show a service
function showService(index) {
  services.forEach((box, i) => {
    box.classList.toggle('active', i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

// Navigation
rightBtn.addEventListener('click', () => {
  serviceIndex = (serviceIndex + 1) % services.length;
  showService(serviceIndex);
});

leftBtn.addEventListener('click', () => {
  serviceIndex = (serviceIndex - 1 + services.length) % services.length;
  showService(serviceIndex);
});

// Dot click navigation
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    serviceIndex = i;
    showService(serviceIndex);
  });
});

// Auto-slide every 5 seconds
setInterval(() => {
  serviceIndex = (serviceIndex + 1) % services.length;
  showService(serviceIndex);
}, 5000);



 // === PARTICLE BACKGROUND SCRIPT ===
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

let particles = [];
const numParticles = 60; // adjust density

// Resize canvas
function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Create particles
function createParticles() {
  particles = [];
  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.6,
      speedY: (Math.random() - 0.5) * 0.6,
      color: Math.random() > 0.5 ? "#ff0066" : "#00c3ff"
    });
  }
}
createParticles();

// Animate particles
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;

    // Bounce off edges
    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

    // Draw particle
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.shadowBlur = 10;
    ctx.shadowColor = p.color;
    ctx.fill();
  });

  requestAnimationFrame(animate);
}
animate();