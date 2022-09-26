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
                this.classList.add("gridSquaresBlack")
            })
            wrapper.appendChild(gridBox)
        }
        containerOfGrid.appendChild(wrapper)
    }
    
}

createGridBoxes(amountOfGrids)




gridBtn.addEventListener("click", function() {
    do{
        var changeGrid = parseInt(window.prompt("Please enter a number from 1 to 100", ""), 10);
        amountOfGrids = changeGrid;

        
          
    }while(isNaN(changeGrid) || changeGrid > 100 || changeGrid < 1);
    
    const wrapper = document.querySelector(".wrapper")
        wrapper.remove()
        createGridBoxes(amountOfGrids)
    
})