import React from 'react';
import { Route, Switch } from "react-router-dom";
import LoginPage from './Pages/Auth/LoginPage';
import SignupPage from './Pages/Auth/SignupPage';
import FindPasswordPage from './Pages/Auth/FindPasswordPage';
import BrandPage from './Pages/Contents/BrandPage';
import DashbordPage from './Pages/Contents/DashbordPage';


const Routes = () => {

  return (
    <Switch>
      {false ?
        <>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/findpassword" component={FindPasswordPage} />
        </>
        :
        <>
          <Route exact path="/" component={BrandPage} />
          <Route exact path="/dashbord" component={DashbordPage} />
        </>
      }
    </Switch>
  );
};

export default Routes;