import React from "react";
import { useAuth } from "../../context/AuthContext/AuthContext";

const Profile = () => {
  const currentUser = useAuth();
  return (
    <div className="display-user">
      Hello{" "}
      {currentUser?.displayName ? currentUser.displayName : currentUser?.email},
      you are now logged in.
    </div>
  );
};

export default Profile;
