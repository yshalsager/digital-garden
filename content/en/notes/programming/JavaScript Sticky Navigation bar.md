---  
title: JavaScript Sticky Navigation bar  
created: 2022-06-29 18:07  
updated: 2022-06-29 18:15  
aliases:  
  - JavaScript Sticky Navigation bar  
share: true  
website: en/notes/programming  
---  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #\ملاحظة_مؤرشفة  
المراجع:: [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
```html  
<header>  
  <nav class="nav">...</nav>  
</header>  
  
<section class="section" id="section--1">  
```  
  
```css  
/* NAVIGATION */  
.nav {  
  display: flex;  
  justify-content: space-between;  
  align-items: center;  
  height: 9rem;  
  width: 100%;  
  padding: 0 6rem;  
  z-index: 100;  
}  
  
/* nav and stickly class at the same time */  
.nav.sticky {  
  position: fixed;  
  background-color: rgba(255, 255, 255, 0.95);  
}  
```  
  
- The idea for stick navigation bar is to add `sticky` class (which changes the position to `fixed`) to the `nav` element whenever it moves over top of the view port.  
- This can be done by listening to [Scroll Event](,%20JavaScript%20Events#Scroll%20Event) and once the next section top coordinate is less than window's current top coordinate the `sticky` class is added.  
- But this approach isn't recommend because: ![](,%20JavaScript%20Events#%5EscrollEvent)  
- Instead, it's better to use [Intersection Observer API](JavaScript%20Intersection%20Observer%20API).  
  
## Classic Way  
  
```js  
const section1 = document.querySelector('#section--1');  
const nav = document.querySelector('.nav');  
  
const initialCoords = section1.getBoundingClientRect();  
console.log(initialCoords);  
window.addEventListener('scroll', function () {  
  console.log(window.scrollY);  
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');  
  else nav.classList.remove('sticky');  
});  
```  
  
## Using Intersection Observer API  
  
- We want the navigation bar to be sticky when the header moves completely out of the view, so we will observe the header element.  
- `root` will be null because we want to observe the entire view port.  
- `threshold` could be 0, but it's better to set it to the distance between the start of the section and navigation bar height.  
  
```js  
// Sticky navigation: Intersection Observer API  
const header = document.querySelector('.header');  
const navHeight = nav.getBoundingClientRect().height;  
  
const stickyNav = function (entries) {  
  // const entry = entries[0];  
  const [entry] = entries;  
  // console.log(entry);  
  
  if (!entry.isIntersecting) nav.classList.add('sticky');  
  else nav.classList.remove('sticky');  
};  
  
const headerObserver = new IntersectionObserver(stickyNav, {  
  root: null,  
  threshold: 0,  
  // rootMargin: `-90px`,  
  rootMargin: `-${navHeight}px`,  
});  
  
headerObserver.observe(header);  
```  
