'use strict';

//Accordion
const accordions = document.querySelectorAll('.accordion');
const accordionIcon = document.querySelectorAll('.accordion__open--pressed');

for (const accordion of accordions) {
  const panels = accordion.querySelectorAll('.accordion__panel');

  for (const panel of panels) {
    const head = panel.querySelector('.accordion__header');
    head.addEventListener('click', () => {
      for (const otherPanel of panels) {
        if (otherPanel !== panel) {
          otherPanel.classList.remove('accordion-expanded');
        }
      }

      panel.classList.toggle('accordion-expanded');
    });
  }
}

