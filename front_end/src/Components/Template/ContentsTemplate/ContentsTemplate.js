import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, getDetailbrand } from '../../../store/modules/auth';
import { useConfirmState, useAlertState, useAdressState } from '../../../Common/Context/MenuContext';

import Footer from '../../../Common/Footer/Footer';
import Header from '../../../Common/Header/Header';
import useInput from '../../../Common/Hooks/chackdInput';
import SideBar from '../../../Common/SideBar/SideBar';
import ConfirmModal from '../../../Common/Modal/ConfirmModal';
import AlertModal from '../../../Common/Modal/AlertModal';
import AdressModal from '../../../Common/Modal/AdressModal';

const Container = styled.div`
  position: relative;
`

const Body = styled.div`
  padding-top: 60px;
  padding-bottom: 140px;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`

const Contents = styled.div`
  margin-left: ${props => props.sidebarBoolean ? "240px" : "0px"};
  transition: margin-left 200ms ease-in-out;

  @media (max-width: 1439px) {
    margin-left: 0px;
  }
`

const BlackBg = styled.div`
  display: ${props => props.sidebar ? "block" : "none"};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.4;

  @media (min-width: 1439px) {
    display: none;
  }
`

export default ({ children, sidebarBoolean=true, bgColor }) => {
  const sidebar = useInput(false)
  const dispatch = useDispatch();
  const {detailBrand} = useSelector(state => state.auth);
  const confirmState = useConfirmState()
  const alertState = useAlertState()
  const adressState = useAdressState()
  const params = useParams()

  const SidebarControl = () => {
    sidebar.setValue(!sidebar.value)
  }

  const LogoutHandler = () => {
    dispatch(logout())
  }

  useEffect(() => {
    if(sidebar.value === true) {
      document.addEventListener("click", SidebarControl)
      return () => document.removeEventListener("click", SidebarControl);
    }
  })

  useEffect(() => {
    if(params.brand){
      dispatch(getDetailbrand(params.brand));
    }
  }, [params.brand, dispatch])

  return (
    <Container>
      <Header SidebarControl={SidebarControl} sidebarBoolean={sidebarBoolean} LogoutHandler={LogoutHandler}/>
      {sidebarBoolean &&
        <SideBar sidebar={sidebar.value} detailBrand={detailBrand}/>
      }
      <Body bgColor={bgColor}>
        <Contents sidebarBoolean={sidebarBoolean}>
          {children}
        </Contents>
      </Body>
      <Footer backgroundColor={true}/>
      <BlackBg sidebar={sidebar.value}/>
      {
        confirmState.value.boolean &&
        <ConfirmModal
          {...confirmState}
          title={confirmState.value.title}
          text={confirmState.value.text}
          trueOnClick={confirmState.value.trueOnClick}
        />
      }
      {
        alertState.value.boolean &&
        <AlertModal
          {...alertState}
          text={alertState.value.text}
        />
      }
      {
        adressState.value.boolean && 
        <AdressModal 
          {...adressState}
          adress={adressState.value.adress}
          adressModalNum={adressState.value.adressModalNum}
        />
      }
    </Container>
  )
}