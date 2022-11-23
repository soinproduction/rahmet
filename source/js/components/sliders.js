import Swiper from "../vendor/swiper";
import vars from "../_vars";

const {defaultSliders} = vars;

defaultSliders.map((defaultSlider) => {
  let parrentClassName = '.default-sider'
  let swiper = new Swiper(defaultSlider, {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    loop: true,
    autoplay: {
      // reverseDirection: true,
      delay: 5000,
      disableOnInteraction: false // или сделать так, чтобы восстанавливался autoplay после взаимодействия
    },
    navigation: {
      nextEl: defaultSlider.nextElementSibling,
      prevEl: defaultSlider.previousElementSibling,
    },

  });
})








