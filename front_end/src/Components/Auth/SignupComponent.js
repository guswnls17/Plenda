import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useInput from '../../Common/Hooks/useInput';
import chackdInput from '../../Common/Hooks/chackdInput';
import AuthTemplate from '../Template/AuthTemplate/AuthTemplate';
import BoxInput from '../../Common/Input/BoxInput';
import ChackBox from '../../Common/ChackBox/ChackBox';
import AuthButton from '../../Common/Button/AuthButton';


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

export default () => {
  const email = useInput("");
  const name = useInput("");
  const password = useInput("");
  const pwConfirm = useInput("");
  const fullChack = chackdInput(false);
  const privacy1 = chackdInput(false);
  const privacy2 = chackdInput(false);

  return (
    <AuthTemplate>
      <SignupBox>
        <h1>SIGN UP</h1>
        <p>회원가입</p>
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
          <BoxInput
            {...password}
            text={"비밀번호를 입력해주세요."}
            type={"password"}
            style={{marginTop: 14}}
          />
          <BoxInput
            {...pwConfirm}
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
            text={"SIGN UP"}
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
