// $('#owl-carousel').owlCarousel({
//     loop: true,
//     margin: 30,
//     dots: true,
//     nav: true,
//     items: 2,
// })


$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });