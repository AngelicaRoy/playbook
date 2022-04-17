/*
Define a recursive function isEven corresponding 
to this description. The function should accept a 
single parameter (a positive, whole number) and 
return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

// Your code here.

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false
*/
function isEven(number){
    if(number>1){
        return number%2==0;
    }else{
        return isEven(number);
    }
}
console.log(isEven(3));