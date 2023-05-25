// 2:24

// Напишите скрипт проверки пользователя при доступе к контенту
// - Есть три типа подписки: free, pro и vip
// - Получить доступ могут только пользователи pro и vip

const subscription = 'vip';

const canAccessContent = subscription === 'pro' || subscription === 'vip';

// const subscription = 'pro';
// true || false => true
// const subscription = 'vip';
// false || true => true
// const subscription = 'free';
// false || false => false


console.log('Есть доступ к контенту? ', canAccessContent);