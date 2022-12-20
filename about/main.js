const body = document.body;
    
const listItems  = document.getElementsByTagName('li');

const para = document.getElementById("para");

for (const item of listItems) {
    item.addEventListener('click', () => changeText(item));
}

function changeText(item) {

    for (const items of listItems) {
        items.style.color = "";
    }

    let className = item.className;

    switch (className) {
        case 'shortest':             
        para.textContent = "this is the shortest bio"
        item.style.color = "#FF7501";
        break;

        case 'short':             
        para.textContent = "shorter bio"
        item.style.color = "#FF7501";
        break;

        case 'middle':
        para.textContent = "meeeeedium length!"
        item.style.color = "#FF7501";
        break;

        case 'longer':
            para.textContent = "long, long, long, longer!"
            item.style.color = "#FF7501";
            break;

        case 'longest':
        para.textContent = "long long length! long long length!long long length!long long length!long long length!long long length!long long length!long long length!"
        item.style.color = "#FF7501";
        break;

        default: para.textContent = 'error! error!'
    }
}