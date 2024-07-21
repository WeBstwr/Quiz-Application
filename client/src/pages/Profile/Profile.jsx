import React from "react";
import useUserStore from "../../store/userStore.js";
import "./profile.css";

const Profile = () => {
  const { user } = useUserStore();

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
    </>
  );
};

export default Profile;
