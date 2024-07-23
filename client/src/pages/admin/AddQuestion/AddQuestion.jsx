import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/success.css";
import useQuestionStore from "../../../store/questionStore.js";
import "./addQuestion.css";

function AddQuestion() {
  const [category, setCategory] = useState("");
  const [lecturer, setLecturer] = useState("");
  const [number, setNumber] = useState("");
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const addQuestion = useQuestionStore((state) => state.addQuestion);
  const addTopic = useQuestionStore((state) => state.addTopic);
  const topics = useQuestionStore((state) => state.topics);

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const topic = topics.find((t) => t.title === category);

    if (!topic) {
      const newTopic = {
        id: topics.length + 1,
        title: category,
        lecturer: lecturer || "Unknown",
        numberOfQuestions: 1,
      };
      addTopic(newTopic);
      addQuestion(newTopic.id, {
        id: number,
        text: question,
        options: answers,
        answer: correctAnswer,
      });
    } else {
      addQuestion(topic.id, {
        id: number,
        text: question,
        options: answers,
        answer: correctAnswer,
      });
    }

    toast("Question added successfully", { theme: "success" });

    setCategory("");
    setLecturer("");
    setNumber("");
    setQuestion("");
    setAnswers(["", "", "", ""]);
    setCorrectAnswer("");
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
          <label>Lecturer:</label>
          <input
            type="text"
            value={lecturer}
            onChange={(e) => setLecturer(e.target.value)}
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
        <div className="fill-in-space">
          <label>Correct Answer:</label>
          <select
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            required
          >
            <option value="">Select correct answer</option>
            {answers.map((answer, index) => (
              <option key={index} value={answer}>
                {answer}
              </option>
            ))}
          </select>
        </div>
        <button className="submit-btn" type="submit">
          Add Question
        </button>
      </form>
    </section>
  );
}

export default AddQuestion;
