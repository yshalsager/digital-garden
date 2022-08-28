---  
updated: 2022-06-20 19:38  
created: 2021-12-15 00:00  
title: JavaScript Switch Statement  
aliases:  
  - JavaScript Switch Statement  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
  - JavaScript  
---  
  
  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [JavaScript Essential Training](JavaScript%20Essential%20Training)  
  
---  
  
## Conditional switch statement  
  
The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.  
  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch>  
  
```js:NestedIf  
const usedStatus = () => {  
  let age = everydayPack.backpackAge();  
  let description;  
  
  if (age >= 30) {  
    if (age >= 365) {  
      if (age >= 1095) {  
        description = "old";  
      } else {  
        description = "used";  
      }  
    } else {  
      description = "lightly used";  
    }  
  } else {  
    description = "new";  
  }  
};  
```  
  
```js:switchCase  
const usedStatus = () => {  
  let age = everydayPack.backpackAge();  
  let description;  
  
  switch (true) {  
    case age < 30:  
      description = "new"  
      break;  
    case age >= 30 && age < 365:  
      description = "lightly used"  
      break;  
    case age >= 365 && age < 1095:  
      description ="used"  
      break;  
    case age >= 1095:  
      description = "old"  
      break;  
    default:  
      console.log(`There is no description for ${age}.`)  
  }  
};  
```  
