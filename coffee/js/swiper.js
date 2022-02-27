{/* <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>; */}

{/* <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>; */}


const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    // cssMode: true,
    // slidesPerGroup: 3,
    // loop: true,
    navigation: {
      nextEl: '.arrow__btn-next',
      prevEl: '.arrow__btn-prev',
      disabledClass: 'swiper-button-disabled',
    },
    // breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 1,
    //     spaceBetween: 20
    //   },
    //   // when window width is >= 480px
    //   769: {
    //     slidesPerView: 2,
    //     spaceBetween: 40
    //   },
    //   // when window width is >= 640px
    //   1200: {
    //     slidesPerView: 3,
    //     spaceBetween: 60
    //   }
    // }
  });