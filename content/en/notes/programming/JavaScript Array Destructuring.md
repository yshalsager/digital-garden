---  
updated: 2022-06-20 19:38  
created: 2022-06-07 00:00  
title: JavaScript Array Destructuring  
aliases:  
  - JavaScript Array Destructuring  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
  - JavaScript  
---  
  
  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert), [syahshiimi's notes](https://github.com/syahshiimi/second-brain/blob/a6bbf926dc6a391717c005c47e7f5b6a5e9327d9/05%20Learning/00%20JavaScript/202107122049%20Array%20Destructuring.md)  
  
---  
  
## What Is Array Destructuring?  
  
1. Array destructuring is a modern advanced operator in JavaScript  
  
2. It is a method to complex large, complex data structures into smaller, less complicated data structures.  
  
## Simple destructuring implementation  
  
```js  
const arr = [2, 3, 4];  
const a = arr[0];  
const b = arr[1];  
``;  
const c = arr[2];  
// With destructuring operations, we can declare the array in the const variable instead  
const [x, y, z] = arr;  
console.log(x, y, z);  
```  
  
We are not destroying the original array rather _unpacking_ it.  
  
## Swapping Variables  
  
```js  
// Switching variables  
// The old way  
const temp = main;  
main = secondary;  
secondary = temp;  
console.log(main, secondary);  
// The better way  
[main, secondary] = [secondary, main];  
console.log(main, secondary);  
```  
  
## Unpacking returned arrays  
  
```js  
const restaurant = {  
  name: "Classico Italiano",  
  location: "Via Angelo Tavanti 23, Firenze, Italy",  
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],  
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],  
  mainMenu: ["Pizza", "Pasta", "Risotto"],  
  
  order(starterIndex, mainIndex) {  
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];  
  },  
};  
  
// Receive 2 return values from a function  
const [starter, mainCourse] = restaurant.order(2, 0);  
console.log(starter, mainCourse);  
```  
  
## Skipping Items While Destructuring  
  
```js  
let [main, , secondary] = restaurant.categories; // Notice the ", ," that will skip the second item  
console.log(main, secondary);  
```  
  
## Nested Destructuring  
  
```js  
const nested = [2, 4, [5, 6]];  
// const [i, , j] = nested;  
const [i, , [j, k]] = nested;  
console.log(i, j, k); // 2 5 6  
```  
  
## Destructuring Arrays Of Unknown Length and Default Values  
  
```js  
// We can use default values  
const [p, q, r] = [8, 9];  
console.log(p, q, r); // will return 8, 9, undefined  
// We can set default values to solve this issue  
const [p = 1, q = 1, r = 1] = [8, 9];  
console.log(p, q, r); // will return 8, 9, 1  
```  
