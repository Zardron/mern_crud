import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyNotes from "./pages/MyNotes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-notes" element={<MyNotes />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
