import React, { useState, useEffect } from "react";
import api from "./api/api";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Ambil data film dari API TMDB
    const fetchMovies = async () => {
      try {
        const response = await api.get("/movie/popular");
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Popular Movies</h1>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-4 mb-4">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
