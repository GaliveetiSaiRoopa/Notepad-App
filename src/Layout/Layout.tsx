import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "../pages/Auth/login/LoginPage";
import SignUpPage from "../pages/Auth/signup/SignUpPage";
import NotesListing from "../pages/notes/NotesListing";
import CreateNotes from "../pages/notes/create/CreateNotes";
import EditNotes from "../pages/notes/create/EditNotes";
import ViewNotes from "../pages/notes/create/ViewNotes";

const Layout = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/notes" element={<NotesListing />} />
        <Route path="/notes/create" element={<CreateNotes />} />
        <Route path="/notes/edit/:id" element={<EditNotes />} />
        <Route path="/notes/view/id" element={<ViewNotes />} />
      </Routes>
    </Router>
  );
};

export default Layout;
