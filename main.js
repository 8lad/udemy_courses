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

function first() {
    // do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}
first();
second();

function callback() {
    console.log('lkj');
}

function learnJS(lang, callback) {
    console.log(`i study ${lang}`);
    callback();
}
learnJS('JS', callback);

let options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};
console.log(options.colors.border);
delete options.name;
console.log(options);

for (let key in options) {
    console.log(`option ${key} and value ${options[key]}`);
}


let rabbit = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('test');
    }
};

let { border, bg } = rabbit.colors;
console.log(border);
console.log(rabbit.name);

delete rabbit.name;

console.log(rabbit);
let counter = 0;
for (let key in rabbit) {
    if (typeof(rabbit[key]) === 'object') {
        for (let i in rabbit[key]) {
            console.log(`options ${i} has value ${rabbit[key][i]}`);
            counter++;
        }

    } else {
        console.log(`option ${key} is ${rabbit[key]}`);
        counter++;
    }
}
console.log(`the number of lenght is ${counter}`);


console.log(Object.keys(rabbit).length);

rabbit.makeTest();






let car = {
    engenne: 'electronic',
    color: 'black',
    gear: 'automat',
    tank: 33,
    security: {
        alarm: 'sheriff',
        feedback: true
    },
    runDistance: function(gas, km) {
        let eating = (gas / km) * 100;
        return eating.toFixed(2);
    }
};

console.log(`your car uses ${car.runDistance(37, 300)} gas on 100 killomiters`);

for (let key in car) {
    if (typeof(car[key]) === 'object') {
        for (let i in car[key]) {
            console.log(`the ${i} has option ${car[key][i]}`);
        }
    } else {
        if (typeof(car[key]) === 'number') {
            delete car[key];
        } else {
            console.log(`the ${key} has option ${car[key]}`);
        }
    }
}
console.log(Object.keys(car));
console.log(car);
let { alarm: scream, feedback: rewiev } = car.security;
console.log(scream);


let t = 'koko';
console.log(t.length);

let tiKo = new Object();
tiKo.remote = 'Athene';
console.log(tiKo);


let house = {
    street: 'Gorbanivska',
    streetNumber: 33,
    get fullAdress() {
        return ` The full adress of your area is: ${this.street} ${this.streetNumber} `;
    },
    set fullAdress(value) {
        [this.street, this.streetNumber] = value.split(" ");
    }
};
house.fullAdress = 'Buchmy 23';
console.log(house.fullAdress);



let ni = 'gior teri sio munio';
console.log(ni.split(' '));

let food = {
    weight: 3,
    kalory: 443,
    content: 'milk'
};
let milky = food.content;
food.content = 'water';
console.log(milky, food.content);

let student = {
    name: 'Vano'
};
let professor = student;
console.log(student, professor);
professor.name = 'Tiko';
console.log(student, professor);



let arry = [1, 2, 3, 6, 8];
// arry.pop();
// arry.push(10);
// console.log(arry);


// for (let i = 0; i < arry.length; i++) {
//     console.log(arry[i]);
// }

// for (let value of arry) {
//     console.log(value);
// }

arry.forEach(function(item, i, arry) {
    console.log(`${i}: ${item} inside massive ${arry}`);
});

let string = [45, 58936, 1, 8];
// let products = string.split(", ");
string.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}


console.log(string);


let tux = [23, 34, 98, 22];

for (let key in tux) {
    console.log(key);
}


let vinny = [32, 9, 37, 982, 1];
vinny.sort(function(a, b) {
    return a - b;
});
console.log(vinny);

let siri = [2, 52, 543, 23, 6];
let fri = siri.concat(vinny);
console.log(fri.sort(function(a, b) {
    return a - b;
}));
// console.log(fri.reverse());
let su = fri.slice(0, 1);
console.log(su);


let animal = {
    type: 'dog',
    name: 'Ginoa',
    weight: 32,
    wild: false
};
let list = [];
for (let key in animal) {
    list.push(key);
}
console.log(list);
console.log(animal.type);
list.reverse();
console.log(list);




let f = 3;
let e = f;
console.log(e);
f = 5;
console.log(e);

let obje = {
    a: 1,
    b: 5
};


function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}
let numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

let newNumbers = copy(numbers);
console.log(newNumbers);

let numbersa = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

let add = {
    d: 17,
    e: 20
};
console.log(Object.assign(numbersa, add));

let figma = Object.assign({}, numbersa);
figma.a = 'lkh';
console.log(numbersa, figma);


let oldArray = ['a', 'b', 'c'];
let newArray = oldArray.slice();
newArray[0] = 2;
console.log(newArray, oldArray);

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

let numb = [2, 5, 7];
log(...numb);



let array = ['a', 'b'];
let newArra = [...array];
console.log(newArra[0] = 3, newArra);

let ie = {
    one: 1,
    two: 2
};
let iuj = {...ie };
console.log(iuj);



/// work day 17 th of august transfer information by link or by content


let s = 3;
let x = s;

