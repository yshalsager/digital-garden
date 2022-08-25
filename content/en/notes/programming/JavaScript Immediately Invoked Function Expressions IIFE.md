---  
updated: 2022-06-20 19:38  
created: 2022-06-13 00:00  
title: JavaScript Immediately Invoked Function Expressions IIFE  
  
aliases:  
  - JavaScript Immediately Invoked Function Expressions (IIFE)  
share: true  
website: en/notes/programming  
---  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
### IIFE  
  
- Sometimes in JavaScript, we need a function that disappears right after it's called once).  
- This can be done by writing the function expression without assigning it to any variable then wrapping all of this into parentheses (transforming the statement into an expression).  
- It's useful for encapsulating data, since inner scope won't be accessed by any outer one.  
- This technique will be needed with `async`/`await`.  
  
```js  
// IIFE  
  
// Normal function  
(function () {  
  console.log("This will never run again");  
  const isPrivate = 23;  
})();  
  
// Arrow function  
(() => console.log("This will ALSO never run again"))();  
```  
  
- In modern JavaScript IIFE is not used widely because [blocks](,%20JavaScript%20Scoping#Block%20ES6) can be used for achieving the same behavior with variables.  
  
```js  
{  
  const isPrivate = 23;  
  var notPrivate = 46;  
}  
// console.log(isPrivate); // Can't be accessed  
console.log(notPrivate); // Can be accessed  
```  
