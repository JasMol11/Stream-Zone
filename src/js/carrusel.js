let autoplayDisabled = false; // Bandera para deshabilitar permanentemente el autoplay

const swiper = new Swiper(".sectServices-carousel", {
  loop: true,
  slidesPerView: "auto", // Respetar el ancho definido en CSS

  // Breakpoints para ajustar `spaceBetween` según el tamaño de pantalla
  breakpoints: {
    320: {
      // Móviles pequeños
      // spaceBetween: 150,
      spaceBetween: 150,
      centeredSlides: true, // Centra las tarjetas visibles
    },
    768: {
      // Tablets
      spaceBetween: 35,
      centeredSlides: false, // Centra las tarjetas visibles
    },
    1024: {
      // Desktop
      // spaceBetween: 68,
      spaceBetween: 60,
      centeredSlides: false, // Centra las tarjetas visibles
    },
    1440: {
      // Desktop
      spaceBetween: 40,
      centeredSlides: false, // Centra las tarjetas visibles
    },
  },

  // Paginación
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Reproducción automática
  autoplay: {
    delay: 900, // Tiempo entre cambios (en milisegundos)
    disableOnInteraction: false, // No detener al interactuar inicialmente
  },

  // Habilitar la funcionalidad de deslizamiento manual
  touchReleaseOnEdges: true,
  grabCursor: true, // Cambiar el cursor al estilo "arrastrar"
});

// Función para detener autoplay y deshabilitarlo permanentemente
function disableAutoplay() {
  swiper.autoplay.stop();
  autoplayDisabled = true;
}

// Detectar interacción manual (touch o swipe)
swiper.on("touchMove", disableAutoplay);

// Detectar cambio de slide (independientemente de si es manual o automático)
swiper.on("slideChange", () => {
  if (autoplayDisabled) {
    swiper.autoplay.stop();
  }
});

// Desactivar autoplay y establecer la bandera al usar botones de navegación
document
  .querySelector(".swiper-button-next")
  .addEventListener("click", disableAutoplay);
document
  .querySelector(".swiper-button-prev")
  .addEventListener("click", disableAutoplay);

// Desactivar autoplay al hacer hover sobre las diapositivas
const slidesContainer = document.querySelector(".sectServices-carousel");
slidesContainer.addEventListener("mouseenter", () => {
  if (!autoplayDisabled) {
    swiper.autoplay.stop();
  }
});

slidesContainer.addEventListener("mouseleave", () => {
  // Solo reanudar autoplay si no se ha deshabilitado permanentemente
  if (!autoplayDisabled) {
    swiper.autoplay.start();
  }
});
