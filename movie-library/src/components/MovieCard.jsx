import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../redux/actions/movieActions";

function MovieCard({ movie }) {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites || []);

  if (!movie) return null;

  const movieId = movie.id || movie.imdbID;
  const title = movie.Title || movie.name || "Unknown Show";

  const poster =
    movie.Poster ||
    movie.image?.medium ||
    "https://placehold.co/300x450?text=No+Image";

  const isFavorite = favorites.some(
    (item) => String(item.id || item.imdbID) === String(movieId)
  );

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movieId));
    } else {
      dispatch(addFavorite({ ...movie, id: movieId }));
    }
  };

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={poster}
        className="card-img-top"
        alt={title}
        style={{ height: "350px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>

        <p className="text-secondary">
          Year: {movie.Year || "N/A"}
        </p>

        <Link
          to={`/movie/${movieId}`}
          className="btn btn-primary mb-2"
        >
          View Details
        </Link>

        <button
          type="button"
          className={`btn ${
            isFavorite ? "btn-danger" : "btn-outline-danger"
          }`}
          onClick={handleFavorite}
        >
          {isFavorite ? "❤️ Remove Favorite" : "♡ Add to Favorites"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;