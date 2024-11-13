---
updated: 2022-06-20 19:38:00
created: 2022-05-29 00:00:00
title: CSS Change rem unit default value
aliases:
  - CSS Change rem unit default value
share: true
cssclass: ltr
website: en/notes/programming
---

الحالة:: #ملاحظة/مؤرشفة
المعرفة:: [[CSS|CSS]]
المصدر:: [[Build Responsive Real-World Websites with HTML and CSS|Build Responsive Real-World Websites with HTML and CSS]]

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
