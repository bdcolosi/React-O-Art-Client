import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ArtDetail from "./components/artdetail";
import MainContent from "./components/maincontent";


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={MainContent} />
        <Route path="/images/:art_id?" component={ArtDetail} />
      </Router>
    </div>
  );
}

export default App;
