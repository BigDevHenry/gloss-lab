// --------------------
// Modal Functionality
// --------------------
const workCards = document.querySelectorAll(".work-card");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-content img");
const modalText = document.querySelector(".modal-text");
const closeBtn = document.querySelector(".close-btn");

workCards.forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "flex";
    modal.style.opacity = 0;
    modalImg.src = card.querySelector("img").src;
    modalText.innerHTML = `<h3>${card.dataset.title}</h3>
      <p>${card.dataset.desc}</p>
      <p><strong>Price: ${card.dataset.price}</strong></p>`;
    // Fade in
    setTimeout(() => { modal.style.opacity = 1; }, 50);
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.opacity = 0;
  setTimeout(() => { modal.style.display = "none"; }, 200);
});
window.addEventListener("click", e => {
  if(e.target === modal) {
    modal.style.opacity = 0;
    setTimeout(() => { modal.style.display = "none"; }, 200);
  }
});

// --------------------
// Horizontal Work Slider
// --------------------
const slider = document.querySelector(".work-slider");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

leftArrow.addEventListener("click", () => {
  slider.scrollBy({ left: -250, behavior: "smooth" });
});
rightArrow.addEventListener("click", () => {
  slider.scrollBy({ left: 250, behavior: "smooth" });
});

// --------------------
// Scroll Fade-In Effect
// --------------------
const sections = document.querySelectorAll("section, .hero-text");

const fadeOnScroll = () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100 && rect.bottom > 0) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0px)";
      section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    } else {
      section.style.opacity = 0;
      section.style.transform = "translateY(50px)";
    }
  });
};

window.addEventListener("scroll", fadeOnScroll);
window.addEventListener("load", fadeOnScroll);

// --------------------
// Spanish Translation Toggle
// --------------------
const translateBtn = document.getElementById("translateBtn");
let isSpanish = false;

const translations = {
  "Welcome to Gloss Lab": "Bienvenido a Gloss Lab",
  "Elegant • Professional • Unique": "Elegante • Profesional • Único",
  "About Me": "Sobre Mí",
  "Services": "Servicios",
  "Working Hours": "Horario de Atención",
  "My Work": "Mi Trabajo",
  "Contact / Schedule": "Contacto / Agenda",
  "Monday – Friday: 10 AM – 7 PM": "Lunes – Viernes: 10 AM – 7 PM",
  "Saturday: 11 AM – 5 PM": "Sábado: 11 AM – 5 PM",
  "Sunday: Closed": "Domingo: Cerrado"
};

translateBtn.addEventListener("click", () => {
  isSpanish = !isSpanish;
  translateBtn.textContent = isSpanish ? "EN" : "ES";

  // Translate section titles and paragraphs
  document.querySelectorAll("h1,h2,p,button").forEach(el => {
    if(isSpanish && translations[el.textContent]) {
      el.dataset.original = el.textContent;
      el.textContent = translations[el.textContent];
    } else if(!isSpanish && el.dataset.original) {
      el.textContent = el.dataset.original;
    }
  });

  // Translate work card descriptions
  workCards.forEach(card => {
    if(isSpanish) {
      const t = {
        "Spa Chair": "Relájese en nuestra silla de spa premium con masaje y un remojo de uñas relajante.",
        "Rubber Nail Set": "Juego de uñas de goma duradero y flexible que combina estilo y comodidad.",
        "Gel Polish": "Esmalte en gel resistente a astillas disponible en múltiples colores.",
        "Acrylic Nails": "Uñas acrílicas personalizadas para un look duradero y elegante.",
        "Signature Nail Design": "Diseño de uñas personalizado y lujoso con acabados premium.",
        "Classic Nail Style": "Estilo simple y elegante perfecto para el uso diario.",
        "Creative Nail Art": "Arte de uñas creativo y único con detalles intrincados.",
        "Professional Nail Artist Design": "Arte de alta gama usando técnicas avanzadas y materiales premium."
      };
      if(t[card.dataset.title]) card.dataset.desc = t[card.dataset.title];
    } else {
      const englishDesc = {
        "Spa Chair": "Relax in our premium spa chair with massage and a soothing nail soak.",
        "Rubber Nail Set": "Durable and flexible rubber nail set that combines style and comfort.",
        "Gel Polish": "Chip-resistant gel polish available in multiple colors.",
        "Acrylic Nails": "Custom acrylic nails for a durable, stylish look.",
        "Signature Nail Design": "Luxurious custom nail design with premium finishes.",
        "Classic Nail Style": "Simple and elegant style perfect for everyday wear.",
        "Creative Nail Art": "Unique, custom creative nail art with intricate details.",
        "Professional Nail Artist Design": "High-end artistry using advanced techniques and premium materials."
      };
      if(englishDesc[card.dataset.title]) card.dataset.desc = englishDesc[card.dataset.title];
    }
  });
});
