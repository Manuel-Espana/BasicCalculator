const buttonNumber = document.getElementsByName('data-number');
const buttonOpera = document.getElementsByName('data-opera');
const buttonEqual = document.getElementsByName('data-equal')[0];
const buttonDelete = document.getElementsByName('data-delete')[0];

var result = document.getElementById('result');
var opeCurrent = '';
var opePrevious ='';
var operation = undefined;

buttonNumber.forEach(function(button){
    button.addEventListener('click', function(){
        addNumber(button.innerText);
    });
});

buttonOpera.forEach(function(button){
    button.addEventListener('click', function(){
        selectOpera(button.innerText);
    });
});

buttonEqual.addEventListener('click', function(){
    calculate();
    actDisplay();
});

buttonDelete.addEventListener('click', function(){
    clear();
    actDisplay();
});

function addNumber(num){
    opeCurrent = opeCurrent.toString() + num.toString();
    actDisplay();
}

function selectOpera(op){
    if (opeCurrent == ''){
        return;
    }
    if (opeCurrent !== ''){
        calculate();
    }
    operation = op.toString();
    opePrevious = opeCurrent;
    opeCurrent = '';
}

function calculate(){
    var calc;
    const previous = parseFloat(opePrevious);
    const current = parseFloat(opeCurrent);

    if(isNaN(previous) || isNaN(current)){
        return;
    }
    switch(operation){
        case '+':
            calc = previous + current;
            break;
        case '-':
            calc = previous - current;
            break;
        case '*':
            calc = previous * current;
            break;
        case '/':
            calc = previous / current;
            break;
        default:
            return;
    }
    opeCurrent = calc;
    operation = undefined;
    opePrevious = '';
}

function actDisplay(){
    result.value = opeCurrent;
}

function clear(){
    opeCurrent = '';
    opePrevious = '';
    operation = undefined;
}

clear();