// const cart = [54, 8, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for( const item of cart) {
//     total += item;
// };
// console.log(total);

// const numbers = [1, 50, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for ( const number of numbers) {
//     if(number % 2 === 0) {
//         total += number;
//     }

// }
// console.log(total);

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'kuzya';
let message;

for (const login of logins) {
    if(login === loginToFind) {
        message = `Пользователь ${loginToFind} найден.`
        
    } else {
        message = `Пользователь ${loginToFind} не найден.`;
        
    }
}
console.log(message)