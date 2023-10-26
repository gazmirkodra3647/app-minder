// Filename: sophisticated_code.js
// Description: Complex JavaScript code showcasing an e-commerce shopping cart system

// Define global variables
let shoppingCart = [];
let availableProducts = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 19.99 },
  { id: 3, name: 'Product 3', price: 7.99 },
  { id: 4, name: 'Product 4', price: 12.99 },
  // ... (more products)
];

// Define functions for shopping cart management
function addToCart(productID, quantity) {
  const product = availableProducts.find(p => p.id === productID);

  if (product && quantity > 0) {
    const existingProduct = shoppingCart.find(p => p.id === productID);

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      shoppingCart.push({ ...product, quantity });
    }

    console.log(`${quantity} ${product.name}(s) added to the cart.`);
  } else {
    console.log(`Invalid product ID or quantity provided.`);
  }
}

function removeFromCart(productID, quantity) {
  const productIndex = shoppingCart.findIndex(p => p.id === productID);

  if (productIndex > -1 && quantity > 0) {
    const removedQuantity = Math.min(quantity, shoppingCart[productIndex].quantity);
    shoppingCart[productIndex].quantity -= removedQuantity;

    if (shoppingCart[productIndex].quantity === 0) {
      shoppingCart.splice(productIndex, 1);
    }

    console.log(`${removedQuantity} ${availableProducts.find(p => p.id === productID).name}(s) removed from the cart.`);
  } else {
    console.log(`Invalid product ID or quantity provided.`);
  }
}

function calculateCartTotal() {
  let total = 0;

  for (const product of shoppingCart) {
    total += product.price * product.quantity;
  }

  return total.toFixed(2);
}

function checkout() {
  const total = calculateCartTotal();

  if (shoppingCart.length === 0) {
    console.log(`Your cart is empty. Add some products before checking out.`);
  } else {
    console.log(`Checkout completed. Total amount: $${total}`);
    shoppingCart = [];
  }
}

// Example usage
addToCart(2, 3); // Add 3 Product 2 to the cart
addToCart(1, 1); // Add 1 Product 1 to the cart

removeFromCart(2, 2); // Remove 2 Product 2 from the cart

checkout(); // Perform the checkout, display total amount

// ... (more operations and functionalities)

// Remaining 200+ lines of code...