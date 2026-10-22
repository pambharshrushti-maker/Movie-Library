import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../redux/actions/movieActions";
import MovieCard from "./MovieCard";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const { movies, loading, error } = useSelector(
    (state) => state
  );

  const handleSearch = (event) => {
    event.preventDefault();

    if (query.trim()) {
      dispatch(searchMovies(query.trim()));
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Search Shows 🔍</h1>

      <form
        onSubmit={handleSearch}
        className="search-form mx-auto mb-5"
      >
        <div className="input-group input-group-lg">
          <input
            type="search"
            className="form-control"
            placeholder="Enter show name..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />

          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </form>

      {loading && (
        <p className="text-center">Searching shows...</p>
      )}

      {error && (
        <p className="text-danger text-center">{error}</p>
      )}

      {!loading && movies.length === 0 && (
        <p className="text-center text-secondary">
          Search for your favorite show.
        </p>
      )}

      <div className="row g-4">
        {movies.map((movie) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3"
            key={movie.id}
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;