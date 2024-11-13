---
title: JavaScript Intersection Observer API
created: 2022-06-29 18:16:00
updated: 2022-06-29 20:33:00
aliases:
  - JavaScript Intersection Observer API
share: true
cssclass: ltr
website: en/notes/programming
---

المعرفة:: [[JavaScript|JavaScript]]
الحالة:: #ملاحظة/مؤرشفة
المراجع:: [[./The Complete JavaScript Course 2022 From Zero to Expert|The Complete JavaScript Course 2022 From Zero to Expert]], <https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API>

---

> The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's view port.

- This API allows our code to observe changes to the way that a certain target element intersects another element, or the way it intersects the view port.

## Usage of Intersection

Intersection information is needed for many reasons, such as:

- Lazy-loading of images or other content as a page is scrolled.
- Implementing "infinite scrolling" web sites, where more and more content is loaded and rendered as you scroll, so that the user doesn't have to flip through pages.
- Reporting of visibility of advertisements in order to calculate ad revenues.
- Deciding whether or not to perform tasks or animation processes based on whether or not the user will see the result.

## Intersection Observer API Options

- `root`: The element that the target is intersecting.
  > The element that is used as the view port for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser view port if not specified or if `null`.

- `rootMargin`: Margin around the root.
  > Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros.

- `threshold`: The percentage of intersection at which the observer callback will be called. It can be a single value or an array.
  - Setting one of threshold values to 0 means that the callback will trigger each time that the target element moves **completely out of the view**, and also as soon as it **enters the view**.
  - A threshold of **1.0** means that when **100**% of the target is visible within the element specified by the `root` option.

## The callback function

A function which is called when the percentage of the target element is visible crosses a threshold. The callback receives as input two parameters:

- `entries`: An array of `IntersectionObserverEntry` objects, each representing one threshold which was crossed, either becoming more or less visible than the percentage specified by that threshold.
- `observer`: The `IntersectionObserver` for which the callback is being invoked.

## How to use it?

- Define a callback function that will be triggered once the intersection happens.
- Define an options object that specifies
- Create a new `IntersectionObserver` object and pass the callback and options to the `IntersectionObserver`.
- Start observing the intersection of a certain element.
- To stop observing an element `observer.unobserve(element)` can be used.

## Examples

```js
const section1 = document.querySelector('#section--1');

const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};
const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
```

### Sticky Navigation bar

![[./JavaScript Sticky Navigation bar#Using Intersection Observer API|, JavaScript Sticky Navigation bar > Using Intersection Observer API]]

### Reveal Sections

```css
.section--hidden {
  opacity: 0;
  transform: translateY(8rem);
}
```

```js
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
```

### Lazy-loading Images

- Setting the image source in HTML to low resolution can help speeding up pages loading dramatically but it doesn't make user experience so appealing.
- So, we can use JavaScript to replace the low res image with the real one once the user scrolls to that image.
- We can also set an event listener of load event to remove the blur CSS only once the real image has been fully loaded.

```html
<img
  src="img/digital-lazy.jpg"
  data-src="img/digital.jpg"
  alt="Computer"
  class="features__img lazy-img"
/>
```

```css
.lazy-img {
  filter: blur(20px);
}
```

```js
// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));
```
