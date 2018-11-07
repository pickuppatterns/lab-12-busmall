import productsApi from './js/products-api.js';
import html from './js/html';
import ProductSelector from './js/products-selector.js';

const products = productsApi.getAll();


function makeTemplate() {
    return html`
    <main>
        <h1>TAKE THE SURVEY</h1>

        <section id ="product-list">
            <h2>SELECT YOUR FAVORITE PICTURE</h2>
            <p>Just choose on already, sooo fun!</p>
            <ul></ul>
        </section>
    </main>
    `;
}
class SurveyApp{
    render() {
        const dom = makeTemplate();
        const mainSection = dom.querySelector('ul');
        const productSelector = new ProductSelector(products); 
        //     survey => {
        //     surveyApi.add(survey);
        //     window.location = './results.html';
        // }

        
        mainSection.appendChild(productSelector.render());
        
        return dom;
        
        
    }
}

const surveyApp = new SurveyApp();
const root = document.getElementById('root');
root.appendChild(surveyApp.render());