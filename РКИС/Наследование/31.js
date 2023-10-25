//Класс-потомок может переопределить метод родителя, создав метод с таким же именем.
class User {
	setName(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}

class Employe extends User { //В классе Employee сделайте геттер и сеттер возраста.
	setSalary(salary) {
		this.salary = salary;
	}
	getSalary() {
		return this.salary;
	}
	setYear(year) { //В классе Employee переопределите сеттер возраста и сделайте в нем проверку на то, что возраст от 18 до 65 лет.
		if(year > 18 && year < 65){
		  this.year = year;
		}else{
		  throw new Error('Tebe ne mozhet bit stolko let, chel');
		}
	}
	getYear() {
		return this.year;
	}
}

let employe = new Employe;

employe.setName('PupbIn9');
employe.setSalary(500);
employe.setYear(28);

let name = employe.getName();
let salary = employe.getSalary();
let year = employe.getYear();

console.log(name);
console.log(salary);
console.log(year);