import React, { useEffect } from "react";
import useUserStore from "../../store/userStore.js";
import useParticipationStore from "../../store/participationStore.js";
import "./profile.css";

const Profile = () => {
  const { user } = useUserStore();
  const { participation, fetchParticipationByStudentId } =
    useParticipationStore();

  useEffect(() => {
    if (user) {
      fetchParticipationByStudentId();
    }
  }, [user, fetchParticipationByStudentId]);

  return (
    <>
      <div className="display-user-section">
        <h2>Hello {user?.fullName}, you are now logged in.</h2>
        <div className="user-details">
          <p>
            Email Address: <br /> {user?.emailAddress}
          </p>
          <p>
            Phone Number: <br /> {user?.phoneNumber}
          </p>
        </div>
      </div>
      <div className="participation-section">
        <h3>Your Participation</h3>
        {participation.length > 0 ? (
          <ul>
            {participation.map((item) => (
              <li key={item.id}>
                Topic: {item.topicName}, Questions Done: {item.questionsDone},
                Results: {item.results}
              </li>
            ))}
          </ul>
        ) : (
          <p>No participation data available.</p>
        )}
      </div>
    </>
  );
};

export default Profile;
