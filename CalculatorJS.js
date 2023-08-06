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
        
    // console.log(finalOutput)
//     perPersonTotalElement.innerText = finalOutput
    return finalOutput
}
changePerPerson = () => {
    perPersonTotalElement.innerText = calculateBill()
}


// const perPersonTotal = () => {
    
// }

// const billInput = () => {
//     // console.log(noOfPeople)
//     return billInputElement.value
//     // console.log(x)

// }
// const tipInput = () => {
//     // console.log(noOfPeople)

// }
// // const noOfPeopleDiv = () => {
// //     return null
// // }
// const calculateBill = () => {
//     calculateBtnElement.onclick = () => {
//         let x = Number(billInput()*2)
//     // const finalOutput = Number((tipInputElement.value/100)*billInputElement.value)/noOfPeopleDivElement.innerText
//     console.log(x)
//     }
//     return finalOutput

// }

// let noOfPeople = Number(noOfPeopleDiv.innerText)
// console.log(calculateBill)
