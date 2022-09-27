const containerOfGrid = document.querySelector(".container")
const gridBtn = document.querySelector(".changeGridBtn")
let amountOfGrids = 16;



function createGridBoxes(gridCount) {

    const wrapper = document.createElement("div")
    wrapper.classList.add("wrapper")

    for (let i = 0; i < gridCount; i++) {
        let gridBox = document.createElement("div")
        gridBox.classList.add("gridBox")
        containerOfGrid.appendChild(gridBox)

        for (let j = 0; j < gridCount; j++) {
            const widthAndHeight = 600 / amountOfGrids
            let gridSquares = document.createElement("div")
            gridSquares.classList.add("gridSquares")
            gridSquares.style.width = `${widthAndHeight}px`
            gridSquares.style.height = `${widthAndHeight}px` 
            gridBox.appendChild(gridSquares)
            //mouse color hover effect
            gridSquares.addEventListener("mouseover", function() {
                //color in black
                //this.classList.add("gridSquaresBlack")

                //random color
                let symbols, color;
                symbols = "0123456789ABCDEF"
                color = "#";
                for(let i = 0; i < 6; i++) {
                color = color + symbols[Math.floor(Math.random() * 16)];
                }
                gridSquares.style.background = color;
                //random color end
            })
            wrapper.appendChild(gridBox)
        }
        containerOfGrid.appendChild(wrapper)
    }
    
}

createGridBoxes(amountOfGrids)



gridBtn.addEventListener("click", function() {
    do{
        var changeGrid = parseInt(window.prompt("Please enter a number from 1 to 100", ""));
        
    }while(isNaN(changeGrid) || changeGrid > 100 || changeGrid < 1);
    
    const wrapper = document.querySelector(".wrapper")
        wrapper.remove()
        amountOfGrids = changeGrid;
        createGridBoxes(amountOfGrids)

})