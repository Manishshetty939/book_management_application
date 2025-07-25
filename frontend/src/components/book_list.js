import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/books');
        setBooks(res.data);
      } catch (err) {
        console.error('❌ Error loading books:', err);
      }
    };
    loadBooks();
  }, []);

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`);
      setBooks(prev => prev.filter(book => book._id !== id));
    } catch (err) {
      console.error('❌ Error deleting book:', err);
    }
  };

  const renderedBooks = useMemo(() => (
    books.map(book => (
      <li key={book._id}>
        <strong>{book.title}</strong> by {book.author} ({book.year || 'N/A'})
        <button 
          onClick={() => deleteBook(book._id)} 
          style={{ marginLeft: '10px', color: 'red', cursor: 'pointer' }}
          aria-label={`Delete ${book.title}`}
        >
          ❌
        </button>
      </li>
    ))
  ), [books]);

  return (
    <div>
      <h2>📚 Book List</h2>
      <ul>
        {renderedBooks}
      </ul>
    </div>
  );
};

export default React.memo(BookList);
