import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../../store/userStore.js";
import { doSignOut } from "../../firebase/auth.js";
import "./header.css";

function Header() {
  const navigate = useNavigate();
  const { user, clearUserInformation } = useUserStore();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await doSignOut();
    clearUserInformation();
    navigate("/");
  };

  return (
    <section className="header">
      <div className="header-container">
        <nav className="header-nav">
          <div className="main-header-links">
            <ol className={`header-nav-list ${menuOpen ? "open" : ""}`}>
              <li className="header-nav-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="header-nav-item">
                <Link to="/Questions">Questions</Link>
              </li>
              <li className="header-nav-item">
                <Link to="/Profile">Profile</Link>
              </li>
            </ol>
          </div>
          <div className="signing-buttons">
            {user ? (
              <button className="sign-out-btn" onClick={handleSignOut}>
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
