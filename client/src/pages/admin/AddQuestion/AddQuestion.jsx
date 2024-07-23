import React, { useState } from "react";
import { Link } from "react-router-dom";
import useQuestionStore from "../../../store/questionStore.js";
import "./addQuestion.css";

function AddQuestion() {
  const [category, setCategory] = useState("");
  const [number, setNumber] = useState("");
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const addQuestion = useQuestionStore((state) => state.addQuestion);

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuestion = {
      category,
      number,
      question,
      answers,
    };
    addQuestion(newQuestion);
    console.log(newQuestion);
  };

  return (
    <section className="add-quiz-section">
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

      <form className="quiz-container" onSubmit={handleSubmit}>
        <h2>Add Question</h2>
        <div className="fill-in-space">
          <label>Topic Title:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="fill-in-space">
          <label>Question Number:</label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <div className="quiz-space">
          <label className="quiz-label">Question:</label>
          <textarea
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>
        <div className="choices-section">
          <label className="answers-area">
            <h3>Answers:</h3>
          </label>
          <div className="answers-container">
            {["A", "B", "C", "D"].map((label, index) => (
              <div key={index}>
                <label>{label}:</label>
                <input
                  className="answers-input"
                  type="text"
                  value={answers[index]}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  required
                />
              </div>
            ))}
          </div>
        </div>
        <button className="submit-btn" type="submit">
          Add Question
        </button>
      </form>
    </section>
  );
}

export default AddQuestion;
