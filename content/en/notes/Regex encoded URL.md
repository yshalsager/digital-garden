---
created: 2022-06-03 20:33:00
updated: 2022-06-20 18:34:00
title: Regex encoded URL
share: true
cssclass: ltr
website: en/notes
---

# ملاحظة/مؤرشفة

المعرفة:: [[Regex|Regex]]
المراجع:: <https://stackoverflow.com/questions/57240674/regex-about-url-encoded-string>

TLDR: `(%[0-9A-F]{2})+`
Proper URL encoding uses hex digits only, `A-F` not `A-Z`. The encoded URL could contain non-encoded characters anywhere. Also, you should escape the full stop.

```xml
((%[0-9A-F]{2}|[^<>'" %])+)\.txt
```

is a quick ad-hoc fix for your regex, though obviously for any production code, probably don't use a regex for this at all, or at the very least try a well-defined and properly tested URL regex like the one you can find in the HTTP RFC.

Putting the `+` quantifier outside the capturing parentheses will only return the last repetition. I added a second set of parentheses to put the quantifier inside the first capture group, which assumes you are doing something to extract the first capture group in particular. (If your regex dialect has non-capturing groups, you could change the second opening parenthesis to non-capturing, i.e. `(?:`.)
