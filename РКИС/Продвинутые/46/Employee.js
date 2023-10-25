//Как правило каждый класс располагают в отдельном модуле. При этом имя файла модуля должно соответствовать имени хранимого класса.
//Размещение класса Employee
export default class Employee {
	#name;
	
	constructor(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}