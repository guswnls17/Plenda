import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useInput from '../../Common/Hooks/useInput';
import BoxInput from '../../Common/Input/BoxInput';
import AuthButton from '../../Common/Button/AuthButton';
import AuthTemplate from '../Template/AuthTemplate/AuthTemplate';


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

    @media (max-width: 400px) {
      font-size: 12vw
    }
  }

  & > p {
    color: white;
    margin-top: 20px;
  }
`

const AuthFrom = styled.div`
  margin-top: 30px;
  width: 360px;

  @media (max-width: 400px) {
    width: 88%;
  }
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
  const emailErr = useInput(false);
  const name = useInput("");
  const nameErr = useInput(false);

  function email_check( email ) {
    var regex=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return (email !== '' && email !== 'undefined' && regex.test(email));
  }

  const signupHandler = () => {
    if(email.value === "" || email_check( email.value ) !== true){
      emailErr.setValue(true);
      return
    } else {
      emailErr.setValue(false);
    }
    if(name.value === ""){
      nameErr.setValue(true);
      return
    } else {
      nameErr.setValue(false);
    }
  }

  return (
    <AuthTemplate>
      <SignupBox>
        <h1>FIND PASSWORD</h1>
        <p>비밀번호찾기</p>
        <AuthFrom>
          <BoxInput
            {...email}
            errState={emailErr}
            errText={"이메일을 확인해주세요."}
            text={"이메일을 입력해주세요."}
            type={"email"}
            style={{marginTop: 14}}
          />
          <BoxInput
            {...name}
            errState={nameErr}
            errText={"이름을 확인해주세요."}
            text={"이름을 입력해주세요."}
            type={"text"}
            style={{marginTop: 14}}
          />
          <AuthButton
            style={{ marginTop: "50px" }}
            text={"FIND PASSWORD"}
            onClick={signupHandler}
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
