const cellElements = document.querySelectorAll('[cellData]')
const boardElement = document.getElementById('board')
const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8],
]
let circleTurn

cellElements.forEach(cell => {
    cell.addEventListener('click', cellClick, { twice : true })
})
setBoardHoverClass()

function cellClick(e) {
// place Mark
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS 
    placeMark(cell, currentClass) //adds currentClass(x/circle) to e.target
// Check for win
    if (checkWin(currentClass))
        console.log(`${currentClass} winner`)
// check for Draw 
// switch turns
    switchTurns() 
    setBoardHoverClass()   
}    

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}
function switchTurns() {
    circleTurn = !circleTurn // sets to opposite
}
function setBoardHoverClass() {
    boardElement.classList.remove(X_CLASS)
    boardElement.classList.remove(CIRCLE_CLASS)
    if (circleTurn){
     boardElement.classList.add(CIRCLE_CLASS)
    } else {
     boardElement.classList.add(X_CLASS)
   }
//    console.log(boardElement.classList)
}

function checkWin (currentClass) {
    const win = WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
    return win
}
// console.log(checkWin('x'))