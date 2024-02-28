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