// Primitive
// call by value
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); //output => false

const bigNumber = 78923456756655n;



//Reference (Non-Primitive)

//Array, Objects, Functions

const cartoons = ["Doraemon", "Shinchan", "Mr. Bean"]
let myObj = {
    name : "nobita",
    age : 22
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction);

//https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap (Non - Primitive)

 let myName = "Doraemon";

 let anotherName = myName
 anotherName = "Nobita"
  

 console.log(myName);
 console.log(anotherName);


 let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
 }

 let userTwo = userOne
 userTwo.email = "doraemon@google.com"
 
 console.log(userOne.email);
 console.log(userTwo.email)