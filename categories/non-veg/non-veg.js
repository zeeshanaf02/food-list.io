const nonVegItems = document.querySelectorAll(".nonveg-item");

// Replace with your WhatsApp number
const phoneNumber = "918867074734"; 

nonVegItems.forEach((item) => {
  item.addEventListener("click", () => {
    const nonVegTextElement = item.querySelector(".nonveg-text");
    
    if (nonVegTextElement) {
      const nonVegName = nonVegTextElement.textContent.trim();
      localStorage.setItem("selectedNonVeg", nonVegName);

      if (nonVegName) {
        const message = encodeURIComponent(`I want to order: ${nonVegName}`);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappURL, "_blank").focus();
      } else {
        alert("Error: Non-Veg dish name not found!");
      }
    } else {
      alert("Error: Non-Veg item not found!");
    }
  });
});
