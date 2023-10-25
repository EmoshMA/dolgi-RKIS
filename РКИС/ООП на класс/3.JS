//Можно создавать несколько объектов одного класса. К примеру, создадим двух юзеров
class Employee {



}


//Создаем несколько объектов класса Employee.
//Записываем в свойство каждого работника его имя и зарплату.
let user1 = new Employee();

user1.name = 'den';

user1.salary = 10000000000000000;

//Выводим на экран сумму зарплат созданных вами работников.
console.log(user1.name);

console.log(user1.salary);

let user2 = new Employee();

user2.name = 'ben';

user2.salary = 100;

console.log(user2.name);

console.log(user2.salary);