// const cats = {
// 	raining: false,
// 	noise: 'meow',
// 	makenoice() {
// 		if (this.raining === true) {
// 			console.log(this.noise);
// 		}
// 	},
// };

// for make noice is it the same as
const cats = {
	raining: false,
	noise: 'meow',
	makenoice: function () {
		if (this.raining === true) {
			console.log(this.noise);
		}
	},
};

const dogs = {
	raining: true,
	noise: 'woof',
	makenoice() {
		if (this.raining === true) {
			console.log(this.noise);
		}
	},
};

dogs.makenoice();
cats.raining = true;
// cats.makenoice();
cats.makenoice();
