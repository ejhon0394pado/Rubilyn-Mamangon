
  // ===== TESTIMONIAL SLIDER =====
const testimonials = document.querySelectorAll(".testimonial");
let currentTestimonial = 0;

function showNextTestimonial() {
  testimonials[currentTestimonial].classList.remove("active");
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].classList.add("active");
}

setInterval(showNextTestimonial, 4000); // change every 4 seconds


  // ===== TESTIMONIAL SLIDER (inside contact) =====
const testimonialBoxes = document.querySelectorAll('.testimonial-box');
let currentBox = 0;

function rotateTestimonials() {
  testimonialBoxes[currentBox].classList.remove('active');
  currentBox = (currentBox + 1) % testimonialBoxes.length;
  testimonialBoxes[currentBox].classList.add('active');
}

setInterval(rotateTestimonials, 4000); // changes every 4 seconds

// ===== SLIDING TESTIMONIALS =====
const testimonialsContainer = document.querySelector('.testimonials-container');
const boxes = Array.from(testimonialsContainer.children);
const totalBoxes = boxes.length;

// Wrap boxes inside a sliding track
const track = document.createElement('div');
track.classList.add('testimonial-track');
boxes.forEach(box => track.appendChild(box));
testimonialsContainer.appendChild(track);

let index = 0;

// Create navigation arrows
const prevBtn = document.createElement('button');
prevBtn.className = 'testimonial-nav prev';
prevBtn.innerHTML = '‹';
const nextBtn = document.createElement('button');
nextBtn.className = 'testimonial-nav next';
nextBtn.innerHTML = '›';
testimonialsContainer.appendChild(prevBtn);
testimonialsContainer.appendChild(nextBtn);

function slideTo(idx) {
  track.style.transform = `translateX(-${idx * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % totalBoxes;
  slideTo(index);
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + totalBoxes) % totalBoxes;
  slideTo(index);
});

// Auto-slide every 4 seconds
setInterval(() => {
  index = (index + 1) % totalBoxes;
  slideTo(index);
}, 4000);

