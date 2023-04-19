let nav = document.querySelector("nav");
let openMenu = document.querySelector(".open");
let closeMenu = document.querySelector(".close");

openMenu.addEventListener("click", () => {
  nav.classList.add("openNav");
});
closeMenu.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
