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
    showRandomImages(){
        for(let i = 0; i < 3; i++) {
            const randomProduct = this.getRandomImages();
            const productCard = new ProductCard(randomProduct, (selected) => {
                // console.log('randomProduct', randomProduct);
                selected.clicks++;
                this.clearImages();
                this.showRandomImages();
                console.log('selected', selected);
            });
            this.productCardSection.appendChild(productCard.render());
        }

    }
    clearImages(){
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