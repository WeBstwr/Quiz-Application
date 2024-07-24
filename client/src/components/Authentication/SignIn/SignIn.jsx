import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useUserStore from "../../../store/userStore.js";
import useParticipationStore from "../../../store/participationStore.js";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import { Link } from "react-router-dom";
import { apiBase } from "../../../utils/config.js";
import "./signIn.css";

const SignIn = () => {
  const { user, changeUserInformation } = useUserStore();
  const { fetchParticipationByStudentId } = useParticipationStore();
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
      const response = await fetch(`${apiBase}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailAddress: email, password }),
        credentials: "include",
      });

      const data = await response.json();

      if (data.success) {
        changeUserInformation(data.data);
        toast("Welcome back!", { theme: "dark" });

        await fetchParticipationByStudentId();

        if (data.data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        toast(data.message, { theme: "dark" });
        setError(data.message);
      }
    } catch (error) {
      setError("Error signing in. Please try again later.");
      toast("Error signing in. Please try again later.", { theme: "dark" });
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <>
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
