const menuButton = document.querySelector(".menuButton");

menuButton.addEventListener('click', (event) => {

    (event.target.textContent == "menu")
    ? event.target.textContent = "X"
    : event.target.textContent = "menu";


});