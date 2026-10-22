import axios from "axios";

const BASE_URL = "https://api.tvmaze.com";

export const searchMovies = async (query) => {
const response = await axios.get(`${BASE_URL}/search/shows`, {
params: { q: query },
});

return response.data.map((item) => ({
id: item.show.id,
imdbID: String(item.show.id),
Title: item.show.name,
Year: item.show.premiered
? item.show.premiered.substring(0, 4)
: "N/A",
Poster: item.show.image?.medium || "",
Plot: item.show.summary
? item.show.summary.replace(/<[^>]*>/g, "")
: "Description not available",
imdbRating: item.show.rating?.average || "N/A",
}));
};

export const fetchPopularMovies = async () => {
const response = await axios.get(`${BASE_URL}/shows`);

return response.data.slice(0, 20).map((show) => ({
id: show.id,
imdbID: String(show.id),
Title: show.name,
Year: show.premiered
? show.premiered.substring(0, 4)
: "N/A",
Poster: show.image?.medium || "",
Plot: show.summary
? show.summary.replace(/<[^>]*>/g, "")
: "Description not available",
imdbRating: show.rating?.average || "N/A",
}));
};

export const fetchMovieDetails = async (movieId) => {
const response = await axios.get(`${BASE_URL}/shows/${movieId}`);

const show = response.data;

return {
id: show.id,
imdbID: String(show.id),
Title: show.name,
Year: show.premiered
? show.premiered.substring(0, 4)
: "N/A",
Poster: show.image?.original || show.image?.medium || "",
Plot: show.summary
? show.summary.replace(/<[^>]*>/g, "")
: "Description not available",
imdbRating: show.rating?.average || "N/A",
Genre: show.genres?.join(", ") || "N/A",
};
};

export default axios;
