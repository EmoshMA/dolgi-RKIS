/*При переопределении потомок теряет доступ к переопределенному методу родителю. Однако, получить к нему доступ все равно можно. 
Это делается с помощью ключевого слова super, которое указывает на родительский класс.*/
class User {
	setAge(age) {
		if (age >= 0) {
			this.age = age;
		} else {
			throw new Error('need age more 0');
		}
	}
}
class Employee {
	setAge(age) {
		if (age <= 120) {
			super.setAge(age); //В классе Employee исправьте упростите сеттер возраста, использовав оригинальный метод родителя.(Получилось при помощи ключевого слова super)
		} else {
			throw new Error('need age less 120');
		}
	}
}

alert('V konsoli nichego net, esli chto');