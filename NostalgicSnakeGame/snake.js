const blockSize = 22;
const rows = 30;
const cols = 30;
let playground;
let context;

//snake
let snakeX = blockSize * 5
let snakeY = blockSize * 5
let velocityX = 0
let velocityY = 0
//food
let foodX
let foodY

window.onload = function() {
  startGame()
}
function startGame() {
  playground = document.getElementById("playground");
  context = playground.getContext("2d"); // for drawing on board
  playground.width = cols * blockSize;
  playground.height = rows * blockSize;

  document.addEventListener("keydown", changeDirection)
  placeFood();
  setInterval(update, 100)
};

const update = () => {
  context.fillStyle = "rgb(45, 58, 73)";
  context.fillRect(0, 0, playground.width, playground.height);

  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);

  context.fillStyle = "lime";
  snakeX += velocityX * blockSize
  snakeY += velocityY * blockSize
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
  
  if (eatFood(snakeX,snakeY)){
    updateScore()
    increaseSnakeSize()
  }
}

const placeFood = () => {
    foodX = Math.floor(Math.random() * cols) * blockSize
    foodY = Math.floor(Math.random() * rows) * blockSize
}
const eatFood = (x,y) => {
  if (foodX===x && foodY===y)
  {console.log("eaten")
  placeFood();
  return true
}
}
let score = 0
const updateScore = () => {
    scoreElement = document.getElementById('score')
    score++
    scoreElement.innerText = `score: ${score}`  
    console.log(scoreElement.innerText)
}
const increaseSnakeSize = () => {
  context.fillRect(snakeX, snakeY, blockSize*2, blockSize);
}

const changeDirection = (e) => {
  if (e.key == "ArrowUp" && velocityY!=1) {
  velocityX = 0
  velocityY = -1
  }
  else if (e.key == "ArrowRight" && velocityX!=-1) {
    velocityX = 1
    velocityY = 0
  }
  else if (e.key == "ArrowDown"&& velocityY!=-1) {
    velocityX = 0
    velocityY = 1
  }
  else if (e.key == "ArrowLeft" && velocityX!=1) {
    velocityX = -1
    velocityY = 0
  }
}


// const update = () => {
//   context.fillStyle = "rgb(45, 58, 73)";
//   context.fillRect(0, 0, playground.width, playground.height);

//   context.fillStyle = "red";
//   context.fillRect(foodX, foodY, blockSize, blockSize);

//   context.fillStyle = "lime";
//   snakeX += velocityX * blockSize
//   snakeY += velocityY * blockSize
//   context.fillRect(snakeX, snakeY, blockSize, blockSize);

//   eatFood(snakeX,snakeY)

// }

// const placeFood = () => {
//     foodX = Math.floor(Math.random() * cols) * blockSize
//     foodY = Math.floor(Math.random() * rows) * blockSize
// }
// const eatFood = (x,y) => {
//   if (foodX===x && snakeY===y)
//   console.log("eaten")
//   placeFood()
//   return true
// }