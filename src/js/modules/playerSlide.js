let playerSlide = {
  gameSlider: function () {
    let windowWidth = $(window).width(); // get current resolution screen
    if(windowWidth < 768) {
      $('.players-info-pointer').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.players-info'
      });
      $('.players-info').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
        dots: false,
        variableWidth: true,
        focusOnSelect: true,
        asNavFor: '.players-info-pointer',
      });
    }
  }
};

export default playerSlide;