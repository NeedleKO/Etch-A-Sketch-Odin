const containerOfGrid = document.querySelector(".container")
const gridBtn = document.querySelector(".changeGridBtn")
const blackBtn = document.querySelector(".blackBtn")
const rainbowCol = document.querySelector(".rainbowCol")
let amountOfGrids = 16;


//test rainbow button
const rainbowBtn = document.querySelector(".rainbowCol")


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
            blackBtn.addEventListener("click", () => {
                gridSquares.addEventListener("mouseover", function() {
                    //color in black
                    gridSquares.style.background = "black";
                    //this.classList.add("gridSquaresBlack")
                })
            
            })
            rainbowBtn.addEventListener("click", () => {
                gridSquares.addEventListener("mouseover", function() {
                    let symbols, color;
                    symbols = "0123456789ABCDEF"
                    color = "#";
                    for(let i = 0; i < 6; i++) {
                    color = color + symbols[Math.floor(Math.random() * 16)];
                    }
                    gridSquares.style.background = color;
                })
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


/*

//random color
                let symbols, color;
                symbols = "0123456789ABCDEF"
                color = "#";
                for(let i = 0; i < 6; i++) {
                    gridSquares.style.background = color;
                color = color + symbols[Math.floor(Math.random() * 16)];
                }
                //random color end

                */