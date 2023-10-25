/*Как вы видите, эти свойства задаются один раз при создании объекта. Сейчас, однако, эти свойства невозможно прочитать, ведь они приватные и нет соответствующих методов для этого.

Давайте сделаем для наших свойств специальные методы, позволяющие прочитать эти свойства. Такие методы (их называют геттеры) должны начинаться со слова get, а затем должно идти название читаемого свойство.
*/
class Employee { //В классе Employee сделайте три приватных свойства: имя, зарплату и возраст.
	#name;
	#age;
	#salary;
	  constructor(name, age, salary) { //Передайте параметром конструктора значения этих свойств.
		  this.#name = name;
		  this.#age = age;
		  this.#salary = salary;
	  }
	  
	  getName() {
		  return this.#name;
	  }
	  getAge(){
	    return this.#age;
	  }
	  getSalary() {
		  return this.#salary;
	  }
  }

let employee = new Employee('PupbIn9', 28, 500); //Сделайте геттеры, выводящие значения каждого из наших свойств.

console.log(employee.getName());
console.log(employee.getAge());
console.log(employee.getSalary());