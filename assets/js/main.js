$(document).ready(function(){
    $('.bnr_slider').slick({
      dots: true,
      infinite : false,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });
    $('.sec_2_slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
          {
          breakpoint: 1599,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 4
          }
          },
          {
          breakpoint: 1199,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3
          }
          },
          {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
      ]
      });

    $(window).scroll(function() {
          if ($(document).scrollTop() > 50) {
          $(".site_header").addClass("stick_head");
          } else {
          $(".site_header").removeClass("stick_head");
          }
      });
});