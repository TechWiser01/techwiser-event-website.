// Dark Mode Toggle
const darkModeButton = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeButton.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  darkModeButton.textContent = body.classList.contains("light-mode") ? "☀️" : "🌙";
});

// Search Functionality
document.getElementById("search").addEventListener("input", function() {
  const searchTerm = this.value.toLowerCase();
  const articles = document.querySelectorAll(".card");

  articles.forEach(article => {
    const title = article.querySelector("h2").textContent.toLowerCase();
    article.style.display = title.includes(searchTerm) ? "block" : "none";
  });
});

// Light Mode Styles (optional)
const style = document.createElement("style");
style.textContent = `
  .light-mode {
    background: white;
    color: black;
  }
  .light-mode nav, .light-mode .hero, .light-mode .card, .light-mode footer {
    background: #f0f0f0;
    color: black;
  }
`;
document.head.appendChild(style);

