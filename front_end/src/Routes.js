import React, { useEffect } from 'react';
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
import PointStaffPage from './Pages/PointStaff/PointStaffPage';
import SalesPage from './Pages/Sales/SalesPage';
import ProfilePage from './Pages/Profile/ProfilePage';
import AddProfilePage from './Pages/Profile/AddProfilePage';
import SettingPage from './Pages/Setting/SettingPage';
import PwChangePage from './Pages/Setting/PwChangePage';
import { useDispatch, useSelector } from 'react-redux';
import { loaduser} from './store/modules/auth';
import PointNextMenuPage from './Pages/PointMenu/PointNextMenuPage';
import PointEndMenuPage from './Pages/PointMenu/PointEndMenuPage';

const Routes = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);

  useEffect(() => {
    if(!user) {
      dispatch(loaduser())
    }
  }, [user, dispatch])

  return (
    <Switch>
      {!user ?
        <>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/findpassword" component={FindPasswordPage} />
        </>
        :
        <>
          <Route exact path="/" component={BrandPage} />
          <Route exact path="/addbrand" component={AddBrandPage} />
          <Route exact path="/dashbord/:brand" component={DashbordPage} />
          <Route exact path="/infobrand/:brand" component={InfoBrandPage} />
          <Route exact path="/infobrand/:brand/modify" component={ModifyBrandPage} />
          <Route exact path="/notice/:brand" component={NoticePage} />
          <Route exact path="/notice/:brand/postplenda/:id" component={PlendaPostPage} />
          <Route exact path="/notice/:brand/postbrand/:id" component={BrandPostPage} />
          <Route exact path="/notice/:brand/add" component={AddNoticePage} />
          <Route exact path="/store/:brand" component={StorePage} />
          <Route exact path="/store/:brand/add" component={AddStorePage} />
          <Route exact path="/store/:brand/point" component={PointStorePage} />
          <Route exact path="/store/:brand/point/:id" component={PointStorePage} />
          <Route exact path="/store/:brand/point/modify/:id" component={ModifyPointStorePage} />
          <Route exact path="/store/:brand/point/payment/:id" component={PaymentModifyPage} />
          <Route exact path="/store/:brand/point/zeropay/:id" component={ZeroPayPage} />
          <Route exact path="/store/:brand/point/operating/:id" component={ModifyOperatingPage} />
          <Route exact path="/menu/:brand" component={MenuPage} />
          <Route exact path="/menu/:brand/next" component={NextMenuPage} />
          <Route exact path="/menu/:brand/end" component={EndMenuPage} />
          <Route exact path="/menu/:brand/post/:id" component={PostMenuPage} />
          <Route exact path="/menu/:brand/add" component={AddMenuPage} />
          <Route exact path="/menu/:brand/point/:id" component={PointMenuPage} />
          <Route exact path="/menu/:brand/point/next/:id" component={PointNextMenuPage} />
          <Route exact path="/menu/:brand/point/end/:id" component={PointEndMenuPage} />
          <Route exact path="/staff/:brand" component={StaffPage} />
          <Route exact path="/staff/:brand/point/:id" component={PointStaffPage} />
          <Route exact path="/sales/:brand" component={SalesPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/profile/add" component={AddProfilePage} />
          <Route exact path="/setting" component={SettingPage} />
          <Route exact path="/pwchange" component={PwChangePage} />
        </>
      }
    </Switch>
  );
};

export default Routes;