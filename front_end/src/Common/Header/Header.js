import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Media from 'react-media';

import HeaderLogo from '../../Images/headerLogo.png';
import ProfileImg from '../../Images/profileImg.png';
import SideButton from '../../Images/sideButton.png';
import useInput from '../Hooks/useInput';

const Header = styled.div`
  position: absolute;
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
  padding: 0 40px;

  & > img {
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
  }
  
`

const HeaderToggle = styled.div`
  display: ${props => props.headerToggle ? "block" : "none"};
  position: absolute;
  top: 52px;
  right: 20px;
  width: 140px;
  padding: 10px 0;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  & > div {
    text-align: center;
    width: 140px;
    padding: 10px 0;

    & > a {
      width: 100%;
      height: 100%;
      font-size: 14px;
      color: black;
    }
  }
`

export default ({ SidebarControl }) => {
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
      <Media query={{ maxWidth: 1000 }}>
        {matches =>
          matches ? (
            <img alt="" src={SideButton} style={{width: 24}} onClick={SidebarControl} />
          ) : (
            <img alt="" src={HeaderLogo} style={{width: 110}} />
          )
        }
      </Media>
      <div onClick={HeaderToggleControler}>
        <img alt="" src={ProfileImg} />
        <p>username</p>
        <HeaderToggle headerToggle={headerToggle.value}>
          <div><Link to="/profile">프로필</Link></div>
          <div><Link>내 브랜드</Link></div>
          <div><Link>설정</Link></div>
          <div><Link>로그아웃</Link></div>
        </HeaderToggle>
      </div>
    </Header>
  )
}