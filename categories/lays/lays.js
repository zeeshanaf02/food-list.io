const laysItems = document.querySelectorAll(".lays-item");

// Your actual WhatsApp number (must include country code, e.g., "918867074734" for India)
const phoneNumber = "918867074734"; 

laysItems.forEach((item) => {
  item.addEventListener("click", () => {
    const laysTextElement = item.querySelector(".lays-text");
    
    if (laysTextElement) {
      const laysName = laysTextElement.textContent.trim();
      localStorage.setItem("selectedLays", laysName); // Save selection

      if (laysName) {
        // Ensure proper URL encoding
        const message = encodeURIComponent(`I want to eat: ${laysName}`);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        // Open WhatsApp in a new tab and force reload
        window.open(whatsappURL, "_blank").focus();
      } else {
        alert("Error: Lays name not found!");
      }
    } else {
      alert("Error: Lays item not found!");
    }
  });
});
