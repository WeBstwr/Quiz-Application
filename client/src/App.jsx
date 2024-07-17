import React from "react";
// import { AuthProvider } from "./context/authContext/authContext";
import Header from "./components/Header/Header";
import SignUp from "./components/Authentication/SignUp/SignUp";
import SignIn from "./components/Authentication/SignIn/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import Questions from "./pages/Questions/Questions";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/Questions" element={<Questions />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
