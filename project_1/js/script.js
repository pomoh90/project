"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};

const a = prompt('Один из последний просмотренных фильмов?',''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последний просмотренных фильмов?',''),
      d = prompt('На сколько оцените его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);




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