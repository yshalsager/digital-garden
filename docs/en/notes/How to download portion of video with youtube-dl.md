---  
created: 2021-05-08 00:00  
updated: 2021-05-08 00:00  
title: How to download portion of video with youtube-dl  
share: true  
website: en/notes  
tags:  
  - ملاحظة_مؤرشفة  
  - Linux  
---  
  
  
  
# How to download portion of video with youtube-dl command?  
  
الحالة:: #ملاحظة_مؤرشفة  
الرابط: <https://unix.stackexchange.com/a/388148>  
المعرفة:: [Linux](Linux)  
  
---  
  
Adding to Johnnie's answer:  
  
Use `youtube-dl --youtube-skip-dash-manifest -g "URL"` to get the video and audio streams.  
  
Now use:  
  
```  
ffmpeg -ss 12:15 -i "1st-URL" -ss 12:15 -i "2nd-URL" -t 5:15 -map 0:v -map 1:a -c:v libx264 -c:a aac output.mkv  
  
```  
  
You'll need to use the `-ss` option for each stream. I also recommend doing it about 30 seconds earlier and then using another `-ss 30` to avoid losing any key frames. Here's a real example using one of my youtube videos.  
  
```  
youtube-dl --youtube-skip-dash-manifest -g https://www.youtube.com/watch?v=gESHIrvIQQo  
  
```  
  
Output:  
  
```  
https://r3---sn-mv-cvne.googlevideo.com/videoplayback/id/80448722bbc8410a/itag/298/source/youtube/requiressl/yes/mn/sn-mv-cvne/ei/BgifWfmmL4iE8wSlv47oCA/mm/31/pl/23/mv/m/ms/au/initcwndbps/11447500/ratebypass/yes/mime/video/mp4/otfp/1/gir/yes/clen/5231968228/lmt/1502479662079137/dur/18575.164/key/dg_yt0/signature/4FFB9B0B7E1703B31F5D07DAD579B55F17EF7BAA.0CB63905C89DD4D33F90CF3AAD728F1ECDFCB9B3/mt/1503594423/ip/206.34.122.70/ipbits/0/expire/1503616102/sparams/ip,ipbits,expire,id,itag,source,requiressl,mn,ei,mm,pl,mv,ms,initcwndbps,ratebypass,mime,otfp,gir,clen,lmt,dur/  
https://r3---sn-mv-cvne.googlevideo.com/videoplayback/id/80448722bbc8410a/itag/140/source/youtube/requiressl/yes/mn/sn-mv-cvne/ei/BgifWfmmL4iE8wSlv47oCA/mm/31/pl/23/mv/m/ms/au/initcwndbps/11447500/ratebypass/yes/mime/audio/mp4/otfp/1/gir/yes/clen/295235970/lmt/1502480001536214/dur/18575.243/key/dg_yt0/signature/4CD42047D1D5C714377350905C1CC5CBA37C0009.6EED1FC92D17A096235C32E48F4B15DEF7DD99B0/mt/1503594423/ip/206.34.122.70/ipbits/0/expire/1503616102/sparams/ip,ipbits,expire,id,itag,source,requiressl,mn,ei,mm,pl,mv,ms,initcwndbps,ratebypass,mime,otfp,gir,clen,lmt,dur/  
  
```  
  
I wanted to cut from 43:00 to 50:10 so I'm going to do `-ss 42:30` (giving me a few seconds to catch a good keyframe) on both inputs and then do a `-ss 30` after the inputs to start at 43:00.  
  
I'll then use `map` to map the video `0:v` and audio `1:a` (0 means first input, which is the video and 1 means the second input, which is the audio) and then choose my encoding options.  
  
```  
# The first URL  
video_url="https://r3---sn-mv-cvne.googlevideo.com/videoplayback/id/80448722bbc8410a/itag/298/source/youtube/requiressl/yes/pl/23/ei/5wCfWY6dBeOj8gSSxZaACQ/mv/m/initcwndbps/5055000/ms/au/mm/31/mn/sn-mv-cvne/ratebypass/yes/mime/video/mp4/otfp/1/gir/yes/clen/5231968228/lmt/1502479662079137/dur/18575.164/key/dg_yt0/beids/[9466591]/mt/1503592562/signature/8CCFBF5CAB97341D0CB1F34E85AB6EE20FC7A03E.7679F39A8603CF41A95F10232E2A921EB0774101/ip/206.34.122.70/ipbits/0/expire/1503614279/sparams/ip,ipbits,expire,id,itag,source,requiressl,pl,ei,mv,initcwndbps,ms,mm,mn,ratebypass,mime,otfp,gir,clen,lmt,dur/"  
# The second URL  
audio_url="https://r3---sn-mv-cvne.googlevideo.com/videoplayback/id/80448722bbc8410a/itag/140/source/youtube/requiressl/yes/pl/23/ei/5wCfWY6dBeOj8gSSxZaACQ/mv/m/initcwndbps/5055000/ms/au/mm/31/mn/sn-mv-cvne/ratebypass/yes/mime/audio/mp4/otfp/1/gir/yes/clen/295235970/lmt/1502480001536214/dur/18575.243/key/dg_yt0/beids/[9466591]/mt/1503592562/signature/4AACC8E27F9036D36D4D623A771A9F2BAC4674BA.7E4F4FB4DC023E3FE491A991F0F9F2329648DE9D/ip/206.34.122.70/ipbits/0/expire/1503614279/sparams/ip,ipbits,expire,id,itag,source,requiressl,pl,ei,mv,initcwndbps,ms,mm,mn,ratebypass,mime,otfp,gir,clen,lmt,dur/"  
ffmpeg -ss 42:30 -i "$video_url" -ss 42:30 -i "$audio_url" -map 0:v -map 1:a -ss 30 -t 7:10 -c:v libx264 -c:a aac gog-vs-triv.mkv  
  
```  
  
Credit to [Jakub Vrána](https://stackoverflow.com/a/64736726/2314219) for the `--youtube-skip-dash-manifest` solution.  
