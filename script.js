const container = document.querySelector('.etch');
const button = document.querySelector('.resize-button');
let previousPixelSize;
let pixelSize = 16;
let etchCreated = false;
let opacity = 0;

rgbGenerator = () => {
    let rgb = [];
    for(let i = 0; i < 3; i++) {
        rgb[i] = Math.floor(Math.random() * 255);
    }
    return rgb;
}


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
                    opacity += 0.1;
                let rgb = rgbGenerator();
                // divColumn.style.backgroundColor = 'black';
                // divColumn.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
                divColumn.style.backgroundColor= `rgb(0,0,0,${opacity})`;
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