window.onload = function() {
    generatePad(16);
    
    function resetPad(){
        let userSize;
        
        clearPad();
        userSize = prompt("Select canvas size \(x by x\)");
        generatePad(userSize);
    }
    
    const resetBtn = document.querySelector("#reset");
    resetBtn.addEventListener("click", resetPad);
    
};

function generatePad(size) {
    let pad = document.querySelector("#etchPad");
    
    for(i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.className = "row";
        
        for(x = 1; x <= size; x++) {
            let cell = document.createElement("div");
            
            if(x === size) {
                cell.className = "cell clearFloat";
            } else {
                cell.className = "cell";
            }
            cell.style.width = selectCellSize(size);
            cell.style.height = selectCellSize(size);
            row.appendChild(cell);
        }
        
        pad.appendChild(row);
        
    } // end first for
    
    let padCells = document.querySelectorAll(".cell");
    padCells.forEach( padCell => padCell.addEventListener("mouseover", changeCellColor) );
}

function changeCellColor(){
    this.style.backgroundColor = "blue";
}

function selectCellSize(size){
    let cellSize = 500/size;
    
    return cellSize + "px";
}

function clearPad() {
    document.querySelector("#etchPad").innerHTML = "";
}