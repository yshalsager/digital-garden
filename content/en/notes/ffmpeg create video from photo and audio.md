---
title: ffmpeg create video from photo and audio
created: 2023-10-03 13:19
updated: 2023-10-03 13:19
aliases:
  - ffmpeg create video from photo and audio
المعرفة: "[[Linux]]"
share: true
cssclass: ltr
website: en/notes
---

الحالة:: #ملاحظة/مؤرشفة
المراجع:: 

---


```bash
ffmpeg -loop 1 -i photo.jpg -i audio.mp3 -c:v libx264 -tune stillimage -c:a aac -b:a 128k -pix_fmt yuv420p -vf "pad=ceil(iw/2)*2:ceil(ih/2)*2" -y -shortest out.mp4
```