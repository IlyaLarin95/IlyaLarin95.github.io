{/* <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>; */}

{/* <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>; */}


const swiper = new Swiper('.best-sellerSwiper', {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-arrow_next',
      prevEl: '.swiper-arrow_prev',
      disabledClass: 'swiper-button-disabled',
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
        centeredSlides: true,
      },
      550: {
        slidesPerView: 2,
        centeredSlides: false
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      }
    }
  });

const cardSwiper = new Swiper('.item-cardSwiper', {
    slidesPerView: "auto",
    spaceBetween: 30,
    // loop: true,
    navigation: {
      nextEl: '.arrow_next',
      prevEl: '.arrow_prev',
      disabledClass: 'swiper-arrow-disabled',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        centeredSlides: true,
      },
      578: {
        centeredSlides: false,
      },
    }
  });

const guideSwiper = new Swiper('.guide-swiper', {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
});
