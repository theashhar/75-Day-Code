const stoneElement = document.getElementById('stone')
const paperElement = document.getElementById('paper')
const scissorElement = document.getElementById('scissor')
const CompOutputElement = document.getElementById('CompOutput')

const randomFruit = (fruit) => {
    const RandNo = Math.floor(Math.random() * fruit.length)
    return fruit[RandNo]
}
Arr = ['✌️', '✋', '✊']

const compGenerate = () => {
// img.src = 'settings.gif'
let x = randomFruit(Arr)
CompOutputElement.innerText = x
console.log(x)
}

const gameScore = (user, computer) => {
    let score 
    if (user == '✊' && computer == '✋')
    score = 1
    else if (user == '✋' && computer == '✌️')
    score = -1
    else if (user == '✌️' && computer == '✊')
    score = -1
    else if (user == '✊' && computer == '✋')
    score = -1
    else if (user == '✋' && computer == '✊')
    score = 1
    else
    score = 0

}
