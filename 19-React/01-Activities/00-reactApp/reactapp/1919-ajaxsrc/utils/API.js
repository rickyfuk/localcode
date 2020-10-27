import axios from 'axios';

const BASEURL = 'https://api.giphy.com/v1/gifs/search?q=';
// personal APIKEY
// const APIKEY = '&api_key=QL5s7o4btm0KOmd2MlQb7CrHlsEeKPZ3';
const APIKEY = '&api_key=dc6zaTOxFJmzC&limit=20';

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
	search: function (query) {
		return axios.get(BASEURL + query + APIKEY);
	},
};
