//swiperjs
var swiper1 = new Swiper(".swiper1", {
    pagination: {
      el: ".swiper-pagination1",
      clickable: true
    },
  
    // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
  
  //Paginations
  slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  }
  });
  //
  
  //card slider
  var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
  
    navigation: {
      nextEl: ".right-arrow",
      prevEl: ".left-arrow",
    },
  });
  
  //f-slider
  var swiper3 = new Swiper(".swiper3", {
    cssMode: true,
    loop: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination3",
      clickable: true,
    },
  });
  //swiper js end
  