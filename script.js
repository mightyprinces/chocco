// MENU BURGER

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


// REVIEWS SLIDER

const findBlockByAlias = alias => {
  return $('.reviews__item').filter((ndx, item) => {
    return $(item).attr('data-linked-with') === alias;
  })
}

$('.interactive-avatar__link').click(e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr('data-open');
  const itemToShow = findBlockByAlias(target);
  const curItem = $this.closest('.interactive-avatar');

  itemToShow.addClass('active').siblings().removeClass('active');
  curItem.addClass('interactive-avatar--active').siblings().removeClass('interactive-avatar--active');
})