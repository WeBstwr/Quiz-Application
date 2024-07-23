import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./questions.css";

const dummyQuestions = {
  1: [
    {
      id: 1,
      text: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      id: 2,
      text: "What is 3 + 5?",
      options: ["7", "8", "9", "10"],
      answer: "8",
    },
  ],
  2: [
    {
      id: 1,
      text: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "H2", "CO2"],
      answer: "H2O",
    },
    {
      id: 2,
      text: "What is the speed of light?",
      options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
      answer: "300,000 km/s",
    },
  ],
};

function Questions() {
  const { topicId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    const fetchedQuestions = dummyQuestions[topicId] || [];
    setQuestions(fetchedQuestions);
  }, [topicId]);

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
        <h2>Topic Title</h2>
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
