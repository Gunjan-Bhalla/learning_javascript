console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1); //true but acc to typescript it is not allower to compare between two datatypes
console.log("02" > 1); //true but acc to typescript it is not allower to compare between two datatypes

console.log(null > 0); //output => false
console.log(null == 0); //output => false
console.log(null >= 0) //output => true

/* Actually the reason behind why the output is different is:
equality check == and comparison > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.
*/ 

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//output => always gives false


// === strict check

console.log("2" === 2);
console.log("2" == 2); 