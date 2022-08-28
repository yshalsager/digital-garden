---  
updated: 2022-06-20 19:38  
created: 2022-06-12 00:00  
title: JavaScript Strings  
aliases:  
  - JavaScript Strings  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
  - JavaScript  
---  
  
  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert), [syahshiimi's notes](https://github.com/syahshiimi/second-brain/blob/bfa3eed7bb280d6516806e517cba1e8d3822ca21/05%20Learning/00%20JavaScript/202108112150%20Working%20With%20Strings%20Pt%201.md), [syahshiimi's notes](https://github.com/syahshiimi/second-brain/blob/bfa3eed7bb280d6516806e517cba1e8d3822ca21/05%20Learning/00%20JavaScript/202108142258%20Working%20With%20Strings%20Pt%202..md), [syahshiimi's notes](https://github.com/syahshiimi/second-brain/blob/bfa3eed7bb280d6516806e517cba1e8d3822ca21/05%20Learning/00%20JavaScript/202108142259%20Working%20With%20Strings%20Pt%203..md)  
  
---  
  
## How string methods work?  
  
Whenever we call a method on a string, JavaScript will convert that string [primitive](JavaScript%20Primitives%20vs%20Objects%20-%20Primitive%20vs%20Reference%20Types) to string object with same content using `new String()`, that object has all string methods, and when the process is done, the object is converted back to a regular string primitive. This process is called boxing.  
  
## Getting character of a string in a specific position  
  
```js  
const plane = "A320";  
console.log(plane[0]); // A  
console.log(plane[1]); // 3  
console.log(plane[2]); // 2  
console.log("B737"[0]); // B  
```  
  
## String Length  
  
```js  
const airline = "TAP Air Portugal";  
console.log(airline.length); // 16  
console.log("B737".length); // 4  
```  
  
## Getting the position of a certain letter in a string  
  
```js  
const airline = "TAP Air Portugal";  
// getting the index of specific alphabet  
console.log(airline.indexOf("r")); // 6 - the first position of 'r'  
console.log(airline.lastIndexOf("r")); // 10 - the last position of 'r'  
consoele.log(airline.indexOf("portugal")); // -1 - string wasn't found  
```  
  
## Removing Parts of String via .slice  
  
```js  
const airline = "TAP Air Portugal";  
console.log(airline.slice(4)); // Air Portugal - starts slicing at index position 4  
// Substr length = end - beginning  
console.log(airline.slice(4, 7)); // Air - starts at 4 and ends at position 7  
```  
  
### Using `.slice` with `.indexOf` to get specific strings  
  
```js  
const airline = "TAP Air Portugal";  
console.log(airline.slice(0, airline.indexOf(" "))); // TAP - extracts the first name in the string, followed by the space afterwards  
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // Portugal - starts slicing from the last ' ' position + 1  
```  
  
### Get strings from last index first - Negative slicing  
  
```js  
const airline = "TAP Air Portugal";  
console.log(airline.slice(-2)); // al  
console.log(airline.slice(1, -1)); // AP Air Portugal  
```  
  
## Change string case  
  
```js  
const airline = "TAP Air Portugal";  
  
console.log(airline.toLowerCase()); // tap air portugal  
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL  
```  
  
## Fix string capitalization  
  
```js  
const passenger = "jOnas";  
const passengerLower = passenger.toLowerCase();  
const passengerCorrect = passengerLower[0].toUpperCase() + passenger.slice(1);  
console.log(passengerCorrect); // 'Jonas'  
```  
  
## Trimming strings  
  
`trim()` function removes trailing white space at both start and end of a string.  
  
```js  
const s = " string with spaces ";  
console.log(s.trim()); // string with spaces  
```  
  
## String replacements  
  
- `replace`:  
  
```js  
const priceGB = '$288,07'  
const priceJP = priceGB.replace('$', 'Y').replace(',' '.');  
console.log(priceJP) // 288.07$  
```  
  
- `replaceAll`:  
  
```js  
const announcement = "All passengers come to boarding door 23. Boarding door 23";  
  
console.log(announcement.replaceAll("door", "gate")); // 'All passengers come to boarding gate 23. Boarding gate 23' - replaces all occurences of word "door" in the string with "gate"  
```  
  
- Replicating `replaceAll` with Regex:  
  
```js  
console.log(announcement.replace(/door/g, "gate")); // 'All passengers come to boarding gate 23. Boarding gate 23'  
```  
  
## String checks  
  
### Check if a word exists in a string  
  
```js  
const plane = "Airbus A320";  
console.log(plane.includes("Airbus")); // returns true  
console.log(plane.includes("Boeing")); // returns false  
console.log(plane.includes("Ai")); // returns true  
```  
  
### Check if a string starts with sub-string  
  
```js  
const plane = "Airbus A320neo";  
console.log(plane.startsWith("Airb")); // true  
```  
  
### Check if a string ends with sub-string  
  
```js  
const plane = "Airbus A320neo";  
console.log(plane.endsWith("neo")); // true  
  
if (plane.startsWith("Airbus") && plane.endsWith("neo")) {  
  console.log("Part of the NEW ARirbus family");  
}  
```  
  
## Split a string into an array  
  
```js  
console.log("a+very+nice+string".split("+")); // ["a", "very", "nice", "string"]  
const [firstName, lastName] = "Real Person".split(" "); // Real, Person  
```  
  
## Combining an array into string  
  
```js  
// using join  
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");  
console.log(newName);  
```  
  
## Padding a string  
  
In situations where the string needs to be a specified character length, we can use padding methods `padStart` and `padEnd`.  
  
```js  
const message = "Go to Gate 23";  
console.log(message.padStart(25, "+").padEnd(35, "+"));  
```  
  
## Convert a number to a string  
  
```js  
const str = 9 + ""; // '9'  
```  
  
## String Repetition  
  
```js  
"5".repeat(4); // 5555  
```  
