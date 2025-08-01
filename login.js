document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const message = document.getElementById('message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Demo login: hardcoded check
    if (username === "admin" && password === "1234") {
      message.style.color = "green";
      message.textContent = "Login successful!";
    } else {
      message.style.color = "red";
      message.textContent = "Invalid username or password.";
    }

    // Clear input (optional)
    form.reset();
  });
});
