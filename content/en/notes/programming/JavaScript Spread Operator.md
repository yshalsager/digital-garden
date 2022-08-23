---  
updated: 2022-06-20 19:38  
created: 2022-06-06 00:00  
title: JavaScript Spread Operator  
aliases:  
  - JavaScript Spread Operator  
share: true  
website: en/notes/programming  
---  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة/مؤرشفة  
المراجع:: [syahshiimi's notes](https://github.com/syahshiimi/second-brain/blob/a6bbf926dc6a391717c005c47e7f5b6a5e9327d9/05%20Learning/00%20JavaScript/202107142042%20The%20Spread%20Operator.md), [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
- Spread operator allows us to **unpack** all elements in an array.  
- We can **only** use it in values where it is separated by commas (arrays or objects).  
  
```js  
const arr = [7, 8, 9];  
  
// Without the spread operator  
  
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];  
  
console.log(badNewArr); // returns an array of [1, 2, 7, 8 ,9]  
  
// With the spread operator,  
  
const newArr = [1, 2, ...arr];  
  
console.log(newArr); // returns an array of [1 2, 7, 8, 9]  
```  
  
- It can be used to (shallow) **copy** and **merge** arrays.  
  
```js  
// Copy array (Shallow)  
const mainMenuCopy = [...restaurant.mainMenu];  
  
// Join 2 arrays  
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];  
console.log(menu);  
```  
  
- The spread operator works with all `iterables` -- things such as arrays, strings, maps or sets **but** not objects.  
  
```js  
// Iterables: arrays, strings, maps, sets. NOT objects  
const str = "Jonas";  
const letters = [...str, " ", "S."];  
console.log(letters);  
console.log(...str);  
```  
  
- We can use it **only** while building an array or passing values into a function.  
  
```js  
const str = 'Jonas';  
console.log(`${...str} Schmedtmann`); // Won't work  
  
// Real-world example  
const restaurant = {  
  orderPasta(ing1, ing2, ing3) {  
    console.log(  
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`  
    );  
  }  
};  
  
const ingredients = [  
  prompt("Let's make pasta! Ingredient 1?"),  
  prompt('Ingredient 2?'),  
  prompt('Ingredient 3'),  
];  
console.log(ingredients);  
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);  
restaurant.orderPasta(...ingredients); // Use spread instead  
```  
  
## Spread vs Destructuring  
  
The spread operator is different to the destructuring of arrays as it **takes all the elements in an array** and it **doesn't create new variables**.  
  
## Spread in Objects  
  
Spread can be used to shallow copy objects, with or without changing their attributes.  
  
```js  
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" }; // Copy with new attributes  
console.log(newRestaurant);  
const restaurantCopy = { ...restaurant }; // shallow copy  
restaurantCopy.name = "Ristorante Roma";  
console.log(restaurantCopy.name); // Ristorante Roma  
console.log(restaurant.name); // Classico Italiano  
```  
