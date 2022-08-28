---  
updated: 2022-06-20 19:38  
created: 2022-06-07 00:00  
title: JavaScript Logical Assignment Operators  
aliases:  
  - JavaScript Logical Assignment Operators  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
  - JavaScript  
---  
  
  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
- Introduced in ES2021.  
- **OR** assignment operator (`||=`): assigns a variable to a variable if that variable is currently **[falsy](JavaScript%20Truthy%20and%20Falsy)**.  
- **[Nullish](JavaScript%20Nullish%20Coalescing%20Operator)** assignment operator (`??=`): assigns a variable to a variable if that variable is currently **null**.  
- **AND** assignment operator (`&&=`): assigns a variable to a variable if that variable is currently **[truthy](JavaScript%20Truthy%20and%20Falsy)**.  
  
```js  
// Logical Assignment Operators  
const rest1 = {  
  name: "Capri",  
  numGuests: 20,  
};  
const rest2 = {  
  name: "La Piazza",  
  owner: "Giovanni Rossi",  
};  
// Set default number if numGuests doesn't exist  
// OR assignment operator  
rest1.numGuests = rest1.numGuests || 10; // 20  
rest2.numGuests = rest2.numGuests || 10; // 10  
// Logical  
rest1.numGuests ||= 10; // 20  
rest2.numGuests ||= 10; // 10  
// Nullish assignment operator (null or undefined)  
// Logical  
rest1.numGuests ??= 10;  
rest2.numGuests ??= 10;  
// AND assignment operator  
rest1.owner = rest1.owner && "<ANONYMOUS>"; // 'undefined'  
rest2.owner = rest2.owner && "<ANONYMOUS>"; // '<ANONYMOUS>'  
// Logical  
rest1.owner &&= "<ANONYMOUS>"; // nothing happens since rest1.owner isn't true  
rest2.owner &&= "<ANONYMOUS>"; // '<ANONYMOUS>'  
```  
