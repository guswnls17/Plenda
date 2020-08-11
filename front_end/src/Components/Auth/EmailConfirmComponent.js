import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import useInput from '../../Common/Hooks/useInput';
import AuthTemplate from '../Template/AuthTemplate/AuthTemplate';
import BoxInput from '../../Common/Input/BoxInput';
import AuthButton from '../../Common/Button/AuthButton';
import { useSelector } from 'react-redux';


const SignupBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

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

export default ({ register }) => {
  const authCode = useInput("");
  const authCodeErr = useInput(false);
  const { email, name, password }= useSelector(state => state.signup)

  const history = useHistory()

  const signupHandler = async() => {
    try {
      if(authCode.value === ""){
        authCodeErr.setValue(true);
        return
      } else {
        authCodeErr.setValue(false);
      } 
      register(name, email, password)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if(!email){
      history.push("/signup")
    }
  })

  return (
    <AuthTemplate>
      <SignupBox>
        <h1>SIGN UP</h1>
        <p>등록하신 이메일로 인증코드가 전송되었습니다.</p>
        <AuthFrom>
          <BoxInput
            {...authCode}
            errState={authCodeErr}
            errText={"인증코드를 인력해주세요."}
            text={"인증코드를 인력해주세요."}
            type={"number"}
            style={{marginTop: 14}}
          />
          <AuthButton
            style={{ marginTop: "50px" }}
            text={"SIGN UP"}
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
