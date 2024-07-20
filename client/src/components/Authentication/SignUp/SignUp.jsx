import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from "../../../firebase/auth.js";
import { apiBase } from "../../../utils/config.js";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
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
      toast("Passwords do not match", {
        theme: "dark",
        duration: 4000,
        type: "error",
      });
      return;
    }
    try {
      setIsRegistering(true);
      await doCreateUserWithEmailAndPassword(email, password);

      try {
        const response = await fetch(`${apiBase}/api/users/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            emailAddress: email,
            phoneNumber,
            password,
          }),
        });

        const result = await response.json();
        if (response.ok) {
          console.log("User registered successfully:", result);
          toast("User registered successfully", {
            theme: "dark",
            type: "success",
          });
          navigate("/SignIn");
        } else {
          console.error("Error registering user:", result.message);
          setError(result.message);
          toast(result.message, { theme: "dark", type: "error" });
        }
        console.log(response);
      } catch (error) {
        console.error("Error:", error);
        setError("An error occurred while registering. Please try again.");
        toast("An error occurred while registering. Please try again.", {
          theme: "dark",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
      toast(error.message, { theme: "dark", type: "error" });
    } finally {
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
