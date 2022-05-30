const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
     dynamicBullets: true,
   },
 
   navigation: {
    nextEl: '.swiper-btnfwd',
    prevEl: '.swiper-btnback',
  },

  mousewheel:{
    sensitivity:1, /* листание колесом мышки */
  },
 slidesPerView:"auto",/* количество слайдов на странице */
 spaceBetween: 30,/* отступы между слайдами */
 centeredSlides:true,/* первый слайд по центру */
 });

