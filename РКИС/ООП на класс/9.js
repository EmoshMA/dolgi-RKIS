//В начале класса можно объявлять то, какие свойства будут у этого класса
class Student{ //Объявите в классе Student свойства name и surn.
	name = 'Den';
	surn = 'Bred';
	
	show() { //При объявлении добавьте вашим свойствам некоторые значения.
		return this.name;
		return this.surn;
	}
}

let user = new Student;
console.log(user.name);
console.log(user.surn);