/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
  reusable for attaching events
*/
const bindEvent = (element, event, delegate) => {
  if (typeof window.event != 'undefined' && element.attachEvent) element.attachEvent('on' + event, delegate);else element.addEventListener(event, delegate, false);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = bindEvent;

/*
  Similar to jQuery's $( document ).ready()
*/
const onDocumentReady = callback => {
  bindEvent(document, 'readystatechange', () => {
    if (document.readyState !== "complete") return true;

    callback();
  });
};
/* harmony export (immutable) */ __webpack_exports__["a"] = onDocumentReady;


/*
  preventing events moving to their next target (bubbling)
*/
const preventBubbling = event => {
  if (event.preventDefault) event.preventDefault();
  if (event.stopPropagation) event.stopPropagation();else event.cancelBubble = true;
};
/* harmony export (immutable) */ __webpack_exports__["e"] = preventBubbling;


const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
/* harmony export (immutable) */ __webpack_exports__["d"] = getRandom;


const appendSelectOptions = (selectbox, limit) => {
  const random = getRandom(1, limit);

  for (let i = 1; i <= limit; i++) {
    const option = document.createElement('option');
    option.text = i;
    option.value = i;
    if (i === random) option.selected = true;

    selectbox.appendChild(option);
  }
};
/* harmony export (immutable) */ __webpack_exports__["f"] = appendSelectOptions;

/*
  *Toggles .expanded on #navCollapse for mobile nav menu
*/
const navToggle = event => {
  const el = document.getElementById('navCollapse');
  if (el.classList.value.indexOf('expanded') === -1) el.classList.add('expanded');else el.classList.remove('expanded');
};
/* harmony export (immutable) */ __webpack_exports__["c"] = navToggle;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart__ = __webpack_require__(3);
/*
  *! I'm avoiding using any javascript frameworks. I didn't see a need here so decided
  to write from scratch.
  *! I'm using ES6 but will compile to ES5 in the bundle.
  *! I'm using the HTML5 Drag and Drop interface.
    * Supported by most major browsers (not mobile).
*/



__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* onDocumentReady */])(() => {

  const MyCart = new __WEBPACK_IMPORTED_MODULE_1__cart__["a" /* default */]({
    cart: '#cart',
    products: 'ul#products li',
    optionsLimit: 20
  });

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* bindEvent */])(document.getElementById('navCollapsebtn'), 'click', __WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* navToggle */]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product__ = __webpack_require__(4);



class Cart {
  constructor(props) {
    /*
      * Self invoking, no need to call constructor
      * takes props from when the object was initiated
      * public state helps maintain count and amout
    */
    this.state = {
      count: 0,
      amount: 0,
      optionsLimit: props.optionsLimit
    };

    this.cart = document.querySelectorAll(props.cart)[0];
    this.count = this.cart.querySelector('.count');
    this.amount = this.cart.querySelector('.amount');

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* bindEvent */])(this.cart, 'drop', event => this.onDrop(event));
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* bindEvent */])(this.cart, 'dragover', event => this.onOver(event));
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* bindEvent */])(this.cart, 'dragleave', event => this.onDragLeave(event));

    this.products(props.products);
  }

  products(items) {
    /*
      * For each product element create a new Product object
    */
    const products = document.querySelectorAll(items);

    for (var i = 0; i < products.length; i++) {
      const MyProduct = new __WEBPACK_IMPORTED_MODULE_1__product__["a" /* default */]({
        element: products[i],
        optionsLimit: this.state.optionsLimit
      });
    }
  }

  updateCart() {
    // update ui feedback
    this.count.innerText = this.state.count;
    this.amount.innerText = this.state.amount.toFixed(2);
  }

  addToCart(item, id) {
    // access price and current selection from dataset
    const currentSelection = item.dataset.selections;
    const price = item.getAttribute('data-price');
    const total = Number(price) * currentSelection;
    // add to current values
    this.state.amount += total;
    this.state.count += Number(currentSelection);
  }

  resetOption(item) {
    let option;
    const select = item.querySelector('select');
    const random = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["d" /* getRandom */])(1, 20);
    item.dataset.selections = random;

    // loop thu options and match option value to random
    for (let i = 0; i < select.options.length; i++) {
      option = select.options[i];
      if (Number(option.value) === random) {
        option.selected = true;
        return;
      }
    }
  }

  onDrop(event) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["e" /* preventBubbling */])(event);
    // Retrieve product id assigned
    const id = event.dataTransfer.getData("Id");
    const item = document.getElementById(id);
    this.addToCart(item, id);
    // update values in UI
    this.updateCart();

    this.resetOption(item);
    this.cart.classList.remove('active');
    return false;
  }

  onOver(event) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["e" /* preventBubbling */])(event);
    if (this.cart.classList.value.indexOf('active') === -1) this.cart.classList.add('active');
    return false;
  }

  onDragLeave(e) {
    if (this.cart.classList.value.indexOf('active') > -1) this.cart.classList.remove('active');
    return false;
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Cart;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(0);


class Product {
  constructor(props) {
    this.product = props.element;
    const product = props.element;

    // make product draggable
    product.setAttribute("draggable", "true");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* bindEvent */])(product, 'dragstart', this.onDrag);

    const image = this.product.querySelector('img');
    if (!!image) image.dataset.id = this.product.id;

    this.addSelectBoxOptions(props.optionsLimit);
  }

  onOptionChange(e) {
    // update current selection in product's dataset
    const currentSelection = e.target.options[e.target.selectedIndex].value;
    this.product.dataset.selections = currentSelection;
  }

  addSelectBoxOptions(optionsLimit) {
    const selectBox = this.product.querySelector('.selectBox');
    const sbox = selectBox.querySelector('select');
    const arrow = document.createElement('i');
    // helper to append options with a random selection
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["f" /* appendSelectOptions */])(sbox, optionsLimit);

    const currentSelection = sbox.options[sbox.selectedIndex].value;

    sbox.onchange = e => {
      this.onOptionChange(e);
    };
    // assign initial selection(random) to product's dataset
    this.product.dataset.selections = currentSelection;
    // appeding i element to be styled as arrow
    selectBox.appendChild(arrow);
  }

  onDrag(event) {
    /*
      using event dataTransfer properties from
      HTML5's DnD api.
    */
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.dropEffect = "move";
    const target = event.target || event.srcElement;
    // I'm assigning the product image as the drag image
    // Making sure the cursor is at the top right 10% of the image.
    event.dataTransfer.setDragImage(target, target.width * .9, target.width * .1);
    // assigning the product id as data property
    // to be retrieved if product is dropped in cart
    event.dataTransfer.setData('Id', target.dataset.id);
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Product;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);