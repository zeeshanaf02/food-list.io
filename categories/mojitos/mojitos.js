const mojitoItems = document.querySelectorAll(".mojito-item");

const phoneNumber = "918867074734"; // Change to your number

mojitoItems.forEach((item) => {
  item.addEventListener("click", () => {
    const mojitoTextElement = item.querySelector(".mojito-text");
    
    if (mojitoTextElement) {
      const mojitoName = mojitoTextElement.textContent.trim();
      localStorage.setItem("selectedMojito", mojitoName);

      if (mojitoName) {
        const message = encodeURIComponent(`I want to order: ${mojitoName}`);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappURL, "_blank").focus();
      } else {
        alert("Error: Mojito name not found!");
      }
    } else {
      alert("Error: Mojito item not found!");
    }
  });
});
