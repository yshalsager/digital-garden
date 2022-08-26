---  
title: JavaScript Timers  
created: 2022-06-21 10:29  
updated: 2022-06-21 10:58  
aliases:  
  - JavaScript Timers  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
---  
  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert), [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval), [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout), [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval), [clearTimeout](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout)  
  
---  
  
There are two types of timers in JavaScript:  
  
## `setTimeout`  
  
- `setTimeout`: sets a timer which executes a function or specified piece of code **once the timer expires**.  
- Syntax is `setTimeout(functionRef, delay, param1, param2, /* ... ,*/ paramN)`.  
- `delay` parameter is the time in milliseconds that the timer should wait before the specified function or code is executed.  
- Additional arguments can be passed through `setTimeout` to the function.  
- `setTimeout` is non blocking, the code will continue to execute.  
  
```js  
setTimeout(() => console.log(`Here is your pizza`), 1000);  
  
const ingredients = ['olives', 'cheese'];  
// passing arguments  
const pizzaTimer = setTimeout(  
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),  
  3000,  
  ...ingredients  
);  
console.log('Waiting...');  
// Waiting...  
// Here is your pizza  
// Here is your pizza with olives and cheese  
```  
  
- `clearTimeout(timeoutID)` method cancels a timeout previously established by calling `setTimeout()`.  
  - `timeoutID` The identifier of the timeout you want to cancel. This ID was returned by the corresponding call to `setTimeout()`.  
  
```js  
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);  
```  
  
## `setInterval`  
  
- `setInterval`: **repeatedly** calls a function or executes a code snippet, **with a fixed time delay** between each call.  
- The syntax is similar to `setTimeout`: `setInterval(func, delay, arg0, arg1, /* ... ,*/ argN)`.  
- `clearInterval(intervalID)` method cancels a timed, repeating action which was previously established by a call to `setInterval()`.  
  
```js  
setInterval(function () {  
  const now = new Date();  
  console.log(now);  
}, 1000);  
```  
  
## Note on cancelling intervals and timeouts  
  
It's worth noting that the **pool of IDs** used by `setInterval()` and `setTimeout()` **are shared**, which means you can technically use `clearInterval()` and `clearTimeout()` interchangeably. However, for clarity, you should avoid doing so.  
