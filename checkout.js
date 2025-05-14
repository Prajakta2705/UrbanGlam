document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const orderSummary = document.getElementById("order-summary");
  
    let total = 0;
    orderSummary.innerHTML = "<h4>Your Order:</h4>";
    cart.forEach(item => {
      total += item.price;
      orderSummary.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
    });
    orderSummary.innerHTML += `<h4>Total: ₹${total.toFixed(2)}</h4>`;
  
    document.getElementById("checkout-form").addEventListener("submit", function(e) {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const address = document.getElementById("address").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const payment = document.getElementById("payment-method").value;
  
      if (!name || !address || !phone || !payment) {
        alert("Please fill all fields and choose payment method.");
        return;
      }
  
      // Simulate payment success
      if (payment === "cod") {
        alert("Cash on Delivery selected.");
      }
  
      // Show invoice (you can redirect or show here)
      const invoice = {
        customer: { name, address, phone },
        items: cart,
        total,
        payment
      };
  
      localStorage.setItem("lastOrder", JSON.stringify(invoice));
    //   localStorage.removeItem("cart"); // Clear cart
  
      window.location.href = "invoice.html"; // You can create a new page to show this
    });
  });
  