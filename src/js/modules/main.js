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

    $('.sprite-mouse-icon').click(function (e) {
      e.preventDefault();
      var divID =  $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(divID).offset().top
      }, 2000);
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

    var tabsDescInit = {
      // initWidth: 1024,
      tabsState: true,
      // checkWidth: function () {
      //   var winW = $(window).width();
      //   winW < this.initWidth ? this.tabsState = true : this.tabsState = false;
      // },
      tabsInit: function () {
        var tabNav = $('.player-cards-table-tabs li');
        // this.checkWidth();
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
    tabsDescInit.tabsInit();

    if(windowWidth < 769) {
      $('.this-guide-open-mobile').on('click', function(e) {
        if($(this).hasClass('center__bottom--line')) {
          $(this).toggleClass('center__bottom--line-active');
        }
        $(this).siblings('.in-this-guide-list').slideToggle();
        $(this).find('.fa-angle-down').toggleClass('fa-angle-down-active');
      });

      $(window).scroll(function(e){
        var $el = $('.in-this-guide');
        var isPositionFixed = ($el.css('position') == 'fixed');
        if ($(this).scrollTop() > 200 && !isPositionFixed){
          $('.in-this-guide').css({'position': 'fixed', 'top': '0px'});
        }
        if ($(this).scrollTop() < 200 && isPositionFixed)
        {
          $('.in-this-guide').css({'position': 'absolute', 'top': 'auto'});
        }
      });

      $('.under-list li a, .nosubmenu').on('click', function() {
        var $this = $(this);
        $('.under-list').slideUp();
        $('.in-this-guide-list').slideUp();
        var divID =  $this.attr('href');
        $('html, body').animate({
          scrollTop: $(divID).offset().top -150
        }, 2000);
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
              console.log(tabs);
              var tabIndex = $(this).data('tabindex');
              $(this).addClass('active').siblings().removeClass('active');
              $(tabs[tabIndex]).addClass('active').siblings().removeClass('active');
            });
          }
        }

      };
      var swipeTable = {
        initWidth: 769,
        sliderInitState: false,
        checkWidth: function () {
          var winW = $(window).width();
          winW < this.initWidth ? this.sliderInitState = true : this.sliderInitState = false;
        },
        sliderCreate: function (slider) {
          var prev = slider.parents('.table-container').find('.table-container-item-prev');
          var next = slider.parents('.table-container').find('.table-container-item-next');
          if (this.sliderInitState) {
            slider.slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              infinite: false,
              autoplay: false,
              fade: false,
              autoplaySpeed: 1000,
              speed: 500,
              dots: false,
              pauseOnHover: false,
              pauseOnFocus: false,
              edgeFriction: 0
            })
          }
          prev.click(function () {
            slider.slick('slickPrev')
          });
          next.click(function () {
            slider.slick('slickNext')
          });
        },
        sliderInit: function (slider) {
          this.checkWidth();
          if (this.sliderInitState) {
            this.sliderCreate(slider);
          }
        }
      };

      var swipeTables = $('.table-container-slider');
      swipeTables.each(function () {
        swipeTable.sliderInit($(this));
      });

      var swipeBoxes = {
        initWidth: 769,
        sliderInitState: false,
        checkWidth: function () {
          var winW = $(window).width();
          winW < this.initWidth ? this.sliderInitState = true : this.sliderInitState = false;
        },
        sliderCreate: function (slider) {
          if (this.sliderInitState) {
            slider.slick({
              slidesToShow: 1,
              dots: false,
              slidesToScroll: 1,
              variableWidth: true,
              arrows: false,
              infinite: true,
              swipeToSlide: true
            })
          }
        },
        sliderInit: function (slider) {
          this.checkWidth();
          if (this.sliderInitState) {
            this.sliderCreate(slider);
          }
        }
      };

      var swipeBox = $('.box-container-slider');
      swipeBox.each(function () {
        swipeBoxes.sliderInit($(this));
      });

      tabsMobInit.tabsInit();
      hiddenBoxModule.showHiddenBox();



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


      $('.qwerty__slide').slick({
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        infinite: true,
        swipeToSlide: true
      });
      $('.our__other-casino, .baccarat-basic-strategy__area, .baccarat-tips__area, .types-of-Baccarat__area').slick({
        slidesToShow: 1,
        dots: false,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        infinite: true,
        swipeToSlide: true
      });



      $('.read__more-btn').on('click', function() {
        $('.glossary__area').toggleClass('glossary__area-active');

        var text = $('.read__more-btn-text').text();
        if(text === 'Expand Glossary') {
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
      $('.game-screen__game--circle').on('mouseover', function() {
        $('.game-screen__game--circle').removeClass('game-screen__game--circle-active');
        $('.game-screen__game--content').hide();
        $(this).siblings('.game-screen__game--content').show();
        $(this).addClass('game-screen__game--circle-active');
      });
    }
  }
};

export default main;