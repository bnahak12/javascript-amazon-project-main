import { renderOrderSummary } from './checkOut/orderSummary.js';
import { renderPaymentSummary } from './checkOut/paymentSummary.js';
import { rendercheckOutHeader } from './checkOut/checkOutHeader.js';
//import '../data/cart-Oop.js';
// import '../backend/backend-practice.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';


async function loadPage() {

    await loadProductsFetch();
    await new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });

    renderOrderSummary();
    renderPaymentSummary();
}

loadPage();

/* Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

]).then((values) => {
    console.log(values); // returns an array of resolved values from the mentioned promises
    renderOrderSummary();
    renderPaymentSummary();
});
 */

/* new Promise((resolve) => {
    loadProducts(() => {
        resolve('resolve1');// return resolve1 and can be passed to next promise  
    });
}).then((value) => {
    console.log(value);

    return new Promise((resolve) => {
        loadCart(() => {
            resolve('resolve2');
        });
    });
}).then((resolve) => {
    renderOrderSummary();
    renderPaymentSummary();
}); */

/* loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
}); */

rendercheckOutHeader();
