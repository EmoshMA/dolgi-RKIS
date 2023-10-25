//Объявление приватных свойств и методов через символ # появилось в JavaScript совсем недавно. До этого приходилось пользоваться специальным хитрым приемом. Его раньше делали при помощи _  нижнего подчеркивания
class Employee {
	#name;
	#salary;
	constructor(name, salary) {
		this.#name = name;
		this.#salary = salary;
	}
	
	getName(){
		return this.#name; //сделали приватное свойство
	}
	getSalary() {
		return this.#salary; //сделали приватное свойство
	}
}

class Employee{
	constructor(name, salary){
		this.name = name;
		this.salary = salary;
	}	

	getSalary() {
		return this.#addSign(this.salary); //сделали приватный метод
	}
	
	#addSign(num){ //сделали приватный метод
		return num + '$';
	}
}