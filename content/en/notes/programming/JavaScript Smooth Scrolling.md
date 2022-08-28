---  
title: JavaScript Smooth Scrolling  
created: 2022-06-25 14:35  
updated: 2022-06-25 14:54  
aliases:  
  - JavaScript Smooth Scrolling  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
  - JavaScript  
---  
  
  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert), [Build Responsive Real-World Websites with HTML and CSS Study Notes](Build%20Responsive%20Real-World%20Websites%20with%20HTML%20and%20CSS%20Study%20Notes)  
  
---  
  
## Using JavaScript to do smooth scrolling  
  
- Using `window.scrollTo` we can scroll to a particular set of coordinates in the document.  
- Usually the two coordinates are left and top.  
- `window.scrollTo` also accepts an options object with top, left, and behavior key-values.  
- `behavior` is set to `auto` by default, but it can be set to `smooth`.  
- Alternatively, a [modern](https://caniuse.com/scrollintoview) way of doing the same is to use `scrollIntoView` on any element with `behavior` set to `smooth`.  
  
```js  
// Scrolling  
const section1 = document.querySelector('#section--1');  
const s1coords = section1.getBoundingClientRect();  
  
// Without options  
  
// element position + current scroll  
window.scrollTo(  
  s1coords.left + window.pageXOffset,  
  s1coords.top + window.pageYOffset  
);  
  
// With options  
window.scrollTo({  
  left: s1coords.left + window.pageXOffset,  
  top: s1coords.top + window.pageYOffset,  
  behavior: 'smooth',  
});  
  
// The modern way  
section1.scrollIntoView({ behavior: 'smooth' });  
```  
  
## Example  
  
```js  
const headerEl = document.querySelector(".header");  
const allLinks = document.querySelectorAll("a:link");  
  
allLinks.forEach(function (link) {  
  link.addEventListener("click", function (e) {  
    e.preventDefault();  
    const href = link.getAttribute("href");  
  
    // Scroll back to top  
    if (href === "#")  
      window.scrollTo({  
        top: 0,  
        behavior: "smooth",  
      });  
  
    // Scroll to other links  
    if (href !== "#" && href.startsWith("#")) {  
      const sectionEl = document.querySelector(href);  
      sectionEl.scrollIntoView({ behavior: "smooth" });  
    }  
  
    // Close mobile naviagtion  
    if (link.classList.contains("main-nav-link")) headerEl.classList.toggle("nav-open");  
  });  
});  
```  
