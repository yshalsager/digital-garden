---  
title: Toggle modal with JavaScript and CSS  
created: 2022-06-23 12:00  
updated: 2022-06-23 12:06  
aliases:  
  - Toggle modal with JavaScript and CSS  
share: true  
website: en/notes/programming  
---  
  
المعرفة:: [JavaScript](JavaScript), [CSS](CSS)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert)  
  
---  
  
- Modal code is present in HTML with CSS class set to `hidden`.  
- `hidden` class sets the `visibility` to `hidden` and `opacity` to `0`.  
- With JavaScript, we set `openModal` and `closeModal` to add or remove `hidden` class to modal and overlay.  
- Then, we set click event listener to open the modal and another one to close it for close button.  
- We can also add another event handler for escape key pressing.  
  
```html  
    <section class="section section--sign-up">  
      <div class="section__title">  
        <h3 class="section__header">  
          The best day to join Bankist was one year ago. The second best is  
          today!  
        </h3>  
      </div>  
      <button class="btn btn--show-modal">Open your free account today!</button>  
    </section>  
  
    <div class="modal hidden">  
      <button class="btn--close-modal">&times;</button>  
      <h2 class="modal__header">  
        Open your bank account <br />  
        in just <span class="highlight">5 minutes</span>  
      </h2>  
      <form class="modal__form">  
        <label>First Name</label>  
        <input type="text" />  
        <label>Last Name</label>  
        <input type="text" />  
        <label>Email Address</label>  
        <input type="email" />  
        <button class="btn">Next step &rarr;</button>  
      </form>  
    </div>  
    <div class="overlay hidden"></div>  
```  
  
```css  
/* MODAL WINDOW */  
.modal {  
  position: fixed;  
  top: 50%;  
  left: 50%;  
  transform: translate(-50%, -50%);  
  max-width: 60rem;  
  background-color: #f3f3f3;  
  padding: 5rem 6rem;  
  box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.3);  
  z-index: 1000;  
  transition: all 0.5s;  
}  
  
.overlay {  
  position: fixed;  
  top: 0;  
  left: 0;  
  width: 100%;  
  height: 100%;  
  background-color: rgba(0, 0, 0, 0.5);  
  backdrop-filter: blur(4px);  
  z-index: 100;  
  transition: all 0.5s;  
}  
  
.modal__header {  
  font-size: 3.25rem;  
  margin-bottom: 4.5rem;  
  line-height: 1.5;  
}  
  
.modal__form {  
  margin: 0 3rem;  
  display: grid;  
  grid-template-columns: 1fr 2fr;  
  align-items: center;  
  gap: 2.5rem;  
}  
  
.modal__form label {  
  font-size: 1.7rem;  
  font-weight: 500;  
}  
  
.modal__form input {  
  font-size: 1.7rem;  
  padding: 1rem 1.5rem;  
  border: 1px solid #ddd;  
  border-radius: 0.5rem;  
}  
  
.modal__form button {  
  grid-column: 1 / span 2;  
  justify-self: center;  
  margin-top: 1rem;  
}  
  
.btn--close-modal {  
  font-family: inherit;  
  color: inherit;  
  position: absolute;  
  top: 0.5rem;  
  right: 2rem;  
  font-size: 4rem;  
  cursor: pointer;  
  border: none;  
  background: none;  
}  
  
.hidden {  
  visibility: hidden;  
  opacity: 0;  
}  
```  
  
```js  
'use strict';  
  
///////////////////////////////////////  
// Modal window  
  
const modal = document.querySelector('.modal');  
const overlay = document.querySelector('.overlay');  
const btnCloseModal = document.querySelector('.btn--close-modal');  
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');  
  
const openModal = function (e) {  
  e.preventDefault(); // To stop anchor # href form making the page jump to top  
  modal.classList.remove('hidden');  
  overlay.classList.remove('hidden');  
};  
  
const closeModal = function () {  
  modal.classList.add('hidden');  
  overlay.classList.add('hidden');  
};  
  
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));  
  
btnCloseModal.addEventListener('click', closeModal);  
overlay.addEventListener('click', closeModal);  
  
document.addEventListener('keydown', function (e) {  
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {  
    closeModal();  
  }  
});  
```  
