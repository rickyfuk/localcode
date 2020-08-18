function waitFor(seconds) {
	return new Promise(function (resolve, reject) {
		if (isNaN(seconds) || seconds < 1) {
			return reject(Error("Parameter 'seconds' must be a positive number!"));
		}

		setTimeout(function () {
			let x = 100;
			// resolve('success');
			resolve(x);
		}, seconds * 1000);

		// 	setTimeout(function () {
		// 		resolve(hello(100));
		// 	}, seconds * 1000);
	});
}

function hello(x) {
	let y = x + 100;
	console.log(`${y} is the number`);
}

waitFor(2)
	// .then(function (msg) {
	// 	console.log(msg);
	// })
	.then((num) => hello(num))
	.catch(function (err) {
		console.log(err);
	});
