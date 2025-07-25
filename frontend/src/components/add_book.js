import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: '', author: '', year: '' });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/books', book);
      navigate('/');
    } catch (err) {
      console.error('Error adding book:', err);
    }
  };

  return (
    <div>
      <h2>➕ Add Book</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} required />
        <input name="author" placeholder="Author" onChange={handleChange} required />
        <input name="year" placeholder="Year" onChange={handleChange} type="number" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddBook;
