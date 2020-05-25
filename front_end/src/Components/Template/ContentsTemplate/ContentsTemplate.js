import React, { useEffect } from 'react';
import styled from 'styled-components';

import Footer from '../../../Common/Footer/Footer';
import Header from '../../../Common/Header/Header';
import useInput from '../../../Common/Hooks/chackdInput';
import SideBar from '../../../Common/SideBar/SideBar';

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

  const SidebarControl = () => {
    sidebar.setValue(!sidebar.value)
  }

  useEffect(() => {
    if(sidebar.value === true) {
      document.addEventListener("click", SidebarControl)
      return () => document.removeEventListener("click", SidebarControl);
    }
  })

  return (
    <Container>
      <Header SidebarControl={SidebarControl} sidebarBoolean={sidebarBoolean}/>
      {sidebarBoolean &&
        <SideBar sidebar={sidebar.value}/>
      }
      <Body bgColor={bgColor}>
        <Contents sidebarBoolean={sidebarBoolean}>
          {children}
        </Contents>
      </Body>
      <Footer backgroundColor={true}/>
      <BlackBg sidebar={sidebar.value}/>
    </Container>
  )
}