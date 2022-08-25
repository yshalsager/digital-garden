---  
updated: 2022-06-20 18:25  
title: Video  
created: 2021-12-07 21:27  
share: true  
website: en/notes/programming  
---  
  
# Video  
  
```html  
<video controls>  
  <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.480p.vp9.webm" type="video/webm" />  
  <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.480p.h264.mp4" type="video/mp4" />  
</video>  
```  
  
# Captions and subtitles  
  
```html  
<video controls>  
  <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.480p.vp9.webm" type="video/webm" />  
  <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.480p.h264.mp4" type="video/mp4" />  
  
  <track  
    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.vtt"  
    kind="captions"  
    label="English"  
    srclang="en"  
    default  
  />  
  
  <track  
    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.es-la.es.vtt"  
    kind="subtitles"  
    label="Español"  
    srclang="es"  
  />  
  
  <p>This would be a video of a moonwalk, if your device supported playing this video.</p>  
</video>  
  
<!-- This doesn't work in Chrome or Firefox. Use Safari. -->  
  
<!--  
  
  <track src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.vtt"  
         kind="captions"   
         label="English"  
         srclang="en"  
         default>  
  
  <track src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.es-la.es.vtt"  
         kind="subtitles"  
         label="Español"  
         srclang="es">  
-->  
```  
  
Video  
• <https://codepen.io/jensimmons/pen/VwZdzBe?editors=1000>  
Captions and subtitles  
• <https://codepen.io/jensimmons/pen/KKPevBe?editors=1000>  
