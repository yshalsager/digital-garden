---  
updated: 2022-06-20 19:38  
created: 2022-06-06 00:00  
title: JavaScript This Keyword  
aliases:  
  - JavaScript This Keyword  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
  - JavaScript  
---  
  
  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert), [JadeHendricks's notes](https://github.com/JadeHendricks/the-complete-javascript-course-2019/blob/9f805e5d4e3ca73a628eb2b51d22690928ec565c/How%20Javascript%20Works/This/script.js), [JadeHendricks's notes](https://github.com/JadeHendricks/the-complete-javascript-course-2019/blob/9f805e5d4e3ca73a628eb2b51d22690928ec565c/How%20Javascript%20Works/How%20Javascript%20Works.txt)  
  
---  
  
## What's this keyword?  
  
- `this` keyword/variable: Special variable that is created for every execution context (every function). Takes the value of (points to) the “owner” of the function in which the this keyword is used.  
- It is **NOT** static. It depends on **how** the function is called, and its value is only assigned when the function **is actually called**.  
  
## Where does the this variable point?  
  
- **In a regular function call:**  
  - In strict mode: `this` = `undefined`, even if the function is inside of a method.  
  - Otherwise, this keyword points to the global `window` object (in the browser).  
  
```js  
function calculateAge(year) {  
  console.log(2016 - year);  
  //The window object, because this is a regular function call and not a method  
  console.log(this);  
}  
```  
  
- **In a method call:** The this variable points to the object that is calling the method.  
  
```js  
const jonas = {  
  year: 1989,  
  calcAge: function () {  
    // method  
    console.log(this); // jonas object  
    console.log(2037 - this.year);  
  },  
};  
jonas.calcAge();  
```  
  
- **In an Arrow functions:** `this` = this of surrounding function (lexical this), since arrow functions doesn't own `this`.  
- **In an Event listener**: `this` = DOM element that the handler is attached to. ^EventListener  
- **new :** Later.  
- **call, apply, bind**: `this` = first parameter, which is object to call the function with. ^callApplyBind  
- `this` does **NOT** point to the function itself, and also **NOT** the its variable environment!  
  
## Note  
  
- The this keyword won't be not assigned a value until a function where it is defined is actually called, because the this variable is attached to the execution context... which is only created once a function is invoked (See [Execution Context and Call Stack](JavaScript%20Execution%20Context%20and%20Call%20Stack)).  
