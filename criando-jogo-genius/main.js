function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let order = [];
let clickedOrder = [];
let score = 0;

const blue   = document.querySelector(".blue");
const red    = document.querySelector(".red");
const green  = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

function shuffleOrder() {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        let time = parseInt(i) + 1;
        setTimeout(() => lightBlink(elementColor, time), 200 * time);
    }
}
let lightBlink = (el, i) => {
    setTimeout(() => {
        el.classList.add("selected");
        setTimeout(() => el.classList.remove("selected"), 800);
    }, 800 * i);
}

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] !== order[i]) { lose(); break; }
    }
    if(clickedOrder.length == order.length) {
        alert("Score: " + score + "\n Você acertou, avance!");
        nextLevel();
    }
}

let click = color => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add("selected");
    setTimeout(() => {
        createColorElement(color).classList.remove("selected");
        checkOrder();
    }, 250);
}


let createColorElement = (color) => {
    let colors = [green, red, yellow, blue];
    if(colors[color]) return colors[color];
};

let nextLevel = () => {
    score++;
    shuffleOrder();
}

let lose = () => {
    alert(`score: ${score}\n Você perdeu!`);
    order = [];
    clickedOrder = [];
    playGame();
}

let playGame = () => {
    score = 0;
    nextLevel();
}

green.onclick   = () => click(0);
red.onclick     = () => click(1);
yellow.onclick  = () => click(2);
blue.onclick    = () => click(3);

playGame();