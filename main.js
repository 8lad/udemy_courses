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
// let num = 40;
// while (num <= 55) {
//     console.log(num);
//     num++;
// };
// do {
//     console.log(num);
//     num++;
// } while (num <= 55);

// for (let i = 1; i < 8; i++) {
//     console.log(i);
//     if (i == 3) {
//         continue;
//     }
// };

// function showFirstMessage(text) {
//     alert(text);
// };
// showFirstMessage('Hello Kitty');

// function calc(a, b) {
//     return (a + b);
// };
// alert(calc(4, 6));

// function returnVar() {
//     let num = 50;
//     return num;
// };
// let anotherNum = returnVar();
// alert(anotherNum);
// let anotherCalc = function(a, b) {
//     return (a * b);
// };
// alert(anotherCalc(5, 6));
// let testNumbers = (a, b) => a / b;
// alert(testNumbers(342, 34));

// let str = 'Montenegro';
// alert(str.length);
// alert(str.toUpperCase());
// alert(str.toLowerCase());

// let twelve = '12.2px';
// alert(Math.round(twelve));
// alert(parseInt(twelve));
// alert(parseFloat(twelve));

// function first() {
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }



// function second() {
//     console.log(2);
// }
// first();
// second();

// function learnJS(lang, callback) {
//     console.log("I'm study JavaScript" + lang);
//     callback();
// }

// function done() {
//     console.log("I've dine third lesson");
// };
// learnJS("JS", done);

// let count = function(a, b) {
//     let c = a + b;
//     return c;
// };
// console.log(count(4, 6));
// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };
// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: 'black',
//     background: 'red'
// };
// delete options.bool;
// console.log(options);

// for (let key in options) {
//     console.log('options ' + key + ' has a value ' + options[key]);
// }
// console.log(Object.keys(options).length);

// let arr = [1, 2, 3, 4, 5, 6];
// arr.forEach(function(item, i, massive) {
//     console.log('index ' + i + ' inside: ' + item + ' container ' + massive);
// });
// console.log(arr.length);
// for (let key in arr) {
//     console.log(key);
// }

// let ans = prompt("", "");
// let newar = [];
// newar = ans.split(',');
// console.log(newar);


// let contain = ['ddkjf', 'lkj', 'lkjl'];
// let method = contain.join(', ');
// console.log(method, contain);

// let contai = [133, 15, 6, 112];
// let metho = contai.sort(compairNum);

// function compairNum(a, b) {
//     return a - b;
// }
// console.log(metho, contai);
// console.log(metho);


// let dif = [333, 5234, 534];
// // let shhi = dif.join();
// console.log(dif, dif.join('_'));


// let soldier = {
//     health: 400,
//     armor: 200
// };
// let john = {
//     health: 100
// };
// john.__proto__ = soldier;
// console.log(john);
// console.log(john.armor);
// let a = 4 + '';
// console.log(typeof(a));
let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');
box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hearts) {
//     item.style.backgroundColor = 'green';
// });


let div = document.createElement('div'),
    text = document.createTextNode('Some new text');

div.classList.add('black');

// document.body.appendChild(div);
// wrapper.appendChild(div);
div.textContent = 'Hello World';

document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);
document.body.replaceChild(btn[1], circle[1]);


console.log(div);