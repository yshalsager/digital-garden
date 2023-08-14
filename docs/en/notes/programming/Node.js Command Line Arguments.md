---  
title: Node.js Command Line Arguments  
created: 2022-11-03 10:58  
updated: 2022-11-03 11:12  
aliases:  
  - Node.js Command Line Arguments  
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
  
- Command line arguments are values passed into the application from the terminal.  
- The Node.js application can access the command line arguments that were provided using [process.argv](https://nodejs.org/api/process.html#process_process_argv). This array contains at least two items.  
  - The path to the Node.js executable.  
  - The path to the JavaScript file that was executed.  
  - Everything after that is a command line argument.  
  
```js  
const command = process.argv[2]  
if (command === 'add') {  
	console.log('Adding note!')  
} else if (command === 'remove') {  
	console.log('Removing note!')  
}  
```  
  
- The script above grabs the third item in `process.argv`. Since the first two are always provided, the third item is the first command line argument that was passed in. The script uses the value of that argument to figure out what it should do.  
  
```bash  
node app.js add  
# Adding note!  
```  
  
- We can add command line options as well. But, if it's done with `argv`, we'd need to parse them. We can instead use [yargs](./Node.js%20yargs%20package.md) or [commander](https://www.npmjs.com/package/commander), packages built for this purpose.  
