// Product data categorized by product types
const productData = {
  // Sunglasses product list
  sunglass: [
    { name: "Classic Shades", price: "30", src: "./Assets/sunglass-1.webp" },
    { name: "Women's Gold Half Frame Aviator Sunglasses", price: "50", src: "./Assets/sunglass-2.webp" },
    { name: "Women's Wavy Arm Wrap Brown Sunglasses", price: "50", src: "./Assets/sunglass-3.webp" },
    { name: "Trendy Aviators", price: "50", src: "./Assets/sunglass4.webp" },
    { name: "Trendy Aviators", price: "50", src: "./Assets/sunglass5.webp" },
    { name: "Tortoiseshell Square Sunglasses", price: "50", src: "./Assets/sunglass7.webp" },
    { name: "Accessorize London Women's Purple Coloured Oversized Wayfarer Sunglasses", price: "50", src: "./Assets/sunglass8.webp" },
    { name: "Trendy Aviators", price: "50", src: "./Assets/sunglass9.webp" },
    { name: "Trendy Aviators", price: "50", src: "./Assets/sunglass10.webp" },
    { name: "Trendy Aviators", price: "50", src: "./Assets/sunglass11.webp" },
    { name: "Round Frame Metal Arm Classic Sunglasses", price: "50", src: "./Assets/sunglass-6.webp" }
  ],
    // Earrings product list
  earring: [
    { name: "Gold Studs", price: "40", src: "./Assets/earring-1.webp" },
    { name: "Gold Studs", price: "40", src: "./Assets/earring-3.webp" },
    { name: "Gold Studs", price: "40", src: "./Assets/earring-4.webp" },
    { name: "Gold Studs", price: "40", src: "./Assets/earring-5.webp" },
    { name: "Gold Studs", price: "40", src: "./Assets/earring-6.webp" },
    { name: "Gold Studs", price: "40", src: "./Assets/earring7.webp" },
    { name: "Gold Studs", price: "40", src: "./Assets/earring8.webp" },
    { name: "Gold Studs", price: "40", src: "./Assets/earring9.webp" },
    { name: "Green Multi Gem Stud Earrings Pack of 5", price: "40", src: "./Assets/earing6.webp" },
    { name: "Gold Studs", price: "40", src: "./Assets/earring-1.webp" },
    { name: "Gold Studs", price: "40", src: "./Assets/earing10.webp" },
    { name: "Gold Studs", price: "40", src: "./Assets/earring12.webp" },
    { name: "Pearl Drops", price: "60", src: "./Assets/earring11.webp" }
  ],
    // Bracelets product list
  bracelet: [
    { name: "Silver Bracelet", price: "45", src: "./Assets/bracelet-1.jpg" },
    { name: "Silver Bracelet", price: "45", src: "./Assets/bracelet7.webp" },
    { name: "Silver Bracelet", price: "45", src: "./Assets/bracelet8.webp" },
    { name: "Silver Bracelet", price: "45", src: "./Assets/bracelet9.webp" },
    { name: "Silver Bracelet", price: "45", src: "./Assets/bracelet11.webp" },
    { name: "Silver Bracelet", price: "45", src: "./Assets/bracelet10.webp" },
    { name: "Charm Bracelet", price: "55", src: "./Assets/bracelet-2.jpg" },
    { name: "Silver Bracelet", price: "45", src: "./Assets/bracelet-3.webp" },
    { name: "Silver Bracelet", price: "45", src: "./Assets/bracelet-4.webp" },
    { name: "Silver Bracelet", price: "45", src: "./Assets/bracelet-5.webp" },
    { name: "Silver Bracelet", price: "45", src: "./Assets/bracelet-6.webp" },
  ],
    // Necklaces product list
  necklace: [
    { name: "Layered Necklace", price: "70", src: "Assets/necklace-1.webp" },
    { name: "Layered Necklace", price: "70", src: "Assets/necklace7.webp" },
    { name: "Layered Necklace", price: "70", src: "Assets/necklace8.webp" },
    { name: "Layered Necklace", price: "70", src: "Assets/necklace9.webp" },
    { name: "Layered Necklace", price: "70", src: "Assets/necklace10.webp" },
    { name: "Layered Necklace", price: "70", src: "Assets/necklace11.webp" },
    { name: "Layered Necklace", price: "70", src: "Assets/necklace-2.webp" },
    { name: "Layered Necklace", price: "70", src: "Assets/necklace-3.webp" },
    { name: "Layered Necklace", price: "70", src: "Assets/necklace-4.webp" },
    { name: "Layered Necklace", price: "70", src: "Assets/necklace-5.webp" },
    { name: "Pendant Necklace", price: "65", src: "Assets/necklace-6.webp" }
  ],
};

