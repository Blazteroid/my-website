// Navbar shrink on scroll
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.95)";
  } else {
    navbar.style.background = "rgba(15,15,15,0.9)";
  }
});

// Smooth fade-in animation for sections
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));