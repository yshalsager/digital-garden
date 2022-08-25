---  
updated: 2022-06-20 19:38  
created: 2022-06-01 00:00  
title: CSS Focus better handling  
  
aliases:  
  - CSS Focus better handling  
share: true  
website: en/notes/programming  
---  
  
المعرفة:: [CSS](CSS)  
الحالة:: #ملاحظة_مؤرشفة  
  
---  
  
By default, the outline of focus is ugly, it doesn't match website styling and is always squared so it won't appear nicely if an element has border radius. A better approach for handling focus is using the following:  
  
```css  
*:focus {  
  outline: none;  
  box-shadow: 0 0 0 0.8rem rgba(255, 255, 255, 0.5);  
}  
```  
