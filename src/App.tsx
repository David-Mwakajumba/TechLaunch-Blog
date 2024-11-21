import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { BlogListing } from './pages/BlogListing';
import { BlogPost } from './pages/BlogPost';
import { CreatePost } from './pages/CreatePost';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<BlogListing />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;