"use strict"; 

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personaMovieDB.movies[prompt("Один из последних просмотренных фильмов?", "")] = prompt("На сколько оцените его?", "");

personaMovieDB.movies[prompt("Один из последних просмотренных фильмов?", "")] = prompt("На сколько оцените его?", "");

console.log(personaMovieDB);