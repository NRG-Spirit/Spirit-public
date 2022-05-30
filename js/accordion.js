const btnList = document.querySelectorAll('.faq__accordionbtn');
for (i = 0; i < btnList.length; i++) {
   btnList[i].addEventListener('click', 'touch', accordion);
}
function accordion() {
   for (i = 0; i < btnList.length; i++) {
      if (btnList[i] != this) {
         btnList[i].classList.remove('accordion-open');
         btnList[i].nextElementSibling.classList.remove('accordion-open');
      }
   }
   this.classList.toggle('accordion-open');
   this.nextElementSibling.classList.toggle('accordion-open');
}
