const splashImg = document.getElementById("splashImg")

window.onload = function() {
    splashImg.classList.add("fromRight")
}


const blurbs = document.getElementsByClassName("bio");
const buttons = document.querySelectorAll("ul button");

genBioClasses();

genButtonClasses();

removeAllBlurbs(blurbs);

displayEventListeners(buttons, blurbs);

colorEventListeners(buttons);

randomizeBorderRadii(buttons);

function genBioClasses() {
    let i = 0;

    for (const blurb of blurbs) {
        blurb.classList.add(`length${i}`);
        i++;
    }
}

function genButtonClasses() {
    let i = 0;
    for (const button of buttons) {
        button.classList.add(`button${i}`);
        i++;
    }
}

function removeAllBlurbs(array) {
    for (const blurb of array) {
        blurb.style.display = "none";
    }
}

function displayEventListeners(buttonArray, blurbArray) {

    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener('mouseover', () => {
            for (const blurb of blurbArray) {
                blurb.style.display = "none";
            }
            blurbArray[i].style.display = 'block';
    });


        buttonArray[i].addEventListener('click', () => {
            for (const blurb of blurbArray) {
                blurb.style.display = "none";
            }
            blurbArray[i].style.display = 'block';
    });

        buttonArray[i].addEventListener('mouseout', () => {
            blurbArray[i].style.display = 'none';
        });
    }
}

function colorEventListeners(buttonArray) {

    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener('mouseover', () => {
            for (const button of buttonArray) {
                button.style.backgroundColor = "revert"
            }
            buttonArray[i].style.backgroundColor = "rgb(71, 71, 194)";
        });
        buttonArray[i].addEventListener('click', () => {
            for (const button of buttonArray) {
                button.style.backgroundColor = "revert"
            }
            buttonArray[i].style.backgroundColor = "rgb(71, 71, 194)";
        });
        buttonArray[i].addEventListener('mouseout', () => {
            for (const button of buttonArray) {
                button.style.backgroundColor = "revert"
            }
        });
    }
}

function randomizeBorderRadii(buttonArray) {
    for (const button of buttonArray){
        button.addEventListener("mouseover", () => {
            let randomValuesArray = fourRandomsGen();
            button.style.borderRadius = `${randomValuesArray[0]}% ${randomValuesArray[1]}% ${randomValuesArray[2]}% ${randomValuesArray[3]}%`
        });

        button.addEventListener('click', () => {
            for (const button of buttonArray) {
                button.style.borderRadius = `50% 50% 50% 50%`
            }
            let randomValuesArray = fourRandomsGen();
            button.style.borderRadius = `${randomValuesArray[0]}% ${randomValuesArray[1]}% ${randomValuesArray[2]}% ${randomValuesArray[3]}%`
        })

        button.addEventListener("mouseout", () => {
            button.style.borderRadius = `50% 50% 50% 50%`
        });
    }
}

function fourRandomsGen() {

    let randomValueArray = [];

    for (i = 0; i < 4; i++) {
        randomValueArray.push(Math.floor(Math.random()*50)+5);
    }
    return randomValueArray;
}






// const body = document.body;

// const listItems  = document.getElementsByClassName('bio');

// const para = document.getElementById("para");

// for (const item of listItems) {
//     item.addEventListener('click', () => changeText(item));
// }



// function changeText(item) {

//     for (const items of listItems) {
//         items.style.color = "";
//     }

//     let className = item.className;

//     switch (className) {
//         case 'shortest bio':             
//         para.textContent = "michael is trying his hardest."
//         para.style.fontSize = "calc(1rem + 4vw)";

//         item.style.color = "#FF7501";
//         break;

//         case 'short bio':             
//         para.textContent = "michael is a free-lance web developer driven to define and make a positive impact. He tries his hardest to develop a tolerance to spicy food."
//         item.style.color = "#FF7501";
//         para.style.lineHeight = "calc(3rem - 1vh + 1.8vw)";

//         para.style.fontSize = "calc(1rem + 3vw)";

//         break;

//         case 'middle bio':
//         para.textContent = "michael is a multi-disciplinary developer, drawing upon backgrounds in cognitive and educational psych, creative writing, and teaching. A proud generalist, he tries his hardest to make something better everyday."
//         para.style.fontSize = "calc(1rem + 2.5vw)";
//         para.style.lineHeight = "calc(3rem - 1vh + 1.5vw)";

//         item.style.color = "#FF7501";
//         break;

//         case 'longer bio':
//             para.textContent = "michael enjoys examining abstractions like “impact,” “rhetoric,” and “leadership,” spending late nights mulling over how to operationalize and apply them to his work. He built a pan-Asian mental health conference as an undergrad, and continues to speak and advocate for his communities."
//             item.style.color = "#FF7501";
//             para.style.fontSize = "calc(1rem + 2vw)";
//             para.style.lineHeight = "calc(3rem - 1vh + 1.1vw)";
//             break;

//         case 'longest bio':
//         para.textContent = 'michael is a second-gen Chinese American raised in Wisconsin. The last five years have been a journey exploring being Asian in the Midwest, and he has firmly settled on the answer of: “I go out for Culver\'s, but I go home for 红烧肉 (red braised pork).” When his joints do not ache, he teaches breaking and house in Madison. He leads teams on the belief that friends achieve more than coworkers. Michael will never stop supporting Liverpool FC unless someone confronts him confrontationally.'
//         para.style.fontSize = "calc(.5rem + 2vw)"
//         para.style.lineHeight = "calc(3rem - 1vh + .8vw)";
//         item.style.color = "#FF7501";
//         break;

//         default: 
//     }
// }

