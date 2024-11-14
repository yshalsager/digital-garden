---
title: PyQT How to make a Qt Widget grow with the window size?
created: 2022-07-15 21:16:00
updated: 2022-07-15 21:19:00
aliases:
  - PyQT How to make a Qt Widget grow with the window size?
share: true
cssclass: ltr
website: en/notes/programming
---

المعرفة:: [[Python|Python]]
الحالة:: #ملاحظة/مؤرشفة
المراجع:: <https://stackoverflow.com/a/6045152>

---

In Designer, activate the centralWidget and assign a layout, e.g. horizontal or vertical layout. Then your QFormLayout will automatically resize.
Always make sure, that all widgets have a layout! Otherwise, automatic resizing will break with that widget!

![[../../../img/Pasted image 20220715211824.png|Pasted image 20220715211824.png]]
