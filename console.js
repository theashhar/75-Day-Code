// console.log("yo")
// let a=71;
// console.log(a)
// a='bro'
// console.log(a)

/* comment para */

    // user input through promt
    // alert("Loading")


    // //Operator
    // //food = 55 



   
    // foodBill=Number(prompt('food bill?'))
    // TipPercent=(prompt('Tip%?')/100)
    // Tip=TipPercent*foodBill
    // Total=Tip + foodBill
    // console.log(Total)
    

    // console.log('Tip =', Tip,"%\n", 'Total =', Total)
    // name = "ashahr , #designer come coder"

    // x =Math.floor(Math.random() * 99)
    // console.log(x)
    
    
    // //Weather app
    // let weather = prompt("hows the weather?")
    
    // if (weather =='rain')
    // {
    //     console.log("take umbrella")
    // }   
    // else
    // {
    //     console.log("wear sunglass")   
    // }
    
    
    
    // funtions
    
    // function callName(name1){
    //     console.log(name1)
    // }
    // callName('Ashhar')



    // function greetings(name)
    // {
    //     // greet = 'hi ' + name + ', wassup'
    //     greet = `hi ${name} wassup !`    //other way
    //     console.log(greet);
    // }
    // greet= `hi ${name} wassup !`
    // greetings(prompt('Enter name'))     //call 

    // function sum(a, b) {
    //     return (a+b)
    // }
    
    // num=sum(8,2)
    // console.log(num)

    // function FoodCalulator(food, tip)
    // {
    //     foodamt = Number(food)
    //     tipPercentage = Number(tip / 100)
    //     tipAmt = Number(foodamt * tipPercentage)
    //     total = foodamt + tipAmt
    
    //     return total
    // }
    // console.log(FoodCalulator(130,20))
     
    
    
    // Arrow function with implicit return
    // const sumArrow = (a, b) => a+b       //"const" acts as a constant that will not change while "let" can change 
    
    // // Arrow function with explicit with return
    // const sum = (a, b) => 
    // {   return a+b }
    
    // console.log(sumArrow(3,65))
    //ARRAYS
    //Array Methods (slice, lemgth, push, pop, remove, indexOf)

    // const groceries = ['milk', 'egg', 'biscuit',]
    // groceries.push('butter', 'peanut')
    // // groceries.push(prompt('enter item'))
    
    // // slice- from a to b, including a upto b
    // console.log(groceries.slice(2,4))
    // console.log(groceries.length)
    // console.log(groceries.indexOf('butter'))
    
    // groceries.push('sdsa')
    
    // // console.log(groceries.toString()) // prints array separated by comma
    // console.log(groceries.join(" yo "))
    

    // // sorting
    // let numbers = [1,54,23,546,67,2343.23,5343]
    // console.log(numbers.sort(function(a,b) {return(a-b)}))
    
    
    // printing random numers using loop
    
    // for (let i=0; i<10; i++)
    // {
    //     console.log(Math.floor(Math.random() * 70));
    // }
    
    
    // objects in JS
    
    let student = {
        first: 'Ashhar',
        last: 'Ali',
        age: '32'
        }      
    // console.log(student.age)

    const ppl = {
        name: 'John',
        age: 34,
    }
   ppl.name= 'Asa' 
//    console.log(ppl['name'])
   

const introducer = (name,age) => {
    const person = {
        name: name,
        age: age,
        liability: 400,
        asset: 600,
        networth: function () {
            return this.asset - this.liability
        }
    }

const intro = `Yo man I'm ${person.name} my age is ${person.age}.wassup. My networth is ${person.networth()}`
return intro
}
// console.log(introducer('sdsd', 23))

const groceries= ['fruit', 'milk', 'veg', 'butter', 'bicsuit']
// for(let i=0; i<groceries.length; i++) {
//     console.log(groceries[i])
// }
for(grocery of groceries)
{   
//    if(groceries.indexOf(grocery)%2 == 0) 
//     console.log(grocery)
//     else 
//     console.log('bro')
}

//for in LOOP

    let counter=0
    const howManyLetters = (phrase) => {
        for (letter in phrase) {            //counts the number of letters in the array
            result=Number(letter) + 1
            counter=counter+1
        }
        console.log('First Way: '+ counter)
        console.log('Second (.length) Way: ' + phrase.length)
    }

    // howManyLetters('What issds a person')

    //Addition from array of numbers
    
    let result1 = 0
    const sumArrray = (numbers) => {
        for (number of numbers) {
            result1 = result1 + number
        }
        return result1
    }
    let num = [4,6,24]
    // console.log(sumArrray(num))

//FREQUENCY OF LETTERS IN A WORD
    const letterFreq = (phrase) => {
    //letterFreq('haha') = (h:2, a:2)     
    //make frequency object
    let frequency = {}
    for (const letter of phrase) {
        if(letter in frequency) { 
            frequency[letter] = frequency[letter] + 1
        }
        else{
            frequency[letter] = 1
        }
        }
    return frequency
        // let result = {}
        // for (letter of phrase) {
        //     if (result[letter]) {
        //         result[letter] = result[letter] + 1
        //     } else {
        //         result[letter] = 1
        //     }
        // }
        // return result
    }
    console.log(letterFreq('banana is the fruit'))