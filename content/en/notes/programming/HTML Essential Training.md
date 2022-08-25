---  
created: 2022-05-16 20:59  
updated: 2022-06-20 18:25  
title: HTML Essential Training  
share: true  
website: en/notes/programming  
---  
# HTML Essential Training  
  
التكلفة:: 0  
الحالة:: #\مساق_مكتمل  
الرابط:: <https://www.linkedin.com/learning/html-essential-training-4>  
المدة:: 2h45m  
المعرفة:: [البرمجة](%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9)  
المنشيء:: Jen Simmons  
المهام:: [](HTML%20Essential%20Training%201), [](HTML%20Essential%20Training%202)  
الوصف:: Hypertext Markup Language (HTML) is the foundation of website and web application development. It allows you to ensure that your content is understood by both segments of your audience: the people who watch, read, or listen to your content, and the computers that display it. In this course, learn how to craft excellent HTML with the pieces that HTML itself has to offer. Instructor Jen Simmons highlights all of the fundamental concepts you need to use HTML thoughtfully. She focuses on semantic markup: tagging content as what it is, and not just for formatting, convention, or convenience. This has far-reaching impact for those who consume the web differently; it ensures that when a screen reader or a system (like a search engine) consumes a page, it knows exactly what it contains and how to categorize that information.  
اﻷركان:: [التعلم](%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%85)  
اﻷهداف:: [LinkedIn Software Developer Path](LinkedIn%20Software%20Developer%20Path)  
تاريخ اﻹنتهاء:: 2021-12-07  
موصى به من؟:: كالبنيان المرصوص  
  
Hypertext Markup Language (HTML) is the foundation of website and web application development. It allows you to ensure that your content is understood by both segments of your audience: the people who watch, read, or listen to your content, and the computers that display it. In this course, learn how to craft excellent HTML with the pieces that HTML itself has to offer. Instructor Jen Simmons highlights all of the fundamental concepts you need to use HTML thoughtfully. She focuses on semantic markup: tagging content as what it is, and not just for formatting, convention, or convenience. This has far-reaching impact for those who consume the web differently; it ensures that when a screen reader or a system (like a search engine) consumes a page, it knows exactly what it contains and how to categorize that information.  
  
### Learning objectives  
  
- The basic syntax of HTML elements  
- Formatting content  
- Displaying images  
- Creating links  
- Global HTML attributes  
- Building navigation  
- Structuring content  
- Building forms  
- Creating tables  
  
### Skills covered  
  
