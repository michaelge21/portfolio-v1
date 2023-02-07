const splashImg = document.getElementById("splashImg");
window.onload = function() {
    splashImg.classList.add("fromRight");
};
const blurbs = document.getElementsByClassName("bio");
const buttons = document.querySelectorAll("ul button");
genBioClasses();
genButtonClasses();
removeAllBlurbs(blurbs);
displayEventListeners(buttons, blurbs);
colorEventListeners(buttons);
randomizeBorderRadii(buttons);
function genBioClasses() {
    let i1 = 0;
    for (const blurb of blurbs){
        blurb.classList.add(`length${i1}`);
        i1++;
    }
}
function genButtonClasses() {
    let i1 = 0;
    for (const button of buttons){
        button.classList.add(`button${i1}`);
        i1++;
    }
}
function removeAllBlurbs(array) {
    for (const blurb of array)blurb.style.display = "none";
}
function displayEventListeners(buttonArray, blurbArray) {
    for(let i1 = 0; i1 < buttonArray.length; i1++){
        buttonArray[i1].addEventListener("mouseover", ()=>{
            for (const blurb of blurbArray)blurb.style.display = "none";
            blurbArray[i1].style.display = "block";
        });
        buttonArray[i1].addEventListener("click", ()=>{
            for (const blurb of blurbArray)blurb.style.display = "none";
            blurbArray[i1].style.display = "block";
        });
        buttonArray[i1].addEventListener("mouseout", ()=>{
            blurbArray[i1].style.display = "none";
        });
    }
}
function colorEventListeners(buttonArray) {
    for(let i1 = 0; i1 < buttonArray.length; i1++){
        buttonArray[i1].addEventListener("mouseover", ()=>{
            for (const button of buttonArray)button.style.backgroundColor = "revert";
            buttonArray[i1].style.backgroundColor = "rgb(71, 71, 194)";
        });
        buttonArray[i1].addEventListener("click", ()=>{
            for (const button of buttonArray)button.style.backgroundColor = "revert";
            buttonArray[i1].style.backgroundColor = "rgb(71, 71, 194)";
        });
        buttonArray[i1].addEventListener("mouseout", ()=>{
            for (const button of buttonArray)button.style.backgroundColor = "revert";
        });
    }
}
function randomizeBorderRadii(buttonArray) {
    for (const button of buttonArray){
        button.addEventListener("mouseover", ()=>{
            let randomValuesArray = fourRandomsGen();
            button.style.borderRadius = `${randomValuesArray[0]}% ${randomValuesArray[1]}% ${randomValuesArray[2]}% ${randomValuesArray[3]}%`;
        });
        button.addEventListener("click", ()=>{
            for (const button of buttonArray)button.style.borderRadius = `50% 50% 50% 50%`;
            let randomValuesArray = fourRandomsGen();
            button.style.borderRadius = `${randomValuesArray[0]}% ${randomValuesArray[1]}% ${randomValuesArray[2]}% ${randomValuesArray[3]}%`;
        });
        button.addEventListener("mouseout", ()=>{
            button.style.borderRadius = `50% 50% 50% 50%`;
        });
    }
}
function fourRandomsGen() {
    let randomValueArray = [];
    for(i = 0; i < 4; i++)randomValueArray.push(Math.floor(Math.random() * 50) + 5);
    return randomValueArray;
}

//# sourceMappingURL=about.6d84e8a0.js.map
