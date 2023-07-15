// Good Luck! You got this 💪🏾
// Write your code here.
function calculator(num1 , num2 , operator){
let result;
if(operator==="+"){
    result= num1 + num2
}else if(operator==="-"){
    result=num1-num2
}else if(operator==="/"){
    result=num1/num2
}else if(operator==="*"){
    result=num1*num2
}

console.log("The result is: " + result);
}
calculator(5, 11, "+"); 
calculator(8, 9, "-");
calculator(1, 1, "/");
calculator(5, 5, "*"); 
calculator(6, 9, "%"); 