// For hamburger menu actions

let menu = document.querySelector(".menu-toggle input");
const navbar = document.querySelector("nav ul");
menu.addEventListener("click", () => {
  navbar.classList.toggle("slide");
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("slide");
  }
});
