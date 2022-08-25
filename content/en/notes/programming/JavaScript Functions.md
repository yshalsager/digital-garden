---  
updated: 2022-07-30 10:13  
created: 2022-06-03 00:00  
title: JavaScript Functions  
aliases:  
  - JavaScript Functions  
share: true  
website: en/notes/programming  
---  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #\ملاحظة_مؤرشفة  
المراجع:: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions>, , [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert), [syahshiimi's notes](https://github.com/syahshiimi/second-brain/blob/bfa3eed7bb280d6516806e517cba1e8d3822ca21/05%20Learning/00%20JavaScript/202108291316%20Abstraction%20in%20Programming%20with%20First%20Class%20Functions.md), [JavaScript Essential Training Notes](JavaScript%20Essential%20Training%20Notes)  
  
---  
  
## Function Declarations  
  
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_declarations "Permalink to Function declarations")  
  
```js  
function square(number) {  
  return number * number;  
}  
```  
  
- A function that can be used before it's declared, because of [hoisting](JavaScript%20Hoisting)  
  
## Function Expressions  
  
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_expressions "Permalink to Function expressions")  
  
```js  
const square = function (number) {  
  return number * number;  
};  
```  
  
- A function value stored in a variable.  
  
## Arrow Functions  
  
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#arrow_functions "Permalink to Arrow functions")  
  
```js  
const square = number => number * number;  
// const square = (number) => return number * number;  
```  
  
- Great for one-line functions, but doesn't have access to `this` or `arguments` keywords.  
- Best practice is to not use as method.  
  
```js  
const jonas = {  
  firstName: "Jonas",  
  year: 1991,  
  greet: () => {  
    console.log(this); // window  
    console.log(`Hey ${this.firstName}`); // Hey undefined  
  },  
};  
jonas.greet();  
```  
  
## Default Parameters  
  
- It can contain any expression or make use of values of other parameters before it.  
  
```js  
// ES5  
const createBooking = function (flightNum, numPassengers, price) {  
  numPassengers = numPassengers || 1;  
  price = price || 199;  
  …  
};  
  
// ES6  
const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {…};  
```  
  
## How passing function arguments work?  
  
Related to: [(Primitive vs. Reference Types)](JavaScript%20Primitives%20vs%20Objects%20-%20Primitive%20vs%20Reference%20Types).  
  
- In case of passing primitive type (e.g. a string or a number) to the function, the argument is a copy of the variable value, and not the original variable.  
- But, when a reference type is passed (e.g. an object or an array), the argument is a reference to the object in the memory heap.  
- So, it works just same as copying the variable outside of the function.  
- JavaScript does not having passing by references, only passing by value, even in reference types case, in which it passes a value to the reference and not the reference itself.  
  
```js  
const flight = "LH234";  
const jonas = {  
  name: "Jonas Schmedtmann",  
  passport: 24739479284,  
};  
const checkIn = function (flightNum, passenger) {  
  flightNum = "LH999";  
  passenger.name = "Mr. " + passenger.name;  
  if (passenger.passport === 24739479284) {  
    alert("Checked in");  
  } else {  
    alert("Wrong passport!");  
  }  
};  
checkIn(flight, jonas);  
// jonas object name was modified by the function, while the flight string didn't.  
console.log(flight); // 'LH234'  
console.log(jonas); // {name: 'Mr. Jonas Schmedtmann', passport: 24739479284}  
```  
  
## First-Class vs. Higher-Order Functions  
  
### First-class Functions  
  
- JavaScript treats functions as **first-class citizens**. (language feature)  
- This means that functions are **simply values**.  
- Functions are just another Functions are just another **“type” of object**.  
- Functions can be stored in variables or properties.  
- Functions can be passed as arguments to other functions.  
  
```js  
// Functions can be stored in variables  
const add = (a, b) => a + b;  
  
// Functions can be stored in properties  
const counter {  
  value: 23,  
  inc: function() { this.value++; }  
};  
  
// Functions can be passed as arguments to other functions  
const greet = () => console.log("Hello");  
btnClose.addEventListener('click', greet); // greet is passed to addEventListener  
```  
  
- We can return functions from functions.  
- We can also call methods on functions. `counter.inc.bind(someOtherObject);`  
  
### Higher-order Functions  
  
