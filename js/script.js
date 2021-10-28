let input = document.querySelector('.input');
let itemDeg = document.querySelector('.itemDeg');
let itemSin = document.querySelector('.itemSin');
let itemCos = document.querySelector('.itemCos');
let itemTan = document.querySelector('.itemTan');
let itemCtg = document.querySelector('.itemCtg');
let itemXY = document.querySelector('.itemXY');
let itemLg = document.querySelector('.itemLg');
let itemIn = document.querySelector('.itemIn');
let itemX2 = document.querySelector('.itemX2');
let itemClean = document.querySelector('.itemClean');
let itemBack = document.querySelector('.itemBack');
let itemPercent = document.querySelector('.itemPercent');
let itemDivision = document.querySelector('.itemDivision');
let itemX_1 = document.querySelector('.itemX-1');
let itemAddition = document.querySelector('.itemAddition');
let itemSubtraction = document.querySelector('.itemSubtraction');
let itemFactorial = document.querySelector('.itemFactorial')
let itemMultiplication = document.querySelector('.itemMultiplication');
let itemSquareRoot = document.querySelector('.itemSquareRoot');
let itemPi = document.querySelector('.itemPi');
let itemEulerNumber = document.querySelector('.itemEulerNumber');
let itemEqual = document.querySelector('.itemEqual');
let itemZero = document.querySelector('.itemZero');
let itemDot = document.querySelector('.itemDot');
let items = document.querySelectorAll('.item');

itemDeg.addEventListener('click', calculateDegOrRad);
itemSin.addEventListener('click', calculateTrigonometricFunctions);
itemCos.addEventListener('click', calculateTrigonometricFunctions);
itemTan.addEventListener('click', calculateTrigonometricFunctions);
itemCtg.addEventListener('click', calculateTrigonometricFunctions);
itemXY.addEventListener('click', addPowerOperations);
itemLg.addEventListener('click', сalculateLogarithms);
itemIn.addEventListener('click', сalculateLogarithms);
itemX2.addEventListener('click', addPowerOperations);
itemClean.addEventListener('click', clean);
itemBack.addEventListener('click', back);
itemPercent.addEventListener('click', addPercent);
itemDivision.addEventListener('click', division);
itemX_1.addEventListener('click', addPowerOperations);
itemAddition.addEventListener('click', insert);
itemSubtraction.addEventListener('click', insert);
itemFactorial.addEventListener('click', сalculateFactorial);
itemMultiplication.addEventListener('click', multiplication);
itemSquareRoot.addEventListener('click', addPowerOperations);
itemPi.addEventListener('click', addConstants);
itemEulerNumber.addEventListener('click', addConstants);
itemEqual.addEventListener('click', equal);
itemZero.addEventListener('click', insert);
itemDot.addEventListener('click', addDot);

for (let item of items) {
    item.addEventListener('click', insert);
}

//Сохранённая часть выражения для возведения в степень
let variable_itemXY = "";

//Функция присвоения значения в инпут
function insert() {
    if (input.textContent == 0) {
        input.textContent = "";
        input.textContent += this.innerHTML;
    } else {
        input.textContent += this.innerHTML;
    }
}

//Функция очистки
function clean() {
    input.textContent = "0";
    variable_itemXY = "";
}

//Функция удаления последней цифры
function back() {
    let variable_back = input.textContent;
    input.textContent = variable_back.substring(0, variable_back.length-1);

    if (input.textContent == 0) {
        input.textContent = "0";
    }
}

//Функция получения числа / 100%
function addPercent() {
    input.textContent = eval(input.textContent)/100;
}

//Функция умножения
function multiplication() {
    input.textContent += "*";
}

//Функция деления
function division() {
    input.textContent += "/";
}

//Функция получения результата после равно
function equal() {
    let variable = input.textContent;

    if ( input.textContent.includes("^") ) {                         //проверка на знак "^"
        let variable_1 = input.textContent.split("^");       //формируем массив подстрок
        let variable_2 = eval(variable_itemXY);
        let pow = +variable_1[1];

        input.textContent = Math.pow(variable_2, pow);
        // variable_itemXY = "";
        return;                                                      //после выполнения условия функция прерывается
    }

    if (variable) {
        input.textContent = eval(variable);
    }
}

//Функция добавления точки
function addDot() {
    input.textContent += '.';
}

