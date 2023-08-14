---  
updated: 2022-06-20 19:38  
created: 2022-06-02 00:00  
title: CSS Create mobile navigation version from desktop one  
aliases:  
  - CSS Create mobile navigation version from desktop one  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
  - CSS  
  - JavaScript  
---  
  
  
  
المعرفة:: [CSS](CSS), [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
  
---  
  
```html  
<header class="header">  
  <a href="#">  
    <img class="logo" alt="Omnifood logo" src="img/omnifood-logo.png" />  
  </a>  
  
  <nav class="main-nav">  
    <ul class="main-nav-list">  
      <li><a class="main-nav-link" href="#how">How it works</a></li>  
      <li><a class="main-nav-link" href="#meals">Meals<_a></li>  
      <li>  
        <a class="main-nav-link" href="#testimonials">Testimonials<_a>  
      </li>  
      <li><a class="main-nav-link" href="#pricing">Pricing<_a></li>  
      <li><a class="main-nav-link nav-cta" href="#cta">Try for free</a></li>  
    </ul>  
  </nav>  
  
  <button class="btn-mobile-nav">  
    <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>  
    <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>  
  </button>  
</header>  
```  
  
```css  
/* MOBILE */  
.btn-mobile-nav {  
  border: none;  
  background: none;  
  cursor: pointer;  
  
  display: none;  
}  
  
.icon-mobile-nav {  
  height: 4.8rem;  
  width: 4.8rem;  
  color: #333;  
}  
  
.icon-mobile-nav[name="close-outline"] {  
  display: none;  
}  
  
/**************************/  
/* BELOW 944px (Tablets) */  
/**************************/  
  
@media (max-width: 59em) {  
  html {  
    /* 8px / 16px = 0.5 = 50% */  
    font-size: 50%;  
  }  
  .main-nav {  
    /* White Background */  
    background-color: rgba(255, 255, 255, 0.9);  
    /* Blur */  
    -webkit-backdrop-filter: blur(5px);  
    backdrop-filter: blur(10px);  
    /* Positioning */  
    position: absolute;  
    top: 0;  
    left: 0;  
    width: 100%;  
    height: 100vh;  
    transform: translateX(100%);  
    /* Display */  
    display: flex;  
    align-items: center;  
    justify-content: center;  
    /* Transition */  
    transition: all 0.5s ease-in;  
    /* Hide navigation */  
    /* 1) Hide it visually */  
    opacity: 0;  
    /* 2) Make it unaccessible to mouse and keyboard */  
    pointer-events: none;  
    /* 3) Hide it from screen readers */  
    visibility: hidden;  
  }  
  
  .nav-open .main-nav {  
    /* Show navigation */  
    opacity: 1;  
    pointer-events: auto;  
    visibility: visible;  
    transform: translateX(0);  
  }  
  
  /* Toggle menu icons visibility based on its state */  
  
  .nav-open .icon-mobile-nav[name="close-outline"] {  
    display: block;  
  }  
  
  .nav-open .icon-mobile-nav[name="menu-outline"] {  
    display: none;  
  }  
  
  /* Change list layout direction */  
  .main-nav-list {  
    flex-direction: column;  
    gap: 4.8rem;  
  }  
  
  /* Update links font size */  
  .main-nav-link:link,  
  .main-nav-link:visited {  
    font-size: 3rem;  
  }  
}  
```  
  
```js  
const btnNavEl = document.querySelector(".btn-mobile-nav");  
const headerEl = document.querySelector(".header");  
  
// Make mobile navigation work by setting a click listener on navigation button that will toggle menu by adding/removing CSS class  
btnNavEl.addEventListener("click", () => headerEl.classList.toggle("nav-open"));  
```  
