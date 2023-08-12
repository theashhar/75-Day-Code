const billInputElement = document.getElementById('billInput')
const tipInputElement = document.getElementById('tipInput')
const noOfPeopleDivElement = document.getElementById('noOfPeopleDiv')
const perPersonTotalElement = document.getElementById('perPersonTotal')
const minusBtnElement = document.getElementById('minusBtn')
const plusBtnElement = document.getElementById('plusBtn')
const calculateBtnElement = document.getElementById('calculateBtn')

//Functions
decreasePeople = () => {    
        if (noOfPeopleDivElement.innerText > 1)
        noOfPeopleDivElement.innerText--
        calculateBill()
}
increasePeople = () => {    
        noOfPeopleDivElement.innerText++
        calculateBill()   
}
const calculateBill = () => {
       let finalOutput = (Number((Number(billInputElement.value) + (Number(tipInputElement.value) * 
        Number(billInputElement.value)/100))/noOfPeopleDivElement.innerText)).toFixed(2)
    return finalOutput
}
changePerPerson = () => {
    perPersonTotalElement.innerText = calculateBill()
}
