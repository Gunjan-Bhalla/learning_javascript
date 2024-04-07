const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    js: 'Javascript',
    java: 'Java'
}

for (const key in myObject) {
    console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", 'cpp', "java", "rb"]
for (const key in programming) {
    console.log(key);
}


const map = new Map()
map.set('IN',"India");
map.set('USA', "United States of America");
map.set('FR', "France");

for (const key in object) {
   console.log(key);
}