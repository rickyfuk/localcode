async function waitFor(seconds) {
	try {
		if (isNaN(seconds) || seconds < 1) {
			throw new Error("Parameter 'seconds' must be a positive number!");
		}
		setTimeout(function () {
			console.log('Success!');
		}, seconds * 1000);
	} catch (e) {
		console.log(e.message);
	}
}

waitFor(-2);
