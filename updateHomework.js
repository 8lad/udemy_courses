'use strict';
let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', ''),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };
console.log(personalMovieDB);
if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (10 <= personalMovieDB.count || personalMovieDB.movies <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}
// for (let i = 0; i < 4; i++) {
//     let a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
//     if (a.length > 50 && b.length > 50) {
//         alert('error');
//         i--;
//     } else {
//         i++;
//     }

// }
for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        alert('error');
        i--;
    }




    // if (a.length > 10 || a == '') {
    //     alert('error');
    //     i--;
    // } else if (b.length > 10 || b == '') {
    //     alert('error');
    //     i--;
    // } else {
    //     personalMovieDB.movies[a] = b;
    // }

}
console.log(personalMovieDB);