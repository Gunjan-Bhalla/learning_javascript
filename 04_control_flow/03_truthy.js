const userEmail = "gb@gmail.com";

if(userEmail){
    console.log("Got user email")
}
else{
    console.log("don't have user email")
}

// falsy values
// ----> false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// ----> true, [], "0", 'false', " ",{}, function(){},

if(userEmail.length === 0){
    console.log("Array is Empty")
}

const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
    console.log("object is empty");
}



// false == 0 -----> true
// false == '' -----> true
// 0 == '' -----> true


//Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
console.log(val1);