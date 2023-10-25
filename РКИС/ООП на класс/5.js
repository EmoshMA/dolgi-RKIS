//Методы могут принимать параметры
class Employee {
  //Передаем в ваш тестовый метод имя и зарплату работника.
   show(name, salary) {
       return ' Den Директор '
  }
}

let user1 = new Employee();
user1.name = 'den';
user1.salary = 10000000000000000;
console.log(user1.name);
console.log(user1.salary);
console.log(user1.show());
let user2 = new Employee();
user2.name = 'ben';
user2.salary = 100;
console.log(user2.name);
console.log(user2.salary);