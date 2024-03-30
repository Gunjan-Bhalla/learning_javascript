const user = {
    username : "sanya",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome here.`)

        console.log(this);
    }
}
user.welcomeMessage()
user.username = "Gunjan"
user.welcomeMessage()




function chai(){
    let username = "Gunjuunnnn"
    console.log(this.username)
}
//output == > undefined


const chai = function(){
    let username = "Gunjuunnnn"
    console.log(this.username)
}
//output == > undefined


const chai = () => {
    let username = "Gunjuunnnn"
    console.log(this);
}
//output == > {}

chai()

// curly braces use hua toh return likhna pdega and () use hua toh nahi

const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4))

// IMPLICIT WAY  ++++++++++++++++++++++++

const addToo = (num1, num2) => num1 + num2

// or

const addTooo = (num1, num2) => (num1 + num2)

const namePrint = (num1, num2) => ({username : "Gunjuuunnnnn"})

console.log(addToo(3, 4))


const myArray = [2 ,3, 4, 5, 6, 7]
/*myArray.forEach(() => {})
//or
myArray.forEach(function () {})
//or
myArray.forEach(() => ())*/
