---  
title: JavaScript Bundling With Parcel  
created: 2022-08-16 11:34  
updated: 2022-08-17 08:35  
aliases:  
  - JavaScript Bundling With Parcel  
share: true  
website: en/notes/programming  
---  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة/مؤرشفة  
المراجع:: [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
## How to Use Parcel?  
  
- To install [Parcel](https://github.com/parcel-bundler/parcel) `npm i parcel --save-dev`.  
- To use it with local installation we need to use [npx](https://docs.npmjs.com/cli/v8/commands/npx) `npx parcel index.html` or [npm](JavaScript%20NPM) scripts by adding a configuration like this in `package.json`, then it can be used using `npm run X`.  
  
```json  
  "scripts": {  
    "start": "parcel index.html",  
    "build": "parcel build index.html"  
  },  
```  
  
- Parcel can also do the same job as `live-server`.  
- As Parcel bundles the code into one file, we no longer need to set `<script type="module">`.  
- Parcel automatically uses [Babel](https://github.com/babel/babel) to transpile the code.  
- Parcel can also import assets `import icons from 'url:../img/icons.svg';`.  
  
## Hot Module Replacement  
  
Whenever a module is changed, Parcel will trigger a rebuild, and that new modified bundle will  automatically get injected into the browser without triggering a whole page reload.  
  
```js  
if (module.hot) {  
  module.hot.accept();  
}  
```  
