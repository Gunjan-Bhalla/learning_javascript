// Immediately Invoked Function Expressions (IIFE)

 function chai() {
    console.log(`DB CONNECTED`);
 }
 chai();


 (function chai() {
    // named iife
    console.log(`DB CONNECTED`);
 })();


 // why do we use iife
 // ==> jo function immeditalety execute ho jae
 // ==> global scope k pollution se dikkat hoti hai kai baar toh toh global chope k variables ko htane k liye

 ((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
 })('Gunjuunnnn')