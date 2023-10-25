/*В предыдущем уроке мы сделали для каждого свойства геттер и сеттер. Может возникнуть вопрос, зачем нужные такие сложности, ведь фактически того же самого эффекта можно достичь, если сделать свойства публичными, а не приватными.

Дело в том, что геттеры и сеттеры имеют преимущество: перед обращением к свойству можно выполнять некоторые проверки. К примеру, в нашем случае мы при записи имени и фамилии можем проверить, что новое значение не является пустой строкой:*/
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
	}
	setAge(age) {
		if (age > 0 & age < 120) { //В классе Employee в сеттере возраста сделайте проверку на то, что возраст должен быть от 0 до 120.
			this.#age = age;
		} else {
			throw new Error('age is incorrect');
		}
    }
    setSalary(salary) {
		this.#salary = salary + '$'; //В классе Employee в геттере зарплаты сделайте так, чтобы при чтении зарплаты в конец ее значения добавлялся знак доллара.

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