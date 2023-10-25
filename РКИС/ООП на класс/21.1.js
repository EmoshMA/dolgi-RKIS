//Оператор instanceof позволяет проверить принадлежит ли объект определенному классу.
class Student {
	
}
class Employee {
	
}

let employee = new Employee;
console.log(employee instanceof Employee); // true
console.log(employee instanceof Student); // false