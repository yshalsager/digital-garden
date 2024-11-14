---
updated: 2022-06-20 19:38:00
created: 2021-12-15 00:00:00
title: JavaScript linking with HTML
aliases:
  - JavaScript linking with HTML
share: true
cssclass: ltr
website: en/notes/programming
---

المعرفة:: [[JavaScript|JavaScript]]
الحالة:: #ملاحظة/مؤرشفة
المراجع:: [[JavaScript Essential Training|JavaScript Essential Training]]

---

## Where to put JavaScript code?

<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script>

### Inline: in an HTML document

```html
<script>
  const allCode = document.querySelectorAll("code");

  for (let item of allCode) {
    item.innerHTML = `&lt;${item.innerHTML}&gt;`;
  }
</script>
```

### External file

```html
<script src="script.js"></script>
```
