export default {
  activeMode: 'active-mode',
  activeClass: "active",
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  overlay: document.querySelector('[data-overlay]'),
  // accParrent: [...document.querySelectorAll("[accordion-init]")],
  // selectParrent: [...document.querySelectorAll("[data-select]")],
  tabsParrents: [...document.querySelectorAll("[data-tabs-parrent]")],
  modals: [...document.querySelectorAll('[data-popup]')],
  modalsButton: [...document.querySelectorAll("[data-btn-modal]")],
  // innerButtonModal: [...document.querySelectorAll("[data-btn-inner]")],
  // customSelect: [...document.querySelectorAll("[data-select]")],
  burger: document.querySelector('.burger'),
  mobileMenu: document.querySelector('.header-box__nav'),


  header: document.querySelector(".header"),
  // default variables
  defaultSliders: [...document.querySelectorAll('.default-sider')],
  logoSlider: [...document.querySelectorAll('.payment-slider .swiper-container')],
  mainLinks: [...document.querySelectorAll('.main-nav__link')],
  observSections: [...document.querySelectorAll('.section-observe')],
  formsSecond: '.contacts-section__form',
  formsFirst: '.contact-section__form',
  // obse: [...document.querySelectorAll('.section-observe')],




}





