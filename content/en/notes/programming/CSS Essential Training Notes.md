---  
title: CSS Essential Training Notes  
created: 2021-12-08 08:48  
updated: 2021-12-10 14:59  
share: true  
website: en/notes/programming  
tags: []  
---  
  
  
# CSS Essential Training Notes  
  
## ![Referencing CSS](Referencing%20CSS)  
  
## Images and Pixel Density  
  
- Images should be twice of the required size to be shown perfectly on high pixel density displays like Apple Retina.  
- Background images should be in between of 1400px and 2000px width.  
  
## CSS Syntax  
  
- Selector  
- Declaration Block  
  - Declaration [property: value;]  
  
## ![CSS Values and Units](CSS%20Values%20and%20Units)  
  
## ![CSS Selectors](CSS%20Selectors)  
  
## ![CSS colors](CSS%20colors)  
  
## Cascade  
  
- Order matters, from top to bottom.  
- `!important` Keyword overrides source order and specificity.  
  
## Pseudo-classes  
  
- :link :visited :hover :active :focus  
  
## Inline block and display  
  
- For inline elements, adding width and height has no effect.  
- Adding `display: block` to an inline element will make it display like block elements.  
- Setting `display: inline` to a block element will give it the characteristics of inline elements.  
- There is one more value that you'll probably use more often, which is `inline-block`. This will apply the characteristics of both.  
  - The width and height values will be applied, just like block elements, but the items are displayed side by side, just like inline elements, and they only wrap when there's no longer any space in the container.  
  - This is a good example of separating content from style.  
  - You may want your elements to display on a new line, or on the same line, but instead of picking an HTML element that looks a particular way, choose the most semantic element for the content, and then change the display with CSS.  
  
## ![CSS Box Model](CSS%20Box%20Model)  
  
## Creating a Content Wrapper  
  
Create a container for just the content.  
  
```html  
<section class="work">  
  <div class="content-wrap">  
    <!/-- new content wrap div -->  
    <h2>Work Experience</h2>  
  </div>  
  <!-- close content-wrap div -->  
</section>  
```  
  
```css  
.content-wrap {  
  width: 950px;  
  margin: 0 auto;  
}  
  
.work {  
  background: blue;  
}  
```  
  
## ![CSS Typography](CSS%20Typography)  
  
## ![CSS Layouts Float and Position](CSS%20Layouts%20Float%20and%20Position)  
  
## Checking Browser Support  
  
- [Can I use](https://caniuse.com) is a great reference for checking browser support.  
- Just do a search for any CSS property, and the search results will show you the browser support.  
- There is also additional information, such as known issues or any additional resources.  
  
## ![CSS Layouts Flexbox and Grid](CSS%20Layouts%20Flexbox%20and%20Grid)  
  
## ![CSS Responsive Web Design](CSS%20Responsive%20Web%20Design)  
