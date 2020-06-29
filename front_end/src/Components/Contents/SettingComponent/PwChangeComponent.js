import React from 'react';
import styled from 'styled-components';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';
import LineInput from '../../../Common/Input/LineInput';
import useInput from '../../../Common/Hooks/useInput';

const ContentsBody = styled.div`
  padding: 30px 40px;

  @media (max-width: 1000px) {
    padding: 20px 20px;
  }

  & > a {
    display: block;

    & + a {
      margin-top: 10px;
    }

    & + div {
      margin-top: 10px;
    }
  }
`

const ContentsBox = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 40px 40px;

  @media (max-width: 1000px) {
    padding: 40px 20px;
  }


  & > div + div {
    margin-top: 50px;
  }
`

export default ({ AlertTextState, AlertState}) => {
  const password = useInput("")
  const newPassword = useInput("")
  const ConfirmPw = useInput("")

  const AlertHandler = () => {
    if(password.value === "" || newPassword.value === "" || ConfirmPw.value === ""){
      AlertState.setValue(true);
      AlertTextState.setValue(`빈 칸을 모두 채워주세요.`);
      return
    }
    if(newPassword.value !== ConfirmPw.value){
      AlertState.setValue(true);
      AlertTextState.setValue(`새로운 비밀번호가\n일치하지 않습니다.`);
      return
    }
  }

  return (
    <ContentsTemplate sidebarBoolean={false} >
      <ContentsHeader 
        title={"설정"} 
        subTitle={"비밀번호 변경하기"} 
        UploadButton= {{
          closetext: "취소",
          uploadtext: "변경",
          closeClick: "/setting",
          uploadClick: AlertHandler
        }} 
      />
      <ContentsBody>
        <ContentsBox>
          <LineInput
            {...password}
            title={"현재 비밀번호"}
            type={"password"}
            placeholder={"현재 비밀번호를 입력해주세요."}
          />
          <LineInput
            {...newPassword}
            title={"새로운 비밀번호"}
            type={"password"}
            placeholder={"변경하실 비밀번호를 입력해주세요."}
          />
          <LineInput
            {...ConfirmPw}
            title={"비밀번호 확인"}
            type={"password"}
            placeholder={"비밀번호를 다시 입력해주세요."}
          />
        </ContentsBox>
      </ContentsBody>
    </ContentsTemplate> 
  )
}