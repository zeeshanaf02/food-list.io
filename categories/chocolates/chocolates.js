const chocolateItems = document.querySelectorAll(".chocolates-item");

// Replace with your WhatsApp number
const phoneNumber = "918867074734"; 

chocolateItems.forEach((item) => {
  item.addEventListener("click", () => {
    const chocolateTextElement = item.querySelector(".chocolates-text");
    
    if (chocolateTextElement) {
      const chocolateName = chocolateTextElement.textContent.trim();
      localStorage.setItem("selectedChocolate", chocolateName);

      if (chocolateName) {
        const message = encodeURIComponent(`I want to order: ${chocolateName}`);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappURL, "_blank").focus();
      } else {
        alert("Error: Chocolate name not found!");
      }
    } else {
      alert("Error: Chocolate item not found!");
    }
  });
});
