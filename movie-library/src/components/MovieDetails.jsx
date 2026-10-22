import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchMovieDetails } from "../redux/actions/movieActions";

function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { movieDetails, loading, error } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  if (loading) {
    return <p className="text-center py-5">Loading details...</p>;
  }

  if (error) {
    return <p className="text-danger text-center py-5">{error}</p>;
  }

  if (!movieDetails || String(movieDetails.id) !== String(id)) {
    return (
      <div className="container text-center py-5">
        <h3>Show details not available.</h3>
        <Link to="/" className="btn btn-primary mt-3">
          Back to Home
        </Link>
      </div>
    );
  }

  const poster =
    movieDetails.Poster ||
    movieDetails.image?.original ||
    movieDetails.image?.medium ||
    "https://placehold.co/300x450?text=No+Image";

  return (
    <div className="container py-5">
      <div className="row g-5 align-items-start">
        <div className="col-md-4">
          <img
            src={poster}
            alt={movieDetails.Title || movieDetails.name}
            className="img-fluid rounded shadow"
            style={{
              width: "100%",
              maxHeight: "600px",
              objectFit: "cover",
            }}
            onError={(event) => {
              event.currentTarget.src =
                "https://placehold.co/300x450?text=No+Image";
            }}
          />
        </div>

        <div className="col-md-8">
          <h1 className="mb-3">
            {movieDetails.Title || movieDetails.name}
          </h1>

          <p>
            <strong>Year:</strong>{" "}
            {movieDetails.Year ||
              movieDetails.premiered?.slice(0, 4) ||
              "N/A"}
          </p>

          <p>
            <strong>Rating:</strong>{" "}
            {movieDetails.imdbRating ||
              movieDetails.rating?.average ||
              "N/A"}
          </p>

          <p>
            <strong>Genres:</strong>{" "}
            {movieDetails.Genre ||
              movieDetails.genres?.join(", ") ||
              "N/A"}
          </p>

          <p>
            <strong>Summary:</strong>
          </p>

          <div
            dangerouslySetInnerHTML={{
              __html:
                movieDetails.Plot ||
                movieDetails.summary ||
                "No summary available.",
            }}
          />

          <Link to="/" className="btn btn-outline-primary mt-4">
            Back to Shows
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;