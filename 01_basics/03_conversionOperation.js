let score = "33";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => Nan (Not a Number)
// "true" => 1; "false" => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)

//1 => true; 0 => false
// " " => false
// "doraemon" => true

let someNumber = 33;

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)


// ****************************Operations******************************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);  // 2**3 => 2 raise to the power 2
console.log(2/3);
console.log(2%3);

let str1 = "Hello";
let str2 = " Doraemon";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);  //output => 12
console.log(1 + "2"); // output => 12
console.log("1" + 2 + 2); //output => 122
console.log(1 + 2 + "2"); // output => 32

console.log(+true); //output => 1
//console.log(true+); //output => error
console.log(+""); //output => 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2


let gameCounter = 100;
++gameCounter;
console.log(gameCounter);