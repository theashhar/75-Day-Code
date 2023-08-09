const stoneElement = document.getElementById('stone')
const paperElement = document.getElementById('paper')
const scissorElement = document.getElementById('Scissor')
const CompOutputElement = document.getElementById('CompOutput')

const randomFruit = (fruit) => {
    const RandNo = Math.floor(Math.random() * fruit.length)
    return fruit[RandNo]
}
Arr = ['✌️','✌️', '✋', '✊']
x = randomFruit(Arr)
console.log(x)
CompOutputElement.innerText = x

