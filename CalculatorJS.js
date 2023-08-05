const billInputElement = document.getElementById('billInput')
const tipInputElement = document.getElementById('tipInput')
const noOfPeopleDivElement = document.getElementById('noOfPeopleDiv')
const perPersonTotalElement = document.getElementById('perPersonTotal')
const minusBtnElement = document.getElementById('minusBtn')
const plusBtnElement = document.getElementById('plusBtn')
const calculateBtnElement = document.getElementById('calculateBtn')

//Functions

const billInput = () => {
    // console.log(noOfPeople)
    // console.log(billInputElement.value)

}
const tipInput = () => {
    // console.log(noOfPeople)

}
// const noOfPeopleDiv = () => {
//     return null
// }
const perPersonTotal = () => {
    
}
decreasePeople = () => {
    minusBtnElement.onclick = () => {
        if (noOfPeopleDivElement.innerText > 1)
        noOfPeopleDivElement.innerText--
    }
}
increasePeople = () => {
    plusBtnElement.onclick = () => {
        noOfPeopleDivElement.innerText++
    }
}
const calculateBill = () => {
    calculateBtnElement.onclick = () {
    const finalOutput = Number((tipInputElement.value/100)*billInputElement.value)/noOfPeopleDivElement.innerText
    }
    return finalOutput

}

// let noOfPeople = Number(noOfPeopleDiv.innerText)
// console.log(calculateBill)
