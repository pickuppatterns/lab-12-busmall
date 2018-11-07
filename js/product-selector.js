import html from './js/html.js';
import ProductCard from './product-card';

function makeTemplate() {
    return html`
   <h1>BUS MALL</h1>
        <section>
          <>  
           
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