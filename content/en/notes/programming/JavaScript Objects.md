---  
updated: 2022-06-20 19:38  
created: 2021-12-15 00:00  
title: JavaScript Objects  
aliases:  
  - JavaScript Objects  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
  - JavaScript  
---  
  
  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [JavaScript Essential Training](JavaScript%20Essential%20Training)  
  
---  
  
## Objects  
  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object>  
  
- With JavaScript, we are working with objects that are based on prototypes.  
  
- Object properties define the specifics of this one particular object.  
  
- Each object is a unique instance of an object prototype.  
  
- Objects have features that allow us to change their properties.  
  
- Methods: Property-changing features inside objects.  
  
- Objects can contain other objects.  
  
- JavaScript objects are collections of data and functionality stored as properties and methods that describe the object and what it can do.  
  
- To define an object, to create it, first we need a variable to hold the object (usually a `const`).  
  
```js  
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
  
```js  
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
  
```js  
console.log("The backpack object:", backpack);  
console.log("The pocketNum value:", backpack.pocketNum);  
console.log("Strap length L:", backpack.straplLength.left);  
var query = “"pocketNum”;  
console.log("The pocketNum value:", backpack[query]);  
```  
  
### Object Methods  
  
```js  
  toggleLid: function (lidStatus) {  
    this.lidOpen = lidStatus;  
  },  
  
  toggleLid(lidStatus) {  
    this.lidOpen = lidStatus;  
  },  
```  
  
### Classes Object Blueprint  
  
Classes work as templates for an object type, and anytime we create a new object based on a class, that object automatically gets all the properties and the methods from that class.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes>  
  
```js:Backpack.js  
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
  
```js:script.js  
/**  
 * Create a class for the Backpack object type.  
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes  
 */  
import Backpack from "./Backpack.js";  
  
const everydayPack = new Backpack(  
  "Everyday Backpack",  
  30,  
  "grey",  
  15,  
  26,  
  26,  
  false  
);  
  
console.log("The everydayPack object:", everydayPack);  
console.log("The pocketNum value:", everydayPack.pocketNum);  
```  
  
```html  
<script type="module" src="Backpack.js"></script>  
<script type="module" src="script.js"></script>  
```  
  
#### Object constructor  
  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor>  
  
- While classes are the preferred tool for creating object templates, there is another shorter and less advanced way of doing the same thing, which relies on a basic function.  
- The object constructor function captures the properties of the new object using its parameters and then defines and assigns values for each property and method using the this keyword and dot notation.  
- You'll notice that the difference between the class and the object constructor function here is the methods live inside the main construction function, just like the properties do.  
- The end result is exactly the same as with the class but there are some significant differences.  
  - The class allows us to do more things.  
  - We can extend classes.  
  - We can add new features to them that are not available inside an object constructor function.  
  - And the class is now the preferred tool for creating objects based on a blueprint.  
- Use a class unless you are required to use an object constructor function because the classes give you more capabilities than the object constructor function does, and the only reason to use the older function is if you are running it in an old code base or in old infrastructure that have yet to support classes.  
  
```js:script.js  
/**  
 * Create an object constructor function for the Backpack object type.  
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new  
 */  
  
function Backpack(  
  name,  
  volume,  
  color,  
  pocketNum,  
  strapLengthL,  
  strapLengthR,  
  lidOpen  
) {  
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
  
const everydayPack = new Backpack(  
  "Everyday Backpack",  
  30,  
  "grey",  
  15,  
  26,  
  26,  
  false  
);  
```  
  
### Global Objects  
  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects>  
In addition to the objects you build yourself, either directly or through a class or a constructor, the browser has a long list of default objects you can use for a variety of different purposes.  
  
```js  
  backpackAge() {  
    let now = new Date(); // Global Object  
    let acquired = new Date(this.dateAcquired);  
    let elapsed = now - acquired; // elapsed time in milliseconds  
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));  
    return daysSinceAcquired;  
  }  
```  
