---  
updated: 2022-06-26 20:15  
created: 2021-12-15 00:00  
title: JavaScript DOM  
aliases:  
  - JavaScript DOM  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
  - JavaScript  
---  
  
  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [JavaScript Essential Training](JavaScript%20Essential%20Training), [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
## What is DOM?  
  
- Allows us to make JavaScript **interact with the browser**.  
- We can write JavaScript to **create, modify and delete** HTML elements **set styles, classes and attributes**, and listen and respond to events.  
- DOM tree is generated from an HTML document, which we can then interact with.  
- DOM is a very complex API that contains lots of methods and properties to interact with the DOM tree.  
- More info on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).  
  
## Selecting Elements  
  
### Selecting whole document  
  
```js  
console.log(document.documentElement);  
```  
  
### Selecting head  
  
```js  
console.log(document.head);  
```  
  
### Selecting body  
  
```js  
console.log(document.body);  
```  
  
### Selecting other elements  
  
#### Access elements with `querySelector` methods  
  
<https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector>  
<https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll>  
  
```js  
const header = document.querySelector('.header');  
const allSections = document.querySelectorAll('.section');  
console.log(allSections);  
```  
  
#### Access elements with `getElement` methods  
  
- `getElementsByTagName` and `getElementsByClassName` returns `HTMLCollection` and not `NodeList`.  
- `HTMLCollection` is automatically updated if there's a change happened to DOM.  
  
```js  
const element = document.getElementById("id");  
const allButtons = document.getElementsByTagName('button');  
const elements = document.getElementsByClassName("names");  
```  
  
## Creating Elements  
  
```js  
// Creating and inserting elements  
// create an empty div  
const message = document.createElement('div');  
// add a class to it  
message.classList.add('cookie-message');  
// add content  
// message.textContent = 'We use cookied for improved functionality and analytics.';  
message.innerHTML =  
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';  
```  
  
## Inserting Elements  
  
- `insertAdjacentHTML`: parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.  
  
|   **Position**  |                                              **Details**                                              |  
| :-------------: | :---------------------------------------------------------------------------------------------------: |  
|  `beforebegin`  | <div>Before the element. Only valid if the element is in the DOM tree and has a parent element.</div> |  
|   `afterbegin`  |                      <div>Just inside the element, before its first child.</div>                      |  
| `beforeend`<br> |                       <div>Just inside the element, after its last child.</div>                       |  
|    `afterend`   |  <div>After the element. Only valid if the element is in the DOM tree and has a parent element.</div> |  
  
```js  
// insertAdjacentHTML(position, text)  
const containerMovements = document.querySelector('.movements');  
const html = `<div class="movements__row"></div>`;  
containerMovements.insertAdjacentHTML('afterbegin', html);  
  
// insertAdjacentElement: inserts a given element node at a given position relative to the element it is invoked upon.  
// 'beforebegin': Before the targetElement itself.  
// 'afterbegin': Just inside the targetElement, before its first child.  
// 'beforeend': Just inside the targetElement, after its last child.  
// 'afterend': After the targetElement itself.  
  
activeElem.insertAdjacentElement("beforebegin", tempDiv);  
activeElem.insertAdjacentElement("afterend", tempDiv);  
```  
  
- `prepend()`, `append()`, `after()`, and `before()` methods: inserts a set of Node objects or string objects. For these four methods, String objects are inserted as equivalent Text nodes.  
  - `prepend()`: before the first child of the Element.  
  - `append()`: after the last child of the Element.  
  - `after()` inserts in the children list of the Element's parent, just after the Element. (As a sibling)  
  - `before()`inserts in the children list of this Element's parent, just before this Element. (As a sibling)  
  
