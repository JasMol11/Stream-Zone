// Función para realizar el scroll suave a una sección específica
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId); // Seleccionar la sección por su ID
  if (section) {
    const offsetTop = section.offsetTop; // Obtener la posición superior de la sección
    window.scrollTo({
      top: offsetTop - 100, // Ajustar 100px por el encabezado fijo
      behavior: "smooth", // Movimiento suave
    });
  }
}

// Selección de enlaces del header
const links = {
  home: document.querySelector('.nav-link[href="#Home"]'),
  services: document.querySelector('.nav-link[href="#Services"]'),
  reviews: document.querySelector('.nav-link[href="#reviews"]'),
  faqs: document.querySelector('.nav-link[href="#faqs"]'),
};

// Selección del logo del header
const logo = document.querySelector(".header-logo");

// Selección de enlaces del footer
const footerLinks = {
  home: document.querySelector('.footer-link[href="#Home"]'),
  services: document.querySelector('.footer-link[href="#Services"]'),
  reviews: document.querySelector('.footer-link[href="#reviews"]'),
  faqs: document.querySelector('.footer-link[href="#faqs"]'),
};

// Selección del logo del footer
const footerLogo = document.querySelector(".footer-logo");

// Asignar eventos de clic a los enlaces del header
links.home.addEventListener("click", (event) => {
  event.preventDefault();
  scrollToSection("#Home"); // Ir a la sección "Home"
});

links.services.addEventListener("click", (event) => {
  event.preventDefault();
  scrollToSection("#Services"); // Ir a la sección "Servicios"
});

links.reviews.addEventListener("click", (event) => {
  event.preventDefault();
  scrollToSection("#reviews"); // Ir a la sección "Reseñas"
});

links.faqs.addEventListener("click", (event) => {
  event.preventDefault();
  scrollToSection("#faqs"); // Ir a la sección "Preguntas Frecuentes"
});

// Asignar eventos de clic al logo del header
logo.addEventListener("click", (event) => {
  event.preventDefault();
  scrollToSection("#Home"); // Ir a la sección "Home" cuando se hace clic en el logo
});

// Asignar eventos de clic a los enlaces del footer
footerLinks.home.addEventListener("click", (event) => {
  event.preventDefault();
  scrollToSection("#Home"); // Ir a la sección "Home"
});

footerLinks.services.addEventListener("click", (event) => {
  event.preventDefault();
  scrollToSection("#Services"); // Ir a la sección "Servicios"
});

footerLinks.reviews.addEventListener("click", (event) => {
  event.preventDefault();
  scrollToSection("#reviews"); // Ir a la sección "Reseñas"
});

footerLinks.faqs.addEventListener("click", (event) => {
  event.preventDefault();
  scrollToSection("#faqs"); // Ir a la sección "Preguntas Frecuentes"
});

// Asignar evento de clic al logo del footer
footerLogo.addEventListener("click", (event) => {
  event.preventDefault();
  scrollToSection("#Home"); // Ir a la sección "Home" cuando se hace clic en el logo
});
