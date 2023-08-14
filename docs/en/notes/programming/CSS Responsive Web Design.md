---  
title: CSS Responsive Web Design  
created: 2021-12-10 13:43  
updated: 2021-12-10 14:50  
share: true  
website: en/notes/programming  
---  
  
<https://alistapart.com/article/responsive-web-design/>  
  
1. Fluid layout  
2. Flexible images  
3. Media queries  
  
## Fluid Layouts  
  
- Instead of fixed-width pixels, we'll update our project to percentage-based values and use min and max width properties to create a flexible foundation.  
- When the viewport is wider than the max width, the content wrap maxes out at the defined value, 800 pixels in this example.  
- When the viewport is smaller than the max width value, it will apply the width value.  
  
```css  
.content-wrap {  
  max-width: 800px;  
  width: 85%;  
  margin: auto;  
  padding: 60px 0;  
}  
```  
  
## Flexible Images  
  
There're two ways to add images to a webpage.  
  
- Images that are part of the content should be added with HTML  
  
```html  
<img src="1images/project-courses.jpg" alt="course thumbnail" />  
```  
  
- Images that are presentational should be added with CSS  
  
```css  
section {  
  background-image: url(path/to/1image);  
}  
```  
  
- We've used the Shorthand Syntax `background` to set the color, but the Longhand Properties actually `background-color`.  
- `background-image` is used to with a URL function value with the path to the image added within the parentheses.  
- If the image file is smaller than the area you applied it to, it will automatically repeat the image on the x and y-axis to fit the entire area. To keep the image from repeating, use the `background-eepeat` Property set to `no-repeat`.  
- By default, the background image is aligned to the top left of the container. `background-position` can be used to define the position of the image relative to its container.  
  - One value represents the positioning from the left of the container.  
  - Any length value can be used.  
  - The top value defaults to auto, which will aligned the image vertically.  
  - Use a second value to specify the position from the top.  
  ```css  
  background-position: 100px 10%;  
  ```  
  - There are also five keywords: top, bottom, left, right, and center.  
- To get the image to cover the entire area without repeating, `background-size` can be used to set the width and the height.  
  - The first value is applied to the width.  
  - Use a second value to change the height of the image.  
  ```css  
  background-size: 100% 100%;  
  ```  
  - A 100% will make it stretch all the way across and is relative to its container.  
  - Another option is to use the keyword `cover`. To maintain the aspect ratio, the part of the image that doesn't fit into the container will be clipped.  
    ```css  
    background-size: cover;  
    ```  
    - This is not a perfect solution, especially if an important part of the image is not shown. We can use the Background Position Property to move a specific part of the image within the viewable part of the container.  
  ```css  
  background-position: top right;  
  ```  
  
```css  
.background {  
  max-width: 600px;  
  padding: 100px;  
  /*   background-color: lightblue; */  
  /*   background-image: url(https://unsplash.it/550/150?image=703); */  
  /*   background-repeat: no-repeat; */  
  /*   background-position: 100px; */  
  /*   background-size: 100%; */  
}  
```  
  
### `background` Shorthand  
  
- `background-size` may only be included after position, separated with the '/' character  
  
```css  
selector {  
/* image, repeat style, position, background size */  
background: url(../image.jpg) no-repeat center/cover;  
```  
  
- background-size may be declared independently  
  
```css  
selector {  
  background: blue url(image.jpg) no-repeat;  
  background-size: cover;  
}  
  
selector {  
  background-color: red; /* value will be overwritten */  
}  
  
.more-specific-selector {  
  background: url(images/pic.png) no-repeat;  
}  
```  
  
More Info: <https://developer.mozilla.org/en-US/docs/Web/CSS/background>  
  
## Media Queries  
  
- Media queries make it possible to modify the CSS depending on specific conditions, defined with a media type and a media feature.  
  
- Media queries are added to the CSS file using the @media rule.  
  
- In this example, this query translates to: when the browser view port is smaller than 1000 pixels, apply this block of CSS. If this condition is not met, the CSS is ignored.  
  
```css  
@media screen and (max-width: 1000px) {  
  hl {  
    font-size: 16px;  
  }  
}  
```  
  
### Media Types  
  
Declaring the media type is optional, so if you don't include it, it will default to all.  
  
- all: matches to all devices  
- print: matches to printers and print-related displays  
- speech: matches to screen reading devices that “read out” a page  
- screen: matches all devices that aren’t categorized as print or speech  
  
```css  
@media all {  
  ...;  
}  
@media print {  
  ...;  
}  
@media speech {  
  ...;  
}  
@media screen {  
  ...;  
}  
```  
  
### Media Features  
  
- Media features are used to test a specific feature of the device  
  
```css  
@media (width: 480px) {  
  ...;  
}  
@media (orientation: landscape) {  
  ...;  
}  
```  
  
- Use keyword "and" to combine media features with media types  
  
