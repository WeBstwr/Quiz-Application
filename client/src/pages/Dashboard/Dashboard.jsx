import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useQuestionStore from "../../store/questionStore.js";
import { apiBase } from "../../utils/config.js";
import "./dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const topics = useQuestionStore((state) => state.topics);
  const setTopics = useQuestionStore((state) => state.setTopics);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await fetch(`${apiBase}/api/topics`, {
          method: "GET",
          credentials: "include",
        });
        const result = await response.json();
        if (result.success) {
          setTopics(result.data);
        } else {
          console.log("Error fetching topics");
        }
      } catch (error) {
        console.error("Failed to fetch topics", error);
      }
    };

    fetchTopics();
  }, [setTopics]);

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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
