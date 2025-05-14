document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const customerInfo = document.getElementById("customer-info");
    const productList = document.getElementById("product-list");
    const totalAmount = document.getElementById("total-amount");
  
    // Show user details
    if (user) {
        console.log(user.username)
      customerInfo.innerHTML = `
        <p><strong>Name:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Address:</strong> ${user.address}</p>
      `;
    } else {
      customerInfo.innerHTML = `<p style="color:red;">User not logged in.</p>`;
    }
  
    // Display cart items
    let total = 0;
  
    if (cart.length === 0) {
      productList.innerHTML = `<tr><td colspan="3">No products in cart</td></tr>`;
    } else {
      cart.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.name}</td>
          <td>$${item.price.toFixed(2)}</td>
        `;
        productList.appendChild(row);
        total += item.price;
      });
    }
  
    // Show total
    totalAmount.textContent = `Total: $${total.toFixed(2)}`;
    localStorage.removeItem("cart");
    // Optionally clear the cart after invoice is shown
    // localStorage.removeItem("cart");
  });
  