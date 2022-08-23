---  
updated: 2022-06-20 19:38  
created: 2022-06-12 00:00  
title: JavaScript Optional Chaining  
  
aliases:  
  - JavaScript Optional Chaining  
share: true  
website: en/notes/programming  
---  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة/مؤرشفة  
المراجع:: [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
- Optional Chaining, introduced in ES2020, simply provides a way to **access object properties and methods safely** when that property value doesn't exist ([nullish values](,%20JavaScript%20Nullish%20Coalescing%20Operator#%5E82e081)).  
- If the property before the `?` exist, the value of the property before the `?` will be read. If it is either zero or a string, `undefined` is returned immediately to avoid `TypeError: can't read property of undefined`.  
- Before Optional Chaining, we had to use if checks to ensure the object has the property before getting its value.  
  
```js  
if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);  
  
// WITH optional chaining  
console.log(restaurant.openingHours.mon?.open);  
console.log(restaurant.openingHours?.mon?.open);  
```  
  
## Examples  
  
- Access day property dynamically, then open property with optional chaining, and at the same time use [Nullish Coalescing Operator](JavaScript%20Nullish%20Coalescing%20Operator) to set a default value.  
  
```js  
// Example  
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];  
for (const day of days) {  
  // Access day property dynamically  
  const open = restaurant.openingHours[day]?.open ?? "closed";  
  console.log(`On ${day}, we open at ${open}`);  
}  
```  
  
- Call a method only if it exists, otherwise use [Nullish Coalescing Operator](JavaScript%20Nullish%20Coalescing%20Operator) to set another value.  
  
```js  
// Methods  
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");  
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");  
```  
  
- With arrays.  
  
```js  
// Arrays  
const users = [{ name: "Jonas", email: "hello@jonas.io" }];  
// With Optional Chaining  
console.log(users[0]?.name ?? "User array empty");  
// const users = [];  
// Without  
if (users.length > 0) console.log(users[0].name);  
else console.log("user array empty");  
```  
