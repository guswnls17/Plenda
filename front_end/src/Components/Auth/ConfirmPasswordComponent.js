import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import AuthButton from '../../Common/Button/AuthButton';
import AuthTemplate from '../Template/AuthTemplate/AuthTemplate';
import confirmLogo from '../../Images/confirmLogo.png';
import { useAlertState } from '../../Common/Context/MenuContext';



const SignupBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > img {
    width: 200px;
    object-fit: cover;
  }


  & > p {
    color: white;
    margin-top: 40px;
    line-height: 26px;
    text-align: center;
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
  const history = useHistory()
  const alertState = useAlertState()

  const ButtonHandler = () => {
    try {
      history.push("/");
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <AuthTemplate>
      <SignupBox>
        <img alt="" src={confirmLogo} />
        <p>등록하신 이메일로 인증메일이 전송되었습니다.<br/>이메일을 확인해주세요!</p>
        <AuthFrom>
          <AuthButton
            style={{ marginTop: "10px" }}
            text={"로그인 하러가기"}
            onClick={ButtonHandler}
          />
          <AuthLinkButton
            onClick={() => {
              alertState.setValue({
                boolean: true, 
                text: "등록하신 이메일로 인증메일이\n다시 전송되었습니다!"
              });
            }}
          >
            <Link to="#">
              <p>이메일을 받지 못하셨나요?<span>다시보내기</span></p>
            </Link>
          </AuthLinkButton>
        </AuthFrom>
      </SignupBox>
    </AuthTemplate>
  )
}
