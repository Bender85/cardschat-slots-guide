// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

// import DE from './modules/helpers';
import main from './modules/main';
// import calculator from './modules/calculator';
import customSelect from './modules/customSelect';
import onlineGameSlider from './modules/onlineGameSlider';
import jackpotSlider from './modules/jackpotSlider';

( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {
    // calculator.calc();
    customSelect.selectFunc();
    jackpotSlider.slider();
    onlineGameSlider.gameSlider();
    main.mainFunc();
  });

})(jQuery);