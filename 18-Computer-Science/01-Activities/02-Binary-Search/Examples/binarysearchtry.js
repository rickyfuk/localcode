const testarray = [12, 18, 20, 26, 29, 33, 36, 38, 42];
const searchtarget = 21;

function binarysearch(array, target) {
	console.log(array);
	console.log(target);
	console.log(array.length);

	let maxIndex = array.length - 1;
	let minIndex = 0;
	let currentIndex;

	while (minIndex <= maxIndex) {
		currentIndex = Math.floor((maxIndex + minIndex) / 2);
		if (target === array[currentIndex]) {
			console.log(currentIndex);
			return;
		} else if (target > array[currentIndex]) {
			minIndex = currentIndex + 1;
			console.log(minIndex);
			console.log(maxIndex);
		} else if (target < array[currentIndex]) {
			maxIndex = currentIndex - 1;
			console.log(minIndex);
			console.log(maxIndex);
		}
	}

	console.log('the number does not exist');
}

binarysearch(testarray, searchtarget);
