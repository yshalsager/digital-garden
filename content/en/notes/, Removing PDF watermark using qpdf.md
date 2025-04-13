---
title: Removing PDF watermark
created: 2025-02-23 22:48:03
updated: 2025-02-23 22:50:38
aliases:
  - Removing PDF watermark
share: true
website: en/notes
---

الحالة:: #ملاحظة/مؤرشفة  
المراجع:: <https://github.com/MrPio/PDF-watermark-removal>

---

- Using [`qpdf`](https://github.com/qpdf/qpdf), `qpdf --qdf  --object-streams=disable 1.pdf out1.pdf` decompress the PDF
- Figure out where's the watermark, e.g. `/XObject <</Im1 521 0 R>>`
- Remove that object `perl -i -pe 's/\/Im\d+ \d+ 0 R//' out1.pdf`
- Linearize and compress the PDF again `qpdf --linearize  out1.pdf 1.pdf`
