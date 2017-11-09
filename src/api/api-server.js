const axios = require('axios');
const LRU = require('lru-cache');

export function API(){
	let client;
	if (process.__API__) {
		client = process.__API__
	} else {
		client = process.__API__ = axios;
		axios.server = true;
		axios.cachedItems = LRU({
			max: 100,
			maxAge: 1000 * 60 * 10
		});
	}
	
	return client;
}
