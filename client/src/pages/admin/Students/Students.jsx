import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./students.css";
import { apiBase } from "../../../utils/config.js";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import "react-simple-toasts/dist/theme/success.css";
import "react-simple-toasts/dist/theme/failure.css";

const Students = () => {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(`${apiBase}/api/users/students`, {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        if (data.success) {
          setStudents(data.data);
        } else {
          setError(data.message);
          return toast(error, { theme: "failure" });
        }
      } catch (e) {
        toast(e.message, { theme: "failure" });
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <>
      <section className="admin-section">
        <div className="admin-main-container">
          <div className="admin-navigation-section">
            <Link to="/admin">
              <button>Authenticate Student</button>
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
            <h2>
              {loading
                ? "Loading Students..."
                : students.length > 0
                  ? "Your Students"
                  : "No students Found"}
            </h2>
            <div className="admin-students-container">
              {students.map((student) => (
                <div
                  className="student-main-container"
                  key={student.emailAddress}
                >
                  <div className="student-container">
                    <h3>Name: {student.fullName}</h3>
                    <h4>Email: {student.emailAddress}</h4>
                    <p>Phone: {student.phoneNumber}</p>
                  </div>
                  <div className="remove-student-button">
                    <button>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Students;
