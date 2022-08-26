---  
updated: 2022-06-20 19:38  
created: 2022-06-03 00:00  
title: JavaScript Equality and Strict Equality  
aliases:  
  - JavaScript Equality and Strict Equality  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
---  
  
  
المعرفة:: [JavaScript](JavaScript),  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality>, <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality>, [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
- The (loose) equality operator (`==`) checks whether its two operands are equal, returning a Boolean result. **It attempts to convert and compare operands that are of different types**.  
- The strict equality operator (`===`) checks whether its two operands are equal, returning a Boolean result. Unlike the [equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality) operator, the strict equality operator always **considers operands of different types to be different**.  
  
```js  
18 == 18; // true  
18 == 19; // false  
18 == "18"; // true  
18 === 18; // true  
18 === 19; // false  
18 === "18"; // false  
```  
