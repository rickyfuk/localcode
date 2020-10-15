// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
const arraySize = 40;

// // Case 2 - Large set of Numbers
// let arraySize = 400000;

let array = [];
for (let index = 0; index < arraySize; index++) {
	let randomNumber = Math.round(Math.random() * arraySize);

	array.push(randomNumber);
}

// ================================================
// SOLUTION - Selection Sort
// ================================================

function swap(items, firstIndex, secondIndex) {
	let temp = items[firstIndex];
	items[firstIndex] = items[secondIndex];
	items[secondIndex] = temp;
}

function selectionSort(items) {
	let min;
	// FILL IN YOUR CODE HERE
	// Use the above swap function when you are ready to start swapping elements in the array.
	for (i = 0; i < items.length; i++) {
		min = 0;
		for (j = 0; j < items.length; j++) {
			if (min < items[j]) {
				min = item;
				swap(items, items[i], items[j]);
			}
		}
	}
}

// ================================================
// FUNCTION CALL
// ================================================
console.log('PRE-SORT');
console.log(array.join(' '));
console.log('---------------------------');
console.log('POST-SORT');
console.log(selectionSort(array).join(' '));
