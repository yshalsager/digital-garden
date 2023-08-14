---  
updated: 2022-06-20 19:38  
created: 2022-06-06 00:00  
title: JavaScript Primitives vs Objects - Primitive vs Reference Types  
aliases:  
  - JavaScript Primitives vs. Objects - Primitive vs. Reference Types  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
  - JavaScript  
---  
  
  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert), [JadeHendricks's notes](https://github.com/syahshiimi/second-brain/blob/a6bbf926dc6a391717c005c47e7f5b6a5e9327d9/05%20Learning/00%20JavaScript/202107101935%20JavaScript%20Data%20Types.md), [JadeHendricks's notes](https://github.com/JadeHendricks/the-complete-javascript-course-2019/blob/9f805e5d4e3ca73a628eb2b51d22690928ec565c/How%20Javascript%20Works/How%20Javascript%20Works.txt)  
  
---  
  
In JavaScript we have two types of values (not everything is an Object).  
  
- **Primitives**  
  - Numbers / BigInt  
  - Strings  
  - Symbol  
  - Boolean  
  - Undefined  
  - Null  
- **Objects**  
  - Arrays  
  - Functions  
  - Objects  
  - Dates  
  - Wrappers for Numbers, Strings, Booleans  
  
It is natural to call numbers etc as primitive types while objects, arrays etc as `reference` types.  
  
**Primitives** are stored in the **call stack**. It runs when the [EC](,%20JavaScript%20Execution%20Context%20and%20Call%20Stack#Execution%20Context%20In%20Detail) runs. **References** are stored in the **call heap**.  
  
When we call a primitive:  
  
- JavaScript begins the EC in the call stack, by giving a `memory address` and also a value.  
  
When we **declare** a `variable` as an object, the identifier is created which points to a piece of memory in the `call stack` which then references to a memory in the `heap`.  
  
This is because the stack might be memory limited. As such, the object stored in the `heap` can be changed but the address in the `call stack` remains the same. This is because the memory address does not change!  
  
## Primitives and References in Function Parameters  
  
![](,%20JavaScript%20Functions#How%20passing%20function%20arguments%20work)  
  
## Cloning an Object  
  
- Shallow clone can be done using `Object.assign()`.  
  
```js  
const state = {  
  cart: [  
    { product: 'bread', quantity: 5 },  
    { product: 'pizza', quantity: 5 },  
  ],  
  user: { loggedIn: true },  
};  
const stateClone = Object.assign({}, state);  
state.user.loggedIn = false; // changes the original too!  
```  
  
- Deep clone can be done using [lodash](https://lodash.com/)'s `cloneDeep()` method.  
```js  
import cloneDeep from 'lodash-es';  
const stateDeepClone = cloneDeep(state);  
```  
