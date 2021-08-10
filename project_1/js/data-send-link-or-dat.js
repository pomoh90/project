"use strict";

let a = 5,
    b = a;

    
b = b + 5;
console.log(b);
console.log(a);    
//--------------
const obj = {
    a: 5,
    b: 1
};

const copy = obj; // передает ссылку а не копирует объект  модифицируя меняешь и ориигнал
copy.a = 10;

console.log(copy);
console.log(obj);
//---------------------
function copys(mainObj) { //поверхостная копия  с заменой в ней данных ( НЕ ГЛУБОКАЯ второй ряд не меняет)
    let objCopys = {};

    let key;
    for (key in mainObj) {
        objCopys[key] = mainObj[key];
    }

    return objCopys;
}

const numbers = {
    a:2,
    b:5,
    c: {
        x:7,
        y:4
    }
};

const newNumbers = copys(numbers);

newNumbers.a = 10;
// newNumbers.c.x =10; // не работает!!!

console.log(newNumbers);
console.log(numbers);
//---------------------

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); //доисывает / добавляет данные в первый объект данные второго 
                                        // независимая поверхостная копия 
//------------------

const oldArray = ['a', 'b', 'c']; // опирование массива с заменой даннных!
const newArray = oldArray.slice();

newArray[1] = 'wqeqwe';
console.log(newArray);
console.log(oldArray);
//-------------------

const video = ['youtube', 'vimeo', 'rutube'],  //... операотр азворота( разворачивает все данные в массив)
      blogs = ['vordpress','lifejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);
//--------------------
function log (a, b, c) { //функция распределения копии по значениям
    console.log(a);
    console.log(b);
    console.log(c);
}
const numm = [2, 5, 7];

log(...numm);
//---------------------

const array = ["a", "b"];

const newAarray = [...array]; //полное копирование массива выше новый стандарт
//----------------------
const q = {      // полное копирование объекта по новым стандартам
    one: 1,
    two: 2
};

const newObj = {...q};
