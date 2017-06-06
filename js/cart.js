import { bindEvent, preventBubbling, getRandom } from './helpers';
import Product from './product';

export default class Cart {
  constructor(props){
    /*
      * Self invoking, no need to call constructor
      * takes props from when the object was initiated
      * public state helps maintain count and amout
    */
    this.state = {
      count: 0,
      amount: 0,
      optionsLimit: props.optionsLimit,
    }

    this.cart = document.querySelectorAll(props.cart)[0];
    this.count = this.cart.querySelector('.count');
    this.amount = this.cart.querySelector('.amount');

    bindEvent(this.cart, 'drop', event => this.onDrop(event));
    bindEvent(this.cart, 'dragover', event => this.onOver(event));
    bindEvent(this.cart, 'dragleave', event => this.onDragLeave(event));

    this.products(props.products);
  }

  products(items) {
    /*
      * For each product element create a new Product object
    */
    const products = document.querySelectorAll(items);

    for (var i = 0; i < products.length; i++) {
      const MyProduct = new Product({
        element: products[i],
        optionsLimit: this.state.optionsLimit,
      });
    }
  }

  updateCart(){
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
    const random = getRandom(1, 20);
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
    preventBubbling(event);
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
    preventBubbling(event);
    if (this.cart.classList.value.indexOf('active') === -1) this.cart.classList.add('active');
    return false;
  }

  onDragLeave(e) {
    if (this.cart.classList.value.indexOf('active') > -1) this.cart.classList.remove('active');
    return false;
  }

}
