//Создан метод, который выведет на экран зарплату работника.
class Employee {
   show() {
       console.log(this.name);
	   console.log(this.salary);
  }
}

let user1 = new Employee();
user1.name = 'den';
user1.salary = 10000000000000000;
user1.show();
