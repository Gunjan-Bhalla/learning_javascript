//for loop 


for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);   
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is the best number");
    }
    console.log(element);
}

for (let j = 1; j <= 10; j++) {
    console.log(`Outer loop value &{j}`);
    for (let i = 1; i <= 10; i++) {
        // console.log(`Inner loop value ${i} and inner loop ${j}`);
        console.log(i + '*' + j + '=' + i*j);
        
    }
    
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}

//break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`);
}
