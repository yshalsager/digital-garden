---
created: 2021-12-28 00:00:00
updated: 2021-12-28 00:00:00
title: ffmpeg burn subtitle
share: true
cssclass: ltr
website: en/notes
---

# ffmpeg burn subtitle

الحالة:: #ملاحظة/مؤرشفة
المعرفة:: [[Linux|Linux]]

---

```bash
ffmpeg -i file.mp4 -vf subtitles="sub.vtt:force_style='FontName=Noto Naskh Arabic,Fontsize=30'" out.mp4
```
