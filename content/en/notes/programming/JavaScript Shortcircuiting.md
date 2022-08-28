---  
updated: 2022-06-20 19:38  
created: 2022-06-07 00:00  
title: JavaScript Shortcircuiting  
aliases:  
  - JavaScript Shortcircuiting  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
  - JavaScript  
---  
  
  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [syahshiimi's notes](https://github.com/syahshiimi/second-brain/blob/2e6b1c9687a0b796978263a54191ebe31e7b608f/05%20Learning/00%20JavaScript/202107162328%20Shortcircuiting%20in%20JS.md), [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
There are two operators that allows us to perform shortcircuiting in JavaScript.  
  
1. `||` operator  
2. `&&` operator  
  
## How Does It Work?  
  
- The `||` operator will return the **first** **[truthy](JavaScript%20Truthy%20and%20Falsy)** value of all the operands or the **last**, if they are all **[falsy](JavaScript%20Truthy%20and%20Falsy)**  
- The `&&` operator will instead return the first **falsy** value of all the operands or the **last**, if they are **truthy**  
  
|            | **\|\|** | **&&** |  
| :--------: | :------: | :----: |  
| **truthy** |  first   |  last  |  
| **falsy**  |   last   | first  |  
  
## What Does Shortcircuiting Mean?  
  
When the operators are applied in an operand, it returns the first value to whichever the statement follows the **conditons** of the operator.  
  
## Limitations  
  
The operands will always read 0 as the falsy value. We can circumvent it with the [Nullish coalescing operator](JavaScript%20Nullish%20Coalescing%20Operator).  
  
```js  
restaurant.numGuests = 0;  
const guests1 = restaurant.numGuests || 10;  
console.log(guests1); // 10  
```  
  
## Examples  
  
```js  
// Short Circuiting (&& and ||)  
console.log("---- OR ----");  
// Use ANY data type, return ANY data type, short-circuiting  
console.log(3 || "Jonas"); // 3  
console.log("" || "Jonas"); // Jonas  
console.log(true || 0); // true  
console.log(undefined || null);  
console.log(undefined || 0 || "" || "Hello" || 23 || null); // Hello  
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;  
console.log(guests1); // 10  
restaurant.numGuests = 23;  
const guests2 = restaurant.numGuests || 10;  
console.log(guests2); // 23  
  
console.log("---- AND ----");  
console.log(0 && "Jonas"); // Jonas  
console.log(7 && "Jonas"); // Jonas  
console.log("Hello" && 23 && null && "jonas"); // null  
  
// check if method exists before using it  
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");  
```  
