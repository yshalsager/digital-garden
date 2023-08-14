---  
updated: 2022-06-21 10:28  
created: 2022-06-19 00:00  
title: JavaScript Numbers  
aliases:  
  - JavaScript Numbers  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
  - JavaScript  
---  
  
  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert), <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt>  
  
---  
  
## How numbers work in JavaScript?  
  
- In JavaScript, all numbers are presented internally as floats.  
  
```js  
console.log(23 === 23.0); // true  
```  
  
- Also, numbers are presented internally in 64-bits base 2 format. (always in binary, similar to PHP and Ruby)  
  - The [decimal.js](http://mikemcl.github.io/decimal.js/) library provides an arbitrary-precision Decimal type for JavaScript.  
- [Floating point math](https://0.30000000000000004.com/).  
  
```js  
// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333  
// Binary base 2 - 0 1  
console.log(0.1 + 0.2); // 0.300000000000000004  
console.log(0.1 + 0.2 === 0.3); // false  
```  
  
## Convert a string to number  
  
```js  
// Conversion  
console.log(Number("23")); // 23  
console.log(+"23"); // 23  
```  
  
See Also: [Type Conversion and Coercion](,%20JavaScript%20Type%20Conversion%20and%20Coercion#Coercion)  
  
## Parse number from a string  
  
- `parseInt` and `parseFloat` are global functions.  
- It's preferred to use them from `Number` object.  
- It's useful in situations like reading value from css without the unit. ^09d46f  
  
```js  
// parseInt(string, base)  
console.log(Number.parseInt("30px")); // 30  
console.log(Number.parseInt("e23")); // NaN  
console.log(Number.parseInt("30px", 10)); // 30  
console.log(Number.parseInt("e23", 10)); // NaN  
console.log(Number.parseFloat("2.5rem")); // 2.5  
console.log(Number.parseInt("2.5rem")); // 2  
// whitespace doesn't affect anything  
console.log(Number.parseInt("  2.5rem  ")); // 2  
console.log(Number.parseFloat("  2.5rem  ")); // 2.5  
// console.log(parseFloat('  2.5rem  ')); // also works  
```  
  
More: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt).  
  
## Checking if value is NaN  
  
```js  
console.log(Number.isNaN(20)); // false  
console.log(Number.isNaN("20")); // false  
console.log(Number.isNaN(+"20X")); // true  
console.log(Number.isNaN(23 / 0)); // true  
```  
  
## Checking if value is number  
  
```js  
console.log(Number.isFinite(20)); // true  
console.log(Number.isFinite("20")); // false  
console.log(Number.isFinite(+"20X")); // false  
console.log(Number.isFinite(23 / 0)); // false  
console.log(Number.isInteger(23)); // true  
console.log(Number.isInteger(23.0)); // true  
console.log(Number.isInteger(23 / 0)); // false  
```  
  
## JavaScript Math Operations  
  
[Math Operators](JavaScript%20Math%20Operators)  
  
### Square Root  
  
```js  
console.log(Math.sqrt(25)); // 5  
console.log(25 ** (1 / 2)); // 5  
```  
  
### Cubic Root  
  
```js  
console.log(8 ** (1 / 3)); // 2  
```  
  
### Max Value  
  
- It does [Type Coercion](JavaScript%20Type%20Conversion%20and%20Coercion) but doesn't parse numbers.  
  
```js  
console.log(Math.max(5, 18, 23, 11, 2)); // 23  
console.log(Math.max(5, 18, "23", 11, 2)); // 23  
console.log(Math.max(5, 18, "23px", 11, 2)); // NaN  
```  
  
### Minimum Value  
  
```js  
console.log(Math.min(5, 18, 23, 11, 2)); // 2  
```  
  
### PI  
  
```js  
console.log(Math.PI * Number.parseFloat("10px") ** 2); // 314.1592653589793  
```  
  
### Random  
  
```js  
// Get random number from 1 to 6  
Math.trunc(Math.random() * 6) + 1; // This is not okay for negative numbers  
// Get random number from 1 to 20  
Math.floor(Math.random() * 20) + 1;  
  
// 0...1 -> 0...(max - min) -> min...max  
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;  
console.log(randomInt(10, 20));  
```  
  
### Rounding Integers  
  
All these methods does [Type Coercion](JavaScript%20Type%20Conversion%20and%20Coercion).  
  
- `trunc` returns the integer part of a number by **removing any fractional digits**.  
- `round` returns the value of a number **rounded to the nearest** integer.  
- `ceil` **rounds** a number up **to the next largest** integer.  
- `floor` returns largest integer **less than or equal** to a given number **(rounds down)**.  
  
```js  
// Rounding integers  
console.log(Math.round(23.3)); // 23  
console.log(Math.round(23.9)); // 24  
console.log(Math.ceil(23.3)); // 24  
console.log(Math.ceil(23.9)); // 24  
console.log(Math.floor(23.3)); // 23  
console.log(Math.floor("23.9")); // 23  
console.log(Math.trunc(23.3)); // 23  
console.log(Math.trunc(-23.3)); // -23  
console.log(Math.floor(-23.3)); // -24  
```  
  
### Rounding Decimals  
  
- `toFixed` formats a number using fixed-point notation, returns a string.  
  
```js  
// Rounding decimals  
console.log((2.7).toFixed(0)); // 3  
console.log((2.7).toFixed(3)); // 2.700  
console.log((2.345).toFixed(2)); // 2.35  
console.log(+(2.345).toFixed(2)); // 2.35  
```  
  
## Remainder Operator  
  
- The remainder operator (%) returns the remainder left over when one operand is divided by a second operand.  
- It can be used for operations that needs to do something with the nth repeat. For example doing something every 2nd / 3rd / 5th time.  
  
```js  
console.log(5 % 2); // 1  
console.log(5 / 2); // 2.5 - 5 = 2 * 2 + 1  
  
console.log(8 % 3); // 2  
console.log(8 / 3); // 8 = 2 * 3 + 2  
  
// is even  
console.log(6 % 2); // 0  
console.log(6 / 2); // 3  
// is odd  
console.log(7 % 2); // 1  
console.log(7 / 2); // 3.5  
  
const isEven = n => n % 2 === 0;  
console.log(isEven(8)); // true  
console.log(isEven(23)); // false  
console.log(isEven(514)); // true  
```  
  
## Numeric Separators  
  
- Introduced in ES2021.  
- Allows us for format numbers to be easily readable and understandable using underscore.  
- Underscore is only allowed between numbers.  
- Converting strings formatted with underscores to numbers won't work well.  
  
```js  
// Numeric Separators  
// 287,460,000,000  
const diameter = 287_460_000_000;  
console.log(diameter); // 287460000000  
const price = 345_99;  
console.log(price); // 34599  
const transferFee1 = 15_00;  
const transferFee2 = 1_500;  
const PI = 3.14_15;  
console.log(PI); // 3.1415  
console.log(Number("230000")); // 230000  
console.log(Number("230_000")); // NaN  
console.log(parseInt("230_000")); // 230  
```  
  
## BigInt  
  
- In JavaScript, numbers are represented internally as 64 bits, that means that there are exactly 64 ones or zeros to represent any given number, of these 64 bits only 53 are used to actually store the digits themselves while the rest are used for storing the position of the decimal point and the sign.  
- Number's maximum safe integer in JavaScript is `2^53 - 1` (9 quadrillion).  
  
```js  
console.log(2 ** 53 - 1); // 9007199254740991  
const x = Number.MAX_SAFE_INTEGER + 1;  
const y = Number.MAX_SAFE_INTEGER + 2;  
  
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991  
console.log(x); // 9007199254740992  
console.log(x === y); // true  
```  
  
- For larger integers `BigInt` should be used.  
- A `BigInt` value, is a primitive, created by appending n to the end of an integer literal, or by calling the `BigInt()` function (without the new operator) and giving it an integer value or string value.  
  
```js  
console.log(4838430248342043823408394839483204n); // 4838430248342043823408394839483204n  
console.log(BigInt(48384302));  
```  
  
### Operations  
  
- `BigInt` values and normal `Number` values can't be mixed. Except for the following cases.  
  
```js  
console.log(10000n + 10000n); // 20000n  
console.log(36286372637263726376237263726372632n * 10000000n); // 362863726372637263762372637263726320000000n  
// console.log(Math.sqrt(16n));  
const huge = 20289830237283728378237n;  
const num = 23;  
console.log(huge * num); // TypeError: Cannot mix BigInt and other types, use explicit conversions  
console.log(huge * BigInt(num));  
```  
  
### Exceptions  
  
- Logical operators, like comparing `BigInt` with number.  
- String concatenations.  
  
```js  
console.log(20n > 15); // true  
console.log(20n === 20); // false  
console.log(typeof 20n); // bigint  
console.log(20n == "20"); // true  
console.log(huge + " is REALLY big!!!");  
```  
  
### Divisions  
  
- The / operator works as expected with whole numbers — but operations with a fractional result **will be truncated** when used with a `BigInt` value — they won't return any fractional digits.  
  
```js  
console.log(11n / 3n); // 3n  
console.log(10 / 3); // 3.33333333335  
```  
  
## Numbers Internationalization  
  
- The [`Intl.NumberFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) object enables language-sensitive number formatting. It accepts [`options`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#syntax) parameter for further customization.  
  
```js  
// new Intl.NumberFormat(locales, options)  
  
const num = 3884764.23;  
const options = {  
  style: 'currency',  
  unit: 'celsius',  
  currency: 'EUR',  
  // useGrouping: false,  
};  
console.log('US: ', new Intl.NumberFormat('en-US', options).format(num)); // US: €3,884,764.23  
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num)); // Germany: 3.884.764,23 €  
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num)); // Syria: ٣٬٨٨٤٬٧٦٤٫٢٣ €  
```  
  
### Formatting currencies  
  
```js  
const formatCur = function (value, locale, currency) {  
  return new Intl.NumberFormat(locale, {  
    style: "currency",  
    currency: currency,  
  }).format(value);  
};  
```  
