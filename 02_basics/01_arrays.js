/* array?
--> storing a collection of multiple item under a single variable name
JS arrays are resizeable & contain a mix of different datatypes
JS arrays are not associative arrays
JS arrays are zero indexed
JS array-copy operations create SHALLOW COPIES(A shallow copy of an object is a copy whose properties share the same
    reference (point to the same underlying values)as those.)
*/

const myArr = [0,1,2,3,4,5]
const cartoons = ["Doraemon", "Nobita", "Shizuka", "Gian"]

const myNewArr = new Array(1,2,3,4,5)

console.log(myArr[0]);


//Array methods
myArr.push(6) //adds the value

myArr.pop() //it removes the last element of the array
console.log(myArr);
//output --> [0,1,2,3,4,5,6]

 myArr.unshift(9) //it adds the 9 in the first place
 myArr.shift() //it removes the first place

 console.log(myArr.includes(100)); //gives result in true/false

 console.log(myArr.indexOf(4)); //gives the index value

 const newArr = myArr.join()
 console.log(myArr); //output --> is in array
 console.log(typeof newArr); //output --> is in string


 //slice, spice
 console.log("A ", myArr);
 const myn1 =myArr.slice(1,3) //output -->[1, 2]
 console.log(myn1);
 console.log("B ", myArr);

 const myn2 = myArr.spice(1, 3) //it manipulates the original array
 console.log("C ", myArr);
 console.log(myn2);

