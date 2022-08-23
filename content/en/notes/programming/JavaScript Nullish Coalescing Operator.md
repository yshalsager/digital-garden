---  
updated: 2022-06-20 19:38  
created: 2022-06-07 00:00  
title: JavaScript Nullish Coalescing Operator  
  
aliases:  
  - JavaScript Nullish Coalescing Operator  
share: true  
website: en/notes/programming  
---  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة/مؤرشفة  
المراجع:: [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
- Introduced in ES2020.  
- It works with the concept of nullish values (`null`/`undefined`) instead of fasly values. ^82e081  
- Values of `0`, `''`, or `false` are **NOT** **nullish** values, but they are falsy.  
  
```js  
restaurant.numGuests = 0;  
const guests1 = restaurant.numGuests || 10;  
console.log(guests1); // 10  
  
// Nullish: null and undefined (NOT 0, false or '')  
const guestCorrect = restaurant.numGuests ?? 10;  
console.log(guestCorrect); // 0  
```  
