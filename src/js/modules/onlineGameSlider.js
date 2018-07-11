let onlineGameSlider = {
  gameSlider: function () {

    // var windowWidth = $(window).width();

    // // 2- For all devices under or at 768px, use horizontal orientation
    // if(windowWidth <= 768) {
    //   $('.game-slider').slick({
    //     vertical: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     verticalSwiping: false,
    //     arrows: false,
    //     // centerMode: true,
    //   });
    // }
    // // 3- For all devices over 768px, use vertical orientation
    // else {
    //   $('.game-slider').slick({
    //     vertical: true,
    //     infinite: false,
    //     arrows: true,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     verticalSwiping: true,
    //     centerMode: true,
    //   });
    // }


    $('.game-slider').slick({
      infinite: true,
      arrows: true,
      vertical: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      verticalSwiping: true,
      centerMode: true,
      // mobileFirst: true,
      responsive: [
        {
          breakpoint: 980,
          settings: {
            infinite: true,
            arrows: true,
            vertical: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            verticalSwiping: true,
            centerMode: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            verticalSwiping: false,
            vertical: false,
            arrows: false,
            centerMode: true,
          }
        },
        {
          breakpoint: 320,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            verticalSwiping: false,
            vertical: false,
            arrows: false,
            centerMode: true,
          }
        },
      ]
    });
  }
};

export default onlineGameSlider;