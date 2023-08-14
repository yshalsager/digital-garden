---  
created: 2021-12-15 00:00  
updated: 2022-01-10 00:00  
title: JavaScript Essential Training Study Notes  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
---  
  
  
# JavaScript Essential Training Study Notes  
  
التصنيف:: ملاحظات كورسات  
الحالة:: #ملاحظة_مؤرشفة  
  
## Where to put JS code?  
  
[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)  
  
### Inline: in an HTML document  
  
```html  
<script>  
  const allCode = document.querySelectorAll("code");  
  
  for (let item of allCode) {  
    item.innerHTML = `&lt;${item.innerHTML}&gt;`;  
  }  
</script>  
```  
  
### External file  
  
```html  
<script src="script.js"></script>  
```  
  
---  
  
---  
  
## Modern JS loading  
  
- Default Behavior (called content / render blocking):  
  
Browser stops rendering when JavaScript is encountered. JavaScript is executed before rendering continues. Often referred to as content blocking.  
  
```html  
<script src="JS/script.js"></script>  
```  
  
- async:  
  
Browser downloads JavaScript in parallel while HTML renders. When JavaScript is fully loaded, rendering stops while JavaScript is executed.  
  
This is good for some purposes, especially when you need, to get the JavaScript to parse as quickly as possible, and you don't really care about render blocking.  
  
```html  
<script src="JS/script.js" defer></script>  
```  
  
- defer:  
  
Browser downloads JavaScript in parallel while HTML renders, then defers execution of JavaScript until HTML rendering is complete.  
  
```html  
<script src="JS/script.js"></script>  
```  
  
**In a nutshell:** async/defer Should Be Standard. Only use render blocking when you have a specific reason. Loading JavaScript in the footer is now an anti-pattern.  
  
---  
  
---  
  
## JavaScript Modules  
  
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)  
JavaScript modules allow us to break pieces out of a JavaScript file and place them in a separate file and then import them back into the original file again.  
  
```html  
<script type="module" src="backpack.js"></script>  
<script type="module" src="script.js"></script>  
```  
  
When you set the type attributes to module, both of these automatically get deferred. So they will only run after everything else has happened to ensure that the browser has all the modules available before anything gets rendered out.  
  
```jsx  
const backpack = {...};  
export default backpack;  
  
```  
  
Here, backpack object is only available in the context of `script.js`. It is scoped only to this file in the current state, not to the browser.  
  
This is important to keep in mind, because it tells you what type of things you should be putting in modules and what types of things you should be putting in the main file.  
  
```jsx  
import backpack from "./backpack.js";  
```  
  
---  
  
---  
  
## Objects  
  
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)  
  
- With JavaScript, we are working with objects that are based on prototypes.  
- Object properties define the specifics of this one particular object.  
- Each object is a unique instance of an object prototype.  
- Objects have features that allow us to change their properties.  
- Methods: Property-changing features inside objects.  
- Objects can contain other objects.  
- JavaScript objects are collections of data and functionality stored as properties and methods that describe the object and what it can do.  
- To define an object, to create it, first we need a variable to hold the object (usually a `const`).  
  
```jsx  
// Variable holds data.  
const backpack = {  
  // Curly brackets define data as an object.  
  name: "Everyday Backpack", // Properties defined using key-value pairs.  
  volume: 30,  
  color: "grey",  
  pocketNum: 15,  
  strapLength: {  
    // Properties can nest sub-objects with their own properties.  
    left: 26,  
    right: 26,  
  },  
  lidOpen: false,  
  toggleLid: function (lidStatus) {  
    // Methods are properties containing functions.  
    this.lidOpen = lidStatus; // “this” keyword refers to the current object.  
    updateBackpack(`Lid status changed.`);  
  },  
  newStrapLength: function (lengthLeft, lengthRight) {  
    this.strapLength.left = lengthLeft;  
    this.strapLength.right = lengthRight;  
    updateBackpack(`Strap lengths updated.`);  
  },  
};  
```  
  
### Object Containers  
  
- The object needs somewhere to live and it needs a name. For this, we use a container called a variable.  
  
```jsx  
// Variable declaration: var / let / const  
// Variable name: refer to the name; get the data contained within  
  
const backpack = {  
  name: "Everyday Backpack",  
  volume: 30,  
  color: "grey",  
};  
```  
  
- Objects Are Typically Constants: We can change the properties of the object inside the container. We can’t remove or replace the object from the container.  
  
### Accessing Object Properties  
  
In most cases, use dot notation because it's easy to understand. If you need to pass a variable into the property name, or you need to access a property that is somehow breaking convention, use bracket notation.  
  
```jsx  
console.log("The backpack object:", backpack);  
console.log("The pocketNum value:", backpack.pocketNum);  
console.log("Strap length L:", backpack.straplLength.left);  
var query = “"pocketNum”;  
console.log("The pocketNum value:", backpack[query]);  
  
```  
  
### Object Methods  
  
```jsx  
  toggleLid: function (lidStatus) {  
    this.lidOpen = lidStatus;  
  },  
  
  toggleLid(lidStatus) {  
    this.lidOpen = lidStatus;  
  },  
  
```  
  
