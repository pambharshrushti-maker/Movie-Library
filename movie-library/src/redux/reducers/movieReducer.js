const savedFavorites = JSON.parse(
  localStorage.getItem("favorites") || "[]"
);

const initialState = {
  movies: [],
  movieDetails: null,
  favorites: savedFavorites,
  loading: false,
  error: null,
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "FETCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };

    case "FETCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "FETCH_MOVIE_DETAILS_SUCCESS":
      return {
        ...state,
        loading: false,
        movieDetails: action.payload,
      };

    case "ADD_FAVORITE": {
      const exists = state.favorites.some(
        (movie) => movie.id === action.payload.id
      );

      if (exists) return state;

      const favorites = [...state.favorites, action.payload];

      localStorage.setItem("favorites", JSON.stringify(favorites));

      return {
        ...state,
        favorites,
      };
    }

    case "REMOVE_FAVORITE": {
      const favorites = state.favorites.filter(
        (movie) => movie.id !== action.payload
      );

      localStorage.setItem("favorites", JSON.stringify(favorites));

      return {
        ...state,
        favorites,
      };
    }

    default:
      return state;
  }
}

export default movieReducer;