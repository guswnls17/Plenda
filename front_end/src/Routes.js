import React from 'react';
import { Route, Switch } from "react-router-dom";
import LoginPage from './Pages/Auth/LoginPage';
import SignupPage from './Pages/Auth/SignupPage';
import FindPasswordPage from './Pages/Auth/FindPasswordPage';
import BrandPage from './Pages/Contents/BrandPage/BrandPage';
import DashbordPage from './Pages/Contents/DashbordPage/DashbordPage';
import AddBrandPage from './Pages/Contents/BrandPage/AddBrandPage';


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
          <Route exact path="/addbrand" component={AddBrandPage} />
        </>
      }
    </Switch>
  );
};

export default Routes;