const menuBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".hamburger-nav");
const navCta = document.querySelector(".nav-cta");

// Hamburger - It's only function is to toggle the hamburger active or in-active
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
  navCta.classList.toggle("is-active");
});
