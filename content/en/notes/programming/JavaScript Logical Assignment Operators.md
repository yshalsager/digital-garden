---
updated: 2022-06-20 19:38:00
created: 2022-06-07 00:00:00
title: JavaScript Logical Assignment Operators
aliases:
  - JavaScript Logical Assignment Operators
share: true
cssclass: ltr
website: en/notes/programming
---

المعرفة:: [[JavaScript|JavaScript]]
الحالة:: #ملاحظة/مؤرشفة
المراجع:: [[./The Complete JavaScript Course 2022 From Zero to Expert|The Complete JavaScript Course 2022 From Zero to Expert]]

---

- Introduced in ES2021.
- **OR** assignment operator (`||=`): assigns a variable to a variable if that variable is currently **[[./JavaScript Truthy and Falsy|falsy]]**.
- **[[./JavaScript Nullish Coalescing Operator|Nullish]]** assignment operator (`??=`): assigns a variable to a variable if that variable is currently **null**.
- **AND** assignment operator (`&&=`): assigns a variable to a variable if that variable is currently **[[./JavaScript Truthy and Falsy|truthy]]**.

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
