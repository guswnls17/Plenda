import React, { useEffect } from 'react';
import styled from 'styled-components';

import Footer from '../../../Common/Footer/Footer';
import Header from '../../../Common/Header/Header';
import useInput from '../../../Common/Hooks/chackdInput';

const Container = styled.div`
  position: relative;
  padding-top: 50px;
`

const Body = styled.div`
`

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 240px;
  height: 100vh;
  background-color: #455571;
  transition: margin-left 200ms ease-in-out;

  @media (max-width: 1000px) {
    margin-left: ${props => props.sidebar ? "0px" : "-240px"};
    z-index: 200;
  }
`

const Contents = styled.div`
  border: 1px solid red;
  margin-left: 240px;
  transition: margin-left 200ms ease-in-out;
  padding: 0 40px;

  @media (max-width: 1000px) {
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

  @media (min-width: 1000px) {
    display: none;
  }
`

export default ({ children }) => {
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
      <Header SidebarControl={SidebarControl}/>
      <Sidebar sidebar={sidebar.value}>
        
      </Sidebar>
      <Body>
        <Contents>
          {children}
        </Contents>
      </Body>
      <Footer backgroundColor={true}/>
      <BlackBg sidebar={sidebar.value}/>
    </Container>
  )
}