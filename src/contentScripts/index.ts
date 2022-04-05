/* eslint-disable no-console */
import { onMessage } from 'webext-bridge';

// Firefox `browser.tabs.executeScript()` requires scripts return a primitive value
(() => {
  console.info('[vitesse-webext] Hello world from content script');

  // communication example: send previous tab title from background page
  onMessage('tab-prev', ({ data }) => {
    console.log(`[vitesse-webext] Navigate from page "${data.title}"`);
  });

  window.onload = function () {
    const as = document.querySelectorAll('a');
    for (let index = 0; index < as.length; index++) {
      const element = as[index];
      if (element.getAttribute('href')) {
        element.setAttribute('target', '_blank');
      }
    }
  };
})();
