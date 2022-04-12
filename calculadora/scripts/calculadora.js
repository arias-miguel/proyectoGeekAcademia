const pantalla = document.getElementById('resultado');
const numeros = document.querySelectorAll('.numbN');
const operadores = document.querySelectorAll('.operador');
const resetbtn = document.getElementById('reset');
const igual = document.getElementById('igual');
const borrarbtn = document.getElementById('borrar');

let variables = ['', ''];
let operator = '';
let id = 0;

function reset() {
    variables = ['', ''];
    operator = '';
    id = 0;
    updateScreen();
}

function updateScreen() {
    if(variables[id] === ''){
        pantalla.innerText = '0';
    } else {
        pantalla.innerText = variables[id];
    }
}

function del() {
    if(variables[id].length > 0){
        variables[id] = variables[id].substr(0, variables[id].length-1);
        updateScreen();
    }
}

function calculate(){
    let res = eval(variables[0] + operator + variables[1]);
    operator = '';
    variables[1] = '';
    variables[0] = res;
    id = 0;
    updateScreen();
    variables[0] = '';
}

resetbtn.addEventListener('click', reset);
numeros.forEach(button => {
    button.addEventListener('click', () => {
        const regexp = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/; // <= Black Magic ;)

        if( regexp.test(variables[id]+button.innerText) ){
            variables[id] += button.innerText;
            updateScreen();
        }
    });
});

borrarbtn.addEventListener('click', del);

operadores.forEach(button => {
    button.addEventListener('click', () => {
        if(variables[0] === '' && pantalla.innerText !== '0'){
            variables[0] = pantalla.innerText;
        }

        id++;
        switch(button.innerText){
            case '+':
            case '-':
            case '/':
                operator = button.innerText;
                break;
            case 'x':
                operator = '*';
        }

        console.log('variables: ', variables, ' id: ', id, ' operator: ', operator);
    });
});

igual.addEventListener('click', calculate);