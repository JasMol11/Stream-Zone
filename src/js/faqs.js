const faqs = document.querySelectorAll(".faqs-item");

faqs.forEach((faq) => {
  const question = faq.querySelector(".faqs-item-question");
  const answer = faq.querySelector(".faqs-item-answer");

  question.addEventListener("click", () => {
    if (faq.classList.contains("active")) {
      faq.classList.remove("active");
      answer.style.maxHeight = null;
    } else {
      faqs.forEach((otherFaq) => {
        if (otherFaq.classList.contains("active")) {
          otherFaq.classList.remove("active");
          otherFaq.querySelector(".faqs-item-answer").style.maxHeight = null;
        }
      });

      faq.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// BOTON MOSTRAR MÁS

const showMoreBtn = document.getElementById("show-more-btn");

// Configuración inicial
let itemsToShow = 6;
const itemsIncrement = 6;

// Oculta todas las preguntas inicialmente
faqs.forEach((faq, index) => {
  if (index < itemsToShow) {
    faq.style.display = "block";
  } else {
    faq.style.display = "none";
  }
});

// Maneja el evento del botón "Mostrar más"
showMoreBtn.addEventListener("click", () => {
  itemsToShow += itemsIncrement;

  faqs.forEach((faq, index) => {
    if (index < itemsToShow) {
      if (faq.style.display === "none") {
        faq.style.display = "block";
        faq.classList.add("fade-in"); // Añade la clase de animación
        setTimeout(() => faq.classList.remove("fade-in"), 500); // Remueve la clase después de la animación
      }
    }
  });

  // Oculta el botón si se muestran todas las preguntas
  if (itemsToShow >= faqs.length) {
    showMoreBtn.style.display = "none";
  }
});
