import vars from '../_vars';
import { toggleCustomClass, addCustomClass, removeCustomClass } from '../functions/customFunctions';

const {accParrent} = vars;

window.addEventListener('DOMContentLoaded', () => {
  accParrent && accParrent.map(function (accordionParrent) {
    if (accordionParrent) {

      let multipleSetting = false;
      let breakpoinSetting = false;
      let defaultOpenSetting;

      if (accordionParrent.dataset.single && accordionParrent.dataset.breakpoint) {
        multipleSetting = accordionParrent.dataset.single; // true - включает сингл аккордион
        breakpoinSetting = accordionParrent.dataset.breakpoint; // брейкпоинт сингл режима (если он true)
      }

      const getAccordions = function (dataName = "[data-id]") {
        return accordionParrent.querySelectorAll(dataName);
      }

      const accordions = getAccordions();
      let openedAccordion = null;

      const closeAccordion = function (accordion, className = "active") {
        accordion.style.maxHeight = 0;
        removeCustomClass(accordion, className);
      };

      const openAccordion = function (accordion, className = "active") {
        accordion.style.maxHeight = accordion.scrollHeight + "px";
        addCustomClass(accordion, className);
      };

      const toggleAccordionButton = function (button, className = "active") {
        toggleCustomClass(button, className);
      };

      const checkIsAccordionOpen = function (accordion) {
        return accordion.classList.contains('active')
      }

      const accordionClickHandler = function (e) {
        e.preventDefault();
        let curentDataNumber = this.dataset.id;

        toggleAccordionButton(this);
        const accordionContent = accordionParrent.querySelector(`[data-content="${curentDataNumber}"]`);
        const isAccordionOpen = checkIsAccordionOpen(accordionContent);

        if (isAccordionOpen) {
          closeAccordion(accordionContent);
          openedAccordion = null;
        } else {
          if (openedAccordion != null) {
            const mobileSettings = () => {
              let containerWidth = document.documentElement.clientWidth;
              if (containerWidth <= breakpoinSetting && multipleSetting === 'true') {
                closeAccordion(openedAccordion);
                toggleAccordionButton(accordionParrent.querySelector(`[data-id="${openedAccordion.dataset.content}"]`));
              }
            }

            window.addEventListener('resize', () => {
              mobileSettings();
            });
            mobileSettings();
          }

          openAccordion(accordionContent);
          openedAccordion = accordionContent;
        }

      }

      const activateAccordion = function (accordions, handler) {
        for (const accordion of accordions) {
          accordion.addEventListener('click', handler)
        }
      }
      const accordionDefaultOpen = (currentId) => {
        const defaultOpenContent = accordionParrent.querySelector(`[data-content="${currentId}"]`)
        const defaultOpenButton = accordionParrent.querySelector(`[data-id="${currentId}"]`)
        openedAccordion = defaultOpenContent;

        toggleAccordionButton(defaultOpenButton)
        openAccordion(defaultOpenContent)
      }

      if (accordionParrent.dataset.default) {
        defaultOpenSetting = accordionParrent.dataset.default; // получает id аккордиона который будет открыт по умолчанию
        accordionDefaultOpen(defaultOpenSetting);
      }

      activateAccordion(accordions, accordionClickHandler);
    }
  });
});

