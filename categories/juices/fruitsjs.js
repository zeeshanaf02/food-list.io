const juiceItems = document.querySelectorAll(".juice-item");

// Your actual WhatsApp number (include country code, e.g., "918867074734" for India)
const phoneNumber = "918867074734"; 

juiceItems.forEach((item) => {
  item.addEventListener("click", () => {
    const juiceTextElement = item.querySelector(".juice-text");
    
    if (juiceTextElement) {
      const juiceName = juiceTextElement.textContent.trim();
      localStorage.setItem("selectedJuice", juiceName); // Save selection

      if (juiceName) {
        // Ensure proper URL encoding
        const message = encodeURIComponent(`I want to drink: ${juiceName}`);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        // Open WhatsApp with the message
        window.open(whatsappURL, "_blank").focus();
      } else {
        alert("Error: Juice name not found!");
      }
    } else {
      alert("Error: Juice item not found!");
    }
  });
});
