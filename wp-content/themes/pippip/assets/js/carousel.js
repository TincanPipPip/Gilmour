import Swiper, { A11y, Navigation, Lazy, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([A11y, Navigation, Lazy, Pagination]);

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  preloadImages: false,
  lazy: {
    loadPrevNext: true,
  },
});
