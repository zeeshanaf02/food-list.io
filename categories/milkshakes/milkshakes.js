const milkshakeItems = document.querySelectorAll(".milkshake-item");

// Replace with your WhatsApp number
const phoneNumber = "918867074734"; 

milkshakeItems.forEach((item) => {
  item.addEventListener("click", () => {
    const milkshakeTextElement = item.querySelector(".milkshake-text");
    
    if (milkshakeTextElement) {
      const milkshakeName = milkshakeTextElement.textContent.trim();
      localStorage.setItem("selectedMilkshake", milkshakeName);

      if (milkshakeName) {
        const message = encodeURIComponent(`I want to order: ${milkshakeName}`);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappURL, "_blank").focus();
      } else {
        alert("Error: Milkshake name not found!");
      }
    } else {
      alert("Error: Milkshake item not found!");
    }
  });
});
