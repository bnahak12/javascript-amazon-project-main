function Cart(localStorageKey) {
    const cart = {
        cartItems: undefined,
        loadFromStorage() {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));

            if (!this.cartItems) {
                this.cartItems = [
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
        },
        saveToStorage() {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },
        addToCart(productId, productName) {
            let matchingItem;

            this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId) {
                    matchingItem = cartItem;
                }
            });

            if (matchingItem) {
                matchingItem.quantity += 1;
            } else {
                this.cartItems.push({
                    productId: productId,
                    productName: productName,
                    quantity: 1,
                    deliveryOptionsId: '1'
                });
            }
            this.saveToStorage();
        },
        removeFromCart(productId) {

            this.cartItems.forEach((cartItem) => {
                if (cartItem.productId === productId) {
                    cart = cart.filter(items => items.productId !== productId);
                }
            });

            this.saveToStorage();
        },
        updateDeliveryOption(productId, optionId) {
            let matchingItem;

            this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId) {
                    matchingItem = cartItem;
                }
            });
            matchingItem.deliveryOptionsId = optionId;
            this.saveToStorage();
        }
    };

    return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('business-Cart');

cart.loadFromStorage();
businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);










