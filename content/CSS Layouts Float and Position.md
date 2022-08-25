---
title: CSS Layouts Float and Position
created: 2021-12-09 16:49
updated: 2021-12-09 17:47
share: true
website: en/notes/programming
---

# CSS Layouts Float and Position

```toc

```

## Float

The float property can be used to change the normal document flow by floating elements to the left or right side of its container. And when elements are floated, they are removed from the normal flow
though they remain part of the flow, resulting in the change of the positioning of the surrounding elements.

```css
img {
  float: left;
  margin: 10px;
}
```

- This will place the image to the left side of its container.

- The text in the following paragraphs will fill the available area and line up right to the edge of the image.

- We can add some margin in to create a little space between the image and the text.

- By putting the background color on the paragraphs, it's now easier to see that while the text is flowing around the image, the boundaries of the element is actually behind the image.

```css
p {
  background: #cdcdcd;
  padding: 10px;
}
```

- Floated elements are taken out of the normal flow, so the other elements move up to fill the space as if the floated element was no longer there.
- But the content of those elements will still make room for the floated element and fill up the remaining space around it.

### Clearing the Float

- You can clear the float using the `clear` property.
- The values for clear can be `left` or `right` to specifically clear a left or right float, but I like to use the third option, `both`, which clears left and right floats.

```css
.clear {
  clear: both; /* clears left and right floats */
}
```

**What if there's no element to apply the clear to?**

#### Option 1: overflow

Overflow is actually used to specify how to display content that doesn't fit in its container.

Different overflow values can be used to determine how to display the overflow of content.

- `hidden` clips the overflow of content, this may be used for decorative content, like an image, but isn't very useful for text since clipped content can't be accessed.
- `auto` adds a scroll bar, but only when there is overflowing content.
- `scroll` will always show a scroll bar on the X and Y axis, even when the content does not flow outside of its container.

```html
<div class="parent">
  <div class="floated">...</div>
  <div class="floated">...</div>
</div>
```

```css
.floated {
  float: left;
}

.parent {
  overflow: hidden;
  /* OR */
  overflow: auto;
}
```

#### Option 2: "clearfix" Hack

CSS snippet added to the parent of floated elements.

- This group of CSS styles need to be added to the parent of the floated elements.
- When adding the class to the HTML, do not include the colon after.
- This is a pseudo-element and is used in conjunction with another selector.
- This fix has been created and maintained by the developer community, and if you're curious, the history of this fix can be found in [this CSS tricks article](https://css-tricks.com/snippets/css/clear-fix/).

```html
<div class="clearfix">
	<p>floated element</p=>
	<p>floated element</p>
</div>
```

```css
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
```

#### Option 3: display

**Not currently supported in all browsers**.

- A newer way is in the works to solve the problem, using the display property with a value of flow-root.
- While this provides a solution, it is not currently supported by all modern browsers, and is still in the draft phase.

```html
<div class="parent">
  <div>floated element</div>
  <div>floated element</div>
</div>
```

```css
.parent {
  display: flow-root;
}
```

### `box-sizing`

#### `box-sizing: content-box`

- The initial box-sizing value is content-box.
- Width and height values change the size of the content-box.
- But when padding and border styles are added, they increase the size of the elements, adding to the width and height of the content box.
- Margin just adds the space around the element.

#### `box-sizing: border-box`

- Using the border-box value instead, we'll include the padding and border space within the dimensions set with the width and height properties.
- This will make the content-box smaller, but the overall element will maintain the same width and height values without any adjustments.

### The Box Model Fix

- This [[CSS Layouts Float and Position#box-sizing border-box]] is often referred to as the box model fix.
- To use this fix, add this CSS code snippet to all of your projects.
- More Resources: [1](https://www.paulirish.com/2012/box-sizing-border-box-ftw/), [2](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/).

```css
/* border box fix */
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
```

## Position

The position property can also be used to change the flow of the document. There are 5 different values. Each responsible for a different type of positioning.

- `static`: not positioned
- `relative`: relative to current position
- `absolute`: relative to containing element
- `fixed`: relative to the viewport
- `sticky`: relative to containing element and viewport

Position is also used with a combination of the top, right, bottom, and left properties.

```css
.box {
  position: relative;
  top: 10px;
  right: 10px;
}
```

## Z-Index

- Every time an HTML element is added within the same container, the elements are stacked in layers on the Z axis.
- An element with a higher stack level is rendered in front of the element with the lower stack level.
- Most of the time, it's hard to see how the elements stack on the Z index, unless they overlap each other.

### Default stacking order:

- HTML > floated > in-line > positioned.
- We can use the Z index property to change this, but it only works if the element has some type of position applied to it.

```html
<div class="block1">block 1</div>
<div class="block2">block 2</div>
<div class="float">
  <p>float</p>
  <span class="inline">inline</span>
</div>
<div class="position">position</div>
```

```css
/* root element */
html {
  background: gray;
}
/* viewport */
body {
  background: white;
  height: 400px;
}
.block1 {
  background: pink;
  position: relative;
  z-index: 100;
}
.block2 {
  background: red;
  margin: -60px 0 0 20px;
}
.float {
  background: lightblue;
  float: left;
  margin: -150px 0 0 100px;
}
.inline {
  background: blue;
  color: white;
  padding: 10px 40px 10px 10px;
}
.position {
  background: orange;
  position: relative;
  left: 180px;
  top: -165px;
  height: 110px;
}

/* shared div styles */
div {
  padding: 20px;
  width: 200px;
  height: 80px;
}
```
