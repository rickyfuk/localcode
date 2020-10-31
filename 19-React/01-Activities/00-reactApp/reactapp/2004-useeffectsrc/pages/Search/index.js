import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import Container from '../../components/Container';
import SearchForm from '../../components/SearchForm';
import SearchResults from '../../components/SearchResults';
import Alert from '../../components/Alert';

function Search() {
	const [search, setSearch] = useState('Wikipedia');
	const [title, setTitle] = useState('');
	const [url, setUrl] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		// if search is null, then return nothing
		if (!search) {
			return;
		}
		// else run API call to get the data
		API.searchTerms(search)
			.then((res) => {
				// case 1 if the response is null, then "no result found"
				if (res.data.length === 0) {
					throw new Error('No results found.');
				}
				// case 2 if the response is error, then throw the error
				if (res.data.status === 'error') {
					throw new Error(res.data.message);
				}
				// case 3 if the response is normal, send the result
				// use setTitle to pour the data into the const "title"
				setTitle(res.data[1][0]);
				// use setUrl to pour the data into the const "Url"
				setUrl(res.data[3][0]);
			})
			.catch((err) => setError(err));
	}, [search]);

	const handleInputChange = (event) => {
		setSearch(event.target.value);
	};

	return (
		<div>
			<Container style={{ minHeight: '100vh' }}>
				<h1 className='text-center'>Search For Anything on Wikipedia</h1>
				<Alert
					type='danger'
					style={{ opacity: error ? 1 : 0, marginBottom: 10 }}
				>
					{error}
				</Alert>
				<SearchForm handleInputChange={handleInputChange} results={search} />
				<SearchResults title={title} url={url} />
			</Container>
		</div>
	);
}

export default Search;
