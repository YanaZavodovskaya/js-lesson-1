// Длина строки свойство length
const message = 'В этой строке 26 символов.';

// Конкатенация строк
const firstName = 'Tom';
const lastName = 'Lord';

// Напиши скрипт, который выведет строку в формате:
// "Гость x y поселяется в z номер q"
// подставив вместо x y z q значения переменных

const room = 716;
const type = 'VIP';

// const welcomeMsg = 'Гость ' + firstName + ' ' + lastName + ' поселяется в ' + type + ' номер ' + room;
const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
console.log(welcomeMsg);

// Шаблонные строки (template strings)
// возвращаемся составлению строки поселения в отель

const quantity = 12;
const orderMsg = `Вы заказываете ${quantity} холодильников`;

console.log(orderMsg);


// Нормализация с методом toLowerCase()
// Что ищем?

let brand = 'SamSUng';
// строка индексируется, поэтому мы можем вывести любой её символ
// индексация начинается с 0 и до длина строки минус 1
console.log(brand[4]);
// сначала вызовется метод слайс, отделит первыый символ, а ловеркейс приведёт остальные к нижнему регистру
console.log(brand.slice(1).toLowerCase());

brand = brand[0] + brand.slice(1).toLowerCase();
console.log(brand);

// Поиск в строке с методом incLudes()
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
const string3 = 'Рекламная компания #fatlivesmatter';

console.log(string1.includes(blacklistedWord1));
console.log(string1.includes(blacklistedWord2));

console.log(string2.includes(blacklistedWord1));
console.log(string2.toLowerCase().includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord1));
console.log(string3.includes(blacklistedWord2));

