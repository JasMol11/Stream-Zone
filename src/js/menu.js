document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const headerMenu = document.querySelector(".header-menu");
  const navLinks = document.querySelectorAll(".nav-link"); // Seleccionar todos los enlaces del menú

  // Mostrar/ocultar el menú al hacer clic en el icono del menú
  menuIcon.addEventListener("click", () => {
    headerMenu.classList.toggle("active"); // Alterna entre mostrar/ocultar
  });

  // Ocultar el menú al hacer clic en un enlace
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (headerMenu.classList.contains("active")) {
        headerMenu.classList.remove("active"); // Oculta el menú
      }
    });
  });

  // Ocultar el menú al hacer clic fuera de él
  document.addEventListener("click", (event) => {
    if (
      !headerMenu.contains(event.target) && // Si no clickea dentro del menú
      !menuIcon.contains(event.target) && // Si no clickea en el ícono del menú
      headerMenu.classList.contains("active") // Si el menú está abierto
    ) {
      headerMenu.classList.remove("active"); // Oculta el menú
    }
  });

  // Ocultar el menú al hacer scroll
  window.addEventListener("scroll", () => {
    if (headerMenu.classList.contains("active")) {
      headerMenu.classList.remove("active"); // Oculta el menú
    }
  });
});


