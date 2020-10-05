'use strict';

let box = document.getElementById('box');

console.log(box);

let btns = document.getElementsByTagName('button');
let btn = document.getElementsByTagName('button')[1];

console.log(btns);

let circles = document.getElementsByClassName('circle');


let hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
    console.log(item);
});
console.log(hearts[0]);

let oneHeart = document.querySelector('.heart');

console.log(oneHeart);