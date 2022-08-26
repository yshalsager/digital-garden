---  
updated: 2022-06-20 19:38  
created: 2022-06-03 00:00  
title: JavaScript Truthy and Falsy  
aliases:  
  - JavaScript Truthy and Falsy  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
---  
  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: <https://developer.mozilla.org/en-US/docs/Glossary/Falsy>, <https://developer.mozilla.org/en-US/docs/Glossary/Truthy>, [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
## Falsy  
  
A **falsy** (sometimes written **falsey**) value is a value that is considered false when encountered in a [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) context.  
  
|  **Value**   |                                                                 **Description**                                                                  |  
| :----------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |  
|    false     |                                                                The keyword false.                                                                |  
|      0       |                                                  The Number zero (so, also 0.0, etc., and 0x0).                                                  |  
|      -0      |                                            The Number negative zero (so, also -0.0, etc., and -0x0).                                             |  
|      0n      |                     The BigInt zero (so, also 0x0n). Note that there is no BigInt negative zero — the negation of 0n is 0n.                      |  
| "", '', \`\` |                                                               Empty string value.                                                                |  
|     null     |                                                         null — the absence of any value.                                                         |  
|  undefined   |                                                         undefined — the primitive value.                                                         |  
|     NaN      |                                                               NaN — not a number.                                                                |  
| document.all | Objects are falsy if and only if they have the IsHTMLDDA internal slot.That slot only exists in document.all and cannot be set using JavaScript. |  
  
In short:  
  
- `0`  
- `""` (Empty String)  
- `undefined`  
- `null`  
- `NaN`  
  
### Examples of falsy values  
  
```js  
if (false)  
if (null)  
if (undefined)  
if (0)  
if (-0)  
if (0n)  
if (NaN)  
if ("")  
```  
  
## Truthy  
  
In [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript), a **truthy** value is a value that is considered `true` when encountered in a [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) context. All values are truthy unless they are defined as [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy). That is, all values are *truthy* except `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`.  
  
**Note:** Empty Objects `{}` and Arrays `[]` aren't falsy!  
  
### Examples of truthy values  
  
```js  
if (true)  
if ({})  
if ([])  
if (42)  
if ("0")  
if ("false")  
if (new Date())  
if (-42)  
if (12n)  
if (3.14)  
if (-3.14)  
if (Infinity)  
if (-Infinity)  
```  
