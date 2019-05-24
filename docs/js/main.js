// Выпадающее меню для мобильной версии
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");
navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

//Попап выбора размера
var popUp = document.querySelector(".modal");
var overLayClick = document.querySelector(".modal__overlay");
var cartButton = document.querySelectorAll(".button--order");
var index;
var element;

for (index = 0; index < cartButton.length; index ++) {
  element = cartButton[index];
  element.addEventListener("click", function(evt) {
    evt.preventDefault();
    popUp.classList.add("modal--shown");
  });
}

if (overLayClick) {
  overLayClick.addEventListener("click", function() {
    popUp.classList.remove("modal--shown");
  });
}

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode == 27) {
    popUp.classList.remove("modal--shown");
  }
});
