import {
  fetchPopularMovies as getPopularMovies,
  searchMovies as searchMoviesAPI,
  fetchMovieDetails as getMovieDetails,
} from "../../services/movieAPI";

export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

export const FETCH_MOVIE_DETAILS_SUCCESS =
  "FETCH_MOVIE_DETAILS_SUCCESS";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

// Fetch Movies for Home Page
export const fetchPopularMovies = () => async (dispatch) => {
  dispatch({ type: FETCH_MOVIES_REQUEST });

  try {
    const movies = await getPopularMovies();

    console.log("Movies received:", movies);

    dispatch({
      type: FETCH_MOVIES_SUCCESS,
      payload: movies,
    });
  } catch (error) {
    console.error("Movies API Error:", error);

    dispatch({
      type: FETCH_MOVIES_FAILURE,
      payload: error.message || "Movies load થઈ શકી નથી.",
    });
  }
};

// Search Movies
export const searchMovies = (query) => async (dispatch) => {
  if (!query.trim()) {
    dispatch({
      type: FETCH_MOVIES_SUCCESS,
      payload: [],
    });
    return;
  }

  dispatch({ type: FETCH_MOVIES_REQUEST });

  try {
    const movies = await searchMoviesAPI(query);

    dispatch({
      type: FETCH_MOVIES_SUCCESS,
      payload: movies,
    });
  } catch (error) {
    dispatch({
      type: FETCH_MOVIES_FAILURE,
      payload: error.message || "Movies search થઈ શકી નથી.",
    });
  }
};

// Fetch Movie Details
export const fetchMovieDetails = (movieId) => async (dispatch) => {
  dispatch({ type: FETCH_MOVIES_REQUEST });

  try {
    const movie = await getMovieDetails(movieId);

    dispatch({
      type: FETCH_MOVIE_DETAILS_SUCCESS,
      payload: movie,
    });
  } catch (error) {
    dispatch({
      type: FETCH_MOVIES_FAILURE,
      payload: error.message || "Movie details load થઈ શકી નથી.",
    });
  }
};

// Add Favorite
export const addFavorite = (movie) => ({
  type: ADD_FAVORITE,
  payload: movie,
});

// Remove Favorite
export const removeFavorite = (movieId) => ({
  type: REMOVE_FAVORITE,
  payload: movieId,
});