import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

function MovieList() {
  const movies = useSelector((state) => state.movies?.movies || []);
  const loading = useSelector((state) => state.movies?.loading || false);
  const error = useSelector((state) => state.movies?.error || null);

  if (loading) {
    return <p className="text-center">Loading shows...</p>;
  }

  if (error) {
    return <p className="text-danger text-center">{error}</p>;
  }

  if (movies.length === 0) {
    return <p className="text-center">No shows found.</p>;
  }

  return (
    <div className="row g-4">
      {movies.map((movie) => (
        <div className="col-md-4 col-lg-3" key={movie.id || movie.imdbID}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;