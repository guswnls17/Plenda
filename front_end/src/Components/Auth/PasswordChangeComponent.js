import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
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
  const password = useInput("");
  const passwordErr = useInput(false);
  const pwConfirm = useInput("");
  const pwConfirmErr = useInput(false);
  const pwErrMessage = useInput("")
  const history = useHistory()

  const password_check = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const signupHandler = () => {
    try {
      if(pwConfirm.value !== password.value || password.value === "" || pwConfirm.value === ""){
        pwErrMessage.setValue("비밀번호를 확인해주세요.")
        pwConfirmErr.setValue(true);
        passwordErr.setValue(true);
        return
      } if(!password_check.test(password.value)){
        pwErrMessage.setValue('비밀번호는 8자 이상이어야 하며, 대문자/특수문자를 포함해야 합니다.')
        pwConfirmErr.setValue(true);
        passwordErr.setValue(true);
        return
      } else {
        pwConfirmErr.setValue(false);
        passwordErr.setValue(false);
      }
      history.push('/');
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <AuthTemplate>
      <SignupBox>
        <h1>CHANGE PASSWORD</h1>
        <p>비밀번호 변경하기</p>
        <AuthFrom>
          <BoxInput
            {...password}
            errState={passwordErr}
            text={"비밀번호를 입력해주세요."}
            type={"password"}
            style={{marginTop: 14}}
          />
          <BoxInput
            {...pwConfirm}
            errState={pwConfirmErr}
            errText={pwErrMessage.value}
            text={"비밀번호 확인해주세요."}
            type={"password"}
            style={{marginTop: 14}}
          />
          <AuthButton
            style={{ marginTop: "50px" }}
            text={"CHANGE PASSWORD"}
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
