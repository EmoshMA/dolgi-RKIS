//Приватные свойства не наследуются. Но потомок может манипулировать ими через публичные методы родителя.
class User {
	#name;
	#surn;
	
	setName(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
	
	setSurn(surn) {
		this.#surn = surn;
	}
	getSurn() {
		return this.#surn;
	}
}

class Employe extends User { //Сделайте класс Employee, который будет наследовать от этого родителя (User).
  getFull() { //Создайте объект класса Employee и вызовите унаследованные сеттеры и геттеры.
	  return this.#name + ' ' + this.#surn; //Убедитесь, что код метода приведет к ошибке.
  }
}

let employe = new Employe();

employe.setName('PupbIn9');
employe.setSurn('Zhizhkin');

let name = employe.getName();
let surn = employe.getSurn();
let full = employe.getFull();

console.log(name);
console.log(surn);
console.log(full);

