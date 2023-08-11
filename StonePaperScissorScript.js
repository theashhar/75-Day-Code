const stoneElement = document.getElementById('stone')
const paperElement = document.getElementById('paper')
const scissorElement = document.getElementById('scissor')
const CompOutputElement = document.getElementById('CompOutput')
const resultTextElement = document.getElementById('resultText')
const stopGameElement = document.getElementById('stopGame')


// returns random option from three -> stone paper scissor
function compGenerate () {
    ArrayOptions = ['✌️', '✋', '✊']
    const RandNo = Math.floor(Math.random() * ArrayOptions.length)
    CompOutputElement.innerText = ArrayOptions[RandNo]
    return ArrayOptions[RandNo]  
}

//returns value of sps blocks from html to using onClickSps fn
function playGame() {
    const spsBtnElement = document.querySelectorAll('.blocks')
    spsBtnElement.forEach(button => {
        button.onclick = () => {onClickSps(button.value)}  
    })

}

function onClickSps(userChoice)  {
 console.log({userChoice})
 const computerChoice = compGenerate()
 console.log({computerChoice})
 const score = getResult(userChoice, computerChoice)
 console.log({score})
}

function getResult(user, computer)  {
    let score
    if (user == 'stone' && computer == '✋') {
        score = 1
        resultTextElement.innerText = 'You Win'
    } else if (user == 'paper' && computer == '✌️') {
    score = -1
    resultTextElement.innerText = 'You Lost'
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
    let result = 'Draw'
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