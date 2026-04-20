// Dark mode toggle
function toggleMode() {
  document.body.classList.toggle("dark");
}

// Scroll to projects
function scrollToSection() {
  document.getElementById("projects").scrollIntoView();
}

// Fake contact message
function showMessage() {
  document.getElementById("msg").innerText = "Message sent successfully!";
}