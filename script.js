// =======================
// My Work Modal
// =======================
const workCards = document.querySelectorAll(".work-card");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalImg = document.querySelector(".modal-content img");
const modalText = document.querySelector(".modal-text");
const closeBtn = document.querySelector(".close-btn");

function openModal(card) {
  modalImg.src = card.querySelector("img").src;
  modalText.innerHTML = `<h3>${card.dataset.title}</h3>
    <p>${card.dataset.desc}</p>
    <p><strong>Price: ${card.dataset.price}</strong></p>`;
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

workCards.forEach(card => {
  card.addEventListener("click", () => openModal(card));
});

closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

// =======================
// Work Slider (with snap)
// =======================
const slider = document.querySelector(".work-slider");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

// Calculate card width + gap
const cardStyle = getComputedStyle(slider.querySelector(".work-card"));
const cardWidth = slider.querySelector(".work-card").offsetWidth;
const cardGap = parseInt(cardStyle.marginRight) || 16;
const scrollAmount = cardWidth + cardGap;

leftArrow.addEventListener("click", () => {
  slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
rightArrow.addEventListener("click", () => {
  slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

// Snap to nearest card when scroll stops
let isScrolling;
slider.addEventListener('scroll', () => {
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    const scrollLeft = slider.scrollLeft;
    const snapIndex = Math.round(scrollLeft / scrollAmount);
    slider.scrollTo({ left: snapIndex * scrollAmount, behavior: 'smooth' });
  }, 100);
});

// Arrow hover scale animation
[leftArrow, rightArrow].forEach(arrow => {
  arrow.addEventListener("mouseenter", () => arrow.style.transform = "scale(1.2)");
  arrow.addEventListener("mouseleave", () => arrow.style.transform = "scale(1)");
});

// =======================
// Fade-in sections on scroll
// =======================
const faders = document.querySelectorAll(".fade-section");
const appearOptions = { threshold: 0.3 };
const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// =======================
// Translation EN/ES
// =======================
const translateBtn = document.getElementById("translateBtn");
let isSpanish = false;

translateBtn.addEventListener("click", () => {
  isSpanish = !isSpanish;
  translateBtn.textContent = isSpanish ? "EN" : "ES";

  workCards.forEach(card => {
    if (isSpanish) {
      switch(card.dataset.title) {
        case "Spa Chair":
          card.dataset.desc = "Relájese en nuestra silla de spa premium con masaje y remojo de uñas.";
          break;
        case "Rubber Nail Set":
          card.dataset.desc = "Juego de uñas de goma flexible y elegante para un acabado natural.";
          break;
        case "Gel Polish":
          card.dataset.desc = "Esmalte en gel brillante en colores vibrantes, duradero y resistente a astillas.";
          break;
        case "Signature Nail Design":
          card.dataset.desc = "Diseños de uñas personalizados y detallados para un look único y premium.";
          break;
        case "Classic Nail Style":
          card.dataset.desc = "Estilo simple y elegante perfecto para uso diario.";
          break;
        case "Creative Nail Art":
          card.dataset.desc = "Arte de uñas creativo y único con detalles intrincados.";
          break;
        case "Professional Nail Artist Design":
          card.dataset.desc = "Arte de alta gama utilizando técnicas avanzadas y materiales premium.";
          break;
        case "Acrylic Nails":
          card.dataset.desc = "Uñas acrílicas duraderas y elegantes perfectas para diseños duraderos.";
          break;
      }
    } else {
      // Reset English
      switch(card.dataset.title) {
        case "Spa Chair":
          card.dataset.desc = "Relax in our premium spa chair with massage and a soothing nail soak.";
          break;
        case "Rubber Nail Set":
          card.dataset.desc = "Flexible, stylish rubber nail set for a natural finish.";
          break;
        case "Gel Polish":
          card.dataset.desc = "Glossy gel polish in vibrant colors, long-lasting and chip-resistant.";
          break;
        case "Signature Nail Design":
          card.dataset.desc = "Custom, detailed nail designs for a unique, premium look.";
          break;
        case "Classic Nail Style":
          card.dataset.desc = "Simple, elegant style perfect for everyday wear.";
          break;
        case "Creative Nail Art":
          card.dataset.desc = "Unique, custom creative nail art with intricate details.";
          break;
        case "Professional Nail Artist Design":
          card.dataset.desc = "High-end artistry using advanced techniques and premium materials.";
          break;
        case "Acrylic Nails":
          card.dataset.desc = "Durable, stylish acrylic nails perfect for long-lasting designs.";
          break;
      }
    }
  });
});
