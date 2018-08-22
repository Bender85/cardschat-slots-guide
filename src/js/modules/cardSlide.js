
let cardSlideBox = {
  cardSlide: function () {
    let windowWidth = $(window).width(); // get current resolution screen
    if(windowWidth < 768) {
      $('.expected__table--cards').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        arrows: true,
        dots: false,
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        prevArrow: '<i class="fas fa-chevron-left"></i>',
      });
    }
  }
};
export default cardSlideBox;