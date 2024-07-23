import React from "react";
import { useLocation } from "react-router-dom";
import "./results.css";

function Results() {
  const location = useLocation();
  const { score, totalQuestions } = location.state || {
    score: 0,
    totalQuestions: 0,
  };

  return (
    <section className="results-section">
      <h2>
        you have scored: {score}/{totalQuestions}
      </h2>
      <p>thank you for participating!</p>
    </section>
  );
}

export default Results;
