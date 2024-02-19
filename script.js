//se declara la funcion carrito de compras

let cartItems = [];
let cartTotal = 0;

function addToCart(product) {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ ...product, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(itemId) {
    cartItems = cartItems.filter(item => item.id !== itemId);
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    cartItemsElement.innerHTML = '';
    cartTotal = 0;
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} x ${item.quantity} - $${item.price.toFixed(2)}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.addEventListener('click', () => removeFromCart(item.id));
        li.appendChild(removeButton);
        cartItemsElement.appendChild(li);
        cartTotal += item.price * item.quantity;
    });
    cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
}


