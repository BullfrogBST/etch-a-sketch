//Capture the grid container, input value, clear button, stylesheet root, and feature stats, and capture them in variables or objects
const gridContainer = document.querySelector('.grid-container');
const tilesInput = document.querySelector('.tile-input');
const messageContainer = document.querySelector('.message-container');

const featureStats = {
    tilesStartValue: 64,
    errorMessage: document.createElement('p')
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
            console.log('Valid Input!');
        })
        .catch((err) =>{
            featureStats.errorMessage.textContent = err;
            messageContainer.appendChild(featureStats.errorMessage)
        })
})

//Make a new div with the class grid-tile for as many columns and rows as the input value suggests. Make them a child of the grid container


//For each grid-tile, check if it's been hovered over, and if so, call the mouseOverTile() function and pass the event target

//Declare the mouseOverTile() function

//Create a temporary variable for the color of the current tile, which is a random rgb value

//Every time that specific tile is passed over, add 10% black to it

//Add an event listener to the clear button, and call the clearGrid() function

//Declare the clearGrid() function

//For every tile on the grid, set the color back to white