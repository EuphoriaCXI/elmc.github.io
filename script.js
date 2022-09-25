const menuBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".hamburger-nav");
const navCta = document.querySelector(".nav-cta");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
  navCta.classList.toggle("is-active");
});
