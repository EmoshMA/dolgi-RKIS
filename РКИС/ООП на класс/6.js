//Внутри методов класса this будет указывать на объект этого класса
class Employee {
  //В объект класса Employee записываем свойства name и salary.
   show(name, salary) {
       return name + ' Den and '+ salary ;
  }
}

let user1 = new Employee();
user1.name = 'den';
user1.salary = 10000000000000000;
console.log(user1.name);
console.log(user1.salary);
console.log(user1.show('john', 'smit')); //Создане метод, который выведет на экран имя работника. 

let user2 = new Employee(); 
user2.name = 'ben';
user2.salary = 100;
console.log(user2.name);
console.log(user2.salary);