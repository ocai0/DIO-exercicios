const cards = document.querySelectorAll(".card");
let lockBoard = false;

function flipCard() {
    if(lockBoard || this === firstCard) return;
    this.classList.add("flip");
    if(!hasFlippedCard) { 
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    checkForMath();
}
cards.forEach(item => item.addEventListener("click", flipCard));

let hasFlippedCard = false;
let firstCard, secondCard;

function checkForMath() {
    if(firstCard.getAttribute("data") === secondCard.getAttribute("data") ) return disableCards();
    unflipCards();
}
function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
}
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        lockBoard = false;
        resetBoard();
    }, 1500);
}
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//Immediatly Invoked Function
(function shuffle() {
    cards.forEach(card => {
        let rand = Math.floor(Math.random() * 12);
        card.style.order = rand;
    }, );
})();