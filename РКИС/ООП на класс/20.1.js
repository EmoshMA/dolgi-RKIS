//Давайте посмотрим, как сравниваются переменные, содержащие объекты. Две переменные будут считаться равными, если они содержат ссылку на один и тот же объект.
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('john');
let emp2 = new Employee('eric');

console.log(emp1 === emp2); // результат false 