let jackpotSlider = {
  slider: function () {
    var clock1 = $('.mega-moolah1').FlipClock(4141373, {
      clockFace: 'Counter',
      countdown: true,
      autoStart: true,
      callbacks: {
        stop: function() {
          setTimeout(function(){
            clock1.reset();
            clock1.setTime(4141373);
            clock1.start();
          },1000);
        }
      }
    });
    var clock2 = $('.mega-moolah2').FlipClock(4141373, {
      clockFace: 'Counter',
      autoStart: true,
      countdown: true,
      callbacks: {
        stop: function() {
          setTimeout(function(){
            clock2.reset();
            clock2.setTime(4141373);
            clock2.start();
          },1100);
        }
      }
    });

    var clock3 = $('.mega-fortune1').FlipClock(3721879, {
      clockFace: 'Counter',
      autoStart: true,
      countdown: true,
      callbacks: {
        stop: function() {
          setTimeout(function(){
            clock3.reset();
            clock3.setTime(3721879);
            clock3.start();
          },1200);
        }
      }
    });

    var clock4 = $('.mega-fortune2').FlipClock(3721879, {
      clockFace: 'Counter',
      autoStart: true,
      countdown: true,
      callbacks: {
        stop: function() {
          setTimeout(function(){
            clock4.reset();
            clock4.setTime(3721879);
            clock4.start();
          },1300);
        }
      }
    });

    var clock5 = $('.golden-seven1').FlipClock(2198218, {
      clockFace: 'Counter',
      autoStart: true,
      countdown: true,
      callbacks: {
        stop: function() {
          setTimeout(function(){
            clock5.reset();
            clock5.setTime(2198218);
            clock5.start();
          },1400);
        }
      }
    });

    var clock6 = $('.golden-seven2').FlipClock(2198218, {
      clockFace: 'Counter',
      autoStart: true,
      countdown: true,
      callbacks: {
        stop: function() {
          setTimeout(function(){
            clock6.reset();
            clock6.setTime(2198218);
            clock6.start();
          },1500);
        }
      }
    });

    $('.jackpot-area').slick({
     dots: true,
     arrows: false,
     slidesToShow: 3,
     slidesToScroll: 1,
     verticalSwiping: false,
     centerMode: true,
     mobileFirst: true,
     draggable: true,
     variableWidth: true,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: false,
        }
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: false,
        }
      },
     ]
    });

    $('.slick-center').prev('.slick-active').find('.jackpot-area--item').addClass('jackpot-area--item-active');

    // On swipe event
    $('.jackpot-area').on('swipe', function(event, slick, direction){
      $('.jackpot-area--item').removeClass('jackpot-area--item-active');
      $('.slick-center').prev('.slick-active').find('.jackpot-area--item').addClass('jackpot-area--item-active');
    });

    // On edge hit
    $('.jackpot-area').on('edge', function(event, slick, direction){
      console.log('edge was hit');
    });


    // On before slide change
    $('.jackpot-area').on('afterChange', function(event, slick, currentSlide, nextSlide){
      $('.jackpot-area--item').removeClass('jackpot-area--item-active');
      $('.slick-center').prev('.slick-active').find('.jackpot-area--item').addClass('jackpot-area--item-active');
    });

  }
};

export default jackpotSlider;