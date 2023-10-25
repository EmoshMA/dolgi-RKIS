//Приватными могут быть не только свойства, но и методы. Обычно приватными делают вспомогательные методы, чтобы они случайно не могли быть вызваны извне класса.
class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
	
	getSalary() {
		return this.#addSign(this.salary); //Сделали приватный метода 
	}
	
	#addSign(num) { //Так же приватный метод теперь
		return num + '$';
	}
}
