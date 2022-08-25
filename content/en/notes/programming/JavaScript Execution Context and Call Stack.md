---  
updated: 2022-06-20 19:38  
created: 2022-06-06 00:00  
title: JavaScript Execution Context and Call Stack  
aliases:  
  - JavaScript Execution Context and Call Stack  
share: true  
website: en/notes/programming  
---  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [syahshiimi's notes](https://github.com/syahshiimi/second-brain/blob/a6bbf926dc6a391717c005c47e7f5b6a5e9327d9/05%20Learning/00%20JavaScript/202106301954%20Execution%20Context%20and%20Call%20Stack.md), [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
# How Is JavaScript Code Executed?  
  
## Top Level Code  
  
Top level codes are not inside a function which are through the creation of global-execution context.  
  
```js  
const name = "Person";  
```  
  
**Execution Context**: An environment where a piece of JavaScript code is executed and where it stores all the necessary information.  
  
## Execution of top-level code  
  
**There can only be one global execution context.**  
  
## Execution of functions and waiting for callbacks  
  
- The engine will execute on execution context per function. For each function, a new execution context is created.  
- These contexts together make the call stack.  
  
# Execution Context (In Detail)  
  
## What is inside an EC?  
  
1. Variable environment such as `var`, `let` or `const`.  
2. Functions  
3. Arguments object  
4. Scope Chain: references to variables that are located outside of the current function.  
5. _this_ keyboard  
  
### EC in Arrow functions  
  
In arrow functions, the EC won't have `arguments` object nor `this` keyword. Instead, they can use the `arguments` object and `this` from their closest regular function parent.  
  
# How Does The Function Know Where It Is?  
  
- We can understand this through the engine's `call stack`.  
- The `call stack` is a place where the execution context is set on top of each other to keep track of where we are.  
- The EC at the top of the call stack will be the one that is **running**.  
