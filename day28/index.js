const products = [
    {
        "id": 1,
        "name": "Product 1",
        "description": "This is the description for Product 1",
        "price": 9.99,
        "imageUrl": "https://via.placeholder.com/100"
    },
    {
        "id": 2,
        "name": "Product 2",
        "description": "This is the description for Product 2",
        "price": 19.99,
        "imageUrl": "https://via.placeholder.com/100"
    },
    {
        "id": 3,
        "name": "Product 3",
        "description": "This is the description for Product 3",
        "price": 29.99,
        "imageUrl": "https://via.placeholder.com/100"
    },
    {
        "id": 4,
        "name": "Product 4",
        "description": "This is the description for Product 4",
        "price": 39.99,
        "imageUrl": "https://via.placeholder.com/100"
    },
    {
        "id": 5,
        "name": "Product 5",
        "description": "This is the description for Product 5",
        "price": 49.99,
        "imageUrl": "https://via.placeholder.com/100"
    }
]

const errBlock = document.getElementById('error-block');

// Function to generate product cards
function generateProductCards() {
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
            <div class="card product-card m-4">
                <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>Rs. ${product.price}</strong></p>
                    <a href="#" class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</a>
                </div>
            </div>
        `;
        productList.appendChild(card);
    });
}

window.onload = () => {
    generateProductCards();
    updateCartValue();
}

const Cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = Cart.find(p => p.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        Cart.push({ product, quantity: 1 });
    }
    updateCartValue();
    localStorage.setItem('cart', JSON.stringify(Cart));
}

function updateCartValue() {
    const cartIcon = document.getElementById('CartIcon');
    cartIcon.innerText = `Cart (${Cart.length})`;
}


function generateCartItems() {
    errBlock.style.display = 'none';
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    document.getElementById('checkoutBtn').classList.remove('disabled');
    let total = 0;

    if (Cart.length === 0) {
        errBlock.style.display = 'block';
        errBlock.innerText = 'Cart is empty, please add products.';
        document.getElementById('cart-total').innerText = total.toFixed(2);
        document.getElementById('checkoutBtn').classList.add('disabled');
        return;
    }

    Cart.forEach(item => {
        total += item.product.price * item.quantity;
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${item.product.name} - Rs. ${item.product.price} x ${item.quantity}
            <div>
                <button class="btn btn-outline-secondary btn-sm" onclick="decreaseQuantity(${item.product.id})">-</button>
                <button class="btn btn-outline-secondary btn-sm" onclick="increaseQuantity(${item.product.id})">+</button>
                <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.product.id})">Remove</button>
            </div>
        `;
        cartList.appendChild(li);
    });
    document.getElementById('cart-total').innerText = total.toFixed(2);
}

function showProducts() {
    document.getElementById('product-section').style.display = 'block';
    document.getElementById('cart-section').style.display = 'none';
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('success-section').style.display = 'none';
    errBlock.style.display = 'none';
}

function showCart() {
    document.getElementById('product-section').style.display = 'none';
    document.getElementById('cart-section').style.display = 'block';
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('success-section').style.display = 'none';
    document.getElementById('cart-total').innerText = '0.00';
    generateCartItems();
}

function showForm() {
    document.getElementById('form-section').style.display = 'block';
    document.getElementById('cart-section').style.display = 'none';
    document.getElementById('product-section').style.display = 'none';
    document.getElementById('success-section').style.display = 'none';
}

function showSuccessSection() {
    errBlock.style.display = 'none';
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let address = document.getElementById('address');
    let phone = document.getElementById('phone');
    if (name.value === '' || email.value === '' || address.value === '' || phone.value === '') {
        errBlock.style.display = 'block';
        errBlock.innerText = 'Please fill all the fields.';
        return;
    }
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('cart-section').style.display = 'none';
    document.getElementById('product-section').style.display = 'none';
    document.getElementById('success-section').style.display = 'block';
    Cart.splice(0, Cart.length);
    localStorage.setItem('cart', JSON.stringify(Cart));
    updateCartValue();
    document.getElementById('cart-total').innerText = '0.00';
    document.getElementById('success-message').innerText = 'Order placed successfully!';
    name.value = '';
    email.value = '';
    address.value = '';
    phone.value = '';
    errBlock.style.display = 'none';
}

function increaseQuantity(productId) {
    const cartItem = Cart.find(item => item.product.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
        updateCartValue();
        generateCartItems();
        localStorage.setItem('cart', JSON.stringify(Cart));
    }
}

function decreaseQuantity(productId) {
    const cartItem = Cart.find(item => item.product.id === productId);
    if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        updateCartValue();
        generateCartItems();
        localStorage.setItem('cart', JSON.stringify(Cart));
    } else if (cartItem) {
        removeFromCart(productId);
    }
}

function removeFromCart(productId) {
    const cartIndex = Cart.findIndex(item => item.product.id === productId);
    if (cartIndex !== -1) {
        Cart.splice(cartIndex, 1);
        updateCartValue();
        generateCartItems();
        localStorage.setItem('cart', JSON.stringify(Cart));
    }
}
