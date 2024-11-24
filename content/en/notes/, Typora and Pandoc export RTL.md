---
title: Typora and Pandoc export RTL
created: 2024-11-24 15:31:41
updated: 2024-11-24 15:38:05
aliases:
  - Typora and Pandoc export RTL
share: true
website: en/notes
cssclass:
  - ltr
---

الحالة:: #ملاحظة/مؤرشفة  
المراجع:: <https://pandoc.org/MANUAL.html,> <https://support.typora.io/Export/>

---

## Pandoc

RTL can be controlled using YAML metadata in document or CLI options `--variable=dir:rtl` and `page-progression-direction: rtl`

```yaml
---
lang: ar
dir: rtl
page-progression-direction: rtl
---
```

## Typora

### HTML

Append in <head />

```html
<style>html {direction:rtl;} </style>
```

### EPUB

Create `epub_rtl_style.css` and use it in export

```css
html {direction: rtl;}
```

### PDF

It depends on the theme you're using.
