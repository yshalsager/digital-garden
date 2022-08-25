---  
updated: 2022-06-20 18:25  
title: Responsive Images  
created: 2021-12-07 09:22  
share: true  
website: en/notes/programming  
---  
  
# Responsive Images  
  
## srcset  
  
```html  
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-480.jpg"  
     alt="shiny black dog looking pensive"  
     width="480" height="360">  
  
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-480.jpg"  
     alt="shiny black dog looking pensive"  
     width="480" height="360"  
     srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-960.jpg 2x,  
	   	  	   https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-1440.jpg 3x, https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-1920.jpg 4x">  
<!--  
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-480.jpg"  
     alt="shiny black dog looking pensive"  
     width="480" height="360"  
     srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-960.jpg 2x,  
	   	  	   https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-1440.jpg 3x,  
		 				 https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-1920.jpg 4x"  
     >  
```  
  
## Sizes  
  
```html  
<img  
  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-480.jpg"  
  alt="shiny black dog looking pensive"  
  width="480"  
  height="360"  
  srcset="  
    https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-480.jpg   480w,  
    https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-960.jpg   960w,  
    https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-1440.jpg 1440w,  
    https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-1920.jpg 1920w  
  "  
/>  
```  
  
## Picture  
  
```html  
<picture>  
  <source media="(min-width:600px)" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-720.jpg" />  
  <source srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-cropped-320.jpg" />  
  <img  
    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-480.jpg"  
    width="480"  
    height="360"  
    alt="black dog lying in the sun"  
  />  
</picture>  
  
<!-- -->  
<!--   
  
<picture>  
  <source media="(min-width:600px)"  
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-720.jpg" >  
  <source srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-cropped-320.jpg" >  
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-480.jpg"   
       alt="smiling black dog"  
       height="360" width="480">  
</picture>  
  
-->  
  
<picture>  
  <source  
    media="(min-width:600px)"  
    srcset="  
      https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-320.jpg   320w,  
      https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-480.jpg   480w,  
      https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-720.jpg   720w,  
      https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-960.jpg   960w,  
      https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-1440.jpg 1440w,  
      https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-1920.jpg 1920w  
    "  
  />  
  <source  
    srcset="  
      https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-cropped-320.jpg 320w,  
      https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-cropped-480.jpg 480w,  
      https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-cropped-720.jpg 720w,  
      https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-cropped-960.jpg 960w  
    "  
  />  
  <img  
    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-480.jpg"  
    alt="smiling black dog"  
    height="360px"  
    width="480px"  
  />  
</picture>  
```  
  
Responsive images  
• https://codepen.io/jensimmons/pen/QWLxgMy?editors=1000  
• https://codepen.io/jensimmons/pen/jONeawJ?editors=1000  
Responsive width  
• https://codepen.io/jensimmons/pen/WNeyPXL?editors=1000  
Responsive pictures  
• https://codepen.io/jensimmons/pen/MWgXRgE?editors=1000  
• https://codepen.io/jensimmons/pen/wvwXLQa?editors=1000  
