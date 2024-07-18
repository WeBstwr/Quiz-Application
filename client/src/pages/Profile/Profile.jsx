import React from "react";
import "./profile.css";
import { useAuth } from "../../context/authContext/authContext";

const Profile = () => {
  const currentUser = useAuth();
  return (
    <>
      <div className="display-user">
        Hello{" "}
        {currentUser?.displayName
          ? currentUser.displayName
          : currentUser?.email}
        , you are now logged in.
      </div>
    </>
  );
};

export default Profile;
