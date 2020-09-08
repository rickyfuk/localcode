function Arithmetic(number) {
	this.number = number;
}

Arithmetic.prototype.plus = function (num = 0) {
	console.log(this.number);
	console.log(num);
	const newNumber = this.number + num;

	return new Arithmetic(newNumber);
};

Arithmetic.prototype.minus = function (num = 0) {
	const newNumber = this.number - num;

	return new Arithmetic(newNumber);
};

Arithmetic.prototype.value = function () {
	return this.number;
};

console.log('hello..i am testing');

module.exports = Arithmetic;
