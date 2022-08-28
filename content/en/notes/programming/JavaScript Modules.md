---  
updated: 2022-08-16 09:54  
created: 2021-12-15 00:00  
title: JavaScript Modules  
aliases:  
  - JavaScript Modules  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
  - JavaScript  
---  
  
  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
## What is a JavaScript Module?  
  
- **Reusable** piece of code that **encapsulates** implementation details.  
- Usually a **standalone file**, but it doesnt have to be. It can also have imports and exports.  
- We can **export values** out of a module like simple values or **entire functions**. Whatever we export from a module is called the **public API**.  
- This public **API** is actually consumed by **importing** values into a module.  
  
## Why JavaScript Modules should be used?  
  
- **Compose software:** Modules are small building blocks that we put together to build complex applications.  
- **Isolate components:** Modules can be developed in isolation without thinking about the entire code base.  
- **Abstract code:** Implement low-level code in modules and import these abstractions into other modules.  
- **Organized code:** Modules naturally lead to a more organized code base.  
- **Reuse code:** Modules allow us to easily reuse the same code, even across multiple projects.  
  
## Native JavaScript (ES6) Modules  
  
- ES6 Modules are **modules stored in files**, exactly **one module per file**.  
  
|                         |                             **ES6 Module**                            |                                                                   **Script**                                                                   |  
| :---------------------: | :-------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------: |  
| **Top-level variables** | Scoped to module <br>(variables are private to the module by default) | Global <br>(can cause global namespace pollution, where multiple scripts try to declare variables with same name then these variables collide) |  
|     **Default mode**    |                              Strict mode                              |                                                                   Sloppy mode                                                                  |  
|    **Top-level this**   |                               undefined                               |                                                                     window                                                                     |  
| **Imports and exports** |      Yes <br>Need to happen at top-level <br>Imports are hoisted!     |                                                                       No                                                                       |  
|     **HTML linking**    |                        `<script type="module">`                       |                                                                   `<script>`                                                                   |  
|   **File downloading**  |                              Asynchronous                             |                                                                   Synchronous                                                                  |  
  
### Import and Export syntax  
  
```js  
import { rand } from "./math.js";  
const diceP1 = rand(1, 6, 2);  
const diceP2 = rand(1, 6, 2);  
const scores = {diceP1, diceP2};  
export { scores };  
```  
  
## How ES6 Modules are Imported?  
  
- The first step is to **parse** the code (reading it without executing it). This is the moment in which imports are hoisted.  
  - Modules are **imported synchronously**.  
    - This is the easiest way to do things like bundling and dead code elimination.  
    - By knowing all dependencies between modules before execution, bundlers like `webpack` and Parcel can then join multiple modules together and eliminate that code.  
  - Possible thanks to top-level (“static”) imports, which **make imports known before execution**.  
  - This makes **bundling** and **dead code elimination** possible.  
- After the parsing process and figuring out which modules needs to be imported, these modules are actually **downloaded** from the server **asynchronously**.  
- After a module arrives, it's also **parsed** and the module's exports are **linked** to the imports in importing file.  
  - This is a **live-connection**, when the value changes in the exporting module, then the same value also changes in the importing module.  
  - **Exported values are not copied** to imports, instead, the import is basically just **a reference to the export** at value like a pointer.  
- Finally, the imported modules is executed.  
  
## Exporting and Importing in ES6 Modules  
  
- In ES modules, there are two types of exports, **Named Exports** and **Default Exports**.  
  
### Named Exports  
  
- **Named Exports** is actually **the simplest** way of exporting something from a module, because all we have to do is to put `export` in front of anything that we might want to export, but it must be **in the top level**.  
- To import a named export, name of the imported variable must be written exactly the same between curly braces in the import statement.  
  
```js  
const shippingCost = 10;  
export const cart = [];  
  
export const addToCart = function (product, quantity) {  
  cart.push({ product, quantity });  
  console.log(`${quantity} ${product} added to cart`);  
};  
  
// Importing module  
import { addToCart } from './shoppingCart.js';  
addToCart('bread', 5);  
```  
  
