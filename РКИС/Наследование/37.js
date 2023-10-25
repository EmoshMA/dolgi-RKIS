/*Приватные методы не наследуются и не видны снаружи класса. 
Иногда, однако, нужны методы, которые наследуются, но не видны снаружи класса. 
Такие методы называются защищенными (protected). JavaScript, к сожалению, не поддерживает таких методов.*/
class User {
	setName(name) {
		if (this.notEmpty(name)) {
			this.name = name;
		}
	}
	getName() {
		return this.name;
	}
	
	_notEmpty(str) { //Сделали защищенный метод при помощи _
		return str.length > 0;
	}
}
class Employee extends User {
	setSurn(surn) {
		if (this._notEmpty(surn)) { //Сделали защищенный метод при помощи _
			this.surn = surn;
		}
	}
	getSurn() {
		return this.surn;
	}
}