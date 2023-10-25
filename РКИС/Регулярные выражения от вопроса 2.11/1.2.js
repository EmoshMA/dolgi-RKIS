//регулярка, которая найдет строки 'abba', 'adca', 'abea' по шаблону: буква 'a', 2 любых символа, буква 'a'.
let str = 'aba aca aea abba adca abea';

console.log(str.match(/a..a/g));