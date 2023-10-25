class Employee {
	constructor(name, salary, coeffs) {
		this.name = name;
		this.salary = salary;
		this.coeffs = coeffs;
	}
	
	getTotal() {
		return this.coeffs.reduce(coeff => {  //сдесь исправлено и повился контенкст. Потому что мы убрали обьект res, и ввели стрелочную функцию. 
			//Выражения стрелочных функций имеют более короткий синтаксис по сравнению с функциональными выражениями и лексически привязаны к значению this. 
			return this.salary * coeff;
		}, 0);
	}
}

let employee = new Employee('john', 1000, [1.1, 1.2, 1.3]);
let total = employee.getTotal();
console.log(total);
