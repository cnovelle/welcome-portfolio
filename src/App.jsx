import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import { useState } from "react";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navigation />
      <Intro />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
