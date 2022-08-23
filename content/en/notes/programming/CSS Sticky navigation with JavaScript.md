---  
updated: 2022-06-29 18:34  
created: 2022-06-02 00:00  
title: CSS Sticky navigation with JavaScript  
aliases:  
  - CSS Sticky navigation with JavaScript  
share: true  
website: en/notes/programming  
---  
  
المعرفة:: [CSS](CSS)  
الحالة:: #ملاحظة/مؤرشفة  
المراجع:: [Build Responsive Real-World Websites with HTML and CSS](Build%20Responsive%20Real-World%20Websites%20with%20HTML%20and%20CSS)  
  
---  
  
```css  
/* STICKY NAVIGATION */  
.sticky .header {  
  position: fixed;  
  top: 0;  
  bottom: 0;  
  width: 100%;  
  height: 8rem;  
  padding-top: 0;  
  padding-bottom: 0;  
  background-color: rgba(255, 255, 255, 0.97);  
  z-index: 999;  
  box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.03);  
}  
  
/* Compensate the header space as it's taken out of the document flow */  
/* Applied if sticky class exists in one of section hero parents */  
/* So sticky class should be added to body element itself */  
.sticky .section-hero {  
  margin-top: 9.6rem;  
}  
```  
  
```js  
// Sticky navigation  
const sectionHeroEl = document.querySelector(".section-hero");  
  
const obs = new IntersectionObserver(  
  function (entries) {  
    const ent = entries[0];  
  
    if (!ent.isIntersecting) {  
      document.body.classList.add("sticky");  
    } else {  
      document.body.classList.remove("sticky");  
    }  
  },  
  {  
    // In the viewport  
    root: null,  
    threshold: 0,  
    rootMargin: "-80px", // -height: 8rem;  
  }  
);  
obs.observe(sectionHeroEl);  
```  
  
See: [](JavaScript%20Intersection%20Observer%20API)  
