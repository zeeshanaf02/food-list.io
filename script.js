document.addEventListener("DOMContentLoaded", () => {
  const categoryCards = document.querySelectorAll(".category-card");

  // Slow Entrance Animation with Trail Effect
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.3 });

  categoryCards.forEach(card => {
    observer.observe(card);
  });

  // Click Function for Redirecting
  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.getAttribute("data-category");
      window.location.href = `categories/${category}/${category}.html`;
    });
  });
});
