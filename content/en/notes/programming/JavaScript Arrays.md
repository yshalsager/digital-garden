---  
updated: 2022-06-20 19:38  
created: 2022-06-14 00:00  
title: JavaScript Arrays  
  
aliases:  
  - JavaScript Arrays  
share: true  
website: en/notes/programming  
---  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة/مؤرشفة  
المراجع:: [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert), [JavaScript Essential Training](JavaScript%20Essential%20Training)  
  
---  
  
## Creating and Filling Arrays  
  
- Manual way.  
  
```js  
const arr = [1, 2, 3, 4, 5, 6, 7];  
```  
  
- Array constructor.  
  
```js  
console.log(new Array(1, 2, 3, 4, 5, 6, 7));  
```  
  
- Empty array and `fill` method.  
  - `fill()` method changes all elements in an array to a static value, from a start index (default 0) to an end index (default `array.length`). It returns the modified array.  
  
```js  
const x = new Array(7);  
x.fill(1); // [1, 1, 1, 1, 1, 1, 1]  
// fill(value, start, end)  
x.fill(1, 3, 5); // [empty, empty, empty, 1, 1, empty, empty]  
```  
  
- From constructor.  
  - The `Array.from()` static method creates a new, shallow-copied Array instance from an array-like or iterable object.  
  
```js  
// Array.from(arrayLike, (element, index)  
const y = Array.from({ length: 7 }, () => 1); // [1, 1, 1, 1, 1, 1, 1]  
const z = Array.from({ length: 7 }, (_, i) => i + 1); // [1, 2, 3, 4, 5, 6, 7]  
  
// Array from a String  
Array.from("foo"); // [ "f", "o", "o" ]  
  
// Array from a Set  
const set = new Set(["foo", "bar", "baz", "foo"]);  
Array.from(set); // [ "foo", "bar", "baz" ]  
  
// Array from a Map  
const map = new Map([  
  [1, 2],  
  [2, 4],  
  [4, 8],  
]);  
Array.from(map); // [](1,%202)  
  
// Array from a NodeList  
// Create an array based on a property of DOM Elements  
const sources = Array.from(document.getElementsByTagName("img"), image => image.src);  
// This also works but we need to do the mapping separately  
const images = [...document.querySelectorAll("img")];  
```  
  
## Methods  
  
- `.length`: Array's elements count.  
  
### Adding items  
  
- `.push`: Appends an item to the array.  
- `.unshift`: Add an item to the array at the beginning.  
  
### Removing Items  
  
- `.shift`: Removes an item from the array's beginning.  
- `.pop`: Removes an item from the array's end.  
  
#### Removing an Item by its index  
  
```js  
// If you know the index of an item, you can remove it from the array using splice()  
arr.splice(index, 1);  
```  
  
### Finding  
  
- `indexOf`: returns the first index at which a given element can be found in the array, or -1 if it is not present.  
- `includes()`: determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.  
  
### Slice  
  
