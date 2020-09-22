// Requiring path to so we can use relative routes to our HTML files
const path = require('path');

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function(app) {
	// original app.get '/'
	app.get('/', (req, res) => {
		// If the user already has an account send them to the members page
		if (req.user) {
			res.redirect('/members');
		}
		res.sendFile(path.join(__dirname, '../public/signup.html'));
	});
	// origina1 end

	// try app.get '/'
	app.get('/', function(req, res) {
		burger.all(function(data) {
			const hbsObject = {
				burgers: data,
			};
			console.log(hbsObject);
			res.render('index', hbsObject);
		});
	});

	app.get('/', (req, res) => {
		// If the user already has an account send them to the members page
		if (req.user) {
			// comment:
			// if we use handlebars => we do not need to redirect them to members
			// we can send the data directly to handlebars
			res.redirect('/members');
		}
		res.sendFile(path.join(__dirname, '../public/signup.html'));
	});
	// try end

	app.get('/login', (req, res) => {
		// If the user already has an account send them to the members page
		if (req.user) {
			res.redirect('/members');
		}
		res.sendFile(path.join(__dirname, '../public/login.html'));
	});

	// Here we've add our isAuthenticated middleware to this route.
	// If a user who is not logged in tries to access this route they will be redirected to the signup page
	app.get('/members', isAuthenticated, (req, res) => {
		res.sendFile(path.join(__dirname, '../public/members.html'));
	});
};
