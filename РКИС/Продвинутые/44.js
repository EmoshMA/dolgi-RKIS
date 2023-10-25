//Имена свойств и методов не должны совпадать, это вызовет конфликт.
class Employee {
	constructor(salary) {
		this.salary = salary;
	}
	GetSalary() {  //мы заменили метод с salaty на Getsalary, что бы избежать совпадения свойства и метода, а так же корректной работы
		return this.salary + '$';
	}
}

let employee = new Employee(4000);
console.log(employee.GetSalary());
