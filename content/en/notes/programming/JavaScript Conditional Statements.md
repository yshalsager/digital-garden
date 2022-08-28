---  
updated: 2022-06-20 19:38  
created: 2021-12-15 00:00  
title: JavaScript Conditional Statements  
aliases:  
  - JavaScript Conditional Statement  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
  - JavaScript  
---  
  
  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [JavaScript Essential Training](JavaScript%20Essential%20Training)  
  
---  
  
## Conditional statements  
  
### If else  
  
```js  
if (everydayPack.lidOpen) {  
	console.log("Lid is open!™);  
} else {  
	console.log("Lid is closed :(");  
}  
```  
  
### Ternary Operator  
  
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator>  
  
```js  
// condition ? exprIfTrue : exprIfFalse  
everydayPack.lidOpen ? "open" : "closed";  
  
var age = 26;  
var beverage = age >= 21 ? "Beer" : "Juice";  
console.log(beverage); // "Beer"  
  
// Handling null values  
// One common usage is to handle a value that may be null  
let greeting = person => {  
  let name = person ? person.name : `stranger`;  
  return `Howdy, ${name}`;  
};  
console.log(greeting({ name: `Alice` })); // "Howdy, Alice"  
console.log(greeting(null)); // "Howdy, stranger"  
```  
  
### Conditional chains  
  
The ternary operator is right-associative, which means it can be "chained" in the following way, similar to an if … else if … else if … else chain:  
  
```js  
function example(…) {  
    return condition1 ? value1  
         : condition2 ? value2  
         : condition3 ? value3  
         : value4;  
}  
  
// Equivalent to:  
function example(…) {  
    if (condition1) { return value1; }  
    else if (condition2) { return value2; }  
    else if (condition3) { return value3; }  
    else { return value4; }  
}  
```  
