---  
title: Node.js chalk package  
created: 2022-11-03 09:46  
updated: 2022-11-03 09:49  
aliases:  
  - Node.js chalk package  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
  - NodeJS  
---  
  
  
  
المعرفة:: [NodeJS](NodeJS)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [The Complete Node.js Developer Course 3rd Edition](The%20Complete%20Node.js%20Developer%20Course%203rd%20Edition)  
  
---  
  
- A Node.js module for printing styled and colorful text in terminal.  
- <https://www.npmjs.com/package/chalk>  
- Styles can be chained like the second example.  
  
```js  
import chalk from 'chalk'  
  
console.log(chalk.green('success'))  
console.log(chalk.blue.inverse.bold('success'))  
```  
