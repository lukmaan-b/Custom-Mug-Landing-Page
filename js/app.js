animateCards = () => {
  const cards = document.querySelectorAll(".card");
  const screenPos = window.innerHeight / 1.5;
  cards.forEach((card) => {
    if (card.getBoundingClientRect().top < screenPos) {
      card.classList.add("animateCards");
    }
  });
};

window.addEventListener("scroll", animateCards);
