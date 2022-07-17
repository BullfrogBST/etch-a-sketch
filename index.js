//Capture the grid container, input value, clear button, stylesheet root, and feature stats, and capture them in variables or objects
const gridContainer = document.querySelector('.grid-container');
const tilesInput = document.querySelector('.tile-input');
const messageContainer = document.querySelector('.message-container');

let gridTiles = document.querySelectorAll('.grid-tile');

const featureStats = {
    tilesStartValue: 32,
    
    errorMessage: document.createElement('p'),
    
    validInput: true
}

tilesInput.value = featureStats.tilesStartValue;

//If the tilesInput value is blank or over 100, give an error message. Do this with the checkValidInput function
function checkValidInput(){
    return new Promise((resolve, reject) =>{
        if(tilesInput.value > 100){
            reject("Your input is too high! Please select a number between 1 and 100.")
        } else if(tilesInput.value == ''){
            reject("Please select a number of rows and columns");
        } else if(tilesInput.value < 1){
            reject("Your input is too low! Please select a number between 1 and 100")
        } else{
            resolve();
        }
    })
}

tilesInput.addEventListener('change', () =>{
    checkValidInput()
        .then(() =>{
            featureStats.errorMessage.textContent = '';
            makeGrid();
        })
        .catch((err) =>{
            featureStats.errorMessage.textContent = err;
            messageContainer.appendChild(featureStats.errorMessage)
            featureStats.validInput = false;
        })
})
//Make a new div with the class grid-tile for as many columns and rows as the input value suggests. Make them a child of the grid container. Put this in the makeGrid() function
if(featureStats.validInput) makeGrid()
function makeGrid(){
    return new Promise((resolve, reject) =>{
        gridContainer.innerHTML = ''
        for(let i=0; i<tilesInput.value; i++){
            for(let i=0; i<tilesInput.value; i++){
                const gridTile = document.createElement('div');
                gridTile.classList.add('grid-tile');
                gridContainer.appendChild(gridTile);
                gridTile.mouseOvers = 0;
            }
        }
        console.log(tilesInput.value)
        gridContainer.style.cssText = `display: grid; grid-template-columns: repeat(${tilesInput.value}, 1fr); grid-template-rows: repeat(tilesInput.value, 1fr);`
        gridTiles = document.querySelectorAll('.grid-tile');
        console.log(gridTiles)
        resolve();
    })
}

//For each grid-tile, check if it's been hovered over, and if so, call the mouseOverTile() function and pass the event target
gridContainer.addEventListener('mouseover', () =>{
    gridTiles.forEach((gridTile) =>{
        gridTile.addEventListener('mouseover', mouseOverTile)
    })
})
//Declare the mouseOverTile() function
function mouseOverTile(e){
    e.target.mouseOvers++
    console.log(e.target.mouseOvers)
    //Create a temporary variable for the color of the current tile, which is a random rgb value
    let rand1 = Math.floor(Math.random() * 256) - e.target.mouseOvers * 25.5;
    let rand2 = Math.floor(Math.random() * 256) - e.target.mouseOvers * 25.5;
    let rand3 = Math.floor(Math.random() * 256) - e.target.mouseOvers * 25.5;
    

    e.target.style.cssText += `background-color: rgb(${rand1}, ${rand2}, ${rand3})`
    //Every time that specific tile is passed over, add 10% black to it
    
}

//Add an event listener to the clear button, and call the clearGrid() function

//Declare the clearGrid() function

//For every tile on the grid, set the color back to white