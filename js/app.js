/*
  *! I'm avoiding using any javascript frameworks. I didn't see a need here so decided
  to write from scratch.
  *! I'm using ES6 but will compile to ES5 in the bundle.
  *! I'm using the HTML5 Drag and Drop interface.
    * Supported by most major browsers (not mobile).
*/
import { onDocumentReady, bindEvent, navToggle } from './helpers';
import Cart from './cart';

onDocumentReady(() => {

  const MyCart = new Cart({
    cart: '#cart',
    products: 'ul#products li',
    optionsLimit: 20,
  });

  bindEvent(document.getElementById('navCollapsebtn'), 'click', navToggle);
});
