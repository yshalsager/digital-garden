---
title: How to extract all links from pdf file?
created: 2023-01-24 11:39:00
updated: 2023-01-24 11:39:00
aliases:
  - How to extract all links from pdf file?
share: true
cssclass: ltr
website: en/notes
---

المعرفة:: [[Regex|Regex]]
الحالة:: #ملاحظة/مؤرشفة
المراجع:: <https://stackoverflow.com/questions/31436357/how-to-extract-all-links-from-pdf-file>

---

```shell
strings "somePDFfile.pdf" | grep http
```

This works even better if you use `pdftk` to uncompress it first (credits: [Ben Stern](https://stackoverflow.com/users/8657995/ben-stern)):

```shell
pdftk in.pdf cat output out.pdf uncompress; strings out.pdf | grep -i http
```