### Classes Object Blueprint  
  
Classes work as templates for an object type, and anytime we create a new object based on a class, that object automatically gets all the properties and the methods from that class.  
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)  
  
```jsx  
/**  
 * Creating classes:  
 *  
 * Class declaration: class Name {}  
 * Class expression:  const Name = class {}  
 */  
  
class Backpack {  
  constructor(  
    // Defines parameters:  
    name,  
    volume,  
    color,  
    pocketNum,  
    strapLengthL,  
    strapLengthR,  
    lidOpen  
  ) {  
    // Define properties:  
    this.name = name;  
    this.volume = volume;  
    this.color = color;  
    this.pocketNum = pocketNum;  
    this.strapLength = {  
      left: strapLengthL,  
      right: strapLengthR,  
    };  
    this.lidOpen = lidOpen;  
  }  
  // Add methods like normal functions:  
  toggleLid(lidStatus) {  
    this.lidOpen = lidStatus;  
  }  
  newStrapLength(lengthLeft, lengthRight) {  
    this.strapLength.left = lengthLeft;  
    this.strapLength.right = lengthRight;  
  }  
}  
  
export default Backpack;  
```  
  
```jsx  
/**  
 * Create a class for the Backpack object type.  
 * @link <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes>  
 */  
import Backpack from "./Backpack.js";  
  
const everydayPack = new Backpack("Everyday Backpack", 30, "grey", 15, 26, 26, false);  
  
console.log("The everydayPack object:", everydayPack);  
console.log("The pocketNum value:", everydayPack.pocketNum);  
```  
  
```  
    <script type="module" src="Backpack.js"></script>  
    <script type="module" src="script.js"></script>  
  
```  
  
### Object constructor  
  
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)  
  
- While classes are the preferred tool for creating object templates, there is another shorter and less advanced way of doing the same thing, which relies on a basic function.  
- The object constructor function captures the properties of the new object using its parameters and then defines and assigns values for each property and method using the this keyword and dot notation.  
- You'll notice that the difference between the class and the object constructor function here is the methods live inside the main construction function, just like the properties do.  
- The end result is exactly the same as with the class but there are some significant differences.  
  - The class allows us to do more things.  
  - We can extend classes.  
  - We can add new features to them that are not available inside an object constructor function.  
  - And the class is now the preferred tool for creating objects based on a blueprint.  
- Use a class unless you are required to use an object constructor function because the classes give you more capabilities than the object constructor function does, and the only reason to use the older function is if you are running it in an old code base or in old infrastructure that have yet to support classes.  
  
```jsx  
/**  
 * Create an object constructor function for the Backpack object type.  
 * @link <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new>  
 */  
  
function Backpack(name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen) {  
  this.name = name;  
  this.volume = volume;  
  this.color = color;  
  this.pocketNum = pocketNum;  
  this.strapLength = {  
    left: strapLengthL,  
    right: strapLengthR,  
  };  
  this.lidOpen = lidOpen;  
  this.toggleLid = function (lidStatus) {  
    this.lidOpen = lidStatus;  
  };  
  this.newStrapLength = function (lengthLeft, lengthRight) {  
    this.strapLength.left = lengthLeft;  
    this.strapLength.right = lengthRight;  
  };  
}  
  
const everydayPack = new Backpack("Everyday Backpack", 30, "grey", 15, 26, 26, false);  
```  
  
### Global Objects  
  
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)  
In addition to the objects you build yourself, either directly or through a class or a constructor, the browser has a long list of default objects you can use for a variety of different purposes.  
  
```jsx  
  backpackAge() {  
    let now = new Date(); // Global Object  
    let acquired = new Date(this.dateAcquired);  
    let elapsed = now - acquired; // elapsed time in milliseconds  
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));  
    return daysSinceAcquired;  
  }  
  
```  
  
---  
  
## String Output  
  
### Template Literals  
  
```jsx  
/**  
 * Use template literals to output HTML  
 * @link <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals>  
 *  
 */  
import Backpack from "./Backpack.js";  
  
const everydayPack = new Backpack("Everyday Pack", 30, "grey", 15, 26, 26, false, "2018-12-5  
  
const content = `  
  <main>  
    <article>  
      <h1>${everydayPack.name}</h1>  
      <ul>  
        <li>Volume: ${everydayPack.volume}</li>  
        <li>Color: ${everydayPack.color}</li>  
        <li>Age: ${everydayPack.backpackAge()}</li>  
        <li>Number of pockets: ${everydayPack.pocketNum}</li>  
        <li>Left strap length: ${everydayPack.strapLength.left}</li>  
        <li>Right strap length: ${everydayPack.strapLength.right}</li>  
        <li>Lid status: ${everydayPack.lidOpen}</li>  
      </ul>  
    </article>  
  </main>  
`;  
  
document.body.innerHTML = content;  
```  
  
### Traditional String Concatenation  
  
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)  
  
```jsx  
const content = "<h1>" + everydayPack.name + "</h1>";  
```  
  
---  
  
## DOM  
  
[https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)  
  
### Access elements with `querySelector` methods  
  
[https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)[https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll)  
  
