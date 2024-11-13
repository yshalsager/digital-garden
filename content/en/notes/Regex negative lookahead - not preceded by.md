---
title: Regex negative lookahead - not preceded by
created: 2022-06-20 18:42:00
updated: 2022-06-20 18:44:00
aliases:
  - Regex negative lookahead - not preceded by
share: true
cssclass: ltr
website: en/notes
---

المعرفة:: [[Regex|Regex]]
الحالة:: #ملاحظة/مؤرشفة
المراجع:: <https://stackoverflow.com/a/7317116>

---

A zero-width negative lookahead:

- Line starts with `title` then whatever not followed by space

```
^title:(?! )(.*))
```

The `(?!...)` part means "only match if the text *following* (hence: lookahead) this *doesn't* (hence: negative) match this. But it doesn't actually *consume* the characters it matches (hence: zero-width).

There are actually 4 combinations of [lookarounds](http://www.regular-expressions.info/lookaround.html) with 2 axes:

- lookbehind / lookahead : specifies if the characters *before* or *after* the point are considered
- positive / negative : specifies if the characters *must* match or *must not* match.
