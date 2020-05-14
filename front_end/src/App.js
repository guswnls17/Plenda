import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from './Routes';

function App() {
  return (
      <Router>
        <GlobalStyles/>
        <Routes/>
      </Router>
  );
}

export default App;
