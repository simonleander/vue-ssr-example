const axios = require('axios');
const NEWS_API = "97c568e8528f40be944a8c047aef2210";

let fetch = (url, params) => {
	
	return new Promise((resolve, reject) => {
		
		axios.get(url, {
			
			params: params
			
		}).then((res) => {
			
			if(res.data.status === "ok"){
				resolve(res.data);
			}else{
				reject("News API error: " + res.data.message);
			}
			
		}).catch((err) => {
			
			reject("Axios issue: " + err)
			
		})
		
	});
	
};

export function fetchSources() {
	return fetch('https://newsapi.org/v1/sources');
}

export function fetchHeadlines(source) {
	return fetch('https://newsapi.org/v1/articles', { source: source, apiKey: NEWS_API });
}
