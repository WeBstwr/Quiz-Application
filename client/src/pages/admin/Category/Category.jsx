import React from "react";
import Dashboard from "../../Dashboard/Dashboard";
import { Link } from "react-router-dom";

function Category() {
  return (
    <>
      <section className="admin-section">
        <div className="admin-main-container">
          <div className="admin-navigation-section">
            <Link to="/admin">
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
          <div className="admin-category-section">
            <Dashboard />
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;
