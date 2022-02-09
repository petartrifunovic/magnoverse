'use strict';

//Initialize Swiper
const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 100,
    slideShadows: false,
  },
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
});

export default swiper;