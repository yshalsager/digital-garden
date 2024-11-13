---
created: 2021-12-28 00:00:00
updated: 2021-12-28 00:00:00
title: youtube-dl download subtitle only
share: true
cssclass: ltr
website: en/notes
---

# youtube-dl download subtitle only

الحالة:: #ملاحظة/مؤرشفة
الرابط: <https://superuser.com/a/927532>
المعرفة:: [[Linux|Linux]]

---

```bash

youtube-dl --sub-lang LANG --skip-download
youtube-dl --all-subs --skip-download
youtube-dl --sub-lang LANG --write-auto-sub --skip-download URI
youtube-dl --sub-lang LANG --write-auto-sub --sub-format srt --skip-download URL
```
