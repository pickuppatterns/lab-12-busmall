import html from './html.js';
import ProductCard from './product-card.js';

function makeTemplate() {
    return html`
        <section>
        <h2>product selector component</h2>
          <ul class="product-cards"></ul>
        </section>
    `;
}
export default class ProductSelector { 

    constructor(products){
        this.products = products;
        
    }
     
    
    render() {
        const dom = makeTemplate();
        //need to append an li to a ul
       
        
        const productCardSection = dom.querySelector('ul');
        // const productCard = new ProductCard();
        // this.products.forEach(name => {
        //     const productCard = new ProductCard();
        // });
        
        for(let i = 0; i < 3; i++) {
            const productCard = new ProductCard(this.products[i], selected => {

                // console.log(selected);

            });
            productCardSection.appendChild(productCard.render());
        }

        
            //need to get the render method off of the product card
        
//
        return dom;
        
    }
   
    
}

    