```css  
@media (orientation: landscape) {  
  ...;  
}  
@media screen and (orientation: landscape) {  
  ...;  
}  
@media screen and (min-width: 30em) and (orientation: landscape) {  
  ...;  
}  
@media (orientation: landscape) and (min-width: 320px) {  
  ...;  
}  
```  
  
- There are more logical operators, such as "not" or "only."  
- There are also quite a few media features: width, height, aspect ratio, and more.  
  
More info: <https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries>  
  
### Where do we include the media query?  
  
- It's convention to either add all the media queries at the bottom of the CSS file.  
  
```css  
hl {  
  font-size: 16px;  
}  
h2 {  
  font-size: 1l4px;  
}  
@media (max-width: 1000px) {  
  hl {  
    font-size: 12px;  
  }  
}  
```  
  
- Or add the media query beneath the related CSS style.  
  - This way of adding media queries is a little more commonly used when writing CSS with preprocessors such as Sass or Less.  
  
```css  
hl {  
  font-size: 16px;  
}  
@media max-width: {  
  hl {  
    font-size: 12px;  
  }  
}  
h2 {  
  font-size: 1l4px;  
}  
```  
  
- You can also write all your media queries in a separate style sheet, and then load them into the main CSS file.  
  - Use @import to load the stylesheet into the main CSS file.  
  ```css  
  @import url("mobile.css") screen and (max-width: 480px);  
  ```  
  - Use `<link>` to load the stylesheet into the HTML file.  
  ```html  
  <link rel="stylesheet" media="screen and (max-width: 480px)" href="mobile.css" />  
  ```  
  
### Breakpoints  
  
- 320px: Mobile portrait  
- 480px: Mobile landscape  
- 600px: Small tablet  
- 768px: Tablet portrait  
- 940-1024px: Tablet landscape  
- 1280px and greater: Desktop, laptop  
  
### Width Media Feature  
  
- When using the Width Media Feature, the media query test applies to the width of the browser viewport.  
- Width is classified as a range feature, meaning that we can also use a min or max prefix to specify a minimum or maximum value.  
- Using the min or max value works better than just width because it specifies a range such as larger than or smaller than.  
- If we use width alone, then it only applies if the viewport is exactly equal to the defined value.  
  
```css  
/* Exact width */  
@media (width: 360px) {  
  ...;  
}  
  
/* Minimum width - 360px or larger */  
@media (min-width: 360px) {  
  ...;  
}  
  
/* Maximum width - 360px or smaller */  
@media (max-width: 360px) {  
  ...;  
}  
```  
  
### `min-` and `max-width` Breakpoints  
  
- Sometimes when you're using both min and max-width values, you may end up targeting the same resolution.  
- A simple solution for this would be just to make one of the values one pixel smaller or bigger.  
  
```css  
/* 800px and larger */  
@media (min-width: 800px) {  
  ...;  
}  
/* 799px and smaller */  
@media (max-width: 799px) {  
  ...;  
}  
  
/* OR */  
  
/* 801px and larger */  
@media (min-width: 801px) {  
  ...;  
}  
/* 800px and smaller */  
@media (max-width: 800px) {  
  ...;  
}  
```  
  
### Designing for different screens  
  
There are two schools of thought when designing for different screens.  
  
1. One is Desktop First, meaning you design and write your CSS for bigger screens first.  
   - Media queries are then used to make changes for smaller screens.  
   - This approach usually uses max-width media queries.  
  
```css  
/* Optimized for larger screens */  
body {  
  ...;  
}  
/* Changes made for smaller screens x*/  
@media (max-width: 800px) {  
  body {  
    ...;  
  }  
}  
@media (max-width: 400px) {  
  body {  
    ...;  
  }  
}  
```  
  
2. A Mobile First approach is the opposite.  
   - The designs in CSS cater to smaller sizes first.  
   - Media queries are then used to make changes for bigger screens.  
   - This approach usually uses min-width media queries.  
  
```css  
/* Optimized for smaller screens */  
body {  
  ...;  
}  
/* Changes made for larger screens */  
@media (min-width: 800px) {  
  body {  
    ...;  
  }  
}  
@media (min-width: 1200px) {  
  body {  
    ...;  
  }  
}  
```  
  
You can also combine both min and max to create a range.  
  
```css  
/* This applies a range of 400px to 800px */  
@media (min-width: 400px) and (max-width: 800px) {  
  body {  
    ...;  
  }  
}  
```  
  
### viewport meta tag  
  
- There's one more thing you need to make sure is included before we finally get to adding media queries. The viewport meta tag.  
- This is added to the head section of the HTML document, and is used to control the viewport's size and scale and optimize the document for mobile viewing.  
- The values in the content attribute set the page to render the same width as the device.  
- Also, setting the initial scale to one, just means that the page won't appear zoomed in or out on page load.  
- More: <https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag>  
  
```html  
<meta name="viewport" content="width=device-width, initial-scale=1.0" />  
```  