```jsx  
/**  
 * Traverse the DOM tree using querySelector() and querySelectorAll()  
 */  
const main = document.querySelector(".maincontent");  
main.innerHTML = content;  
document.querySelectorAll("main li");  
document.querySelectorAll("main li").forEach(item => (item.style.backgroundColor = "red"));  
```  
  
### Access elements with `getElement` methods  
  
```  
// Element.getElementsByClassName()  
var elements = element.getElementsByClassName("names");  
// Document.getElementByld()  
var elesent = document.getElementById("id");  
  
```  
  
### Modifying Element Classes  
  
[https://developer.mozilla.org/en-US/docs/Web/API/Element/className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className)  
  
```jsx  
const div = document.createtlement("div");  
div.className = "foo";  
  
document.querySelector("h1").className;  
// "backpack__name"  
document.querySelector("h1").className = "new-class";  
// "new-class"  
```  
  
[https://developer.mozilla.org/en-US/docs/Web/API/Element/classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)  
  
```jsx  
const div = document.createElement("div");  
div.className = "foo";  
  
// our starting state: <div class="foo"></div>  
console.log(div.outerHTML);  
  
// use the classList API to remove and add classes  
div.classList.remove("foo");  
div.classList.add("anotherclass");  
  
// add or remove multiple classes  
div.classList.add("foo", "bar", "baz");  
div.classList.remove("foo", "bar", "baz");  
  
// add or remove multiple classes using spread syntax  
const cls = ["foo", "bar"];  
div.classList.add(...cls);  
div.classList.remove(...cls);  
  
// if visible is set remove it, otherwise add it  
div.classList.toggle("visible");  
  
// replace class "foo" with class "bar"  
div.classList.replace("foo", "bar");  
```  
  
### Attributes  
  
The `Element.attributes` property returns a live collection of all attribute nodes registered to the specified node. It is a NamedNodeMap, a key/value pair of strings that represents any information regarding that attribute.  
  
```jsx  
var para = document.getElementsByTagName("p")[0];  
var atts = para.attributes;  
  
// hasAttribute  
var result = element.hasAttribute(name);  
  
// getAttribute  
const div1 = document.getElementById("div1");  
//=> <div id="div1">Hi Champ!</div>  
  
const exampleAttr = div1.getAttribute("id");  
//=> "div1"  
  
const align = div1.getAttribute("align");  
//=> null  
  
var b = document.querySelector("button");  
  
b.setAttribute("name", "helloButton");  
b.setAttribute("disabled", "");  
  
// removeAttribute  
document.getElementById("div1").removeAttribute("align");  
```  
  
### Inline Style  
  
```html  
<div style="color:red" id="myElement">..</div>  
```  
  
```jsx  
var element = document.getElementById("myElement");  
var elementStyle = element.style;  
  
document.querySelector(".site-title").style.color;  
// "black"  
  
document.querySelector(".sity-title").style.color = "rebeccapurple";  
```  
  
### Adding Elements  
  
```jsx  
const main = document.querySelector(".maincontent");  
  
const newArticle = document.createElement("article");  
newArticle.classList.add("backpack");  
newArticle.setAttribute("id", "everyday");  
newArticle.innerHTML = content;  
  
main.append(newArticle);  
  
// prepend: adding before the first child of the Element  
let div = document.createElement("div");  
let p = document.createElement("p");  
let span = document.createElement("span");  
div.append(p);  
div.prepend(span);  
console.log(div.childNodes); // NodeList [ <span>, <p> ]  
  
// appendChild: adds a node and return it to be worked with  
let p = document.createElement("p");  
document.body.appendChild(p);  
  
// removeChild: removes a child node from the DOM and returns the removed node.  
let d = document.getElementById("top");  
let d_nested = document.getElementById("nested");  
let throwawayNode = d.removeChild(d_nested);  
  
// replaceChild: replaces a child node within the given (parent) node.  
parentDiv.replaceChild(sp1, sp2);  
  
// insertBefore: inserts a node before a reference node as a child of a specified parent node.  
parentDiv.insertBefore(newNode, sp2);  
  
// insertAdjacentElement: inserts a given element node at a given position relative to the element it is invoked upon.  
// 'beforebegin': Before the targetElement itself.  
// 'afterbegin': Just inside the targetElement, before its first child.  
// 'beforeend': Just inside the targetElement, after its last child.  
// 'afterend': After the targetElement itself.  
  
activeElem.insertAdjacentElement("beforebegin", tempDiv);  
activeElem.insertAdjacentElement("afterend", tempDiv);  
```  
  
---  
  
## Variables and Data Types  
  
- Naming Objects: The creation of containers to put objects within.  
- Variable: A container with some piece of data.  
  
### var  
  
The `var` statement declares a **function-scoped** or **globally-scoped** variable, optionally initializing it to a value.  
  
```jsx  
var container = 5; // mutable  
container = "red";  
var x = 4,  
  y = 5,  
  z = "blue";  
var empty;  
```  
  
### let  
  
The let statement declares a block-scoped local variable, optionally initializing it to a value.  
  
```jsx  
var color = "purple";  
  
document.querySelector(".left").style.backgroundColor = color;  
document.querySelector(".left .color-value").innerHTML = color;  
  
color = "skyblue";  
  
function headingColor() {  
  let color = "blue"; // scoped  
  document.querySelector(".title").style.color = color;  
}  
  
headingColor();  
  
document.querySelector(".right").style.backgroundColor = color;  
document.querySelector(".right .color-value").innerHTML = color;  
```  
  
### Which to use?  
  
- For most situations, when you want to use a changeable or mutable variable, you should use a let.  
- That includes when you want to use it in global scope, because when you declare a let in global scope, it will apply everywhere except where you re-declare it.  
- The var is only really useful if you want a mutable variable with global scope all the time, but that situation is quite rare and is a special case.  
- So the default is, when you want a changeable or mutable variable use a let.  
  
### const  
  
Constants are block-scoped, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment, and it can't be re-declared. However, if a constant is an object or array, its properties or items can be updated or removed.  
  
```jsx  
const number = 42;  
```  
  
### Data Types  
  
```jsx  
/**  
 * Data types in JavaScript  
 * @link <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures>  
 */  
  
// String:  
let stringDemo = "A string of text.";  
console.log("String:", stringDemo);  
  
// Numbes:  
let integerDemo = 4;  
console.log("Integer:", integerDemo);  
  
let floatDemo = 5.6;  
console.log("Floating point number:", floatDemo);  
  
// Boolean:  
let booleanDemo = true;  
console.log("Boolean value:", booleanDemo);  
  
// Null value (nothing):  
let nullDemo = null;  
console.log("Null value:", nullDemo);  
  
// Undefined:  
let undefinedDemo;  
console.log("Undefined:", undefinedDemo);  
  
let undefinedAssignedDemo = undefined;  
console.log("Undefined assigned:", undefinedAssignedDemo);  
  
// Object:  
const objectDemo = {  
  dance: "Mambo",  
  number: 5,  
};  
console.log("Object:", objectDemo);  
  
// Array:  
const arrayDemo = ["tango", "foxtrot", "waltz", "rumba", "bolero"];  
console.log("Array:", arrayDemo);  
```  
  
### Comparison  
  
```jsx  
// Unlike the strict equality operator, it attempts to convert and compare operands that are of different types.  
console.log(1 == 1);  
// expected output: true  
  
console.log("hello" == "hello");  
// expected output: true  
  
console.log("1" == 1);  
// expected output: true  
  
console.log(0 == false);  
// expected output: true  
  
// Unlike the equality operator, the strict equality operator always considers operands of different types to be different.  
console.log(1 === 1);  
// expected output: true  
  
console.log("hello" === "hello");  
// expected output: true  
  
console.log("1" === 1);  
// expected output: false  
  
console.log(0 === false);  
// expected output: false  
```  
  
### Math Operators  
  
```jsx  
// Number + Number -> addition  
1 + 2; // 3  
  
// Boolean + Number -> addition  
true + 1; // 2  
  
// Boolean + Boolean -> addition  
false + false; // 0  
  
// String + String -> concatenation  
"foo" + "bar"; // "foobar"  
  
// Number + String -> concatenation  
5 + "foo"; // "5foo"  
  
// String + Boolean -> concatenation  
"foo" + false; // "foofalse"  
  
// Subtraction with numbers  
5 - 3; // 2  
3 - 5; // -2  
  
// Number - String -> Subtraction  
15 - "4"; // 11  
  
// Subtraction with non-numbers  
"foo" - 3; // NaN  
```  
  
### Increment and Decrement  
  
- If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.  
- If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.  
  
```jsx  
// Prefix increment  
let a = 2;  
b = ++a;  
// a = 3  
// b = 3  
  
// Postfix increment  
let x = 3;  
y = x++;  
// y = 3  
// x = 4  
  
// Prefix decrement  
let a = 2;  
b = --a;  
  
// a = 1  
// b = 1  
  
// Postfix decrement  
let x = 3;  
y = x--;  
// y = 3  
// x = 2  
```  
  
---  
  
## Arrays  
  
[https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods](https:_/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)  
  
```jsx  
/**  
 * Working with arrays  
 */  
  
let item = "flashlight";  
const collection = ["Piggy", item, 5, true];  
console.log(collection);  
console.log(collection.length); // 4  
console.log(collection[2]);  
collection[2] = "Camera";  
collection[collection.length] = "new item"; // Appends a new item at index 4  
collection[9] = "at the end";  
console.log(collection[8]); // undefined  
collection[collection.length - 1]; // the last item in the array  
  
// Finding items in an array  
const birds = ["Parrot", "Falcon", "Owl"];  
console.log(birds.indexOf("Owl")); //  2  
console.log(birds.indexOf("Rabbit")); // -1  
  
// Adding items  
const myArray = ["Manchester", "Liverpool"];  
myArray.push("Cardiff");  
console.log(myArray); // ["Manchester", "Liverpool", "Cardiff"]  
myArray.push("Bradford", "Brighton");  
console.log(myArray); // ["Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton"]  
const newLength = myArray.push("Bristol");  
console.log(newLength); // 6  
// To add an item to the start of the array, use unshift():  
const myArray = ["Manchester", "Liverpool"];  
myArray.unshift("Edinburgh");  
console.log(myArray); // ["Edinburgh", "Manchester", "Liverpool"]  
  
// Removing items  
const myArray = ["Manchester", "Liverpool"];  
myArray.pop();  
console.log(myArray); // ["Manchester"]  
const myArray = ["Manchester", "Liverpool"];  
const removedItem = myArray.pop();  
console.log(removedItem); // "Liverpool"  
// To remove the first item from an array, use shift():  
const myArray = ["Manchester", "Liverpool"];  
myArray.shift();  
console.log(myArray); // ["Liverpool"]  
// If you know the index of an item, you can remove it from the array using splice():  
myArray.splice(index, 1);  
  
// Accessing every item  
const birds = ["Parrot", "Falcon", "Owl"];  
for (const bird of birds) {  
  console.log(bird);  
}  
  
// Converting between strings and arrays  
const myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";  
const myArray = myData.split(","); // ["Manchester", "Liverpool", ...]  
const myNewString = myArray.join(","); // 'Manchester,London,...'  
const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];  
dogNames.toString(); // Rocket,Flash,Bella,Slugger  
  
// Manipulating array items without modifying the array itself  
let backpackContents = ["piggy", "headlamp", "pen"];  
backpackContents.forEach(function (item) {  
  item = `<li>${item}</li>`;  
  console.log(item);  
});  
  
// Apply a fuction  
let longItems = backpackContents.find(function (item) {  
  if (item.length >= 5) {  
    return item;  
  }  
});  
console.log("longItems:", longItems); // longItems: piggy  
  
const deskArray = ["pen", "camera", "phone", "notebook", "headphones", "lightbulb", "usb drive"];  
// Add last item as the first item on the array:  
deskArray.unshift(deskArray.pop());  
console.log("Last item is now first:", deskArray);  
  
// Sort items by alphabetical order:  
deskArray.sort();  
console.log("Sorted array:", deskArray);  
  
// Find "notebook":  
const foundItem = deskArray.find(item => item === "notebook");  
console.log("Found item:", foundItem);  
  
// Find and remove an item:  
let remove = "notebook";  
deskArray.splice(deskArray.indexOf(remove), 1);  
console.log(`Array with "${remove}" removed:`, deskArray);  
```  
  
---  
  
## Functions and Methods  
  
### Standard Function  
  
[https://developer.mozilla.org/en-US/docs/Glossary/Function](https://developer.mozilla.org/en-US/docs/Glossary/Function)  
  
```jsx  
/**  
 * Working with functions  
 */  
  
// Function declaration:  
// global  
function doSomeMath(a, b) {  
  let c = a + b;  
  return c;  
}  
  
// Function expression:  
// have same scope as variable  
const doMoreMath = function (a = 3, b = 2) {  
  let c = a * b;  
  return c;  
};  
  
console.log("Do some math:", doSomeMath(5, 6));  
console.log("Do more math:", doMoreMath(5, 6));  
  
// Immediately Invoked Function Expression (IIFE)  
(function () {  
  let a = 4;  
  let b = 6;  
  let c = doSomeMath(a, b);  
  console.log(`The sum of a and b is: ${c}`);  
})();  
```  
  
```jsx  
/**  
 * A standard function  
 * @link <https://developer.mozilla.org/en-US/docs/Glossary/Function>  
 */  
  
const greenPack = {  
  name: "Frog Pack",  
  color: "green",  
  volume: 8,  
  pocketNum: 3,  
};  
  
const addPack = function (currentPack) {  
  const newArticle = document.createElement("article");  
  newArticle.innerHTML = `  
    <h1>${currentPack.name}</h1>  
    <ul>  
      <li>Volume: ${currentPack.volume}</li>  
      <li>Color: ${currentPack.color}</li>  
      <li>Number of pockets: ${currentPack.pocketNum}</li>  
    </ul>  
  `;  
  return newArticle;  
};  
  
const main = document.querySelector("main");  
main.append(addPack(greenPack));  
```  
  
### Arrow function expressions  
  
- Arrow functions are just a simpler way of writing anonymous functions, they produce a lot cleaner code.  
- Function declarations can be hoisted, meaning you can call the function before it is declared in JavaScript. Arrow functions on the other hand can only be called after they have been declared.  
- You can't use arrow functions when declaring methods in an object. Inside an object, if you have a method you need to use a proper anonymous function declaration.  
- You can reduce and simplify the arrow function syntax to the point where it becomes really hard to understand what's going on (just the parameter and the arrow and it points directly as the output).  
  
```jsx  
// Traditional Anonymous Function  
function (a){  
  return a + 100;  
}  
  
// Arrow Function Break Down  
// Note: Each step along the way is a valid "arrow function".  
  
// 1. Remove the word "function" and place arrow between the argument and opening body bracket  
(a) => {  
  return a + 100;  
}  
  
// 2. Remove the body braces and word "return" -- the return is implied.  
(a) => a + 100;  
  
// 3. Remove the argument parentheses  
a => a + 100;  
  
```  
  
```jsx  
// old  
// const addPack = function (currentPack) {  
const addPack = currentPack => {  
  const newArticle = document.createElement("article");  
  newArticle.innerHTML = `  
    <h1>${currentPack.name}</h1>  
    <ul>  
      <li>Volume: ${currentPack.volume}</li>  
      <li>Color: ${currentPack.color}</li>  
      <li>Number of pockets: ${currentPack.pocketNum}</li>  
    </ul>  
  `;  
  return newArticle;  
};  
```  
  
### Arrow functions and this  
  
If you're using 'this' in a method within an object, and you then get an odd result, try turning the function into an arrow function to see if that solves the problem. Most likely, you're dealing with the wrong scope and an arrow function will help you get the correct scope because it doesn't carry its own scope with it.  
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#arrow_functions](https:_/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#arrow_functions)  
  
```jsx  
/**  
 * How arrow functions help us with scoping.  
 */  
  
// Define a default volume for the window (the entire DOM):  
window.volume = 20;  
  
const greenPack = {  
  name: "Frog Pack",  
  color: "green",  
  volume: 8,  
  pocketNum: 3,  
  newVolume: function (volume) {  
    console.log("this.volume in the method:", this.volume); // 8  
    this.volume = volume;  
    console.log("this.volume after update:", this.volume); // 5  
    // hoisted up to the global scope.  
    (function () {  
      console.log("this.volume in nested function:", this.volume); // 20  
    })();  
    // Whereas the arrow function stays within the current scope  
    // this is happening because an arrow function does not have its own 'this.' It does not know what this means and it will refer to the closest available scope which in this case is the object.  
    (() => {  
      console.log("this.volume in nested function:", this.volume); // 5  
    })();  
  },  
};  
  
console.log(greenPack.newVolume(5));  
```  
  
### Pass data to a function with parameters  
  
```jsx  
/**  
 * Passing data to functions through parameters.  
 * @link <https://developer.mozilla.org/en-US/docs/Glossary/Function>  
 */  
const tipCalculator = (sum, percentage, currency, prefix) => {  
  let tip = sum * (percentage / 100);  
  let total = sum + tip;  
  if (prefix) {  
    console.log(`  
      Sum before tip: ${currency}${sum}  
      Tip percentage: ${percentage}%  
      Tip:            ${currency}${tip.toFixed(2)}  
      Total:          ${currency}${total.toFixed(2)}  
    `);  
  } else {  
    console.log(`  
      Sum before tip: ${sum}${currency}  
      Tip percentage: ${percentage}%  
      Tip:            ${tip.toFixed(2)}${currency}  
      Total:          ${total.toFixed(2)}${currency}  
    `);  
  }  
};  
  
tipCalculator(29.95, 18, "kr", false);  
```  
  
### Return values from a function  
  
```jsx  
/**  
 * Passing data to functions through parameters.  
 * @link <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat>  
 *  
 * List of ISO language codes:  
 * @link <http://www.lingoes.net/en/translator/langcode.htm>  
 */  
  
const formatter = (locale = "en-US", currency = "USD", value) => {  
  let formattedValue = new Intl.NumberFormat(locale, {  
    style: "currency",  
    currency: currency,  
  }).format(value);  
  
  return formattedValue;  
};  
  
const tipCalculator = (sum, percentage, locale, currency) => {  
  let tip = sum * (percentage / 100);  
  let total = sum + tip;  
  
  console.log(`  
    Sum before tip: ${formatter(locale, currency, sum)}  
    Tip percentage: ${percentage}%  
    Tip:            ${formatter(locale, currency, tip)}  
    Total:          ${formatter(locale, currency, total)}  
  `);  
};  
  
tipCalculator(29.95, 18, "de-DE", "EUR");  
```  
  
### Callbacks  
  
```jsx  
// Callback receives finalTip object, creates and outputs table on the DOM.  
const printHTML = finalTip => {  
  const tipTable = document.createElement("table");  
  tipTable.innerHTML = `  
    <tr>  
      <td>Sum before tip:</td>  
      <td>${finalTip.sum}</td>  
    </tr>  
    <tr>  
      <td>Tip percentage:</td>  
      <td>${finalTip.percentage}</td>  
    </tr>  
    <tr>  
      <td>Tip:</td>  
      <td>${finalTip.tip}</td>  
    </tr>  
    <tr>  
      <td>Total:</td>  
      <td>${finalTip.total}</td>  
    </tr>  
  `;  
  document.querySelector("main").append(tipTable);  
};  
  
// Create a finalTip object with all the data. Send it to the printHTML callback.  
const tipCalculator = (sum, percentage, locale, currency, callback) => {  
  let tip = sum * (percentage / 100);  
  let total = sum + tip;  
  
  const finalTip = {  
    sum: formatter(locale, currency, sum),  
    percentage: percentage + "%",  
    tip: formatter(locale, currency, tip),  
    total: formatter(locale, currency, total),  
  };  
  
  callback(finalTip);  
};  
  
tipCalculator(29.95, 18, "de-DE", "EUR", printHTML);  
```  
  
- There's a good chance when you set up some more complex code that you 05 have different callback functions you want to use for different purposes.  
- So in this particular circumstance we want to use the print HTML function but there could be several different versions of the print HTML function and then you want to use them for different purposes and by calling a callback like this, you can pass in exactly the function you want into the other function.  
- So we're effectively saying here is the precise function I want you to use once you're done processing your information right now but later it could be a different function.  
  
### Conditional ifelse statement  
  
```jsx  
if (everydayPack.lidOpen) {  
	console.log("Lid is open!™);  
} else {  
	console.log("Lid is closed :(");  
}  
  
```  
  
### Ternary Operator  
  
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.  
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)  
  
```jsx  
// condition ? exprIfTrue : exprIfFalse  
everydayPack.lidOpen ? "open" : "closed";  
  
var age = 26;  
var beverage = age >= 21 ? "Beer" : "Juice";  
console.log(beverage); // "Beer"  
  
// Handling null values  
// One common usage is to handle a value that 05 be null  
let greeting = person => {  
  let name = person ? person.name : `stranger`;  
  return `Howdy, ${name}`;  
};  
console.log(greeting({ name: `Alice` })); // "Howdy, Alice"  
console.log(greeting(null)); // "Howdy, stranger"  
```  
  
### Conditional chains  
  
The ternary operator is right-associative, which means it can be "chained" in the following way, similar to an if … else if … else if … else chain:  
  
```jsx  
function example(…) {  
    return condition1 ? value1  
         : condition2 ? value2  
         : condition3 ? value3  
         : value4;  
}  
  
// Equivalent to:  
function example(…) {  
    if (condition1) { return value1; }  
    else if (condition2) { return value2; }  
    else if (condition3) { return value3; }  
    else { return value4; }  
}  
  
```  
  
### Conditional switch statement  
  
The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.  
  
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)  
  
```jsx  
const usedStatus = () => {  
  let age = everydayPack.backpackAge();  
  let description;  
  
  if (age >= 30) {  
    if (age >= 365) {  
      if (age >= 1095) {  
        description = "old";  
      } else {  
        description = "used";  
      }  
    } else {  
      description = "lightly used";  
    }  
  } else {  
    description = "new";  
  }  
};  
```  
  
```jsx  
const usedStatus = () => {  
  let age = everydayPack.backpackAge();  
  let description;  
  
  switch (true) {  
    case age < 30:  
      description = "new";  
      break;  
    case age >= 30 && age < 365:  
      description = "lightly used";  
      break;  
    case age >= 365 && age < 1095:  
      description = "used";  
      break;  
    case age >= 1095:  
      description = "old";  
      break;  
    default:  
      console.log(`There is no description for ${age}.`);  
  }  
};  
```  
  
### Looping through content  
  
```jsx  
/**  
 * Loops Aplenty!  
 * @link <https://developer.mozilla.org/en-US/docs/Glossary/Callback_function>  
 */  
  
const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];  
  
const nestedObjects = {  
  item01: {  
    name: "piggy",  
    type: "toy",  
    weight: 30,  
  },  
  item02: {  
    name: "headlamp",  
    type: "equipment",  
    weight: 120,  
  },  
  item03: {  
    name: "pen",  
    type: "tool",  
    weight: 30,  
  },  
  item04: {  
    name: "pencil",  
    type: "tool",  
    weight: 30,  
  },  
  item05: {  
    name: "eraser",  
    type: "tool",  
    weight: 40,  
  },  
  item06: {  
    name: "water bottle",  
    type: "equipment",  
    weight: 1300,  
  },  
};  
  
const article = document.querySelector("article");  
let stuffList = document.createElement("ul");  
  
/**  
 * for loop  
 * @link <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for>  
 */  
for (let i = 0; i < stuff.length; i++) {  
  let listItem = document.createElement("li");  
  listItem.innerHTML = stuff[i];  
  stuffList.append(listItem);  
}  
  
/**  
 * for...of loop and arrays  
 * @link <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of>  
 */  
for (const item of stuff) {  
  let listItem = document.createElement("li");  
  listItem.innerHTML = item;  
  stuffList.append(listItem);  
}  
  
/**  
 * foreach array method  
 * @link <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach>  
 */  
// array.forEach() method has optional properties for the current item index number and the array itself.  
stuff.forEach(item => {  
  let listItem = document.createElement("li");  
  listItem.innerHTML = item;  
  stuffList.append(listItem);  
});  
  
/**  
 * for...in loop and objects  
 * @link <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of>  
 */  
for (const singleObject in nestedObjects) {  
  let listItem = document.createElement("li");  
  listItem.innerHTML = `Name: ${nestedObjects[singleObject].name}`;  
  stuffList.append(listItem);  
}  
  
article.append(stuffList);  
```  
  
### Using the map array method  
  
```jsx  
/**  
 * The map() array method.  
 * @link <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map>  
 */  
  
const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];  
  
const article = document.querySelector("article");  
let stuffList = document.createElement("ul");  
  
// map() through the stuff array to make a new stuffItems array.  
const stuffItems = stuff.map(item => {  
  let listItem = document.createElement("li");  
  listItem.innerHTML = item;  
  return listItem;  
});  
  
// Append each element from the stuffItems array to the stuffList <ul>  
stuffItems.forEach(item => {  
  stuffList.append(item);  
});  
  
// Append stuffList to the <article>  
article.append(stuffList);  
```  
  
---  
  
## Events  
  
[https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)  
Events are actions or occurrences that happen in the system you are programming, which the system tells you about so your code can react to them. For example, if the user selects a button on a webpage, you might want to react to that action by displaying an information box.  
  
```jsx  
/**  
 * Events aplenty.  
 */  
  
const container = document.querySelector(".container");  
const button = document.querySelector(".cta-button");  
const posX = document.querySelector(".posX span");  
const posY = document.querySelector(".posY span");  
  
// Log when the button is clicked in the console.  
button.addEventListener(  
  "click",  
  () => {  
    button.classList.toggle("active");  
    console.log("Button was clicked!");  
  },  
  false  
);  
  
// Update the x and y displays to show the current mouse position.  
const mousePosition = event => {  
  posX.innerText = event.pageX;  
  posY.innerText = event.pageY;  
};  
  
window.addEventListener("mousemove", mousePosition, false);  
  
// Change the color of the box when the mouse enters.  
container.addEventListener(  
  "mouseenter",  
  () => {  
    container.classList.add("blue");  
  },  
  false  
);  
  
container.addEventListener(  
  "mouseleave",  
  () => {  
    container.classList.remove("blue");  
  },  
  false  
);  
```  
  
### Event Listeners  
  
```jsx  
// addEventListener()  
  
// element.addEventListener(target_event, callback [, options]);  
// Optional: Options. Typically “false” or left blank.  
  
const button = document.querySelector("button")  
button.addEventListener(  
 "click",  
 (e) => {  
	console. log( Event fired: ${e}’)  
 }  
);  
  
```  
  
```jsx  
const button = backpackArticle.querySelector(".lid-toggle");  
const status = backpackArticle.querySelector(".backpack__lid span");  
  
button.addEventListener("click", event => {  
  console.log(event);  
  button.innerText === "Open lid" ? (button.innerText = "Close lid") : (button.innerText = "Open lid");  
  status.innerText === "open" ? (status.innerText = "closed") : (status.innerText = "open");  
});  
```  
  
### Advanced event listeners and this  
  
```jsx  
button.addEventListener("click", function (event) {  
  console.log(event);  
  this.innerText === "Open lid" ? (this.innerText = "Close lid") : (this.innerText = "Open lid");  
  status.innerText === "open" ? (status.innerText = "closed") : (status.innerText = "open");  
});  
```  
  
```jsx  
/**  
 * Add event listener to the lid-toggle button.  
 */  
const lidToggle = function () {  
  // Find the current backpack object in backpackObjectArray  
  let backpackObject = backpackObjectArray.find(({ id }) => id === this.parentElement.id);  
  
  // Toggle lidOpen status  
  backpackObject.lidOpen == true ? (backpackObject.lidOpen = false) : (backpackObject.lidOpen = true);  
  
  // Toggle button text  
  this.innerText == "Open lid" ? (this.innerText = "Close lid") : (this.innerText = "Open lid");  
  
  // Set visible property status text  
  let status = this.parentElement.querySelector(".backpack__lid span");  
  status.innerText == "closed" ? (status.innerText = "open") : (status.innerText = "closed");  
};  
  
let button = backpackArticle.querySelector(".lid-toggle");  
// Add event listener  
button.addEventListener("click", lidToggle);  
```  
  
### Pass arguments through event listeners  
  
We can work around the problem of not being able to pass arguments into a callback function by using the callback function as a function wrapper to call other functions.  
That way we have full control, we can do whatever we normally would do in a function call and we still have access to the event, and we're still using the event listener as  
  
```jsx  
/**  
 * Add event listener to the lid-toggle button.  
 */  
const lidToggle = function (event, button, newArg) {  
  console.log(event);  
  console.log(newArg);  
  
  // Find the current backpack object in backpackObjectArray  
  let backpackObject = backpackObjectArray.find(({ id }) => id === button.parentElement.id);  
  
  // Toggle lidOpen status  
  backpackObject.lidOpen == true ? (backpackObject.lidOpen = false) : (backpackObject.lidOpen = true);  
  
  // Toggle button text  
  button.innerText == "Open lid" ? (button.innerText = "Close lid") : (button.innerText = "Open lid");  
  
  // Set visible property status text  
  let status = button.parentElement.querySelector(".backpack__lid span");  
  status.innerText == "closed" ? (status.innerText = "open") : (status.innerText = "closed");  
};  
  
let button = backpackArticle.querySelector(".lid-toggle");  
let newArg = "The argument I want to pass to the callback function!";  
  
// Add event listener  
button.addEventListener("click", event => {  
  lidToggle(event, button, newArg);  
});  
```  
  
### Form submit event  
  
```jsx  
// Add event listener to the form submit action  
lengthForm.addEventListener("submit", e => {  
  // Stop form from reloading the page  
  e.preventDefault();  
  
  // Get the value from the form input  
  let newValue = lengthForm.querySelector("input").value;  
  
  // Set the value of the field  
  listElement.querySelector("span").innerHTML = `${newValue} inches`;  
  
  // Clear the form input  
  lengthForm.querySelector("input").value = "";  
});  
```  
