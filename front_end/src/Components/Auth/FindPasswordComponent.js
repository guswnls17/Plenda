import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useInput from '../../Common/Hooks/useInput';
import AuthTemplate from './AuthTemplate/AuthTemplate';
import BoxInput from '../../Common/Input/BoxInput';
import BasicButton from '../../Common/Button/BasicButton';


const SignupBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > h1 {
    font-weight: bold;
    font-size: 48px;
    text-align: center;
    color: #FFFFFF;
  }

  & > p {
    color: white;
    margin-top: 20px;
  }
`

const AuthFrom = styled.div`
  margin-top: 30px;
  width: 360px;
`

const AuthLinkButton = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

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

export default () => {
  const email = useInput("");
  const name = useInput("");

  return (
    <AuthTemplate>
      <SignupBox>
        <h1>FIND PASSWORD</h1>
        <p>비밀번호찾기</p>
        <AuthFrom>
          <BoxInput
            {...email}
            text={"이메일을 입력해주세요."}
            type={"email"}
            style={{marginTop: 14}}
          />
          <BoxInput
            {...name}
            text={"이름을 입력해주세요."}
            type={"text"}
            style={{marginTop: 14}}
          />
          <BasicButton
            style={{ marginTop: "50px" }}
            text={"FIND PASSWORD"}
          />
          <AuthLinkButton>
            <Link to="/">
              <p>로그인페이지로 돌아가시겠습니까?<span>로그인</span></p>
            </Link>
          </AuthLinkButton>
        </AuthFrom>
      </SignupBox>
    </AuthTemplate>
  )
}
