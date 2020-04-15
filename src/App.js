import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import styled from "styled-components";
import MainContent from "./components/maincontent";
import ArtInfo from "./components/artinfo";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact component={MainContent}/>
        <Route path='/objects/:objectID?' exact component={ArtInfo}/>
      </Router>
      
    </div>
  );
}

export default App;
