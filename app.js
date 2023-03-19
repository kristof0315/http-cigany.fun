document.addEventListener("DOMContentLoaded", function() {


//Container definiálás
const container = document.querySelector(".game-container");

//Nyerő szöveg definiálás
const winText = document.getElementById("winner-text");

//Kártyák definiálása
const gameCards = document.querySelectorAll('.game-cards');

//Tesztre
console.log("gameCards = " + gameCards.length);

//Számolás a kártyáknak
let whiteCards = 0;

// Loop through each element and attach a click event listener
gameCards.forEach((card) => {
  card.addEventListener('click', () => {


    card.style.backgroundColor = 'white';

    whiteCards++;
    if (whiteCards == gameCards.length) {
        console.log("Winner")
        winText.classList.add("winner-active");
        container.classList.add("cards-win");

    }
    console.log("whiteCards = " + whiteCards.valueOf());
  });
});



}); 