
const containerOfGrid = document.querySelector(".container")

const amountOfGrids = 16;





function createGridBoxes(gridCount) {
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
        }
        
    }
    
}

createGridBoxes(amountOfGrids)




