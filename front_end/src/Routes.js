import React from 'react';
import { Route, Switch } from "react-router-dom";
import LoginPage from './Pages/Auth/LoginPage';
import SignupPage from './Pages/Auth/SignupPage';
import FindPasswordPage from './Pages/Auth/FindPasswordPage';
import BrandPage from './Pages/Contents/BrandPage/BrandPage';
import DashbordPage from './Pages/Contents/DashbordPage/DashbordPage';
import AddBrandPage from './Pages/Contents/BrandPage/AddBrandPage';
import InfoBrandPage from './Pages/Contents/BrandPage/InfoBrandPage';
import ModifyBrandPage from './Pages/Contents/BrandPage/ModifyBrandPage';
import NoticePage from './Pages/Notice/NoticePage';


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
          <Route exact path="/infobrand" component={InfoBrandPage} />
          <Route exact path="/modifybrand" component={ModifyBrandPage} />
          <Route exact path="/notice" component={NoticePage} />
        </>
      }
    </Switch>
  );
};

export default Routes;