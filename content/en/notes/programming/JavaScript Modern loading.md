---  
updated: 2022-07-06 19:08  
created: 2021-12-15 00:00  
title: JavaScript Modern loading  
aliases:  
  - JavaScript Modern loading  
share: true  
website: en/notes/programming  
---  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #\ملاحظة_مؤرشفة  
المراجع:: [JavaScript Essential Training](JavaScript%20Essential%20Training), [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
## Modern JavaScript loading  
  
### Default Behavior  
  
- (called content / render blocking)  
- Browser stops rendering when JavaScript is encountered. JavaScript is executed before rendering continues. Often referred to as content blocking.  
  
```html  
<script src="JS/script.js"></script>  
```  
  
### Async  
  
- Browser downloads JavaScript in parallel while HTML renders. When JavaScript is fully loaded, rendering stops while JavaScript is executed.  
- This is good for some purposes, especially when you need, to get the JavaScript to parse as quickly as possible, and you don't really care about render blocking.  
  
```html  
<script src="JS/script.js" async></script>  
```  
  
### Defer  
  
- Browser downloads JavaScript in parallel while HTML renders, then defers execution of JavaScript until HTML rendering is complete.  
  
```html  
<script src="JS/script.js" defer></script>  
```  
  
## Regular vs Async vs Defer  
  
|                              **END OF BODY**                             |                                                                           **ASYNC IN HEAD**                                                                           |                                                  **DEFER IN HEAD**                                                 |  
| :----------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------: |  
| Scripts are fetched and executed **after the HTML is completely parsed** |                                                  Scripts are fetched **asynchronously** and executed **immediately**                                                  |             Scripts are fetched **asynchronously** and executed **after the HTML is completely parsed**            |  
|                 *Use if you need to support old browsers*                | Usually the `DOMContentLoaded` event waits for **all** scripts to execute, except for `async` scripts. So, `DOMContentLoaded` **does not wait** for an `async` script |                         `DOMContentLoaded` event fires **after** `defer` script is executed                        |  
|                                                                          |                                                             Scripts **not** guaranteed to execute in order                                                            |                                          Scripts are executed **in order**                                         |  
|                                                                          |                                             *Use for 3rd-party scripts where order doesn’t matter* (e.g. Google Analytics)                                            | **This is overall the best solution! Use for your own scripts, and when order matters** (e.g. including a library) |  
  
**Note:** You can, of course, use different strategies for different scripts. Usually a complete web applications includes more than just one script.  
  
## Summary  
  
**In a nutshell:**  
  
- `async`/`defer` Should Be Standard.  
- Only use render blocking when you have a specific reason.  
- Loading JavaScript in the footer is now an anti-pattern.  
- Never load JavaScript in the head.  
