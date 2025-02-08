const chatItems = document.querySelectorAll(".chat-item");

// Your actual WhatsApp number (include country code, e.g., "918867074734" for India)
const phoneNumber = "918867074734"; 

chatItems.forEach((item) => {
  item.addEventListener("click", () => {
    const chatTextElement = item.querySelector(".chat-text");
    
    if (chatTextElement) {
      const chatName = chatTextElement.textContent.trim();
      localStorage.setItem("selectedChat", chatName); // Save selection

      if (chatName) {
        // Ensure proper URL encoding
        const message = encodeURIComponent(`I want to eat: ${chatName}`);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        // Open WhatsApp with the message
        window.open(whatsappURL, "_blank").focus();
      } else {
        alert("Error: Chaat name not found!");
      }
    } else {
      alert("Error: Chaat item not found!");
    }
  });
});
