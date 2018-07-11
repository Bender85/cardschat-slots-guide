let jackpotSlider = {
  slider: function () {
    $('.jackpot-area').slick({
     dots: true,
    //  infinite: true,
     arrows: false,
     slidesToShow: 3,
     slidesToScroll: 1,
     verticalSwiping: false,
     centerMode: true,
     mobileFirst: true,
     draggable: true,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          // mobileFirst: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          // mobileFirst: true,
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          // mobileFirst: true,
        }
      },
     ]
    });

    // console.log($('.slick-center').prev('.slick-active').find('.jackpot-area--item'));
    $('.slick-center').prev('.slick-active').find('.jackpot-area--item').addClass('jackpot-area--item-active');

    // On swipe event
    $('.jackpot-area').on('swipe', function(event, slick, direction){
      // console.log(direction);
      $('.jackpot-area--item').removeClass('jackpot-area--item-active');
      $('.slick-center').prev('.slick-active').find('.jackpot-area--item').addClass('jackpot-area--item-active');
      // left
    });

    // On edge hit
    $('.jackpot-area').on('edge', function(event, slick, direction){
      // console.log('edge was hit');
    });

    // On before slide change
    $('.jackpot-area').on('afterChange', function(event, slick, currentSlide, nextSlide){
      // console.log(nextSlide);
      $('.jackpot-area--item').removeClass('jackpot-area--item-active');
      $('.slick-center').prev('.slick-active').find('.jackpot-area--item').addClass('jackpot-area--item-active');
    });
  }
};

export default jackpotSlider;