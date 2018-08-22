let tableLayoutSlider = {
  slider: function () {
    let windowWidth = $(window).width(); // get current resolution screen
    if(windowWidth < 769) {
      $('.table-layout__mobile-marker').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.table-layout__mobile-slider'
      });
      $('.table-layout__mobile-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        mobileFirst: true,
        arrows: false,
        dots: false,
        variableWidth: true,
        focusOnSelect: true,
        asNavFor: '.table-layout__mobile-marker',
      });
    }
  }
};

export default tableLayoutSlider;