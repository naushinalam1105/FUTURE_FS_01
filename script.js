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

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

function showSection(sectionId) {
  const sections = document.querySelectorAll(".content-section");

  sections.forEach(section => {
    section.style.display = "none";
  });

  document.getElementById(sectionId).style.display = "block";
}
showSection('about');
