const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

function checkSessionStorageSupport() {
    if (typeof(Storage) === "undefined") {
        alert('Sorry, your browser does not support Web storage. Try again with a better one.');
        return false;
    }
    return true;
}

function addItemToCart(item) {
    sessionStorage.setItem(item, 'true');
    displayCart();
}

function createStore() {
    const ul = document.createElement('ul');
    ul.id = 'store-items';
    document.querySelector('.container').appendChild(ul);

    availableItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.onclick = () => addItemToCart(item);
        ul.appendChild(li);
    });
}

function displayCart() {
    const cartMessage = document.getElementById('cart-message');
    const cartItems = Object.keys(sessionStorage).filter(key => availableItems.includes(key));

    if (cartItems.length > 0) {
        cartMessage.textContent = `You previously had ${cartItems.length} items in your cart`;
    } else {
        cartMessage.textContent = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (checkSessionStorageSupport()) {
        createStore();
        displayCart();
    }
});
