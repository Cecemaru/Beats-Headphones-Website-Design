/* =============== SHOW MENU ============ */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* ==== MENU SHOW ==== */
navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

/* ==== MENU CLOSE ==== */
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

/* ========== REMOVE MENU MOBILE ========= */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLink.forEach((link) => link.addEventListener("click", linkAction));
