import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';
import vars from '../_vars';

import {addCustomClass, toggleCustomClass, removeCustomClass, removeClassInArray} from '../functions/customFunctions';
const {subMenus, overlay, burger, mobileMenu, items} = vars;

const mobileMenuHandler = function(overlay, mobileMenu, burger) {
  burger.addEventListener('click', function(){
    toggleCustomClass(mobileMenu,'active');
    toggleCustomClass(burger,'active');
    toggleCustomClass(overlay,'active');
    removeClassInArray(subMenus, 'active');
    removeCustomClass(mobileMenu,'fix-height');

    if(burger.classList.contains('active')) {
      disableScroll()
    } else {
      enableScroll()
    }
  })
}

const hideMenuHandler = function(overlay, mobileMenu, burger) {
    removeCustomClass(mobileMenu,'active');
    removeCustomClass(burger,'active');
    removeCustomClass(overlay,'active');
    removeClassInArray(subMenus, 'active');
    removeCustomClass(mobileMenu,'fix-height');
    enableScroll()

}

if(burger) {
  items.map(function(item){
    const linkItem = item.querySelector('.mobile-nav__link');
    const subMenu = item.querySelector('.sub-menu');
    const hideSubMenu = item.querySelector('.sub-menu__back');

    linkItem.addEventListener('click', function(){
      addCustomClass(subMenu, 'active');
      addCustomClass(mobileMenu,'fix-height');
    });

    hideSubMenu.addEventListener('click', function(e) {
      e.preventDefault();
      removeCustomClass(subMenu, 'active');
      removeCustomClass(mobileMenu,'fix-height');
    })
  })

}

if (overlay) {
  mobileMenuHandler(overlay,mobileMenu,burger);
  overlay.addEventListener('click', function(e){
    if (e.target.classList.contains('overlay')) {
      hideMenuHandler(overlay,mobileMenu,burger)
    }
  });

}






