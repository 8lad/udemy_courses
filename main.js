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
// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }
// for (let i = 1; i < 52; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }
//     console.log(i);
// }
function showFirstMessage(text) {
    console.log(text);
    let num = 22;
    return num;
}

showFirstMessage('hr');
console.log(num);

function calc(a, b) {
    return (a + b);
}
console.log(calc(3, 5));

function ret() {
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

let logger = function() {
    console.log('hello');
};
logger();

const calla = (a) => console.log(a);
calla('tutututurututu');
let trip = 349,
    fuel = 17;

function countFuelPerRoad(killomiters, liters) {
    console.log('You spent ' + (liters / killomiters) * 100 + ' liters per 100 killomiters');
}
countFuelPerRoad(trip, fuel);
let man = (km, li) => console.log('You spent ' + (li / km) * 100 + ' liters per 100 killomiters');
man(trip, fuel);
let a = 3,
    b = 3;
console.log((b, a) => (a - b));
let str = 'tester';
console.log(str.length);
console.log(str.length + 22);
let arr = [3, 4, 5, 5];
console.log(arr.length);
console.log(str[0]);



let sst = 'test',
    newS = sst.toUpperCase();
console.log(sst + ' ' + newS);

let fruit = 'Some fruit';
console.log(fruit.indexOf('fruit'));

let logg = 'Hello world';
console.log(logg.slice(2, 3));
console.log(logg.substring(2, 3));
console.log(logg.substr(6, 7));
let newP = logg.slice(0, 2) + logg.slice(9, 11);
console.log(newP);


let numba = 33.6;
console.log(Math.round(numba));

let pacman = '12.5px';
console.log(parseInt(pacman));
console.log(parseFloat(pacman));
console.log(typeof(pacman));


let userName = 'pipo';
let userSecondName = 'inzagi';
let firstLetterName = userName[0].toUpperCase();
let firstLetterSecondName = userSecondName[0].toUpperCase();
console.log(`Your initails are ${firstLetterName} ${firstLetterSecondName} so enjoy it`);


let stwr = "Ослик Иа-Иа посмотрел на виадук";
let target = "Иа";

let pos = -1;
while ((pos = stwr.indexOf(target, pos + 1)) != -1) {
    console.log(pos);
}
let foundPos = stwr.indexOf(target, pos);
console.log(foundPos);
console.log(stwr.indexOf('по'));


console.log('figaro'.includes('ro', 33));

let te = 'sone playes football from his chilhood';
console.log(te.slice(5, 11));

let jons = 'д';
console.log(jons.codePointAt());

console.log(String.fromCodePoint(1083));
console.log("${29331}");


let arra = [];

for (let i = 22; i < 653; i++) {
    let y = 0;
    arra[y] = i.fromCodePoint();
    y++;
    console.log(arra);
}
let tty = 0xdd;
console.log(tty);

let im = 3223;
let re = im.toString(36);
console.log(+re + ' ' + typeof(re));

let iop = 199.50;
console.log(Math.trunc(iop));