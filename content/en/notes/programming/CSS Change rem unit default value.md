---  
updated: 2022-06-20 19:38  
created: 2022-05-29 00:00  
title: CSS Change rem unit default value  
aliases:  
  - CSS Change rem unit default value  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
  - CSS  
---  
  
  
  
الحالة:: #ملاحظة_مؤرشفة  
المعرفة:: [CSS](CSS)  
المصدر:: [Build Responsive Real-World Websites with HTML and CSS](Build%20Responsive%20Real-World%20Websites%20with%20HTML%20and%20CSS)  
  
---  
  
```css  
/* This will change the value of 1 rem */  
html {  
  /* font-size: 10px; */ /* But this will cause problems with people who change browser's font size */  
  /* Percentage of user's browser font size setting */  
  font-size: 62.5%; /* 10px / 16px = 0.625 = 62.5% */  
}  
```  
  
**Note**: rem and em do NOT depend on html font-size in media queries! Instead, 1rem = 1em = 16px.  
