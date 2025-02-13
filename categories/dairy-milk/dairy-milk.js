const dairyMilkItems = document.querySelectorAll(".dairymilk-item");

// Replace with your WhatsApp number
const phoneNumber = "918867074734"; 

dairyMilkItems.forEach((item) => {
  item.addEventListener("click", () => {
    const dairyMilkTextElement = item.querySelector(".dairymilk-text");
    
    if (dairyMilkTextElement) {
      const dairyMilkName = dairyMilkTextElement.textContent.trim();
      localStorage.setItem("selectedDairyMilk", dairyMilkName);

      if (dairyMilkName) {
        const message = encodeURIComponent(`I want to order: ${dairyMilkName}`);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappURL, "_blank").focus();
      } else {
        alert("Error: Dairy Milk name not found!");
      }
    } else {
      alert("Error: Dairy Milk item not found!");
    }
  });
});
