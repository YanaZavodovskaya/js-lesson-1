// Парс числа с Number.parseInt() и Number.parseFloat()

let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// parseInt запинается на первом не числе
// console.log('elementWidth: ', result);
elementWidth = Number.parseInt(elementWidth);
console.log('elementWidth: ', elementWidth);


let elementHeight = '200.74px';
elementHeight = Number.parseFloat(elementHeight);
// parseFloat парсит числа с плавающей точкой
console.log('elementHeignt: ', elementHeight);

// - Метод число.toFixed(digits) оставляет столько знаков после точки, сколько указываешь в скобках. 
// - Настройки на примере console.log(Number(число.toFixed(digits)))
let salary = 1300.16472;
// salary = salary.toFixed(3);
// salary = Number(salary);
salary = Number(salary.toFixed(3));
console.log(salary);
// console.log(Number(salary.toFixed(3)));


// - Приведение(преобразование) к числу Number(value)
// - Значение NaN (Not a Number) и метод Number.isNaN(value)
let quantity = '30';
let value = 'Эту строку невозможно привести к числу';

console.log('преобразует строку 5 в число', Number('5'));
console.log('true это 1', Number(true));
console.log('false это 0', Number(false));
console.log('не число', Number('hdfhnd'));


// Объект Math
    // - Возведение в степень
    // - Exponent operator
// console.log(Math);
// console.log(Math.PI);
console.log('извлекает квадратный корень', Math.sqrt(144));


// const base = 2;
// const power = 5;

// первый аргумент это число, второй аргумент это степень в которую нужно возвести
// const result = Math.pow(2, 3);

// const result = Math.pow(base, power);

// console.log('резултат возведенный в степень', result);

// оператор возведения в степень **
// console.log(2 ** 3);
// console.log(base ** power);



// *** Задача***
// Напиши скрипт, который просит пользователя ввести число и степень,
// возводит число в эту степень и выводит результат в консоль

// 1. Попросить ввести число и сохранить в переменную
// используем let так как переменную нужно будет перезаписать, то есть преобразовать в число,т.к. промт вернет строку
// let base = prompt('Введи число!');
// base = Number(base);
// console.log(base);

// 2. Попросить ввести степень и сохранить в переменную
// let power = prompt('В какую ступень нужно возвести?');
// power = Number(power);
// console.log(power);

// 3. Вохвести введенные данные в степень и вывести результат
// const result = base ** power;
// console.log(result);

// Генерим псевдослучайные числа
// - Math.random() выводит рандомное число
// - Math.round() округляет рандомное число
// - Math.random() * (max - min) + min выводит рандомное число в промежутке указанных чисел

// const max = 50;
// const min = 30;
// const result = Math.round(Math.random() * (max - min) + min);

// console.log('рандомный результат от 30 до 50', result);

const colors = ['tomato', 'teal', 'orange', 'deeppink', 'blue', 'red', 'green'];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);

const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color;