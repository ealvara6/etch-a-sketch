const container = document.querySelector('.etch');
const button = document.querySelector('.resize-button');
let pixelSize;

for(let i =  0; i < 16; i++) {
    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');
    container.appendChild(divRow);

    for(let z = 0; z < 16; z++) {
        let divColumn = document.createElement('div');
        divColumn.setAttribute('class', 'column');
        divRow.appendChild(divColumn);
        divColumn.addEventListener('mouseover', (e) => {
            divColumn.style.backgroundColor = 'black';
        });
    }
}

button.addEventListener('click', (e) => {
    isFalse = true;
    let prompt = window.prompt('Please enter size of new boxes in pixels (max of 100 pixels.)', '');
    while(isFalse) {
    if(!isNaN(prompt) && prompt < 101) {
        pixelSize = prompt;
        isFalse = false;
    }
    else {
        prompt = window.prompt('Please enter a valid pixel size (Max of 100 pixels).', '');
    }}
});