
// Get cart data for logged-in user and display it
function displayCart() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const cartContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  if (!user) {
    alert("Please log in to view your cart.");
    window.location.href = "login.html?redirect=cart";
    return;
  }

  const userCartKey = `cart_${user.email}`;
  const cart = JSON.parse(localStorage.getItem(userCartKey)) || [];

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty!</p>";
    totalPriceElement.textContent = "Total: ₹0.00";
    return;
  }

  let totalPrice = 0;

  cart.forEach((product, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <img src="${product.src}" alt="${product.name}" width="50" />
      <p>${product.name}</p>
      <p>₹${product.price}</p>
      <button class="remove-from-cart" data-index="${index}">Remove</button>
    `;

    cartContainer.appendChild(cartItem);
    totalPrice += product.price;
  });

  totalPriceElement.textContent = `Total: ₹${totalPrice.toFixed(2)}`;
}

// Remove item from cart and update storage
function removeFromCart(index) {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) return;

  const userCartKey = `cart_${user.email}`;
  let cart = JSON.parse(localStorage.getItem(userCartKey)) || [];

  cart.splice(index, 1);
  localStorage.setItem(userCartKey, JSON.stringify(cart));
  displayCart();
}

// Handle remove button click
document.getElementById("cart-items").addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-from-cart")) {
    const index = e.target.getAttribute("data-index");
    removeFromCart(index);
  }
});

// Handle "Proceed to Checkout" button
document.getElementById("checkout-btn").addEventListener("click", () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) {
    alert("Please log in or sign up before proceeding to checkout.");
    window.location.href = "login.html?redirect=checkout";
    return;
  }

  const userCartKey = `cart_${user.email}`;
  const cart = JSON.parse(localStorage.getItem(userCartKey)) || [];

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  window.location.href = "checkout.html";
});

// Display cart on page load
displayCart();
