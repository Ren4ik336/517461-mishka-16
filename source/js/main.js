// mobile menu
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
//popup
var popUp = document.querySelector(".modal");
var backLink =document.querySelector(".modal");
var addButton = document.querySelector(".top-product__button");
var cartButton = document.querySelectorAll(".product__add-cart");
var index;
var element;
//slider
var slide = document.querySelectorAll(".slider__inner");
var btnPrev = document.querySelector(".slider__btn--prev");
var btnNext = document.querySelector(".slider__btn--next");
var i;

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

for (index = 0; index < cartButton.length; index ++) {
  element = cartButton[index];
  element.addEventListener("click", function(evt) {
  evt.preventDefault();
  popUp.classList.add("modal--shown");
});
}

// btnPrev.addEventListener("click", function() {
//   for (i = 0; i < slide.length; i++)
//   {
//     if (slide[i].classList.contains("slider__inner--shown"))
//     {
//       slide[i].classList.remove("slider__inner--shown");
//       if (i < slide.length - 1)
//       {
//         slide[i + 1].classList.add("slider__inner--shown")
//       } else {
//         slide[0].classList.add("slider__inner--shown");
//       }
//       break;
//     }
//   }
// });

// btnNext.addEventListener("click", function() {
//   for (i = 0; i < slide.length; i++)
//   {
//     if (slide[i].classList.contains("slider__inner--shown"))
//     {
//       slide[i].classList.remove("slider__inner--shown");
//       if (i < slide.length - 1)
//       {
//         slide[i + 1].classList.add("slider__inner--shown")
//       } else {
//         slide[0].classList.add("slider__inner--shown");
//       }
//       break;
//     }
//   }
// });

addButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popUp.classList.add("modal--shown");
});
