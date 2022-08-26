---  
updated: 2022-06-20 19:38  
created: 2022-05-29 00:00  
title: CSS Reusable Grid  
aliases:  
  - CSS Reusable Grid  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
---  
  
  
# CSS Reusable Grid  
  
الحالة:: #ملاحظة_مؤرشفة  
المعرفة:: [CSS](CSS)  
المصدر:: [Build Responsive Real-World Websites with HTML and CSS](Build%20Responsive%20Real-World%20Websites%20with%20HTML%20and%20CSS)  
  
---  
  
```css  
.grid {  
  display: grid;  
  gap: 9.6rem;  
}  
  
.grid--2-cols {  
  grid-template-columns: repeat(2, 1fr);  
}  
  
.grid--3-cols {  
  grid-template-columns: repeat(3, 1fr);  
}  
  
.grid--4-cols {  
  grid-template-columns: repeat(4, 1fr);  
}  
```  
