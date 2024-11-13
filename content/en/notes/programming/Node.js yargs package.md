---
title: Node.js yargs package
created: 2022-11-03 11:10:00
updated: 2022-11-03 11:44:00
aliases:
  - Node.js yargs package
share: true
cssclass: ltr
website: en/notes/programming
---

المعرفة:: [[NodeJS|NodeJS]]
الحالة:: #ملاحظة/مؤرشفة
المراجع:: [[The Complete Node.js Developer Course 3rd Edition|The Complete Node.js Developer Course 3rd Edition]], [coggro's Notes](https://github.com/coggro/node-notes-2021/tree/main/Section%20004)

---

## Introduction

- Node.js provides a bare-bones way to access [[./Node.js Command Line Arguments|command line arguments]]. While it’s a good start, it doesn’t provide any way to parse more complex command line arguments.
- Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.
- <https://www.npmjs.com/package/yargs>

## Installing and Setting Up Yargs

```js
npm install yargs@12.0.2
```

- yargs can be used to make it easier to work with command line arguments. The example below shows how this can be done. First, `yargs.version` is used to set up a version for the command line tool. Next, `yargs.command` is used to add support for a new command.

```js
const yargs = require('yargs')

// Customize version
yargs.version('1.1.0')

// Add command
yargs.command({
 command: 'add',
 describe: 'Add a new note',
 handler: function () {
  console.log('Adding a new note!')
 }
})

console.log(yargs.argv)
```

- This command can be triggered by providing its name as a command line argument.

```bash
$ node app.js add
# Adding a new note!
```

- Yargs provides a many useful commands by default, such as tool's version and auto-generated documentation that explains how the tool can be used.

```bash
$ node app.js --version
# 1.1.0

$ node app.js --help
```

- Yargs exposes a much more reasonable object of arguments: `node app.js add --title="things to buy"` yields `{ _: [ 'add' ], title: 'things to buy', '$0': 'app.js' }`.
- We can set up commands using `.command({command object})` function.

```js
args
  .command({
    command: `add`,
    description: `Add a new note`,
    handler: () => {
      console.log(`Adding a new note.`)
    },
  })
  .command({
    command: `remove`,
    description: `Remove a note.`,
    handler: () => {
      console.log(`Removing a note.`)
    },
  })
```

## Adding Command Options

- Options are additional pieces of information passed along with the command. You can set up options for a command using the `builder` property as shown below.
- The `add` command can be used with two options. The first is `title` which is used for the title of the note being added. The second is `body` which is used for the body of the note being added. Both options are required because `demandOption` is set to true. Both are also set up to accept string input because type is set to '`string`'.

```js
yargs.command({
  command: `add`,
  description: `Add a new note`,
  builder: {
    title: {
      describe: `Note title`, // Describe option for help
      demandOption: true, // Require option
      type: `string`, // Force a string value
    },
  },
  // Add argv to arguments here and use in funcution
  handler: (argv) => {
    console.log(`Title: ${argv.title}`)
  },
})
```

```bash
$ node app.js add --title="Buy" --body="Note body here"
Title: Buy
Body: Note body here
```

- Accessing `argv` from the actual args object forces it to actually parse. `console.log(args.argv)`. However, we can force a parse without logging by using `args.parse()`.
