---  
updated: 2022-06-20 19:38  
created: 2021-12-15 00:00  
title: JavaScript Data Comparison  
aliases:  
  - JavaScript Comparison  
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
  
## Comparison  
  
```js  
// Unlike the strict equality operator, it attempts to convert and compare operands that are of different types.  
console.log(1 == 1);  
// expected output: true  
  
console.log("hello" == "hello");  
// expected output: true  
  
console.log("1" == 1);  
// expected output: true  
  
console.log(0 == false);  
// expected output: true  
  
// Unlike the equality operator, the strict equality operator always considers operands of different types to be different.  
console.log(1 === 1);  
// expected output: true  
  
console.log("hello" === "hello");  
// expected output: true  
  
console.log("1" === 1);  
// expected output: false  
  
console.log(0 === false);  
// expected output: false  
```  
