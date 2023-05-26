rect = document.querySelector('#rect');
code = document.querySelector('#code');

link = document.querySelector('#link');

let getQueryVariable = variable => {
    let variables = window.location.href.split('?')[1].split('&');

    for(let i = 0; i < variables.length; i++) {
        let Variable = variables[i];

        let varName = Variable.split('=')[0];
        let varValue = Variable.split('=')[1];

        //console.log('Имя переменной | Искомая переменная: ' + `${varName} | ${variable}`);
        //console.log('Значение переменной: ' + varValue);
        if(varName == variable) {
            return varValue;
        }
    };
    return 'Не найдено';
}

console.log(getQueryVariable('to'));

let generate = () => {
    let color1 = getQueryVariable('from');
    let color2 = getQueryVariable('to');

    rect.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    code.value = `background: ${color1}
background: -webkit-linear-gradient(to right, ${color1}, ${color2});
background: linear-gradient(to right, ${color1}, ${color2});
    `;
    link.innerHTML = `<a href="check.html?from=${color1}&to=${color2}">Ссылка</a>`;
}

generate();

//next.onclick = generate;