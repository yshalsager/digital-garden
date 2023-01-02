---  
title: What is Node.js?  
created: 2022-10-30 13:03  
updated: 2022-10-30 15:05  
aliases:  
  - What is Node.js?  
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
  
## What is Node.js?  
  
- Node.js® is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 JavaScript engine.  
- Node.js uses an asynchronous, [event-driven](./JavaScript%20Events.md), non-blocking I/O model that makes it lightweight and efficient.  
- Node doesn't know how to run JavaScript code, instead, it uses the V8 engine and passes the script then gets the results back.  
- Node has `global` keyword that refers to **The global namespace object**, which is kinda similar to `window` in browser runtime.  
- Also, Node doesn't have a way to interact with the [DOM](./JavaScript%20DOM.md), which means there's no `document` object. Instead, it has something similar to `document` called `process`, that gives us various properties and methods for manipulating the node processes that are running.  
  
| **Chrome** | **Node** |  
| :--------: | :------: |  
|     V8     |    V8    |  
|   window   |     -    |  
|  document  |     -    |  
|      -     |  global  |  
|      -     |  process |  
  
- Node.js scripts are created with the `js` file extension since Node.js is not a programming language.  
  
```js  
console.log('Hello Node.js!')  
```  
  
## Summary  
  
- Node.js is JavaScript on the server.  
- It uses the V8 JavaScript engine to run all of the JavaScript code you provide.  
- Node.js is able to teach JavaScript new things by providing C++ bindings to the V8. This allows JavaScript to do anything that C++ can do, e.g. to access the file system.  
  
##### How to exit a Node process?  
  
- To exit a running Node process, for example the running console:  
  
```js  
process.exit()  
```  
