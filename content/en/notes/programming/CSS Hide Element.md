---  
updated: 2022-06-20 19:38  
created: 2022-06-01 00:00  
title: CSS Hide Element  
aliases:  
  - CSS Hide Element  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
  - CSS  
---  
  
  
  
المعرفة:: [CSS](CSS)  
الحالة:: #ملاحظة_مؤرشفة  
  
---  
  
## `display: none`  
  
```css  
div {  
  display: none;  
}  
```  
  
This method doesn't allow transition effects.  
  
## `opacity` + `pointer-events` + `visibility`  
  
Instead of `display: none`, a combination of the three mentioned CSS properties can be used.  
  
- `opacity`: Hide element visually.  
- `pointer-events`: Make it inaccessible to mouse and keyboard.  
- `visibility`: Hide it from screen readers.  
  
```css  
div {  
  opacity: 0;  
  pointer-events: none;  
  visibility: hidden;  
}  
```  
  
To show the element again:  
  
```css  
div {  
  opacity: 1;  
  pointer-events: auto;  
  visibility: visible;  
}  
```  
