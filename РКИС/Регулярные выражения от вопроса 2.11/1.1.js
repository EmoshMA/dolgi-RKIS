//регулярное, которое найходит строки 'ahb', 'acb', 'aeb' по шаблону: буква 'a', любой символ, буква 'b'.
let str = 'ahb acb aeb aeeb adcb axeb';

console.log(str.match(/a.b/g));