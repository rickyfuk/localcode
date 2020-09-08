function myConcat(separator) {
	console.log(separator);
	let args = Array.prototype.slice.call(arguments, 1);
	return args.join(separator);
}

console.log(myConcat('1 ', 'red', 'orange', 'blue'));
