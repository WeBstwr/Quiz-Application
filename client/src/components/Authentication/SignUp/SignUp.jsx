import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from "../../../firebase/auth.js";

const SignUp = () => {
  const navigate = useNavigate();
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
    <form onSubmit={onSubmit}>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
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
      <button type="submit" disabled={isRegistering}>
        {isRegistering ? "Registering..." : "Sign Up"}
      </button>
    </form>
  );
};

export default SignUp;
