import { renderOrderSummary } from './checkOut/orderSummary.js';
import { renderPaymentSummary } from './checkOut/paymentSummary.js';
import { rendercheckOutHeader } from './checkOut/checkOutHeader.js';
//import '../data/cart-Oop.js';
// import '../backend/backend-practice.js';
import { loadProducts } from '../data/products.js';
import { loadCart } from '../data/cart.js';

Promise.all([new Promise((resolve) => {
    loadProducts(() => {
        resolve('resolve1');
    });
}), new Promise((resolve) => {
    loadCart(() => {
        resolve();
    });
})
]).then((values) => {
    console.log(values); // returns an array of resolved values from the mentioned promises
    renderOrderSummary();
    renderPaymentSummary();
});


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
