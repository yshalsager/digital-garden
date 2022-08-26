---  
updated: 2022-06-20 19:38  
created: 2021-12-15 00:00  
title: JavaScript String Output  
aliases:  
  - JavaScript String Output  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
---  
  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [JavaScript Essential Training](JavaScript%20Essential%20Training)  
  
---  
  
## String Output  
  
### Template Literals  
  
```js:script.js  
/**  
 * Use template literals to output HTML  
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals  
 *  
 */  
import Backpack from "./Backpack.js";  
  
const everydayPack = new Backpack(  
  "Everyday Pack",  
  30,  
  "grey",  
  15,  
  26,  
  26,  
  false,  
  "December 5, 2018 15:00:00 PST"  
);  
  
const content = `  
  <main>  
    <article>  
      <h1>${everydayPack.name}</h1>  
      <ul>  
        <li>Volume: ${everydayPack.volume}</li>  
        <li>Color: ${everydayPack.color}</li>  
        <li>Age: ${everydayPack.backpackAge()}</li>  
        <li>Number of pockets: ${everydayPack.pocketNum}</li>  
        <li>Left strap length: ${everydayPack.strapLength.left}</li>  
        <li>Right strap length: ${everydayPack.strapLength.right}</li>  
        <li>Lid status: ${everydayPack.lidOpen}</li>  
      </ul>  
    </article>  
  </main>  
`;  
  
document.body.innerHTML = content;  
```  
  
### Traditional String Concatenation  
  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String>  
  
```js  
const content = "<h1>" + everydayPack.name + "</h1>";  
```  
