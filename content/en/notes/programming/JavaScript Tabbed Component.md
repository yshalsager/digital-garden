---  
title: JavaScript Tabbed Component  
created: 2022-06-28 12:17  
updated: 2022-06-28 12:25  
aliases:  
  - JavaScript Tabbed Component  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
---  
  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
- Use [Event Delegation](,%20JavaScript%20Events#Event%20Delegation) while attaching an event listener instead of a attaching it to every button element.  
- Use guard clause to handle clicks on empty spaces between child elements.  
- Control visibility by adding/removing classes.  
- Remove active classes before adding to the clicked element.  
  
## HTML  
  
```html  
  <div class="operations">  
	<div class="operations__tab-container">  
	  <button  
		class="btn operations__tab operations__tab--1 operations__tab--active"  
		data-tab="1">  
		<span>01</span>Section  
	  </button>  
	  <button class="btn operations__tab operations__tab--2" data-tab="2">  
		<span>02</span>Section  
	  </button>  
	  <button class="btn operations__tab operations__tab--3" data-tab="3">  
		<span>03</span>Section  
	  </button>  
	</div>  
	<div  
	  class="operations__content operations__content--1 operations__content--active"  
>  
	  <div class="operations__icon operations__icon--1">  
		<svg>  
		  <use xlink:href="img/icons.svg#icon-upload"><_use>  
		</svg>  
	  </div>  
	  <h5 class="operations__header">  
		Header.  
	  </h5>  
	  <p>  
		Content.  
	  </p>  
	</div>  
  
	<div class="operations__content operations__content--2">  
	  <div class="operations__icon operations__icon--2">  
		<svg>  
		  <use xlink:href="img/icons.svg#icon-home"><_use>  
		</svg>  
	  </div>  
	  <h5 class="operations__header">  
		Header.  
	  </h5>  
	  <p>  
		Content.  
	  </p>  
	</div>  
	<div class="operations__content operations__content--3">  
	  <div class="operations__icon operations__icon--3">  
		<svg>  
		  <use xlink:href="img/icons.svg#icon-user-x"><_use>  
		</svg>  
	  </div>  
	  <h5 class="operations__header">  
		Header.  
	  </h5>  
	  <p>  
		Content.  
	  </p>  
	</div>  
  </div>  
```  
  
## CSS  
  
```css  
/* OPERATIONS */  
.operations {  
  max-width: 100rem;  
  margin: 12rem auto 0 auto;  
  background-color: #fff;  
}  
  
.operations__tab-container {  
  display: flex;  
  justify-content: center;  
}  
  
.operations__tab {  
  margin-right: 2.5rem;  
  transform: translateY(-50%);  
}  
  
.operations__tab span {  
  margin-right: 1rem;  
  font-weight: 600;  
  display: inline-block;  
}  
  
.operations__tab--1 {  
  background-color: var(--color-secondary);  
}  
  
.operations__tab--1:hover {  
  background-color: var(--color-secondary-darker);  
}  
  
.operations__tab--3 {  
  background-color: var(--color-tertiary);  
  margin: 0;  
}  
  
.operations__tab--3:hover {  
  background-color: var(--color-tertiary-darker);  
}  
  
.operations__tab--active {  
  transform: translateY(-66%);  
}  
  
.operations__content {  
  display: none;  
  /* JUST PRESENTATIONAL */  
  font-size: 1.7rem;  
  padding: 2.5rem 7rem 6.5rem 7rem;  
}  
  
.operations__content--active {  
  display: grid;  
  grid-template-columns: 7rem 1fr;  
  column-gap: 3rem;  
  row-gap: 0.5rem;  
}  
  
.operations__header {  
  font-size: 2.25rem;  
  font-weight: 500;  
  align-self: center;  
}  
  
.operations__icon {  
  display: flex;  
  align-items: center;  
  justify-content: center;  
  height: 7rem;  
  width: 7rem;  
  border-radius: 50%;  
}  
  
.operations__icon svg {  
  height: 2.75rem;  
  width: 2.75rem;  
}  
  
.operations__content p {  
  grid-column: 2;  
}  
  
.operations__icon--1 {  
  background-color: var(--color-secondary-opacity);  
}  
.operations__icon--2 {  
  background-color: var(--color-primary-opacity);  
}  
.operations__icon--3 {  
  background-color: var(--color-tertiary-opacity);  
}  
.operations__icon--1 svg {  
  fill: var(--color-secondary-darker);  
}  
.operations__icon--2 svg {  
  fill: var(--color-primary);  
}  
.operations__icon--3 svg {  
  fill: var(--color-tertiary);  
}  
```  
  
## JavaScript  
  
```js  
tabsContainer.addEventListener('click', function (e) {  
  const clicked = e.target.closest('.operations__tab');  
  
  // Guard clause  
  if (!clicked) return;  
  
  // Remove active classes  
  tabs.forEach(t => t.classList.remove('operations__tab--active'));  
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));  
  
  // Activate tab  
  clicked.classList.add('operations__tab--active');  
  
  // Activate content area  
  document  
    .querySelector(`.operations__content--${clicked.dataset.tab}`)  
    .classList.add('operations__content--active');  
});  
```  
