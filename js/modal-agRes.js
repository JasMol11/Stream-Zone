document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const confirmationModal = document.getElementById("confirmation-modal");
    const openModalBtn = document.querySelector(".testimonials-add");
    const cancelModalBtn = modal.querySelector(".cancel-btn");
    const closeConfirmationBtn = confirmationModal.querySelector(
      ".close-confirmation-btn"
    );
    const reviewForm = document.getElementById("review-form");
    const starsContainer = document.getElementById("stars");
  
    let selectedStars = 0;
  
    // Crear estrellas dinámicamente
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("span");
      star.classList.add("star", "material-symbols-outlined");
      star.textContent = "star";
      star.dataset.value = i;
  
      star.addEventListener("click", () => {
        selectedStars = i;
        updateStars(i);
      });
  
      starsContainer.appendChild(star);
    }
  
    function updateStars(count) {
      const stars = starsContainer.querySelectorAll(".star");
      stars.forEach((star, index) => {
        if (index < count) {
          star.classList.add("selected");
        } else {
          star.classList.remove("selected");
        }
      });
    }
  
    // Abrir modal
    openModalBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });
  
    // Cerrar modal de reseñas
    cancelModalBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
  
      // Resetear el formulario y las estrellas seleccionadas
      reviewForm.reset();
      updateStars(0);
    });
  
    // Enviar formulario
    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = reviewForm.name.value.trim();
      const comment = reviewForm.comment.value.trim();
  
      if (selectedStars === 0) {
        alert("Por favor selecciona una cantidad de estrellas.");
        return;
      }
  
      // Cerrar modal de reseñas y mostrar el de confirmación
      modal.classList.add("hidden");
      confirmationModal.classList.remove("hidden");
  
      // Resetear el formulario
      reviewForm.reset();
      updateStars(0);
    });
  
    // Cerrar modal de confirmación
    closeConfirmationBtn.addEventListener("click", () => {
      confirmationModal.classList.add("hidden");
    });
  });
  