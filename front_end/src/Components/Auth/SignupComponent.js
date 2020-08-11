import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import useInput from '../../Common/Hooks/useInput';
import chackdInput from '../../Common/Hooks/chackdInput';
import AuthTemplate from '../Template/AuthTemplate/AuthTemplate';
import BoxInput from '../../Common/Input/BoxInput';
import ChackBox from '../../Common/ChackBox/ChackBox';
import AuthButton from '../../Common/Button/AuthButton';
import { signupState } from '../../store/modules/signup'
import { useDispatch } from 'react-redux';


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

const ChackBoxContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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

export default ({ alertState, register }) => {
  const email = useInput("");
  const emailErr = useInput(false);
  const name = useInput("");
  const nameErr = useInput(false);
  const password = useInput("");
  const passwordErr = useInput(false);
  const pwConfirm = useInput("");
  const pwConfirmErr = useInput(false);
  const pwErrMessage = useInput("")
  const fullChack = chackdInput(false);
  const privacy1 = chackdInput(false);
  const privacy2 = chackdInput(false);

  const history = useHistory()
  const dispatch = useDispatch();


  function email_check( email ) {
    var regex=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return (email !== '' && email !== 'undefined' && regex.test(email));
  }

  const password_check = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const signupHandler = async() => {
    try {
      if(email.value === "" || email_check( email.value ) !== true){
        emailErr.setValue(true);
        return
      } else {
        emailErr.setValue(false);
      } if(name.value === ""){
        nameErr.setValue(true);
        return
      } else {
        nameErr.setValue(false);
      } if(pwConfirm.value !== password.value || password.value === "" || pwConfirm.value === ""){
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
      } if(!privacy1.value || !privacy2.value){
        alertState.setValue(true)
        return
      }
      // register(name.value, email.value, password.value)
      dispatch(signupState({
        name: name.value,
        email: email.value,
        password: password.value
      }))
      return history.push(`/emailconfirm`);
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <AuthTemplate>
      <SignupBox>
        <h1>SIGN UP</h1>
        <p>회원가입</p>
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
            text={"비밀번호를 확인해주세요."}
            type={"password"}
            style={{marginTop: 14}}
          />
          <ChackBoxContainer>
            <ChackBox
              {...fullChack}
              id={"fullChack"}
              text={"전체동의"}
              fontWeight={true}
              style={{marginTop: "10px"}}
              onClick={() => {
                privacy1.setValue(!fullChack.value)
                privacy2.setValue(!fullChack.value)
              }}
            />
            <ChackBox
              {...privacy1}
              id={"privacy1"}
              text={"이용약관(필수)"}
              style={{marginTop: "10px"}}
              view={true}
            />
            <ChackBox
              {...privacy2}
              id={"privacy2"}
              text={"개인정보 수집 및 이용(필수)"}
              style={{marginTop: "10px"}}
              view={true}
            />
          </ChackBoxContainer>
          <AuthButton
            style={{ marginTop: "50px" }}
            text={"NEXT"}
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
