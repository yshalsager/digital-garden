---  
updated: 2022-06-20 19:38  
created: 2022-06-12 00:00  
title: JavaScript Sets  
aliases:  
  - JavaScript Sets  
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
  
- Sets are collections of unique values. Items order is irrelevant and there's no access by index.  
  
```js  
// Sets  
const ordersSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta", "Pizza"]);  
console.log(ordersSet); // {"Pasta", "Pizza", "Risotto"}  
  
console.log(new Set("Jonas")); // {"J", "o", "n", "a", "s"}  
```  
  
## Methods  
  
### Size  
  
```js  
console.log(ordersSet.size); // 3  
```  
  
### Has  
  
Check if an element is in a set. Similar to `include` method in arrays.  
  
```js  
console.log(ordersSet.has("Pizza")); // true  
console.log(ordersSet.has("Bread")); // false  
```  
  
### Add  
  
```js  
ordersSet.add("Garlic Bread");  
ordersSet.add("Garlic Bread");  
console.log(ordersSet); // {"Pasta", "Pizza", "Risotto", "Garlic Bread"}  
```  
  
### Delete  
  
```js  
ordersSet.delete("Risotto");  
console.log(ordersSet); // {"Pasta", "Pizza", "Garlic Bread"}  
```  
  
### Clear  
  
```js  
// ordersSet.clear();  
console.log(ordersSet); // {}  
```  
  
## Iteration  
  
```js  
for (const order of ordersSet) console.log(order);  
```  
  
## Examples  
  
### Remove duplicates form an array  
  
```js  
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];  
// const staffUnique = new Set(staff);  
console.log(staffUnique); // {'Waiter', 'Chef', 'Manager'}  
const staffUnique = [...new Set(staff)];  
console.log(staffUnique); // ['Waiter', 'Chef', 'Manager']  
```  
  
### Get size of unique element of an array or string  
  
```js  
console.log(new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size); // 3  
console.log(new Set("jonasschmedtmann").size); // 1  
```  
