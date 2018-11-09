
import html from './html.js';


function makeTemplate() {
    return html`
        <li class="product-card">
            <!--<h3>product card component</h3>-->
           <p class="name"></p>
            <img src="">
        </li> 
    `;
}

export default class ProductCard {
    
    constructor(product, onSelect) {
        this.product = product;
        this.onSelect = onSelect; 
        
    }
    render() {
        let dom = makeTemplate();
        const image = dom.querySelector('img');
        image.src = this.product.image;
        // const name = dom.querySelector('p');
        // name.textContent = this.product.name;
       
        let li = dom.querySelector('li');
        li.addEventListener('click', () => {
            this.onSelect(this.product);
            // console.log('I am clicked');
        });
        

        return dom;
        
    }
}