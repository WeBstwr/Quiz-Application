import React from "react";
import Dashboard from "../../Dashboard/Dashboard";
import { Link } from "react-router-dom";
// import "./category.css";

function Category() {
  return (
    <>
      <section className="admin-section">
        <div className="admin-main-container">
          <div className="admin-navigation-section">
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
          <div className="admin-category-section">
            <Dashboard />
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;
