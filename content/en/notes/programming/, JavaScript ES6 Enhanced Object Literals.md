---
updated: 2022-06-20 19:38:00
created: 2022-06-11 00:00:00
title: JavaScript ES6 Enhanced Object Literals
aliases:
  - JavaScript Enhanced Object Literals
share: true
cssclass: ltr
website: en/notes/programming
---

المعرفة:: [[JavaScript|JavaScript]]
الحالة:: #ملاحظة/مؤرشفة
المراجع:: [[./The Complete JavaScript Course 2022 From Zero to Expert|The Complete JavaScript Course 2022 From Zero to Expert]], [syahshiimi's notes](https://github.com/syahshiimi/second-brain/blob/bfa3eed7bb280d6516806e517cba1e8d3822ca21/05%20Learning/00%20JavaScript/202107222147%20Enhanced%20Object%20Literals.md), <https://www.sitepoint.com/es6-enhanced-object-literals/>

---

## Object Initialization from Variables (Property value shorthand)

The new property value shorthand lets us abbreviate the initialization of a property within an object literal, provided that the property key matches an existing variable name.

```js
// ES6 code
const
  a = 1, b = 2, c = 3;
  obj = {
    a
    b
    c
  };
// obj.a = 1, obj.b = 2, obj.c = 3

const openingHours = { open: 12, close: 22 };
const restaurant = {
  name: 'Classico Italiano',
  // ES5
  openingHours: openingHours,
  // ES6 enhanced object literals
  openingHours,
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};
```

## Object Method Definition Shorthand

- Object methods in ES5 require the `function` statement. This is no longer necessary in ES6; it permits a shorthand syntax.
- It’s not possible to use ES6 fat arrow \- function syntax here, because the method requires a name. That said, you can use arrow functions if you name each method directly (like ES5).

```js
// ES5 code
var lib = {
  sum: function (a, b) {
    return a + b;
  },
  mult: function (a, b) {
    return a * b;
  },
};

// ES6 code
const lib = {
  sum(a, b) {
    return a + b;
  },
  mult(a, b) {
    return a * b;
  },
};

// ES6 Arrow function
const lib = {
  sum: (a, b) => a + b,
  mult: (a, b) => a * b,
};

console.log(lib.sum(2, 3)); // 5
console.log(lib.mult(2, 3)); // 6
```

## Dynamic (Computed) Property Keys

- ES6 also enables the ability to have computed property keys in an object literal definition.
- Any expression can be used to create a key.
- A dynamic key can be used for methods as well as properties.

```js
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// ES6 code
const i = 2,
  obj = {
    // Method dynamic key
    ["mult" + i]: x => x * i,
  };

console.log(obj.mult2(5)); // 10
```
