import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from './Routes';
import { MenuProvider } from './Common/Context/MenuContext';
import { Provider } from 'react-redux';
import configure from './store/configure';

const store = configure();


function App() {
  return (
    <Provider store={store}>
      <MenuProvider>
        <Router>
          <GlobalStyles/>
          <Routes/>
        </Router>
      </MenuProvider>
    </Provider>
  );
}

export default App;
