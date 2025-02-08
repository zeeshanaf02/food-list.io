const bingoItems = document.querySelectorAll(".bingo-item");

// Replace with your actual WhatsApp number (include country code)
const phoneNumber = "918867074734"; 

bingoItems.forEach((item) => {
  item.addEventListener("click", () => {
    const bingoTextElement = item.querySelector(".bingo-text");
    
    // Ensure the text is correctly extracted
    if (bingoTextElement) {
      const bingoName = bingoTextElement.textContent.trim();
      localStorage.setItem("selectedBingo", bingoName); // Save selection
      
      if (bingoName) {
        // Construct WhatsApp URL with properly formatted message
        const message = encodeURIComponent(`I want to eat: ${bingoName}`);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        // Open WhatsApp with the message
        window.open(whatsappURL, "_blank");
      } else {
        alert("Error: Bingo name not found!");
      }
    } else {
      alert("Error: Bingo item not found!");
    }
  });
});
