const form = document.getElementById("auth-form");
const formTitle = document.getElementById("form-title");
const submitBtn = document.getElementById("submit-btn");
const toggleLink = document.getElementById("toggle");
const optionalFields = document.querySelectorAll(".optional-field");

let isLoginMode = true;

function toggleForm() {
  isLoginMode = !isLoginMode;
  formTitle.textContent = isLoginMode ? "Login" : "Sign Up";
  submitBtn.textContent = isLoginMode ? "Login" : "Sign Up";
  toggleLink.innerHTML = isLoginMode
    ? `Don't have an account? <a href="#" onclick="toggleForm()">Sign Up</a>`
    : `Already have an account? <a href="#" onclick="toggleForm()">Login</a>`;

  optionalFields.forEach(field => {
    field.style.display = isLoginMode ? "none" : "block";
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  if (!username || !email || !password) {
    alert("Please fill in all required fields.");
    return;
  }

  if (isLoginMode) {
    // LOGIN
    const userData = JSON.parse(localStorage.getItem(email));
    if (userData && userData.password === password) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", JSON.stringify(userData));
      
        // Check if redirected from another page (like cart)
        const params = new URLSearchParams(window.location.search);
        const redirectPage = params.get("redirect");
      
        if (redirectPage === "checkout") {
          window.location.href = "checkout.html";
        } else {
          window.location.href = "index.html";
        }
      }
  } else {
    // SIGN UP
    if (!phone || !address) {
      alert("Please enter phone and address.");
      return;
    }

    const newUser = { username, email, password, phone, address };
    localStorage.setItem(email, JSON.stringify(newUser));
    alert("Sign up successful! You can now login.");
    toggleForm();
  }
});