//Функция добавления константы для ПИ и числа Эйлера
function addConstants() {
    /*function addPi() {
    let i = 0;
    for (; i <= 100; ) {
        if (input.textContent == i++) {
            input.textContent = "";
        }
    }
    input.textContent = input.textContent + Math.PI.toFixed(8);
}
function addItemEulerNumber() {
    let i = 0;
    for (; i <= 100; ) {
        if (input.textContent == i++) {
            input.textContent = "";
        }
    }
    input.textContent = input.textContent + Math.E.toFixed(8);
}*/

    if (input.textContent == 0) {
        input.textContent = "";
    }

    if (this.className == "itemPi") {
        input.textContent = input.textContent + Math.PI.toFixed(8);
    }

    if (this.className == "itemEulerNumber") {
        input.textContent = input.textContent + Math.E.toFixed(8);
    }
}

//Функция квадратного корня, возведения в степень
function addPowerOperations() {
    if (this.className == "itemXY") {
        variable_itemXY = input.textContent;
        input.textContent += "^";
    }

    if (this.className == "itemX2") {
        input.textContent = Math.pow(eval(input.textContent), 2);
    }

    if (this.className == "itemX-1") {
        input.textContent = Math.pow(eval(input.textContent), -1);
    }

    if (this.className == "itemSquareRoot") {
        input.textContent = Math.sqrt( eval(input.textContent) );
    }
}

//Функция добавления уравнения для вычисления факториала числа
function addFactorialEquations(n) {
    return (n != 1) ? n * addFactorialEquations(n - 1) : 1;
}

//Функция вычисления факториала числа
function сalculateFactorial() {
    input.textContent = addFactorialEquations( +eval(input.textContent) );
}

//Функция вычисления логарифма
function сalculateLogarithms() {
    if (this.className == "itemLg") {
        input.textContent = Math.log10(eval(input.textContent)).toFixed(8);
    }

    if (this.className == "itemIn") {
        input.textContent = Math.log(eval(input.textContent)).toFixed(8);
    }
}

// Переключение с градусов на радианы
function calculateDegOrRad() {
    if (this.textContent == "deg") {
        this.textContent = "rad";

        console.log("Градусы");

    } else if (this.textContent == "rad") {
        this.textContent = "deg";

        console.log("Радианы");
    }
}

//Функция триганометрических преобразований
function calculateTrigonometricFunctions() {
    if (this.className == "itemSin") {
        if (itemDeg.textContent == "deg") {
            //синус 30 градусов, обрезаем до 8 символов, переводим в строку, возвращаем число с плавающей точкой
            input.textContent = parseFloat(Math.sin(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //синус в радианах
            //input.textContent = Math.sin(eval(input.textContent)).toFixed(8);
            input.textContent = parseFloat(Math.sin(eval(input.textContent)).toFixed(8).toString());
        }
    }

    if (this.className == "itemCos") {
        if (itemDeg.textContent == "deg") {
            //косинус 30 градусов, обрезаем до 8 символов, переводим в строку, возвращаем число с плавающей точкой
            input.textContent = parseFloat(Math.cos(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //косинус в радианах
            //input.textContent = Math.cos(eval(input.textContent)).toFixed(8);
            input.textContent = parseFloat(Math.cos(eval(input.textContent)).toFixed(8).toString());
        }
    }

    if (this.className == "itemTan") {
        if (itemDeg.textContent == "deg") {
            //тангенс 30 градусов, обрезаем до 8 символов, переводим в строку, возвращаем число с плавающей точкой
            input.textContent = parseFloat(Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //тангенс в радианах
            //input.textContent = Math.cos(eval(input.textContent)).toFixed(8);
            input.textContent = parseFloat(Math.tan(eval(input.textContent)).toFixed(8).toString());
        }
    }

    if (this.className == "itemCtg") {
        if (itemDeg.textContent == "deg") {
            //котангенс 30 градусов, обрезаем до 8 символов, переводим в строку, возвращаем число с плавающей точкой
            input.textContent = parseFloat(1 / Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //котангенс в радианах
            //input.textContent = Math.cos(eval(input.textContent)).toFixed(8);
            input.textContent = parseFloat(1 / Math.tan(eval(input.textContent)).toFixed(8).toString());
        }
    }
}