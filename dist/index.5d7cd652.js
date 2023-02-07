const bodyE = document.querySelector("body");
const menuButton = document.querySelector(".menuButton");
const mobileNavMenu = document.querySelector(".navButtons");
const entireNav = document.querySelector(".mobileContainer");
menuButton.addEventListener("click", (event)=>{
    event.target.textContent == "menu" ? event.target.textContent = "X" : event.target.textContent = "menu";
    bodyE.style.overflow == "hidden" ? bodyE.style.overflow : bodyE.style.overflow;
    menuButton.classList.toggle("smallDimensions");
    mobileNavMenu.classList.toggle("placeOffScreen");
    bodyE.classList.toggle("noOverflow");
    entireNav.classList.toggle("makeMobileWork");
});

//# sourceMappingURL=index.5d7cd652.js.map
