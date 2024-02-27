const accountId = 1223345
let accountEmail = "doraemon@gmail.com"
var accountPassword = "12345678"
accountCity = "Chandigarh"
let accountState;

// accountId = 45678 
// const keyword = its a constant value, we are not allowed to change its value

accountEmail = "nobita@gmail.com"
accountPassword = "098765"
accountCity = "Bangalore"

/* Prefer not to use var bcoz of issue in block and functional scope*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])