import React from "react";
import { useNavigate } from "react-router-dom";
import useQuestionStore from "../../store/questionStore.js";
import "./dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const topics = useQuestionStore((state) => state.topics);

  const handleTopicClick = (topicId, title) => {
    navigate(`/Questions/${topicId}/${encodeURIComponent(title)}`);
  };

  return (
    <section className="dashboard">
      <h1>Topics</h1>
      <div className="topics-area">
        {topics.map((topic) => (
          <div
            className="topics-container"
            key={topic.id}
            onClick={() => handleTopicClick(topic.id, topic.title)}
          >
            <div className="topic-title">
              <h2>{topic.title}</h2>
              <h3>{topic.lecturer}</h3>
            </div>
            <div className="topic-description">
              <p>Number of Questions: {topic.numberOfQuestions}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
