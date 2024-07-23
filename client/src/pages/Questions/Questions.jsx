import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useQuestionStore from "../../store/questionStore.js";
import "./questions.css";

function Questions() {
  const { topicId, topicTitle } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const questions = useQuestionStore((state) => state.questions[topicId] || []);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleOptionClick = (questionId, option) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: option });
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <section className="questions">
      <div className="questions-main-container">
        <h2>Topic Title: {decodeURIComponent(topicTitle)}</h2>
        {currentQuestion ? (
          <div className="questions-container">
            <div className="question-item">
              <div className="question-number">
                <h4>
                  {currentQuestionIndex + 1}/{questions.length}
                </h4>
              </div>
              <div className="question-text">
                <p>{currentQuestion.text}</p>
              </div>
              <div className="questions-options">
                {["A", "B", "C", "D"].map((label, index) => (
                  <div key={index} className="option-container">
                    <span className="option-label">{label}:</span>
                    <button
                      className={
                        selectedAnswers[currentQuestion.id] ===
                        currentQuestion.options[index]
                          ? "selected"
                          : ""
                      }
                      onClick={() =>
                        handleOptionClick(
                          currentQuestion.id,
                          currentQuestion.options[index],
                        )
                      }
                    >
                      {currentQuestion.options[index]}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="button-next-previous">
              <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              <button
                onClick={handleNextQuestion}
                disabled={currentQuestionIndex === questions.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <p>No questions available for this topic.</p>
        )}
      </div>
    </section>
  );
}

export default Questions;
