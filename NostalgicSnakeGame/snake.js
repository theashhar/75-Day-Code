var blockSize = 22;
var rows = 22;
var cols = 22;
var playground;
var context;

console.log("to")

window.onload = function() {
    playground = document.getElementById('playground')
    playground.style.width = cols * blockSize + 'px';
    playground.style.height = rows * blockSize + 'px';
    context = playground.getContext('2d') // for drawing on board
 
    update();
}

const update = () => {
    context.fillStyle = 'black'
    context.fillRect(0, 0, playground.width, playground.height)
}