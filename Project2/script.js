// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// CTA Button Actions
document.getElementById("heroBtn").addEventListener("click", () => {
    alert("Thanks for choosing ProductX!");
});

document.getElementById("ctaBtn").addEventListener("click", () => {
    alert("You are ready to get started 🚀");
});
