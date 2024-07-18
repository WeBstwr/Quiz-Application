import "./signIn.css";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../../firebase/auth.js";
import { useAuth } from "../../../context/authContext/authContext.jsx";
import { Link } from "react-router-dom";

const SignIn = () => {
  const userLoggedIn = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
      navigate("/Students");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSigningIn(false);
    }
  };

  const onGoogleSignIn = async () => {
    try {
      setIsSigningIn(true);
      await doSignInWithGoogle();
      navigate("/Students");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to="/Profile" replace />}
      <div className="form-section">
        <form onSubmit={onSubmit}>
          <h2>Sign In</h2>
          {error && <p>{error}</p>}
          <div className="email-and-password">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="sign-in-buttons">
            <button type="submit" disabled={isSigningIn}>
              {isSigningIn ? "Signing In..." : "Sign In"}
            </button>
            <button
              type="button"
              onClick={onGoogleSignIn}
              disabled={isSigningIn}
            >
              {isSigningIn ? "Signing In..." : "Sign In with Google"}
            </button>
          </div>
          <div className="form-link">
            <Link to="/SignUp">Don't have an account? Sign Up</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
