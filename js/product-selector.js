import html from './js/html.js';

function makeTemplate() {
    return html`
   <h1>BUS MALL</h1>
        <section>
            
            <li class="products">Product Selector</li>
        </section>
    `;
}
class ProductSelector {
    constructor(product){
        this.products = product;
        // this.image = image;
    }

    render() {
        const dom = makeTemplate();
        // console.log(this.product);
        //need to append an li to a ul
        this.list = dom.querySelector(['li']);
        // li.textContent = this.products[0].name;
        this.list = dom.querySelector('ul');


        return dom;
    }
}


export default ProductSelector;