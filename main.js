'use strict';

// let test = 2;
// let persone = {
//     name: 'Josh',
//     secondName: 'Lili',
//     age: 34,
//     isMaried: false
// };
// let arr = ['plum.png', 'apple.bmp', 'local.jpg'];
// console.log('put this ' + arr[0], arr[2] + ' on your phone');
// alert('hi kitty');
// confirm(test + ' are you have this numbers?');
// console.log(confirm(test + ' are you have this numbers?'));
// let yo = prompt('do you have 17?', '');
// console.log(yo);
// console.log(typeof(null));
// console.log('arr' + '-object');
// console.log(3);
// let incr = 10,
//     decr = 10;
// console.log(incr++);
// console.log(decr-- % 7);
// console.log(2 === '2');
// let isChecked = true,
//     isClose = false;
// console.log(isChecked || isClose);
// if (2 * 4 == 3) {
//     console.log('correct');
// } else {
//     console.log('incorrect');
// };
// let num = 150;
// if (num < 49) {
//     console.log('incorrect');
// } else if (num > 100) {
//     console.log('lot');
// } else {
//     console.log('correct');
// }
// (num == 50) ? console.log('correct'): console.log('incorrect');
// switch (num) {
//     case num < 49:
//         console.log('incorrect');
//         break;
//     case num > 100:
//         console.log('lot');
//         break;
//     case 50:
//         console.log('correct');
//         break;
//     default:
//         console.log('something');
// }
// let count = 5;
// switch (count) {
//     case count > 58:
//         console.log('lot');
//         break;
//     case count < 20:
//         console.log('less');
//         break;
//     case 25:
//         console.log('correct');
//         break;
//     default:
//         console.log('strange number');
// }
let num = 40;
while (num <= 55) {
    console.log(num);
    num++;
};
do {
    console.log(num);
    num++;
} while (num <= 55);

for (let i = 1; i < 8; i++) {
    console.log(i);
    if (i == 3) {
        continue;
    }
}