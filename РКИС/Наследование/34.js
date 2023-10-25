//Приватные методы не наследуются. Это сделано специально, чтобы не нарушать инкапсуляцию. 
class User {
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
	  #capeFirst(str) {
		  return str[0].toUpperCase() + str.slice(1);
	  }
  }
  
  class Employe extends User { //Попробуйте в классе Employee воспользоваться приватным методом родителя.
	  constructor(name, salary) {
		  super(name, salary);
	  }
	  getName() {
		  return this.#capeFirst(this.name); 
	  }
  }
  
  let employe = new Employe('PupbIn9', 500);
  
  let name = employe.getName();
  let salary = employe.getSalary();
  
  console.log(name);