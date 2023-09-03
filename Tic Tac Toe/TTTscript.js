const cellElements = document.querySelectorAll('[cellData]')
const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
let circleTurn

cellElements.forEach(cell => {
    cell.addEventListener('click', boardClick, { once : true })
})

function boardClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? X_CLASS : CIRCLE_CLASS
placeMark(cell, currentClass)

// place Mark
// Check for win
// check for Draw 
// switch turns
console.log('sd')

}    

function placeMark(cell, currentClass) {
 cell.classList.add(currentClass)
}