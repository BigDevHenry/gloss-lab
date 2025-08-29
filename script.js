// Fade-on-scroll animation
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-on-scroll");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    fadeElements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      if (position < windowHeight - 100) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // run once on load
});

// Smooth scroll for navbar links
document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact form (demo only)
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Show success message
    const successMsg = document.getElementById("form-success");
    successMsg.textContent = "Thank you! We'll get back to you shortly.";
    successMsg.style.display = "block";

    // Reset form
    contactForm.reset();
  });
}
