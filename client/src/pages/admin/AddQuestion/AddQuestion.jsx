import React, { useState } from "react";
import "./addQuestion.css";

function AddQuestion() {
  const [category, setCategory] = useState("");
  const [number, setNumber] = useState("");
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);

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

    console.log(newQuestion);
  };

  return (
    <section className="add-quiz-section">
      <h2>add question</h2>
      <form className="quiz-container" onSubmit={handleSubmit}>
        <div className="fill-in-space">
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="fill-in-space">
          <label>Number:</label>
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
            {" "}
            <h3>Answers:</h3>{" "}
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
