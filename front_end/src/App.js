import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from './Routes';
import { MenuProvider } from './Common/Context/MenuContext';

function App() {
  return (
    <MenuProvider>
      <Router>
        <GlobalStyles/>
        <Routes/>
      </Router>
    </MenuProvider>
  );
}

export default App;
