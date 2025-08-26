// Modal Functionality
const workCards = document.querySelectorAll(".work-card");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-content img");
const modalText = document.querySelector(".modal-text");
const closeBtn = document.querySelector(".close-btn");

workCards.forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = card.querySelector("img").src;
    modalText.innerHTML = `<h3>${card.dataset.title}</h3>
      <p>${card.dataset.desc}</p>
      <p><strong>Price: ${card.dataset.price}</strong></p>`;
  });
});

closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => { if(e.target === modal) modal.style.display = "none"; });

// Horizontal Slider Arrows
const slider = document.querySelector(".work-slider");
document.querySelector(".arrow.left").addEventListener("click", () => { slider.scrollBy({left: -300, behavior: 'smooth'}); });
document.querySelector(".arrow.right").addEventListener("click", () => { slider.scrollBy({left: 300, behavior: 'smooth'}); });

// Spanish Translation (Titles & Descriptions)
const translateBtn = document.getElementById("translateBtn");
let isSpanish = false;
translateBtn.addEventListener("click", () => {
  isSpanish = !isSpanish;
  translateBtn.textContent = isSpanish ? "EN" : "ES";

  const translations = {
    "Welcome to Gloss Lab":"Bienvenido a Gloss Lab",
    "Elegant • Professional • Unique":"Elegante • Profesional • Único",
    "About Me":"Sobre Mí",
    "Services":"Servicios",
    "My Work":"Mi Trabajo",
    "Contact / Schedule":"Contacto / Reservas",
    "Working Hours":"Horario de Atención",
    "Monday – Friday: 10 AM – 7 PM":"Lunes – Viernes: 10 AM – 7 PM",
    "Saturday: 11 AM – 5 PM":"Sábado: 11 AM – 5 PM",
    "Sunday: Closed":"Domingo: Cerrado"
  };

  document.querySelectorAll("h1,h2,p").forEach(el => {
    if(isSpanish && translations[el.textContent]) {
      el.dataset.original = el.textContent;
      el.textContent = translations[el.textContent];
    } else if(!isSpanish && el.dataset.original) {
      el.textContent = el.dataset.original;
    }
  });

  // Translate work card descriptions
  document.querySelectorAll(".work-card").forEach(card => {
    if(isSpanish) {
      const spanishDesc = {
        "Spa Chair":"Relájese en nuestra silla de spa premium con masaje y un remojo relajante.",
        "Rubber Nail Set":"Juego de uñas de goma duradero y flexible que combina estilo y comodidad.",
        "Gel Polish":"Esmalte en gel resistente a astillas disponible en muchos colores.",
        "Signature Nail Design":"Diseño de uñas personalizado y lujoso con acabados premium.",
        "Classic Nail Style":"Estilo simple y elegante perfecto para uso diario.",
        "Creative Nail Art":"Arte de uñas creativo único con detalles intrincados.",
        "Professional Nail Artist Design":"Alta gama de arte usando técnicas avanzadas y materiales premium."
      };
      card.dataset.desc = spanishDesc[card.dataset.title] || card.dataset.desc;
    } else {
      const englishDesc = {
        "Spa Chair":"Relax in our premium spa chair with massage and a soothing nail soak for total comfort.",
        "Rubber Nail Set":"Durable and flexible rubber nail set that combines style with comfort.",
        "Gel Polish":"Chip-resistant gel polish available in a wide range of colors.",
        "Signature Nail Design":"Luxurious, detailed custom nail design with premium finishes.",
        "Classic Nail Style":"Simple, elegant style perfect for everyday wear.",
        "Creative Nail Art":"Unique, custom creative nail art with intricate details.",
        "Professional Nail Artist Design":"High-end artistry using advanced techniques and premium materials."
      };
      card.dataset.desc = englishDesc[card.dataset.title] || card.dataset.desc;
    }
  });
});

// Fade-in sections on scroll
const fadeSections = document.querySelectorAll("section, .hero-text");
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("visible");
    else entry.target.classList.remove("visible");
  });
},{ threshold: 0.1 });

fadeSections.forEach(section => section.classList.add("fade-section"));
fadeSections.forEach(section => fadeObserver.observe(section));
