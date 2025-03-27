// Countdown Timer
document.addEventListener("DOMContentLoaded", function() {
  const countdownElement = document.getElementById("countdown");

  // Set the date we're counting down to
  const eventDate = new Date("November 19, 2025 09:00:00").getTime();

  // Update the countdown every 1 second
  const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished, write some text
    if (distance < 0) {
      clearInterval(timer);
      countdownElement.innerHTML = "EXPIRED";
    }
  }, 1000);
});// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll("nav .nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

