import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";

function Admin() {
  return (
    <>
      <section className="home-admin-section">
        <div className="home-admin-main-container">
          <div className="home-admin-navigation-section">
            <Link to="/Students">
              <button>Students</button>
            </Link>
            <Link to="/Category">
              <button>Categories</button>
            </Link>
            <Link to="/AddQuestion">
              <button>Add Question</button>
            </Link>
          </div>

          <div className="welcome-admin-section">
            <h1>Welcome Mwalimu</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Admin;
