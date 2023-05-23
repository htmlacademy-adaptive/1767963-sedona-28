const menuButton =  document.querySelector('.main-nav__toggle');
const mobiMenuFirst = document.querySelector('.site-list');
const mobiMenuSecond = document.querySelector('.user-list');
let noJs = Array.from(document.querySelectorAll('.main-nav--nojs'));

for (let i = 0; i < 2; i++) {
  noJs[i].classList.remove('main-nav--nojs');
}

menuButton.addEventListener('click', function(){
  mobiMenuFirst.classList.toggle('main-nav__list--open');
  mobiMenuSecond.classList.toggle('main-nav__list--open');
  menuButton.classList.toggle('main-nav__toggle--active');
});
