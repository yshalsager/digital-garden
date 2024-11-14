---
title: Node.js chalk package
created: 2022-11-03 09:46:00
updated: 2022-11-03 09:49:00
aliases:
  - Node.js chalk package
share: true
cssclass: ltr
website: en/notes/programming
---

المعرفة:: [[NodeJS|NodeJS]]
الحالة:: #ملاحظة/مؤرشفة
المراجع:: [[The Complete Node.js Developer Course 3rd Edition|The Complete Node.js Developer Course 3rd Edition]]

---

- A Node.js module for printing styled and colorful text in terminal.
- <https://www.npmjs.com/package/chalk>
- Styles can be chained like the second example.

```js
import chalk from 'chalk'

console.log(chalk.green('success'))
console.log(chalk.blue.inverse.bold('success'))
```
