import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const favorites = useSelector((state) => state.favorites || []);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">❤️ My Favorites</h2>

      {favorites.length === 0 ? (
        <div className="text-center mt-5">
          <h5>No Favorites Added Yet!</h5>
          <p>Go to Home and click "Add to Favorites".</p>
        </div>
      ) : (
        <div className="row g-4">
          {favorites.map((movie) => (
            <div className="col-md-4 col-lg-3" key={movie.id || movie.imdbID}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;

