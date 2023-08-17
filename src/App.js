import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/details/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
