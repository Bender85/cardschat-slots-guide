// 'use strict';

var main = {
  mainFunc: function () {
    var windowWidth = $(window).width();
    $(window).on('resize', function(){
      var win = $(this); //this = window
      // console.log(win);
      // if (win.height() >= 820) { /* ... */ }
      // if (win.width() >= 1280) { /* ... */ }
    });
    $('.tooltip').tooltipster({
      theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
      side: 'bottom',
      trigger:"custom",
      triggerOpen: {
        click: true,  // For mouse
        tap: true,    // For touch device
        mouseenter: true
      },
      triggerClose: {
        click: true,  // For mouse
        tap: true,   // For touch device
        mouseleave: true
      }
    });
    // tab
    $(".tab__container--content").hide();
    $(".tab__container--content:first").show();

    $('.tab').on('click', function() {
      $(".tab__container--content").hide();
      var activeTab = $(this).attr("rel");
      $("#"+activeTab).fadeIn();

      $('.tab').removeClass("recomendation__area--item-active");
      $(this).addClass("recomendation__area--item-active");
    });

    // window.onresize = function(event) {
    //   console.log(event);
    //   if(windowWidth <= 768) {
    //     $(".mobile__tab--content").hide();
    //     $(".mobile__tab--content:first").show();
    //   } else {
    //     $(".mobile__tab--content").show();
    //   }
    // };
    if(windowWidth < 768) {
      $(".mobile__tab--content").hide();
      $(".mobile__tab--content:first").show();

      $(".mobile__tab--content-paylines").hide();
      $(".mobile__tab--content-paylines:first").show();

      $('.mobile__tabs--item').on('click', function() {
        $(".mobile__tab--content").hide();
        var activeTab = $(this).attr("rel");
        $("#"+activeTab).fadeIn();

        $('.mobile__tabs--item').removeClass("mobile__tabs--item-active");
        $(this).addClass("mobile__tabs--item-active");
      });

      $('.mobile__tabs-paylines--item').on('click', function() {
        $(".mobile__tab--content-paylines").hide();
        var activeTab = $(this).attr("rel");
        $("#"+activeTab).fadeIn();

        $('.mobile__tabs-paylines--item').removeClass("mobile__tabs-paylines--item-active");
        $(this).addClass("mobile__tabs-paylines--item-active");
      });

      $('.tab__container--content').show();
      $('.tab__container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.tab-carousel'
      });
      $('.tab-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        mobileFirst: true,
        arrows: false,
        dots: false,
        variableWidth: true,
        focusOnSelect: true,
        asNavFor: '.tab__container',
        // responsive: [
        //   {
        //     breakpoint: 768,
        //     settings: 'unslick'
        //   }
        // ]
      });
      $('.tab-carousel').on('swipe', function(event, slick, direction){
        // console.log(direction);
        $('.recomendation__area--item').removeClass('recomendation__area--item-active');
        $('.slick-center').prev('.slick-active').find('.recomendation__area--item').addClass('recomendation__area--item-active');
      });

      $('.qwerty__slide').slick({
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        infinite: true,
        swipeToSlide: true
      });
      $('.our__other-casino').slick({
        slidesToShow: 1,
        dots: false,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        infinite: true,
        swipeToSlide: true
      });

      $('.glossary__area--items').hide();
      $('.glossary__area--items:nth-child(1)').show();
      $('.glossary__area--items:nth-child(2)').show();
      $('.glossary__area--items:nth-child(3)').show();

      $('.read__more-btn').on('click', function() {
        $('.glossary__area--items').slideToggle();
      });

    } else {
      $(".mobile__tab--content-paylines").show();
      $('.glossary__area--items').show();
    }

    $(".under-list:first").show();
    $('.in-this-guide-list-title').on('click', function(e) {
      $(this).siblings('.under-list').slideToggle();
    });

    $('.this-guide-open-mobile').on('click', function(e) {
      if($(this).hasClass('center__bottom--line')) {
        $(this).toggleClass('center__bottom--line-active');
      }
      $(this).siblings('.in-this-guide-list').slideToggle();
      $(this).find('.fa-angle-down').toggleClass('fa-angle-down-active');
    });

  }
};

export default main;