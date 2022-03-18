{/* <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>; */}

{/* <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>; */}


const swiper = new Swiper('.price__swiper', {
    spaceBetween: 15,
    slidesPerView: "auto",
    pagination: {
      bulletClass: "swiper-bullet",
      bulletActiveClass: "swiper-bullet_active",
      el: ".swiper-bullets",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        centeredSlides: true,
      },
      // when window width is >= 480px
      769: {
        spaceBetween: 25
      },
      // when window width is >= 640px
      993: {
        spaceBetween: 15
      }
    }  
  });

const priceSwiper1 = new Swiper('.work__swiper1', {
    spaceBetween: 25,
    slidesPerView: "1",
    pagination: {
      bulletClass: "work__pagination-bullet1",
      bulletActiveClass: "work__pagination-bullet_active1",
      el: ".work__pagination-bullets1",
      clickable: true,
    },
    navigation: {
      nextEl: '.work__slider-arrow_next1',
      prevEl: '.work__slider-arrow_prev1',
      disabledClass: 'work__slider-arrow_disabled1',
    },
  });

const priceSwiper2 = new Swiper('.work__swiper2', {
    spaceBetween: 25,
    slidesPerView: "1",
    pagination: {
      bulletClass: "work__pagination-bullet2",
      bulletActiveClass: "work__pagination-bullet_active2",
      el: ".work__pagination-bullets2",
      clickable: true,
    },
    navigation: {
      nextEl: '.work__slider-arrow_next2',
      prevEl: '.work__slider-arrow_prev2',
      disabledClass: 'work__slider-arrow_disabled2',
    },
  });

const priceSwiper3 = new Swiper('.work__swiper3', {
    spaceBetween: 25,
    slidesPerView: "1",
    pagination: {
      bulletClass: "work__pagination-bullet3",
      bulletActiveClass: "work__pagination-bullet_active3",
      el: ".work__pagination-bullets3",
      clickable: true,
    },
    navigation: {
      nextEl: '.work__slider-arrow_next3',
      prevEl: '.work__slider-arrow_prev3',
      disabledClass: 'work__slider-arrow_disabled3',
    },
  });

const priceSwiper4 = new Swiper('.work__swiper4', {
    spaceBetween: 25,
    slidesPerView: "1",
    pagination: {
      bulletClass: "work__pagination-bullet4",
      bulletActiveClass: "work__pagination-bullet_active4",
      el: ".work__pagination-bullets4",
      clickable: true,
    },
    navigation: {
      nextEl: '.work__slider-arrow_next4',
      prevEl: '.work__slider-arrow_prev4',
      disabledClass: 'work__slider-arrow_disabled4',
    },
  });

const priceSwiper5 = new Swiper('.work__swiper5', {
    spaceBetween: 25,
    slidesPerView: "1",
    pagination: {
      bulletClass: "work__pagination-bullet5",
      bulletActiveClass: "work__pagination-bullet_active5",
      el: ".work__pagination-bullets5",
      clickable: true,
    },
    navigation: {
      nextEl: '.work__slider-arrow_next5',
      prevEl: '.work__slider-arrow_prev5',
      disabledClass: 'work__slider-arrow_disabled5',
    },
  });