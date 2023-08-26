import { initWorld } from '../js/modules/bg-world/world';
import { initMenuToggle } from '../js/modules/menuToggle';
import { initDynamicNavigation } from '../js/modules/dynamicNavigation';
import { initQuestionButtons } from '../js/modules/questionButtons';
import { initHowItWorkSwiper } from '../js/modules/swipers/how-it-work-swiper';
import { initTechnologySwiper } from '../js/modules/swipers/technology-swiper';
import { initQuestionsSwiper } from '../js/modules/swipers/questions-swiper';
import { initCurrentDate } from '../js/modules/currentDate';

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  // Modules
  // ---------------------------------
  initWorld();
  initMenuToggle();
  initDynamicNavigation();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initCurrentDate();
    initQuestionButtons();
    initHowItWorkSwiper();
    initTechnologySwiper();
    initQuestionsSwiper();
  });
});
