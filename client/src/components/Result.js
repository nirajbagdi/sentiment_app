import BarChart from './BarChart';
import Card from './Card';

const Result = ({ article }) => {
	const barChartData = [
		{ sentiment: 'POSITIVE', articles: 15 },
		{ sentiment: 'NEGATIVE', articles: 8 },
		{ sentiment: 'NEUTRAL', articles: 1 },
	];

	const articles = [
		{ title: 'Article 1', sentiment: 'positive', references: 'Reference 1' },
		{ title: 'Article 2', sentiment: 'negative', references: 'Reference 2' },
		{ title: 'Article 3', sentiment: 'neutral', references: 'Reference 3' },
		{ title: 'Article 4', sentiment: 'positive', references: 'Reference 4' },
		{ title: 'Article 5', sentiment: 'negative', references: 'Reference 5' },
	];

	return (
		<div className="result">
			{article ? (
				<>
					<div className="data">
						<h2 className="title">Title: {article.title}</h2>
						<h3 className="sentiment">Sentiment: {article.sentiment.toUpperCase()}</h3>
					</div>

					<div className="output">
						<div className="barchart">
							<BarChart data={barChartData} />
						</div>

						<div>
							<h2 className="reference">References</h2>
							<br></br>

							<div className="cards">
								{articles.map((article, index) => (
									<Card key={index} article={article} />
								))}
							</div>
						</div>
					</div>
				</>
			) : (
				<div className="empty">
					<p>Article not found</p>
				</div>
			)}
		</div>
	);
};

export default Result;
