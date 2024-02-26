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


const products = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
    { id: 3, name: 'Producto 3', price: 30 }
];

products.forEach(product => {
    const addButton = document.createElement('button');
    addButton.textContent = `Agregar ${product.name} - $${product.price.toFixed(2)}`;
    addButton.addEventListener('click', () => addToCart(product));
    document.body.appendChild(addButton);
});


//Menu desplegable

document.addEventListener('DOMContentLoaded', function() {
    var btn = document.querySelector('.menu-btn');
    var menu = document.querySelector('.menu');
  
    btn.addEventListener('click', function() {
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'block';
      }
    });
  
    document.addEventListener('click', function(event) {
      if (!menu.contains(event.target) && event.target !== btn) {
        menu.style.display = 'none';
      }
    });
  });