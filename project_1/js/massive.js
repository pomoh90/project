 "use strict";
 const arr = [1, 21, 3 ,6 , 8];

 arr.sort(); // сортирует по первой цифре !!!
 console.log(arr);
//----------------
function compareNum (a, b){ //функция правильной сортировки чисел в массиве!
    return a - b;

}
arr.sort(compareNum);// сортировка чисел правильно
console.log(arr);
//-----------------

 arr.forEach(function(item, i, arr){ // перебор массива по порядку с элементами ( можно назначть класс каждому даному)
     console.log(`${i}: ${item} внутри массива ${arr}`);// минус что без остановки перебор 

 });



console.log(arr.length); // количество элементов в массиве последний индекс в массиве +1 ( тоесть счет не с 0 а с 1)

arr.pop(); //удалет последний элемент из массива
arr.push(10); // добавляет элемент в массив   в конец


 console.log(arr);

 for (let i=0; i <arr.length; i++) {// перебирает все элементы 1 за 1 в массиве
     console.log(arr[i]);
 }

 for(let value of arr) { // перебирает все элементы 1 за 1 в массиве + можно сделать брек и континью
    console.log(value);
 }
//--------------------
const str = prompt("", "");// запись в массив с сайта черех хапятую ( указал знак записи)
const products = str.split(", ");
products.sort();// отсортирует по имени короче по порядку
console.log(products);// массив в лог
console.log(products.join("; ")); // объеденил в троку через ;

