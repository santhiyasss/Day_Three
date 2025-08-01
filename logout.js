document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logoutBtn');
  const message = document.getElementById('message');

  logoutBtn.addEventListener('click', () => {
    // Just show a simple message for demo
    message.textContent = "You have been logged out.";

    // Optional: Redirect to login page after 2 seconds
    setTimeout(() => {
      window.location.href = "login.html"; // change if your login page is named differently
    }, 2000);
  });
});
