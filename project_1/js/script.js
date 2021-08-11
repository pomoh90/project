"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres:[],
    privat: false,
     start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
        } 
     },
     rememberMyFilms: function() {
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
    },
     detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");   
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классный зритель!");
        } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман!");
        } else { 
        console.log("Произошла Ошибка!");
       }
    
       },
     showMyDB: function(hidden){
        if (!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat) {
             personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }

    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`,''); 

            if (genre == '' || genre == null) {
                console.log(' Вы ввели не корректные данные');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre; 
            }  
          }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};





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