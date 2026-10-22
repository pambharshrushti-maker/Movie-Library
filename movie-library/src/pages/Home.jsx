import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows")
      .then((response) => {
        console.log("TV Shows:", response.data);

        setShows(response.data.slice(0, 20));
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setError("Shows load થઈ શક્યા નથી.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3 className="text-center mt-5">Loading Shows...</h3>;
  }

  if (error) {
    return <h3 className="text-danger text-center mt-5">{error}</h3>;
  }

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">TV Shows</h1>

      <div className="row g-4">
        {shows.map((show) => (
          <div className="col-md-4 col-lg-3" key={show.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={
                  show.image?.medium ||
                  "https://placehold.co/300x450?text=No+Image"
                }
                className="card-img-top"
                alt={show.name}
                style={{ height: "350px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="card-title">{show.name}</h5>
                <p>Rating: {show.rating?.average || "N/A"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;