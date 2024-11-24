---
title: ", Obsidian Quartz template RTL and LTR"
created: 2024-11-24 15:27:23
updated: 2024-11-24 15:30:52
aliases:
  - ", Obsidian Quartz template RTL and LTR"
share: true
website: en/notes
cssclass:
  - ltr
---

الحالة:: #ملاحظة/مؤرشفة  
المراجع:: <https://github.com/jackyzha0/quartz/issues/947#issuecomment-1973465203>

---

> If you want page-specific right-to-left support, you can add a `cssclass` to the frontmatter of specific notes and use custom CSS:
>
> In the notes:
>
> ```yaml
> ---
> title: some page with right to left text.
> cssclass: rtl-class
> ---
> ```
>
> In the `custom.scss` file:
>
> ```css
> .rtl-class,
> .rtl-class * {
>   direction: rtl;
> }
> ```

---

To configure a website for RTL as default, edit `quartz/styles/custom.scss` and use `cssclass: ltr` in notes:

```css
* {
  direction: rtl;
}

figure[data-rehype-pretty-code-figure] * {
  direction: ltr;
}

.ltr,
.ltr * {
  direction: ltr;
}
```
