const vegItems = document.querySelectorAll(".veg-item");

// Replace with your WhatsApp number
const phoneNumber = "918867074734"; 

vegItems.forEach((item) => {
  item.addEventListener("click", () => {
    const vegTextElement = item.querySelector(".veg-text");
    
    if (vegTextElement) {
      const vegName = vegTextElement.textContent.trim();
      localStorage.setItem("selectedVeg", vegName);

      if (vegName) {
        const message = encodeURIComponent(`I want to order: ${vegName}`);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappURL, "_blank").focus();
      } else {
        alert("Error: Veg dish name not found!");
      }
    } else {
      alert("Error: Veg item not found!");
    }
  });
});
