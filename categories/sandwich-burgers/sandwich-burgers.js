const sandwichItems = document.querySelectorAll(".sandwich-item");

// Replace with your WhatsApp number
const phoneNumber = "918867074734"; 

sandwichItems.forEach((item) => {
  item.addEventListener("click", () => {
    const sandwichTextElement = item.querySelector(".sandwich-text");
    
    if (sandwichTextElement) {
      const sandwichName = sandwichTextElement.textContent.trim();
      localStorage.setItem("selectedSandwich", sandwichName);

      if (sandwichName) {
        const message = encodeURIComponent(`I want to eat: ${sandwichName}`);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappURL, "_blank").focus();
      } else {
        alert("Error: Sandwich name not found!");
      }
    } else {
      alert("Error: Sandwich item not found!");
    }
  });
});
