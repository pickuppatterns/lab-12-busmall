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
    
    constructor(products, onSelect, onView) {
        this.products = products;
        this.onSelect = onSelect;
        this.onView = onView; 
    }
    getRandomImages() {
        let index = getRandomIndex(this.products.length);
        let product = this.products[index];
        
        return product;
    }
    showRandomImages(){
        let randomProducts = [];
        for(let j = 0; j < 3; j++) {
            const randomProduct = this.getRandomImages();
            if(randomProducts.includes(randomProduct)) {
                j--;
                continue;
            }
            randomProducts.push(randomProduct);
        }

        for(let i = 0; i < randomProducts.length; i++) {
            const productCard = new ProductCard(randomProducts[i], (selected) => {
                // console.log('randomProduct', randomProduct);
                selected.clicks++;
                this.update();
                this.showRandomImages();
                // console.log('selected', selected);
            });
            
            this.productCardSection.appendChild(productCard.render());
        }
    }
    update(){
        while(this.productCardSection.lastElementChild){
            this.productCardSection.lastElementChild.remove();
        }
    }

    

    render() {
        const dom = makeTemplate();
        //need to append an li to a ul
        this.productCardSection = dom.querySelector('ul');
        this.showRandomImages();

        return dom;
        
        
    }   
}
function getRandomIndex(length) {
    // this.product.image;
    return Math.floor(Math.random() * length);
}