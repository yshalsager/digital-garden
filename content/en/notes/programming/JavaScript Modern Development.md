---  
title: JavaScript Modern Development  
created: 2022-08-16 06:59  
updated: 2022-08-16 07:13  
aliases:  
  - JavaScript Modern Development  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
  - JavaScript  
---  
  
  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
- Projects nowadays are divided into multiple **modules**.  
  - These modules can **share data** between them and make our code **more organized and maintainable**.  
  - They can also contain **3rd party modules** (packages from **npm**).  
- NPM stands for Node Package Manager, it's the name of both of the **repository** in which packages live and the **command-line program** we use to **install and manage** these **packages**.  
- When building a real world application, it needs to go through a **build process**, where one big final JavaScript **bundle** is built, which will be **deployed** to the web server for production.  
- Production simply means that the application is being used by real users in the real world.  
- Build process can be complex, in a simple workflow it can include two steps:  
  1. **Bundling** all modules together into one big file while **removing unused code** and **compressing** the code as well. This step is important because older browsers don't support modules and it's better for performance to send less files to the browser.  
  2. **Transpiling and Polyfilling**, which is basically to **convert all modern JavaScript** syntax and features back **to old ES5 syntax**, so older browsers can run the modern code without breaking. This is usually done using a tool called **Babel**.  
- We use special tools to implement build process like webpack (more popular but can be hard to setup) and Parcel (zero configuration bundler).  
- Development tools like `liver-server` and `webpack` are also available on NPM.  
