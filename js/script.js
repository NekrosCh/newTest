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

// personaMovieDB.movies[prompt("Один из последних просмотренных фильмов?", "")] = prompt("На сколько оцените его?", "");

// personaMovieDB.movies[prompt("Один из последних просмотренных фильмов?", "")] = prompt("На сколько оцените его?", "");

// for (let i = 0; i < 2; i++) {
// 	const a = prompt("Один из последних просмотренных фильмов?", ""),
// 	      b = prompt("На сколько оцените его?", "");
// 	if (a != null && b != null && a != "" && b != "" && a.length <= 50) {
// 		personaMovieDB.movies[a] = b;
// 		console.log("done");
// 	} else {
// 		console.log("error");
// 		i--;
// 	}
// }
let rz = 0;
while (rz < 2) {
	const a = prompt("Один из последних просмотренных фильмов?", ""),
	      b = prompt("На сколько оцените его?", "");
	if (a != null && b != null && a != "" && b != "" && a.length <= 50) {
		personaMovieDB.movies[a] = b;
		console.log("done");
		rz++
	} else {
		console.log("error");
	}
}


console.log(personaMovieDB);

if (personaMovieDB.count < 10) {
	alert("Просмотрено довольно мало фильмов");
} else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
	alert("Вы классический зритель");
} else if (personaMovieDB.count > 30) {
	alert("Вы киноман");
} else { alert("Произошла ошибка");
}

