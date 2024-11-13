---
updated: 2022-06-20 19:38:00
created: 2022-06-03 00:00:00
title: JavaScript Strict Mode
aliases:
  - JavaScript Strict Mode
share: true
cssclass: ltr
website: en/notes/programming
---

المعرفة:: [[JavaScript|JavaScript]]
الحالة:: #ملاحظة/مؤرشفة
المراجع:: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode>, [[./The Complete JavaScript Course 2022 From Zero to Expert|The Complete JavaScript Course 2022 From Zero to Expert]]

---

```js
// Whole-script strict mode syntax
"use strict";
var v = "Hi! I'm a strict mode script!";
```

1. Eliminates some JavaScript silent errors by changing them to throw errors.

```js
"use strict";
let mistypeVariable;
mistypeVarible = 17;
/* Assuming no global variable mistypeVarible exists, this line throws a ReferenceError due to the misspelling of "mistypeVariable" (lack of an "a") */
```

2. Prohibits some syntax likely to be defined in future versions of ECMAScript. E.g. `private`, `interface`.

```js
// Assignment to a non-writable global
var undefined = 5; // throws a TypeError
var Infinity = 5; // throws a TypeError
```
