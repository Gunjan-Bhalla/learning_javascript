const name = "doraemon"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Nobita-nb')
console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));


const newString = gameName.substring(0, 4);
//yha pe negative value nahi use kr kste
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = " doraemon   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://doraemon.com/doraemon%20nobita"
console.log(url.replace('%20', '-'));
console.log(url.includes('doaremon'))

console.log(gameName.split("-"));
