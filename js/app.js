document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector('.profile-cards-wrapper');
    const cardsContainer = document.querySelector('.profile-cards');
    const cards = document.querySelectorAll('.card');
  
    let containerWidth = wrapper.offsetWidth;
    let totalWidth = 0;
  
    // Duplicar las tarjetas para crear el efecto continuo
    cards.forEach(card => {
      let clone = card.cloneNode(true);
      cardsContainer.appendChild(clone);
      totalWidth += card.offsetWidth;
    });
  
    function animateCards() {
      let currentX = 0;
      let interval = setInterval(() => {
        currentX -= 2; // Adjust the speed by changing this value
        if (currentX <= -totalWidth) {
          currentX = 0;
        }
        cardsContainer.style.transform = `translateX(${currentX}px)`;
      }, 20); // Adjust the interval speed by changing this value
    }
  
    animateCards();
  });
  window.onload = function () {
    const container = document.querySelector('.container-proyec');
    let firstCardClone = container.children[0].cloneNode(true);
    container.appendChild(firstCardClone);

    let cardWidth = container.children[0].offsetWidth;
    let totalWidth = cardWidth * container.children.length;

    container.style.width = totalWidth + 'px';

    let scrollSpeed = 1; // Adjust this value to change the speed of scrolling
    let currentPosition = 0;

    function animateCards() {
        currentPosition -= scrollSpeed;
        if (Math.abs(currentPosition) >= cardWidth) {
            container.appendChild(container.children[0]);
            currentPosition = 0;
        }
        container.style.transform = `translateX(${currentPosition}px)`;
        requestAnimationFrame(animateCards);
    }

    animateCards();
};
  