import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

export default function SwiperHead() {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    pagination: {
      el: '.swiper-pagination',
    }
  });
}