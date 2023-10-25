//При наследовании можно переопределять конструктор родителя.
class User {  //Пусть класс Employee наследует от класса User из данного урока.
	constructor(name, salary) {
		  this.name = name;
		  this.salary = salary;
	  }
	  
	  getName() {
		  return this.name;
	  }
	  getSalary() {
		  return this.salary;
	  }
  }
  
  class Employe extends User {  //Переопределите в класс Employee конструктор родителя, добавив в него параметр с возрастом и зарплатой.
	  constructor(name, salary) {
		  super(name, salary);
	  }
  }
  
  let employe = new Employe('PupbIn9', 500);
  
  let name = employe.getName();
  let salary = employe.getSalary();
  
  console.log(name);
  console.log(salary);