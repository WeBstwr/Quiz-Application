import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from "../../../firebase/auth.js";
import "./signUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      setIsRegistering(true);
      await doCreateUserWithEmailAndPassword(email, password);
      navigate("/SignIn");
    } catch (error) {
      setError(error.message);
      setIsRegistering(false);
    }
  };

  return (
    <>
      <div className="sign-up-form">
        <form onSubmit={onSubmit}>
          <h2>Sign Up</h2>
          {error && <p>{error}</p>}
          <div className="sign-up-email-password">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="sign-up-submit-btn">
            <button type="submit" disabled={isRegistering}>
              {isRegistering ? "Registering..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
