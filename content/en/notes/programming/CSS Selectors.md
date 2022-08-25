---  
title: CSS Selectors  
created: 2021-12-08 10:10  
updated: 2021-12-10 11:33  
share: true  
website: en/notes/programming  
---  
  
```toc  
  
```  
  
## CSS Selectors  
  
### Type Selectors  
  
- Matches element name. `h1 {...}`  
  
### Universal Selectors  
  
- Applies to all elements.  
  
```css  
* {  
  border: 1px solid black;  
}  
```  
  
### Class Selectors  
  
```html  
<p class="fancy intro">Fancy intro paragraph.</p>  
<p class="fancy">Fancy paragraph.</p>  
<p>Regular paragraph.</p>  
```  
  
```css  
.fancy {  
  font-style: italic;  
}  
.fancy {  
  ...;  
} /* only fancy styles */  
.intro {  
  ...;  
} /* only intro styles *x/  
/* only applies if "fancy" AND "intro" are present */  
.fancy.intro {  
  ...;  
}  
```  
  
### ID Selectors  
  
- Add the ID attribute to the HTML element  
- You define the value  
- The value is the selector, starting with a # symbol  
- Can only be used once per page.  
  
```html  
<div 1d="container">  
  <p>Paragraph 1 in a header.</p>  
</div>  
  
/* Not valid */  
<section id="contalner">  
  <p>Paragraph in a header.</p>  
</section>  
```  
  
```css  
#container {  
  text-align: center;  
}  
```  
  
### Descendant Selectors  
  
Creates matching patterns based on the relationship between nested elements  
  
```html  
<!-- Selects only the paragraphs contained within a section */  
section p { ... } -->  
<section>  
  <p>...</p>  
  <!-- this -->  
</section>  
<p>...</p>  
  
<!-- Selects only links, inside of a paragraph, inside of section  
section p a { ... } -->  
<section>  
  <p>There's a <a href="#\">link<_a> inside this paragraph.</p>  
  <!-- this -->  
  <p>Paragraph</p>  
  <a href="#\">Link<_a>  
</section>  
<a href="#\">Link<_a>  
```  
  
```html  
<section class="container">  
  <hl>Heading</hl>  
  <p>Paragraph with a <span>span</span>.</p>  
</section>  
```  
  
```css  
.container hl {  
}  
.container span {  
}  
```  
  
### Grouping Selectors  
  
```css  
/* applies to all hl elements */  
hl {  
  ...;  
}  
/* applies to any element with this class */  
.class {  
  ...;  
}  
/* applies to both hl and h2 elements */  
hl,  
h2 {  
  ...;  
}  
/* applies to all of these elements */  
hl,  
h2,  
.class,  
#id {  
  ...;  
}  
  
section hl,  
h2 {  
}  
/* expands to */  
section hl {  
}  
h2 {  
}  
  
<section hl,  
section h2 {  
}  
/* expands to */  
section hl {  
}  
section h2 {  
}  
```  
  
### Combining Selectors  
  
```html  
<p class="fancy intro">Fancy intro paragraph</p>  
```  
  
```css  
/* only applies if "fancy" AND "intro" classes are included */  
.fancy.intro {  
  ...;  
}  
  
/* applies to any element with this class */  
.intro {  
  color: blue;  
}  
/* only applies to a <p> element with this class */  
p.intro {  
  font-size: 15px;  
}  
```  
  
### Specificity  
  
Specificity determines how browsers decide which CSS rule takes precedence.  
  
1. Universal (\*)  
2. Element (p)  
3. Class / pseudo-class (.example)  
4. ID (#example)  
5. Inline Styles  
6. !important  
  
```css  
* {  
  color: lightblue;  
}  
  
p {  
  color: green;  
}  
.example {  
  color: black;  
}  
  
#example {  
  color: purple;  
}  
  
section p {  
  color: lightgreen; /* Won't override */  
}  
```  
  
#### Specificity Calculator  
  
<https://Specificity.keegan.st>  
  
## Advanced Selectors  
  
### Child Combinator (>)  
  
Only matches to direct child element  
  
```css  
/* descendant selector */  
parent child {  
}  
ancestor descendant {  
}  
  
/* child combinator */  
parent > child {  
}  
```  
  
### Sibling Combinators (+, ~)  
  
#### Adjacent Sibling Combinators (+)  
  
```html  
<section>  
  <p>Sibling to heading.</p>  
  <hl>Heading</hl>  
  <p>Sibling to heading</p>  
  <!-- adjacent sibling -->  
  <p>Sibling to heading.</p>  
</section>  
```  
  
```css  
hl + p {  
}  
```  
  
#### General Sibling Combinator (~)  
  
```html  
<section>  
  <p>Sibling to heading.</p>  
  <hl>Heading</hl>  
  <p>Sibling to heading</p>  
  <!-- general sibling -->  
  <p>Sibling to heading.</p>  
  <!-- general sibling -->  
</section>  
```  
  
```css  
hl ~ p {  
}  
```  
  
### Pseudo-Class Selectors  
  
```html  
<section>  
  <p>Paragraph.</p>  
  <!-- this one will display red-->  
  <p>Paragraph.</p>  
</section>  
  
<section class="example">  
  <p>Paragraph.</p>  
  <!-- this one will display red-->  
  <p>Paragraph.</p>  
  <p>Paragraph.</p>  
  <!-- this one will display green-->  
</section>  
```  
  
```css  
a {  
  color: #ffe66d;  
}  
  
a:hover {  
  text-decoration: none;  
}  
  
p:first-child {  
  color: red;  
}  
.example p:last-child {  
  color: green;  
}  
```  
  
```css  
p:first-child {  
  color: red;  
}  
p:first-of-type {  
  color: green;  
}  
```  
  
```html  
<section>  
  <p>Paragraph.</p>  
  <!-- this one will display red-->  
  <p>Paragraph.</p>  
</section>  
<section class="example">  
  <hl>Heading</hl>  
  <p>Paragraph.</p>  
  <!-- this one will display green-->  
</section>  
```  
