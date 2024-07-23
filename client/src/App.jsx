import React from "react";
import "./assets/globals.css";
import { AuthProvider } from "./context/authContext/authContext";
import Header from "./components/Header/Header";
import SignUp from "./components/Authentication/SignUp/SignUp";
import SignIn from "./components/Authentication/SignIn/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import Questions from "./pages/Questions/Questions";
import Results from "./pages/Questions/Results";
import Profile from "./pages/Profile/Profile";
import Admin from "./pages/admin/Admin/Admin";
import Students from "./pages/admin/Students/Students";
import Category from "./pages/admin/Category/Category";
import AddQuestion from "./pages/admin/AddQuestion/AddQuestion";
import Footer from "./components/Footer/Footer";
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
          <Route
            path="/Questions/:topicId/:topicTitle"
            element={<Questions />}
          />
          <Route path="/Results" element={<Results />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/students" element={<Students />} />
          <Route path="/admin/category" element={<Category />} />
          <Route path="/admin/addQuestion" element={<AddQuestion />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
