import axios from 'axios';

const market = 'en-IN';
const count = 40;
const numParallelRequests = 4;

const extractSource = url => {
	const urlSegments = url.replace(/^https?:\/\/(www\.)?/, '').split('/');
	return urlSegments[0];
};

const fetchBingSearches = async (query, offset) => {
	const { data } = await axios.get(
		`https://api.bing.microsoft.com/v7.0/custom/search?q=${query}&customconfig=${process.env.REACT_APP_BING_CONFIG_ID}&mkt=${market}&count=${count}&offset=${offset}`,
		{ headers: { 'Ocp-Apim-Subscription-Key': process.env.REACT_APP_BING_SUBSCRIPTION_KEY } }
	);

	return data.webPages.value.map(result => ({
		id: result.id,
		publishTime: result.datePublished,
		url: result.url,
		title: result.name,
		description: result.snippet,
		source: extractSource(result.url),
	}));
};

export const getArticles = async query => {
	const offsetValues = Array.from({ length: numParallelRequests }, (_, i) => i * count);
	const results = await Promise.all(offsetValues.map(offset => fetchBingSearches(query, offset)));
	return results.flat();
};
