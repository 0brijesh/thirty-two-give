// header js start
$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
});
// header js end
// mobile menu js start
$(document).ready(function () {
  $(".mobile-menu-ico").click(function () {
    $(".mobile-menu-wrap").addClass("mobile-menu-wrap-show");
  });

  $(".close-ico").click(function () {
    $(".mobile-menu-wrap").removeClass("mobile-menu-wrap-show");
  });
});

$(document).mouseup(function (e) {
  var popup = $(".mobile-menu-wrap");
  if (
    !$(".mobile-menu-ico").is(e.target) &&
    !popup.is(e.target) &&
    popup.has(e.target).length == 0
  ) {
    popup.removeClass("mobile-menu-wrap-show");
  }
});
$(document).ready(function () {
  $(".list-menu .link").click(function () {
    $(".mobile-menu-wrap").removeClass("mobile-menu-wrap-show");
  });
});
// mobile menu js end
// AOS start
AOS.init();
// AOS end
// swiper js start
var swiper = new Swiper(".review-swiper", {
  slidesPerView: 3,
  spaceBetween: 86,
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 86,
    },
  },
});
// in-the-news-swiper
var swiper = new Swiper(".in-the-news-swiper", {
  slidesPerView: 3,
  spaceBetween: 86,
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 8,
    },
    415: {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 2.8,
      spaceBetween: 30,
    },
    1800: {
      slidesPerView: 3.4,
      spaceBetween: 30,
    },
  },
});
// swiper js end
// 
