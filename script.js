const clearBtn = document.querySelector("#clear"),
      resBtn = document.querySelector("#resolution");
let currentColor = "rgb(0,0,0)",
    colorOptions = document.querySelectorAll(".colorOption"),
    userSize = 16;

window.onload = generatePad(userSize);

colorOptions.forEach( colorOption => colorOption.addEventListener("click", changeColor) );
    
clearBtn.addEventListener("click", clearPad);
resBtn.addEventListener("click", changeResolution);

function changeResolution(){
    document.querySelector("#etchPad").innerHTML = "";
    userSize = prompt("Select canvas size \(x by x\) 10 to 100");
    generatePad(userSize);
}

function generatePad(size) {
    let pad = document.querySelector("#etchPad"),
        active = false;
    
    for(i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.className = "row";
        
        for(x = 1; x <= size; x++) {
            let cell = document.createElement("div");
            
            cell.className = "cell";
            cell.style.width = selectCellSize(size);
            cell.style.height = selectCellSize(size);
            row.appendChild(cell);
        }
        
        pad.appendChild(row);
        
    }
    
    let padCells = document.querySelectorAll(".cell");
    
    // clicking inside the etch pad deactivates drawing;
    // clicking again re-actives drawing
    padCells.forEach( padCell => padCell.addEventListener("click", function() {
            if(active) {
                padCells.forEach( padCell => padCell.removeEventListener("mouseover", changeCellColor) );
                active = false;
            } else {
                padCells.forEach( padCell => padCell.addEventListener("mouseover", changeCellColor) );
                active = true;
            }
        }) );
} //end generatePadSize

function changeCellColor(){
    this.style.backgroundColor = currentColor;
}

function selectCellSize(size){
    let padSize = document.querySelector("#etchPad").clientWidth,
        cellSize = padSize/size;
    
    return cellSize + "px";
}

function clearPad() {
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.style.backgroundColor = "white");
}

function changeColor() {
    let clickedColor = this;
    currentColor = window.getComputedStyle(clickedColor,null).getPropertyValue("background-color");
}