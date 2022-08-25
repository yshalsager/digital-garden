---
title: CSS Values and Units
created: 2021-12-09 09:51
updated: 2021-12-09 09:51
share: true
website: en/notes/programming
---

## CSS Values and Units

### Numeric

```css
width: 80%;
height: 10em;
boarder-width: 5px;
animation-iteration-count: 3;
font-weight: 400;
font-size: 1.25rem;
transform: rotate(360deg);
animation-duration: 750ms;
```

### Length datatype

Used to specify sizing with two types of units: absolute and relative.

#### Absolute

- Fixed unit.
- Not affected by values in relative elements.
- Examples:
  - px: Pixel
  - cm: Centimeter
  - mm: Millimeter
  - in: Inch
  - pc: Pica (equal to 1/6 of an inch)
  - pt: point (equal to 1/72 of an inch)
  - width: 1000px;

#### Relative

- Relational sizing, not fixed.
- Dependent upon values declared in parent and ancestor elements.
- Example: em, rem, vw, vh.
  - em: Represents inherited font-size of element.
  - rem: Represents the font-size of the root element.
  - 1vw = 1% of the width of the viewport.
  - 1vh = 1% of the height of the viewport.
  - vmin: Equal to the smaller of vw and vh.
  - vmax: Equal to the larger of vw and vh.

### Unitless Values

- Numbers only:

```css
line-height: 1.25;
```

- Keywords:

```css
color: red;
```

### Function Values

```css
transform: rotate(90deg);
width: calc(80% - 20px);
background-image: url("image.png");
```
