---  
updated: 2022-06-20 19:38  
created: 2022-05-29 00:00  
title: CSS Vertical Centering With Absolute Position and Transform  
  
aliases:  
  - CSS Vertical Centering With Absolute Position and Transform  
share: true  
website: en/notes/programming  
---  
  
# CSS Vertical Centering With Absolute Position and Transform  
  
الحالة:: #ملاحظة_مؤرشفة  
المعرفة:: [CSS](CSS)  
المصدر:: [Build Responsive Real-World Websites with HTML and CSS](Build%20Responsive%20Real-World%20Websites%20with%20HTML%20and%20CSS)  
  
---  
  
- Set parent container position to **relative**.  
- Set child element position to **absolute**.  
- Set child element position in relation to parent element.  
- Use `transform: translate()` to set its position in relation to itself.  
  
```html  
<div class="carousel">  
  <img src="maria.jpg" alt="Maria de Almeida" />  
  <blockquote class="testimonial">  
    <p class="testimonial-text">  
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia nesciunt aliquid ex atque quibusdam. Rerum  
      officia unde suscipit quo sunt hic illo fugit."  
    </p>  
    <p class="testimonial-author">Maria de Almeida</p>  
    <p class="testimonial-job">Senior Product Manager at EDP Comercial</p>  
  </blockquote>  
  <button class="btn btn--left">  
    <svg xmlns="http://www.w3.org/2000/svg" class="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />  
    </svg>  
  </button>  
  <button class="btn btn--right">  
    <svg xmlns="http://www.w3.org/2000/svg" class="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />  
    </svg>  
  </button>  
  <div class="dots">  
    <button class="dot dot--fill">&nbsp;</button>  
    <button class="dot">&nbsp;</button>  
    <button class="dot">&nbsp;</button>  
    <button class="dot">&nbsp;</button>  
  </div>  
</div>  
```  
  
```css  
.btn {  
  background-color: #fff;  
  border: none;  
  height: 40px;  
  width: 40px;  
  border-radius: 50%;  
  position: absolute;  
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);  
  cursor: pointer;  
  display: flex;  
  align-items: center;  
  justify-content: center;  
}  
  
.btn--left {  
  /* In relation to PARENT ELEMENT */  
  left: 0;  
  top: 50%;  
  /* In relation to ELEMENT ITSELF */  
  transform: translate(-50%, -50%);  
}  
  
.btn--right {  
  right: 0;  
  top: 50%;  
  transform: translate(50%, -50%);  
}  
  
.btn-icon {  
  height: 24px;  
  width: 24px;  
  stroke: #087f5b;  
}  
  
.dots {  
  position: absolute;  
  left: 50%;  
  bottom: 0;  
  transform: translate(-50%, 32px);  
  display: flex;  
  gap: 12px;  
}  
  
.dot {  
  height: 12px;  
  width: 12px;  
  background-color: #fff;  
  border: 2px solid #087f5b;  
  border-radius: 50%;  
  cursor: pointer;  
}  
  
.dot--fill {  
  background-color: #087f5b;  
}  
```  