- **[HTML](https://www.linkedin.com/learning/search?keywords=HTML)**  
  
## Responsive Images  
  
### srcset  
  
```html  
<img src="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-480.jpg>"  
     alt="shiny black dog looking pensive"  
     width="480" height="360">  
  
<img src="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-480.jpg>"  
     alt="shiny black dog looking pensive"  
     width="480" height="360"  
     srcset="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-960.jpg> 2x,  
	   	  	   <https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-1440.jpg> 3x, <https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-1920.jpg> 4x">  
<!--  
<img src="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-480.jpg>"  
     alt="shiny black dog looking pensive"  
     width="480" height="360"  
     srcset="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-960.jpg> 2x,  
	   	  	   <https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-1440.jpg> 3x,  
		 				 <https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-1920.jpg> 4x"  
     >  
  
```  
  
### Sizes  
  
```html  
<img  
  src="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-480.jpg>"  
  alt="shiny black dog looking pensive"  
  width="480"  
  height="360"  
  srcset="  
    <https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-480.jpg>   480w,  
    <https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-960.jpg>   960w,  
    <https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-1440.jpg> 1440w,  
    <https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-1920.jpg> 1920w  
  "  
/>  
```  
  
### Picture  
  
```html  
<picture>  
  <source media="(min-width:600px)" srcset="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-720.jpg>" />  
  <source srcset="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-cropped-320.jpg>" />  
  <img  
    src="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-480.jpg>"  
    width="480"  
    height="360"  
    alt="black dog lying in the sun"  
  />  
</picture>  
  
<!-- -->  
<!--  
  
<picture>  
  <source media="(min-width:600px)"  
          srcset="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-720.jpg>" >  
  <source srcset="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-cropped-320.jpg>" >  
  <img src="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-480.jpg>"  
       alt="smiling black dog"  
       height="360" width="480">  
</picture>  
  
-->  
  
<picture>  
  <source  
    media="(min-width:600px)"  
    srcset="  
      <https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-320.jpg>   320w,  
      <https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-480.jpg>   480w,  
      <https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-720.jpg>   720w,  
      <https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-960.jpg>   960w,  
      <https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-1440.jpg> 1440w,  
      <https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-1920.jpg> 1920w  
    "  
  />  
  <source  
    srcset="  
      <https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-cropped-320.jpg> 320w,  
      <https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-cropped-480.jpg> 480w,  
      <https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-cropped-720.jpg> 720w,  
      <https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-cropped-960.jpg> 960w  
    "  
  />  
  <img  
    src="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-480.jpg>"  
    alt="smiling black dog"  
    height="360px"  
    width="480px"  
  />  
</picture>  
```  
  
Responsive images  
• <https://codepen.io/jensimmons/pen/QWLxgMy?editors=1000>  
• <https://codepen.io/jensimmons/pen/jONeawJ?editors=1000>  
Responsive width  
• <https://codepen.io/jensimmons/pen/WNeyPXL?editors=1000>  
Responsive pictures  
• <https://codepen.io/jensimmons/pen/MWgXRgE?editors=1000>  
• <https://codepen.io/jensimmons/pen/wvwXLQa?editors=1000>  
  
## Figure and Figcaption  
  
```html  
  
<figure>  
  <img src="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/maggie2.png>" width="960" height="720" alt="shiny black dog in the sun">  
  <figcaption>Maggie the dog enjoys resting in a field, after a long day of chasing squirrels.</figcaption>  
</figure>  
  
<!-- -->  
<!--  
  
<figure>  
  
<img src="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/maggie2.png>" width="960" height="720" alt="shiny black dog in the sun">  
  
<figcaption>Maggie the dog enjoys resting in a field, after a long day chasing squirrels.</figcaption>  
  
</figure>  
  
```  
  
## Audio  
  
```html  
<audio controls>  
  <source src="<http://example.com/birds.ogg>" type="audio/ogg; codec=opus" />  
  <source src="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/birds.mp3>" type="audio/mpeg" />  
  Sorry your browser doesn't not support audio.  
</audio>  
```  
  
## Video  
  
```html  
<video controls>  
  <source src="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.480p.vp9.webm>" type="video/webm" />  
  <source src="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.480p.h264.mp4>" type="video/mp4" />  
</video>  
```  
  
## Captions and subtitles  
  
```html  
<video controls>  
  <source src="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.480p.vp9.webm>" type="video/webm" />  
  <source src="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.480p.h264.mp4>" type="video/mp4" />  
  
  <track  
    src="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.vtt>"  
    kind="captions"  
    label="English"  
    srclang="en"  
    default  
  />  
  
  <track  
    src="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.es-la.es.vtt>"  
    kind="subtitles"  
    label="Español"  
    srclang="es"  
  />  
  
  <p>This would be a video of a moonwalk, if your device supported playing this video.</p>  
</video>  
  
<!-- This doesn't work in Chrome or Firefox. Use Safari. -->  
  
<!--  
  
  <track src="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.vtt>"  
         kind="captions"  
         label="English"  
         srclang="en"  
         default>  
  
  <track src="<https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.es-la.es.vtt>"  
         kind="subtitles"  
         label="Español"  
         srclang="es">  
-->  
```  
  
Video  
• <https://codepen.io/jensimmons/pen/VwZdzBe?editors=1000>  
Captions and subtitles  
• <https://codepen.io/jensimmons/pen/KKPevBe?editors=1000>  
  
## Forms  
  
<https://github.com/jensimmons/html/blob/master/ch9/09-02.html>  
  
```html  
<!DOCTYPE html>  
<html dir="ltr" lang="en-us">  
  <head>  
    <title>Form Basics</title>  
    <meta charset="utf-8" />  
    <meta name="viewport" content="width=device-width, initial-scale=1" />  
    <link rel="stylesheet" href="styles.css" />  
  </head>  
  
  <body>  
    <main>  
      <section class="">  
        <h1>Our Form</h1>  
        <form action="received.html" method="get">  
          <div>  
            <label for="name">Name</label>  
            <input id="name" name="name" type="text" />  
          </div>  
          <div>  
            <label for="email">Email</label>  
            <input id="email" name="email" type="email" placeholder="you@example.com" />  
          </div>  
  
          <div>  
            <label for="password">Password</label>  
            <input id="password" name="password" type="password" />  
          </div>  
          <div>  
            <label for="search">Search</label>  
            <input id="search" name="search" type="search" placeholder="&#128269;" />  
          </div>  
          <div>  
            <label for="phone">Phone Number</label>  
            <input id="phone" name="phone" type="tel" />  
          </div>  
  
          <div>  
            <label for="textarea">Text Area</label>  
            <textarea id="textarea" name="textarea" cols="30" rows="15"></textarea>  
          </div>  
  
          <div>  
            <label for="date">Date</label>  
            <input id="date" name="date" type="date" />  
          </div>  
  
          <div>  
            <label for="color">Color</label>  
            <input id="color" name="color" type="color" />  
          </div>  
  
          <div>  
            <label for="file">File</label>  
            <input id="file" name="file" type="file" accept="image/*" multiple />  
          </div>  
  
          <div>  
            <label for="checkbox">Checkbox</label>  
            <input id="checkbox" name="simplecheckbox" type="checkbox" value="The checkbox is checked" checked />  
          </div>  
  
          <div>  
            <label for="selectlist">Choose one</label>  
            <select id="selectlist" name="selectlist">  
              <option>First Option</option>  
              <option>Second Choice</option>  
              <option>Third Thing</option>  
            </select>  
          </div>  
  
          <fieldset>  
            <legend>Checkbox fields inside a fieldset</legend>  
            <input id="thischeck" name="checkboxlist" type="checkbox" value="This" checked />  
            <label for="thischeck">This</label>  
            <input id="orcheck" name="checkboxlist" type="checkbox" value="And Or" />  
            <label for="orcheck">And/Or</label>  
            <input id="thatcheck" name="checkboxlist" type="checkbox" value="That" />  
            <label for="thatcheck">That</label>  
          </fieldset>  
  
          <fieldset>  
            <legend>Radio button list inside a fieldset</legend>  
            <input id="thisradio" name="radiobutton" type="radio" value="This" checked />  
            <label for="thisradio">This</label>  
            <input id="orradio" name="radiobutton" type="radio" value="Or" />  
            <label for="orradio">Or</label>  
            <input id="thatradio" name="radiobutton" type="radio" value="That" />  
            <label for="thatradio">That</label>  
          </fieldset>  
  
          <button type="submit">Submit</button>  
        </form>  
      </section>  
    </main>  
  </body>  
</html>  
```  
