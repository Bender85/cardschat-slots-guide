// 'use strict';

var main = {
  mainFunc: function () {
    var windowWidth = $(window).width();
    $('.tooltip').tooltipster({
      theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
      side: 'bottom'
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
    if(windowWidth <= 767) {
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

      $('.tab-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        mobileFirst: true,
        arrows: false,
        dots: false,
        // responsive: [
        //   {
        //     breakpoint: 768,
        //     settings: 'unslick'
        //   }
        // ]
      });

      $('.qwerty__slide').slick({
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        // centerMode: true,
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
      // $('.tab-carousel').slick({
      //   settings: 'unslick'
      // });
    }

    // $('.qwerty__slide').slick({
    //   slidesToShow: 1,
    //   dots: true,
    //   slidesToScroll: 1,
    //   variableWidth: true,
    //   arrows: false,
    //   // centerMode: true,
    // });

  //   trigger showHide
    // $('.openTrigger').on('click', function () {
    //   $('.expandBox').toggleClass('expandBoxActive');
    // });

    // $('.tooltip').tooltipster({
    //   animation: 'fade',
    //   delay: 200,
    //   theme: 'tooltipster-light',
    //   side: ['bottom']
    // });

    $(".under-list:first").show();
    $('.in-this-guide-list-title').on('click', function(e) {
      $(this).siblings('.under-list').slideToggle();
    });

    $('.this-guide-open-mobile').on('click', function(e) {
      $(this).siblings('.in-this-guide-list').slideToggle();
    });

  }
};

export default main;