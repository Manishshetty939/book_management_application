# 📚 Book Management Application

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for managing books — now fully optimized for performance, scalability, and responsiveness.

---

## 🌟 Features

- 📘 Add, view, and delete books
- ⚡ Fast API response with **caching**
- 🗃️ MongoDB with Mongoose ODM
- 🧩 Optimized React frontend
- 📦 Gzip-enabled backend for faster load
- 📈 Real-time performance monitoring
- 🔧 Built for scalability and deployment

---

## 🏗️ Tech Stack

| Frontend          | Backend          | Database    | Tools & Optimizations        |
|-------------------|------------------|-------------|-------------------------------|
| React             | Node.js          | MongoDB     | Node-cache (in-memory cache) |
| React Router      | Express.js       | Mongoose    | Gzip Compression              |
| Axios             | RESTful API      |             | Morgan Logging                |

---

## ⚙️ Performance Optimizations

### ✅ Backend
- **Gzip Compression:** Enabled with `compression` middleware to reduce API payload size.
- **Caching:** In-memory caching with `node-cache` to serve repeated GET requests faster.
- **API Profiling:** Response times logged using `morgan` and custom middleware.
- **Indexed Queries:** Mongoose schema optimized with proper indexing.

### ✅ Frontend
- **React Build Optimization:** Built using `npm run build` to generate production-ready code.
- **Lazy Loading:** Routes/components split to reduce initial load time.
- **Bundle Analysis:** Used `source-map-explorer` for inspecting bundle size.
- **ESLint Cleanup:** Removed unused imports and optimized rendering logic.

---


