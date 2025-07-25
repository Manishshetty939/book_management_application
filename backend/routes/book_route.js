// routes/book_route.js
const express = require('express');
const Book = require('../models/book');
const NodeCache = require('node-cache');

const router = express.Router();
const cache = new NodeCache({ stdTTL: 60 }); // 📦 Cache valid for 60 seconds

// GET all books (with cache)
router.get('/', async (req, res) => {
  const cachedBooks = cache.get('books');
  if (cachedBooks) {
    console.log('🔁 Serving books from cache');
    return res.json(cachedBooks);
  }

  try {
    const books = await Book.find();
    cache.set('books', books);
    console.log('💾 Books cached');
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

// POST create book (and invalidate cache)
router.post('/', async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const saved = await newBook.save();
    cache.del('books'); // ❌ Clear cache
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Invalid book data' });
  }
});

// DELETE book (and invalidate cache)
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Book not found' });
    cache.del('books'); // ❌ Clear cache
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete book' });
  }
});

module.exports = router;
