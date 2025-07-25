// models/book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true, // 🔍 Adds index for faster queries
  },
  author: {
    type: String,
    required: true,
  },
  year: Number,
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
