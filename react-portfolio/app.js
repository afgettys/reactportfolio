import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact";
// import Project from "./components/Project.js";

function App() {
  return (
    <Router>
      <div>
        <Header />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
