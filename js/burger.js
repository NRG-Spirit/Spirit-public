const burgerbtn = document.querySelector('.header__burger');
const burgermenu = document.querySelector('.header__menu'); 
burgerbtn.onclick = () => {
   burgerbtn.classList.toggle('burger-active');
   burgermenu.classList.toggle('menu-active');
}
window.addEventListener('click', e => { // при клике в любом месте окна браузера
   const target = e.target // находим элемент, на котором был клик
   if (!target.closest('.header__burger') && !target.closest('.header__menu')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
      burgermenu.classList.remove('menu-active') // то закрываем окно навигации, удаляя активный класс
      burgerbtn.classList.remove('burger-active');
   }
})