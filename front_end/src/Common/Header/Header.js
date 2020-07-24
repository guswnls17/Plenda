import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Media from 'react-media';

import HeaderLogo from '../../Images/headerLogo.png';
import ProfileImg from '../../Images/profileImg.png';
import SideButton from '../../Images/sideButton.png';
import useInput from '../Hooks/useInput';

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #253245;
  padding: 0 30px;

  @media (max-width: 1000px) {
    padding: 0 20px;
  }

  & > img {
    margin-right: auto;
  }

  & > a {
    margin-right: auto;
  }

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    & > img {
      width: 30px;
    }

    & > p {
      margin-left: 10px;
      font-size: 16px;
      color: white;
    }

    @media (max-width: 1000px) {
      & > img {
        width: 24px;
      }

      & > p {
        font-size: 14px;
      }
    }
  }
  
`

const HeaderToggle = styled.div`
  display: ${props => props.headerToggle ? "block" : "none"};
  position: absolute;
  top: 52px;
  right: 10px;
  width: 140px;
  padding: 10px 0;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  & > a > div {
    text-align: center;
    width: 140px;
    padding: 10px 0;
    font-size: 14px;
    color: black;
  }
`

export default ({ SidebarControl, sidebarBoolean, LogoutHandler }) => {
  const headerToggle = useInput(false);

  const HeaderToggleControler = () => {
    headerToggle.setValue(!headerToggle.value)
  }

  useEffect(() => {
    if(headerToggle.value === true) {
      document.addEventListener("click", HeaderToggleControler)
      return () => document.removeEventListener("click", HeaderToggleControler);
    }
  })

  return (
    <Header>
      <Media query={{ maxWidth: 1439 }}>
        {matches =>
          matches ? (
            sidebarBoolean ?
            <img alt="" src={SideButton} style={{width: 24}} onClick={SidebarControl} />
            :
            <Link to="/">
              <img alt="" src={HeaderLogo} style={{width: 100}} />
            </Link>
          ) : (
            <Link to="/">
              <img alt="" src={HeaderLogo} style={{width: 110}} />
            </Link>
          )
        }
      </Media>
      <div onClick={HeaderToggleControler}>
        <img alt="" src={ProfileImg} />
        <p>username</p>
        <HeaderToggle headerToggle={headerToggle.value}>
          <Link to="/profile"><div>프로필</div></Link>
          {/* <Link to="/"><div>내 브랜드</div></Link> */}
          <Link to="/setting"><div>설정</div></Link>
          <Link to="" onClick={LogoutHandler}><div>로그아웃</div></Link>
        </HeaderToggle>
      </div>
    </Header>
  )
}