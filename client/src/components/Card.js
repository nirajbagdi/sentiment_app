const Card = ({ article }) => (
	<div className="card">
		<hr
			className={
				article.sentiment === 'positive'
					? 'green'
					: article.sentiment === 'negative'
					? 'red'
					: 'blue'
			}
		/>
		<a href="/source" className="title-card">
			{' '}
			{article.title}
		</a>

		<p className="references-card">Source: {article.references}</p>
	</div>
);

export default Card;
