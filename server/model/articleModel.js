import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
	id: { type: String },
	publishTime: { type: String },
	url: { type: String },
	title: { type: String },
	description: { type: String },
	source: { type: String },
});

export default mongoose.model('Article', articleSchema);
