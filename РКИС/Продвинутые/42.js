//Можно получить исходный код метода класса, если обратиться к нему без круглых скобок.
//Выведит исходный код какого-нибудь метода класса Employee.
class Employee {
	#name;
	
	constructor(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}

let employee = new Employee('Denis');
console.log(employee.getName);