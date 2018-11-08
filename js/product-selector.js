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
    // const crapshoot =>  
    
    render() {
        const dom = makeTemplate();
        //need to append an li to a ul
       
        
        const productCardSection = dom.querySelector('ul');
       
        

        for(let i = 0; i < 3; i++) {
            const productCard = new ProductCard(this.products[i], selected => {

                console.log(selected);
                // Instead of a console log, pass through
                //record clicks but how the class is gonna need to know we got to 25 
                //record views
                //at end of survey put contents in local storage
                //redirect page windows.on
                //next steps refresh all 3 images after select
                //look at lab for suggestions
                //if we wanna share methods between a method & class use "this"
                //
                // productCard(selected) = 

            });
            productCardSection.appendChild(productCard.render());
        }

        
            //need to get the render method off of the product card
        
//
        return dom;
        
    }
   
    
}

    

