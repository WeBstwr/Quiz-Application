import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useQuestionStore from "../../store/questionStore.js";
import "./questions.css";

function Questions() {
  const { topicId, topicTitle } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const questions = useQuestionStore((state) => state.questions[topicId] || []);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      let correctAnswersCount = 0;
      questions.forEach((question) => {
        if (selectedAnswers[question.id] === question.answer) {
          correctAnswersCount++;
        }
      });
      setScore(correctAnswersCount);

      navigate("/Results", {
        state: { score: correctAnswersCount, totalQuestions: questions.length },
      });
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
              <button onClick={handleNextQuestion}>
                {currentQuestionIndex === questions.length - 1
                  ? "Finish"
                  : "Next"}
              </button>
            </div>
          </div>
        ) : (
          <h2>No questions available for this topic.</h2>
        )}
      </div>
    </section>
  );
}

export default Questions;
