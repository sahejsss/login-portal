const WEBHOOK_URL = "https://karnsihota.app.n8n.cloud/webhook/portal"; // replace with your actual webhook

// Login form
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "login", username, password })
    });
    const data = await res.json();
    if (data.status === "success") {
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid login");
    }
  });
}

// Signup form
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "signup", firstname, lastname, email, username, password })
    });
    const data = await res.json();
    if (data.status === "success") {
      alert("Sign up successful! Please log in.");
      window.location.href = "login.html";
    } else {
      alert("Signup failed.");
    }
  });
}