```js  
// header.prepend(message);  
header.append(message);  
// header.append(message.cloneNode(true));  
// header.before(message);  
// header.after(message);  
  
// prepend: adding before the first child of the Element  
let div = document.createElement("div");  
let p = document.createElement("p");  
let span = document.createElement("span");  
div.append(p);  
div.prepend(span);  
console.log(div.childNodes); // NodeList [ <span>, <p> ]  
```  
  
- `appendChild()` adds a node to the end of the list of children of a specified parent node.  
  
```js  
// appendChild: adds a node and return it to be worked with  
let p = document.createElement("p");  
document.body.appendChild(p);  
```  
  
- `insertBefore()`: inserts a node before a reference node as a child of a specified parent node.  
  
```js  
parentDiv.insertBefore(newNode, sp2);  
```  
  
## Deleting Elements  
  
- `remove()`: removes the element from the DOM.  
- `removeChild()` method of the Node interface removes a child node from the DOM and returns the removed node.  
  
```js  
message.remove();  
message.parentElement.removeChild(message);  
  
// removeChild: removes a child node from the DOM and returns the removed node.  
let d = document.getElementById("top");  
let d_nested = document.getElementById("nested");  
let throwawayNode = d.removeChild(d_nested);  
```  
  
## Replacing Elements  
  
- `replaceChild`: replaces a child node within the given (parent) node.  
  
```js  
parentDiv.replaceChild(sp1, sp2);  
```  
  
## Styles  
  
- Changing styles using JavaScript modifies inline style.  
- CSS attributes must be in camelCase without spaces or hyphen.  
  
```html  
<div style="color:red" id="myElement">..</div>  
```  
  
```js  
message.style.backgroundColor = '#37383d';  
message.style.width = '120%';  
  
const element = document.getElementById("myElement");  
const elementStyle = element.style;  
  
document.querySelector(".site-title").style.color;  
// "black"  
document.querySelector(".sity-title").style.color = "rebeccapurple";  
```  
  
### Reading styles  
  
