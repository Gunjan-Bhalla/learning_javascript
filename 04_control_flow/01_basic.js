//if --> condition is true toh code execute hoga that is copewill run and condition is false toh code executue nai hoga that is scope will not run.

const isUserLoggedIn = true
const temperature = 50;

if(temperature < 50){
    console.log("less than 50")
} else{
    console.log("greater than 50")
}

if(2 == "2" ){
    console.log("executed");
    //but is is not equal to qki ek int and ek string isliye we use ===

}

// <, >, <=, >=, ==, !=, ===, !==


const score = 200;
if(score > 100){
    const power = "fly";
    console.log(`User power: ${power}`);
}

const balance = 1000;
// is tarah se nai krna hai
// if(balance > 500) console.log("test"), console.log("test2")

if(balance < 500){
    console,log("less than 500");
} 
else if(balance < 750){
    console.log("less tha 750");
}
else{
    console.log("less than 1200");
}


const UserLoggedIn = true;
const debitCard = true;
const LoggedInFromGoogle = false;
const LoggedInFromEmail = true;

if(UserLoggedIn && debitCard){
    console.log("Allow to buy")
}
if(LoggedInFromEmail || LoggedInFromGoogle){
    console.log("Alllow")
}