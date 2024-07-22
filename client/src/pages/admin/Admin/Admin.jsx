import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./admin.css";
import { apiBase } from "../../../utils/config.js";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import "react-simple-toasts/dist/theme/success.css";
import "react-simple-toasts/dist/theme/failure.css";

function Admin() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUnapprovedStudents = async () => {
      try {
        const response = await fetch(`${apiBase}/api/users/unapproved`, {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        if (data.success) {
          setStudents(data.data);
        } else {
          setError(data.message);
        }
      } catch (e) {
        toast(e.message, { theme: "failure" });
      } finally {
        setLoading(false);
      }
    };

    fetchUnapprovedStudents();
  }, []);

  const approveStudent = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`${apiBase}/api/users/approve/${id}`, {
        method: "PATCH",
        credentials: "include",
      });
      const data = await response.json();
      if (data.success) {
        toast("User approved successfully", { theme: "success" });
        setStudents((prevStudents) =>
          prevStudents.filter((student) => student.id !== id),
        );
      } else {
        toast("There was an error approving the account", { theme: "failure" });
      }
    } catch (e) {
      toast(e.message, { theme: "failure" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="home-admin-section">
        <div className="home-admin-main-container">
          <div className="home-admin-navigation-section">
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

          <div className="welcome-admin-section">
            <h1>Welcome Mwalimu</h1>
            <h2>
              {students.length > 0
                ? `You have ${students.length} unapproved students`
                : " You have no unapproved students"}
            </h2>
            <div className="authentication-container">
              {students.map((student) => (
                <div className="student-main-container-auth" key={student.id}>
                  <div className="student-container-auth">
                    <h3>Name: {student.fullName}</h3>
                    <h4>Email: {student.emailAddress}</h4>
                    <p>Phone: {student.phoneNumber}</p>
                  </div>
                  <div className="student-buttons-auth">
                    <button
                      className="verify"
                      onClick={() => approveStudent(student.id)}
                    >
                      Verify
                    </button>
                    <button className="decline">Decline</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Admin;
