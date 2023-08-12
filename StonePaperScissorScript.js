const stoneElement = document.getElementById('stone')
const paperElement = document.getElementById('paper')
const scissorElement = document.getElementById('scissor')
const CompOutputElement = document.getElementById('CompOutput')
const resultTextElement = document.getElementById('resultText')
const stopGameElement = document.getElementById('stopGame')

// Call playGame when the page loads
window.onload = function () {
    playGame();
};

// returns random option from three -> stone paper scissor
function compGenerate () {
    ArrayOptions = ['✌️', '✋', '✊']
    const RandNo = Math.floor(Math.random() * ArrayOptions.length)
    CompOutputElement.innerText = ArrayOptions[RandNo]
    return ArrayOptions[RandNo]  
}

//returns value of sps blocks from html by using onClickSps fn
//problem this this function => onclick event handler is called here and and also in the html file. to fix that window.onload is used 
function playGame() {
    const spsBtnElement = document.querySelectorAll('.blocks')
    spsBtnElement.forEach(button => {
        button.onclick = () => {onClickSps(button.value)}  
    })
    
}
function getscore() {

}

let count = 0
// let totalScore = 0

function onClickSps(userChoice)  {
 console.log({userChoice})
 const computerChoice = compGenerate()
 console.log({computerChoice})

 //Score
    const score = getResult(userChoice, computerChoice)
    console.log(score)
    const scoreElement = document.getElementById('score')
    scoreElement.innerText = ` ${score}`

 // number of matches => 
    count++
    console.log(`count = ${count} `)
    counterElement = document.getElementById('counter')
    counterElement.innerText =` ${count}` 


}

// main stone paper scissor logic return
function getResult(user, computer)  {
    let score
    if (user == 'scissor' && computer == '✋') {
        score = 1
        resultTextElement.innerText = 'You Win'
    } else if (user == 'paper' && computer == '✌️') {
    score = -1
    resultTextElement.innerText = 'You Lost'
    } else if (user == 'stone' && computer == '✌️') {
    score = 1
    resultTextElement.innerText = 'You Win'
    } else if (user == 'scissor' && computer == '✊') {
    score = -1
    resultTextElement.innerText = 'You Lost'
    } else if (user == 'stone' && computer == '✋') {
    score = -1
    resultTextElement.innerText = 'You Lost'
    } else if (user == 'paper' && computer == '✊') {
    score = 1
    resultTextElement.innerText = 'You Win'
    } else {
    score = 0
    resultTextElement.innerText = 'Draw'
    }
return score
} 
function showResult(score, user, computer)  {
    
//     let result
//     if (gameScore() == 1)
//         result = 'You Win'
//     else if (gameScore() == -1 )
//         result = 'You Lost'
//     else
//         result = 'Draw'
// return result
}

function stopGame() {
    resultTextElement.innerText = 'Play Again'
}