const yourShip = document.querySelector(".player-shooter");
const playArea = document.querySelector("#main-play-alien");
const enemy = [
    "img/monster-1.png",
    "img/monster-2.png",
    "img/monster-3.png"
];
const startText = document.querySelector(".game-instructions");
const startBtn = document.querySelector(".start-button");
let alienInterval=0;

function flyShip(event) {
    if(event.key) event.preventDefault();
    if(event.key === "ArrowUp")   moveUp();
    if(event.key === "ArrowDown") moveDown();
    if(event.key === " ") shoot();
}

function moveUp() {
    let topPosition = parseInt(getComputedStyle(yourShip).getPropertyValue("top"));
    if(topPosition < 8) return;
    let position = parseInt(topPosition);
    position-=50;
    yourShip.style.top = position+"px";
}

function moveDown() {
    let topPosition = parseInt(getComputedStyle(yourShip).getPropertyValue("top"));
    if(topPosition > 540) return;
    let position = parseInt(topPosition);
    position+=50;
    yourShip.style.top = position+"px";
}

function shoot() {
    let laser = createLaser();
    playArea.appendChild(laser);
    moveLaser(laser);
}

function createLaser() {
    let x = parseInt(window.getComputedStyle(yourShip).getPropertyValue("left"));
    let y = parseInt(window.getComputedStyle(yourShip).getPropertyValue("top"));
    let laser = document.createElement("img");
    laser.src = "img/shoot.png";
    laser.classList.add("laser");
    laser.style.top = (y - 10) +"px";
    laser.style.left = x +"px";
    return laser;
}
function moveLaser(laser) {
    let laserInterval = setInterval(() => {
        let xPos = parseInt(laser.style.left)+8;
        let aliens = document.querySelectorAll(".alien");
        aliens.forEach((alien) => {
            if(checkLaserCol(laser, alien)) {
                alien.src = "img/explosion.png";
                alien.classList.remove("alien");
                alien.classList.add("dead-alien");
            }
        });
        if(xPos >= 340) return laser.remove();
        laser.style.left = xPos+ "px";
    }, 10);
}

function createAlien() {
    let newAlien = document.createElement("img");
    let alienSprite = enemy[Math.floor(Math.random() * enemy.length)];
    newAlien.src = alienSprite;
    newAlien.classList.add("alien");
    newAlien.classList.add("alien-transition");
    newAlien.style.left = "370px";
    newAlien.style.top = (Math.floor(Math.random() * 330) + 30)+"px";
    playArea.appendChild(newAlien);
    moveAlien(newAlien);
}
function moveAlien(alien) {
    let moveInterval  = setInterval(() => {
        let xPos = parseInt(window.getComputedStyle(alien).getPropertyValue("left"));
        if(xPos <= 50) {
            if(Array.from(alien.classList).includes("dead-alien")) alien.remove();
            else gameOver();
        }
        else {
            alien.style.left = (xPos - 4)+"px";
        }
    }, 30);
}

function checkLaserCol(laser, alien) {
    let laserTop = parseInt(laser.style.top);
    let laserLeft = parseInt(laser.style.left);
    let laserBottom = laserTop - 20;

    let alienTop = parseInt(alien.style.top);
    let alienLeft = parseInt(alien.style.left);
    let alienBottom = alienTop - 30;

    if(laserLeft != 340 && laserLeft + 40 >= alienLeft) {
        if(laserTop <= alienTop && laserTop >= alienBottom) return true;
        else return false;
    }
    else return false;
}

function playGame() {
    startBtn.style.display = "none";
    startText.style.display = "none";
    document.addEventListener("keydown", flyShip);
    alienInterval = setInterval(() => createAlien(), 2000);
}
function gameOver() {
    window.removeEventListener("keydown", flyShip);
    clearInterval(alienInterval);
    let aliens = document.querySelectorAll(".alien");
    aliens.forEach((alien) => alien.remove());
    let lasers = document.querySelectorAll(".laser");
    aliens.forEach((laser) => laser.remove());
    alert("game Over");
    yourShip.style.top = "250px";
    startBtn.style.display = "block";
    startText.style.display = "block";
    
}

startBtn.addEventListener("click", (e) => playGame());