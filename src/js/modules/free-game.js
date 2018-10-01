let freeGame = {
  init: function () {
    var winWidth = $(window).width(),
      showFilterBtn = $('.show-filter__btn'),
      filterContainer = $('.sort-filters__container'),
      filterAsideContainer = $('.free-games__filter-tabs__box');


//start handler of click event on Show filters on mobile

    var filterShow =  {

      filtersShowInit: function () {
        var show = 'Sort & filter';
        var hide = 'Close filter';
        var hiddenElements = $('.hiddenElement');

        showFilterBtn.click(function (e) {
          e.preventDefault();
          $(this).toggleClass('show');
          if ($(this).hasClass('show')) {
            $(this).children().text(hide);
            hiddenElements.addClass('show');
          }
          else {
            $(this).children().text(show);
            hiddenElements.removeClass('show');
            $('.filter-select-btn').removeClass('show').next().removeClass('visible');
          }
        })
      },

      filterShowHiddenBox:  function(){
        var selectBtn = $('.filter-select-btn');
        selectBtn.click(function(){
          $(this).toggleClass('show').next().toggleClass('visible')
        })
      },

      init: function () {
        this.filtersShowInit();
        this.filterShowHiddenBox();
      }

    }

//end handler of click event on Show filters on mobile

// start  handler of change view from grid to list

    var changeGridView = function () {
      var gridBtn = $('.view-btns li');

      gridBtn.click(function () {
        var view = $(this).attr('data-view');
        var gridContainer = $('.games-container');
        var currentClass = gridContainer.attr('class').split(/\s+/)[1];
        $(this).addClass('active').siblings().removeClass('active');
        gridContainer.removeClass(currentClass).addClass(view)
      })
    }

// end handler of change view from grid to list

// start handler of filter tabs for mobile

    var mobileFilterTabs = {
      queries: 767,
      filterText: 'game type',
      createTabs: function () {
        var tabNav = $('.free-games__filter-tabs__nav li');
        var tabs = $('.free-games__filter-tab');
        tabNav.click(function () {
          var activeTab = $(this).attr('data-tabindex');

          $(this).addClass('active').siblings().removeClass('active');
          $(tabs[activeTab]).addClass('active').siblings().removeClass('active')

        })
      },
      createFilterByProvider: function () {
        var filterThumbs = $('.game-by-provider a');
        var filterAll = $('.game-by-provider a[data-filter-value = "all"]')

        filterThumbs.click(function (e) {
          e.preventDefault();

          if($(this).attr('data-filter-value') === 'all'){
            $(this).addClass('active').siblings().removeClass('active')
          }
          else{
            $(this).addClass('active').parent().find('a[data-filter-value = "all"]').removeClass('active')
          }
        })
      },
      initTabs: function () {
        var winWidth = $(window).width();
        var textNode = $('#desktop-text');

        this.createFilterByProvider();

        if(winWidth < 769 ) {
          this.createTabs()
        }
        else {
          textNode.text(this.filterText)
          return;
        }


      }
    };

// end  handler of filter tabs for mobile


// start  handler of filter tabs for mobile

    var modalInit = function(){
      $(".close-modal, .modal-sandbox").click(function() {
        $(".modal").css({
          "display": "none"
        });
      });

    };
// end handler of filter tabs for mobile

//start feedbackmodal mobile view

    var initMobileViewModal = {
      selected: false,
      setStateSelect: function(){
        var selectElem = $('#modal-feedback-options');
        var modalOverlay = $('.feedback-modal .modal-overlay');

        selectElem.on('change', function(){
          var position = selectElem.val()
          position >= 0 ? this.selected = true : this.selected = false;
          this.showCommentsBox();
          modalOverlay.addClass('custom-height')

        }.bind(this));
      },
      showCommentsBox: function(){
        var hiddenBox = $('.feedback-modal .modal-body');
        this.selected ? hiddenBox.slideDown() : hiddenBox.slideUp();
      },
      showThankModal: function() {
        var initBtn = $('#sendFeedback');
        var modalForm = $('.feedback-modal .modal-wrapper');
        var thankModal = $('.thanks-modal');
        var modalOverlay = $('.feedback-modal .modal-overlay');

        initBtn.on('click', function(e){
          e.preventDefault();
          modalForm.removeClass('visible');
          thankModal.addClass('visible');
          modalOverlay.removeClass('custom-height').addClass('thankspopup-height')
        })

      },
      init: function(){
        this.setStateSelect();
        this.showThankModal();
      }
    }


// start handler for change view of rating box and show hidden block with buttons

    var ratingInit = function () {
      var ratingStars = $('.stars-container li');
      var submitBtns = $('.modal-btns');

      var setRating = function (num) {
        ratingStars.removeClass('setup-rate')
        for (var i = 0; i <= num; i++) {
          $(ratingStars[i]).addClass('setup-rate')
        }
      }
      ratingStars.click(function () {
        var rateNummer = $(this).attr('data-rating');
        submitBtns.addClass('show');
        $('.thank-text').addClass('show')
        setRating(rateNummer);
      })
    };

// end

    var rating={
      start: function(){
        $('.feedback-modal .rating-star-box').on('mousemove',function(e){
          $child = $(this).parent().find('.rate');
          var x = e.pageX - $(this).offset().left
          var y = e.pageY - $(this).offset().top
          if(x>'0' && x<'10'){
            $child.css('width','10%').attr('name','10');
          }
          else if(x>'10' && x<'20'){
            $child.css('width','20%').attr('name','20');
          }
          else if(x>'20' && x<'30'){
            $child.css('width','30%').attr('name','30');
          }
          else if(x>'30' && x<'40'){
            $child.css('width','40%').attr('name','40');
          }
          else if(x>'40' && x<'50'){
            $child.css('width','50%').attr('name','50');
          }
          else if(x>'50' && x<'60'){
            $child.css('width','60%').attr('name','60');
          }
          else if(x>'60' && x<'70'){
            $child.css('width','70%').attr('name','70');
          }
          else if(x>'70' && x<'80'){
            $child.css('width','80%').attr('name','80');
          }
          else if(x>'80' && x<'90'){
            $child.css('width','90%').attr('name','90');
          }
          else if(x>'90' && x<'100'){
            $child.css('width','100%').attr('name','100');
          }

        }).on('mouseleave','.popupRate', function(){
          $child.css('width','0%');
          // rating.removeBold();

        }).on('click','.popupRate span', function(){
          var ratingId = ($(this).attr('id'));
          var ratingNum = ($(this).attr('name'));
          // var ratingNum = ratingClass.replace(/[^0-9]/g, '')
          rating.sendRating(ratingId,ratingNum)
        })

      }
    }
//end start

    //lightBox handler

    var lightBox = {
      setFullScreen: function () {
        var fullScreenBtn = $('.fullscreen-btn'),
          fullscreenContainer = $('.fullscreen-container'),
          lightboxBody = $('.lightbox-body'),
          lightboxBox = $('.lightbox-box');

        fullScreenBtn.click(function () {
          $(this).toggleClass('active');
          lightboxBox.toggleClass('fullscreen')
          $(this).hasClass('active')? lightboxBody.attr('data-aspect-ratio', '16:9') : lightboxBody.attr('data-aspect-ratio', '4:3');
        })
      },
      sideBarOpen: function(){
        var sideBarBtn = $('.more-games-sidebar__btn');
        var btnText = $('#more-games-sidebar__btn-title');
        sideBarBtn.click(function(){
          !$(this).hasClass('open') ? btnText.text('Less Games') : btnText.text('More Games');
          $(this).toggleClass('open').parent().toggleClass('open');
          $('.lightbox-box').toggleClass('sidebar-open');
        })

      },
      closeLightbox: function() {
        $('.lightbox-box .close-btn').click(function(){
          $(".lightbox-container").css({
            "display": "none"
          });
        })
      },
      init: function(){
        this.setFullScreen();
        this.sideBarOpen();
        this.closeLightbox();
      }
    }


// filter show

// init all handlers

    var pageInit = function () {
      filterShow.init();
      mobileFilterTabs.initTabs();
      changeGridView();
      modalInit();
      ratingInit();
      lightBox.init();
      initMobileViewModal.init();
      rating.start();

    }

    pageInit();
  }
};

export default freeGame;