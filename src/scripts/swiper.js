import Swiper from "swiper/bundle";

export const mySwiper = new Swiper(".swiper-container", {
    // init: false,
    loop: true,
    grabCursor: true,
    loopedSlides: 1,
    autoHeight: true,
    slidesPerGroup: 1,
    // centeredSlides: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
  