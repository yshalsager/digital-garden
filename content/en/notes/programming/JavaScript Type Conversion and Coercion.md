---  
updated: 2022-06-20 19:38  
created: 2022-06-03 00:00  
title: JavaScript Type Conversion and Coercion  
aliases:  
  - JavaScript Type Conversion and Coercion  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
  - JavaScript  
---  
  
  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: <https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion>, [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
## Conversion  
  
JavaScript can only convert three types:  
  
- Numbers  
- Strings  
- Boolean  
  
It can't convert something to undefined or null.  
  
```js  
const year = "1999"; // string  
const yearNum = Number(year); // number  
console.log(+"23"); // 23  
console.log(Number("Name")); // NaN  
console.log(typeof NaN); // number? Weirdo JS  
const yearString = String(yearNum); // string  
```  
  
## Coercion  
  
```js  
console.log(`I am ${24} years old`); // number was converted to string  
const str = number + ""; // converts number to a string  
console.log("23" + "10" + 3); // = 23103, numbers were converted to strings and concatenated  
console.log("23" - "10" - 3); // = 10, strings were converted to numbers  
console.log("23" * "2"); // = 46, strings were converted to numbers  
console.log("23" / "2"); // = 11.5, strings were converted to numbers  
```  
