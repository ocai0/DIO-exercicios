const dino = document.querySelector(".dino");
const screen = document.querySelector(".game");

//Frame Size
const WIDTH = screen.offsetWidth;
const HEIGHT = screen.offsetHeight;

//Create game actor's reference
let player;

//load runs only once
let load = (() => {
    player = makeDino(100, 0, "dino.png");
    player.create();
})();
let loop = () => {
    player.update()
}
function check_collisions(rect1, rect2) {
    return (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x 
        && rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y);
}

let game = {}
game.timer = setInterval(loop, 30)
// setInterval(cactus.push(makeCactus()), Math.random() * 1200);