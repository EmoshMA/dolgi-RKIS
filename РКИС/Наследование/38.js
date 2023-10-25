//Введем также и защищенные свойства. Будем также начинать их имена с подчеркивания
class User {
	_name;
	
	setName(name) {
		this._name = name;
	}
	getName() {
		return this._name;
	}
}

class Employee extends User {
	setName(name) {
		if (name.length > 0) {
			this._name = name;
		}
	}
}