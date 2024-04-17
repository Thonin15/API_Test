const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  header: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  // Other fields as needed
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
