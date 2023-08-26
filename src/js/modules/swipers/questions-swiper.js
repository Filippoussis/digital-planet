import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/swiper.scss';
import 'swiper/modules/navigation.scss';
import 'swiper/modules/pagination.scss';
import 'swiper/modules/effect-fade.scss';

const initQuestionsSwiper = () => {
  const swiperText = new Swiper('.questions-swiper-text', {
    modules: [Navigation, Pagination, EffectFade],
    slidesPerView: 1,
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    autoHeight: true,
    pagination: {
      el: '.questions-swiper-text .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.questions-swiper-text .swiper-next',
      prevEl: '.questions-swiper-text .swiper-prev',
    },
  });
};

export { initQuestionsSwiper };
