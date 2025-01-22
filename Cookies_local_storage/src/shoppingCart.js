const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

if (typeof(Storage) === "undefined") {
    alert("Sorry, your browser does not support Web storage. Try again with a better one");
} else {
    createStore();
    displayCart();
}

function addItemToCart(item) {
    localStorage.setItem(item, true);
}

function createStore() {
    const storeDiv = document.getElementById('store');
    const ul = document.createElement('ul');
    availableItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.onclick = () => addItemToCart(item);
        ul.appendChild(li);
    });
    storeDiv.appendChild(ul);
}

function displayCart() {
    const cartDiv = document.getElementById('cart');
    const itemsInCart = Object.keys(localStorage);
    if (itemsInCart.length > 0) {
        const p = document.createElement('p');
        p.textContent = `You previously had ${itemsInCart.length} items in your cart`;
        cartDiv.appendChild(p);
    }
}
