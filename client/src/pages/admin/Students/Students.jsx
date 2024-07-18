import React from "react";
import "./students.css";

function Students() {
  return (
    <>
      <section className="admin-section">
        <div className="admin-main-container">
          <div className="admin-navigation-section">
            <button>students</button>
            <button>categories</button>
            <button>add question</button>
          </div>
          <div className="admin-students-section">
            <h2>your students</h2>
            <div className="admin-students-container">
              <div className="student-main-container">
                <div className="student-container">
                  <h3>name: ian wololo</h3>
                  <h4>email: wololo@gmail.com</h4>
                  <p>phone: 0712345678</p>
                </div>
                <div className="remove-student-button">
                  <button>remove</button>
                </div>
              </div>

              <div className="student-main-container">
                <div className="student-container">
                  <h3>name: ian wololo</h3>
                  <h4>email: wololo@gmail.com</h4>
                  <p>phone: 0712345678</p>
                </div>
                <div className="remove-student-button">
                  <button>remove</button>
                </div>
              </div>

              <div className="student-main-container">
                <div className="student-container">
                  <h3>name: ian wololo</h3>
                  <h4>email: wololo@gmail.com</h4>
                  <p>phone: 0712345678</p>
                </div>
                <div className="remove-student-button">
                  <button>remove</button>
                </div>
              </div>

              <div className="student-main-container">
                <div className="student-container">
                  <h3>name: ian wololo</h3>
                  <h4>email: wololo@gmail.com</h4>
                  <p>phone: 0712345678</p>
                </div>
                <div className="remove-student-button">
                  <button>remove</button>
                </div>
              </div>

              <div className="student-main-container">
                <div className="student-container">
                  <h3>name: ian wololo</h3>
                  <h4>email: wololo@gmail.com</h4>
                  <p>phone: 0712345678</p>
                </div>
                <div className="remove-student-button">
                  <button>remove</button>
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
