---  
updated: 2022-06-20 19:38  
created: 2022-06-12 00:00  
title: JavaScript Maps  
aliases:  
  - JavaScript Maps  
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
  
- A data structure that can be used to map values to keys, like objects.  
  
- In maps, the **keys can be any type** such as arrays, booleans, numbers etc. while in objects keys are strings.  
  
## Creating Maps  
  
```js  
const rest = new Map(); // create new empty map  
  
// create map with values  
// This uses same structure (array of arrays) as Object.entries()  
const question = new Map([  
  ["question", "What is the best programming language in the world?"],  
  [1, "C"],  
  [2, "Java"],  
  [3, "JavaScript"],  
  ["correct", 3],  
  [true, "Correct 🎉"],  
  [false, "Try again!"],  
]);  
```  
  
## Methods  
  
### Set  
  
```js  
// set  
rest.set("name", "Classico Italiano"); // Add a key-value pair  
rest.set(1, "Firenze, Italy");  
console.log(rest.set(2, "Lisbon, Portugal")); // set also returns the map after adding item  
rest  
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])  
  .set("open", 11)  
  .set("close", 23)  
  .set(true, "We are open :D")  
  .set(false, "We are closed :("); // Set calls can be chained too  
```  
  
### Get  
  
```js  
// get  
console.log(rest.get("name")); // get can be used to retrive value of a key  
console.log(rest.get("true")); // if key doesn't exist, undefinded is returned  
  
// using boolean keys  
const time = 8;  
console.log(rest.get(time > rest.get("open") && time < rest.get("close"))); // rest.get(8 > 11 && 8 < 23) -> We are closed :(  
```  
  
### Has  
  
```js  
// has  
console.log(rest.has("categories"));  
```  
  
### Size  
  
```js  
// size  
rest.size; // 7  
```  
  
### Delete  
  
```js  
// delete  
rest.delete(2);  
```  
  
### Clear  
  
```js  
// clear  
rest.clear();  
```  
  
## Using Arrays as Keys  
  
- In order to use arrays, the set and get keys must be the same object. Because arrays are [Reference Type](JavaScript%20Primitives%20vs%20Objects%20-%20Primitive%20vs%20Reference%20Types).  
  
```js  
const arr = [1, 2];  
// rest.set([1, 2], 'Test');  
// rest.get([1, 2]); // This will return undefined, because the two arrays are different in the heap.  
rest.set(arr, "Test");  
console.log(rest);  
console.log(rest.size);  
console.log(rest.get(arr));  
```  
  
## Using DOM element as Key  
  
```js  
rest.set(document.querySelector("h1"), "Heading");  
```  
  
## Converting Objects to Maps  
  
```js  
// Convert object to map  
const hoursMap = new Map(Object.entries(openingHours));  
console.log(hoursMap);  
```  
  
## Converting Map to Array  
  
```js  
// Convert map to array  
console.log([...question]); // Array of arrays of key-value pairs  
// = console.log(...question.entries());  
console.log([...question.keys()]);  
console.log([...question.values()]);  
```  
  
![](,%20JavaScript%20Loops%20and%20Iteration#Iterating%20Maps)  
  
## Objects vs Maps  
  
|                      **Objects**                      |                    **Maps**                    |  
| :---------------------------------------------------: | :--------------------------------------------: |  
| More “traditional” key/value store (“abused” objects) | Better performance Keys can have any data type |  
|  Easier to write and access values with `.` and `[]`  |      Easy to iterate and to compute size       |  
|   Use when you need to include functions (methods)    | Use when you simply need to map key to values  |  
|    Use when working with JSON (can convert to map)    |  Use when you need keys that are not strings   |  
