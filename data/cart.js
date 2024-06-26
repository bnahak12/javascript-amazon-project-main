export let cart;

loadFromStorage();

export function loadFromStorage() {
    cart = JSON.parse(localStorage.getItem('cart'));

    if (!cart) {
        cart = [
            {
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                productName: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
                quantity: 2,
                deliveryOptionsId: '1'
            },
            {
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                productName: 'Intermediate Size Basketball',
                quantity: 1,
                deliveryOptionsId: '3'
            }
        ]
    }
}

export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId, productName) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            productName: productName,
            quantity: 1,
            deliveryOptionsId: '1'
        });
    }

    saveToStorage();
}



export function removeFromCart(productId) {

    cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {
            cart = cart.filter(items => items.productId !== productId);
        }
    });

    saveToStorage();
}

export function updateDeliveryOption(productId, optionId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });
    matchingItem.deliveryOptionsId = optionId;
    saveToStorage();
}
export let products = [];

export function loadCart(fun) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
        console.log(xhr.response);
        fun();
    });

    xhr.open('GET', 'https://supersimplebackend.dev/cart');
    xhr.send();
}