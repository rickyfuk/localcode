$(document).ready(function () {
	// empty array for the saving the date / time / text content
	var saveDataArray = [];
	// set the now time
	var nowDateTime = moment();
	// a variable for current hour
	var nowHour = moment(nowDateTime).hour();
	// a variable for the current date in dddd, MMMM Do YYYY format
	var nowDate = moment(nowDateTime).format('dddd, MMMM Do YYYY');
	// a variable for the current date with the time as 00:00:00 (for comparsion to change the textarea format)
	var nowDateOnly = moment(nowDateTime).set({
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0,
	});
	// set the select Date as now (default setting)
	var selectDate = nowDateTime;
	// load if there are any save date (select by the user) from the session
	loadFromDateSessionStroage();
	// set the select date as save day (if any)
	var selectDateOnly = moment(selectDate);
	// set a display date format base on the select date
	var selectDisplayDate = moment(selectDate).format('dddd, MMMM Do YYYY');
	// set a save date format base on the select date
	var selectDateSave = moment(selectDate).format('MMMM Do YYYY');

	function createHourBlock(hourCount) {
		// create div for the row
		var div1 = document.createElement('div');
		div1.setAttribute('class', 'row time-block');
		div1.setAttribute('hourRow', hourCount);
		// create div for grouping the hour-block / textarea / submit button
		var div2 = document.createElement('div');
		div2.setAttribute('class', 'input-group mb-0');
		div2.setAttribute('group', hourCount);
		// create div for the hour-block
		var div3 = document.createElement('div');
		div3.setAttribute(
			'class',
			'input-group-prepend hour align-items-center justify-content-end pr-2'
		);
		// create the textarea for the user to input the day plan
		var textarea1 = document.createElement('textarea');
		textarea1.setAttribute('class', 'form-control userinput textareaStyle');
		textarea1.setAttribute('id', 'textarea' + hourCount);
		textarea1.setAttribute('aria-label', 'With textarea');
		textarea1.setAttribute('hourTextArea', hourCount);
		// create the div for the submit button
		var div4 = document.createElement('div');
		div4.setAttribute('class', 'input-group-append');
		var button1 = document.createElement('button');
		button1.setAttribute('type', 'submit');
		button1.setAttribute('hourButton', hourCount);
		// append the element
		$('#timeBlockStart').append(div1);
		div1.append(div2);
		div2.append(div3);
		$(div3).text(moment(hourCount, ['HH']).format('h A'));
		div2.append(textarea1);
		div2.append(div4);
		div4.append(button1);
		// set the button class and add the image for save icon
		$(button1).attr('class', 'btn btn-primary saveBtn');
		$(button1).html(
			'<img src="../uwbootscamphomework5/assets/images/saveicon.png" alt ="save icon"></img>'
		);
		// load the data from local stroage
		loadFromDPLocal();
	}

	function loadFromDPLocal() {
		// load the result from local stroage
		var storedResult = JSON.parse(
			localStorage.getItem('dayplannerDataArray' + selectDateSave)
		);
		if (storedResult !== null) {
			saveDataArray = storedResult;
		}
		// run all the save data from the array and
		for (k = 0; k < saveDataArray.length; k++) {
			$('#textarea' + saveDataArray[k].saveDataHour).val(
				saveDataArray[k].saveDataText
			);
		}
	}

	function loadFromDateSessionStroage() {
		var storedDateResult = JSON.parse(sessionStorage.getItem('changeDate'));
		if (storedDateResult !== null) {
			selectDate = storedDateResult;
		}
	}

	// set the for loop in order to run the day planner after every refresh
	let hourCount = 9;
	for (let i = 0; i < 9; i++) {
		// run 9 times for the 9 hours from 9AM to 5PM
		createHourBlock(hourCount);
		hourCount++;
	}

	$('#datepicker').datepicker({
		changeMonth: true,
		changeYear: true,
	});

	$('#datepicker').on('change', function () {
		event.preventDefault();
		selectDate = $('#datepicker').datepicker('getDate');
		console.log($('#datepicker').datepicker('getDate'));
		console.log(selectDate);
	});

	// let yearCount = nowYear + 10;
	// for (let m = 0; m < nowYear - 1899 + 10; m++) {
	// 	// run 9 times for the 9 hours from 9AM to 5PM
	// 	createYearList(yearCount);
	// 	yearCount--;
	// }

	// function createYearList() {
	// 	var option1 = document.createElement('option');
	// 	$(option1).text(yearCount);
	// 	option1.setAttribute('value', yearCount);
	// 	$('#yearSelection').append(option1);
	// }

	// function createDateList(dateCount) {
	// 	var option2 = document.createElement('option');
	// 	$(option2).text(dateCount);
	// 	option2.setAttribute('value', dateCount);
	// 	$('#dateSelection').append(option2);
	// }

	// append the date to jumbotron
	$('#currentDay').append(selectDisplayDate);

	// change the color of the text area base on the time
	$('.textareaStyle').each(function (j) {
		if (selectDateOnly < nowDateOnly) {
			$('#textarea' + (j + 9)).addClass('past');
		} else if (selectDisplayDate === nowDate) {
			if (
				parseInt(nowHour) >
				parseInt($('#textarea' + (j + 9)).attr('hourTextArea'))
			) {
				$('#textarea' + (j + 9)).addClass('past');
			} else if (
				parseInt(nowHour) ===
				parseInt($('#textarea' + (j + 9)).attr('hourTextArea'))
			) {
				$('#textarea' + (j + 9)).addClass('present');
			} else {
				$('#textarea' + (j + 9)).addClass('future');
			}
		} else {
			$('#textarea' + (j + 9)).addClass('future');
		}
	});

	// when the 'go' button is click
	$('#selectDateBtn').on('click', function () {
		event.preventDefault();
		console.log(selectDate);
		// store the new date in the selectDate
		sessionStorage.setItem('changeDate', JSON.stringify(selectDate));
		// reload the page
		location.reload(true);
	});

	// when the 'go to today' button is click
	$('#returntoToday').on('click', function () {
		event.preventDefault();
		selectDate = nowDateTime;
		console.log(selectDate);
		// store the new date in the selectDate
		sessionStorage.setItem('changeDate', JSON.stringify(selectDate));
		// reload the page
		location.reload(true);
	});

	// when the save button is clicked
	$('.saveBtn').on('click', function () {
		event.preventDefault();
		// console.log($(this).attr("hourButton"));
		var hourCheck = $(this).attr('hourButton');
		// console.log(hourCheck);
		// console.log($("#textarea"+hourCheck).val().trim());
		var saveData = {
			saveDataDate: selectDateSave,
			saveDataHour: parseInt(hourCheck),
			saveDataText: $('#textarea' + hourCheck)
				.val()
				.trim(),
		};
		saveDataArray.push(saveData);
		localStorage.setItem(
			'dayplannerDataArray' + selectDateSave,
			JSON.stringify(saveDataArray)
		);
	});

	// var selectYear = moment(nowDateTime).year();
	// // when the year selection is change
	// $('#yearSelection').change(function () {
	// 	selectDateArray = [];
	// 	console.log(selectDateArray);
	// 	// the selected year will drop into the selectedDateArray-year position
	// 	$('#yearSelection').on('focus', function () {
	// 		selectYear = $('#yearSelection').val();
	// 		selectDateArray[0] = selectYear;
	// 		console.log(selectDateArray);
	// 	});
	// 	// enable the month selection
	// 	$('#monthSelection').removeAttr('disabled');
	// 	$('#monthSelection').change(function () {
	// 		// the selected month will drop into the selectedDateArray-month position
	// 		selectDateArray[1] = $('#monthSelection').val();
	// 		console.log(selectDateArray);
	// 		// enable the date selection
	// 		$('#dateSelection').removeAttr('disabled');
	// 		// empty the date coloum (in case the user click the month mulitple times)
	// 		$('#dateSelection').empty();
	// 		// find out the date for the month and put the date into the selection box
	// 		maxday = moment(selectDateArray).daysInMonth();
	// 		console.log(maxday);
	// 		// recreate the "Choose Date" heading as the drop down is empty
	// 		var option2 = document.createElement('option');
	// 		$(option2).text('Choose Date');
	// 		option2.setAttribute('value', '');
	// 		option2.setAttribute('disabled', true);
	// 		option2.setAttribute('selected', true);
	// 		$('#dateSelection').append(option2);
	// 		// for loop to load the date into the selection list
	// 		for (n = 0; n < maxday; n++) {
	// 			createDateList(n + 1);
	// 		}
	// 		// when the date is selected, put the date into the selectedDateArray-date position
	// 		$('#dateSelection').change(function () {
	// 			selectDateArray[2] = $('#dateSelection').val();
	// 			console.log(selectDateArray);
	// 			// selectDate = moment(selectDateArray);
	// 			// selectDisplayDate = moment(selectDate).format('dddd, MMMM Do YYYY');
	// 			// selectDateSave = moment(selectDate).format('MMMM Do YYYY');
	// 			$('#currentDay').empty();
	// 			$('#currentDay').append(selectDisplayDate);
	// 			$('#yearSelection').val('');
	// 			$('#monthSelection').val('');
	// 			$('#dateSelection').val('');
	// 			$('#monthSelection').attr('disabled', true);
	// 			$('#dateSelection').attr('disabled', true);
	// 			// console.log(selectDate);
	// 			// console.log(selectDisplayDate);
	// 			// console.log(selectDateSave);
	// 		});
	// 	});
	// });

	// console.log(selectDate);
	// console.log(selectDisplayDate);
	// console.log(selectDateSave);
});
