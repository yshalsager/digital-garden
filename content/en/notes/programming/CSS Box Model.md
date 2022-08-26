---  
title: CSS Box Model  
created: 2021-12-09 09:54  
updated: 2021-12-09 10:03  
share: true  
website: en/notes/programming  
tags: []  
---  
  
  
# The Box Model  
  
- Content box  
- Padding box  
- Border box  
- Margin box  
  
![](../../../Pasted%20image%2020211209100324.png)  
  
**Example:**  
  
- 400 width  
- 30 padding-left  
- 30 padding-right  
- 20 border-left  
- 20 border-right  
- 500px total width  
  
**Element height and width calculation**  
  
Final element width = left border + left padding + width + right padding + right border  
  
Final element height = top border + top padding + height + bottom padding + bottom border  
  
## Box Properties  
  
- Width  
- Height  
- Padding  
- Margin  
- Boarder  
  
### Width and Height  
  
The width and height properties change the size of the content box. Inline elements require the display property.  
  
```css  
/* Block element */  
div {  
  width: 100px;  
  height: 100px;  
}  
```  
  
```css  
/* inline-element */  
span {  
  width: 100px;  
  height: 100px;  
  display: block;  
  /* OR */  
  display: inline-block;  
}  
```  
  
### Padding  
  
Padding adds/removes space inside of the element but around the content box.  
  
```css  
/* Longhand */  
padding-top: 2px;  
padding-right: 2px;  
padding-bottom: 2px;  
padding-left: 2px;  
  
/* shorthand */  
padding: 2px 2px 2px 2px; /* top right bottom left */  
  
/* The shorthand syntax can use 1-4 values. */  
padding: 2px; /* same on all sides */  
padding: 2px 10px; /* top & bottom, right & left */  
padding: 2px 10px 5px; /* top, right & left, bottom */  
padding: 2px 10px 5px 2px; /* top, right, bottom, left */  
  
/* You can also mix different types of length units. */  
padding: 10px 2%; /* top & bottom, right & left */  
  
/* valid */  
padding: 0px;  
padding: 0;  
padding: 2px 0;  
  
/* not valid */  
padding: 2;  
padding: -10;  
```  
  
### Margin  
  
Margin adds/removes space around the element.  
  
```css  
/* longhand */  
  
margin-top: 2px;  
margin-right: 2px;  
margin-bottom: 2px;  
margin-left: 2px;  
  
/* shorthand */  
margin: 2px 2px 2px 2px; /* top right bottom left */  
margin: 2px 10px 5px; /* top, right & left, bottom */  
margin: 2px 10px; /* top & bottom, right & left +*/  
margin: 2px; /* same on all sides */  
```  
  
### [Border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)  
  
The border property displays a border between the margin and padding.  
  
```css  
/* shorthand */  
border: 2px solid red;  
  
/* longhand */  
border-width: 2px;  
border-style: solid;  
border-color: red;  
  
/* width */  
border-width: 10px;  
border-width: thin;  
border-width: medium;  
border-width: thick;  
  
/* color */  
border-color: blue;  
border-color: #000000;  
  
/* style */  
border-style: none;  
border-style: hidden;  
border-style: dotted;  
border-style: dashed;  
border-style: solid;  
border-style: double;  
border-style: groove;  
border-style: ridge;  
border-style: inset;  
border-style: outset;  
```  
