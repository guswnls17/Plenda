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
import PlendaPostPage from './Pages/Notice/PlendaPostPage';
import BrandPostPage from './Pages/Notice/BrandPostPage';
import AddNoticePage from './Pages/Notice/AddNoticePage';
import StorePage from './Pages/Store/StorePage';
import AddStorePage from './Pages/Store/AddStorePage';
import PointStorePage from './Pages/PointStore/PointStorePage';
import ModifyPointStorePage from './Pages/PointStore/ModifyPointStorePage';
import PaymentModifyPage from './Pages/PointStore/PaymentModifyPage';
import ZeroPayPage from './Pages/PointStore/ZeroPayPage';
import ModifyOperatingPage from './Pages/PointStore/ModifyOperatingPage';
import MenuPage from './Pages/Menu/MenuPage';
import NextMenuPage from './Pages/Menu/NextMenuPage';
import EndMenuPage from './Pages/Menu/EndMenuPage';
import PostMenuPage from './Pages/Menu/PostMenuPage';
import AddMenuPage from './Pages/Menu/AddMenuPage';
import PointMenuPage from './Pages/PointMenu/PointMenuPage';
import StaffPage from './Pages/Staff/StaffPage';


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
          <Route exact path="/infobrand/modify" component={ModifyBrandPage} />
          <Route exact path="/notice" component={NoticePage} />
          <Route exact path="/notice/postplenda/:id" component={PlendaPostPage} />
          <Route exact path="/notice/postbrand/:id" component={BrandPostPage} />
          <Route exact path="/notice/add" component={AddNoticePage} />
          <Route exact path="/store" component={StorePage} />
          <Route exact path="/store/add" component={AddStorePage} />
          <Route exact path="/store/point" component={PointStorePage} />
          <Route exact path="/store/point/:id" component={PointStorePage} />
          <Route exact path="/store/point/modify/:id" component={ModifyPointStorePage} />
          <Route exact path="/store/point/payment/:id" component={PaymentModifyPage} />
          <Route exact path="/store/point/zeropay/:id" component={ZeroPayPage} />
          <Route exact path="/store/point/operating/:id" component={ModifyOperatingPage} />
          <Route exact path="/menu" component={MenuPage} />
          <Route exact path="/menu/next" component={NextMenuPage} />
          <Route exact path="/menu/end" component={EndMenuPage} />
          <Route exact path="/menu/post/:id" component={PostMenuPage} />
          <Route exact path="/menu/add" component={AddMenuPage} />
          <Route exact path="/menu/point/:id" component={PointMenuPage} />
          <Route exact path="/staff" component={StaffPage} />
        </>
      }
    </Switch>
  );
};

export default Routes;