const container = document.querySelector('.container');

for(let i =  0; i < 32; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', 'square');
    container.appendChild(div);
}