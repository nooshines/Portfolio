import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Now from "./components/Now";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Footer />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/now" component={Now} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>

      <Home />
    </div>
  );
}

export default App;
