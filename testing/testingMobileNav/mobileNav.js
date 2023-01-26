const menuButton = document.querySelector(".menuButton");
const mobileNavMenu = document.querySelector(".navButtons");

menuButton.addEventListener("click", (event) => {
  event.target.textContent == "menu"
    ? (event.target.textContent = "X")
    : (event.target.textContent = "menu");

  menuButton.classList.toggle("smallDimensions");
  mobileNavMenu.classList.toggle("placeOffScreen");
});
