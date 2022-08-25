---  
updated: 2022-06-20 19:38  
created: 2022-06-06 00:00  
title: JavaScript Engine  
aliases:  
  - JavaScript Engine  
share: true  
website: en/notes/programming  
---  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [syahshiimi's notes](https://github.com/syahshiimi/second-brain/blob/a6bbf926dc6a391717c005c47e7f5b6a5e9327d9/05%20Learning/00%20JavaScript/202106301857%20%20The%20JavaScript%20Engine.md), [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
How the JavaScript Engine is executed is through the `call stack ` and the `heap`.  
  
# Compilation vs Interpretation  
  
## Compilation  
  
An entire code is converted into machine code and later executed via a binary file.  
  
## Interpretation  
  
- The interpreter runs through the source code and instead only executed all at the same time. It is only run **before** it was executed.  
- Interpreted languages are often slower.  
- Modern JavaScript engine uses a mix of both compilation and interpreted approaches known as _just in time_ compilation. It is compiled beforehand into machine code and executed _just on time_.  
  
# JavaScript Engine  
  
## Step One: Parsing is also known as 'reading the code'.  
  
## Step Two: Compilation via the AST  
  
- AST: Abstract Syntax Tree.  
- It has nothing to do with DOM.  
  
## Step Three: Execution  
  
This step happens in the `call stack`.  
  
## Step Four: Optimization  
  
The Engine optimizes the execution continuously.  
  
# What is a JavaScript Runtime?  
  
- We can imagine a JavaScript runtime as a huge box which includes all the important stuff we need to run the code.  
- In order to work properly, WEB API's offer greater functionalities but **are not** part of the JavaScript Runtime.  
- A typical JavaScript Runtime also includes a `callback queue`. This functions allows us or attach event handlers to DOM elements and these are also called `callback functions`.  
