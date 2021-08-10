"use strict";



let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
     } 
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последний просмотренных фильмов?',''),
          b = prompt('На сколько оцените его?','');
    
    if (a != null  && b != null && a != '' && b !='' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    }  else {
        console.log('error');
        i--;
    }
}
}

 rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");   
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классный зритель!");
    } else if (personalMovieDB.count >= 30) {
    console.log("Вы иноман!");
    } else { 
    console.log("Произошла Ошибка!");
    }

   }



 detectPersonalLevel();

function showMyDB (hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB (personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`,'');
    
}
}
writeYourGenres();




// let incr = 10,
//     decr = 10;


// incr++;
// decr--;

// console.log(incr);
// console.log(decr);
    
















// const category = 'toys';

// console.log(`https://someurl.com/${category}/5` );

// const user = 'Ivan';
// alert(`Hi,${user}`);

// let number = 5;
// const leftBorderWidth = 1;


// number = 10;
// console.log(number);

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false

// };

// console.log(obj.name);

// let arr = ['plum.png','orange.jpeg',6,'apple.png',{}];

// const res = confirm("ti tyt?");
// console.log(res);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('имя','');
// answers[1] = prompt('возраст','');
// answers[2] = prompt('фамилия','');

// console.log(typeof(answers));