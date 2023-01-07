const container = document.querySelector('.container');

for(let i =  0; i < 16; i++) {
    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');
    container.appendChild(divRow);

    for(let z = 0; z < 16; z++) {
        let divColumn = document.createElement('div');
        divColumn.setAttribute('class', 'column');
        divRow.appendChild(divColumn);
    }
}