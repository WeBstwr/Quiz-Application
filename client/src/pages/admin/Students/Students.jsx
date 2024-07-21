import React from "react";
import { Link } from "react-router-dom";
import "./students.css";

function Students() {
  return (
    <>
      <section className="admin-section">
        <div className="admin-main-container">
          <div className="admin-navigation-section">
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
          <div className="admin-students-section">
            <h2>Your Students</h2>
            <div className="admin-students-container">
              <div className="student-main-container">
                <div className="student-container">
                  <h3>Name: Ian Wololo</h3>
                  <h4>Email: wololo@gmail.com</h4>
                  <p>Phone: 0712345678</p>
                </div>
                <div className="remove-student-button">
                  <button>Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Students;
