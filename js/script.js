"use strict"; 

// let numberOfFilms;

// function start() {
// 	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// 	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// 	}
// } 

// start();

const personaMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	start: function() {
		let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
	}
	personaMovieDB.count = numberOfFilms;
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++) {
			const a = prompt("Один из последних просмотренных фильмов?", ""),
				  b = prompt("На сколько оцените его?", "");
			if (a != null && b != null && a != "" && b != "" && a.length <= 50) {
				personaMovieDB.movies[a.trim()] = b.trim();
				console.log("done");
			} else {
				console.log("error");
				i--;
			}
		}
	},
	detectPersonalLevel: function() {
		if (personaMovieDB.count < 10) {
			alert("Просмотрено довольно мало фильмов");
		} else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
			alert("Вы классический зритель");
		} else if (personaMovieDB.count > 30) {
			alert("Вы киноман");
		} else { alert("Произошла ошибка");
		}
	},
	showMyDB: function() {
		if (personaMovieDB.privat == false) {
			console.log(personaMovieDB);
		}
	},
	writeYourGenres: function() {
		for (let i = 1; i < 4; i++) {
			const genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
			if (genre == null || genre == "" || genre.length > 50 ) {
				console.log("error");
				i--;
			} else {
				personaMovieDB.genres[i - 1] = genre.trim();
				console.log("done");
			}
		}
		personaMovieDB.genres.forEach((item, i) => console.log(`Любимый жанр ${i+1} - это ${personaMovieDB.genres[i]}\n`));
	},
	toggleVisibleMyDB: function() {
		if (personaMovieDB.privat) {
			personaMovieDB.privat = false;
		} else {
			personaMovieDB.privat = true;
		}
	}
};

personaMovieDB.start();
personaMovieDB.rememberMyFilms();
personaMovieDB.detectPersonalLevel();
personaMovieDB.writeYourGenres();
personaMovieDB.toggleVisibleMyDB();
personaMovieDB.showMyDB();


// function rememberMyFilms() {
// 	for (let i = 0; i < 2; i++) {
// 		const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
// 			  b = prompt("На сколько оцените его?", "").trim();
// 		if (a != null && b != null && a != "" && b != "" && a.length <= 50) {
// 			personaMovieDB.movies[a] = b;
// 			console.log("done");
// 		} else {
// 			console.log("error");
// 			i--;
// 		}
// 	}
// }


// let rz = 0;
// while (rz < 2) {
// 	const a = prompt("Один из последних просмотренных фильмов?", ""),
// 	      b = prompt("На сколько оцените его?", "");
// 	if (a != null && b != null && a != "" && b != "" && a.length <= 50) {
// 		personaMovieDB.movies[a] = b;
// 		console.log("done");
// 		rz++
// 	} else {
// 		console.log("error");
// 	}
// }


// function detectPersonalLevel() {
// 	if (personaMovieDB.count < 10) {
// 		alert("Просмотрено довольно мало фильмов");
// 	} else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
// 		alert("Вы классический зритель");
// 	} else if (personaMovieDB.count > 30) {
// 		alert("Вы киноман");
// 	} else { alert("Произошла ошибка");
// 	}
// }


// function showMyDB() {
// 	if (personaMovieDB.privat == false) {
// 		console.log(personaMovieDB);
// 	}
// }

// function showMyDB (hidden) {
// 	if (!hidden) {
// 		console.log(personaMovieDB);
// 	}
// }
// showMyDB (personaMovieDB.privat);

// showMyDB();

// function writeYourGenres() {
// 	for (let i = 1; i < 4; i++) {
// 		const genre = prompt(`Ваш любимый жанр под номером ${i}`, "").trim();
// 		if (genre == null || genre == "" || genre.length > 50 ) {
// 			console.log("error");
// 			i--;
// 		} else {
// 			personaMovieDB.genres[i - 1] = genre;
// 			console.log("done");
// 		}
// 	}
// }
