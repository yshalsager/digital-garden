---
updated: 2022-06-20 19:38:00
created: 2022-05-29 00:00:00
title: CSS Reusable Grid
aliases:
  - CSS Reusable Grid
share: true
cssclass: ltr
website: en/notes/programming
---

# CSS Reusable Grid

الحالة:: #ملاحظة/مؤرشفة
المعرفة:: [[CSS|CSS]]
المصدر:: [[Build Responsive Real-World Websites with HTML and CSS|Build Responsive Real-World Websites with HTML and CSS]]

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
