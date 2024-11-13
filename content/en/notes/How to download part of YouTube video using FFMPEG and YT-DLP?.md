---
title: How to download part of YouTube video using FFMPEG and YT-DLP?
created: 2023-10-03 13:19
updated: 2023-10-03 13:19
aliases:
  - How to download part of YouTube video using FFMPEG and YT-DLP?
المعرفة: "[[Linux]]"
share: true
cssclass: ltr
website: en/notes
---

الحالة:: #ملاحظة/مؤرشفة
المراجع:: 

---

```bash
yt-dlp -f [format] [url] --downloader ffmpeg --downloader-args "ffmpeg_i:-ss [seconds from] -to [seconds to]"
# yt-dlp -f137+140 xxxx --downloader ffmpeg --downloader-args "ffmpeg_i:-ss 7783 -to 7851"
```
