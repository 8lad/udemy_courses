'use strict';
let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', ''),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    },
    firstMovieQuestion = prompt('Один из последних просмотренных фильмов?', ''),
    firstMovieRate = prompt('На сколько оцените его?', ''),
    secondMovieQuestion = prompt('Один из последних просмотренных фильмов?', ''),
    secondMovieRate = prompt('На сколько оцените его?', '');
personalMovieDB.movies[firstMovieQuestion] = firstMovieRate;
personalMovieDB.movies[secondMovieQuestion] = secondMovieRate;
console.log(personalMovieDB);