- We can also export multiple variables at same time.  
  
```js  
const totalPrice = 237;  
const totalQuantity = 23;  
  
export { totalPrice, totalQuantity };  
  
// Importing module  
import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';  
```  
  
- We can change the name of the imported variable by using `as` keyword.  
  
```js  
import { addToCart, totalPrice as price } from './shoppingCart.js';  
```  
  
- This is also possible in the export statement as well.  
  
```js  
export { totalPrice, totalQuantity as tq };  
// Importing module  
import {  totalPrice as price, tq } from './shoppingCart.js';  
```  
  
- We can import all exports of a module at same time by using `*` in the import statement.  
  
```js  
import * as ShoppingCart from './shoppingCart.js';  
ShoppingCart.addToCart('bread', 5);  
console.log(ShoppingCart.totalPrice);  
```  
  
### Default Exports  
  
- It should be used when we only want to export one thing per module.  
  
```js  
export default function (product, quantity) {  
  cart.push({ product, quantity });  
  console.log(`${quantity} ${product} added to cart`);  
}  
// Importing module  
import add from './shoppingCart.js';  
```  
  
- We can mix named and default exports at same time. However in practice, we usually never mix Named and Default Exports in the same module.  
  
```js  
import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';  
console.log(price);  
```  
  
## Top-Level await in Modules  
  
![](,%20JavaScript%20Asynchronous#Top-Level%20await)  
  
## The Module Pattern  
  
- Before ES6, the module pattern was used in order to implement modules in JavaScript.  
- The main goal of the module pattern is to **encapsulate functionality**, to have private data, and to expose a public API.  
- The best way of achieving that is by using a function, because **functions** give us **private data** by default and allow us to **return values**, which can become our **public API**. [IIFE](,%20JavaScript%20Immediately%20Invoked%20Function%20Expressions%20(IIFE)) is very suitable for this kind of things because we don't have to call it separately and we can also ensure that it's only called once.  
- The stored function returned value can still get access to function variables because of [closures](JavaScript%20Closures).  
- The problem with this way is that if we wanted one module per file, we would have to create different scripts and link all of them in the HTML file. This creates a couple of problems:  
  - Taking care of the order of script links in HTML.  
  - Having all variables living in the global scope.  
  - The inability of bundling them together using a module bundler.  
  
```js  
// The Module Pattern  
const ShoppingCart2 = (function () {  
  const cart = [];  
  const shippingCost = 10;  
  const totalPrice = 237;  
  const totalQuantity = 23;  
  
  const addToCart = function (product, quantity) {  
    cart.push({ product, quantity });  
    console.log(  
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`  
    );  
  };  
  
  const orderStock = function (product, quantity) {  
    console.log(`${quantity} ${product} ordered from supplier`);  
  };  
  
  return {  
    addToCart,  
    cart,  
    totalPrice,  
    totalQuantity,  
  };  
})();  
  
ShoppingCart2.addToCart('apple', 4);  
ShoppingCart2.addToCart('pizza', 2);  
console.log(ShoppingCart2);  
console.log(ShoppingCart2.shippingCost);  
```  
  
## CommonJS Modules  
  
- Besides native ES Modules and the module pattern, there are also other module systems, that have been used by JavaScript in the past. They were not native JavaScript, so they relied on some external implementations. Two examples are: AMD Modules, and CommonJS modules.  
- CommonJS modules are important because they have been used in Node.js, for almost all of its existence.  
- Just like ES6 modules, in CommonJS, one file, is one module.  
- To export something from a module, we use `export.`, and then the name of the export. While to import something we use `require` function of Node.js.  
  
```js  
// CommonJS Modules  
// Export  
export.addTocart = function (product, quantity) {  
  cart.push({ product, quantity });  
  console.log(  
    `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`  
  );  
};  
  
// Import  
const { addTocart } = require('./shoppingCart.js');  
```  
