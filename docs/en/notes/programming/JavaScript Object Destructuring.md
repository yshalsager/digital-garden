---  
updated: 2022-06-20 19:38  
created: 2022-06-07 00:00  
title: JavaScript Object Destructuring  
aliases:  
  - JavaScript Object Destructuring  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
  - JavaScript  
---  
  
  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [syahshiimi's notes](https://github.com/syahshiimi/second-brain/blob/8213b2fda5781c059b264837ca594d1b835e4a2d/05%20Learning/00%20JavaScript/202107201943%20Object%20Destructuring.md), [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
We can also destructure the properties in the object like we can do in [Array Destructuring](JavaScript%20Array%20Destructuring).  
  
## Simple Object Destructuring  
  
We can destructure with the use of `{}` in a `const` variable, similar to how we use it to create an object.  
  
We then reference to the object itself with the `=` operand to declare the use of the object name.  
  
```js  
const { name, openingHours, categories } = restaurant; // restaurant is an object  
console.log(name, openingHours, categories); // return values of the properties name, openingHours and categories  
```  
  
## Referencing Same Properties but Use Different Name  
  
- We can use this example to rename the properties in the object.  
- This is very useful when we are working with third-party APIs and requiring to extract values with unknown variable names.  
  
```js  
// property: variableName  
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;  
console.log(restaurantName, hours, tags);  
```  
  
## Dealing With Non-explicitly Defined Data Using Default Values  
  
- Often when dealing with non-explicit defined data, we may find this method useful to give **default values** to create empty properties.  
- This would be useful because we would have **zero** clue on the amount of data that we are receiving.  
  
```js  
const { menu = [], starterMenu: starters = [] } = restaurant;  
console.log(menu, starters); // will return an empty menu array + starterMenu array redefined as starters  
```  
  
This is useful for creating your **own** array from an API response etc.  
  
## How Can We Mutate Variables In an Object?  
  
Where the variables in the object needs to be **redefined**, we can mutate it within the object itself by **destructuring** its contents.  
  
We can use the simple method of destructuring an array, as seen in [Array Destructuring](JavaScript%20Array%20Destructuring).  
  
```js  
let a = 111;  
let b = 999;  
const obj = { a: 23, b: 7, c: 14 };  
// If were to log  
console.log(a, b); // This will return the value of 111 999, not 23 and 7  
// To solve this, we can reassign the obj object  
  
// {a, b} = obj // This won't work, because { is used to define a code block so we need to wrap the line in parenthesis ()  
({ a, b } = obj);  
console.log(a, b); // This will return the value of 23, 7 as declared in the obj object earler.  
```  
  
## Obtaining Variables In a Nested Object  
  
While we can use a simple `const { property } = objectName` to get the objects, we can also instead use a nested function within the declaration above to get the value of the variable itself.  
  
```js  
const {  
  property: { item1, item2 },  
} = objectName;  
console.log(item1, item2); // will return the EXACT variable in the objectName obj.  
// Setting variable name  
const {  
  property: { item1: one, item2: two },  
} = objectName;  
console.log(one, two);  
```  
  
## Dealing With Methods (functions In Objects) With Multiple Args  
  
- It can be difficult to track the order of which the arguments of a function should be written.  
- This method of having objects into function arguments is very common in many JavaScript libraries.  
- It is useful because the main object method does the destructuring for you instead.  
- This way the order of argument is optional, it doesn't need to be the same.  
  
```js  
const restaurant = {  
  name: 'Classico Italiano',  
  location: 'Via Angelo Tavanti 23, Firenze, Italy',  
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],  
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],  
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],  
  // A method that destructures the passed object argument directly to variables with same names as object keys, and still it can has default values.  
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {  
    console.log(  
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`  
    );  
  },  
}  
  
// Calling the method and passing object to the function  
restaurant.orderDelivery ({  
  time: '22:30',  
  address; 'Via del Sole, 21',  
  mainIndex: 2,  
  starterIndex: 2,  
});  
```  
