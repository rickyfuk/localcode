// load the fs modual
const fs = require('fs');
// get the path module
const path = require('path');
// get the router module
const router = require('express').Router();
// get the notes db
// const notes = require('../db/db');
// get the Connector.js
const Connector = require('../db/connect');

// console.log(notes);

// get the data from the database
router.get('/notes', (req, res) => {
	Connector.getNotes().then((notes) => res.json(notes));
	// res.json(notes);
});

// get the invididual note from the database
router.get('/notes/:id', (req, res) => {
	// let saveNotes = JSON.parse(fs.readFileSync('./db/db.json'));
	// console.log(saveNotes);
	Connector.getNotes().then((notes) => {
		let findvalue = parseInt(req.params.id);
		// let result = [];
		// notes.forEach(async (note) => {
		// 	// console.log(note);
		// 	let noteID = await note.id;
		// 	console.log(note);
		// 	console.log(noteID);
		// });

		// check if the ID exist
		let checkIDExistArray = [];

		function checkIDExist(arr, val) {
			return arr.some(function (arrVal) {
				return val === arrVal;
			});
		}

		notes.forEach((note) => {
			let noteID = parseInt(note.id);
			checkIDExistArray.push(noteID);
			// console.log(checkIDExistArray);
		});

		// let checkID = checkIDExist(checkIDExistArray, findvalue);

		// console.log(checkID);

		// if (!checkID) {
		// 	res.send(`notes ${findvalue} does not exist`);
		// }

		if (!checkIDExist(checkIDExistArray, findvalue)) {
			res.send(`notes ${findvalue} does not exist`);
		}

		// display the object when the ID is match
		notes.forEach((note) => {
			let noteID = parseInt(note.id);
			// console.log(note);
			console.log(noteID);
			console.log(findvalue);
			if (findvalue === noteID) {
				// result.push(note);
				// res.json(result);
				res.json(note);
				// console.log(result);
			}
		});
		console.log(notes);
		// console.log(result);
		console.log(findvalue);
		// res.send('ok');
	});
});

router.post('/notes', (req, res) => {
	let newNotes = req.body;
	Connector.writeNotes(newNotes)
		.then(() => Connector.getNotes().then((notes) => res.json(notes)))
		.catch((err) => res.json(err.message));
});

router.delete('/notes/:id', (req, res) => {
	let deleteNoteID = parseInt(req.params.id);
	Connector.deleteNotes(deleteNoteID).then(() =>
		Connector.getNotes().then((notes) => res.json(notes))
	);
});

module.exports = router;
