---
title: JavaScript Declarative and Functional Principles
created: 2022-08-16 13:36:00
updated: 2022-08-16 14:09:00
aliases:
  - JavaScript Declarative and Functional Principles
share: true
cssclass: ltr
website: en/notes/programming
---

المعرفة:: [[JavaScript|JavaScript]]
الحالة:: #ملاحظة/مؤرشفة
المراجع:: [[./The Complete JavaScript Course 2022 From Zero to Expert|The Complete JavaScript Course 2022 From Zero to Expert]]

---

## Imperative Vs. Declarative Code

There are two fundamentally different ways of writing code (paradigms):

### Imperative

- Programmer explains **"HOW to do things"**.
- We explain the computer every single step it has to follow to achieve a result.
- **Example:** Step-by-step recipe of a cake.

### Declarative

- Programmer tells **"WHAT to do"**
- We simply describe the way the computer should achieve the result
- The **HOW** (step-by-step instructions) gets abstracted away.
- **Example:** Description of a cake.

## Functional Programming

- **Declarative** programming paradigm.
- Based on the idea of writing software by combining many **pure functions**, avoiding **side effects** and **mutating** data.
- **Side effect:** Modification (mutation) of any data **outside** of the function (mutating external variables, logging to console, writing to DOM, etc.).
- **Pure function:** Function without side effects. Does not depend on external variables. **Given the same inputs, always returns the same outputs**.
- **Immutability:** State (data) is **never** modified! Instead, state is **copied** and the copy is mutated and returned.
- Examples: React - Redux.

### Functional Programming Techniques

- Try to **avoid data mutations** (e.g. using `Object.freeze()`).
- Use built-in methods that don't produce side effects.
- Do data transformations with methods such as `.map()`, `.filter()` and `.reduce()`.
- Try to avoid side effects in functions: this is of course not always possible!

### Declarative Syntax

- Use [[./JavaScript Array Destructuring|Array]] and [[./JavaScript Object Destructuring|Object Destructuring]].
- Use the [[./JavaScript Spread Operator|Spread Operator]] (`...`).
- Use the [[./JavaScript Conditional Statements#Ternary Operator|ternary]] (conditional) operator.
- Use template literals.
