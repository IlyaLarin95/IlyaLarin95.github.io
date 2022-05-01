{/* <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>; */}

{/* <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>; */}


const popularSwiper = new Swiper('.popular__swiper', {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: '.popular__swiper-arrow_next',
      prevEl: '.popular__swiper-arrow_prev',
      disabledClass: 'swiper-arrow_disabled',
    },
    scrollbar: {
      el: ".popular__swiper-scrollbar",
      dragSize: 'auto',
      draggable: true,
    },
  });

const reviewsSwiper = new Swiper('.reviews__swiper', {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: '.reviews__swiper-arrow_next',
      prevEl: '.reviews__swiper-arrow_prev',
      disabledClass: 'swiper-arrow_disabled',
    },
    scrollbar: {
      el: ".reviews__swiper-scrollbar",
      dragSize: 'auto',
      draggable: true,
    },
  });

const calendarSwiper = new Swiper('.trip-calendar__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.trip-calendar__swiper-arrow_next',
      prevEl: '.trip-calendar__swiper-arrow_prev',
      disabledClass: 'trip-calendar__swiper-arrow_disabled',
    },
    effect: 'creative',
    creativeEffect: {
      prev: {
        // will set `translateZ(-400px)` on previous slides
        translate: [0, 0, -50],
      },
      next: {
        // will set `translateX(100%)` on next slides
        translate: ['100%', 0, 0],
        opacity: .5,
      },
    },
  });

const tripRouteSwiper = new Swiper('.trip-route__swiper', {
  slidesPerView: "auto",
  spaceBetween: 20,
  navigation: {
    nextEl: '.trip-route__swiper-arrow_next',
    prevEl: '.trip-route__swiper-arrow_prev',
    disabledClass: 'swiper-arrow_disabled',
  },
  scrollbar: {
    el: ".trip-route__swiper-scrollbar",
    dragSize: 'auto',
    draggable: true,
  },
});