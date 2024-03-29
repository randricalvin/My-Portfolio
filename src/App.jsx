import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
  // create a routes to the different pages
  <div className="App">
  <Router>
  <CustomCursor />
  <NavBar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</Router>
<Footer />
</div>
  );
}

export default App;
