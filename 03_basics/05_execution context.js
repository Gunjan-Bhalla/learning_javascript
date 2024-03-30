/* JAVASCRIPT EXECTION CONTEXT CAN BE OF 3 TYPES BASICALLY:
1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context


javscript ek single threaded hai

Excution Context ==> iska matlab yeh hota hai ki jo bhi aapne file bnai hai usko javascript run kaise kregi



==> MEMORY EXECUTION PHASE:
isme jo bhi variables ya jo bhi declare kia hai uss k liye
jagah allocate hoti hai usko execute nai kia jata

==> EXECUTION PHASE:
isme mathematical function ka hota hai 
*/

let val1 = 10;
let val2 = 5;
function addNum(num1, num2){
    let total = num1 + num2;
    return total;
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)