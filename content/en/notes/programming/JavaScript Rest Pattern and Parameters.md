---  
updated: 2022-06-20 19:38  
created: 2022-06-07 00:00  
title: JavaScript Rest Pattern and Parameters  
aliases:  
  - JavaScript Rest Pattern and Parameters  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
---  
  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [syahshiimi's notes](https://github.com/syahshiimi/second-brain/blob/2e6b1c9687a0b796978263a54191ebe31e7b608f/05%20Learning/00%20JavaScript/202107142210%20Rest%20Pattern%20And%20Parameters.md), [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
## What is the Rest Pattern?  
  
- It works exactly the same as the [spread operator](JavaScript%20Spread%20Operator)... working with the `...` but does the **opposite** of the `spread` operator.  
- In short, it is to **pack elements** into an array, opposite to the spread (unpack elements from an array).  
- The Rest operator works on the **left hand** side of the operator i.e. `=` in contrast the **right hand** in the `spread` operator.  
- Rest **must be the last element**.  
  
```js  
// SPREAD, because on RIGHT side of =  
const arr = [1, 2, ...[3, 4]];  
  
// REST, because on LEFT side of =  
const [a, b, ...others] = [1, 2, 3, 4, 5];  
console.log(a, b, others);  
  
// both sides  
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];  
console.log(pizza, risotto, otherFood); // Pizza Risotto ["Item1", "Item2"]  
```  
  
- In [object destructuring](JavaScript%20Object%20Destructuring) process, the rest operator creates an object.  
  
```js  
const { sat, ...weekdays } = restaurant.openingHours;  
console.log(weekdays); // will return an object of fri and thur  
```  
  
- It can be used in **functions** as well.  
  
```js  
const add = function (...numbers) {  
  let sum = 0;  
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];  
  console.log(sum);  
};  
add(2, 3); // 5  
add(5, 3, 7, 2); // 17  
add(8, 2, 5, 3, 2, 1, 4); // 25  
const x = [23, 5, 7];  
add(...x); // 50  
  
const restaurant = {  
  orderPizza(mainIngredient, ...otherIngredients) {  
    console.log(mainIngredient);  
    console.log(otherIngredients);  
  },  
};  
  
restaurant.orderPizza("mushrooms", "onion", "olives", "spinach"); // mushrooms ['onion', 'olives', 'spinach']  
restaurant.orderPizza("mushrooms"); // mushrooms []  
```  
  
> [!Summary] Summary  
> The rest pattern is used in places which we would otherwise write variables names separated by commas. This is because the rest operator collects these variable names and **packs** them into either an object or an array.  
