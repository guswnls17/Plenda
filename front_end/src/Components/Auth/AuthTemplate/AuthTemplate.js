import React from 'react';
import styled from 'styled-components';
import Footer from '../../../Common/Footer/Footer';

import PrendaLoginBg from '../../../Images/prenda_loginBg.png'

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-top: 120px; 
  padding-bottom: 180px; 
  background-color: #253245;
  background-image: url(${PrendaLoginBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 80px;
  padding-bottom: 80px;
  width: 610px;
  background: rgba(255, 255, 255, 0.05);

  & > img {
    width: 300px;
  }
`

export default ({ children }) => {
  return (
    <Container>
      <AuthContainer>
        {children}
      </AuthContainer>
      <Footer/>
    </Container> 
  )
}