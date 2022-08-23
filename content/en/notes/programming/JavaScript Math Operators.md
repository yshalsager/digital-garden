---  
updated: 2022-06-20 19:38  
created: 2021-12-15 00:00  
title: JavaScript Math Operators  
  
aliases:  
  - JavaScript Math Operators  
share: true  
website: en/notes/programming  
---  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة/مؤرشفة  
المراجع:: [JavaScript Essential Training](JavaScript%20Essential%20Training)  
  
---  
  
## Math Operators  
  
```js  
// Number + Number -> addition  
1 + 2; // 3  
  
// Boolean + Number -> addition  
true + 1; // 2  
  
// Boolean + Boolean -> addition  
false + false; // 0  
  
// String + String -> concatenation  
"foo" + "bar"; // "foobar"  
  
// Number + String -> concatenation  
5 + "foo"; // "5foo"  
  
// String + Boolean -> concatenation  
"foo" + false; // "foofalse"  
  
// Subtraction with numbers  
5 - 3; // 2  
3 - 5; // -2  
  
// Number - String -> Subtraction  
15 - "4"; // 11  
  
// Subtraction with non-numbers  
"foo" - 3; // NaN  
```  
  
#### Increment and Decrement  
  
- If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.  
- If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.  
  
```js  
// Prefix increment  
let a = 2;  
b = ++a;  
// a = 3  
// b = 3  
  
// Postfix increment  
let x = 3;  
y = x++;  
// y = 3  
// x = 4  
  
// Prefix decrement  
let a = 2;  
b = --a;  
  
// a = 1  
// b = 1  
  
// Postfix decrement  
let x = 3;  
y = x--;  
// y = 3  
// x = 2  
```  
