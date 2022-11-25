import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';
import vars from '../_vars';

import {addCustomClass, toggleCustomClass, removeCustomClass, removeClassInArray} from '../functions/customFunctions';
const {overlay, burger, mobileMenu, mainLinks} = vars;

const mobileMenuHandler = function(overlay, mobileMenu, burger) {
  burger.addEventListener('click', function(){
    toggleCustomClass(mobileMenu,'active');
    toggleCustomClass(burger,'active');
    toggleCustomClass(overlay,'active');

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
    enableScroll()
}

if(burger) {
  mainLinks.map(function(item){
    item.addEventListener('click', function(){
      hideMenuHandler(overlay,mobileMenu,burger)
    });
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






