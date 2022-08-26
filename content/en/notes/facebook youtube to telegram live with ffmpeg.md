---  
created: 2022-03-22 00:00  
updated: 2022-06-29 20:37  
title: facebook youtube to telegram live with ffmpeg  
share: true  
website: en/notes  
tags:  
  - ملاحظة_مؤرشفة  
---  
  
  
# facebook / youtube to telegram live with ffmpeg  
  
الحالة:: #ملاحظة_مؤرشفة  
المعرفة:: [Linux](Linux)  
  
---  
  
```bash  
ffmpeg -i "$(yt-dlp -f dash-lp-md-a-0 -g https://www.facebook.com/page/videos/id/)" -c:v libx264 -c:a aac -f flv rtmps://dc4-1.rtmp.t.me/s/token  
# عمل بث مباشر من بث http مباشرة  
  
ffmpeg -i "http://n05.radiojar.com/8s5u5tpdtwzuv?rj-ttl=5&rj-tok=AAABeray1BUAaNFktO4VGQX0CQ" -c:v libx264 -c:a aac -f flv rtmps://dc4-1.rtmp.t.me/s/secret_token  
  
# وممكن من رابط يوتيوب  
ffmpeg -i "$(yt-dlp -f139 -g link)" -c:v libx264 -c:a aac -f flv rtmps://dc4-1.rtmp.t.me/s/secret_token  
```  
