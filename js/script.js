rect = document.querySelector('#rect');
code = document.querySelector('#code');

next = document.querySelector('#next')

link = document.querySelector('#link');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let randomColor = () => {
    colorSymbols = ['a', 'b', 'c', 'd', 'e', 'f',
        '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    color = ''
    
    for(i = 0; i < 6; i++) {
        color = color + colorSymbols[getRandomInt(15)];
    }
    return `#${color}`;
}
console.log(randomColor());

let generate = () => {
    let color1 = randomColor();
    let color2 = randomColor();

    rect.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    code.value = `background: ${color1}
background: -webkit-linear-gradient(to right, ${color1}, ${color2});
background: linear-gradient(to right, ${color1}, ${color2});
    `;
    link.innerHTML = `<a href="check.html?from=${color1}&to=${color2}">Ссылка</a>`;
}

generate();

next.onclick = generate;