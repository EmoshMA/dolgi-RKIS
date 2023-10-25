/*Даны инпуты. В каждый инпут можно ввести число. Пусть по нажатию на Enter инпут запоминает введенное число. 
Сделайте так, чтобы по потери фокуса в инпуте в консоль выводился массив всех введенных ранее в инпут чисел.*/
let map = new Map;

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [1, 9];
let object1 = {};
let object2 = {};
let object3 = {};

map.set(object1, arr1);
map.set(object2, arr2);
map.set(object3, arr3);

let values = map.values();

for (let name of values) {
  console.log(name);
}