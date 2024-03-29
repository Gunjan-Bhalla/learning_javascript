
/* also the global scope elements can access the element of local scope but not vice versa
*/
let a = 500; 
if(true){
    let a = 10;
    const b = 20;
    var c = 30;

    console.log(`The value in local scope is ${a}`)
}
console.log(a);
// console.log(b);
// console.log(c);

/*now in this the var value comes up again and again and if the 10 people working on this
they dont know from where the value is coming so thats why we ignore var.*/



function one(){
    const username = "gunjan"

    function two(){
        const website = "github"
        console.log(username);
    }
    //console.log(website)
    two()
}
one()

if (true){
    const username = "Sanya";
    if(username === "Sanya"){
        const website = "github";
    console.log(`${username} + ${website}`)    
    }

}


// ++++++++++++++++++ INTERSETING ++++++++++++++++++++++++++++++++++++++++++++++

addOne(5)
function addOne(num){
    return num + 1;
}


//yeh isliye error dera hai qki yeh declare kr dia hai
addTwo(10)
const addTwo = function(num){
    return num + 2;
}
