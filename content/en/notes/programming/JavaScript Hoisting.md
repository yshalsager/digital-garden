---  
updated: 2022-06-20 19:38  
created: 2022-06-06 00:00  
title: JavaScript Hoisting  
aliases:  
  - JavaScript Hoisting  
share: true  
website: en/notes/programming  
---  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #\ملاحظة_مؤرشفة  
المراجع:: [syahshiimi's notes](https://github.com/syahshiimi/second-brain/blob/a6bbf926dc6a391717c005c47e7f5b6a5e9327d9/05%20Learning/00%20JavaScript/202107052109%20JavaScript%20Hoisting.md), [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
## What is Hoisting?  
  
Hoisting makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope".  
  
## How does it work?  
  
Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object.  
  
## What gets Hoisted?  
  
|                                        | **Hoisted** |             **Initial Value**             |       **Scope**        |  
| :------------------------------------: | :---------: | :---------------------------------------: | :--------------------: |  
|          function declaration          |     Yes     |              Actual function              | Block (in strict mode) |  
|            `var` variables             |     Yes     |                 undefined                 |        Function        |  
|       `let` / `const` variables        |     No      |            uninitialized - TDZ            |         Block          |  
| function expressions / arrow functions |             | Depends on using `var` or `let` / `const` |                        |  
  
- `var` variables are often hoisted, where it can be called before it is even declared, creating an `undefined` value.  
- It is thus recommended to use only the `let` or `const` elements to ensure modern best-practices when writing ES6.  
- `let` and `const` are **not** hoisted and are instead in a state of being `uninitialized`. Also known as the TDZ (temporal dead zone).  
  
#### Temporal Dead Zone  
  
- Basically the region of the scope in which the variable is **defined, but can't be used** in any way.  
- Every `let` and `const` variable get their own Temporal Dead Zone that **starts at the beginning of the scope until the line where it is defined**, and is only safe to use after the TDZ.  
- The TDZ was introduced in ES6 to make it easier to avoid and catch errors: accessing variables before declaration is **bad practice** and should be avoided.  
- The TDZ makes `const` variables works the way they should.  
  
```js  
const myName = "Jonas";  
  
if (myName === "Jonas") {  
  // start of TDZ for job variable  
  console.log(`Jonas is a ${job}`); // ReferenceError: Cannot access 'job' before initialization  
  const age = 2037 - 1989;  
  console.log(age);  
  // end of TDZ for job variable  
  const job = "teacher";  
  console.log(x); // ReferenceError: x is not defined  
}  
```  
  
## Why does Hoisting exist?  
  
- To make it possible to use function before actual declaration.  
- Essential for some programming techniques, such as mutual recursion.  
- Makes code a lot more readable.  
- Hoisting of var variables is basically just a byproduct of hoisting functions.  
  
## Best Practices  
  
- Use `const` / `let` only and not `var`.  
- Use `const` most of the time to declare variables and `let`, if you really need to change the variable later.  
- Declare your variables at the top of each scope.  
- Declare all your functions (whatever there type are) first and use them only after the declaration.  
