const coding = ["js", "ruby", "java", "javascript", "cpp"]
// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach((item) =>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
    languaugeName: "Javascript",
    languageFileName: "js"
    },
    {
    languaugeName: "Java",
    languageFileName: "java"
    },
    {
    languaugeName: "CPP",
    languageFileName: "C++"
    },

]
myCoding.forEach((item) => {
    console.log(item.languaugeName);
})