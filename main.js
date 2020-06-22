'use strict';
// let number = 5;
// const leftBorderWidth = 1;
// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };
// obj.a = 20;
// console.log(obj.a);
// console.log(name);
// let number = 2.3;


// console.log(-4 / 0);
// console.log('string' * 9);
// const persone = "Alex";

// let result = confirm('are you here?');
// alert(result);
// let answer = +prompt('how old are you?', '');
// alert(+answer + 3);
// let answers = [];
// answers[0] = prompt('what is your name?', '');
// answers[1] = prompt('what is your second name?', '');
// answers[2] = prompt('how old are you?', '');
// alert(typeof(answers));
// const category = 'toys';
// console.log(`https://toymarket.com/${category}/5`);

// const user = 'Ivan';
// console.log(`Privet       ${user}`);
// let incr = 10,
//     decr = 10;
// console.log(incr++, decr--);
// console.log(incr, decr);
// let isChecked = true,
//     isClose = false;
// console.log(isChecked || isClose);


// if (4 == 3) {
//     console.log('ik');
// } else {
//     console.log('rikardo quaresma');
// }

// const num = 50;
// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('lot');
// } else {
//     console.log('ok');
// }


// (num == 50) ? console.log('ok'): console.log('error');

// let a = 33,
//     y = a;
// a += y = 23;
// console.log(a, y);
// let r = typeof(a);
// console.log(r);
// let a = 3 / 'lkh';
// switch (typeof a) {
//     case 'string':
//         console.log('string');
//         break;
//     case 'number':
//         console.log('number');
//         break;
//     case 'null':
//         console.log('null');
//         break;
//     case 'object':
//         console.log('objekt');
//         break;
//         case 'NaN':
//             console.log('NadddddN');
//             break;
//     default:
//         console.log('no one of them');
//         break;
// }
// console.log(a);
// let test = 43;
// if (test % 2 == 0) {
//     console.log('your number is regular');
// } else {
//     test + 1;
//     console.log(`after some manipulation your number is regular`)
// };
// let d = 1999999910;
// (d % 2 == 0)? console.log('regular number') : console.log('irregular number');
let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }
for (let i = 1; i < 52; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}