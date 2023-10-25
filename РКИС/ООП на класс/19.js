//Можно сделать так, чтобы методы можно было вызывать друг за другом цепочкой. Для этого каждый такой метод должен возвращать this.
//Сделайте так, чтобы сеттеры класса Employee можно было вызывать цепочкой.
class Employee {
	#name;
	#age;
	#salary;
	constructor(name, age, salary) {
		this.#name = name;
        this.#age = age;
        this.#salary = salary;
	}
    setName(name) {
		this.#name = name;
        return this;
	}
	setAge(age) {
		if (age > 0 & age < 120) {
			this.#age = age;
		} else {
			throw new Error('age is incorrect');
		}
        return this;
    }
    setSalary(salary) {
		this.#salary = salary + '$';
        return this;
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
employee.setName('PupbIn9').setAge(28).setSalary(500); //Сделано так, что сеттеры класса Employee  вызывались цепочкой.
console.log(employee.getName());
console.log(employee.getAge());
console.log(employee.getSalary());