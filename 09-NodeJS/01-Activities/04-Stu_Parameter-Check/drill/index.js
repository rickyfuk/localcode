var test1 = process.argv[2];
var test2 = process.argv[3];

console.log(process.argv);
if (test1 === test2) {
	console.log(true);
} else {
	console.log(false);
}
