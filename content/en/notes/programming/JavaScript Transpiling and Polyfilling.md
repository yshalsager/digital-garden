---
title: JavaScript Transpiling and Polyfilling
created: 2022-08-16 11:59:00
updated: 2022-08-16 12:10:00
aliases:
  - JavaScript Transpiling and Polyfilling
share: true
cssclass: ltr
website: en/notes/programming
---

المعرفة:: [[JavaScript|JavaScript]]
الحالة:: #ملاحظة/مؤرشفة
المراجع:: [[./The Complete JavaScript Course 2022 From Zero to Expert|The Complete JavaScript Course 2022 From Zero to Expert]]

---

## Transpiling

- [[./JavaScript Bundling With Parcel|Parcel]] automatically uses [Babel](https://github.com/babel/babel) to transpile the code.
- We can configure Babel a lot if we want, for example,  to define exactly what browsers should be supported, etc.
- Babel works with plugins and presets that can both be configured.
  - A plugin is basically a specific JavaScript feature that we want to transpile.
  - A preset is basically a bunch of plugins bundled together.
- By default, `preset-env` is being used, it contains all new features that have already became part of the language after passing ECMAScript 4 stages.
- To include experimental feature as well, we may have to manually include the corresponding plugin of that feature.

## Polyfilling

- New language features, such as new array methods and Promises can't be transpiled, so it need to be polyfilled instead.
- We can use [core-js](https://github.com/zloirock/core-js) to polyfill all features or only ones that we want.

```js
import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';
```

- [regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime) is the runtime support for compiled/transpiled `async` functions.

```js
// Polifilling async functions
import 'regenerator-runtime/runtime';
```
