class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('john');
let emp2 = emp1;

console.log(emp1 === emp2); // true