---  
updated: 2022-06-20 19:38  
created: 2022-06-07 00:00  
title: JavaScript Loops and Iteration  
aliases:  
  - JavaScript Loops and Iteration  
share: true  
website: en/notes/programming  
---  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة/مؤرشفة  
المراجع:: [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert), <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration>, [syahshiimi's notes](https://github.com/syahshiimi/second-brain/blob/a62cedae88fe8ba504a26da63b62ffbff1e67fff/05%20Learning/00%20JavaScript/202107212256%20For-of%20Loop.md), [JavaScript Essential Training Notes](JavaScript%20Essential%20Training%20Notes)  
  
---  
  
## for Statement  
  
A [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loop repeats until a specified condition evaluates to false.  
  
```js  
for (let rep = 1; rep <= 10; rep++) {  
  console.log(`Lifting weights repetiton ${rep}`);  
}  
// Array iteration  
for (let i = 0; i < array.length; i++) {}  
// Array reverse iteration  
for (let i = array.length - 1; i >= 0; i--) {}  
```  
  
## while statement  
  
A [`while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) statement executes its statements as long as a specified condition evaluates to `true`.  
  
```js  
let rep = 1;  
while (rep <= 10) {  
  console.log(`Lifting weights repetiton ${rep}`);  
  rep++;  
}  
```  
  
## do...while statement  
  
The [`do...while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while) statement repeats until a specified condition evaluates to false.  
  
```js  
let i = 0;  
do {  
  i += 1;  
  console.log(i);  
}  
```  
  
## for...in statement  
  
The [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) statement iterates a specified variable over all **the enumerable properties of an object**. For each distinct property, JavaScript executes the specified statements.  
  
```js  
for (let i in obj) {  
}  
```  
  
## for...of statement  
  
- The [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) statement creates a loop Iterating over [iterable objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) (including [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map), [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set), [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.  
  
```js  
const iterable = [10, 20, 30];  
for (const value of iterable) {  
  console.log(value);  
}  
// 10  
// 20  
// 30  
```  
  
- The for-of loop can be used to iterate over keys in an object.  
  
```js  
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];  
for (const item of menu) console.log(item);  
```  
  
- `continue` and `break` keywords can be used with for-of loops.  
  
```js  
for (const o of arr) {  
  console.log(o);  
  break; // closes iterator, execution continues outside of the loop  
}  
```  
  
- You can use `let` instead of `const` too, if you reassign the variable inside the block.  
  
```js  
const iterable = [10, 20, 30];  
  
for (let value of iterable) {  
  value += 1;  
  console.log(value);  
}  
// 11  
// 21  
// 31  
```  
  
### Difference Between a `for...of` loop and a `for...in` loop  
  
Both `for...in` and `for...of` statements iterate over something. The main difference between them is in what they iterate over.  
  
- `for...in` iterates over property names  
- `for...of` iterates over property values  
  
```js  
const arr = [3, 5, 7];  
arr.foo = "hello";  
  
for (let i in arr) {  
  console.log(i); // logs "0", "1", "2", "foo"  
}  
  
for (let i of arr) {  
  console.log(i); // logs 3, 5, 7  
}  
```  
  
### Iterating With Index and Element  
  
It can be difficult as the for-of loop was intended to iterate and list out the list of items. But we can do it with this method via the `.entries()` which will return an array of both index position and value.  
  
```js  
const a = ["a", "b", "c"];  
for (const item of a.entries()) console.log(item);  
// [0, 'a']  
// [1, 'b']  
// [2, 'c']  
  
console.log(...a.entries()); // [](0,%20'a')  
```  
  
We can also destructure the object in the loop to do something useful with it.  
  
```js  
const a = ["a", "b", "c"];  
for (const [index, element] of a.entries()) {  
  console.log(index, element);  
}  
// 0 'a'  
// 1 'b'  
// 2 'c'  
  
for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);  
  
// old way instead of destructuring  
for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);  
```  
  
## Iterating Objects  
  
### Object Keys  
  
We can iterate over an object to get property names (keys) using `Object.keys()` .  
  
```js  
for (const property of Objects.keys(obj)) {  
  console.log(property); // will return the keys in obj object  
}  
```  
  
### Object Values  
  
We can iterate over an object to get values using `Object.values()` .  
  
```js  
for (const value of Objects.values(obj)) {  
  console.log(value); // will return the values in obj object  
}  
```  
  
### Object Keys and Values  
  
We can iterate over an object both keys and values using `Object.entries()` . This will return an array of arrays that have object key and value.  
  
```js  
const obj = { a: 1, b: 2, c: 3 };  
for (const objectItem of Objects.entries(obj)) {  
  console.log(objectItem); // ["a", 1], ["b", 2], ["c", 3]  
}  
// We can use destructuring too  
for (const [key, value] of Objects.entries(obj)) {  
  console.log(key, value);  
  // "a", 1  
  // "b", 2  
  // "c", 3  
}  
// Also destructuring nested object  
const obj = { a: { 1: "x" }, b: { 2: "y" }, c: { 3: "z" } };  
for (const [key, { nestedKey, value }] of Objects.entries(obj)) {  
  console.log(key, nestedKey, value);  
  // "a", 1, "x"  
  // "b", 2, "y"  
  // "c", 3, "z"  
}  
```  
  
## Iterating Maps  
  
Maps iteration doesn't require using `entries()` method.  
  
```js  
for (const [key, value] of question) {  
}  
```  
  
## `forEach`  
  
- `forEach` is a [higher order function](,%20JavaScript%20Functions#Higher-order%20Functions) that requires another callback function to do something with values being iterated.  
- `forEach` loop can't use `break` and `continue` keywords. It will always iterate over the whole object.  
- In each iteration, `forEach` passes three variables:  
  - Array's **current value, index**, and the **array itself**.  
  - Map's **value**, **key** and the **map itself**.  
  - Set's **value**, **value**, and the **set itself**.  
  
```js  
// Looping Arrays: forEach  
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];  
  
// Normal for loop  
// for (const movement of movements) {  
for (const [i, movement] of movements.entries()) {  
  if (movement > 0) {  
    console.log(`Movement ${i + 1}: You deposited ${movement}`);  
  } else {  
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);  
  }  
}  
  
// ForEach loop  
movements.forEach(function (mov, i, arr) {  
  if (mov > 0) {  
    console.log(`Movement ${i + 1}: You deposited ${mov}`);  
  } else {  
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);  
  }  
});  
  
// forEach With Maps and Sets  
// Map  
const currencies = new Map([  
  ["USD", "United States dollar"],  
  ["EUR", "Euro"],  
  ["GBP", "Pound sterling"],  
]);  
currencies.forEach(function (value, key, map) {  
  console.log(`${key}: ${value}`);  
});  
  
// Set  
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);  
console.log(currenciesUnique);  
currenciesUnique.forEach(function (value, _, map) {  
  // (value, key, map) value=key in the set  
  console.log(`${value}: ${value}`);  
});  
```  
  
## Old Notes  
  
```js  
/**  
 * Loops Aplenty!  
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Callback_function  
 */  
  
const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];  
  
const nestedObjects = {  
  item01: {  
    name: "piggy",  
    type: "toy",  
    weight: 30,  
  },  
  item02: {  
    name: "headlamp",  
    type: "equipment",  
    weight: 120,  
  },  
  item03: {  
    name: "pen",  
    type: "tool",  
    weight: 30,  
  },  
  item04: {  
    name: "pencil",  
    type: "tool",  
    weight: 30,  
  },  
  item05: {  
    name: "eraser",  
    type: "tool",  
    weight: 40,  
  },  
  item06: {  
    name: "water bottle",  
    type: "equipment",  
    weight: 1300,  
  },  
};  
  
const article = document.querySelector("article");  
let stuffList = document.createElement("ul");  
  
/**  
 * for loop  
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for  
 */  
for (let i = 0; i < stuff.length; i++) {  
  let listItem = document.createElement("li");  
  listItem.innerHTML = stuff[i];  
  stuffList.append(listItem);  
}  
  
/**  
 * for...of loop and arrays  
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of  
 */  
for (const item of stuff) {  
  let listItem = document.createElement("li");  
  listItem.innerHTML = item;  
  stuffList.append(listItem);  
}  
  
/**  
 * foreach array method  
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach  
 */  
// array.forEach() method has optional properties for the current item index number and the array itself.  
stuff.forEach(item => {  
  let listItem = document.createElement("li");  
  listItem.innerHTML = item;  
  stuffList.append(listItem);  
});  
  
/**  
 * for...in loop and objects  
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of  
 */  
for (const singleObject in nestedObjects) {  
  let listItem = document.createElement("li");  
  listItem.innerHTML = `Name: ${nestedObjects[singleObject].name}`;  
  stuffList.append(listItem);  
}  
  
article.append(stuffList);  
```  
