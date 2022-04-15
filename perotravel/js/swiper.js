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