//«геттер» – для чтения сеттер – когда значение присваивается.
// геттер, срабатывает при чтении obj.propName
//Реализация геттера аксессоров для свойств класса Employee
class Employee {
	#name;
	
	constructor(name) {
		this.#name = name;
	}
	
	get name() {
		return this.#name;
	}
}
let employee = new Employee('john');
let name = employee.name;
console.log(name);
employee.name = 'eric';
console.log(name);