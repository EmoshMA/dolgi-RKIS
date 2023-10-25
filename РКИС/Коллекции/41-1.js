//Дана коллекция Set. Преобразуйте ее в массив двумя описанными способами. (Переберите эту коллекцию циклом)
let set = new Set([1, 2, 3]);
let arr = [...set];
let arrr = Array.from(set);
console.log(arr)
console.log(arrr)