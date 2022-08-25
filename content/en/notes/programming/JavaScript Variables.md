---  
updated: 2022-06-20 19:38  
created: 2021-12-15 00:00  
title: JavaScript Variables  
  
aliases:  
  - JavaScript Variables  
share: true  
website: en/notes/programming  
---  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #\ملاحظة_مؤرشفة  
المراجع:: [JavaScript Essential Training](JavaScript%20Essential%20Training)  
  
---  
  
## Variables and Data Types  
  
- Naming Objects: The creation of containers to put objects within.  
- Variable: A container with some piece of data.  
  
### var  
  
The `var` statement declares a **function-scoped** or **globally-scoped** variable, optionally initializing it to a value.  
  
```js  
var container = 5; // mutable  
container = "red";  
var x = 4,  
  y = 5,  
  z = "blue";  
var empty;  
```  
  
### let  
  
The let statement declares a block-scoped local variable, optionally initializing it to a value.  
  
```js  
var color = "purple";  
  
document.querySelector(".left").style.backgroundColor = color;  
document.querySelector(".left .color-value").innerHTML = color;  
  
color = "skyblue";  
  
function headingColor() {  
  let color = "blue"; // scoped  
  document.querySelector(".title").style.color = color;  
}  
  
headingColor();  
  
document.querySelector(".right").style.backgroundColor = color;  
document.querySelector(".right .color-value").innerHTML = color;  
```  
  
### Which to use?  
  
- For most situations, when you want to use a changeable or mutable variable, you should use a let.  
- That includes when you want to use it in global scope, because when you declare a let in global scope, it will apply everywhere except where you re-declare it.  
- The var is only really useful if you want a mutable variable with global scope all the time, but that situation is quite rare and is a special case.  
- So the default is, when you want a changeable or mutable variable use a let.  
  
### const  
  
Constants are block-scoped, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment, and it can't be re-declared. However, if a constant is an object or array, its properties or items can be updated or removed.  
  
```js  
const number = 42;  
```  
