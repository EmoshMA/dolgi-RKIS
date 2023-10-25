//Свойства объекта, которые можно прочитывать и записывать извне, называются публичными. Существуют также приватные свойства, которые будут доступны только внутри класса.
class Employee { //В классе Employee сделайте три приватных свойства: имя, зарплату и возраст.
	#name;
	#age;
	#salary;
	
	constructor(name, age, salary) { //Передайте параметром конструктора значения этих свойств.
		this.#name = name;
		this.#age = age;
		this.#salary = salary;
		
	}
	show(){ //Сделайте метод, который выведет данные работника.
		return this.#name + ', ' + this.#age + ' года' + ' Продал унитаз за ' + (this.#salary + this.#salary/10);
	}
}

let user = new Employee('john', 22, 100);
console.log(user.show());