- A function that **receives** another function as an argument, that **returns** a new function, or **both**.  
- This is only possible because of first-class functions.  
  
```js  
// Function that receives another function  
const greet = () => console.log("Hello");  
// addEventListener is higher-order function, while greet is a callback function  
btnClose.addEventListener("click", greet);  
  
// Function that returns new function  
function count() {  
  // Higher-order function  
  let counter = 0;  
  return function () {  
    // Returned function  
    counter++;  
  };  
}  
```  
  
### Abstraction in Programming with First Class Functions  
  
- JavaScript uses first class functions and a higher order functions to implement callback functions to allow us to create abstractions  
- We can create a **higher level logic by hiding things** that a function does that does not need to be shown. We can do this by having functions that can then be used as callback functions in another function.  
- A 'higher level' function will **not care on how the argument it passes works**. We can just use another function in it, by abstracting and thus delegating functions to other 'lower' level functions.  
- This is important in OOP to ensure that the code base is more focused.  
  
### Code Examples  
  
#### Functions Accepting Callback Functions  
  
```js  
const oneWord = function (str) {  
  return str.replace(/ /g, "").toLowerCase();  
};  
// Higher-order function  
const transformer = function (str, fn) {  
  console.log(`Original string: ${str}`);  
  console.log(`Transformed string: ${fn(str)}`);  
  console.log(`Transformed by: ${fn.name}`);  
};  
transformer("JavaScript is the best!", oneWord);  
```  
  
#### Functions Returning Functions  
  
```js  
const greet = function (greeting) {  
  return function (name) {  
    console.log(`${greeting} ${name}`);  
  };  
};  
const greeterHey = greet("Hey");  
greeterHey("Jonas"); // Hey Jonas  
greet("Hello")("Jonas"); // Hey Jonas  
// Same with arrow functions  
const greetArr = greeting => name => console.log(`${greeting} ${name}`);  
greetArr("Hi")("Jonas"); // Hi Jonas  
```  
  
## Call and Apply  
  
- Function methods explicitly set `this` keyword by setting the object that function will be calling with.  
- They do the same thing, but the difference is that `call` accepts additional arguments, while `apply` doesn't receive a list of arguments after this keyword, but instead it takes an array of arguments.  
- Apply method is less used in modern JavaScript, because we can do the same thing with call and spread operator.  
  
```js  
const lufthansa = {  
  airline: "Lufthansa",  
  iataCode: "LH",  
  bookings: [],  
  // book: function() {}  
  book(flightNum, name) {  
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);  
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });  
  },  
};  
  
const eurowings = {  
  airline: "Eurowings",  
  iataCode: "EW",  
  bookings: [],  
};  
  
// Set a new variable to book function value  
const book = lufthansa.book;  
// Does NOT work, because this points to undefined  
// book(23, 'Jonas');  
  
// Call method  
book.call(eurowings, 23, "Jonas"); // this = eurowings  
  
// Apply method  
const swiss = {  
  airline: "Swiss Air Lines",  
  iataCode: "LX",  
  bookings: [],  
};  
const flightData = [583, "George Cooper"];  
book.apply(swiss, flightData);  
console.log(swiss);  
  
// Call with spread  
book.call(swiss, ...flightData);  
```  
  
## Bind  
  
- Just like `call` and `apply`, `bind` allows to manually set `this` keyword for any function call, the difference is that it doesn't immediately call the function but instead, it returns a new function where `this` keyword is bound.  
  
```js  
// The bind Method  
// book.call(eurowings, 23, 'Sarah Williams');  
const bookEW = book.bind(eurowings);  
bookEW(23, "Steven Williams");  
```  
  
- We can also pass additional arguments to `bind`, then we call the new method it will called with these arguments. (partial application)  
  
```js  
const bookEW23 = book.bind(eurowings, 23);  
bookEW23("Jonas Schmedtmann");  
```  
  
### Using `bind` with Event Listeners  
  
- Remember that:  
  
