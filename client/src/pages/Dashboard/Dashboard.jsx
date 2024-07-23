import React from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const dummyTopics = [
  {
    id: 1,
    title: "Mathematics",
    lecturer: "Prof. John Doe",
    numberOfQuestions: 10,
  },
  {
    id: 2,
    title: "Science",
    lecturer: "Dr. Jane Smith",
    numberOfQuestions: 8,
  },
];

function Dashboard() {
  const navigate = useNavigate();

  const handleTopicClick = (topicId) => {
    navigate(`/questions/${topicId}`);
  };

  return (
    <section className="dashboard">
      <h1>Topics</h1>
      <div className="topics-area">
        {dummyTopics.map((topic) => (
          <div
            className="topics-container"
            key={topic.id}
            onClick={() => handleTopicClick(topic.id)}
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
