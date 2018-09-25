// 'use strict';
// jshint ignore: start
var main = {
  mainFunc: function () {
    var windowWidth = $(window).width();
    $(window).on('resize', function(){
      var win = $(this); //this = window
      // console.log(win);
      // if (win.height() >= 820) { /* ... */ }
      // if (win.width() >= 1280) { /* ... */ }
    });

    var bar = new ProgressBar.Circle(circleprogress, {
      color: '#f08e00',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 10,
      trailWidth: 10,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: { color: '#f9d299', width: 10 },
      to: { color: '#f08e00', width: 10 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value + '%');
        }

      }
    });
    bar.text.style.fontSize = '23px';
    bar.text.style.fontWeight = '900';

    bar.animate(0.95); // Number from 0.0 to 1.0

    // $('.top-slots__filter-overlay, .top-slots__container-overlay').hide();
    $('.open-close-trigger, .open-close-trigger-overlay').on('click', function() {
      $(this).siblings('.top-slots__filter-overlay, .top-slots__container-overlay').slideToggle();
    });

    $('.sprite-mouse-icon, .move-to').click(function (e) {
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
            });
          }
          prev.click(function () {
            slider.slick('slickPrev');
          });
          next.click(function () {
            slider.slick('slickNext');
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

      var swipeTable3 = {
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
              edgeFriction: 0,
              variableWidth: true,
            });
          }
          prev.click(function () {
            slider.slick('slickPrev');
          });
          next.click(function () {
            slider.slick('slickNext');
          });
        },
        sliderInit: function (slider) {
          this.checkWidth();
          if (this.sliderInitState) {
            this.sliderCreate(slider);
          }
        }
      };

      var swipeTabless = $('.table-container-slider3');
      swipeTabless.each(function () {
        swipeTable3.sliderInit($(this));
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
            });
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

      $('.rigged-game__area').slick({
        slidesToShow: 1,
        dots: false,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        infinite: true,
        swipeToSlide: true
      });


      $('.black-list-content').removeClass('active');
      $('.side-tab__list').slick({
        slidesToShow: 1,
        dots: false,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        infinite: true,
        focusOnSelect: true,
        draggable: false,
        swipeToSlide: false,
        touchMove: false,
        asNavFor: '.black-list__dynamic-container',
      });
      $('.black-list__dynamic-container').slick({
        slidesToShow: 1,
        dots: false,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        infinite: true,
        focusOnSelect: true,
        draggable: false,
        swipeToSlide: false,
        touchMove: false,
        asNavFor: '.side-tab__list'
      });
      $('.side-tab__list').on('swipe click', function(event, slick, direction){
        $('.side-tab__list--item').removeClass('active');
        $('.slick-current').find('.side-tab__list--item').addClass('active');
      });
      $('.black-list__dynamic-container').on('swipe click', function(event, slick, direction){
        $('.side-tab__list--item').removeClass('active');
        $('.slick-current').find('.side-tab__list--item').addClass('active');
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
      // tab
      $(".black-list-content").hide();
      $(".black-list-content:first").show();

      $('.side-tab__list--item').on('click', function() {
        $(".black-list-content").hide();
        var activeTab = $(this).attr("rel");
        $("#"+activeTab).fadeIn();

        $('.side-tab__list--item').removeClass("active");
        $(this).addClass("active");
      });
    }
  }
};

export default main;