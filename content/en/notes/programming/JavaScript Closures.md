---  
updated: 2022-06-20 19:38  
created: 2022-06-13 00:00  
title: JavaScript Closures  
  
aliases:  
  - JavaScript Closures  
share: true  
website: en/notes/programming  
---  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
- **Closures** are not a feature that we explicitly use, it **happens automatically** in certain situations, we just need to recognize those situations.  
- Closure makes a function **remember all the variables** that existed **when the function was created**.  
- Any function **always** has access to the **variable environment** of the [execution context](,%20JavaScript%20Execution%20Context%20and%20Call%20Stack#Execution%20Context%20In%20Detail) in which the function was **created**.  
- Even though when the **execution context** has actually been **destroyed**, the **variable environment** somehow **keeps living** somewhere in the engine.  
- A closure is the **closed-over variable environment** of the execution context **in which a function was created**, even **after** that execution context is gone.  
  
```js  
// Closures  
const secureBooking = function () {  
  let passengerCount = 0; // This variable will be accessed even after function isn't in the EC  
  return function () {  
    passengerCount++;  
    console.log(`${passengerCount} passengers`);  
  };  
};  
const booker = secureBooking(); // this makes booker a function as well  
booker(); // 1 passengers  
booker(); // 2 passengers  
booker(); // 3 passengers  
console.dir(booker); // Simliar to log, but allows more inspection like scopes  
  
// More Closure Examples  
let f; // define an empty variable  
const g = function () {  
  const a = 5; // set function scope variable  
  f = function () {  
    // set f value to a function  
    console.log(a * 2);  
  };  
};  
g();  
f(); // 10  
  
// Re-assigning f function  
const h = function () {  
  const b = 7;  
  f = function () {  
    console.log(b * 2);  
  };  
};  
  
h();  
f(); // 14  
  
// Example 2  
const boardPassengers = function (n, wait) {  
  const perGroup = n / 3;  
  setTimeout(function () {  
    // timeout functions are executed independently from its parent function  
    console.log(`We are now boarding all ${n} passengers`);  
    console.log(`There are 3 groups, each with ${perGroup} passengers`);  
  }, wait * 1000);  
  console.log(`Will start boarding in ${wait} seconds`);  
};  
const perGroup = 1000;  
boardPassengers(180, 3);  
  
// IIFE closure  
(function () {  
  const header = document.querySelector("h1");  
  header.style.color = "red";  
  document.querySelector("body").addEventListener("click", function () {  
    header.style.color = "blue"; // This function still have access to header, even though the parent function is executed already.  
  });  
})();  
```  
