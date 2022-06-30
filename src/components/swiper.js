import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

export default function SwiperHead() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    loop: true,
    speed: 1200,
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      preventInteractionOnTransition: true
    },
    autoplay: {
      enabled: true,
      delay: 2100,
    },
  });
}