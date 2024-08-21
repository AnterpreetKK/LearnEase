// Array of products (you can add more products here)
const products = [
    { id: 1, name: "Front-End", price: 100.00, image: "frontend.png" },
    { id: 2, name: "Backend", price: 120.00, image: "backend.png" },
    { id: 3, name: "Full Stack", price: 150.00, image: "fullstack.png" },
];

// Array to store items in the cart
let cart = [];

// Function to display products
function displayProducts() {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = ''; // Clear any existing content
    products.forEach(product => {
        productsDiv.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div>
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price.toFixed(2)}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Function to update the cart
function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartItemsDiv.innerHTML += `
            <div class="cart-item">
                ${item.name} - $${item.price.toFixed(2)}
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById('cart-total').innerText = `Total: $${total.toFixed(2)}`;
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Function to handle checkout
function checkout() {
    if (cart.length === 0) {
        alert("Your brain is empty!");
    } else {
        alert("Let's get started!");
        cart = [];
        updateCart();
    }
}

// Initialize the store
displayProducts();
