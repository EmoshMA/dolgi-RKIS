//Можно выполнять наследования от класса, который сам является потомком.
class User {
	setName(name) {
		this._name = name;
	}
	getName() {
		return this._name;
	}
}
//Сделайте класс Employee, который будет наследовать от класса User.
class Employee extends User {
	setSalary(salary) {
		this._salary = salary;
	}
	getSalary() {
		return this._salary;
	}
}
//Сделайте класс Programmer, который будет наследовать от класса Employee.
class Programmer extends Employee {
	setProgrammerSkill(skill) {
		this._skill = skill;
	}
	getProgrammerSkill() {
		return this._skill;
	}
}
//Сделайте классы Designer, который будет наследовать от класса Employee.
class Designer extends Employee {
	setDesignerSkill(skill) {
		this._skill = skill;
	}
	getDesignerSkill() {
		return this._skill;
	}
}
//Добавьте в созданные вами классы различные методы.