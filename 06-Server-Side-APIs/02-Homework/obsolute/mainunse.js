$(document).ready(function () {
	// A default array to keep all the city selected
	// var selectCity = [];
	// var inputByUser;
	var listState = $('.searchRecordList').attr('listShow');
	console.log(listState);

	// set the search button as white when the mouse enter the search button area
	// $('.searchCityInputBtnJS').mouseenter(function () {
	// 	console.log('search btn is changing color');
	// 	event.preventDefault();
	// 	$('.searchCityInputBtn').remove('.searchCityInputBtnImg1');
	// 	$('.searchCityInputBtn').html(
	// 		'<img class="searchCityInputBtnImg2" src="../uwbootscamphomework6/assets/images/searchWhite.png" srcset="../uwbootscamphomework6/assets/images/searchWhite.svg" alt="white search icon"/>'
	// 	);
	// });

	// reset the search button as blue when the mouse exit the search button area
	// $('.searchCityInputBtnJS').mouseleave(function () {
	// 	console.log('search btn is returning to orginal color');
	// 	event.preventDefault();
	// 	$('.searchCityInputBtn').remove('.searchCityInputBtnImg2');
	// 	$('.searchCityInputBtn').html(
	// 		'<img class="searchCityInputBtnImg1" src="../uwbootscamphomework6/assets/images/search.png" srcset="../uwbootscamphomework6/assets/images/search.svg" alt="blue search icon"/>'
	// 	);
	// });

	// unfocus the button when it is not click
	$('.searchCityInputBtn').mouseup(function () {
		$(this).blur();
	});

	// when the search city button is click
	$('.searchCityInputBtnJS').mousedown(function () {
		event.preventDefault();
		console.log('search btn is clickin');
		// locate the city name
		inputByUser = $('#searchCityInput').val();
		console.log(inputByUser);
		showResult();
	});

	// unfocus the drop Down ICON button when it is not click
	$('.dropDownIconBtn').mouseup(function () {
		$(this).blur();
	});

	// when the search city button is click
	$('.dropDownIconBtn').mousedown(function () {
		event.preventDefault();
		console.log('drop down icon btn is clickin');
		if (listState === 'notShow') {
			$('.searchRecordList').removeClass('d-none');
			listState = 'show';
			$('.dropDownIcon').removeClass('fa-angle-double-down');
			$('.dropDownIcon').addClass('fa-angle-double-up');
		} else {
			$('.searchRecordList').addClass('d-none');
			listState = 'notShow';
			$('.dropDownIcon').removeClass('fa-angle-double-up');
			$('.dropDownIcon').addClass('fa-angle-double-down');
		}
	});

	// // when the search city button is click
	// $('.searchCityInputBtn').click(function () {
	// 	event.preventDefault();
	// 	// locate the city name
	// 	inputByUser = $('#searchCityInput').val();
	// 	console.log(inputByUser);
	// 	showResult();
	// });

	$('.searchCityInputBtnJS').mousedown(function () {
		event.preventDefault();
		if (listState !== 'notShow') {
			$('.searchRecordList').addClass('d-none');
			listState = 'notShow';
		}
	});

	// when the search city input box on focus in small screen size
	// => take out the display none for showing the recent search result
	$('#searchCityInput').focus(function () {
		event.preventDefault();
		if (listState === 'notShow') {
			$('.searchRecordList').removeClass('d-none');
			listState = 'show';
		}
		// set the search city as bold when the mouse enter the city span
		$('.searchRecordSpan').mouseenter(function () {
			event.preventDefault();
			$(this).addClass('searchRecordHighlight');
		});
	});

	// hide the list again when the input box is user click somewhere outside the search city area
	$('#searchCityInput').on('pointerout', function () {
		console.log('pointout is running');
		event.preventDefault();
		if (listState !== 'notShow') {
			$('.searchRecordList').addClass('d-none');
			listState = 'notShow';
		}
	});

	$('#searchCityInput').focusout(function () {
		console.log('focusout is running');
		event.preventDefault();
		if (listState !== 'notShow') {
			$('.searchRecordList').addClass('d-none');
			listState = 'notShow';
		}
	});

	// when the city in the search history list is click
	$('.searchRecordSpan').click(function () {
		event.preventDefault();
		if (listState !== 'notShow') {
			$('.searchRecordList').addClass('d-none');
			listState = 'notShow';
		}
		inputByUser = $(this).text();
		console.log(inputByUser);
		showResult();
	});

	// set the search city as bold when the mouse enter the city span
	$('.searchRecordSpan').mouseenter(function () {
		event.preventDefault();
		$(this).addClass('searchRecordHighlight');
	});

	// reset the search city as normal when the mouse exit the city span
	$('.searchRecordSpan').mouseleave(function () {
		event.preventDefault();
		$(this).removeClass('searchRecordHighlight');
	});

	// unfocus the city name when it is not click
	$('.searchRecordSpan').mouseup(function blurInput() {
		event.preventDefault();
		$('.searchRecordSpan').blur();
	});
});
