import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';
import Article from './model/articleModel.js';

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/data', async (req, res) => {
	try {
		const { articlesData } = req.body;
		const savedArticles = await Article.insertMany(articlesData);
		res.status(201).json(savedArticles);
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' });
	}
});

app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
