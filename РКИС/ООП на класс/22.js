//Иногда классы используют для группировки методов схожей тематики. В этом случае как правило создается только один объект этого класса и его методы используются много раз в различных ситуациях.
class Validator { //Сделайте класс Validator, который будет выполнять проверку строк на корректность.
	isString(str) {
		return (typeof str === 'string');
	}
	isEmail(eml) {
		return ((eml.indexOf('@') !== -1) && (eml.indexOf('.') !== -1)) //Сделайте в вашем классе метод isEmail, проверяющий строку на то, что она корректный email.
	}
    isDomain(dom) {
        return ((dom.indexOf('.com') !== -1) || (dom.indexOf('.ru') !== -1)) //Сделайте в вашем классе метод isDomain, проверяющий строку на то, что она корректное имя домена.
    }
    isNumber (num) {
        return (typeof num === 'number'); //Сделайте в вашем классе метод isNumber, проверяющий строку на то, что она содержит только числа.
    }
}
let validator = new Validator();
let res = validator.isString ('20')
console.log(res)
res = validator.isEmail ('pupbinka28@rubl.ru')
console.log(res)
res = validator.isDomain ('pupbin9.ru')
console.log(res)
res = validator.isNumber (20)
console.log(res)