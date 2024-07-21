import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";

function Admin() {
  return (
    <>
      <section className="home-admin-section">
        <div className="home-admin-main-container">
          <div className="home-admin-navigation-section">
            <Link to="/admin/authenticate">
              <button>Authenticate User</button>
            </Link>
            <Link to="/admin/students">
              <button>Students</button>
            </Link>
            <Link to="/admin/category">
              <button>Categories</button>
            </Link>
            <Link to="/admin/addQuestion">
              <button>Add Question</button>
            </Link>
          </div>

          <div className="welcome-admin-section">
            <h1>Welcome Mwalimu</h1>
            <h2>Pending students to be verified</h2>
            <div className="authentication-container">
              <div className="student-main-container-auth">
                <div className="student-container-auth">
                  <h3>Name: Ian Wololo</h3>
                  <h4>Email: wololo@gmail.com</h4>
                  <p>Phone: 0712345678</p>
                </div>
                <div className="student-buttons-auth">
                  <button className="verify">Verify</button>
                  <button className="decline">Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Admin;
