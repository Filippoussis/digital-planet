import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/swiper.scss';
import 'swiper/modules/navigation.scss';
import 'swiper/modules/pagination.scss';
import 'swiper/modules/effect-fade.scss';

const initHowItWorkSwiper = () => {
  const swiperImage = new Swiper('.how-it-work-swiper-image', {
    modules: [EffectFade],
    slidesPerView: 1,
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    fadeEffect: { crossFade: true },
  });

  const swiperText = new Swiper('.how-it-work-swiper-text', {
    modules: [Navigation, Pagination, EffectFade],
    slidesPerView: 1,
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    autoHeight: true,
    pagination: {
      el: '.how-it-work-swiper-text .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.how-it-work-swiper-text .swiper-next',
      prevEl: '.how-it-work-swiper-text .swiper-prev',
    },
  });

  swiperText.on('slideNextTransitionStart', () => {
    swiperImage.slideNext();
  });

  swiperText.on('slidePrevTransitionStart', () => {
    swiperImage.slidePrev();
  });
};

export { initHowItWorkSwiper };
