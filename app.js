// app.js
document.addEventListener("DOMContentLoaded", () => {
  const auth = firebase.auth();

  // Login function
  document.getElementById("loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        window.location.href = "index.html"; // Redirect to main page
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  });

  // Logout function
  document.getElementById("logoutBtn")?.addEventListener("click", () => {
    auth.signOut().then(() => {
      window.location.href = "login.html"; // Redirect to login page
    });
  });

  // Check if the user is logged in
  auth.onAuthStateChanged((user) => {
    if (!user && window.location.pathname !== "/login.html") {
      window.location.href = "login.html"; // Redirect to login if not logged in
    }
  });
});
