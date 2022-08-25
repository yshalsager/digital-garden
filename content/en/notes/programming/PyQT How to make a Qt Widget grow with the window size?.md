---  
title: PyQT How to make a Qt Widget grow with the window size?  
created: 2022-07-15 21:16  
updated: 2022-07-15 21:19  
aliases:  
  - PyQT How to make a Qt Widget grow with the window size?  
share: true  
website: en/notes/programming  
---  
  
المعرفة::  
الحالة:: #\ملاحظة_مؤرشفة  
المراجع:: <https://stackoverflow.com/a/6045152>  
  
---  
  
In Designer, activate the centralWidget and assign a layout, e.g. horizontal or vertical layout. Then your QFormLayout will automatically resize.  
Always make sure, that all widgets have a layout! Otherwise, automatic resizing will break with that widget!  
  
![](../../../Pasted%20image%2020220715211824.png)  
