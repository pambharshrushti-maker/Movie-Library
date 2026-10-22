
import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (event) => {
    event.preventDefault();

    if (!name.trim() || !email.trim()) {
      setError("Please enter your name and email.");
      return;
    }

    const user = {
      name: name.trim(),
      email: email.trim(),
    };

    localStorage.setItem("user", JSON.stringify(user));

    const destination = location.state?.from || "/profile";

    navigate(destination, { replace: true });
  };

  return (
    <div className="container login-container py-5">
      <div className="card login-card mx-auto">
        <div className="card-body p-4 p-md-5">
          <div className="text-center mb-4">
            <i className="bi bi-film login-icon"></i>
            <h2 className="mt-3">Welcome Back</h2>
            <p className="text-secondary">
              Sign in to your Movie Library
            </p>
          </div>

          {error && (
            <div className="alert alert-danger">{error}</div>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <button className="btn btn-danger w-100" type="submit">
              Sign In
            </button>
          </form>

          <p className="text-center text-secondary mt-4 mb-0">
            Explore movies on{" "}
            <Link to="/" className="text-danger">
              Movie Library
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

