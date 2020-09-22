$(document).ready(() => {
	// This file just does a GET request to figure out which user is logged in
	// and updates the HTML on the page
	// original code
	$.get('/api/user_data').then((data) => {
		$('.member-name').text(data.email);
	});
	// origianl code end

	// try1 (this trial is try to use to send the data to html directly instead of passing through a get request)
	// $.get('/').then((data) => {
	// 	$('.member-name').text(data.email);
	// });
	// try 1 end
	// findings: we can skip this code at all if we are using handlebars
});
