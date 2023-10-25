class Employee {
	#name;
	
	set name(name) {  //Реализация сеттера для свойств класса Employee.
		if (name.length > 0) {
			this.#name = name;
		} else {
			throw new Error('name is incorrect'); //Добавляем проверки в сеттеры аксессоров класса Employee.
		}
	}
	
	get name() {
		return this.#name;
	}
}
let employee = new Employee;
employee.name = 'john';
let name = employee.name;
console.log(name);