import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Navbar  from "./components/Navbar";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />}/>
      </Routes>
    </Router>
  )
}

export default App;