- Accessing styles values using dot notation works only for attributes set by the code itself.  
- To access CSS styles we can use `getComputedStyle()` method.  
- [parseFloat](,%20JavaScript%20Numbers#%5E09d46f) can be used to get CSS value without the unit.  
  
```js  
console.log(getComputedStyle(message).color);  
console.log(getComputedStyle(message).height);  
message.style.height =  
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';  
```  
  
### Setting custom style properties (variables) using `setProperty()`  
  
```css  
:root {  
  --color-primary: #5ec576;  
  --color-primary-darker: #4bbb7d;  
  --color-primary-opacity: #5ec5763a;  
}  
```  
  
```js  
document.documentElement.style.setProperty('--color-primary', 'orangered');  
```  
  
## Attributes  
  
- Non-standard Attributes can't be accessed directly, instead `getAttribute` should be used.  
- `src` and `href` attributes returns the absolute URLs if they are accessed directly and the relative if the it's accessed using `getAttribute`.  
  
```js  
const logo = document.querySelector('.nav__logo');  
console.log(logo.alt);  
console.log(logo.className); // nav__logo  
logo.alt = 'Beautiful minimalist logo';  
  
// Non-standard Attributes  
console.log(logo.designer); // won't work  
console.log(logo.getAttribute('designer'));  
logo.setAttribute('company', 'Bankist');  
  
console.log(logo.src); // absolute URL  
console.log(logo.getAttribute('src')); // Relative URL  
```  
  
The `Element.attributes` property returns a live collection of all attribute nodes registered to the specified node. It is a `NamedNodeMap`, a key/value pair of strings that represents any information regarding that attribute.  
  
```js  
const para = document.getElementsByTagName("p")[0];  
const atts = para.attributes;  
  
// hasAttribute  
const result = element.hasAttribute(name);  
  
// removeAttribute  
document.getElementById("div1").removeAttribute("align");  
```  
  
### Data Attributes  
  
- The `dataset` read-only property of the `HTMLElement` interface provides read/write access to custom data attributes (data-) on elements.  
- Properties should be accessed in camelCase.  
  
```html  
<img  
  src="img/logo.png"  
  alt="Bankist logo"  
  class="nav__logo"  
  id="logo"  
  designer="Jonas"  
  data-version-number="3.0"  
/>  
```  
  
```js  
// Data attributes  
console.log(logo.dataset.versionNumber); // 3.0  
```  
  
## Classes  
  
<https://developer.mozilla.org/en-US/docs/Web/API/Element/className>  
  
```js  
logo.classList.add('c', 'j');  
div.classList.add("foo", "bar", "baz");  
logo.classList.remove('c', 'j');  
div.classList.remove("foo", "bar", "baz");  
// add or remove multiple classes using spread syntax  
const cls = ["foo", "bar"];  
div.classList.add(...cls);  
div.classList.remove(...cls);  
  
// Don't use  
// This will override all existing classes  
logo.className = 'jonas';  
  
// if visible is set remove it, otherwise add it  
div.classList.toggle("visible");  
logo.classList.toggle('c');  
  
// replace class "foo" with class "bar"  
div.classList.replace("foo", "bar");  
  
  
// contains  
logo.classList.contains('c'); // in arrays it's includes  
```  
  
## DOM Traversing  
  
### Downwards (children)  
  
- `Element.children`: all child elements of an element.  
- `Element.firstElementChild` and`Element.lastElementChild`: returns an element's first/last child Element, or null.  
- `Node.childNodes`, `Node.firstChild`, `Node.lastChild`: returns all child nodes, including non-element nodes like text and comment nodes.  
  
```js  
const h1 = document.querySelector('h1');  
// Going downwards: child  
console.log(h1.querySelectorAll('.highlight'));  
console.log(h1.childNodes); // all notes  
console.log(h1.children); // only elements  
h1.firstElementChild.style.color = 'white';  
h1.lastElementChild.style.color = 'orangered';  
```  
  
### Upwards (parents)  
  
- `Node.parentNode` returns the parent of the specified node in the DOM tree.  
  - `Document` and `DocumentFragment` nodes can never have a parent, so `parentNode` will always return **null**. It also returns **null** if the node has just been created and is **not yet attached** to the tree.  
- `Node.parentElement` returns the DOM node's parent Element, or null.  
- `Element.closest()` traverses the element and its parents **(upwards)** until it finds a node that matches the specified CSS selector. It returns the **closest ancestor element**, **the element itself** or **null**.  
  - Opposite of `querySelector`.  
  
```js  
const h1 = document.querySelector('h1');  
// Going upwards: parents  
console.log(h1.parentNode);  
console.log(h1.parentElement);  
h1.closest('.header').style.background = 'var(--gradient-secondary)';  
h1.closest('h1').style.background = 'var(--gradient-primary)';  
```  
  
### Sideways (siblings)  
  
- Only direct siblings can be accessed.  
- `Element.previousElementSibling` and `Element.nextElementSibling`: returns the Element immediately prior to / following the specified one in its parent's children list.  
- `Node.previousSibling` and `Node.nextSibling` returns the node immediately preceding / following the specified one in its parent's `childNodes` list.  
- These four methods return null if the specified node is the first in that list.  
- To get **all siblings**, including the node itself we can use `Node.parentElement.children`.  
  
```js  
const h1 = document.querySelector('h1');  
// Going sideways: siblings  
console.log(h1.previousElementSibling);  
console.log(h1.nextElementSibling);  
console.log(h1.previousSibling);  
console.log(h1.nextSibling);  
console.log(h1.parentElement.children);  
[...h1.parentElement.children].forEach(function (el) {  
  if (el !== h1) el.style.transform = 'scale(0.5)';  
});  
```  
  
### Traverse the DOM tree using `querySelector()` and `querySelectorAll()`  
  
```js  
document.querySelectorAll("main li").forEach(item => (item.style.backgroundColor = "red"));  
```  
