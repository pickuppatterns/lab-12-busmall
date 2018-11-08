import html from './js/html.js';
import productsApi from './js/products-api.js';
import ProductSelector from './js/product-selector.js';


const products = productsApi.getAll();


function makeTemplate() {
    return html`
        <main>
            <h1>TAKE THE SURVEY</h1>
            <section class="product-selector"></section>
        </main>
    `;
}
class SurveyApp{
    render() {
        const dom = makeTemplate();
        const productSelectorSection = dom.querySelector('.product-selector');
        const productSelector = new ProductSelector(products); 
        productSelectorSection.appendChild(productSelector.render() );
        
        return dom;
        
        
    }
}

const surveyApp = new SurveyApp();
const root = document.getElementById('root');
root.appendChild(surveyApp.render());