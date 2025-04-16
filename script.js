const cardsContainer = document.getElementById("cards");

const updateMousePosition = (x, y) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect();
    const posX = x - rect.left;
    const posY = y - rect.top;
    card.style.setProperty("--mouse-x", `${posX}px`);
    card.style.setProperty("--mouse-y", `${posY}px`);
  }
};

// Mouse move event for desktop devices
cardsContainer.onmousemove = (e) => {
  updateMousePosition(e.clientX, e.clientY);
};

// Touch move event for mobile devices
cardsContainer.ontouchmove = (e) => {
  // Prevent default scrolling behavior when swiping on cards,
  // but you may choose to remove this if you want scrolling to occur while touching.
  // e.preventDefault();
  const touch = e.touches[0];
  updateMousePosition(touch.clientX, touch.clientY);
};
