const hamburger = document.querySelector(".hamburger");
const cart = document.querySelector(".cart");
const close = document.querySelector(".close");
const close_cart = document.querySelector(".close_cart");

hamburger.addEventListener("click", () => {
  document.querySelector(".mobile_menu").classList.add("slide");
});

close.addEventListener("click", () => {
  document.querySelector(".mobile_menu").classList.remove("slide");
});

cart.addEventListener("click", () => {
  document.querySelector(".cart_menu").classList.add("slide");
});

close_cart.addEventListener("click", () => {
  document.querySelector(".cart_menu").classList.remove("slide");
});
