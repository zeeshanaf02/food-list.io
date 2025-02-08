document.querySelectorAll(".category-card").forEach((card) => {
  card.addEventListener("click", () => {
    const category = card.getAttribute("data-category");
    window.location.href = `categories/${category}/${category}.html`;
  });
});
