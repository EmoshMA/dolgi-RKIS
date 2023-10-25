/*Давайте теперь научимся работать со свойствами объектов. Свойства позволяют записывать в объект, а затем прочитывать из него некоторые данные.*/
class Employee {



}

//В объект класса Employee запишисаны свойства name, age и salary.
let user = new Employee();

user.name = 'den';

user.age = 23;

user.salary = 10000000000000000;

//Получите данные из записанных свойств и выведите их на экран.
console.log(user.name);

console.log(user.age);

console.log(user.salary);