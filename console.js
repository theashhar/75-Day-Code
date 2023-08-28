// console.log("yo")
// let a=71;
// console.log(a)
// a='bro'
// console.log(a)

/* comment para */

    // user input through prompt
    // alert("Loading")


    // //Operator
    // //food = 55 

    // foodBill=Number(prompt('food bill?'))
    // TipPercent=(prompt('Tip%?')/100)
    // Tip=TipPercent*foodBill
    // Total=Tip + foodBill
    // console.log(Total)
    

    // console.log('Tip =', Tip,"%\n", 'Total =', Total)
    // name = "ashhar , #designer come coder"

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
    
    
    
    // functions
    
    // function callName(name1){
    //     console.log(name1)
    // }
    // callName('Ashhar')



    // function Greetings(name)
    // {
    //     // greet = 'hi ' + name + ', wassup'
    //     greet = `hi ${name} wassup !`    //other way
    //     console.log(greet);
    // }
    // greet= `hi ${name} wassup !`
    // Greetings(prompt('Enter name'))     //call 

    // function sum(a, b) {
    //     return (a+b)
    // }
    
    // num=sum(8,2)
    // console.log(num)

    // function FoodCalculator(food, tip)
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
    const sym = Symbol() 
    let student = {
        fullName : {
            firstName: 'Ashhar',
            lastName: 'Ali Ahmed',
        },
        last: 'Ali',
        age: '32',
        [sym]: 'key2', //square bracket makes it symbol
        }      
    const ppl = {
        name: 'John',
        age: 34,
    }
   ppl.name= 'Asa' 
//    console.log(student.fullName?.lastName) //? is given to avoif if else condition when it is fetched with API an lets suppose full name dosent exsist
//    console.log(typeof student[sym])


   //merging objects
   let obj1 = {a:1, b:2}
   let obj2 = {c:3, d:4}
   let obj3 = Object.assign({},obj1,obj2)
   let obj4 = {...obj1,...obj2} //New Method
//    console.log(obj3)
//    console.log(obj4)
   
   //Accessing object property from array of multiple objects
   let ppl2 = [
       stud1 = {
           name: 'John',
           age: 34,
       },
       stud2 = {
           name: 'John',
           age: 324,
       },
       stud3 = {
           name: 'John',
           age: 4,
       }
]
// console.log(ppl2[2].age)
// console.log(ppl2.length)

//JSON FILE
// {
//     "name":"jhon",

// }


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
            frequency[letter]++
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
    // console.log(letterFreq('banana is the fruit'));

    const wordFreq = (phrase1) => {
        let frequency1 = {}
        const words = phrase1.split(' ')
        // console.log(words)
        for (let word of words){
            if (word in frequency1){
                frequency1[word]++ }
            else {
                frequency1[word]=1
            }                
        }
        return frequency1
    }
    // console.log(wordFreq('banana is the the fruit'))    

//  OTHER WAY
const wordFreq2 = (phrase1) => {
    const words = phrase1.split(' ')
    return letterFreq(words)
}
// console.log(wordFreq2('banana is the the fruit'))    


//Factory function

//     function createCourse(title) {
//         return {
//             title: title,
//             enroll() {
//                 console.log('You are enrolled');
//             }
//         }
//     }
// console.log(createCourse('Javscript'));


// //Constructor function, name starts with Capital letter 
//     function Coursejs(title) {
//         this.title = title,
//         this.enroll() = function() {
//             console.log('You are enrolled');    
//         }
//     }
//     const course = new Coursejs('Javascript')
//     course.enroll()
//     // console.log(course)

//Conventional function
const double = (number) => {
    result3 = []
    for(let num of number){
        result3.push(num*2)
    }
    return result3
}
// console.log(double([1, 4 ,12]))

//MAP() FUNCTION

const doubleMap = (number) => {
    return number.map(num => num*2)
}
// console.log(doubleMap([1, 4 ,12]))

// FILTER
//filter([1,4,6,123,232,23,54], 6) => return no greater than 6

const filter1 = (numArray, greaterThan) => {
    let result4 = []
    for(let num of numArray){
        if(num > greaterThan){
        result4.push(num)
        }
    }
    return result4
}
// console.log(filter1([1, 4, 6, 123, 232,6,1231, 23, 54], 6))

//filter(function)

const filterNum = (numArray, greaterThan) => {
    return numArray.filter(num => num > 6)
}
// console.log(filterNum([1, 4, 6, 123, 232,6,1231, 23, 54]).join(' || '))
//join adds to specific array element

//REDUCE- reduce the array in to single digit
function addNo(a,b){
    return a+b
}
let num1 =[3,25,1,]
let result5 = num1.reduce((a,b) => a+b, 10)
//10 sets a starter value i.e it adds 10 before adding anything
//or
let result6 = num1.reduce(addNo)
// console.log(`${result5} '&' ${result6}` )

const actors = [
    {name: 'A', netW:2},
    {name: 'b', netW:1},
    {name: 'c', netW:6},
    {name: 'd', netW:4},
]
let actorsSum = actors.reduce((a,b) => a+b.netW, 0)
// console.log(actorsSum)
    
let Print = document.getElementById('title')
// console.log(Print.innerText)
// Print.innerHTML = 'hji'

// let Stone = document.getElementById("yellow")
// let Paper = document.getElementById("green")
// let Scissor = document.getElementById("blue")

