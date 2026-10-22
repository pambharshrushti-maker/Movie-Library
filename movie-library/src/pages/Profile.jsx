
import React from "react";
import { Link, Navigate } from "react-router-dom";

function Profile() {
  const savedUser = localStorage.getItem("user");

  if (!savedUser) {
    return <Navigate to="/login" replace />;
  }

  let user;

  try {
    user = JSON.parse(savedUser);
  } catch {
    localStorage.removeItem("user");
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="container py-5">
      <div className="profile-card mx-auto text-center">
        <div className="profile-avatar">
          <i className="bi bi-person-fill"></i>
        </div>

        <h2 className="mt-3">{user.name}</h2>

        <p className="text-secondary">{user.email}</p>

        <span className="badge bg-danger mb-4">
          Movie Library Member
        </span>

        <div>
          <Link to="/favorites" className="btn btn-danger">
            <i className="bi bi-heart-fill me-2"></i>
            My Favorites
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;

