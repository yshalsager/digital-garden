---  
created: 2021-12-28 00:00  
updated: 2021-12-28 00:00  
title: ffmpeg burn subtitle  
share: true  
website: en/notes  
tags:  
  - ملاحظة_مؤرشفة  
  - Linux  
---  
  
  
  
# ffmpeg burn subtitle  
  
الحالة:: #ملاحظة_مؤرشفة  
المعرفة:: [Linux](Linux)  
  
---  
  
```bash  
ffmpeg -i file.mp4 -vf subtitles="sub.vtt:force_style='FontName=Noto Naskh Arabic,Fontsize=30'" out.mp4  
```  
