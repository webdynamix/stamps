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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
  reusable for attaching events
*/
var bindEvent = exports.bindEvent = function bindEvent(element, event, delegate) {
  if (typeof window.event != 'undefined' && element.attachEvent) element.attachEvent('on' + event, delegate);else element.addEventListener(event, delegate, false);
};
/*
  Similar to jQuery's $( document ).ready()
*/
var onDocumentReady = exports.onDocumentReady = function onDocumentReady(callback) {
  bindEvent(document, 'readystatechange', function () {
    if (document.readyState !== "complete") return true;

    callback();
  });
};

/*
  preventing events moving to their next target (bubbling)
*/
var preventBubbling = exports.preventBubbling = function preventBubbling(event) {
  if (event.preventDefault) event.preventDefault();
  if (event.stopPropagation) event.stopPropagation();else event.cancelBubble = true;
};

var getRandom = exports.getRandom = function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var appendSelectOptions = exports.appendSelectOptions = function appendSelectOptions(selectbox, limit) {
  var random = getRandom(1, limit);

  for (var i = 1; i <= limit; i++) {
    var option = document.createElement('option');
    option.text = i;
    option.value = i;
    if (i === random) option.selected = true;

    selectbox.appendChild(option);
  }
};
/*
  *Toggles .expanded on #navCollapse for mobile nav menu
*/
var navToggle = exports.navToggle = function navToggle(event) {
  var el = document.getElementById('navCollapse');
  if (el.classList.value.indexOf('expanded') === -1) el.classList.add('expanded');else el.classList.remove('expanded');
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _helpers = __webpack_require__(0);

var _cart = __webpack_require__(3);

var _cart2 = _interopRequireDefault(_cart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  *! I'm avoiding using any javascript frameworks. I didn't see a need here so decided
  to write from scratch.
  *! I'm using ES6 but will compile to ES5 in the bundle.
  *! I'm using the HTML5 Drag and Drop interface.
    * Supported by most major browsers (not mobile).
*/
(0, _helpers.onDocumentReady)(function () {

  var MyCart = new _cart2.default({
    cart: '#cart',
    products: 'ul#products li',
    optionsLimit: 20
  });

  (0, _helpers.bindEvent)(document.getElementById('navCollapsebtn'), 'click', _helpers.navToggle);
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = __webpack_require__(0);

var _product = __webpack_require__(4);

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cart = function () {
  function Cart(props) {
    var _this = this;

    _classCallCheck(this, Cart);

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

    (0, _helpers.bindEvent)(this.cart, 'drop', function (event) {
      return _this.onDrop(event);
    });
    (0, _helpers.bindEvent)(this.cart, 'dragover', function (event) {
      return _this.onOver(event);
    });
    (0, _helpers.bindEvent)(this.cart, 'dragleave', function (event) {
      return _this.onDragLeave(event);
    });

    this.products(props.products);
  }

  _createClass(Cart, [{
    key: 'products',
    value: function products(items) {
      /*
        * For each product element create a new Product object
      */
      var products = document.querySelectorAll(items);

      for (var i = 0; i < products.length; i++) {
        var MyProduct = new _product2.default({
          element: products[i],
          optionsLimit: this.state.optionsLimit
        });
      }
    }
  }, {
    key: 'updateCart',
    value: function updateCart() {
      // update ui feedback
      this.count.innerText = this.state.count;
      this.amount.innerText = this.state.amount.toFixed(2);
    }
  }, {
    key: 'addToCart',
    value: function addToCart(item, id) {
      // access price and current selection from dataset
      var currentSelection = item.dataset.selections;
      var price = item.getAttribute('data-price');
      var total = Number(price) * currentSelection;
      // add to current values
      this.state.amount += total;
      this.state.count += Number(currentSelection);
    }
  }, {
    key: 'resetOption',
    value: function resetOption(item) {
      // console.log('resetOption');
      var option = void 0;
      var select = item.querySelector('select');
      var random = (0, _helpers.getRandom)(1, 20);
      item.dataset.selections = random;

      // loop thu options and match option value to random
      for (var i = 0; i < select.options.length; i++) {
        option = select.options[i];
        if (Number(option.value) === random) {
          option.selected = true;
          return;
        }
      }
    }
  }, {
    key: 'onDrop',
    value: function onDrop(event) {
      // Retrieve product id assigned
      var id = event.dataTransfer.getData("Id");
      var item = document.getElementById(id);
      this.addToCart(item, id);
      // update values in UI
      this.updateCart();

      this.resetOption(item);
      this.cart.classList.remove('active');
      (0, _helpers.preventBubbling)(event);
      return false;
    }
  }, {
    key: 'onOver',
    value: function onOver(event) {
      (0, _helpers.preventBubbling)(event);
      if (this.cart.classList.value.indexOf('active') === -1) this.cart.classList.add('active');
      return false;
    }
  }, {
    key: 'onDragLeave',
    value: function onDragLeave(e) {
      if (this.cart.classList.value.indexOf('active') > -1) this.cart.classList.remove('active');
      return false;
    }
  }]);

  return Cart;
}();

exports.default = Cart;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Product = function () {
  function Product(props) {
    _classCallCheck(this, Product);

    this.product = props.element;
    var product = props.element;

    // make product draggable
    product.setAttribute("draggable", "true");
    (0, _helpers.bindEvent)(product, 'dragstart', this.onDrag);

    var image = this.product.querySelector('img');
    if (!!image) image.dataset.id = this.product.id;

    this.addSelectBoxOptions(props.optionsLimit);
  }

  _createClass(Product, [{
    key: "onOptionChange",
    value: function onOptionChange(e) {
      // update current selection in product's dataset
      var currentSelection = e.target.options[e.target.selectedIndex].value;
      this.product.dataset.selections = currentSelection;
    }
  }, {
    key: "addSelectBoxOptions",
    value: function addSelectBoxOptions(optionsLimit) {
      var _this = this;

      var selectBox = this.product.querySelector('.selectBox');
      var sbox = selectBox.querySelector('select');
      var arrow = document.createElement('i');
      // helper to append options with a random selection
      (0, _helpers.appendSelectOptions)(sbox, optionsLimit);

      var currentSelection = sbox.options[sbox.selectedIndex].value;

      sbox.onchange = function (e) {
        _this.onOptionChange(e);
      };
      // assign initial selection(random) to product's dataset
      this.product.dataset.selections = currentSelection;
      // appeding i element to be styled as arrow
      selectBox.appendChild(arrow);
    }
  }, {
    key: "onDrag",
    value: function onDrag(event) {
      /*
        using event dataTransfer properties from
        HTML5's DnD api.
      */
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.dropEffect = "move";
      var target = event.target || event.srcElement;
      // I'm assigning the product image as the drag image
      // Making sure the cursor is at the top right 10% of the image.
      event.dataTransfer.setDragImage(target, target.width * .9, target.width * .1);
      // assigning the product id as data property
      // to be retrieved if product is dropped in cart
      event.dataTransfer.setData('Id', target.dataset.id);
    }
  }]);

  return Product;
}();

exports.default = Product;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);