
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieSearch from "./components/MovieSearch";
import MovieDetails from "./components/MovieDetails";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/search" element={<MovieSearch />} />

            <Route path="/movie/:id" element={<MovieDetails />} />

            <Route path="/login" element={<Login />} />

            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>

            <Route path="/favorites" element={<Favorites />} />
            

            <Route
              path="*"
              element={
                <div className="container text-center py-5">
                  <h1>404</h1>
                  <p>Page not found.</p>
                </div>
              }
            />
          </Routes>
        </main>

       <footer className="app-footer text-center">
  <div className="container">
    <h5 className="fw-bold mb-2">🎬 Movie Library</h5>

    <p className="mb-2">
      Discover shows, explore details and save your favorites.
    </p>

    <div className="mb-3">
      <Link to="/" className="text-white text-decoration-none mx-2">
        Home
      </Link>

      <Link
        to="/search"
        className="text-white text-decoration-none mx-2"
      >
        Search
      </Link>

      <Link
        to="/favorites"
        className="text-white text-decoration-none mx-2"
      >
        Favorites
      </Link>
    </div>

    <hr className="border-secondary" />

    <small>
      © {new Date().getFullYear()} Movie Library | Built with React,
      Redux and Bootstrap
    </small>
  </div>
</footer>

      </div>
    </BrowserRouter>
  );
}

export default App;

