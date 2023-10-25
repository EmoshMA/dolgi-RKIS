//В конструктор можно передавать параметры.
class Employee { //Передайте в конструктор класса Employee имя и зарплату работника.
	constructor(name, salary) {
		console.log(name + ' получил ' + salary);
	}
}

new Employee('john', '100');