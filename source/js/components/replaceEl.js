import vars from '../_vars';

const {headerTopInner,headerBottomInner,headerSearchForm,headerBottomButtons,} = vars


const replaceElementsFunction = (element,parentDesktop,parentMobile,breakpoint, firstRule, lastRule) => {
  let containerWidth = document.documentElement.clientWidth;

  if(element) {
    if (containerWidth <= `${breakpoint}`) {
      parentMobile.insertAdjacentElement(`${firstRule}`, element);
    };
    if (containerWidth > `${breakpoint}`) {
      parentDesktop.insertAdjacentElement(`${lastRule}`, element);
    }
  }
}

  window.addEventListener('resize', () => {
    replaceElementsFunction(headerSearchForm,headerTopInner,headerBottomInner, 1024,'afterbegin','afterbegin'); // repalce search form on mobile version
    replaceElementsFunction(headerBottomButtons,headerBottomInner,headerTopInner, 1024,'afterbegin','afterbegin'); // repalce buttons on mobile version
  });
  window.addEventListener('DOMContentLoaded', () => {
    replaceElementsFunction(headerSearchForm,headerTopInner,headerBottomInner, 1024,'afterbegin','afterbegin'); // repalce search form on mobile version
    replaceElementsFunction(headerBottomButtons,headerBottomInner,headerTopInner, 1024,'afterbegin','afterbegin'); // repalce buttons on mobile version
  });



