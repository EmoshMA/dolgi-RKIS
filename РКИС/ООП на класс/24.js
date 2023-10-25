//Объекты классов можно хранить в массиве и выполнять с ними различные операции, как с элементами массива.
class Employee { //Сделайте массив объектов класса класса Employee.
	#name;
	#salary;
	
	constructor(name, salary) {
		this.#name = name;
		this.#salary = salary;
	}
	getName() {
		return this.#name;
	}
	getSalary(){
	  return this.#salary
	}
}
//Перебирите созданный массив циклом и выведите на экран имена и зарплаты каждого работника.
let employees = [
  new Employee('Zhen9', 4200),
  new Employee('Sasha', 500),
  new Employee('Kolya', 1700),
  new Employee('PupbIn9', 99999999900)
  ]
  
for (let employee of employees) {
	console.log(employee.getName() + " " + employee.getSalary());
}