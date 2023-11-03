import { getArticles } from './api';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Form from './components/Form';

// const query = 'Effect on Finance due to oil inflation because of Middle East Unstability';

const App = () => {
	const searchArticle = async searchInput => {
		const articles = await getArticles(searchInput);

		const res = await axios.post(
			'http://localhost:5000/api/data',
			{ articlesData: articles },
			{ headers: { 'Content-Type': 'application/json' } }
		);

		console.log(res);
	};

	return (
		<div className="container">
			<Header />

			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Form searchArticle={searchArticle} />} />
					<Route exact path="/result" element={<h1>Hello</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
