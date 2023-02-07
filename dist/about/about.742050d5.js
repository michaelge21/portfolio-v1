const bodyE = document.querySelector("body");
const splashImg1 = document.querySelector(".splash img");
console.log(splashImg1);
const menuButton = document.querySelector(".menuButton");
const mobileNavMenu = document.querySelector(".navButtons");
const entireNav = document.querySelector(".mobileContainer");
menuButton.addEventListener("click", (event)=>{
    event.target.textContent == "menu" ? event.target.textContent = "X" : event.target.textContent = "menu";
    splashImg1.style.opacity == "0" ? splashImg1.style.opacity = "1" : splashImg1.style.opacity = "0";
    menuButton.classList.toggle("smallDimensions");
    mobileNavMenu.classList.toggle("placeOffScreen");
    bodyE.classList.toggle("noOverflow");
    entireNav.classList.toggle("makeMobileWork");
});

//# sourceMappingURL=about.742050d5.js.map
