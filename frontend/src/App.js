import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const BookList = React.lazy(() => import('./components/book_list'));
const AddBook = React.lazy(() => import('./components/add_book'));

function App() {
  return (
    <Router>
      <div className="App" style={{ padding: 20 }}>
        <h1>📚 Book Manager</h1>
        <nav>
          <Link to="/">All Books</Link> | <Link to="/add">Add Book</Link>
        </nav>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/add" element={<AddBook />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
