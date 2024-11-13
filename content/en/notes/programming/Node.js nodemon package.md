---
title: Node.js nodemon package
created: 2022-11-03 10:01:00
updated: 2022-11-20 15:28:00
aliases: Node.js nodemon package
share: true
cssclass: ltr
website: en/notes/programming
---

المعرفة:: [[NodeJS|NodeJS]]
الحالة:: #ملاحظة/مؤرشفة
المراجع:: [[The Complete Node.js Developer Course 3rd Edition|The Complete Node.js Developer Course 3rd Edition]]

---

- nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- <https://www.npmjs.com/package/nodemon>
- When you install nodemon globally, you get access a new `nodemon` command from the terminal. This can be used to start and Node.js application and then restart the application any of the app scripts change.
  - This means you won’t need to switch between the terminal and text editor to restart your application every time you make a change.

```js
nodemon app.js
```

- You can stop nodemon by using <kbd>ctrl + c</kbd> from the terminal.

![[./Node.js Express#^e9662e|, Node.js Express > ^e9662e]]
