// NAV SCROLL EFFECT
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.background = "rgba(0,0,0,0.9)";
  } else {
    nav.style.background = "rgba(0,0,0,0.3)";
  }
});

// REVEAL ON SCROLL
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

reveals.forEach(el => observer.observe(el));

// BUTTON ACTION
function bookTable() {
  alert("Reservation received. We will contact you soon 🍷");
}