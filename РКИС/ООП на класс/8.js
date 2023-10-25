//Одни методы можно вызывать внутри других через this.
class Student { //В объект класса Student запишите свойства name и surn.
	constructor(){
		this.name = "";
		this.surn = "";
	} //Создаем вспомогательный метод, который будет получать первый символ строки и делать его заглавным.
	show() {
       console.log(this.name);
	   console.log(this.surn);
	}
	cape(){ //Создаем метод, который вернет инициалы студента, то есть первые буквы его имени и фамилии.
		this.name = this.name[0].toUpperCase() + this.name.slice(1);
		this.surn = this.surn[0].toUpperCase() + this.surn.slice(1);
		this.show();
		console.log(this.name[0]);
		console.log(this.surn[0]);
	}
}

let user1 = new Student();
user1.name = 'den';
user1.surn = 'bred'
user1.cape();