x = x + 5;
console.log(x);
console.log(s);


let tyt = {
    a: 5,
    b: 1
};
let copyTyt = tyt;

copyTyt.a = 10;

console.log(tyt.a);
console.log(copyTyt.a);


let rito = {
    a: 'klj',
    e: 'halkh',
    s: 33
};


function makeCopy(mainObj) {
    let copyObj = {};
    let key;
    for (key in mainObj) {
        copyObj[key] = mainObj[key];
    }
    return copyObj;
}

let newRito = makeCopy(rito);
newRito.f = 'lkh';
console.log(newRito);
console.log(rito);


let nuumbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

let newNuumbers = makeCopy(nuumbers);
newNumbers.a = 10;




function copyO(mainOne) {
    let newObjCopy = {};
    let key;
    for (key in mainOne) {
        newObjCopy[key] = mainOne[key];
    }
    return newObjCopy;
}

let kitty = {
    name: 'Tija',
    age: 13,
    option: 'eating a lot',
    screaming: true
};



let myPet = copyO(kitty);
console.log(myPet);
myPet.gi = false;
console.log(kitty);
console.log(myPet);

let regularUser = {
    registered: true,
    coins: 32,
    likedPage: true
};

function copyRegularUser(noteUser) {
    let copyNoteUser = {},
        key;
    for (key in noteUser) {
        copyNoteUser[key] = noteUser[key];
    }
    return copyNoteUser;
}

let userFromSocial = copyRegularUser(regularUser);
userFromSocial.age = 45;
userFromSocial.name = 'Sonic';
console.log(regularUser);
console.log(userFromSocial);


let fer = {
    s: 2,
    d: 4
};
let das = {
    e: 3,
    l: 4
};

fer = Object.assign(fer, das);
console.log(fer);
fer.g = 5;
console.log(fer);
for (let k in fer) {
    console.log(`${k}:${fer[k]} `);
}


let oldArr = ['a', 'b', 'c'];
let newArr = oldArr.slice();
newArr[3] = 'd';
console.log(newArr);
console.log(oldArr);

let videos = ['youtube', 'vimeo', 'rutube'],
    blogsa = ['wordpress', 'livejournal', 'blogger'],
    internets = [...videos, ...blogsa, 'vk', 'fb'];
console.log(internets);

let students = [],
    budgetPlaces = 43;
for (let i = 0; i < budgetPlaces; i++) {
    students[i] = i + 1;
};
console.log(students.length);
let boughtPlaces = [];
let magorStudents = 21;
for (let i = 0; i < magorStudents; i++) {
    boughtPlaces[i] = i + 1;
}
console.log(boughtPlaces.length);
let allStudentPlaces = [...boughtPlaces, ...students];
console.log(allStudentPlaces);
allStudentPlaces = [...allStudentPlaces, ...students];
console.log(allStudentPlaces.length);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

let manq = [2, 4, 6];

log(...manq);

let ara = ['a', 'b'];
let newAra = [...ara];

let q = {
    one: 1,
    two: 2
};
let newQ = {...q };
console.log(newQ);


let stra = 'some';
let straObj = new String(stra);

console.log(typeof(stra));
console.log(typeof(straObj));

console.dir([1, 2, 3]);

let solder = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

let john = Object.create(solder);

// Object.setPrototypeOf(john, solder);
// // console.log(john.armor);
// john.sayHello();


let pig = {
    body: 'big',
    legs: 4,
    screaming: true
};

let Peppa = Object.create(pig);
Peppa.legs = 3;
console.log(Peppa.legs);
// Shifting types of values
// 1) To string
console.log(typeof(String(null)));
console.log(typeof(String(4)));

console.log(typeof(5 + ''));

let nim = 5;

console.log("https://vk.com/catalog/" + nim);
console.log(`https://vk.com/catalog/${nim}`);

let fontSize = 26 + 'px';

// 2) To number

console.log(typeof(Number('4')));

console.log(typeof(+'5'));

console.log(typeof(parseInt('15px', 10)));

console.log(parseInt('13px', 10));


let answer2 = +prompt("hello", '');

console.log(4 * parseInt('34px34'));


// 3) To boolean 
// to false - 0, ''(empty string), null, undefined, NaN;

let switcher = null;

if (switcher) {
    console.log('working');
}

switcher = 1;

if (switcher) {
    console.log('working');
}

console.log(typeof(Boolean('4')));

console.log(typeof(!!'43'));

let w = 5;

console.log([] + false - null + true);

let r1 = 1;

let r2 = r1 = 2;
console.log(r2);

console.log([] + 1 + 2);

console.log('3' [0]);

console.log(2 && 1 && null && 0 && undefined);

console.log(typeof(!!(1 && 2)));

console.log(null || 2 && 3 || 4);

let aa = [1, 2, 3];
let bb = [1, 2, 3];
console.log(aa === bb);

console.log(+"Infinity");

console.log("Ёжик" > "яблоко");

console.log(0 || "" || 2 || undefined || true || false);