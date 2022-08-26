---  
title: CSS Typography  
created: 2021-12-09 10:39  
updated: 2021-12-09 11:14  
share: true  
website: en/notes/programming  
tags: []  
---  
  
  
## Categories of Typefaces  
  
- Script: have a hand-lettered look and tend to be harder to read in small sizes, all caps, or long blocks of text.  
- Decorative: Since decorative fonts tend to have big personalities, they too are usually reserved for headings and decorative details when used for the web.  
- Monospace: each character uses the same amount of horizontal space. Each character is the same width. Often used for displaying code.  
- Serif: distinguished by small, decorative lines, usually at the top or at the bottom of the letters. ^df4a8f  
- Sans-serif: tend to be viewed as traditional and formal. Sans-serif typefaces do not have decorative lines, and are often thought of as contemporary and modern. ^f8e4fb  
  
## Changing the font-family  
  
```css  
body {  
  font-family: Helvetica, Arial, sans-serif;  
}  
  
p {  
  font-family: Ahem!, sans-serif; /* not valid */  
  font-family: Ahem\!, sans-serif; /* escaped, valid */  
  font-family: "Ahem!", sans-serif; /* double quoted, valid */  
  font-family: "Ahem!", sans-serif; /* single quoted, valid */  
  font-family: "Gill Sans", sans-serif; /* valid and recommended */  
  font-family: Gill Sans, sans-serif; /* valid */  
}  
```  
  
### Generic font-family Names  
  
- serif (serif fonts)  
- sans-serif (sans-serif fonts)  
- cursive (script or decorative fonts)  
- fantasy (decorative fonts)  
- monospace (monospace fonts)  
  
**Web-safe fonts**: <http://cssfontstack.com/>  
  
## Font Weight  
  
- 100 - Thin  
- 200 - Extra Light (Ultra Light)  
- 300 - Light  
- 400 - Normal  
- 500 - Medium  
- 600 - Semi Bold (Demi Bold)  
- 700 - Bold  
- 800 - Extra Bold (Ultra Bold)  
- 900 - Black (Heavy)  
  
```css  
font-weight: 100; /* lightest or thinnest */  
font-weight: 200;  
font-weight: 300;  
font-weight: 400;  
font-weight: 500,  
font-weight: 600;  
font-weight: 700;  
font-weight: 800;  
font-weight: 900; /* darkest or thickest */  
```  
  
- Normal is equal to 400 and is also the default for body text  
- Bold is equal to 700 and is the default for headings  
  
## Font Style  
  
Used to add or remove an italic style. There are three values: italic, oblique,  
and normal.  
  
```css  
p {  
  font-style: italic; /* add italic style x*/  
}  
em {  
  font-style: normal; /* removes italic style */  
}  
```  
  
## Web Fonts  
  
- Downloaded font files  
- Included in your project files just like other files (i.e. images)  
- Declare and link to font files using `@font-face`  
  
```css  
@font-face {  
  font-family: "My Font";  
  src: url(my-font.woff); /* relative path */  
  src: url(http://example.com/fonts/my-font.woff); /* absolute ath */  
}  
body {  
  font-family: "My Font", Helvetica, sans-serif;  
}  
```  
  
### URL of the font  
  
```css  
/* valid */  
  
src: url(my-font.woff);  
src: url("my-font.woff");  
src: url("my-font.woff");  
src: url("my font.woff");  
src: url(my\font.woff);  
  
/* not valid */  
src: url(my font.woff);  
```  
  
### Cross-browser Compatibility  
  
```css  
@font-face {  
  font-family: "MyWebFont";  
  src: url("webfont.eot"); /* IE9 Compat Modes */  
  src: url("webfont.eot?#1iefix") format("embedded-opentype"), /* IE6-IE8 */ url("webfont.woff2") format("woff2"),  
    /* Super Modern Browsers */ url("webfont.woff") format("woff"), /* Pretty Modern Browsers */ url("webfont.ttf")  
      format("truetype"), /* Safari, Android, 10S */ url("webfont.svg#svgFontName") format("svg"); /* Legacy i0S */  
}  
```  
  
- [Web font generator](http://fontsquirrel.com).  
- [More](https://css-tricks.com/snippets/css/using-font-face/).  
  
## [Font Size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)  
  
`font-size: px, em, rem`  
  
- Different units for specifying the font size  
- Relative values are calculated based on the nearest ancestor element  
- Absolute values are fixed and not affected by ancestor elements  
  
### `font-size: px`  
  
- Screens are measured in pixels  
- Absolute value, great for accuracy  
- Use whole numbers, avoid decimals  
- Browser default = 16px  
  
### `font-size: em`  
  
- Named after the letter "m"  
- Relative unit  
- Can use whole numbers or decimal points  
- 1em = inherited font-size  
  
### `font-size: rem`  
  
- root em  
- Relative unit  
- Only relative to the root element (`<html>`)  
- Not affected by parent or ancestor elements  
  
## [Font](https://developer.mozilla.org/en-US/docs/Web/CSS/font) shorthand  
  
- font-style  
- font-size  
- font-weight  
- font-family  
- font-variant  
- line-height  
  
**Note:**  
  
- Must include values for the font-size and font-family  
- May optionally include values for font-style, font-variant, font-weight, and line-height  
- Order matters! font-style, font-variant, and font-weight must precede font-size  
- font-variant = normal or small-caps only  
- font-size/line-height  
- font-family must be the last value specified  
  
```css  
/* shorthand */  
  
font: italic small-caps bold 24px/1.5 Helvetica, sans-serif;  
  
/* longhand */  
  
font-style: 1italic;  
font-variant: small-caps;  
font-weight: bold;  
font-size: 24px;  
line-height: 1.5;  
font-family: Helvetica, sans-serif;  
```  
  
## [text-decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line)  
  
```css  
/* shorthand x*/  
text-decoration: underline red solid;  
  
/* longhand x*/  
text-decoration-line: underline;  
text-decoration-color: red;  
text-decoration-style: solid;  
```  
  
## text-align  
  
- The text-align property can be used to align content within a block element  
- Add it to the HTML element itself or the parent element  
  
```css  
text-align: start;  
text-align: end;  
text-align: left;  
text-align: right;  
text-align: center;  
text-align: justify;  
text-align: justify-all;  
text-align: match-parent;  
```  
  
## line-height  
  
- The line-height property sets the height of the space between two lines of text  
- Closely related to font-size  
- Can use different value types (px, %, ems, rems, or unitless)  
  
## text-transform  
  
- The text-transform CSS property specifies how to capitalize an element's text.  
- It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized.  
  
```css  
text-transform: none;  
text-transform: capitalize;  
text-transform: uppercase;  
text-transform: lowercase;  
text-transform: full-width;  
text-transform: full-size-kana;  
```  
