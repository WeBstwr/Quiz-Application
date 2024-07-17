import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext.jsx";
import { doSignOut } from "../../firebase/auth.js";
import "../../assets/globals.css";
import "./header.css";

function Header() {
  const navigate = useNavigate();
  const userLoggedIn = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="header">
      <div className="header-container">
        <nav className="header-nav">
          <div className="main-header-links">
            <ol className={`header-nav-list ${menuOpen ? "open" : ""}`}>
              <li className="header-nav-item">
                <Link to="/"></Link>
              </li>
              <li className="header-nav-item">
                <Link to="/">dashboard</Link>
              </li>
              <li className="header-nav-item">
                <Link to="/Questions">questions</Link>
              </li>
              <li className="header-nav-item">
                <Link to="/Profile">profile</Link>
              </li>
            </ol>
          </div>
          <div className="signing-buttons">
            {userLoggedIn ? (
              <button
                onClick={() => {
                  doSignOut().then(() => {
                    navigate("/");
                  });
                }}
              >
                Sign Out
              </button>
            ) : (
              <>
                <Link to="/SignIn">Sign-In</Link>
                <Link to="/SignUp">Sign-Up</Link>
              </>
            )}
          </div>
          <button
            className="header-nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="header-nav-toggle-icon"></span>
          </button>
        </nav>
      </div>
    </section>
  );
}

export default Header;
