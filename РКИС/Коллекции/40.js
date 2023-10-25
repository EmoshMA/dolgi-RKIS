//Создайте коллекцию Set с какими-нибудь числами. Переберите эту коллекцию циклом и найдите сумму ее элементов.
let set = new Set([1,2,3,7,9]);
let sum = 0;
for (let elem of set) {
  sum = sum + elem;
}
console.log(set);
console.log(sum);