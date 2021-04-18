let game = [];

let numberOfCells = 9
let parent = "#canvas";

function create() {
    game.end = false;
    game.playerindex = Math.random() < .5 ? 0 : 1;
    game.cellsValue = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ];
    //Dynamically create the cells.
    for(i=0; i<numberOfCells; i++) {
        let par = document.querySelector(parent);
        //Creates a new cell
        let newCell = document.createElement("div");
        newCell.className = "cell";
        newCell.setAttribute("value", i);
        //add to the parent
        par.appendChild(newCell);
    }
}
document.body.onclick = function(evt) {
    if(game.end) return;
    let elem = evt.srcElement;
    if(elem.className == "cell" && elem.parentElement.id == parent.substr(1)) {
        elem.style.backgroundColor =  game.playerindex == 1 ? "#f12345" : "#45e5ce";
        game.cellsValue[elem.getAttribute("value")] = ( game.playerindex == 1) ? 2 : 3;
        game.playerindex = !game.playerindex;
        checkWin();
    }
}

function checkWin() {
    let chance = [
        row1 =  game.cellsValue[0] *  game.cellsValue[1] *  game.cellsValue[2],
        row2 =  game.cellsValue[3] *  game.cellsValue[4] *  game.cellsValue[5],
        row3 =  game.cellsValue[6] *  game.cellsValue[7] *  game.cellsValue[8],
        col1 =  game.cellsValue[0] *  game.cellsValue[3] *  game.cellsValue[6],
        col2 =  game.cellsValue[1] *  game.cellsValue[4] *  game.cellsValue[7],
        col3 =  game.cellsValue[2] *  game.cellsValue[5] *  game.cellsValue[8],
        dia1 =  game.cellsValue[0] *  game.cellsValue[4] *  game.cellsValue[8],
        dia2 =  game.cellsValue[2] *  game.cellsValue[4] *  game.cellsValue[6],
    ]
    if(chance.includes(8) || chance.includes(27)) win();
}
function win() {
    game.end = true;
    let index = game.playerindex + 1;
    alert(`Player ${index} (${ game.playerindex == 1 ? "blu-ish" : "red-ish"}) Wins!`);
}
function restart() {
    document.getElementById("canvas").innerHTML = "";
    create();
}