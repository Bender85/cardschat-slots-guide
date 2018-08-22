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

    $(".under-list:first").show();
    $('.in-this-guide-list-title').on('click', function(e) {
      $(this).siblings('.under-list').slideToggle();
    });
    if(windowWidth < 769) {
      $('.this-guide-open-mobile').on('click', function(e) {
        if($(this).hasClass('center__bottom--line')) {
          $(this).toggleClass('center__bottom--line-active');
        }
        $(this).siblings('.in-this-guide-list').slideToggle();
        $(this).find('.fa-angle-down').toggleClass('fa-angle-down-active');
      });

      var hiddenBoxModule = {
        initWidth: 769,
        hiddenBoxState: false,
        viewInitState: false,
        checkWidth: function () {
          var winW = $(window).width();
          console.log(winW);
          winW < this.initWidth ? this.hiddenBoxState = true : this.hiddenBoxState = false;
        },
        checkViewInit: function (parentBox) {
          return $(parentBox).hasClass('mobile');
        },
        showHiddenBox: function () {
          var showBtn = $('.click-btn');
          var that = this;
          showBtn.click(function () {
            console.log(1);
            var parentBox = $(this).parent().parent();
            that.checkWidth();
            if ((that.hiddenBoxState && that.checkViewInit(parentBox)) || !that.checkViewInit(parentBox)) {
              $(this).toggleClass('active')
                .next()
                .slideToggle()
                .parent()
                .toggleClass('active')
                .siblings()
                .removeClass('active')
                .find('.click-btn')
                .removeClass('active')
                .next()
                .slideUp();
            }
          });
        }
      };
      var tabsMobInit = {
        initWidth: 1024,
        tabsState: false,
        checkWidth: function () {
          var winW = $(window).width();
          winW < this.initWidth ? this.tabsState = true : this.tabsState = false;
        },
        tabsInit: function () {
          var tabNav = $('.offline-blackjack-tabs li');
          this.checkWidth();
          if (this.tabsState) {
            tabNav.click(function () {
              var tabs = $(this).parent().next().children();
              var tabIndex = $(this).data('tabindex');
              $(this).addClass('active').siblings().removeClass('active');
              $(tabs[tabIndex]).addClass('active').siblings().removeClass('active');
            });
          }
        }

      };
      hiddenBoxModule.showHiddenBox();
      tabsMobInit.tabsInit();



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
        var text = $('.read__more-btn-text').text();
        if (text === 'Expand Glossary') {
          $('.read__more-btn-text').text('Reduce Glossary');
          $('.read__more-btn').find('.fas').removeClass('fa-chevron-down');
          $('.read__more-btn').find('.fas').addClass('fa-chevron-up');
        } else {
          $('.read__more-btn-text').text('Expand Glossary');
          $('.read__more-btn').find('.fas').removeClass('fa-chevron-up');
          $('.read__more-btn').find('.fas').addClass('fa-chevron-down');
        }
      });

    } else {
      $(".mobile__tab--content-paylines").show();
      $('.glossary__area--items').show();
    }
  }
};

export default main;