import { bindEvent, appendSelectOptions } from './helpers';

export default class Product {
  constructor(props) {
    this.product = props.element;
    const product = props.element;

    // make product draggable
    product.setAttribute("draggable", "true");
    bindEvent(product, 'dragstart', this.onDrag);

    const image = this.product.querySelector('img');
    if (!!image) image.dataset.id = this.product.id;

    this.addSelectBoxOptions(props.optionsLimit);
  }

  onOptionChange(e) {
    // update current selection in product's dataset
    const currentSelection = e.target.options[e.target.selectedIndex].value
    this.product.dataset.selections = currentSelection;
  }

  addSelectBoxOptions(optionsLimit) {
    const selectBox = this.product.querySelector('.selectBox');
    const sbox = selectBox.querySelector('select');
    const arrow = document.createElement('i');
    // helper to append options with a random selection
    appendSelectOptions(sbox, optionsLimit);

    const currentSelection = sbox.options[sbox.selectedIndex].value;

    sbox.onchange = (e) => {
      this.onOptionChange(e);
    }
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
