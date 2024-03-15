function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("Y");
    console.log("A");
}

sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
    
}


const add = addTwoNumbers(3, 5)  
// console.log("Result: ", result)


function logInUserMessage(username = "Sanya"){
    if(username === undefined){   //or we can write !username
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(logInUserMessage())



function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
// console.log(calculateCartPrice(200,400,500))

const user = {
    username : "Sanya",
    price : 300
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username : "Sanu",
    price : 200
})


const myNewArray = [200, 400, 600, 1000]

function returnSecondValue(getArray){
    return getArray[3]
}
console.log(returnSecondValue(myNewArray))