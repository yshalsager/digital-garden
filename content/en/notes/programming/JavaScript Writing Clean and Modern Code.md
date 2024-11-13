---
title: JavaScript Writing Clean and Modern Code
created: 2022-08-16 13:01:00
updated: 2022-08-16 13:11:00
aliases:
  - JavaScript Writing Clean and Modern Code
share: true
cssclass: ltr
website: en/notes/programming
---

المعرفة:: [[JavaScript|JavaScript]]
الحالة:: #ملاحظة/مؤرشفة
المراجع:: [[./The Complete JavaScript Course 2022 From Zero to Expert|The Complete JavaScript Course 2022 From Zero to Expert]]

---

## Readable Code

- Write code so that **others** can understand it.
- Write code so that **you** can understand it in 1 year.
- Avoid too *clever* and **over-complicated** solutions.
- Use descriptive **variable** names: **what they contain**.
- Use descriptive **function** names: **what they do**.

## General

- Use **DRY** principle (refactor your code).
- Don't pollute global namespace, **encapsulate** instead.
- Don't use `var`.
- Use **strong type checks** (\- and `!==`).

## Functions

- Generally, **functions** should **do only one thing**.
- Don't use more than 3 function parameters.
- Use **default parameters** whenever possible.
- Generally, **return same data type** as received.
- **Use arrow functions** when they make code more readable.

## OOP

- Use [[./JavaScript OOP#ES6 Classes 2 ES6 Classes|ES6 classes]].
- Encapsulate data and **don't mutate** it **from outside** the class.
- Implement **method chaining**.
- **Do not use arrow functions as methods** (in regular objects).

## Avoid Nested Code

- Use early `return` (guard clauses).
- Use **ternary** (conditional) or logical operators instead of `if`.
- Use multiple `if` instead of `if/else-if`.
- Avoid `for` loops, use array methods instead.
- Avoid callback-based asynchronous APIs.

## Asynchronous Code

- Consume promises with `async`/`await` for best readability.
- Whenever possible, run promises in parallel ([[./JavaScript Asynchronous#Running Promises in Parallel with Promise all|Promise.all]]).
- Handle errors and promise rejections.
