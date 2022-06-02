import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
  // create a routes to the different pages
  <div className="">
  <Router>
  <NavBar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</Router>
</div>
  );
}

export default App;
