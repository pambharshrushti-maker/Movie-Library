import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const favorites = useSelector((state) => state.favorites || []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          🎬 Movie Library
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>

            <NavLink className="nav-link" to="/search">
              Search Movies
            </NavLink>

            <NavLink className="nav-link" to="/favorites">
              ❤️ Favorite Movies ({favorites.length})
            </NavLink>

            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;