![](,%20JavaScript%20This%20Keyword#%5EEventListener)  
  
- So, to use a function that requires this with an event listener we need to use `bind`.  
  
```js  
// With Event Listeners  
lufthansa.planes = 300;  
lufthansa.buyPlane = function () {  
  console.log(this);  
  this.planes++;  
  console.log(this.planes);  
};  
document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane.bind(lufthansa));  
```  
  
### Partial Application  
  
- Partial application means pre-setting the function parameters.  
- `bind` can be used for partial application without the need for setting `this` by simply setting it to `null`.  
  
```js  
// Partial application  
const addTax = (rate, value) => value + value * rate;  
console.log(addTax(0.1, 200)); // 220  
const addVAT = addTax.bind(null, 0.23);  
// Achieving the same as previous line without bind  
// addVAT = value => value + value * 0.23;  
console.log(addVAT(100)); // 123  
```  
  
## Immediately Invoked Function Expressions (IIFE)  
  
![](,%20JavaScript%20Immediately%20Invoked%20Function%20Expressions%20(IIFE)#IIFE)  
  
## Old Notes  
  
### Functions and Methods  
  
### Standard Function  
  
<https://developer.mozilla.org/en-US/docs/Glossary/Function>  
  
```js  
/**  
 * Working with functions  
 */  
  
// Function declaration:  
// global  
function doSomeMath(a, b) {  
  let c = a + b;  
  return c;  
}  
  
// Function expression:  
// have same scope as variable  
const doMoreMath = function (a = 3, b = 2) {  
  let c = a * b;  
  return c;  
};  
  
console.log("Do some math:", doSomeMath(5, 6));  
console.log("Do more math:", doMoreMath(5, 6));  
  
// Immediately Invoked Function Expression (IIFE)  
(function () {  
  let a = 4;  
  let b = 6;  
  let c = doSomeMath(a, b);  
  console.log(`The sum of a and b is: ${c}`);  
})();  
```  
  
```js  
/**  
 * A standard function  
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function  
 */  
  
const greenPack = {  
  name: "Frog Pack",  
  color: "green",  
  volume: 8,  
  pocketNum: 3,  
};  
  
const addPack = function (currentPack) {  
  const newArticle = document.createElement("article");  
  newArticle.innerHTML = `  
    <h1>${currentPack.name}</h1>  
    <ul>  
      <li>Volume: ${currentPack.volume}</li>  
      <li>Color: ${currentPack.color}</li>  
      <li>Number of pockets: ${currentPack.pocketNum}</li>  
    </ul>  
  `;  
  return newArticle;  
};  
  
const main = document.querySelector("main");  
main.append(addPack(greenPack));  
```  
  
### Arrow function expressions  
  
- Arrow functions are just a simpler way of writing anonymous functions, they produce a lot cleaner code.  
- Function declarations can be hoisted, meaning you can call the function before it is declared in JavaScript. Arrow functions on the other hand can only be called after they have been declared.  
- You can't use arrow functions when declaring methods in an object. Inside an object, if you have a method you need to use a proper anonymous function declaration.  
- You can reduce and simplify the arrow function syntax to the point where it becomes really hard to understand what's going on (just the parameter and the arrow and it points directly as the output).  
  
```js  
// Traditional Anonymous Function  
function (a){  
  return a + 100;  
}  
  
// Arrow Function Break Down  
// Note: Each step along the way is a valid "arrow function".  
  
// 1. Remove the word "function" and place arrow between the argument and opening body bracket  
(a) => {  
  return a + 100;  
}  
  
// 2. Remove the body braces and word "return" -- the return is implied.  
(a) => a + 100;  
  
// 3. Remove the argument parentheses  
a => a + 100;  
```  
  
```js  
// old  
// const addPack = function (currentPack) {  
const addPack = currentPack => {  
  const newArticle = document.createElement("article");  
  newArticle.innerHTML = `  
    <h1>${currentPack.name}</h1>  
    <ul>  
      <li>Volume: ${currentPack.volume}</li>  
      <li>Color: ${currentPack.color}</li>  
      <li>Number of pockets: ${currentPack.pocketNum}</li>  
    </ul>  
  `;  
  return newArticle;  
};  
```  
  
### Arrow functions and this  
  
If you're using 'this' in a method within an object, and you then get an odd result, try turning the function into an arrow function to see if that solves the problem. Most likely, you're dealing with the wrong scope and an arrow function will help you get the correct scope because it doesn't carry its own scope with it.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#arrow_functions>  
  
```js  
/**  
 * How arrow functions help us with scoping.  
 */  
  
// Define a default volume for the window (the entire DOM):  
window.volume = 20;  
  
const greenPack = {  
  name: "Frog Pack",  
  color: "green",  
  volume: 8,  
  pocketNum: 3,  
  newVolume: function (volume) {  
    console.log("this.volume in the method:", this.volume); // 8  
    this.volume = volume;  
    console.log("this.volume after update:", this.volume); // 5  
    // hoisted up to the global scope.  
    (function () {  
      console.log("this.volume in nested function:", this.volume); // 20  
    })();  
    // Whereas the arrow function stays within the current scope  
    // this is happening because an arrow function does not have its own 'this.' It does not know what this means and it will refer to the closest available scope which in this case is the object.  
    (() => {  
      console.log("this.volume in nested function:", this.volume); // 5  
    })();  
  },  
};  
  
console.log(greenPack.newVolume(5));  
```  
  
### Pass data to a function with parameters  
  
```js  
/**  
 * Passing data to functions through parameters.  
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function  
 */  
const tipCalculator = (sum, percentage, currency, prefix) => {  
  let tip = sum * (percentage / 100);  
  let total = sum + tip;  
  if (prefix) {  
    console.log(`  
      Sum before tip: ${currency}${sum}  
      Tip percentage: ${percentage}%  
      Tip:            ${currency}${tip.toFixed(2)}  
      Total:          ${currency}${total.toFixed(2)}  
    `);  
  } else {  
    console.log(`  
      Sum before tip: ${sum}${currency}  
      Tip percentage: ${percentage}%  
      Tip:            ${tip.toFixed(2)}${currency}  
      Total:          ${total.toFixed(2)}${currency}  
    `);  
  }  
};  
  
tipCalculator(29.95, 18, "kr", false);  
```  
  
### Return values from a function  
  
```js  
/**  
 * Passing data to functions through parameters.  
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat  
 *  
 * List of ISO language codes:  
 * @link http://www.lingoes.net/en/translator/langcode.htm  
 */  
  
const formatter = (locale = "en-US", currency = "USD", value) => {  
  let formattedValue = new Intl.NumberFormat(locale, {  
    style: "currency",  
    currency: currency,  
  }).format(value);  
  
  return formattedValue;  
};  
  
const tipCalculator = (sum, percentage, locale, currency) => {  
  let tip = sum * (percentage / 100);  
  let total = sum + tip;  
  
  console.log(`  
    Sum before tip: ${formatter(locale, currency, sum)}  
    Tip percentage: ${percentage}%  
    Tip:            ${formatter(locale, currency, tip)}  
    Total:          ${formatter(locale, currency, total)}  
  `);  
};  
  
tipCalculator(29.95, 18, "de-DE", "EUR");  
```  
  
### Callbacks  
  
```js  
// Callback receives finalTip object, creates and outputs table on the DOM.  
const printHTML = finalTip => {  
  const tipTable = document.createElement("table");  
  tipTable.innerHTML = `  
    <tr>  
      <td>Sum before tip:</td>  
      <td>${finalTip.sum}</td>  
    </tr>  
    <tr>  
      <td>Tip percentage:</td>  
      <td>${finalTip.percentage}</td>  
    </tr>  
    <tr>  
      <td>Tip:</td>  
      <td>${finalTip.tip}</td>  
    </tr>  
    <tr>  
      <td>Total:</td>  
      <td>${finalTip.total}</td>  
    </tr>  
  `;  
  document.querySelector("main").append(tipTable);  
};  
  
// Create a finalTip object with all the data. Send it to the printHTML callback.  
const tipCalculator = (sum, percentage, locale, currency, callback) => {  
  let tip = sum * (percentage / 100);  
  let total = sum + tip;  
  
  const finalTip = {  
    sum: formatter(locale, currency, sum),  
    percentage: percentage + "%",  
    tip: formatter(locale, currency, tip),  
    total: formatter(locale, currency, total),  
  };  
  
  callback(finalTip);  
};  
  
tipCalculator(29.95, 18, "de-DE", "EUR", printHTML);  
```  
  
- There's a good chance when you set up some more complex code that you may have different callback functions you want to use for different purposes.  
- So in this particular circumstance we want to use the print HTML function but there could be several different versions of the print HTML function and then you want to use them for different purposes and by calling a callback like this, you can pass in exactly the function you want into the other function.  
- So we're effectively saying here is the precise function I want you to use once you're done processing your information right now but later it could be a different function.  
