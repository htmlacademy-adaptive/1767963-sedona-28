const menuButton =  document.querySelector('.main-nav__toggle');
const mobiMenuFirst = document.querySelector('.site-list');
const mobiMenuSecond = document.querySelector('.user-list');

menuButton.addEventListener('click', function(){
  mobiMenuFirst.classList.toggle('main-nav__list--open');
  mobiMenuSecond.classList.toggle('main-nav__list--open');
  menuButton.classList.toggle('main-nav__toggle--active');
});
