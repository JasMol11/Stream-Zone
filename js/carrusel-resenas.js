document.addEventListener("DOMContentLoaded", () => {
  let autoplayDisabled = false; // Bandera para deshabilitar permanentemente el autoplay

  const swiper = new Swiper(".card-wrapper", {
    loop: true,
    spaceBetween: 30,

    // Paginación
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    // Botones de navegación
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
      },
    },

    // Reproducción automática
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });

  // Función para detener autoplay y deshabilitarlo permanentemente
  function disableAutoplay() {
    swiper.autoplay.stop();
    autoplayDisabled = true;
  }

  // Detectar interacción manual (drag o swipe)
  swiper.on("touchMove", disableAutoplay);

  // Detectar cambio de slide (manual o automático) y aplicar lógica de autoplay
  swiper.on("slideChange", () => {
    if (autoplayDisabled) {
      swiper.autoplay.stop();
    }
  });

  // Desactivar autoplay al usar botones de navegación
  const navigationButtons = document.querySelectorAll(
    ".swiper-button-prev, .swiper-button-next"
  );
  navigationButtons.forEach((button) => {
    button.addEventListener("click", disableAutoplay);
  });

  // Desactivar autoplay al hacer clic en la paginación
  const pagination = document.querySelector(".swiper-pagination");
  pagination.addEventListener("click", disableAutoplay);

  // Pausar/reanudar autoplay al hacer hover sobre las tarjetas
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  swiperWrapper.addEventListener("mouseenter", () => {
    if (!autoplayDisabled) {
      swiper.autoplay.stop();
    }
  });

  swiperWrapper.addEventListener("mouseleave", () => {
    if (!autoplayDisabled) {
      swiper.autoplay.start();
    }
  });

  // Controlar autoplay al abrir/cerrar modales
  const modal = document.getElementById("modal");
  const confirmationModal = document.getElementById("confirmation-modal");
  const openModalBtn = document.querySelector(".testimonials-add");
  const cancelModalBtn = modal.querySelector(".cancel-btn");
  const closeConfirmationBtn = confirmationModal.querySelector(
    ".close-confirmation-btn"
  );

  const pauseAutoplayForModal = () => swiper.autoplay.stop();
  const resumeAutoplayAfterModal = () => {
    // Reactiva autoplay temporalmente al cerrar el modal
    swiper.autoplay.start();
    autoplayDisabled = false; // Resetear la bandera
  };

  openModalBtn.addEventListener("click", pauseAutoplayForModal);

  cancelModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    resumeAutoplayAfterModal();
  });

  closeConfirmationBtn.addEventListener("click", () => {
    confirmationModal.classList.add("hidden");
    resumeAutoplayAfterModal();
  });
});
