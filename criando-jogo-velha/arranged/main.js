const numberOfCells = 9
const parent = "#canvas";
let cells = [];

function init() {
    //Dynamically create the cells.
    for(i=0; i<numberOfCells; i++) {
        let par = document.querySelector(parent);
        //Creates a new cell
        let newCell = document.createElement("div");
        newCell.className = "cell";
        //add to the parent
        par.appendChild(newCell);
        //Push the reference
        cells.push(newCell);
    }
}