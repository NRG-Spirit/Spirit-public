const animElements = document.querySelectorAll('.animated'); /* получаем все анимированные элементы */
if (animElements.length > 0) {
   window.addEventListener('scroll', animation);
   function animation() {
      for (let i = 0; i < animElements.length; i++) {
         const animElement = animElements[i];
         const animElementHeight = animElement.offsetHeight;
         const animElementOffset = offset(animElement);
         const animStar = 4;
         let animElementPoint = window.innerHeight - animElementHeight / animStar;
         if (animElementHeight > window.innerHeight) {
            animElementPoint = window.innerHeight - window.innerHeight / animStar;
         }
         if ((scrollY > animElementOffset - animElementPoint) && scrollY < (animElementOffset + animElementHeight)) {
            animElement.classList.add('animated-active');
         } else {
            animElement.classList.remove('animated-active');
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return rect.top + scrollTop
   }
   animation()
}