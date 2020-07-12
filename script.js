const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');

hamburger.addEventListener('click', e => {
  e.preventDefault();
  document.body.classList.add('body--with_opened_menu');
})

// closeBtn.addEventListener('click', e => {
//   document.body.classList.remove('body--with_opened_menu');
// })

menu.addEventListener('click', e => {
  if(!e.target.classList.contains('menu__link')) {
    document.body.classList.remove('body--with_opened_menu');
  }
})