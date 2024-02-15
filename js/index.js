/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
var body = document.body;
var header = document.querySelector('.header');
var navList = document.querySelector('.nav__list');
var burger = document.querySelector('.burger');
function setClassesState(state) {
  burger.classList[state]('burger_active');
  navList.classList[state]('nav__list_active');
  body.classList[state]('body_fixed');
}
function openBurger(e) {
  if (e.target.classList.contains('burger') || e.target.classList.contains('burger__line')) {
    setClassesState('toggle');
  }
}
function closeBurger(e) {
  if (e.target.tagName === 'LI' || e.target.tagName === 'A') {
    setClassesState('remove');
  }
}
header.addEventListener('click', function (e) {
  openBurger(e);
  closeBurger(e);
});
function checkClickOutBurger(e) {
  if (!e.target.closest('.nav__list') && !e.target.closest('.burger')) {
    setClassesState('remove');
  }
  ;
}
body.addEventListener('click', function (e) {
  checkClickOutBurger(e);
});
var slider = document.querySelector('.pets__images');
var buttonLeft = document.querySelector('.left');
var buttonRight = document.querySelector('.right');
var isAnimateFinished = false;
buttonLeft.addEventListener('click', moveLeft);
buttonRight.addEventListener('click', moveRight);
function controlAnimation(arr, action, animationClass) {
  arr.map(function (e) {
    e.classList[action](animationClass);
  });
}
function moveLeft() {
  if (isAnimateFinished) return;
  isAnimateFinished = true;
  var sliderChildren = slider.children;
  var sliderChildrenArr = Array.from(sliderChildren);
  var firstSlide = sliderChildren[0];
  var savedSlide = firstSlide.cloneNode(true);
  controlAnimation(sliderChildrenArr, 'add', 'pets__arrow_moveLeftAnimation');
  setTimeout(function () {
    slider.removeChild(firstSlide);
    controlAnimation(sliderChildrenArr, 'remove', 'pets__arrow_moveLeftAnimation');
  }, 510);
  setTimeout(function () {
    slider.appendChild(savedSlide);
    isAnimateFinished = false;
  }, 610);
}
function moveRight() {
  if (isAnimateFinished) return;
  isAnimateFinished = true;
  var sliderChildren = slider.children;
  var sliderChildrenArr = Array.from(sliderChildren);
  var lastSlide = sliderChildren[sliderChildren.length - 1];
  var savedSlide = lastSlide.cloneNode(true);
  slider.prepend(savedSlide);
  slider.removeChild(lastSlide);
  sliderChildrenArr = Array.from(sliderChildren);
  controlAnimation(sliderChildrenArr, 'add', 'pets__arrow_moveRightAnimation');
  setTimeout(function () {
    controlAnimation(sliderChildrenArr, 'remove', 'pets__arrow_moveRightAnimation');
    isAnimateFinished = false;
  }, 610);
}
/******/ })()
;