// Show product category
function showCategory(category) {
   // Hide unrelated sections
   document.querySelector(".slider-wrapper").style.display = "none";
  // document.querySelector(".page-title").style.display = "none";
   document.querySelector(".products-container").style.display = "none";
  //  document.querySelector(".contact-section").style.display = "none";
  //  document.querySelector(".footer").style.display = "none"; // <--- FIXED

  const section = document.getElementById("product-list");
  section.style.display = "grid";
  section.innerHTML = "";

  const items = productData[category];
  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <img src="${product.src}" alt="${product.name}" />
      <h3 class="font">${product.name}</h3>
      <p>$${product.price}</p>
      <button 
        class="add-to-cart" 
        data-name="${product.name}" 
        data-price="${product.price}" 
        data-src="${product.src}"
      >
        Add to Cart
      </button>
    `;
    section.appendChild(card);
  });
}

//trending now
const trendingProducts = [
  { name: "Classic Shades", price: "30", src: "./Assets/sunglass-1.webp" },
  { name: "Charm Bracelet", price: "55", src: "./Assets/bracelet-2.jpg" },
  { name: "Pendant Necklace", price: "65", src: "Assets/necklace-6.webp" },
  { name: "Silver Bracelet", price: "45", src: "./Assets/bracelet-6.webp" },
  { name: "Pearl Drops", price: "60", src: "./Assets/earing-2.webp" },
  { name: "Classic Shades", price: "30", src: "./Assets/sunglass-1.webp" },
  { name: "Layered Necklace", price: "70", src: "Assets/necklace-1.webp" },
  { name: "Trendy Aviators", price: "50", src: "./Assets/sunglass-2.webp" },
  { name: "Trendy Aviators", price: "50", src: "./Assets/weddingift.jpg" },
  { name: "Trendy Aviators", price: "50", src: "./Assets/weddingift2.jpg" },
  { name: "Trendy Aviators", price: "50", src: "./Assets/sunglass-2.webp" },
  { name: "Layered Necklace", price: "70", src: "Assets/necklace-3.webp" }
];

function renderTrendingProducts() {
  const trendingContainer = document.getElementById("trending-container");

  trendingProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.src}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <button 
        class="add-to-cart" 
        data-name="${product.name}" 
        data-price="${product.price}" 
        data-src="${product.src}"
      >
        Add to Cart
      </button>
    `;

    trendingContainer.appendChild(card);
  });
}

function showTrending() {
  // Hide other sections
  document.querySelector(".slider-wrapper").style.display = "none";
  document.getElementById("product-list").style.display = "none";
  document.querySelector(".contact-section").style.display = "none";

  // Show trending section
  document.querySelector(".page-title").style.display = "block";
  document.querySelector(".products-container").style.display = "flex";
  document.querySelector(".footer").style.display = "block";
}


// Call the function when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  renderTrendingProducts();
  setupAddToCartListener("product-list");
  setupAddToCartListener("trending-container");
});

// Show home slider
function showHome() {
  document.querySelector(".slider-wrapper").style.display = "block";
  document.querySelector(".page-title").style.display = "block";
  document.querySelector(".products-container").style.display = "flex";
  document.getElementById("product-list").style.display = "none";
  document.querySelector(".contact-section").style.display = "block";
  document.querySelector(".footer").style.display = "block";
}

// Add product to cart
// function addToCart(product) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   cart.push(product);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   alert(`${product.name} added to cart!`);
// }

function addToCart(product) {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) {
    alert("Please login to add products to cart.");
    window.location.href = "login.html";
    return;
  }

  const userCartKey = `cart_${user.email}`;
  let cart = JSON.parse(localStorage.getItem(userCartKey)) || [];
  cart.push(product);
  localStorage.setItem(userCartKey, JSON.stringify(cart));
  alert("Product added to cart!");
}

// Handle Add to Cart button clicks using event delegation
function setupAddToCartListener(containerId) {
  document.getElementById(containerId).addEventListener("click", function (e) {
    if (e.target.classList.contains("add-to-cart")) {
      const name = e.target.getAttribute("data-name");
      const price = parseFloat(e.target.getAttribute("data-price"));
      const src = e.target.getAttribute("data-src");

      const product = { name, price, src };
      addToCart(product);
    }
  });
}

// Slider logic
const sliderImages = [
  "./Assets/Cover_slider-1.webp",
  "./Assets/cover_slider-2.jpg",
  "./Assets/cover-3.jpg",
  "./Assets/cover-4.jpg"
];

const imageSlider = document.getElementById("imageSlider");
const img = document.createElement("img");
img.src = sliderImages[0];
img.alt = "Slide Image";
imageSlider.appendChild(img);

let currentIndex = 0;
setInterval(() => {
  currentIndex = (currentIndex + 1) % sliderImages.length;
  img.src = sliderImages[currentIndex];
}, 2000);


// Handle showing login or logout in navbar
const userInfo = document.getElementById("user-info");
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (userInfo) {
  if (loggedInUser) {
    userInfo.innerHTML = `
      Hello, <strong>${loggedInUser.username}</strong> |
      <a href="#" id="logout-btn">Logout</a>
    `;
  } else {
    userInfo.innerHTML = `<a href="login.html">Login</a>`;
  }
}

  // Add logout functionality
  document.addEventListener("click", function (e) {
    if (e.target.id === "logout-btn") {
      e.preventDefault();
      localStorage.removeItem("loggedInUser");
      alert("You have been logged out.");
      window.location.reload();
    }
  });


function logout() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (user) {
    localStorage.removeItem(`cart_${user.email}`);
  }
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
