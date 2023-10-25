//Для записи приватных свойств также делают методы, которые называют сеттеры. Их имена следует начинать со слова set.
class Employee {
	#name;
	#age;
	#salary;
	constructor(name, age, salary) {
		this.#name = name;
        this.#age = age;
        this.#salary = salary;
	} //Добавьте сеттеры свойств в ваш класс Employee.
    setName(name) {
		this.#name = name;
	}
	setAge(age) {
		this.#age = age;
	}
    setSalary(salary) {
		this.#salary = salary;
	}
    getName() {
        return this.#name;
    } 
    getAge() {
        return this.#age;
    }
    getSalary() {
        return this.#salary;
    }
   
}    
let employee = new Employee
employee.setName('PupbIn9');
employee.setAge(28);
employee.setSalary(500);
console.log(employee.getName());
console.log(employee.getAge());
console.log(employee.getSalary());