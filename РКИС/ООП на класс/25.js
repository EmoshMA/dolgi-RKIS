//Классы параметрами методов могут принимать объекты других классов и манипулировать этими объектами.
class Employee {
	#name;
	salary;
	
	constructor(name, salary) {
		this.#name = name;
		this.salary = salary;
	}
	getName() {
		return this.#name;
	}
	getSalary() {
	  return this.salary;
	}
}
//Сделайте класс EmployeesCollection, который будет содержать массив работников.
class EmployeesCollection {
	#users;
	#salaries;
	//
	constructor() {
		this.#users = [];
		this.#salaries = [];
	} //Сделайте в этом классе метод для добавления нового работника.
	add(user, salary) {
		this.#users.push(user);
		this.#salaries.push(salary);
	}
	show() { //Сделайте в этом классе метод для вывода всех работников.
		for (let user of this.#users) {
			console.log(user.getName());
		}
	}
	summ(){ //Сделайте в этом классе метод для расчета суммарной зарплаты всех работников.
	  let sum = 0;
	  let sum2 = 0;
	  for (let salary of this.#salaries) { //Сделайте в этом классе метод для расчета средней зарплаты всех работников.
			sum2 = salary.getSalary();
			sum += sum2;
			console.log(sum2);
		}
	}
}
//
let ec = new EmployeesCollection;

ec.add(new Employee('Zhen9', 4200));
ec.add(new Employee('Sasha', 500));
ec.add(new Employee('Kolya', 1700));
ec.add(new Employee('PupbIn9', 99999999900));

ec.show();
ec.summ();

console.log(ec.show);
console.log(ec.summ);