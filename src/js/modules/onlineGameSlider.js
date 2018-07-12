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
      draggable: true,
      autoplay:true,
      autoplaySpeed:1500,
      responsive: [
        // {
        //   breakpoint: 1024,
        //   settings: {
        //     infinite: true,
        //     arrows: true,
        //     vertical: true,
        //     slidesToShow: 2,
        //     slidesToScroll: 1,
        //     verticalSwiping: true,
        //     centerMode: true,
        //     mobileFirst: true,
        //     draggable: true,
        //     autoplay:true,
        //     autoplaySpeed:1500,
        //   }
        // },
        {
          breakpoint: 768,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            verticalSwiping: true,
            vertical: true,
            arrows: true,
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
            centerMode: false,
            variableWidth: true,
            mobileFirst: true,
          }
        },
      ]
    });

    // $(window).resize(function(){
    //   $('.game-slider').slick('resize');
    // });

    // $(window).on('orientationchange', function() {
    //   $('.game-slider').slick('reinit');
    // });
  }
};

export default onlineGameSlider;