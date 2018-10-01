// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

// import DE from './modules/helpers';
import widgetSlideBox from './modules/widget';
import main from './modules/main';
import freeGame from './modules/free-game';

( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {
    main.mainFunc();
    widgetSlideBox.init();
    freeGame.init();
  });

})(jQuery);