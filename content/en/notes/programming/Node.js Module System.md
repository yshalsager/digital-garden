---
title: Node.js Module System
created: 2022-10-30 15:06:00
updated: 2022-11-06 10:49:00
aliases:
  - Node.js Module System
share: true
cssclass: ltr
website: en/notes/programming
---

المعرفة:: [[NodeJS|NodeJS]]
الحالة:: #ملاحظة/مؤرشفة
المراجع:: [[The Complete Node.js Developer Course 3rd Edition|The Complete Node.js Developer Course 3rd Edition]], [coggro's Notes](https://github.com/coggro/node-notes-2021/tree/main/Section%20002), [anuragkapur's Notes](https://github.com/anuragkapur/anuragkapur.github.io/blob/master/blog/programming/javascript/_posts/2019-04-23-the-complete-node-js-developer-course-3rd-edition-udemy.md)

---

## Importing Node.js Core Modules

- All modules of Node.js API, listed in docs [here](https://nodejs.org/dist/latest-v18.x/docs/api/), are available globally, so they can be used without importing them e.g. `console`.

```js
console.log('Hello Node.js!')
```

### Core Modules and `require`

- Node.js comes with dozens of built-in modules. These built-in modules, sometimes referred to as core modules, gives access to tools for working with the file system, making http requests, creating web servers, etc.
- The module system is built around the `require` function. This function is used to **load a module** and get access to its contents. `require` is a global variable provided to all your Node.js scripts.

```js
const fs = require('fs');

fs.writeFileSync('notes.txt', 'Hello Note.js!');
```

^fffd7a

- The script above uses require to load in the `fs` [module](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#fswritefilesyncfile-data-options). This is a built-in Node.js module that provides functions you can use to **manipulate the file system**. The script uses `writeFileSync` to write a message to `notes.txt`. ^cf1e9e
- Note that we can have a different name for the variable `fs` and the program would work, though it's common to stick with the **convention** for all node modules we load. ^2adeeb

```js
fs.appendFileSync('notes.txt', 'Added text');
```

^e6ac24

## Importing Our Own Files

- `require` can also be used to load in JavaScript files created by us. All you need to do is provide `require` with **a relative path** to the script you want to load. This path should start with `./` and then link to the file that needs to be loaded in.

```js:utils.js
console.log('utils.js!')
```

```js:app.js
const checkUtils = require('./src/utils.js');
checkUtils();
```

- The code above uses `require` to load in a file called `utils.js` in the `src` directory. It stores the module contents in a variable, and then uses the contents in the script.
- Each module has its own scope with its own variables because Node.js scripts don’t share a global score. This means variables created in one scripts are not accessible in a different script. The only way to share values between scripts is by explicitly export what we need to use using `require` with `module.exports`.

### Exporting from Files

- Node.js provides the required script with a place to store values that should be exported as part of the library which is `module.exports`.
- In `utils.js` below. A function is defined and then assigned to `module.exports`. The value stored on `module.exports` will be the return value for require when the script is imported. That means other scripts could load in the utilities to access the check function.

```js
const getNotes = function () {
    return 'Your notes...'
}

module.exports = getNotes
```

```js
const getNotes = require('./notes.js')
const msg = getNotes()
console.log(msg)
```

- It's possible to export and import more than one variable from a module too using [[./JavaScript Object Destructuring|Object Destructuring]] and [[./JavaScript ES6 Enhanced Object Literals#Object Initialization from Variables (Property value shorthand)|ES6 short-hand for object literals]].

```js
// file 1
// ...
export { utilslog, name }
// or
module.exports = {getNotes, addNotes}
// module.exports = {getNotes: getNotes, addNotes: addNotes}

// file 2
import { name, utilslog } from './utils.js'
```

- We can define a variable inside `modules.exports` directly too.

```js
module.exports.age = 25;
```

- Similarly, we can define a function.

```js
module.exports.addNote = () => {
    console.log('addNote');
}
```

## Importing npm Modules

- [[./JavaScript NPM|NPM]] is a package manager that allows you to install and use third-party npm libraries in your code. This opens up a world of possibilities, as there are npm packages for everything.

### Initializing npm

- A Node.js application needs to initialize npm before it can be used.
- Run `npm init` from the root of the project to get that done. That command will ask you a series of questions about the project and it’ll use the information to generate a `package.json` file in the root of the project.

```js
{
 "name": "notes-app",
 "version": "1.0.0",
 "description": "",
 "main": "app.js",
 "scripts": {
 "test": "echo \"Error: no test specified\" && exit 1"
 },
 "author": "",
 "license": "ISC",
}
```

### Installing an npm Module

- `npm install` command can be used to install a new module in the project.

```bash
# installs version 10.8.0 of validator
npm install validator@10.8.0
# installs the latest version
npm install validator
```

- The command does three important things:
  1. It creates a `node_modules` directory. npm uses this directory to store all the code for the npm modules you have installed.
  2. It adds the module as a dependency by listing it in the dependencies property in `package.json`. This allows tracking and managing of installed modules.
  3. npm creates a `package-lock.json` file. This includes detailed information about the modules you’ve installed which helps keep things fast and secure.
- You should never make changes to `node_modules` or `package-lock.json`.

```bash
# install as a dev dependency only
npm install <package-name> --save-dev
```

- `node_modules` directory shouldn't be committed to git.

### Importing an npm Module

- npm modules can be imported into your script using `require`. To load in an npm module, pass the npm module name to `require`.

```js
const validator = require('validator')
console.log(validator.isURL('https/mead.io')) // true
console.log(validator.isEmail('gmail.com')) // false
```

- The script above uses `require` to load in `validator`. The script then uses the `isURL` function provided by `validator` to check if a given string contains a valid URL.

## Global npm Modules

- You can use npm modules from outside of your scripts by installing them globally.
- npm modules can be installed globally by adding a `-g` flag to the installation command.
- Not all modules are designed to be installed globally.

```shell
# install as a global utility - doesn't add to the project specific package.json
npm install <package-name> --global 
```

- A globally installed module is not added as a dependency to your project. That means you won’t see it listed in `package.json` or `package-lock.json`. You also won’t find its code in `node_modules`.
- Globally installed modules are located in a special directory in your machine which is created and managed by npm.

## What is the difference between .js and .mjs files?

- <https://stackoverflow.com/questions/57492546/what-is-the-difference-between-js-and-mjs-files>.
- Common JS : uses `require` and `module.exports`.
- ECMAScript : uses `import` and `export`.

```json
// package.json
{
  // assume .js is using...
  "type": "commonjs", // require/module.exports
  "type": "module" // import/export
}
```

- `.cjs`: no matter what `type` is defined, we can use CommonJs syntax.
- `.mjs`: no matter what `type` is defined, we can use ES6 syntax.
