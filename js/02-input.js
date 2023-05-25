// - Ввод пользователя
// - Методы window.confirm() и window.prompt()

// 'Хотите продлить подписку?'

// const shouldRenew = confirm('Хотите продлить подписку?');
// console.log(shouldRenew);

// 'Введите количество товаров'
// Промт всегда возвращает строку, что бы ты не ввёл. Поэтому мы преобразовываем его в Намбер
let quantity = prompt('Введите количество товаров');
quantity = Number(quantity);
console.log(quantity);
console.log(typeof quantity);