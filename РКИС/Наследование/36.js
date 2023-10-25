//То, что приватные свойства не наследуются, может привести к неожиданной проблеме.
class User {
	#name;
	
	setName(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}

class Employee extends User {
	setName(name) {
		if (name.length > 0) {
			name = this.getName(); //В следущем коде в классе потомка исправлен переопределяющийся метод родителя. 
		}
	}
}