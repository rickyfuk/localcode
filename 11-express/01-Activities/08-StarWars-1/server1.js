// Dependencies
// ===========================================================
var express = require('express');
var path = require('path');

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
// ===========================================================
var characters = [
	{
		routeName: 'yoda',
		name: 'Yoda',
		role: 'Jedi Master',
		age: 900,
		forcePoints: 2000,
	},
	{
		routeName: 'darthmaul',
		name: 'Darth Maul',
		role: 'Sith Lord',
		age: 200,
		forcePoints: 1200,
	},
	{
		routeName: 'obiwankenobi',
		name: 'Obi Wan Kenobi',
		role: 'Jedi Master',
		age: 55,
		forcePoints: 1350,
	},
];
// Routes
// ===========================================================
app.get('/', function (req, res) {
	// res.send('Welcome to the Star Wars Page!');
	// replace the reply from the one sentence to a html file
	res.sendFile(path.join(__dirname, 'view.html'));
});

// What does this route do?
app.get('/api/characters', function (req, res) {
	return res.json(characters);
});

// What does this route do?
app.get('/api/characters/:character', function (req, res) {
	// What does this code do?
	console.log(req.params);
	var chosen = req.params.character;
	console.log(chosen);

	// What does this code do?
	for (var i = 0; i < characters.length; i++) {
		if (chosen === characters[i].routeName) {
			return res.json(characters[i]);
		}
	}

	// What does this code do?
	return res.send('No character found');
});

// try to use age
// app.get('/api/characters/:age', function (req, res) {
// 	// What does this code do?
// 	console.log(req.params);
// 	var chosen = req.params.age;
// 	console.log(chosen);

// 	// What does this code do?
// 	for (var i = 0; i < characters.length; i++) {
// 		if (chosen == characters[i].age) {
// 			return res.json(characters[i]);
// 		}
// 	}

// 	// What does this code do?
// 	return res.send('No character found');
// });

// Create New Characters - takes in JSON input
app.post('/api/characters', function (req, res) {
	var newCharacter = req.body;

	console.log(newCharacter);

	characters.push(newCharacter);

	res.json(newCharacter);
});

// Listener
// ===========================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
