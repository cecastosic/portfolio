import React from "react";
import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div id="colorlib-page">
      <div class="container-wrap">
        <Menu />
        <div id="colorlib-main">
          <Home />
          <About />
          <Services />
          <Projects />
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
}

export default App;
