---
created: 2022-06-03 20:33:00
updated: 2022-06-20 18:34:00
title: Javascript Regular expression to match non-ASCII characters
share: true
cssclass: ltr
website: en/notes/programming
---

# ملاحظة/مؤرشفة

المعرفة:: [[Regex|Regex]]
المراجع:: <https://stackoverflow.com/a/48902765>

[Unicode Property Escapes](https://github.com/tc39/proposal-regexp-unicode-property-escapes) are among the features of ES2018.

### Basic Usage

With Unicode Property Escapes, you can match a letter from any language with the following simple regular expression:

```javascript
/\p{Letter}/u;
```

Or with the shorthand, even terser:

```javascript
/\p{L}/u;
```

### Matching Words

Regarding the question's concrete use case (matching words), note that you can use Unicode Property Escapes in character classes, making it easy to match letters *together* with other word-characters like hyphens:

```javascript
/[\p{L}-]/u;
```

Stitching it all together, you could match words of all[1] languages with this beautifully short RegEx:

```javascript
/[\p{L}-]+/gu;
```
