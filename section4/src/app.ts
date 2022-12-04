// const userName= 'Max'

// let age = 30;

// age =29
// var result;
// function add (a:number,b: number){
//     result = a+b;
//     return result
// }



// if(age> 20){
//     let isOld = true
// }
// console.log(isOld)

// const add = (a: number,b:number =1)=> a+ b;

// const printOutput = (output: string |number) => console.log(output)

// const button = document.querySelector('button')

// if(button){
//     button.addEventListener('click', event => console.log(event))
// }

// printOutput(add(5))

const hobbies = ['Sports','Cooking'];
const activeHobbiese =['Hiking']

activeHobbiese.push(...hobbies)

const person ={
    firstName: 'Max',
    age: 30
}

const copiedPerson ={...person}

const add= (...numbers: number[]) =>{
   return numbers.reduce((curResult, curValue)=>{
        return curResult + curValue
    },0)
}
const addedNumber = add(5,10,2,3.7)
console.log(addedNumber)

const [hobby1, hobby2,...remainingHobbies] = hobbies;

console.log(hobbies,hobby1,hobby2)

const {firstName:userName, age} =person;
console.log(userName, age)