// Stone.onclick = () => console.log("User Choose: Rock") 
// Paper.onclick = () => console.log("User Choose: Paper")
// Scissor.onclick = () => console.log("User Choose: Scissor")

const squares = document.querySelectorAll('.colorSquare')

// console.log(squares[0].value)

//foreach loop
//Times clicked
const timesClicked = {'blue': 0, 'green':0, 'yellow': 0}

squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value]++
        square.innerText = timesClicked[square.value]
        // console.log(`User clicked: `+ square.value)
        }
    }
)
// Stone.onclick = function() {
//     let user = Number(1)
// }
// Paper.onclick = function() {
//     let user = Number(2)
// }
// Scissor.onclick = function() {
//     let user = Number(3)
// }


compOutput = Math.ceil(Math.random() * 3)
    // console.log(compOutput)

// if (compOutput == 1) {
//     console.log("Rock")
// }
// else if (compOutput == 2) {
//     console.log("Paper")
// }
// else {
//     console.log("scissor")
// }
// if (compOutput < user) {
//     console.log("Rock")
// }
// else if (compOutput > user) {
//     console.log("Paper")
// }
// else {
//     console.log("scissor")
// }

const randomFruit = (fruit) => {
    const RandNo = Math.ceil(Math.random() * fruit.length)
    return fruit[RandNo]
}
Arr = ['✌️','✌️', '✋', '✊']
x = randomFruit(Arr)

//CLOSURES
// console.log(x)

//setTime out  takes a function and runce it after a wait time
// setTimeout (() => console.log('Print after 1s'), 1000)

function print1to5() {
    for(var i=1; i<=5; i++) //changing var->let prints the desired output
    setTimeout(function () {
        console.log(i)
    }, i*300
    )   
}
// print1to5()

function print1to5var() {
    for(var i=1; i<=5; i++){ 
    function inner(t){
    setTimeout(function () {
        console.log(t)
            }, i*300
        )   
    }
    inner(i)
}}
// print1to5var()

function outer1(){
    let a=1
    function inner1(){
        function inner2(){
            console.log(a)
        }
        return inner2  
    }
    return inner1
}
// parentheses calls inner functions
// outer1()()() 

function outer1(){
    let a=1
    return a

}
outer1()



const promise1 = new Promise((resolve, reject) => {
setTimeout(() => {
            isReadyArr = [false, true]
            isReadyNo = Number(Math.floor(Math.random() * 2))
            // Ternary Operators
            isReadyArr[isReadyNo] ? resolve("Success ✅"): reject("No")
        }, 400);
})
// promisePrint =
//     promise1
//     .then(val => console.log(val))
//     .catch(val => console.log(val))
    
const promisePrint2 = async () => {
    const response = await (promise1)  
    console.log(response)
    //if we leave till here it dosent catch reject part
}
//Try Catch Method
const promisePrint3 = async () => {
    try {//everything resolved goes here
        const response = await (promise1)  
        console.log(response)
    } catch(error) { //everything rejected goes here
        console.log(error)
    }

}
const promisePrint4 = async () => {
    const data = {
        rating : null,
        tip: null,
        pay: null,
        review: null
    };
    
       try {
        const response = await promise1;
        console.log(response);
        data.rating = 5;
        data.tip = "10%";
        data.pay = 100;
        data.review = 5;

    } catch (error) {
        console.log(error);
        data.rating = 1;
        data.tip = "0%";
        data.pay = 100;
        data.review = 1;
    }

    return data;
};
(async () => {
    // const result = await promisePrint4();
    // console.log(result);
})();

//ASYNC / AWAIT
//ASYNC -> whenever you're speaking to some database/website/APIs, you shall use async function
//Better tna .then, .catch syntaxes
// const weatherApi = async () => {
//     const url = "https://api.thecatapi.com/v1/images/search"
//     const response = await fetch(url)
//     const data = await response.json()
// }

const url2 = 'https://open-weather13.p.rapidapi.com/city/landon';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '858689371bmshf8643ba1691968dp16c6afjsn01257654bc2a',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};
const weather1 = async () => {

try {
	const response = await fetch(url2, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}



//CLASSES 
class User {
    constructor(name, email, pass){
        this.name = name;
        this.email = email;
        this.pass = pass;
    }
    encryptPass(){
        return `${this.pass}.asx`
    }
    capitaliseName(){
        return `${this.name.toUpperCase()}`
    }
}
const Ashhar = new User("Ashhar", "ashhar@gmail.com", "payhas12")
// console.log(Ashhar.capitaliseName())



class Car {
    constructor(name, color, speed) {
    this.name = name;
    this.color = color;
    this.speed = speed;
    }
    drive() {
        this.speed += 10
        // console.log(`speed increased to ${this.speed}`)
    }
}
 const lambo = new Car("lambo", "brown", 350)
//  console.log(lambo.drive())
lambo.drive()
lambo.drive()
lambo.drive()
//  console.log(lambo.speed)

 x=[1,3 ,4]
 x[4]= null
 x[5]= 'apple'
 x .push('assas')
//  console.log(x)

 //Array.prototype this allows to get access it array class
 //adding own methods
 Array.prototype.myPush = function(item){
    this[this.length] = item
    return this  
 }

 const fruits = ['apple', 'car', 'guava', 'sos']
 fruits.myPush('orange')
 fruits.push('coconut', 'brinjal')
 fruits.myPush("banana")
 
 console.log(fruits)

 //Bank Class
 // Methods -> withdraw(), deposit(), showBdalance()