//Класс-потомок может иметь свои методы.
//Проверьте, что в классе Employee работают как его родные методы, так и унаследованные.
class User {
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
} 
//В классе Employee сделайте геттер и сеттер зарплаты.
class Employe extends User {
    setSalary(salary) {
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}

let employe = new Employe;

employe.setName('PupbIn9');
employe.setSalary(500);

let name = employe.getName();
let salary = employe.getSalary();

console.log(name);
console.log(salary);