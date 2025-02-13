const icecreamItems = document.querySelectorAll(".icecream-item");

// Replace with your WhatsApp number
const phoneNumber = "918867074734"; 

icecreamItems.forEach((item) => {
  item.addEventListener("click", () => {
    const icecreamTextElement = item.querySelector(".icecream-text");
    
    if (icecreamTextElement) {
      const icecreamName = icecreamTextElement.textContent.trim();
      localStorage.setItem("selectedIceCream", icecreamName);

      if (icecreamName) {
        const message = encodeURIComponent(`I want to order: ${icecreamName}`);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappURL, "_blank").focus();
      } else {
        alert("Error: Ice cream name not found!");
      }
    } else {
      alert("Error: Ice cream item not found!");
    }
  });
});
