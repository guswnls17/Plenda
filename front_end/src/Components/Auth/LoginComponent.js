import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BoxInput from '../../Common/Input/BoxInput';
import useInput from '../../Common/Hooks/useInput';
import ChackBox from '../../Common/ChackBox/ChackBox';
import BasicButton from '../../Common/Button/BasicButton';

import LoginPlendaLogo from '../../Images/login_plendaLogo.png'
import KakaoLogin from '../../Images/kakaoLogin.png'
import FacebookLogin from '../../Images/facebookLogin.png'
import NaverLogin from '../../Images/naverLogin.png'
import AuthTemplate from './AuthTemplate/AuthTemplate';

const AuthFrom = styled.div`
  margin-top: 20px;
  width: 360px;
`

const ChackContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & > a {
    margin-top: 2px;
    margin-left: auto;
    cursor: pointer;

    & > p {
      font-size: 12px;
      font-weight: 300;
      color: #e8e8e8;
    }
  }
`

const AuthLinkButton = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > a > p {
    color: white;
    font-size: 13px;
    cursor: pointer;

    & > span {
      font-size: 13px;
      margin-left: 10px;
      font-weight: 500;
    }
  }
`

const SocialLine = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  opacity: 0.4;

  & > div:nth-child(1) {
    margin-right: auto;
    width: calc(50% - 18px);
    border: 0.5px solid white;
    box-sizing: border-box;
  }
  & > div:nth-child(2) {
    width: 16px;
    height: 16px;
    border-radius: 16px;
    border: 1px solid white;
  }
  & > div:nth-child(3) {
    margin-left: auto;
    width: calc(50% - 18px);
    border: 0.5px solid white;
  }
`

const SocialLogin = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;

  & > div {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    & > img {
      width: 50px;
      height: 50px;
    }
  }
`

export default () => {
  const emailState = useInput("");
  const passwordState = useInput("");

  return (
    <AuthTemplate>
      <img alt="" src={LoginPlendaLogo} />
      <AuthFrom>
        <BoxInput
          {...emailState}
          text={"Email"}
          type={"email"}
        />
        <BoxInput
          {...passwordState}
          text={"Password"}
          type={"password"}
        />
        <ChackContainer>
          <ChackBox
            id={"idChack"}
            text={"아이디저장"}
          />
          <Link to="/findpassword">
            <p>비밀번호를 잊어버리셨나요?</p>
          </Link>
        </ChackContainer>
        <BasicButton
          text={"LOGIN"}
        />
        <AuthLinkButton>
          <Link to="/signup">
            <p>회원가입이 필요하신가요?<span>회원가입</span></p>
          </Link>
        </AuthLinkButton>
        <SocialLine>
          <div></div>
          <div></div>
          <div></div>
        </SocialLine>
        <SocialLogin>
          <div><img alt="" src={KakaoLogin} /></div>
          <div><img alt="" src={FacebookLogin} /></div>
          <div><img alt="" src={NaverLogin} /></div>
        </SocialLogin>
      </AuthFrom>
    </AuthTemplate>
  )
}