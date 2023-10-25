/*Даны инпуты. Переберите эти инпуты циклом и создайте коллекцию Map, ключами в которой будут инпуты, а значением - их порядковый номер на странице. 
Сделайте так, чтобы по клику на любой инпут ему в value записывался его порядковый номер.*/
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

let keys = map.keys();

for (let name of keys) {
  console.log(name);
}
