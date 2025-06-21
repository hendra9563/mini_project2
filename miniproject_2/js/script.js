const hamburger = document.getElementById("hamburger-menu");
const navMenu = document.querySelector(".navbar .navbar-nav");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
