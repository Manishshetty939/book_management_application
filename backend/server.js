// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const compression = require('compression');
const morgan = require('morgan');
require('dotenv').config();

const bookRoutes = require('./routes/book_route');
const app = express();

// 🔧 Middleware
app.use(cors());
app.use(express.json());
app.use(compression()); // 🔽 GZIP compression
app.use(morgan('dev')); // 📋 Log HTTP requests

// 🕒 Request timing profiler
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const elapsed = Date.now() - start;
    console.log(`[${req.method}] ${req.originalUrl} - ${elapsed}ms`);
  });
  next();
});

// 📦 Routes
app.use('/api/books', bookRoutes);

// 🌐 DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error(err));

// 🚀 Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
