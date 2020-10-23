import React from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';

function App() {
	// return <p>Render Bootstrap components here</p>;\
	return (
		<div className='container'>
			<Navbar />
			<Jumbotron />
			<Jumbotron />
		</div>
	);
}

export default App;
