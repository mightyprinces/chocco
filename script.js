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

// ACCORDION

const openItem = item => {
  const container = item.closest('.team__item');
  const contentBlock = container.find('.team__content');
  const textBlock = contentBlock.find('.team__content-block');
  const reqHeight = textBlock.height();

  container.addClass('active');
  contentBlock.height(reqHeight);
}

const closeEveryItem = container => {
  const items = container.find('.team__content');
  const itemContainer = container.find('.team__item');

  itemContainer.removeClass('active');
  items.height(0);
}

$('.team__title').click(e => {
  const $this = $(e.currentTarget);
  const container = $this.closest('.team');
  const elemContainer = $this.closest('.team__item');

  if (elemContainer.hasClass('active')) {
    closeEveryItem(container);
  } else {
    closeEveryItem(container);
    openItem($this);
  };
});

// SLIDER

$(document).ready(function(){
  const slider = $('.slider__list').bxSlider({
    pager: false,
    controls: false
  });

  $('.slider__arrow--prev').click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
  });

  $('.slider__arrow--next').click(e => {
    e.preventDefault();
    slider.goToNextSlide();
  });
});