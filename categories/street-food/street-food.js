const streetFoodItems = document.querySelectorAll(".streetfood-item");

// Replace with your WhatsApp number
const phoneNumber = "918867074734"; 

streetFoodItems.forEach((item) => {
  item.addEventListener("click", () => {
    const streetFoodTextElement = item.querySelector(".streetfood-text");
    
    if (streetFoodTextElement) {
      const streetFoodName = streetFoodTextElement.textContent.trim();
      localStorage.setItem("selectedStreetFood", streetFoodName);

      if (streetFoodName) {
        const message = encodeURIComponent(`I want to order: ${streetFoodName}`);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappURL, "_blank").focus();
      } else {
        alert("Error: Street food name not found!");
      }
    } else {
      alert("Error: Street food item not found!");
    }
  });
});
