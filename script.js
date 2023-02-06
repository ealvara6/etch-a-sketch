const container = document.querySelector('.etch');
const button = document.querySelector('.resize-button');
let previousPixelSize;
let pixelSize = 16;
let etchCreated = false;

// for(let i =  0; i < 16; i++) {
//     let divRow = document.createElement('div');
//     divRow.setAttribute('class', 'row');
//     container.appendChild(divRow);

//     for(let z = 0; z < 16; z++) {
//         let divColumn = document.createElement('div');
//         divColumn.setAttribute('class', 'column');
//         divRow.appendChild(divColumn);
//         divColumn.addEventListener('mouseover', (e) => {
//             divColumn.style.backgroundColor = 'black';
//         });
//     }
// }


setResizeBox = (pixelSize) => {

    if(etchCreated){
        clearEtch();
    }
    etchCreated = true;

    for(let i =  0; i < pixelSize; i++) {
        let divRow = document.createElement('div');
        divRow.setAttribute('id', i);
        divRow.setAttribute('class', 'row');
        container.appendChild(divRow);
    
        for(let z = 0; z < pixelSize; z++) {
            let divColumn = document.createElement('div');
            divColumn.setAttribute('id', i);
            divColumn.setAttribute('class', 'column');
            divRow.appendChild(divColumn);
            divColumn.addEventListener('mouseover', (e) => {
                divColumn.style.backgroundColor = 'black';
            });
        }
    }
}

clearEtch = () => {
    for(let i = 0; i < previousPixelSize; i++) {
        let divRow = document.getElementById(i);
        container.removeChild(divRow);
    }
}

setResizeBox(pixelSize);
// clearEtch = () => {
//     let divRow = document.getElementsByClassName('.row');
//     let divColumn = document.getElementsByClassName('.column');
//     for(let i = 0; i < divRow.length; i++) {
//         divRow[i].remove();
//         divColumn[i].remove();
//     }
// }

button.addEventListener('click', (e) => {
    isFalse = true;
    let prompt = window.prompt('Please enter size of new boxes in pixels (max of 100 pixels.)', '');
    while(isFalse) {
    if(!isNaN(prompt) && prompt < 101) {
        previousPixelSize = pixelSize;
        pixelSize = prompt;
        setResizeBox(pixelSize);
        isFalse = false;
    }
    else {
        prompt = window.prompt('Please enter a valid pixel size (Max of 100 pixels).', '');
    }}
});