var swiper = new Swiper(".mySwiper", {
  // autoplay: {
  //   delay: 5000,
  // },
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  direction: "horizontal",
  pagination: {
    el: '.swiper-pagination-news',
    clickable: true},
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  }
});

let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
menuToggle.onclick = function () {
  header.classList.toggle('active');
}

var swiper = new Swiper(".EventSlider", {
  spaceBetween: 500,
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
