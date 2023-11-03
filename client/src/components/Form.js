import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = ({ searchArticle }) => {
	const searchInputRef = useRef(null);
	const navigate = useNavigate();

	const handleFormSubmit = event => {
		event.preventDefault();
		if (!searchInputRef.current.value.trim().length) return;

		searchArticle(searchInputRef.current.value);
		navigate('/result');
	};

	return (
		<div className="body">
			<div className="content">
				<div className="introduction">
					<h1 className="tagline">
						Uncover the Emotions <br></br> Behind the Headlines
					</h1>

					<p className="intro">
						Explore news stories with sentiment analysis to uncover emotions, opinions,
						and trends that shape headlines, gaining valuable insights for informed
						decision-making.
					</p>
				</div>

				<form className="search" onSubmit={handleFormSubmit}>
					<input type="text" placeholder="Search news here" ref={searchInputRef} />
					<button>Search</button>
				</form>
			</div>

			<div className="bg-image">
				<img src="bg-image.jpg" alt="bg"></img>
			</div>
		</div>
	);
};

export default Form;
