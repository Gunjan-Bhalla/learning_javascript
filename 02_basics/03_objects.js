/* Objects can be declare in 2 ways:
1 --> litreal
2 --> constructor
*/

//singleton --> jab bi koi constructor bnate hai toh singleton ek object hota hai

/* litreals mai singleton nahi bnega and constructors mai bnega. */

//objects litreals

const mySym = Symbol("key1")

const JsUser = {
    name: "Doraemon",
    age: 18,
    [mySym]: "myKey1",
    location: "Jaipur",
    email: "doraemon@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])

JsUser.email = "doraemon@cartoon.com"  
Object.freeze(JsUser)
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting)
console.log(JsUser.greetingTwo)