Extract a part of an array **without changing** the original array. Similar to [slice in strings](,%20JavaScript%20Strings#Removing%20Parts%20of%20String%20via%20slice).  
  
```js  
let arr = ["a", "b", "c", "d", "e"];  
// SLICE  
console.log(arr.slice(2)); // ['c', 'd', 'e']  
// End parameter isn't included  
console.log(arr.slice(2, 4)); // ['c', 'd']  
console.log(arr.slice(-2)); // ['d', 'e']  
// Get the last element of an array  
console.log(arr.slice(-1)); // ['e']  
// In ES2022 We can do this instead, note it return a variable not an array  
console.log(arr.at(-1)); // 'e'  
console.log(arr.slice(1, -2)); // ['b', 'c']  
// Create a shallow copy of the array  
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']  
// Same with spread operator  
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']  
```  
  
### Splice  
  
Similar to slice, but **changes** the array content directly.  
  
```js  
// SPLICE  
console.log(arr.splice(2)); // ['c', 'd', 'e']  
console.log(arr); // ['a', 'b']  
// Remove last element using splice  
arr.splice(-1);  
// Remove last element using pop  
arr.pop();  
arr.splice(1, 2); // ['a', 'd']  
```  
  
### Reverse  
  
Reverses an array, **changes** the original array.  
  
```js  
// REVERSE  
const arr2 = ["j", "i", "h", "g", "f"]; // ['f', 'g', 'h', 'i', 'j']  
console.log(arr2.reverse());  
console.log(arr2);  
```  
  
### Concat  
  
Merges two arrays.  
  
```js  
// CONCAT  
const arr = ["a", "b", "c", "d", "e"];  
const arr2 = ["j", "i", "h", "g", "f"];  
const letters = arr.concat(arr2);  
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'j', 'i', 'h', 'g', 'f']  
// Can be done also using spread  
console.log([...arr, ...arr2]);  
```  
  
### Join  
  
Joins an array items into a string.  
  
```js  
console.log(letters.join(" - "));  
```  
  
### At  
  
`at()` method takes an integer value and returns the item at that index, allowing for positive and negative integers.  
  
```js  
const arr = [23, 11, 64];  
console.log(arr[0]); // 23  
console.log(arr.at(0)); // 23  
```  
  
#### Getting last array element  
  
```js  
console.log(arr[arr.length - 1]);  
console.log(arr.slice(-1)[0]);  
console.log(arr.at(-1));  
```  
  
## Data Transformation  
  
### Map  
  
- Similar to the [forEach](,%20JavaScript%20Loops%20and%20Iteration#forEach) method, but returns **a new array** containing the results of **applying an operation** **on all** original array **elements**.  
  
```js  
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];  
const eurToUsd = 1.1;  
const movementsUSD = movements.map(function (mov) {  
  return mov * eurToUsd;  
});  
const movementsUSD = movements.map(mov => mov * eurToUsd);  
  
// Same as  
const movementsUSDfor = [];  
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);  
console.log(movementsUSDfor);  
```  
  
### Filter  
  
- Returns **a new array** containing the array elements that passed a specified **test condition**. It can also access the current item index and whole array second and third parameters.  
  
```js  
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];  
const deposits = movements.filter(function (mov, i, arr) {  
  return mov > 0;  
});  
const withdrawals = movements.filter(mov => mov < 0);  
console.log(withdrawals);  
  
// Same as  
const depositsFor = [];  
for (const mov of movements) if (mov > 0) depositsFor.push(mov);  
console.log(depositsFor);  
```  
  
### Reduce  
  
- Boils (“reduces”) all array elements down to one single value (e.g. adding all elements together) (Snowball). It **returns** only a reduced **value**.  
  
```js  
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];  
// accumulator -> SNOWBALL  
const balance = movements.reduce(function (accumulator, current, i, arr) {  
  console.log(`Iteration ${i}: ${accumulator}`);  
  return accumulator + current;  
}, 0); // 0 is the initial value of the accumulator  
const balance = movements.reduce((accumulator, current) => accumulator + current, 0);  
  
// Same as  
let balance2 = 0;  
for (const mov of movements) balance2 += mov;  
console.log(balance2);  
  
// Find array maximum value  
const max = movements.reduce((acc, mov) => {  
  if (acc > mov) return acc;  
  else return mov;  
}, movements[0]);  
const max = movements.reduce((acc, mov) => acc > mov ? acc : mov}, movements[0]);  
console.log(max);  
```  
  
## Chaining Data Transformation Methods  
  
- Many array methods can be chained to perform powerful data transformations.  
- `reduce` doesn't return an array but a value instead, and thus it can't be chained to another method.  
  
```js  
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];  
const eurToUsd = 1.1;  
// PIPELINE  
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);  
console.log(totalDepositsUSD); // 5522.0000000000001  
  
// In order to make debugging easier, other method parameters can be used  
.map((mov, i, arr) => {  
    // console.log(arr);  
    return mov * eurToUsd;  
  })  
```  
  
## Find  
  
- Can be used to retrieve **one array's element** based on a certain condition.  
- Unlike `filter`, it won't **return** a new array, but **the first element** that matches the finding condition.  
  
```js  
const firstWithdrawal = movements.find(mov => mov < 0);  
const account = accounts.find(acc => acc.owner === "Jessica Davis");  
```  
  
### findIndex  
  
- Similar to find, but **returns the found element index** and not the element itself.  
  
```js  
const index = accounts.findIndex(acc => acc.username === currentAccount.username);  
```  
  
## Some and Every  
  
- Similar to `includes`, but check for a condition instead of equality.  
- Some: returns true if the condition is true for any element.  
- Every: returns true if the condition is true for all elements.  
  
```js  
// EQUALITY  
console.log(movements.includes(-130));  
// SOME: CONDITION  
console.log(movements.some(mov => mov === -130)); // Same as movements.includes(-130)  
const anyDeposits = movements.some(mov => mov > 0);  
console.log(anyDeposits);  
// EVERY  
console.log(movements.every(mov => mov > 0));  
console.log(account4.movements.every(mov => mov > 0));  
```  
  
- Checking condition can be written as a separate function, then passed as callback to every/some methods.  
  
```js  
// Separate callback  
const deposit = mov => mov > 0;  
console.log(movements.some(deposit));  
console.log(movements.every(deposit));  
console.log(movements.filter(deposit));  
```  
  
## Flat and flatMap  
  
- Introduced in ES2019.  
- `flat` creates a new array with all sub-array elements concatenated into it recursively up to the specified **depth** (defaults to 1).  
- `flat` method removes empty slots in arrays.  
  
```js  
const arr1 = [0, 1, 2, [3, 4]];  
console.log(arr1.flat()); // [0, 1, 2, 3, 4]  
const arr2 = [0, 1, 2, [](3,%204)]];  
console.log(arr2.flat(2)); // [0, 1, 2, [3, 4]] - depth 2  
const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];  
arr4.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  
const arr5 = [1, 2, , 4, 5];  
arr5.flat(); // [1, 2, 4, 5]  
```  
  
- `flatMap` returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. Equal to `arr.map(...args).flat()`.  
- Note that with `flatMap` only one level is flattened, so if there's a need for flattening deeper `map` then `flat` must be used.  
  
```js  
// flat  
const overalBalance = accounts  
  .map(acc => acc.movements)  
  .flat()  
  .reduce((acc, mov) => acc + mov, 0);  
console.log(overalBalance);  
// flatMap  
const overalBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);  
console.log(overalBalance2);  
```  
  
## Sort  
  
- `sort` method **sorts items by alphabetical order**.  
- It **changes** the original array. This can be avoided by calling `slice` on the original array before sorting.  
  
```js  
const owners = ["Jonas", "Zach", "Adam", "Martha"];  
console.log(owners.sort()); // ['Adam', 'Jonas', 'Martha', 'Zach']  
console.log(owners); // ['Adam', 'Jonas', 'Martha', 'Zach']  
```  
  
- Numbers are being treated as strings.  
  
```js  
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];  
console.log(movements.sort()); // [-130, -400, -500, 1300, 200, 3000, 450, 70]  
```  
  
- To deal with numbers properly we can use a callback function that takes two parameters: `current` and `next`, and should return:  
  
  - `< 0` to sort `current` before `next`. (return something less than zero to keep order)  
  - `> 0` to sort `current` after `next`. (return something higher than zero to switch order)  
  - `=== 0` to keep original order of `current` and `next`.  
  
- **To compare numbers** instead of strings, the compare function can **subtract b from a**. The following function will sort the array in ascending order (if it doesn't contain `Infinity` and `NaN`).  
  
```js  
// return < 0, A, B (keep order)  
// return > 0, B, A (switch order)  
  
// Ascending  
movements.sort((a, b) => {  
  if (a > b) return 1;  
  if (a < b) return -1;  
});  
movements.sort((a, b) => a - b);  
  
// Descending  
movements.sort((a, b) => {  
  if (a > b) return -1;  
  if (a < b) return 1;  
});  
movements.sort((a, b) => b - a);  
```  
  
## Summary: Which Array Method to Use?  
  
### To mutate original array  
  
#### Add to original  
  
- `.push` (end)  
- `.unshift` (start)  
  
#### Remove from original  
  
- `.pop` (end)  
- `.shift` (start)  
- `.splice` (any)  
  
#### Others  
  
- `.reverse`  
- `.sort`  
- `.fill`  
  
### A new array  
  
#### Computed from original  
  
- `.map` (loop)  
  
#### Filtered using condition  
  
- `.filter`  
  
#### Portion of original  
  
- `.slice`  
  
#### Adding original to other  
  
- `.concat`  
  
#### Flattening the original  
  
- `.flat`  
- `.flatMap`  
  
### An array index  
  
#### Based on value  
  
- `.indexOf`  
  
#### Based on test condition  
  
- `.findIndex`  
  
### An array element  
  
#### Based on test condition  
  
- `.find`  
  
### Know if array includes  
  
#### Based on value:  
  
- `.includes`  
  
#### Based on test condition  
  
- `.some`  
- `.every`  
  
### To transform to value  
  
#### Based on accumulator  
  
- `.reduce` (Boil down array to single value of any type: number, string, boolean, or even new array or object)  
  
### A new string  
  
#### Based on separator string  
  
- `.join`  
  
### To just loop array  
  
#### Based on callback  
  
- `.forEach` (Does not create a new array, just loops over it)  
  
## [JavaScript Essential Training](JavaScript%20Essential%20Training) Notes  
  
<https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays>  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods>  
  
```js  
/**  
 * Working with arrays  
 */  
  
let item = "flashlight";  
const collection = ["Piggy", item, 5, true];  
console.log(collection);  
console.log(collection.length); // 4  
console.log(collection[2]);  
collection[2] = "Camera";  
collection[collection.length] = "new item"; // Appends a new item at index 4  
collection[9] = "at the end";  
console.log(collection[8]); // undefined  
collection[collection.length - 1]; // the last item in the array  
  
// Finding items in an array  
const birds = ["Parrot", "Falcon", "Owl"];  
console.log(birds.indexOf("Owl")); //  2  
console.log(birds.indexOf("Rabbit")); // -1  
  
// Adding items  
const myArray = ["Manchester", "Liverpool"];  
myArray.push("Cardiff");  
console.log(myArray); // ["Manchester", "Liverpool", "Cardiff"]  
myArray.push("Bradford", "Brighton");  
console.log(myArray); // ["Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton"]  
const newLength = myArray.push("Bristol");  
console.log(newLength); // 6  
// To add an item to the start of the array, use unshift():  
const myArray = ["Manchester", "Liverpool"];  
myArray.unshift("Edinburgh");  
console.log(myArray); // ["Edinburgh", "Manchester", "Liverpool"]  
  
// Removing items  
const myArray = ["Manchester", "Liverpool"];  
myArray.pop();  
console.log(myArray); // ["Manchester"]  
const myArray = ["Manchester", "Liverpool"];  
const removedItem = myArray.pop();  
console.log(removedItem); // "Liverpool"  
// To remove the first item from an array, use shift():  
const myArray = ["Manchester", "Liverpool"];  
myArray.shift();  
console.log(myArray); // ["Liverpool"]  
// If you know the index of an item, you can remove it from the array using splice():  
myArray.splice(index, 1);  
  
// Accessing every item  
const birds = ["Parrot", "Falcon", "Owl"];  
for (const bird of birds) {  
  console.log(bird);  
}  
  
// Converting between strings and arrays  
const myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";  
const myArray = myData.split(","); // ["Manchester", "Liverpool", ...]  
const myNewString = myArray.join(","); // 'Manchester,London,...'  
const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];  
dogNames.toString(); // Rocket,Flash,Bella,Slugger  
  
// Manipulating array items without modifying the array itself  
let backpackContents = ["piggy", "headlamp", "pen"];  
backpackContents.forEach(function (item) {  
  item = `<li>${item}</li>`;  
  console.log(item);  
});  
  
// Apply a fuction  
let longItems = backpackContents.find(function (item) {  
  if (item.length >= 5) {  
    return item;  
  }  
});  
console.log("longItems:", longItems); // longItems: piggy  
  
const deskArray = ["pen", "camera", "phone", "notebook", "headphones", "lightbulb", "usb drive"];  
// Add last item as the first item on the array:  
deskArray.unshift(deskArray.pop());  
console.log("Last item is now first:", deskArray);  
  
// Sort items by alphabetical order:  
deskArray.sort();  
console.log("Sorted array:", deskArray);  
  
// Find "notebook":  
const foundItem = deskArray.find(item => item === "notebook");  
console.log("Found item:", foundItem);  
  
// Find and remove an item:  
let remove = "notebook";  
deskArray.splice(deskArray.indexOf(remove), 1);  
console.log(`Array with "${remove}" removed:`, deskArray);  
```  
  
### Using the map array method  
  
```js  
/**  
 * The map() array method.  
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map  
 */  
  
const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];  
  
const article = document.querySelector("article");  
let stuffList = document.createElement("ul");  
  
// map() through the stuff array to make a new stuffItems array.  
const stuffItems = stuff.map(item => {  
  let listItem = document.createElement("li");  
  listItem.innerHTML = item;  
  return listItem;  
});  
  
// Append each element from the stuffItems array to the stuffList <ul>  
stuffItems.forEach(item => {  
  stuffList.append(item);  
});  
  
// Append stuffList to the <article>  
article.append(stuffList);  
```  
