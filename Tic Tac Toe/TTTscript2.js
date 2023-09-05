const cellElements = document.querySelectorAll('[cellData]')
console.log(cellElements[0])

cellElements.forEach(cell => {     
    // cell.classList.add('circle')
    cell.addEventListener('click', clickMark)
})

let xTurn
function clickMark(e) {
    cell = e.target
    currentClass = xTurn ? 'x' : 'circle'
    placeMark(cell, currentClass)

}
// cellElements[2].classList.add('x')

function placeMark(eachCell, newCurrentClass) {
    eachCell.classList.add(newCurrentClass)
}