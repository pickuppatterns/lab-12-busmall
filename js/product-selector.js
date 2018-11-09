import html from './html.js';
import ProductCard from './product-card.js';

function makeTemplate() {
    return html`
        <section>
        <!--<h2>product selector component</h2>-->
          <ul class="product-cards"></ul>
        </section>
    `;
}
export default class ProductSelector { 
    
    constructor(products){
        this.products = products; 
    }
    
    getRandomImages() {
        let index = getRandomIndex(this.products.length);
        let product = this.products[index];

        return product;
    }
    render() {
        const dom = makeTemplate();
        //need to append an li to a ul
        
        
        const productCardSection = dom.querySelector('ul');
        
        
        
        for(let i = 0; i < 3; i++) {
            const randomProduct = this.getRandomImages();
            const productCard = new ProductCard(randomProduct, (selected) => {
                // console.log('randomProduct', randomProduct);
                selected.clicks++;
                // console.log('selected', selected);
            });
            productCardSection.appendChild(productCard.render());
            
        }

        return dom;
        
    }   
}
function getRandomIndex(length) {
    // this.product.image;
    return Math.floor(Math.random() * length);
}