---
updated: 2022-06-20 19:38:00
created: 2022-06-06 00:00:00
title: JavaScript Scoping
aliases:
  - JavaScript Scoping
share: true
cssclass: ltr
website: en/notes/programming
---

المعرفة:: [[JavaScript|JavaScript]]
الحالة:: #ملاحظة/مؤرشفة
المراجع:: [syahshiimi's notes](https://github.com/syahshiimi/second-brain/blob/a6bbf926dc6a391717c005c47e7f5b6a5e9327d9/05%20Learning/00%20JavaScript/202107040014%20Scoping.md), [[./The Complete JavaScript Course 2022 From Zero to Expert|The Complete JavaScript Course 2022 From Zero to Expert]]

---

# Scope Concepts

## What Are Scopes?

Scoping controls how our programs variables are organised and accessed. Simply put, it asks **where do the variables live**, _how we can access it_ etc.

## Lexical Scoping

- Scoping is controlled by placement of functions and blocks in the code.
- The rules of where we can access variables are based on exactly where in the code functions and blocks are written.

## Scope

The scope is a space or an environment where the variable is declared.

## Scope of a variable

The region of our code where certain variables are accessed.

# Types of Scopes

## Global

For top level code, where variables are declared outside of **any** function or blocks. Accessible **everywhere**.

```js
const name = "A";
```

## Function (Local Scope)

Each function creates a scope, where its variable is _only accessible_ within the function.

```js
function square(number) {
  const squared = number * number;
  return squared;
}
conosle.log(squared); // ReferenceError
```

## Block (ES6)

- Variables that are accessible inside the block (if, for, while, etc).
- **This only applies to `let` and `const` variables.** Variables declared with `var` end up in the closest function scope.
- **Functions** are block scoped in [[./JavaScript Strict Mode|JavaScript Strict Mode]].

```js
if (year >= 1981 && year <= 1996) {
  const millenial = true;
}
console.log(millenial); // ReferenceError
```

# Scope Chain

- In general, the parent-child relationship of a scope chain allows variables to be used by the `child` element from the `parent` element.
- The `parent` element, however, will not have access to the `child` scope.
- When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it’s looking for. This is called variable lookup.

# Scope Chain vs Call Stack

Although the scope chain **allow us to create the order as to how we can call functions**, it has nothing to do with calling the functions itself within the [[./JavaScript Execution Context and Call Stack|call stack]].
