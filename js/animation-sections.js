document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
  
    const sections = document.querySelectorAll(".animate");
    sections.forEach(section => observer.observe(section));
  });
  