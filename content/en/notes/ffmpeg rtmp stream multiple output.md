---
title: ffmpeg rtmp stream multiple output
created: 2022-08-04 09:02:00
updated: 2022-08-04 09:02:00
aliases:
  - ffmpeg rtmp stream multiple output
share: true
cssclass: ltr
website: en/notes
---

الحالة:: #ملاحظة/مؤرشفة
المعرفة:: [[Linux|Linux]]

---

- Stream must be mapped before using tee muxer.

```bash
ffmpeg -stream_loop -1 -i https://qurango.net/radio/tarateel -map 0:a -c:a aac -f tee "[f=flv:onfail=ignore]rtmps://server1|[f=flv:onfail=ignore]rtmps://server2"
```
