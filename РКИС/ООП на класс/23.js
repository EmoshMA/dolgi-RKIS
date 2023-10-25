//В классах можно использовать объекты других классов.
//Сделайте так, чтобы во второй и третий параметры передавались объекты отдельных классов.
class Position{
	constructor(name) {
		  this.name = name;
	  }
  }
  class Department{
	constructor(name) {
		  this.name = name;
	  }
  }
  class Employee {
	  constructor(name, position, department) {
		  this.name = name;
		  this.position = position;
		  this.department = department;
	  }
  }
  let position = new Position('Vologdadada');
  let department = new Department('NoNoNofearNolielistenmyrhythmhandsupandtalkaboutalegalize');
  let employee = new Employee('PupbIn9', position, department);
  //Выведите в консоль имя, должность и отдел для созданного работника.
  console.log(employee.name);
  console.log(employee.position.name);
  console.log(employee.department.name);
  
