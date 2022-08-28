---  
title: Referencing CSS  
created: 2021-12-10 14:58  
updated: 2021-12-10 14:59  
share: true  
website: en/notes/programming  
---  
  
## External CSS  
  
### HTML 5  
  
```html  
<link rel="stylesheet" href="css/styles.css" />  
```  
  
### HTML 4  
  
```html  
<link rel="stylesheet" href="css/styles.css" type="text/css" />  
```  
  
### @import  
  
- Not recommended because of the potential of slowing down the website.  
- Usually used in CSS Pre-processors.  
  
```css  
@import url("b.css");  
```  
  
```html  
<head>  
  <style>  
    @import url("css/b.css");  
  </style>  
</head>  
```  
  
## Inline CSS  
  
- Shouldn't be used widely.  
- Overrides defined stylesheets.  
  
```html  
<p style="color:red;">Red text!</p>  
```  
  
## Internal CSS  
  
- Inefficient with multiple pages.  
- Better than inline CSS.  
  
```html  
<head>  
  <style>  
    h1 {  
      color: green;  
    }  
  </style>  
</head>  
```  
